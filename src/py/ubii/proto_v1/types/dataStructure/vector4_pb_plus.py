"""
@generated by codestare-proto-plus.  Do not edit manually!
isort:skip_file
"""
import proto
from proto import (
    DOUBLE,
    Field,
)

from proto.message import (
    Message,
)


__protobuf__ = proto.module(
    package="ubii.interact.v1",
    manifest={
        "Vector4",
    }
)


class Vector4(Message):
    x = Field(
        DOUBLE,
        number=1,
    )
    y = Field(
        DOUBLE,
        number=2,
    )
    z = Field(
        DOUBLE,
        number=3,
    )
    w = Field(
        DOUBLE,
        number=4,
    )

