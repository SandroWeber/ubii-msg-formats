import json
from abc import ABCMeta
from functools import partial

try:
    from importlib.metadata import distribution, version, PackageNotFoundError
except ImportError:  # for Python<3.8
    from importlib_metadata import distribution, version, PackageNotFoundError

from json import JSONEncoder
from warnings import warn

import proto
from google.protobuf.json_format import MessageToDict as _MessageToDict
from google.protobuf.message import Message as GoogleProtoMessage
from more_itertools import take, pad_none
from proto.message import Message as ProtoMessage, MessageMeta
from proto.fields import Field as ProtoField

from ubii.proto_v1.types import (
    Client,
    ClientList,
    ButtonEventType,
    HandGestureType,
    Color,
    Image2D,
    Image2DList,
    KeyEvent,
    StringList,
    DoubleList,
    FloatList,
    BoolList,
    Int32List,
    Matrix3x2,
    Matrix4x4,
    MouseEvent,
    MyoEvent,
    Object2D,
    Object2DList,
    Object3D,
    Object3DList,
    Pose2D,
    Pose3D,
    Quaternion,
    QuaternionList,
    TouchEvent,
    TouchEventList,
    Vector2,
    Vector2List,
    Vector3,
    Vector3List,
    Vector4,
    Vector4List,
    Vector8,
    Vector8List,
    Component,
    ComponentList,
    Device,
    DeviceList,
    TopicDemux,
    TopicDemuxList,
    TopicMux,
    TopicMuxList,
    Error,
    ErrorList,
    Success,
    SuccessList,
    LockstepProcessingRequest,
    LockstepProcessingReply,
    ProcessingMode,
    ModuleIO,
    ProcessingModule,
    ProcessingModuleList,
    Constants,
    Server,
    Service,
    ServiceList,
    ServiceReply,
    ServiceRequest,
    TopicSubscription,
    SessionStatus,
    TopicInputMapping,
    TopicInputMappingList,
    TopicOutputMapping,
    TopicOutputMappingList,
    IOMapping,
    IOMappingList,
    Session,
    SessionList,
    Timestamp,
    TopicData,
    TopicDataRecord,
    TopicDataRecordList,
)

__proto_types__ = (
    "Client",
    "ClientList",
    "ButtonEventType",
    "HandGestureType",
    "Color",
    "Image2D",
    "Image2DList",
    "KeyEvent",
    "StringList",
    "DoubleList",
    "FloatList",
    "BoolList",
    "Int32List",
    "Matrix3x2",
    "Matrix4x4",
    "MouseEvent",
    "MyoEvent",
    "Object2D",
    "Object2DList",
    "Object3D",
    "Object3DList",
    "Pose2D",
    "Pose3D",
    "Quaternion",
    "QuaternionList",
    "TouchEvent",
    "TouchEventList",
    "Vector2",
    "Vector2List",
    "Vector3",
    "Vector3List",
    "Vector4",
    "Vector4List",
    "Vector8",
    "Vector8List",
    "Component",
    "ComponentList",
    "Device",
    "DeviceList",
    "TopicDemux",
    "TopicDemuxList",
    "TopicMux",
    "TopicMuxList",
    "Error",
    "ErrorList",
    "Success",
    "SuccessList",
    "LockstepProcessingRequest",
    "LockstepProcessingReply",
    "ProcessingMode",
    "ModuleIO",
    "ProcessingModule",
    "ProcessingModuleList",
    "Constants",
    "Server",
    "Service",
    "ServiceList",
    "ServiceReply",
    "ServiceRequest",
    "TopicSubscription",
    "SessionStatus",
    "TopicInputMapping",
    "TopicInputMappingList",
    "TopicOutputMapping",
    "TopicOutputMappingList",
    "IOMapping",
    "IOMappingList",
    "Session",
    "SessionList",
    "Timestamp",
    "TopicData",
    "TopicDataRecord",
    "TopicDataRecordList",
)

__all__ = __proto_types__ + (
    "ProtoMeta",
    "ProtoEncoder",
    "ProtoMessage",
    "ProtoField",
    "serialize",
)

_pkg_name = 'ubii-message-formats'
try:
    __version__ = version(_pkg_name)
    __proto_module__, __proto_package__ = take(2, pad_none(distribution(_pkg_name)
                                                           .read_text('proto_package.txt')
                                                           .split('='))
                                               )
except PackageNotFoundError as e:
    raise PackageNotFoundError(f"{_pkg_name} is not found, did the package name change?") from e
del _pkg_name

__protobuf__ = proto.module(
    package=__proto_package__ or __proto_module__,
    manifest=set(__proto_types__)
)

if __proto_package__ is None:
    warn("package is not set in proto_package.txt from ubii-message-formats."
         " This is unexpected, make sure you compiled the ubii-message-formats with a recent"
         " version of the proto-plus-plugin. For more info resort to the documentation of the"
         " proto-plus plugin")


class ProtoEncoder(JSONEncoder):
    """
    Custom encoder to convert Protobuf Messages and Proto-Plus Messages to valid json
    """
    format_options = {
        "use_integers_for_enums": True,
        "including_default_value_fields": True,
        "preserving_proto_field_name": False,
    }

    def default(self, o):
        if isinstance(o, ProtoMessage):
            return type(o).to_dict(o, **self.format_options)

        if isinstance(o, GoogleProtoMessage):
            return _MessageToDict(o, **self.format_options)

        return JSONEncoder.default(self, o)


class ProtoMeta(ABCMeta, MessageMeta):
    def __new__(mcs, name, bases, attrs):
        message_bases = [b for b in bases if isinstance(b, MessageMeta)]
        if len(message_bases) != 1:
            raise NotImplemented(f"Can't subclass with {len(message_bases)} Message parent classes")

        parent: MessageMeta = message_bases[0]
        cls = super().__new__(mcs, name, bases, {**attrs, **parent.meta.fields})
        cls.meta._pb = parent.pb()
        return cls


serialize = partial(json.dumps, cls=ProtoEncoder)
