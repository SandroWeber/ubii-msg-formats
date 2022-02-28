import pytest

import ubii.proto as ub
from .conftest import compare

GENERATE_TEST_DATA = False

__protobuf__ = None


class TestProtoPlus:
    @pytest.fixture(scope='class')
    def mock_protobuf(self, request):
        if request.param:
            global __protobuf__
            __protobuf__ = ub.__protobuf__

        yield

        if request.param:
            __protobuf__ = None

    def test_from_bytes(self, message_data):
        data = message_data.plus_message
        compare(message_data.proto_message, data)

    def test_from_json(self, message_data):
        data = type(message_data.plus_message).from_json(message_data.test_data['json'])
        compare(message_data.proto_message, data)

    def test_from_dict(self, message_data):
        data = type(message_data.plus_message)(mapping=message_data.test_data['dict'])
        compare(message_data.proto_message, data)

    def test_to_dict(self, message_data):
        assert message_data.test_data['dict'] == (
            type(message_data.plus_message).to_dict(message_data.plus_message, **message_data.conversion_options)
        )

    def test_to_json(self, message_data):
        assert message_data.test_data['json'] == (
            type(message_data.plus_message).to_json(message_data.plus_message, **message_data.conversion_options)
        )

    @pytest.mark.parametrize('mock_protobuf', [
        pytest.param(True, id='correct __protobuf__'),
        pytest.param(False, id='wrong __protobuf__', marks=[pytest.mark.xfail]),
    ], indirect=True)
    def test_inheritance(self, mock_protobuf):
        class Empty(ub.Session, metaclass=ub.ProtoMeta):
            pass

        inherited = Empty()
        basic = ub.Session()

        assert type(inherited).serialize(inherited) == type(basic).serialize(basic)

        class WithAttributes(ub.Session, metaclass=ub.ProtoMeta):
            def foo(self):
                return "Foo"

        fancy = WithAttributes()

        assert type(fancy).serialize(fancy) == type(basic).serialize(basic)
        assert fancy.foo() == "Foo"

        class WeirdProcessing(ub.ProcessingModule, metaclass=ub.ProtoMeta):
            def process(self):
                return "Bar"

        processing = WeirdProcessing()
        inherited.processing_modules = [processing]
        basic.processing_modules = [ub.ProcessingModule()]

        assert type(inherited).serialize(inherited) == type(basic).serialize(basic)
        assert processing.process() == "Bar"
