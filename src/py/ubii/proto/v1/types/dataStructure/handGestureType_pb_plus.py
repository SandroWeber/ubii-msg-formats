"""
@generated by codestare-proto-plus.  Do not edit manually!
"""
import proto
from proto import (
    Enum,
)


__protobuf__ = proto.module(
    package="ubii.proto.v1",
    manifest={
        "HandGestureType",
    }
)


class HandGestureType(Enum):
    REST = 0
    FINGERS_SPREAD = 1
    WAVE_IN = 2
    WAVE_OUT = 3
    FIST = 4
    DOUBLE_TAP = 5