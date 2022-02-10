"""
@generated by codestare-proto-plus.  Do not edit manually!
"""
import proto
from proto import (
    Field,
    RepeatedField,
    STRING,
)

from proto.message import (
    Message,
)


__protobuf__ = proto.module(
    package="ubii.proto.v1",
    manifest={
        "Service",
        "ServiceList",
    }
)


class Service(Message):
    """Generated from ubii/proto/v1/types/services/service.proto

    Attributes:
        topic (:obj:`Field`): :obj:`Field` of type :obj:`STRING`
        request_message_format (:obj:`Field`): :obj:`Field` of type :obj:`STRING`
        response_message_format (:obj:`Field`): :obj:`Field` of type :obj:`STRING`
        tags (:obj:`RepeatedField`): :obj:`RepeatedField` of type :obj:`STRING`
        description (:obj:`Field`): :obj:`Field` of type :obj:`STRING`

    """
    topic = Field(
        STRING,
        number=1,
    )
    request_message_format = Field(
        STRING,
        number=2,
    )
    response_message_format = Field(
        STRING,
        number=3,
    )
    tags = RepeatedField(
        STRING,
        number=4,
    )
    description = Field(
        STRING,
        number=5,
    )


class ServiceList(Message):
    """Generated from ubii/proto/v1/types/services/service.proto

    Attributes:
        elements (:obj:`RepeatedField`): :obj:`RepeatedField` of type :obj:`Service`

    """
    elements = RepeatedField(
        Service,
        number=1,
    )
