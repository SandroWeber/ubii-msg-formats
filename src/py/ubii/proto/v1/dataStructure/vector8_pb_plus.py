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
    MutableSequence,
)


__protobuf__ = module(
    package="ubii.proto.v1.dataStructure",
    marshal="ubii.proto.v1",
    manifest={
        "Vector8",
        "Vector8List",
    }
)


class Vector8(Message):
    """
    Attributes:
        v0 (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.DOUBLE`
        v1 (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.DOUBLE`
        v2 (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.DOUBLE`
        v3 (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.DOUBLE`
        v4 (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.DOUBLE`
        v5 (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.DOUBLE`
        v6 (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.DOUBLE`
        v7 (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.DOUBLE`
    """

    v0: float = Field(
        DOUBLE,
        number=1,
    )
    v1: float = Field(
        DOUBLE,
        number=2,
    )
    v2: float = Field(
        DOUBLE,
        number=3,
    )
    v3: float = Field(
        DOUBLE,
        number=4,
    )
    v4: float = Field(
        DOUBLE,
        number=5,
    )
    v5: float = Field(
        DOUBLE,
        number=6,
    )
    v6: float = Field(
        DOUBLE,
        number=7,
    )
    v7: float = Field(
        DOUBLE,
        number=8,
    )


class Vector8List(Message):
    """
    Attributes:
        elements (proto.fields.RepeatedField): :obj:`~proto.fields.RepeatedField` of type
            :obj:`~.Vector8`
    """

    elements: MutableSequence[Vector8] = RepeatedField(
        MESSAGE,
        number=1,
        message=Vector8,
    )

