"""
@generated by codestare-proto-plus.  Do not edit manually!
"""
from proto import (
    Field,
    MESSAGE,
    module,
)

from proto.message import (
    Message,
)

from ubii.proto.v1.general.error_pb_plus import (
    Error,
)

from ubii.proto.v1.topicData.topicDataRecord_pb_plus import (
    TopicDataRecord,
    TopicDataRecordList,
)


__protobuf__ = module(
    package="ubii.proto.v1.topicData",
    marshal="ubii.proto.v1",
    manifest={
        "TopicData",
    }
)


class TopicData(Message):
    """
    .. admonition:: One Ofs

        This message defines the following *oneof* group[s]

        .. attribute:: type

            - 	:attr:`.topic_data_record`
            - 	:attr:`.topic_data_record_list`
            - 	:attr:`.error`

    Attributes:
        topic_data_record (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.topicData.topicDataRecord_pb_plus.TopicDataRecord` -- *oneof*
            :attr:`.type`
        topic_data_record_list (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.topicData.topicDataRecord_pb_plus.TopicDataRecordList` -- *oneof*
            :attr:`.type`
        error (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~ubii.proto.v1.general.error_pb_plus.Error` -- *oneof* :attr:`.type`
    """

    topic_data_record: TopicDataRecord = Field(
        MESSAGE,
        number=2,
        message=TopicDataRecord,
        oneof='type',
    )
    topic_data_record_list: TopicDataRecordList = Field(
        MESSAGE,
        number=3,
        message=TopicDataRecordList,
        oneof='type',
    )
    error: Error = Field(
        MESSAGE,
        number=4,
        message=Error,
        oneof='type',
    )

