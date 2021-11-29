"""
@generated by codestare-proto-plus.  Do not edit manually!
isort:skip_file
"""
import proto
from proto import (
    BOOL,
    Enum,
    Field,
    INT32,
    RepeatedField,
    STRING,
)

from proto.message import (
    Message,
)


__protobuf__ = proto.module(
    package="ubii.interact.v1",
    manifest={
        "ProcessingMode",
        "ModuleIO",
        "ProcessingModule",
        "ProcessingModuleList",
    }
)


class ProcessingMode(Message):
    class Frequency(Message):
        hertz = Field(
            INT32,
            number=1,
        )
    


    class Lockstep(Message):
        process_request_endpoint = Field(
            STRING,
            number=1,
        )
    


    class TriggerOnInput(Message):
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
    internal_name = Field(
        STRING,
        number=1,
    )
    message_format = Field(
        STRING,
        number=2,
    )



class ProcessingModule(Message):
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
    elements = RepeatedField(
        ProcessingModule,
        number=1,
    )

