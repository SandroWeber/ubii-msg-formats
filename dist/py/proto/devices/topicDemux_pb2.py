# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/devices/topicDemux.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='proto/devices/topicDemux.proto',
  package='ubii.devices',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n\x1eproto/devices/topicDemux.proto\x12\x0cubii.devices\"V\n\nTopicDemux\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x11\n\tdata_type\x18\x03 \x01(\t\x12\x1b\n\x13output_topic_format\x18\x04 \x01(\t\"<\n\x0eTopicDemuxList\x12*\n\x08\x65lements\x18\x01 \x03(\x0b\x32\x18.ubii.devices.TopicDemuxb\x06proto3')
)




_TOPICDEMUX = _descriptor.Descriptor(
  name='TopicDemux',
  full_name='ubii.devices.TopicDemux',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='ubii.devices.TopicDemux.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='name', full_name='ubii.devices.TopicDemux.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='data_type', full_name='ubii.devices.TopicDemux.data_type', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='output_topic_format', full_name='ubii.devices.TopicDemux.output_topic_format', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
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
  serialized_start=48,
  serialized_end=134,
)


_TOPICDEMUXLIST = _descriptor.Descriptor(
  name='TopicDemuxList',
  full_name='ubii.devices.TopicDemuxList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='elements', full_name='ubii.devices.TopicDemuxList.elements', index=0,
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
  serialized_start=136,
  serialized_end=196,
)

_TOPICDEMUXLIST.fields_by_name['elements'].message_type = _TOPICDEMUX
DESCRIPTOR.message_types_by_name['TopicDemux'] = _TOPICDEMUX
DESCRIPTOR.message_types_by_name['TopicDemuxList'] = _TOPICDEMUXLIST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TopicDemux = _reflection.GeneratedProtocolMessageType('TopicDemux', (_message.Message,), dict(
  DESCRIPTOR = _TOPICDEMUX,
  __module__ = 'proto.devices.topicDemux_pb2'
  # @@protoc_insertion_point(class_scope:ubii.devices.TopicDemux)
  ))
_sym_db.RegisterMessage(TopicDemux)

TopicDemuxList = _reflection.GeneratedProtocolMessageType('TopicDemuxList', (_message.Message,), dict(
  DESCRIPTOR = _TOPICDEMUXLIST,
  __module__ = 'proto.devices.topicDemux_pb2'
  # @@protoc_insertion_point(class_scope:ubii.devices.TopicDemuxList)
  ))
_sym_db.RegisterMessage(TopicDemuxList)


# @@protoc_insertion_point(module_scope)