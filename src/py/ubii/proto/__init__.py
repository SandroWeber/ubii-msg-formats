import json
from functools import wraps
from importlib.metadata import distribution
from json import JSONEncoder
from warnings import warn

import proto
from more_itertools import take, pad_none
from proto import _package_info
from proto._file_info import _FileInfo
from proto.message import Message as ProtoPlusMessage, MessageMeta
from google.protobuf.message import Message as ProtoMessage
from google.protobuf.json_format import MessageToDict

from ..proto_v1.types.clients import Client
from ..proto_v1.types.clients import ClientList
from ..proto_v1.types.dataStructure import Color
from ..proto_v1.types.dataStructure import Image2D
from ..proto_v1.types.dataStructure import Image2DList
from ..proto_v1.types.dataStructure import KeyEvent
from ..proto_v1.types.dataStructure import StringList
from ..proto_v1.types.dataStructure import DoubleList
from ..proto_v1.types.dataStructure import FloatList
from ..proto_v1.types.dataStructure import BoolList
from ..proto_v1.types.dataStructure import Int32List
from ..proto_v1.types.dataStructure import Matrix3x2
from ..proto_v1.types.dataStructure import Matrix4x4
from ..proto_v1.types.dataStructure import MouseEvent
from ..proto_v1.types.dataStructure import MyoEvent
from ..proto_v1.types.dataStructure import Object2D
from ..proto_v1.types.dataStructure import Object2DList
from ..proto_v1.types.dataStructure import Object3D
from ..proto_v1.types.dataStructure import Object3DList
from ..proto_v1.types.dataStructure import Pose2D
from ..proto_v1.types.dataStructure import Pose3D
from ..proto_v1.types.dataStructure import Quaternion
from ..proto_v1.types.dataStructure import TouchEvent
from ..proto_v1.types.dataStructure import TouchEventList
from ..proto_v1.types.dataStructure import Vector2
from ..proto_v1.types.dataStructure import Vector3
from ..proto_v1.types.dataStructure import Vector4
from ..proto_v1.types.dataStructure import Vector8
from ..proto_v1.types.devices import Component
from ..proto_v1.types.devices import ComponentList
from ..proto_v1.types.devices import Device
from ..proto_v1.types.devices import DeviceList
from ..proto_v1.types.devices import TopicDemux
from ..proto_v1.types.devices import TopicDemuxList
from ..proto_v1.types.devices import TopicMux
from ..proto_v1.types.devices import TopicMuxList
from ..proto_v1.types.general import Error
from ..proto_v1.types.general import ErrorList
from ..proto_v1.types.general import Success
from ..proto_v1.types.general import SuccessList
from ..proto_v1.types.processing import LockstepProcessingRequest
from ..proto_v1.types.processing import LockstepProcessingReply
from ..proto_v1.types.processing import ProcessingMode
from ..proto_v1.types.processing import ModuleIO
from ..proto_v1.types.processing import ProcessingModule
from ..proto_v1.types.processing import ProcessingModuleList
from ..proto_v1.types.servers import Server
from ..proto_v1.types.services import Service
from ..proto_v1.types.services import ServiceList
from ..proto_v1.types.services import ServiceReply
from ..proto_v1.types.services import ServiceRequest
from ..proto_v1.types.services.request import TopicSubscription
from ..proto_v1.types.sessions import TopicInputMapping
from ..proto_v1.types.sessions import TopicInputMappingList
from ..proto_v1.types.sessions import TopicOutputMapping
from ..proto_v1.types.sessions import TopicOutputMappingList
from ..proto_v1.types.sessions import IOMapping
from ..proto_v1.types.sessions import IOMappingList
from ..proto_v1.types.sessions import Session
from ..proto_v1.types.sessions import SessionList
from ..proto_v1.types.topicData import TopicData
from ..proto_v1.types.topicData import Timestamp
from ..proto_v1.types.topicData import TopicDataRecord
from ..proto_v1.types.topicData import TopicDataRecordList

__all__ = (
    "Client",
    "ClientList",
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
    "TouchEvent",
    "TouchEventList",
    "Vector2",
    "Vector3",
    "Vector4",
    "Vector8",
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
    "Server",
    "Service",
    "ServiceList",
    "ServiceReply",
    "ServiceRequest",
    "TopicSubscription",
    "TopicInputMapping",
    "TopicInputMappingList",
    "TopicOutputMapping",
    "TopicOutputMappingList",
    "IOMapping",
    "IOMappingList",
    "Session",
    "SessionList",
    "TopicData",
    "Timestamp",
    "TopicDataRecord",
    "TopicDataRecordList",
)

__proto_module__, __proto_package__ = take(2, pad_none(distribution('ubii-message-formats')
                                                       .read_text('proto_package.txt')
                                                       .split('='))
                                           )
__protobuf__ = proto.module(
    package=__proto_package__ or __proto_module__,
    manifest=set(__all__)
)

if __proto_package__ is None:
    warn("package is not set in proto_package.txt from ubii-message-formats."
         " This is unexpected, make sure you compiled the ubii-message-formats with a recent"
         " version of the proto-plus-plugin. For more info resort to the documentation of the"
         " ubii-message-formats plugin")


@wraps(json.dumps)
def serialize(*args, **kwargs):
    """
    This function calls `json.dumps` with `Translator.ProtoEncoder` as optional `cls` argument.
    This tells the json module to use this encoder when trying to serialize the message.
    """
    try:
        result = json.dumps(*args, cls=ProtoEncoder, **kwargs)
    except Exception as e:
        raise e
    else:
        return result


class ProtoEncoder(JSONEncoder):
    """
    Custom encoder to convert Protobuf Messages and Proto-Plus Messages to valid json
    """
    def default(self, o):
        if isinstance(o, ProtoPlusMessage):
            return type(o).to_dict(o)

        if isinstance(o, ProtoMessage):
            return MessageToDict(o, use_integers_for_enums=True, including_default_value_fields=True)

        return JSONEncoder.default(self, o)


class ProtoMeta(MessageMeta):

    def __new__(mcls, name, bases, attrs):
        message_bases = [b for b in bases if isinstance(b, MessageMeta)]
        if len(message_bases) != 1:
            raise NotImplemented(f"Can't subclass with {len(message_bases)} Message parent classes")

        parent: MessageMeta = message_bases[0]
        cls = super().__new__(mcls, name, bases, {**attrs, **parent.meta.fields})
        cls.meta._pb = parent.pb()
        return cls
