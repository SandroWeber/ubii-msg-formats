"""
@generated by codestare-proto-plus.  Do not edit manually!
"""
from builtins import (
    str,
)

from proto import (
    ENUM,
    Enum,
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
    Iterable,
)


__protobuf__ = module(
    package="ubii.proto.v1.devices",
    marshal="ubii.proto.v1",
    manifest={
        "Component",
        "ComponentList",
    }
)


class Component(Message):
    """
    Attributes:
        topic (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        message_format (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        io_type (proto.fields.Field): :obj:`~proto.fields.Field` of type :obj:`~.IOType`
        device_id (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        tags (proto.fields.RepeatedField): :obj:`~proto.fields.RepeatedField` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        description (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        id (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        name (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
    """

    class IOType(Enum):
        PUBLISHER = 0
        SUBSCRIBER = 1

    topic: str = Field(
        STRING,
        number=1,
    )
    message_format: str = Field(
        STRING,
        number=2,
    )
    io_type: IOType = Field(
        ENUM,
        number=3,
        enum=IOType,
    )
    device_id: str = Field(
        STRING,
        number=4,
    )
    tags: Iterable[str] = RepeatedField(
        STRING,
        number=5,
    )
    description: str = Field(
        STRING,
        number=6,
    )
    id: str = Field(
        STRING,
        number=7,
    )
    name: str = Field(
        STRING,
        number=8,
    )


class ComponentList(Message):
    """
    Attributes:
        elements (proto.fields.RepeatedField): :obj:`~proto.fields.RepeatedField` of type
            :obj:`~.Component`
    """

    elements: Iterable[Component] = RepeatedField(
        MESSAGE,
        number=1,
        message=Component,
    )

