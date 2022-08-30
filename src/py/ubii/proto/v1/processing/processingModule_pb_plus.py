"""
@generated by codestare-proto-plus.  Do not edit manually!
"""
from builtins import (
    bool,
    int,
    str,
)

from proto import (
    BOOL,
    ENUM,
    Enum,
    Field,
    INT32,
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
    package="ubii.proto.v1.processing",
    marshal="ubii.proto.v1",
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
            - 	:attr:`.free`

    Attributes:
        frequency (proto.fields.Field): :obj:`~proto.fields.Field` of type :obj:`~.Frequency` -- *oneof*
            :attr:`.mode`
        lockstep (proto.fields.Field): :obj:`~proto.fields.Field` of type :obj:`~.Lockstep` -- *oneof*
            :attr:`.mode`
        trigger_on_input (proto.fields.Field): :obj:`~proto.fields.Field` of type :obj:`~.TriggerOnInput`
            -- *oneof* :attr:`.mode`
        free (proto.fields.Field): :obj:`~proto.fields.Field` of type :obj:`~.Free` -- *oneof*
            :attr:`.mode`
    """

    class Frequency(Message):
        """
        Processing Callback is executed at a fixed time interval, with target frequency

        Attributes:
            hertz (proto.fields.Field): :obj:`~proto.fields.Field` of type
                :obj:`~proto.primitives.ProtoType.INT32`
        """

        hertz: int = Field(
            INT32,
            number=1,
        )
    

    class Lockstep(Message):
        """
        Processing Callback is executed when the master node sends a lockstep processing request

        Attributes:
            process_request_endpoint (proto.fields.Field): :obj:`~proto.fields.Field` of type
                :obj:`~proto.primitives.ProtoType.STRING`
        """

        process_request_endpoint: str = Field(
            STRING,
            number=1,
        )
    

    class TriggerOnInput(Message):
        """
        Processing Callback is executed when all or any of the input data changes

        Attributes:
            min_delay_ms (proto.fields.Field): :obj:`~proto.fields.Field` of type
                :obj:`~proto.primitives.ProtoType.INT32`
            all_inputs_need_update (proto.fields.Field): :obj:`~proto.fields.Field` of type
                :obj:`~proto.primitives.ProtoType.BOOL`
        """

        min_delay_ms: int = Field(
            INT32,
            number=1,
        )
        all_inputs_need_update: bool = Field(
            BOOL,
            number=2,
        )
    

    class Free(Message):
        """"""

    

    frequency: Frequency = Field(
        MESSAGE,
        number=1,
        message=Frequency,
        oneof='mode',
    )
    lockstep: Lockstep = Field(
        MESSAGE,
        number=2,
        message=Lockstep,
        oneof='mode',
    )
    trigger_on_input: TriggerOnInput = Field(
        MESSAGE,
        number=3,
        message=TriggerOnInput,
        oneof='mode',
    )
    free: Free = Field(
        MESSAGE,
        number=4,
        message=Free,
        oneof='mode',
    )


class ModuleIO(Message):
    """
    Attributes:
        internal_name (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        message_format (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        is_record_list (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.BOOL`
    """

    internal_name: str = Field(
        STRING,
        number=1,
    )
    message_format: str = Field(
        STRING,
        number=2,
    )
    is_record_list: bool = Field(
        BOOL,
        number=3,
    )


class ProcessingModule(Message):
    """
    Attributes:
        id (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        name (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        authors (proto.fields.RepeatedField): :obj:`~proto.fields.RepeatedField` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        tags (proto.fields.RepeatedField): :obj:`~proto.fields.RepeatedField` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        description (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        node_id (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        session_id (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        status (proto.fields.Field): :obj:`~proto.fields.Field` of type :obj:`~.Status`
        processing_mode (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~.ProcessingMode`
        inputs (proto.fields.RepeatedField): :obj:`~proto.fields.RepeatedField` of type
            :obj:`~.ModuleIO`
        outputs (proto.fields.RepeatedField): :obj:`~proto.fields.RepeatedField` of type
            :obj:`~.ModuleIO`
        language (proto.fields.Field): :obj:`~proto.fields.Field` of type :obj:`~.Language`
        on_processing_stringified (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        on_created_stringified (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        on_halted_stringified (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
        on_destroyed_stringified (proto.fields.Field): :obj:`~proto.fields.Field` of type
            :obj:`~proto.primitives.ProtoType.STRING`
    """

    class Status(Enum):
        INITIALIZED = 0
        """"""

        CREATED = 1
        """"""

        PROCESSING = 2
        """"""

        HALTED = 3
        """"""

        DESTROYED = 4
        """"""

    class Language(Enum):
        CPP = 0
        """"""

        PY = 1
        """"""

        JS = 2
        """"""

        CS = 3
        """"""

        JAVA = 4
        """"""

    id: str = Field(
        STRING,
        number=1,
    )
    name: str = Field(
        STRING,
        number=2,
    )
    authors: MutableSequence[str] = RepeatedField(
        STRING,
        number=3,
    )
    tags: MutableSequence[str] = RepeatedField(
        STRING,
        number=4,
    )
    description: str = Field(
        STRING,
        number=5,
    )
    node_id: str = Field(
        STRING,
        number=6,
    )
    session_id: str = Field(
        STRING,
        number=7,
    )
    status: Status = Field(
        ENUM,
        number=8,
        enum=Status,
    )
    processing_mode: ProcessingMode = Field(
        MESSAGE,
        number=9,
        message=ProcessingMode,
    )
    inputs: MutableSequence[ModuleIO] = RepeatedField(
        MESSAGE,
        number=10,
        message=ModuleIO,
    )
    outputs: MutableSequence[ModuleIO] = RepeatedField(
        MESSAGE,
        number=11,
        message=ModuleIO,
    )
    language: Language = Field(
        ENUM,
        number=12,
        enum=Language,
    )
    on_processing_stringified: str = Field(
        STRING,
        number=13,
    )
    on_created_stringified: str = Field(
        STRING,
        number=14,
    )
    on_halted_stringified: str = Field(
        STRING,
        number=15,
    )
    on_destroyed_stringified: str = Field(
        STRING,
        number=16,
    )


class ProcessingModuleList(Message):
    """
    Attributes:
        elements (proto.fields.RepeatedField): :obj:`~proto.fields.RepeatedField` of type
            :obj:`~.ProcessingModule`
    """

    elements: MutableSequence[ProcessingModule] = RepeatedField(
        MESSAGE,
        number=1,
        message=ProcessingModule,
    )

