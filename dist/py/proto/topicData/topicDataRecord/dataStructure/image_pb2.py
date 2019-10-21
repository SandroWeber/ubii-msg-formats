# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/topicData/topicDataRecord/dataStructure/image.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='proto/topicData/topicDataRecord/dataStructure/image.proto',
  package='ubii.dataStructure',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n9proto/topicData/topicDataRecord/dataStructure/image.proto\x12\x12ubii.dataStructure\"\xa1\x01\n\x07Image2D\x12\r\n\x05width\x18\x01 \x01(\x05\x12\x0e\n\x06height\x18\x02 \x01(\x05\x12;\n\x0b\x64\x61ta_format\x18\x03 \x01(\x0e\x32&.ubii.dataStructure.Image2D.DataFormat\x12\x0c\n\x04\x64\x61ta\x18\x04 \x01(\x0c\",\n\nDataFormat\x12\t\n\x05GRAY8\x10\x00\x12\x08\n\x04RGB8\x10\x01\x12\t\n\x05RGBA8\x10\x02\"<\n\x0bImage2DList\x12-\n\x08\x65lements\x18\x01 \x03(\x0b\x32\x1b.ubii.dataStructure.Image2Db\x06proto3')
)



_IMAGE2D_DATAFORMAT = _descriptor.EnumDescriptor(
  name='DataFormat',
  full_name='ubii.dataStructure.Image2D.DataFormat',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='GRAY8', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='RGB8', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='RGBA8', index=2, number=2,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=199,
  serialized_end=243,
)
_sym_db.RegisterEnumDescriptor(_IMAGE2D_DATAFORMAT)


_IMAGE2D = _descriptor.Descriptor(
  name='Image2D',
  full_name='ubii.dataStructure.Image2D',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='width', full_name='ubii.dataStructure.Image2D.width', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='height', full_name='ubii.dataStructure.Image2D.height', index=1,
      number=2, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='data_format', full_name='ubii.dataStructure.Image2D.data_format', index=2,
      number=3, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='data', full_name='ubii.dataStructure.Image2D.data', index=3,
      number=4, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=_b(""),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _IMAGE2D_DATAFORMAT,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=82,
  serialized_end=243,
)


_IMAGE2DLIST = _descriptor.Descriptor(
  name='Image2DList',
  full_name='ubii.dataStructure.Image2DList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='elements', full_name='ubii.dataStructure.Image2DList.elements', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
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
  serialized_start=245,
  serialized_end=305,
)

_IMAGE2D.fields_by_name['data_format'].enum_type = _IMAGE2D_DATAFORMAT
_IMAGE2D_DATAFORMAT.containing_type = _IMAGE2D
_IMAGE2DLIST.fields_by_name['elements'].message_type = _IMAGE2D
DESCRIPTOR.message_types_by_name['Image2D'] = _IMAGE2D
DESCRIPTOR.message_types_by_name['Image2DList'] = _IMAGE2DLIST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Image2D = _reflection.GeneratedProtocolMessageType('Image2D', (_message.Message,), dict(
  DESCRIPTOR = _IMAGE2D,
  __module__ = 'proto.topicData.topicDataRecord.dataStructure.image_pb2'
  # @@protoc_insertion_point(class_scope:ubii.dataStructure.Image2D)
  ))
_sym_db.RegisterMessage(Image2D)

Image2DList = _reflection.GeneratedProtocolMessageType('Image2DList', (_message.Message,), dict(
  DESCRIPTOR = _IMAGE2DLIST,
  __module__ = 'proto.topicData.topicDataRecord.dataStructure.image_pb2'
  # @@protoc_insertion_point(class_scope:ubii.dataStructure.Image2DList)
  ))
_sym_db.RegisterMessage(Image2DList)


# @@protoc_insertion_point(module_scope)
