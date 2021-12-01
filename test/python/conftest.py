import os
from contextlib import contextmanager
from types import ModuleType
from typing import Type, NamedTuple, TypedDict, Dict, Any

import pytest
import json
from pathlib import Path


def pytest_addoption(parser, pluginmanager):
    parser.addini(name='data_dir',
                  default='./data',
                  help='Relative path to directory with test data.')


@pytest.fixture(scope='session')
def data_dir(pytestconfig) -> Path:
    data_dir_config_value = pytestconfig.getini('data_dir')
    data_dir = pytestconfig.rootpath / data_dir_config_value
    assert data_dir.exists(), f"Wrong data dir: {data_dir.resolve()} does not exist."
    yield data_dir


def write_json(file, data, indent=4, sort_keys=True, **kwargs):
    with file.open('w', encoding='utf-8') as stream:
        json.dump(data, fp=stream, sort_keys=sort_keys, indent=indent, **kwargs)


def load_json(file):
    with file.open('r') as f:
        try:
            return json.load(fp=f)
        except json.JSONDecodeError as e:
            return {}


@pytest.fixture(scope='session')
def make_file(data_dir):
    def touch(path: os.PathLike):
        path = Path(path)
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

    def load_data_for_type(msg_type):
        files = data_dir.glob(f'{msg_type.lower()}.json')
        return {f: load_json(f) for f in files}

    yield load_data_for_type


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
def mock_proto_module():
    @contextmanager
    def ctx_manager(module: ModuleType):
        import ubii.proto
        old = ubii.proto.__proto_module__
        ubii.proto.__proto_module__ = module.__name__
        yield
        ubii.proto.__proto_module__ = old

    return ctx_manager

@pytest.fixture
def import_type(mock_proto_module):
    from ubii.util import import_type as _import_type
    import google.protobuf.wrappers_pb2 as wrappers

    def _import(data_type: str, module: ModuleType, force_wrapper=False):
        with mock_proto_module(module):
            if data_type.startswith('ubii.') or force_wrapper:
                return _import_type(data_type, reimport=True)
            else:
                return getattr(wrappers, f"{data_type.title()}Value")

    return _import


@pytest.fixture
def message_data(import_type, get_json_data, write_json_data, make_file, request):
    from ubii.proto_v1 import types as proto_plus
    from ubii.proto_v2 import types as proto_basic
    from proto.message import Message as ProtoPlusMessage
    from google.protobuf.message import Message as ProtoMessage
    from ubii.util import MSG_TYPES

    conversion_options = {
        'including_default_value_fields': True,
        'use_integers_for_enums': True,
    }

    class TestData(TypedDict):
        dict: Dict[str, Any]
        bytes: bytes
        json: str

    class Data(NamedTuple):
        proto_message: ProtoMessage
        plus_message: ProtoPlusMessage
        conversion_options: dict
        test_data: TestData

    msg_type = request.param
    data_file = Path(f"{msg_type.lower()}.json")
    basic_msg_type: Type[ProtoMessage] = import_type(getattr(MSG_TYPES, msg_type), proto_basic)
    proto_plus_type: Type[ProtoPlusMessage] = import_type(getattr(MSG_TYPES, msg_type), proto_plus, force_wrapper=True)

    if getattr(request.module, 'GENERATE_TEST_DATA', False):
        from google.protobuf.json_format import MessageToDict, MessageToJson

        file = make_file(data_file)
        message = basic_msg_type()
        data = {
            'dict': MessageToDict(message, **conversion_options),
            'bytes': message.SerializeToString(deterministic=True).decode('utf-8'),
            'json': MessageToJson(message, **conversion_options)
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
