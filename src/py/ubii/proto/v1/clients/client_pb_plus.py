"""
@generated by codestare-proto-plus.  Do not edit manually!
"""
from builtins import (
    bool,
    float,
    str,
)

from proto import (
    BOOL,
    ENUM,
    Enum,
    FLOAT,
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
    Sequence,
)

from ubii.proto.v1.devices.device_pb_plus import (
    Device,
)

from ubii.proto.v1.processing.processingModule_pb_plus import (
    ProcessingModule,
)


__protobuf__ = module(
    package="ubii.proto.v1.clients",
    marshal="ubii.proto.v1",
    manifest={
        "Client",
        "ClientList",
    }
)


class Client(Message):
    """
    Attributes:
        id (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        name (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        devices (proto.fields.RepeatedField): :obj:`~proto.fields.RepeatedField` of type
            :obj:`~ubii.proto.v1.devices.device_pb_plus.Device`
        tags (proto.fields.RepeatedField): :obj:`~proto.fields.RepeatedField` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        description (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        processing_modules (proto.fields.RepeatedField): :obj:`~proto.fields.RepeatedField` of type
            :obj:`~ubii.proto.v1.processing.processingModule_pb_plus.ProcessingModule`
        is_dedicated_processing_node (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.BOOL`
        host_ip (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        metadata_json (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        state (proto.fields.Field): :obj:`~proto.fields.Field` of type :obj:`~.State`
        latency (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.FLOAT`
    """

    class State(Enum):
        ACTIVE = 0
        INACTIVE = 1
        UNAVAILABLE = 2

    id: str = Field(
        STRING,
        number=1,
    )
    name: str = Field(
        STRING,
        number=2,
    )
    devices: Sequence[Device] = RepeatedField(
        MESSAGE,
        number=3,
        message=Device,
    )
    tags: Sequence[str] = RepeatedField(
        STRING,
        number=4,
    )
    description: str = Field(
        STRING,
        number=5,
    )
    processing_modules: Sequence[ProcessingModule] = RepeatedField(
        MESSAGE,
        number=6,
        message=ProcessingModule,
    )
    is_dedicated_processing_node: bool = Field(
        BOOL,
        number=7,
    )
    host_ip: str = Field(
        STRING,
        number=8,
    )
    metadata_json: str = Field(
        STRING,
        number=9,
    )
    state: State = Field(
        ENUM,
        number=10,
        enum=State,
    )
    latency: float = Field(
        FLOAT,
        number=11,
    )


class ClientList(Message):
    """
    Attributes:
        elements (proto.fields.RepeatedField): :obj:`~proto.fields.RepeatedField` of type
            :obj:`~.Client`
    """

    elements: Sequence[Client] = RepeatedField(
        MESSAGE,
        number=1,
        message=Client,
    )

