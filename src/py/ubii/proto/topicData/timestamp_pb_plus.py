"""
@generated by codestare-proto-plus.  Do not edit manually!
isort:skip_file
"""
import proto
import proto.message

class Timestamp(proto.message.Message):
    seconds = proto.Field(proto.INT64, number=1)
    nanos = proto.Field(proto.INT32, number=2)