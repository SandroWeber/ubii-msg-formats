"""
@generated by codestare-proto-plus.  Do not edit manually!
"""
from builtins import (
    float,
)

from proto import (
    DOUBLE,
    Field,
    MESSAGE,
    RepeatedField,
    module,
)

from proto.message import (
    Message,
)

from typing import (
    Iterable,
)


__protobuf__ = module(
    package="ubii.proto.v1.dataStructure",
    marshal="ubii.proto.v1",
    manifest={
        "Vector4",
        "Vector4List",
    }
)


class Vector4(Message):
    """
    Attributes:
        x (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.DOUBLE`
        y (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.DOUBLE`
        z (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.DOUBLE`
        w (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.DOUBLE`
    """

    x: float = Field(
        DOUBLE,
        number=1,
    )
    y: float = Field(
        DOUBLE,
        number=2,
    )
    z: float = Field(
        DOUBLE,
        number=3,
    )
    w: float = Field(
        DOUBLE,
        number=4,
    )


class Vector4List(Message):
    """
    Attributes:
        elements (proto.fields.RepeatedField): :obj:`~proto.fields.RepeatedField` of type
            :obj:`~.Vector4`
    """

    elements: Iterable[Vector4] = RepeatedField(
        MESSAGE,
        number=1,
        message=Vector4,
    )

