# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/dataStructure/matrix3x2.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='proto/dataStructure/matrix3x2.proto',
  package='ubii.dataStructure',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=b'\n#proto/dataStructure/matrix3x2.proto\x12\x12ubii.dataStructure\"Y\n\tMatrix3x2\x12\x0b\n\x03m00\x18\x01 \x01(\x01\x12\x0b\n\x03m01\x18\x02 \x01(\x01\x12\x0b\n\x03m10\x18\x03 \x01(\x01\x12\x0b\n\x03m11\x18\x04 \x01(\x01\x12\x0b\n\x03m20\x18\x05 \x01(\x01\x12\x0b\n\x03m21\x18\x06 \x01(\x01\x62\x06proto3'
)




_MATRIX3X2 = _descriptor.Descriptor(
  name='Matrix3x2',
  full_name='ubii.dataStructure.Matrix3x2',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='m00', full_name='ubii.dataStructure.Matrix3x2.m00', index=0,
      number=1, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='m01', full_name='ubii.dataStructure.Matrix3x2.m01', index=1,
      number=2, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='m10', full_name='ubii.dataStructure.Matrix3x2.m10', index=2,
      number=3, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='m11', full_name='ubii.dataStructure.Matrix3x2.m11', index=3,
      number=4, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='m20', full_name='ubii.dataStructure.Matrix3x2.m20', index=4,
      number=5, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='m21', full_name='ubii.dataStructure.Matrix3x2.m21', index=5,
      number=6, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
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
  serialized_start=59,
  serialized_end=148,
)

DESCRIPTOR.message_types_by_name['Matrix3x2'] = _MATRIX3X2
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Matrix3x2 = _reflection.GeneratedProtocolMessageType('Matrix3x2', (_message.Message,), {
  'DESCRIPTOR' : _MATRIX3X2,
  '__module__' : 'proto.dataStructure.matrix3x2_pb2'
  # @@protoc_insertion_point(class_scope:ubii.dataStructure.Matrix3x2)
  })
_sym_db.RegisterMessage(Matrix3x2)


# @@protoc_insertion_point(module_scope)
