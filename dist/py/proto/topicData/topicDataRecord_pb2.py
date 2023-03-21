# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/topicData/topicDataRecord.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from proto.topicData import timestamp_pb2 as proto_dot_topicData_dot_timestamp__pb2
from proto.dataStructure import lists_pb2 as proto_dot_dataStructure_dot_lists__pb2
from proto.dataStructure import vector2_pb2 as proto_dot_dataStructure_dot_vector2__pb2
from proto.dataStructure import vector3_pb2 as proto_dot_dataStructure_dot_vector3__pb2
from proto.dataStructure import vector4_pb2 as proto_dot_dataStructure_dot_vector4__pb2
from proto.dataStructure import quaternion_pb2 as proto_dot_dataStructure_dot_quaternion__pb2
from proto.dataStructure import matrix3x2_pb2 as proto_dot_dataStructure_dot_matrix3x2__pb2
from proto.dataStructure import matrix4x4_pb2 as proto_dot_dataStructure_dot_matrix4x4__pb2
from proto.dataStructure import color_pb2 as proto_dot_dataStructure_dot_color__pb2
from proto.dataStructure import touchEvent_pb2 as proto_dot_dataStructure_dot_touchEvent__pb2
from proto.dataStructure import keyEvent_pb2 as proto_dot_dataStructure_dot_keyEvent__pb2
from proto.dataStructure import mouseEvent_pb2 as proto_dot_dataStructure_dot_mouseEvent__pb2
from proto.dataStructure import myoEvent_pb2 as proto_dot_dataStructure_dot_myoEvent__pb2
from proto.dataStructure import pose2d_pb2 as proto_dot_dataStructure_dot_pose2d__pb2
from proto.dataStructure import pose3d_pb2 as proto_dot_dataStructure_dot_pose3d__pb2
from proto.dataStructure import object2d_pb2 as proto_dot_dataStructure_dot_object2d__pb2
from proto.dataStructure import object3d_pb2 as proto_dot_dataStructure_dot_object3d__pb2
from proto.dataStructure import image_pb2 as proto_dot_dataStructure_dot_image__pb2
from proto.sessions import session_pb2 as proto_dot_sessions_dot_session__pb2
from proto.devices import device_pb2 as proto_dot_devices_dot_device__pb2
from proto.devices import component_pb2 as proto_dot_devices_dot_component__pb2
from proto.processing import processingModule_pb2 as proto_dot_processing_dot_processingModule__pb2
from proto.general import error_pb2 as proto_dot_general_dot_error__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n%proto/topicData/topicDataRecord.proto\x12\x0eubii.topicData\x1a\x1fproto/topicData/timestamp.proto\x1a\x1fproto/dataStructure/lists.proto\x1a!proto/dataStructure/vector2.proto\x1a!proto/dataStructure/vector3.proto\x1a!proto/dataStructure/vector4.proto\x1a$proto/dataStructure/quaternion.proto\x1a#proto/dataStructure/matrix3x2.proto\x1a#proto/dataStructure/matrix4x4.proto\x1a\x1fproto/dataStructure/color.proto\x1a$proto/dataStructure/touchEvent.proto\x1a\"proto/dataStructure/keyEvent.proto\x1a$proto/dataStructure/mouseEvent.proto\x1a\"proto/dataStructure/myoEvent.proto\x1a proto/dataStructure/pose2d.proto\x1a proto/dataStructure/pose3d.proto\x1a\"proto/dataStructure/object2d.proto\x1a\"proto/dataStructure/object3d.proto\x1a\x1fproto/dataStructure/image.proto\x1a\x1cproto/sessions/session.proto\x1a\x1aproto/devices/device.proto\x1a\x1dproto/devices/component.proto\x1a\'proto/processing/processingModule.proto\x1a\x19proto/general/error.proto\"\x80\x10\n\x0fTopicDataRecord\x12\r\n\x05topic\x18\x01 \x01(\t\x12,\n\ttimestamp\x18\x02 \x01(\x0b\x32\x19.ubii.topicData.Timestamp\x12\x11\n\tclient_id\x18! \x01(\t\x12$\n\x05\x65rror\x18\' \x01(\x0b\x32\x13.ubii.general.ErrorH\x00\x12\x10\n\x06\x64ouble\x18\x03 \x01(\x01H\x00\x12\x0e\n\x04\x62ool\x18\x04 \x01(\x08H\x00\x12\x10\n\x06string\x18\x05 \x01(\tH\x00\x12\x0f\n\x05int32\x18\x17 \x01(\x05H\x00\x12\x0f\n\x05\x66loat\x18\x18 \x01(\x02H\x00\x12.\n\x07vector2\x18\x06 \x01(\x0b\x32\x1b.ubii.dataStructure.Vector2H\x00\x12\x37\n\x0cvector2_list\x18# \x01(\x0b\x32\x1f.ubii.dataStructure.Vector2ListH\x00\x12.\n\x07vector3\x18\x07 \x01(\x0b\x32\x1b.ubii.dataStructure.Vector3H\x00\x12\x37\n\x0cvector3_list\x18$ \x01(\x0b\x32\x1f.ubii.dataStructure.Vector3ListH\x00\x12.\n\x07vector4\x18\x08 \x01(\x0b\x32\x1b.ubii.dataStructure.Vector4H\x00\x12\x37\n\x0cvector4_list\x18% \x01(\x0b\x32\x1f.ubii.dataStructure.Vector4ListH\x00\x12\x34\n\nquaternion\x18\t \x01(\x0b\x32\x1e.ubii.dataStructure.QuaternionH\x00\x12\x39\n\x0fquaternion_list\x18& \x01(\x0b\x32\x1e.ubii.dataStructure.QuaternionH\x00\x12\x32\n\tmatrix3x2\x18\n \x01(\x0b\x32\x1d.ubii.dataStructure.Matrix3x2H\x00\x12\x32\n\tmatrix4x4\x18\x0b \x01(\x0b\x32\x1d.ubii.dataStructure.Matrix4x4H\x00\x12*\n\x05\x63olor\x18\x0c \x01(\x0b\x32\x19.ubii.dataStructure.ColorH\x00\x12\x35\n\x0btouch_event\x18\r \x01(\x0b\x32\x1e.ubii.dataStructure.TouchEventH\x00\x12>\n\x10touch_event_list\x18\" \x01(\x0b\x32\".ubii.dataStructure.TouchEventListH\x00\x12\x31\n\tkey_event\x18\x0e \x01(\x0b\x32\x1c.ubii.dataStructure.KeyEventH\x00\x12\x35\n\x0bmouse_event\x18\x0f \x01(\x0b\x32\x1e.ubii.dataStructure.MouseEventH\x00\x12\x31\n\tmyo_event\x18\x10 \x01(\x0b\x32\x1c.ubii.dataStructure.MyoEventH\x00\x12,\n\x06pose2D\x18\x11 \x01(\x0b\x32\x1a.ubii.dataStructure.Pose2DH\x00\x12,\n\x06pose3D\x18\x12 \x01(\x0b\x32\x1a.ubii.dataStructure.Pose3DH\x00\x12\x30\n\x08object2D\x18\x13 \x01(\x0b\x32\x1c.ubii.dataStructure.Object2DH\x00\x12\x30\n\x08object3D\x18\x14 \x01(\x0b\x32\x1c.ubii.dataStructure.Object3DH\x00\x12\x39\n\robject2D_list\x18\x15 \x01(\x0b\x32 .ubii.dataStructure.Object2DListH\x00\x12\x39\n\robject3D_list\x18\x16 \x01(\x0b\x32 .ubii.dataStructure.Object3DListH\x00\x12\x33\n\nint32_list\x18\x19 \x01(\x0b\x32\x1d.ubii.dataStructure.Int32ListH\x00\x12\x33\n\nfloat_list\x18\x1a \x01(\x0b\x32\x1d.ubii.dataStructure.FloatListH\x00\x12\x35\n\x0b\x64ouble_list\x18\x1b \x01(\x0b\x32\x1e.ubii.dataStructure.DoubleListH\x00\x12\x35\n\x0bstring_list\x18\x1c \x01(\x0b\x32\x1e.ubii.dataStructure.StringListH\x00\x12\x31\n\tbool_list\x18\x1d \x01(\x0b\x32\x1c.ubii.dataStructure.BoolListH\x00\x12.\n\x07image2D\x18\x1e \x01(\x0b\x32\x1b.ubii.dataStructure.Image2DH\x00\x12\x37\n\x0cimage2D_list\x18\x1f \x01(\x0b\x32\x1f.ubii.dataStructure.Image2DListH\x00\x12)\n\x07session\x18  \x01(\x0b\x32\x16.ubii.sessions.SessionH\x00\x12\x32\n\x0csession_list\x18, \x01(\x0b\x32\x1a.ubii.sessions.SessionListH\x00\x12&\n\x06\x64\x65vice\x18( \x01(\x0b\x32\x14.ubii.devices.DeviceH\x00\x12/\n\x0b\x64\x65vice_list\x18) \x01(\x0b\x32\x18.ubii.devices.DeviceListH\x00\x12,\n\tcomponent\x18* \x01(\x0b\x32\x17.ubii.devices.ComponentH\x00\x12\x35\n\x0e\x63omponent_list\x18+ \x01(\x0b\x32\x1b.ubii.devices.ComponentListH\x00\x42\x06\n\x04type\"H\n\x13TopicDataRecordList\x12\x31\n\x08\x65lements\x18\x01 \x03(\x0b\x32\x1f.ubii.topicData.TopicDataRecordb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'proto.topicData.topicDataRecord_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _globals['_TOPICDATARECORD']._serialized_start=852
  _globals['_TOPICDATARECORD']._serialized_end=2900
  _globals['_TOPICDATARECORDLIST']._serialized_start=2902
  _globals['_TOPICDATARECORDLIST']._serialized_end=2974
# @@protoc_insertion_point(module_scope)
