"""
@generated by codestare-proto-plus.  Do not edit manually!
"""
from proto import (
    BOOL,
    Enum,
    Field,
    INT32,
    RepeatedField,
    STRING,
    module,
)

from proto.message import (
    Message,
)


__protobuf__ = module(
    package="ubii.proto.v1",
    manifest={
        "ProcessingMode",
        "ModuleIO",
        "ProcessingModule",
        "ProcessingModuleList",
    }
)


class ProcessingMode(Message):
    """
    .. admonition:: One Ofs

        This message defines the following *oneof* group[s]

        .. attribute:: mode

            - 	:attr:`.frequency`
            - 	:attr:`.lockstep`
            - 	:attr:`.trigger_on_input`

    Attributes:
        frequency (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~.Frequency` -- *oneof* :attr:`.mode`
        lockstep (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~.Lockstep` -- *oneof* :attr:`.mode`
        trigger_on_input (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~.TriggerOnInput` -- *oneof* :attr:`.mode`
    """

    class Frequency(Message):
        """
        Attributes:
            hertz (proto.fields.Field): :obj:`~proto.fields.Field` of type
                :obj:`~proto.primitives.ProtoType.INT32`
        """

        hertz = Field(
            INT32,
            number=1,
        )
    

    class Lockstep(Message):
        """
        Attributes:
            process_request_endpoint (proto.fields.Field): :obj:`~proto.fields.Field` of
                type :obj:`~proto.primitives.ProtoType.STRING`
        """

        process_request_endpoint = Field(
            STRING,
            number=1,
        )
    

    class TriggerOnInput(Message):
        """
        Attributes:
            min_delay_ms (proto.fields.Field): :obj:`~proto.fields.Field` of type
                :obj:`~proto.primitives.ProtoType.INT32`
            all_inputs_need_update (proto.fields.Field): :obj:`~proto.fields.Field` of type
                :obj:`~proto.primitives.ProtoType.BOOL`
        """

        min_delay_ms = Field(
            INT32,
            number=1,
        )
        all_inputs_need_update = Field(
            BOOL,
            number=2,
        )
    

    frequency = Field(
        Frequency,
        number=1,
        oneof='mode',
    )
    lockstep = Field(
        Lockstep,
        number=2,
        oneof='mode',
    )
    trigger_on_input = Field(
        TriggerOnInput,
        number=3,
        oneof='mode',
    )


class ModuleIO(Message):
    """
    Attributes:
        internal_name (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        message_format (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
    """

    internal_name = Field(
        STRING,
        number=1,
    )
    message_format = Field(
        STRING,
        number=2,
    )


class ProcessingModule(Message):
    """
    Attributes:
        id (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        name (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        authors (proto.fields.RepeatedField): :obj:`~proto.fields.RepeatedField` of
            type :obj:`~proto.primitives.ProtoType.STRING`
        tags (proto.fields.RepeatedField): :obj:`~proto.fields.RepeatedField` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        description (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        node_id (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        session_id (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        status (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~.Status`
        processing_mode (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~.ProcessingMode`
        inputs (proto.fields.RepeatedField): :obj:`~proto.fields.RepeatedField` of type
            :obj:`~.ModuleIO`
        outputs (proto.fields.RepeatedField): :obj:`~proto.fields.RepeatedField` of
            type :obj:`~.ModuleIO`
        language (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~.Language`
        on_processing_stringified (proto.fields.Field): :obj:`~proto.fields.Field` of
            type :obj:`~proto.primitives.ProtoType.STRING`
        on_created_stringified (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        on_halted_stringified (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        on_destroyed_stringified (proto.fields.Field): :obj:`~proto.fields.Field` of
            type :obj:`~proto.primitives.ProtoType.STRING`
    """

    class Status(Enum):
        INITIALIZED = 0
        CREATED = 1
        PROCESSING = 2
        HALTED = 3
        DESTROYED = 4

    class Language(Enum):
        CPP = 0
        PY = 1
        JS = 2
        CS = 3
        JAVA = 4

    id = Field(
        STRING,
        number=1,
    )
    name = Field(
        STRING,
        number=2,
    )
    authors = RepeatedField(
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
    node_id = Field(
        STRING,
        number=6,
    )
    session_id = Field(
        STRING,
        number=7,
    )
    status = Field(
        Status,
        number=8,
    )
    processing_mode = Field(
        ProcessingMode,
        number=9,
    )
    inputs = RepeatedField(
        ModuleIO,
        number=10,
    )
    outputs = RepeatedField(
        ModuleIO,
        number=11,
    )
    language = Field(
        Language,
        number=12,
    )
    on_processing_stringified = Field(
        STRING,
        number=13,
    )
    on_created_stringified = Field(
        STRING,
        number=14,
    )
    on_halted_stringified = Field(
        STRING,
        number=15,
    )
    on_destroyed_stringified = Field(
        STRING,
        number=16,
    )


class ProcessingModuleList(Message):
    """
    Attributes:
        elements (proto.fields.RepeatedField): :obj:`~proto.fields.RepeatedField` of
            type :obj:`~.ProcessingModule`
    """

    elements = RepeatedField(
        ProcessingModule,
        number=1,
    )

