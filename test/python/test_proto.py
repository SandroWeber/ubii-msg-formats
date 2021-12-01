import re
import pytest
from ubii.util import MSG_TYPES

GENERATE_TEST_DATA = True


@pytest.mark.parametrize('message_data', MSG_TYPES, indirect=True)
class TestTranslators:

    def test_from_bytes(self, message_data):
        wrapped = type(message_data.plus_message).pb(message_data.plus_message)
        assert message_data.proto_message == wrapped

    def test_from_json(self, message_data):
        assert message_data.message == message_data.proto_plus_type(message_data.test_data['json'])

    def test_from_dict(self, message_data):
        assert message_data.message == message_data.proto_plus_message.from_dict(message_data.test_data['dict'])

    def test_to_dict(self, message_data):
        assert message_data.test_data['dict'] == message_data.proto_plus_message.to_dict(message_data.message)

    def test_to_json(self, message_data):
        assert message_data.test_data['json'] == message_data.translator.to_json(message_data.proto_plus_message, **conversion_options)

    def test_convert_to_message(self, message_data):
        list_values = list(message_data.test_data.values())

        # check all items individually
        assert all(message_data.message == message_data.translator.convert_to_message(obj) for obj in message_data.test_data.values())

        # also check if List conversion works
        assert [message_data.message] * len(list_values) == message_data.translator.convert_to_message(list_values)

    def test_create(self, message_data):
        test_dict: dict = message_data.test_data['dict']
        assert message_data.message == message_data.translator.create(**test_dict)

    def test_validate(self, message_data, request):
        if 'protoplus' in request.node.name:
            pytest.xfail("Validation is not supported for proto plus")

        validate = message_data.translator.validate

        assert message_data.message == validate(message_data.message)
        assert all(message_data.message == validate(message_data.test_data[serializable]) for serializable in ['dict', 'json'])
        snake_case_dict = {re.sub('([A-Z]+)', r'_\1', k).lower(): v for k, v in message_data.test_data['dict'].items()}
        assert message_data.message == validate(snake_case_dict)


