"""
@generated by codestare-proto-plus.  Do not edit manually!
"""
from builtins import (
    int,
)

from proto import (
    ENUM,
    Field,
    INT32,
    module,
)

from proto.message import (
    Message,
)

from ubii.proto.v1.dataStructure.buttonEventType_pb_plus import (
    ButtonEventType,
)


__protobuf__ = module(
    package="ubii.proto.v1.dataStructure",
    marshal="ubii.proto.v1",
    manifest={
        "MouseEvent",
    }
)


class MouseEvent(Message):
    """
    Attributes:
        type (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.dataStructure.buttonEventType_pb_plus.ButtonEventType`
        button (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.INT32`
    """

    type: ButtonEventType = Field(
        ENUM,
        number=1,
        enum=ButtonEventType,
    )
    button: int = Field(
        INT32,
        number=2,
    )

