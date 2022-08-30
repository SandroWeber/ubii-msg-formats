"""
@generated by codestare-proto-plus.  Do not edit manually!
"""
from builtins import (
    bytes,
    int,
)

from proto import (
    BYTES,
    ENUM,
    Enum,
    Field,
    INT32,
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
        "Image2D",
        "Image2DList",
    }
)


class Image2D(Message):
    """
    Attributes:
        width (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.INT32`
        height (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.INT32`
        data_format (proto.fields.Field): :obj:`~proto.fields.Field` of type :obj:`~.DataFormat`
        data (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.BYTES`
    """

    class DataFormat(Enum):
        GRAY8 = 0
        """Blah"""

        RGB8 = 1
        """Blah"""

        RGBA8 = 2
        """Blah"""

    width: int = Field(
        INT32,
        number=1,
    )
    height: int = Field(
        INT32,
        number=2,
    )
    data_format: DataFormat = Field(
        ENUM,
        number=3,
        enum=DataFormat,
    )
    data: bytes = Field(
        BYTES,
        number=4,
    )


class Image2DList(Message):
    """
    Attributes:
        elements (proto.fields.RepeatedField): :obj:`~proto.fields.RepeatedField` of type
            :obj:`~.Image2D`
    """

    elements: MutableSequence[Image2D] = RepeatedField(
        MESSAGE,
        number=1,
        message=Image2D,
    )

