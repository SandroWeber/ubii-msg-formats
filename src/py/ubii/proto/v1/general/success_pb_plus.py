"""
@generated by codestare-proto-plus.  Do not edit manually!
"""
from proto import (
    Field,
    RepeatedField,
    STRING,
    module,
)

from proto.message import (
    Message,
)


__protobuf__ = module(
    package="ubii.proto.v1",
    manifest={
        "Success",
        "SuccessList",
    }
)


class Success(Message):
    """
    Attributes:
        title (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        message (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
    """

    title = Field(
        STRING,
        number=1,
    )
    message = Field(
        STRING,
        number=2,
    )


class SuccessList(Message):
    """
    Attributes:
        elements (proto.fields.RepeatedField): :obj:`~proto.fields.RepeatedField` of
            type :obj:`~.Success`
    """

    elements = RepeatedField(
        Success,
        number=1,
    )

