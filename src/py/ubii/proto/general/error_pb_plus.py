"""
@generated by codestare-proto-plus.  Do not edit manually!
isort:skip_file
"""
import proto
import proto.message

class Error(proto.message.Message):
    title = proto.Field(proto.STRING, number=1)
    message = proto.Field(proto.STRING, number=2)
    stack = proto.Field(proto.STRING, number=3)

class ErrorList(proto.message.Message):
    elements = proto.RepeatedField(Error, number=1)