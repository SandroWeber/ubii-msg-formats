import json
from functools import wraps
from json import JSONEncoder
from proto.message import Message as ProtoPlusMessage
from google.protobuf.message import Message as ProtoMessage
from google.protobuf.json_format import MessageToDict


@wraps(json.dumps)
def serialize(*args, **kwargs):
    """
    This function calls `json.dumps` with `Translator.ProtoEncoder` as optional `cls` argument.
    This tells the json module to use this encode when trying to serialize the message.
    """
    try:
        result = json.dumps(*args, cls=ProtoEncoder, **kwargs)
    except Exception as e:
        raise e
    else:
        return result


class ProtoEncoder(JSONEncoder):
    """
    Custom encoder to convert Protobuf Messages and Proto-Plus Messages to valid json
    """
    def default(self, o):
        if isinstance(o, ProtoPlusMessage):
            return type(o).to_dict(o)

        if isinstance(o, ProtoMessage):
            return MessageToDict(o, use_integers_for_enums=True, including_default_value_fields=True)

        return JSONEncoder.default(self, o)
