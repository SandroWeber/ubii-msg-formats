import dataclasses
import re

from typing import Dict, TypedDict, Any
import pytest
from ubii.custom.proto import Translators, Translator, Message


GENERATE_TEST_DATA = False


class TestData(TypedDict):
    dict: Dict[str, Any]
    bytes: bytes
    json: str


@dataclasses.dataclass
class Data:
    translator: Translator
    test_data: TestData
    message: Message


class TestTranslators:
    translators: Dict[str, Translator] = dataclasses.asdict(Translators)

    @pytest.fixture
    def data(self, get_json_data, write_json_data, make_file, request):
        msg_type: str = request.param
        translator = self.translators.get(msg_type)

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
            message = translator.proto()
            message.ParseFromString(data['bytes'])

            yield Data(translator=translator,
                       message=message,
                       test_data=data)

    @pytest.mark.parametrize('data', translators, indirect=True)
    def test_from_bytes(self, data: Data):
        assert data.message == data.translator.from_bytes(data.test_data['bytes'])

    @pytest.mark.parametrize('data', translators, indirect=True)
    def test_from_json(self, data: Data):
        assert data.message == data.translator.from_json(data.test_data['json'])

    @pytest.mark.parametrize('data', translators, indirect=True)
    def test_from_dict(self, data: Data):
        assert data.message == data.translator.from_dict(data.test_data['dict'])

    @pytest.mark.parametrize('data', translators, indirect=True)
    def test_to_dict(self, data: Data):
        assert data.test_data['dict'] == data.translator.to_dict(data.message)

    @pytest.mark.parametrize('data', translators, indirect=True)
    def test_to_json(self, data: Data):
        assert data.test_data['json'] == data.translator.to_json(data.message)

    @pytest.mark.parametrize('data', translators, indirect=True)
    def test_convert_to_message(self, data: Data):
        list_values = list(data.test_data.values())

        # check all items individually
        assert all(data.message == data.translator.convert_to_message(obj) for obj in data.test_data.values())

        # also check if List conversion works
        assert [data.message] * len(list_values) == data.translator.convert_to_message(list_values)

    @pytest.mark.parametrize('data', translators, indirect=True)
    def test_create(self, data: Data):
        test_dict: dict = data.test_data['dict']
        assert data.message == data.translator.create(**test_dict)

    @pytest.mark.parametrize('data', translators, indirect=True)
    def test_validate(self, data: Data):
        validate = data.translator.validate

        assert data.message == validate(data.message)
        assert all(data.message == validate(data.test_data[serializable]) for serializable in ['dict', 'json'])
        snake_case_dict = {re.sub('([A-Z]+)', r'_\1', k).lower(): v for k, v in data.test_data['dict'].items()}
        assert data.message == validate(snake_case_dict)


