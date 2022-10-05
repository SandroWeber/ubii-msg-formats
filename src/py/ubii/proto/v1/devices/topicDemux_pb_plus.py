"""
@generated by codestare-proto-plus.  Do not edit manually!
"""
from builtins import (
    str,
)

from proto import (
    Field,
    MESSAGE,
    RepeatedField,
    STRING,
    module,
)

from proto.message import (
    Message,
)

from typing import (
    MutableSequence,
)


__protobuf__ = module(
    package="ubii.proto.v1.devices",
    marshal="ubii.proto.v1",
    manifest={
        "TopicDemux",
        "TopicDemuxList",
    }
)


class TopicDemux(Message):
    """
    Attributes:
        id (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        name (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        data_type (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        output_topic_format (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
    """

    id: str = Field(
        STRING,
        number=1,
    )
    name: str = Field(
        STRING,
        number=2,
    )
    data_type: str = Field(
        STRING,
        number=3,
    )
    output_topic_format: str = Field(
        STRING,
        number=4,
    )


class TopicDemuxList(Message):
    """
    Attributes:
        elements (proto.fields.RepeatedField): :obj:`~proto.fields.RepeatedField` of type
            :obj:`~.TopicDemux`
    """

    elements: MutableSequence[TopicDemux] = RepeatedField(
        MESSAGE,
        number=1,
        message=TopicDemux,
    )

