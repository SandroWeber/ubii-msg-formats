# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/dataStructure/lists.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='proto/dataStructure/lists.proto',
  package='ubii.dataStructure',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n\x1fproto/dataStructure/lists.proto\x12\x12ubii.dataStructure\"\x1e\n\nStringList\x12\x10\n\x08\x65lements\x18\x01 \x03(\t\"\x1e\n\nDoubleList\x12\x10\n\x08\x65lements\x18\x01 \x03(\x01\"\x1d\n\tFloatList\x12\x10\n\x08\x65lements\x18\x01 \x03(\x02\"\x1c\n\x08\x42oolList\x12\x10\n\x08\x65lements\x18\x01 \x03(\x08\"\x1d\n\tInt32List\x12\x10\n\x08\x65lements\x18\x01 \x03(\x05\x62\x06proto3')
)




_STRINGLIST = _descriptor.Descriptor(
  name='StringList',
  full_name='ubii.dataStructure.StringList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='elements', full_name='ubii.dataStructure.StringList.elements', index=0,
      number=1, type=9, cpp_type=9, label=3,
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
  serialized_start=55,
  serialized_end=85,
)


_DOUBLELIST = _descriptor.Descriptor(
  name='DoubleList',
  full_name='ubii.dataStructure.DoubleList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='elements', full_name='ubii.dataStructure.DoubleList.elements', index=0,
      number=1, type=1, cpp_type=5, label=3,
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
  serialized_start=87,
  serialized_end=117,
)


_FLOATLIST = _descriptor.Descriptor(
  name='FloatList',
  full_name='ubii.dataStructure.FloatList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='elements', full_name='ubii.dataStructure.FloatList.elements', index=0,
      number=1, type=2, cpp_type=6, label=3,
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
  serialized_start=119,
  serialized_end=148,
)


_BOOLLIST = _descriptor.Descriptor(
  name='BoolList',
  full_name='ubii.dataStructure.BoolList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='elements', full_name='ubii.dataStructure.BoolList.elements', index=0,
      number=1, type=8, cpp_type=7, label=3,
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
  serialized_start=150,
  serialized_end=178,
)


_INT32LIST = _descriptor.Descriptor(
  name='Int32List',
  full_name='ubii.dataStructure.Int32List',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='elements', full_name='ubii.dataStructure.Int32List.elements', index=0,
      number=1, type=5, cpp_type=1, label=3,
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
  serialized_start=180,
  serialized_end=209,
)

DESCRIPTOR.message_types_by_name['StringList'] = _STRINGLIST
DESCRIPTOR.message_types_by_name['DoubleList'] = _DOUBLELIST
DESCRIPTOR.message_types_by_name['FloatList'] = _FLOATLIST
DESCRIPTOR.message_types_by_name['BoolList'] = _BOOLLIST
DESCRIPTOR.message_types_by_name['Int32List'] = _INT32LIST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

StringList = _reflection.GeneratedProtocolMessageType('StringList', (_message.Message,), dict(
  DESCRIPTOR = _STRINGLIST,
  __module__ = 'proto.dataStructure.lists_pb2'
  # @@protoc_insertion_point(class_scope:ubii.dataStructure.StringList)
  ))
_sym_db.RegisterMessage(StringList)

DoubleList = _reflection.GeneratedProtocolMessageType('DoubleList', (_message.Message,), dict(
  DESCRIPTOR = _DOUBLELIST,
  __module__ = 'proto.dataStructure.lists_pb2'
  # @@protoc_insertion_point(class_scope:ubii.dataStructure.DoubleList)
  ))
_sym_db.RegisterMessage(DoubleList)

FloatList = _reflection.GeneratedProtocolMessageType('FloatList', (_message.Message,), dict(
  DESCRIPTOR = _FLOATLIST,
  __module__ = 'proto.dataStructure.lists_pb2'
  # @@protoc_insertion_point(class_scope:ubii.dataStructure.FloatList)
  ))
_sym_db.RegisterMessage(FloatList)

BoolList = _reflection.GeneratedProtocolMessageType('BoolList', (_message.Message,), dict(
  DESCRIPTOR = _BOOLLIST,
  __module__ = 'proto.dataStructure.lists_pb2'
  # @@protoc_insertion_point(class_scope:ubii.dataStructure.BoolList)
  ))
_sym_db.RegisterMessage(BoolList)

Int32List = _reflection.GeneratedProtocolMessageType('Int32List', (_message.Message,), dict(
  DESCRIPTOR = _INT32LIST,
  __module__ = 'proto.dataStructure.lists_pb2'
  # @@protoc_insertion_point(class_scope:ubii.dataStructure.Int32List)
  ))
_sym_db.RegisterMessage(Int32List)


# @@protoc_insertion_point(module_scope)