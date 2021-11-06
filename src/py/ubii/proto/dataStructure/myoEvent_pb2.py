# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ubii/proto/dataStructure/myoEvent.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from ubii.proto.dataStructure import vector8_pb2 as ubii_dot_proto_dot_dataStructure_dot_vector8__pb2
from ubii.proto.dataStructure import vector3_pb2 as ubii_dot_proto_dot_dataStructure_dot_vector3__pb2
from ubii.proto.dataStructure import quaternion_pb2 as ubii_dot_proto_dot_dataStructure_dot_quaternion__pb2
from ubii.proto.dataStructure import handGestureType_pb2 as ubii_dot_proto_dot_dataStructure_dot_handGestureType__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='ubii/proto/dataStructure/myoEvent.proto',
  package='ubii.proto.dataStructure',
  syntax='proto3',
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\'ubii/proto/dataStructure/myoEvent.proto\x12\x18ubii.proto.dataStructure\x1a&ubii/proto/dataStructure/vector8.proto\x1a&ubii/proto/dataStructure/vector3.proto\x1a)ubii/proto/dataStructure/quaternion.proto\x1a.ubii/proto/dataStructure/handGestureType.proto\"\xa1\x02\n\x08MyoEvent\x12.\n\x03\x65mg\x18\x01 \x01(\x0b\x32!.ubii.proto.dataStructure.Vector8\x12\x39\n\x0borientation\x18\x02 \x01(\x0b\x32$.ubii.proto.dataStructure.Quaternion\x12\x34\n\tgyroscope\x18\x03 \x01(\x0b\x32!.ubii.proto.dataStructure.Vector3\x12\x38\n\raccelerometer\x18\x04 \x01(\x0b\x32!.ubii.proto.dataStructure.Vector3\x12:\n\x07gesture\x18\x05 \x01(\x0e\x32).ubii.proto.dataStructure.HandGestureTypeb\x06proto3'
  ,
  dependencies=[ubii_dot_proto_dot_dataStructure_dot_vector8__pb2.DESCRIPTOR,ubii_dot_proto_dot_dataStructure_dot_vector3__pb2.DESCRIPTOR,ubii_dot_proto_dot_dataStructure_dot_quaternion__pb2.DESCRIPTOR,ubii_dot_proto_dot_dataStructure_dot_handGestureType__pb2.DESCRIPTOR,])




_MYOEVENT = _descriptor.Descriptor(
  name='MyoEvent',
  full_name='ubii.proto.dataStructure.MyoEvent',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='emg', full_name='ubii.proto.dataStructure.MyoEvent.emg', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='orientation', full_name='ubii.proto.dataStructure.MyoEvent.orientation', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='gyroscope', full_name='ubii.proto.dataStructure.MyoEvent.gyroscope', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='accelerometer', full_name='ubii.proto.dataStructure.MyoEvent.accelerometer', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='gesture', full_name='ubii.proto.dataStructure.MyoEvent.gesture', index=4,
      number=5, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=241,
  serialized_end=530,
)

_MYOEVENT.fields_by_name['emg'].message_type = ubii_dot_proto_dot_dataStructure_dot_vector8__pb2._VECTOR8
_MYOEVENT.fields_by_name['orientation'].message_type = ubii_dot_proto_dot_dataStructure_dot_quaternion__pb2._QUATERNION
_MYOEVENT.fields_by_name['gyroscope'].message_type = ubii_dot_proto_dot_dataStructure_dot_vector3__pb2._VECTOR3
_MYOEVENT.fields_by_name['accelerometer'].message_type = ubii_dot_proto_dot_dataStructure_dot_vector3__pb2._VECTOR3
_MYOEVENT.fields_by_name['gesture'].enum_type = ubii_dot_proto_dot_dataStructure_dot_handGestureType__pb2._HANDGESTURETYPE
DESCRIPTOR.message_types_by_name['MyoEvent'] = _MYOEVENT
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

MyoEvent = _reflection.GeneratedProtocolMessageType('MyoEvent', (_message.Message,), {
  'DESCRIPTOR' : _MYOEVENT,
  '__module__' : 'ubii.proto.dataStructure.myoEvent_pb2'
  # @@protoc_insertion_point(class_scope:ubii.proto.dataStructure.MyoEvent)
  })
_sym_db.RegisterMessage(MyoEvent)


# @@protoc_insertion_point(module_scope)
