import contextlib
import functools
import json
import logging
import os
import pathlib
import types
from typing import Type, NamedTuple, TypedDict, Dict, Any

import pytest
from google.protobuf.message import Message as ProtoMessage
from proto.message import Message as ProtoPlusMessage

log = logging.getLogger('pytest-ubii-msg-formats')


def pytest_addoption(parser, pluginmanager):
    parser.addini(name='path_extension',
                  default='.',
                  help='Directory to append to path to import additional protobuf packages')
    parser.addini(name='test_proto_module',
                  default='ubii.proto.v1',
                  help='Name for proto-plus package that needs to be tested')
    parser.addini(name='test_util_module',
                  default='ubii.proto.util',
                  help='Name for utility package that needs to be tested')
    parser.addini(name='baseline_proto_module',
                  default='ubii.proto_baseline',
                  help='Name for generic protobuf package as baseline')
    parser.addini(name='data_dir',
                  default='./data',
                  help='Relative path to directory with test data.')


@pytest.fixture(scope='session')
def data_dir(pytestconfig) -> pathlib.Path:
    data_dir = _get_data_dir(pytestconfig)
    assert data_dir.exists(), f"Wrong data dir: {data_dir.resolve()} does not exist."
    yield data_dir


def write_json(file, data, indent=4, sort_keys=True, **kwargs):
    with file.open('w', encoding='utf-8') as stream:
        json.dump(data, fp=stream, sort_keys=sort_keys, indent=indent, **kwargs)


def load_json(file):
    with file.open('r') as f:
        try:
            return json.load(fp=f)
        except json.JSONDecodeError:
            return {}


def load_data_for_type(data_dir, msg_type):
    files = data_dir.glob(f'{msg_type.lower()}.json')
    return {f: load_json(f) for f in files}


def _get_data_dir(pytestconfig):
    data_dir_config_value = pytestconfig.getini('data_dir')
    return pytestconfig.rootpath / data_dir_config_value


def _get_msg_types(data_dir):
    constants = load_data_for_type(data_dir, 'constants')
    assert len(constants) == 1, f"Don't know which constants to choose, {len(constants)} specs found."
    return list(constants.values())[0]['MSG_TYPES']


@pytest.fixture(scope='session')
def make_file(data_dir):
    def touch(path: os.PathLike):
        path = pathlib.Path(path)
        try:
            relative = path.relative_to(data_dir)
        except ValueError as e:
            relative = None

        if not relative:
            path = data_dir / path

        path.touch(exist_ok=True)
        return path

    yield touch


@pytest.fixture(scope='session')
def get_json_data(data_dir):
    yield functools.partial(load_data_for_type, data_dir)


@pytest.fixture
def write_json_data():
    backup = {}

    def write(file, data):
        nonlocal backup
        backup[file] = load_json(file)
        write_json(file, data)
        del backup[file]

    yield write

    if backup:
        for file, contents in backup.items():
            write_json(file, contents)


@pytest.fixture
def import_type(import_proto_modules):
    from ubii.proto.util import import_type as _import_type

    # test_module = import_proto_modules['test']
    util_module = import_proto_modules['util']
    root_module = import_proto_modules['root']
    _import_type = util_module.import_type

    @contextlib.contextmanager
    def mock_proto_module(module: types.ModuleType):
        old = root_module.__proto_module__
        root_module.__proto_module__ = module.__name__
        yield
        root_module.__proto_module__ = old

    def _import(data_type: str, module: types.ModuleType, reimport=True):
        with mock_proto_module(module):
            if data_type.startswith('ubii.'):
                return _import_type(data_type, reimport=reimport)
            else:
                pytest.skip(f"Not testing primitive type {data_type!r}")
                return

    return _import


@pytest.fixture(scope='session')
def message_types(data_dir):
    yield _get_msg_types(data_dir)


class TestData(TypedDict):
    dict: Dict[str, Any]
    bytes: bytes
    json: str


class Data(NamedTuple):
    proto_message: ProtoMessage
    plus_message: ProtoPlusMessage
    conversion_options: dict
    test_data: TestData


@pytest.fixture
def message_data(
        import_proto_modules,
        message_types,
        import_type,
        get_json_data,
        write_json_data,
        make_file,
        request
):
    conversion_options = {
        'including_default_value_fields': True,
        'use_integers_for_enums': True,
        'preserving_proto_field_name': True,
    }

    msg_type = request.param
    data_file = pathlib.Path(f"{msg_type.lower()}.json")
    proto_plus_type: Type[ProtoPlusMessage] = import_type(
        message_types[msg_type], import_proto_modules['test']
    )
    basic_msg_type: Type[ProtoMessage] = import_type(message_types[msg_type], import_proto_modules['baseline'])

    if getattr(request.module, 'GENERATE_TEST_DATA', False):
        from google.protobuf.json_format import MessageToDict, MessageToJson

        file = make_file(data_file)
        message = basic_msg_type()
        data = {
            'dict': MessageToDict(message, **conversion_options),
            'json': MessageToJson(message, **conversion_options),
            'bytes': message.SerializeToString(deterministic=True).decode('utf-8'),
        }
        write_json_data(file, data)

    test_data = get_json_data(msg_type)

    for path, data in test_data.items():
        data['bytes'] = data['bytes'].encode('utf-8')
        proto_message = basic_msg_type.FromString(data['bytes'])
        plus_message = proto_plus_type.deserialize(data['bytes'])

        yield Data(proto_message=proto_message,
                   plus_message=plus_message,
                   conversion_options=conversion_options,
                   test_data=data)


@pytest.fixture(scope='session', autouse=True)
def import_proto_modules(pytestconfig):
    include_path = pytestconfig.getini('path_extension')
    include_path = pytestconfig.rootpath / include_path
    assert include_path.exists(), f"Wrong path to include for proto packages: {include_path.resolve()} does not exist."
    import sys

    sys.path.insert(0, os.path.abspath(include_path))

    pkgs = {
        'baseline': pytestconfig.getini('baseline_proto_module'),
        'test': pytestconfig.getini('test_proto_module'),
        'util': pytestconfig.getini('test_util_module'),
    }

    pkgs['root'] = pkgs['util'].rsplit('.', maxsplit=1)[0]

    import importlib
    imported = {}

    for key, name in pkgs.items():
        try:
            imported[key] = importlib.import_module(name)
        except ImportError as e:
            raise ImportError(f"Could not import required package {name}") from e

    yield imported


def pytest_generate_tests(metafunc):
    data_dir = _get_data_dir(metafunc.config)

    autoparametrize = {
        'message_data': _get_msg_types(data_dir)
    }

    for fixture in autoparametrize:
        if fixture in metafunc.fixturenames:
            metafunc.parametrize(fixture, autoparametrize[fixture], indirect=[fixture])


def compare(baseline: ProtoMessage, test: ProtoPlusMessage):
    # hide helper function from pytest traceback
    __tracebackhide__ = True
    assert baseline.SerializeToString() == type(test).serialize(test)
