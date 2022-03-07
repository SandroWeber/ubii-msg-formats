"""
@generated by codestare-proto-plus.  Do not edit manually!
"""
from proto import (
    Field,
    module,
)

from proto.message import (
    Message,
)

from ubii.proto.v1.clients.client_pb_plus import (
    Client,
    ClientList,
)

from ubii.proto.v1.dataStructure.lists_pb_plus import (
    StringList,
)

from ubii.proto.v1.devices.device_pb_plus import (
    Device,
    DeviceList,
)

from ubii.proto.v1.devices.topicDemux_pb_plus import (
    TopicDemux,
    TopicDemuxList,
)

from ubii.proto.v1.devices.topicMux_pb_plus import (
    TopicMux,
    TopicMuxList,
)

from ubii.proto.v1.general.error_pb_plus import (
    Error,
)

from ubii.proto.v1.general.success_pb_plus import (
    Success,
)

from ubii.proto.v1.processing.lockstepProcessing_pb_plus import (
    LockstepProcessingReply,
)

from ubii.proto.v1.processing.processingModule_pb_plus import (
    ProcessingModule,
    ProcessingModuleList,
)

from ubii.proto.v1.servers.server_pb_plus import (
    Server,
)

from ubii.proto.v1.services.service_pb_plus import (
    Service,
    ServiceList,
)

from ubii.proto.v1.sessions.session_pb_plus import (
    Session,
    SessionList,
)


__protobuf__ = module(
    package="ubii.proto.v1",
    manifest={
        "ServiceReply",
    }
)


class ServiceReply(Message):
    """
    .. admonition:: One Ofs

        This message defines the following *oneof* group[s]

        .. attribute:: type

            - 	:attr:`.success`
            - 	:attr:`.error`
            - 	:attr:`.client`
            - 	:attr:`.device`
            - 	:attr:`.server`
            - 	:attr:`.session`
            - 	:attr:`.session_list`
            - 	:attr:`.processing_module`
            - 	:attr:`.processing_module_list`
            - 	:attr:`.string_list`
            - 	:attr:`.topic_mux`
            - 	:attr:`.topic_mux_list`
            - 	:attr:`.topic_demux`
            - 	:attr:`.topic_demux_list`
            - 	:attr:`.client_list`
            - 	:attr:`.device_list`
            - 	:attr:`.service`
            - 	:attr:`.service_list`
            - 	:attr:`.lockstep_processing_reply`

    Attributes:
        success (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.general.success_pb_plus.Success` -- *oneof*
            :attr:`.type`
        error (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.general.error_pb_plus.Error` -- *oneof*
            :attr:`.type`
        client (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.clients.client_pb_plus.Client` -- *oneof*
            :attr:`.type`
        device (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.devices.device_pb_plus.Device` -- *oneof*
            :attr:`.type`
        server (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.servers.server_pb_plus.Server` -- *oneof*
            :attr:`.type`
        session (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.sessions.session_pb_plus.Session` -- *oneof*
            :attr:`.type`
        session_list (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.sessions.session_pb_plus.SessionList` -- *oneof*
            :attr:`.type`
        processing_module (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.processing.processingModule_pb_plus.ProcessingModule`
            -- *oneof* :attr:`.type`
        processing_module_list (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.processing.processingModule_pb_plus.ProcessingModuleList` -- *oneof* :attr:`.type`
        string_list (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.dataStructure.lists_pb_plus.StringList` -- *oneof*
            :attr:`.type`
        topic_mux (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.devices.topicMux_pb_plus.TopicMux` -- *oneof*
            :attr:`.type`
        topic_mux_list (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.devices.topicMux_pb_plus.TopicMuxList` -- *oneof*
            :attr:`.type`
        topic_demux (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.devices.topicDemux_pb_plus.TopicDemux` -- *oneof*
            :attr:`.type`
        topic_demux_list (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.devices.topicDemux_pb_plus.TopicDemuxList` -- *oneof*
            :attr:`.type`
        client_list (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.clients.client_pb_plus.ClientList` -- *oneof*
            :attr:`.type`
        device_list (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.devices.device_pb_plus.DeviceList` -- *oneof*
            :attr:`.type`
        service (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.services.service_pb_plus.Service` -- *oneof*
            :attr:`.type`
        service_list (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.services.service_pb_plus.ServiceList` -- *oneof*
            :attr:`.type`
        lockstep_processing_reply (proto.fields.Field): :obj:`~proto.fields.Field` of
            type
            :obj:`~ubii.proto.v1.processing.lockstepProcessing_pb_plus.LockstepProcessingReply` -- *oneof* :attr:`.type`
    """

    success = Field(
        Success,
        number=1,
        oneof='type',
    )
    error = Field(
        Error,
        number=2,
        oneof='type',
    )
    client = Field(
        Client,
        number=3,
        oneof='type',
    )
    device = Field(
        Device,
        number=4,
        oneof='type',
    )
    server = Field(
        Server,
        number=5,
        oneof='type',
    )
    session = Field(
        Session,
        number=6,
        oneof='type',
    )
    session_list = Field(
        SessionList,
        number=7,
        oneof='type',
    )
    processing_module = Field(
        ProcessingModule,
        number=8,
        oneof='type',
    )
    processing_module_list = Field(
        ProcessingModuleList,
        number=9,
        oneof='type',
    )
    string_list = Field(
        StringList,
        number=10,
        oneof='type',
    )
    topic_mux = Field(
        TopicMux,
        number=11,
        oneof='type',
    )
    topic_mux_list = Field(
        TopicMuxList,
        number=12,
        oneof='type',
    )
    topic_demux = Field(
        TopicDemux,
        number=13,
        oneof='type',
    )
    topic_demux_list = Field(
        TopicDemuxList,
        number=14,
        oneof='type',
    )
    client_list = Field(
        ClientList,
        number=15,
        oneof='type',
    )
    device_list = Field(
        DeviceList,
        number=16,
        oneof='type',
    )
    service = Field(
        Service,
        number=17,
        oneof='type',
    )
    service_list = Field(
        ServiceList,
        number=18,
        oneof='type',
    )
    lockstep_processing_reply = Field(
        LockstepProcessingReply,
        number=19,
        oneof='type',
    )

