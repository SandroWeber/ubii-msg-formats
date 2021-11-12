import re
from itertools import product
from typing import Dict, TypedDict, Any, Type, overload, List
from collections import namedtuple

import pytest
from google.protobuf.wrappers_pb2 import DESCRIPTOR as wrapper_desc

from ubii.custom.proto import Translator, ITranslator, GPM, CONVERTIBLE
from ubii.util import import_type, MSG_TYPES
from proto.message import Message as ProtoPlusMessage

GENERATE_TEST_DATA = True


class TestData(TypedDict):
    dict: Dict[str, Any]
    bytes: bytes
    json: str


Data = namedtuple('Data', ['message', 'translator', 'test_data'])


@pytest.fixture
def data(get_json_data, write_json_data, make_file, request):
    msg_type, use_protoplus = request.param
    msg: Type[ProtoPlusMessage] = import_type(getattr(MSG_TYPES, msg_type))

    if use_protoplus:
        # noinspection PyPep8Naming
        class translator(ITranslator):
            _protopluswrapper = msg

            @classmethod
            def to_dict(cls, message: GPM, *args, **kwargs):
                return cls._protopluswrapper.to_dict(cls._protopluswrapper(message), *args, **kwargs)

            @classmethod
            def to_json(cls, message: GPM, *args, **kwargs):
                return cls._protopluswrapper.to_json(cls._protopluswrapper(message), *args, **kwargs)

            @classmethod
            def from_bytes(cls, obj, *args, **kwargs) -> GPM:
                return cls._protopluswrapper.pb(cls._protopluswrapper.deserialize(obj))

            @classmethod
            def from_json(cls, obj, *args, **kwargs) -> GPM:
                return cls._protopluswrapper.pb(cls._protopluswrapper.from_json(obj, *args, **kwargs))

            @classmethod
            def from_dict(cls, obj, *args, **kwargs) -> GPM:
                return cls._protopluswrapper.pb(cls._protopluswrapper(mapping=obj, *args, **kwargs))

            @classmethod
            def create(cls, *args, **kwargs) -> GPM:
                return cls._protopluswrapper.pb(cls._protopluswrapper(*args, **kwargs))

            @classmethod
            def validate(cls, message):
                raise NotImplementedError("Validation is not supported")


    else:
        translator = Translator.get_type(type(msg.pb(msg())))

    if GENERATE_TEST_DATA:
        file = make_file(f"{msg_type.lower()}.json")
        message = translator.create()
        data = {
            'dict': translator.to_dict(message, including_default_value_fields=True),
            'bytes': message.SerializeToString(deterministic=True).decode('utf-8'),
            'json': translator.to_json(message, including_default_value_fields=True)
        }
        write_json_data(file, data)

    test_data = get_json_data(msg_type)

    for path, data in test_data.items():
        data['bytes'] = data['bytes'].encode('utf-8')
        message = translator.create()
        message.FromString(data['bytes'])

        yield Data(translator=translator,
                   message=message,
                   test_data=data)


def testparams():
    for p in product(MSG_TYPES, [True, False]):
        msg_type, use_protoplus = p
        yield pytest.param(p,
                           id=f"{msg_type}, {'protoplus' if use_protoplus else 'custom'}")


@pytest.mark.parametrize('data', list(testparams()), indirect=True)
class TestTranslators:

    def test_from_bytes(self, data: Data):
        assert data.message == data.translator.from_bytes(data.test_data['bytes'])

    def test_from_json(self, data: Data):
        assert data.message == data.translator.from_json(data.test_data['json'])

    def test_from_dict(self, data: Data):
        assert data.message == data.translator.from_dict(data.test_data['dict'])

    def test_to_dict(self, data: Data):
        assert data.test_data['dict'] == data.translator.to_dict(data.message)

    def test_to_json(self, data: Data):
        assert data.test_data['json'] == data.translator.to_json(data.message)

    def test_convert_to_message(self, data: Data):
        list_values = list(data.test_data.values())

        # check all items individually
        assert all(data.message == data.translator.convert_to_message(obj) for obj in data.test_data.values())

        # also check if List conversion works
        assert [data.message] * len(list_values) == data.translator.convert_to_message(list_values)

    def test_create(self, data: Data):
        test_dict: dict = data.test_data['dict']
        assert data.message == data.translator.create(**test_dict)

    def test_validate(self, data: Data, request):
        if 'protoplus' in request.node.name:
            pytest.xfail("Validation is not supported for proto plus")

        validate = data.translator.validate

        assert data.message == validate(data.message)
        assert all(data.message == validate(data.test_data[serializable]) for serializable in ['dict', 'json'])
        snake_case_dict = {re.sub('([A-Z]+)', r'_\1', k).lower(): v for k, v in data.test_data['dict'].items()}
        assert data.message == validate(snake_case_dict)


