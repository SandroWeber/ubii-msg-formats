# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/sessions/interactionInputMapping.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from proto.devices import topicMux_pb2 as proto_dot_devices_dot_topicMux__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='proto/sessions/interactionInputMapping.proto',
  package='ubii.sessions',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n,proto/sessions/interactionInputMapping.proto\x12\rubii.sessions\x1a\x1cproto/devices/topicMux.proto\"u\n\x17InteractionInputMapping\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x0f\n\x05topic\x18\x02 \x01(\tH\x00\x12+\n\ttopic_mux\x18\x03 \x01(\x0b\x32\x16.ubii.devices.TopicMuxH\x00\x42\x0e\n\x0ctopic_source\"W\n\x1bInteractionInputMappingList\x12\x38\n\x08\x65lements\x18\x01 \x03(\x0b\x32&.ubii.sessions.InteractionInputMappingb\x06proto3')
  ,
  dependencies=[proto_dot_devices_dot_topicMux__pb2.DESCRIPTOR,])




_INTERACTIONINPUTMAPPING = _descriptor.Descriptor(
  name='InteractionInputMapping',
  full_name='ubii.sessions.InteractionInputMapping',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='ubii.sessions.InteractionInputMapping.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='topic', full_name='ubii.sessions.InteractionInputMapping.topic', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='topic_mux', full_name='ubii.sessions.InteractionInputMapping.topic_mux', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
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
    _descriptor.OneofDescriptor(
      name='topic_source', full_name='ubii.sessions.InteractionInputMapping.topic_source',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=93,
  serialized_end=210,
)


_INTERACTIONINPUTMAPPINGLIST = _descriptor.Descriptor(
  name='InteractionInputMappingList',
  full_name='ubii.sessions.InteractionInputMappingList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='elements', full_name='ubii.sessions.InteractionInputMappingList.elements', index=0,
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
  serialized_start=212,
  serialized_end=299,
)

_INTERACTIONINPUTMAPPING.fields_by_name['topic_mux'].message_type = proto_dot_devices_dot_topicMux__pb2._TOPICMUX
_INTERACTIONINPUTMAPPING.oneofs_by_name['topic_source'].fields.append(
  _INTERACTIONINPUTMAPPING.fields_by_name['topic'])
_INTERACTIONINPUTMAPPING.fields_by_name['topic'].containing_oneof = _INTERACTIONINPUTMAPPING.oneofs_by_name['topic_source']
_INTERACTIONINPUTMAPPING.oneofs_by_name['topic_source'].fields.append(
  _INTERACTIONINPUTMAPPING.fields_by_name['topic_mux'])
_INTERACTIONINPUTMAPPING.fields_by_name['topic_mux'].containing_oneof = _INTERACTIONINPUTMAPPING.oneofs_by_name['topic_source']
_INTERACTIONINPUTMAPPINGLIST.fields_by_name['elements'].message_type = _INTERACTIONINPUTMAPPING
DESCRIPTOR.message_types_by_name['InteractionInputMapping'] = _INTERACTIONINPUTMAPPING
DESCRIPTOR.message_types_by_name['InteractionInputMappingList'] = _INTERACTIONINPUTMAPPINGLIST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

InteractionInputMapping = _reflection.GeneratedProtocolMessageType('InteractionInputMapping', (_message.Message,), dict(
  DESCRIPTOR = _INTERACTIONINPUTMAPPING,
  __module__ = 'proto.sessions.interactionInputMapping_pb2'
  # @@protoc_insertion_point(class_scope:ubii.sessions.InteractionInputMapping)
  ))
_sym_db.RegisterMessage(InteractionInputMapping)

InteractionInputMappingList = _reflection.GeneratedProtocolMessageType('InteractionInputMappingList', (_message.Message,), dict(
  DESCRIPTOR = _INTERACTIONINPUTMAPPINGLIST,
  __module__ = 'proto.sessions.interactionInputMapping_pb2'
  # @@protoc_insertion_point(class_scope:ubii.sessions.InteractionInputMappingList)
  ))
_sym_db.RegisterMessage(InteractionInputMappingList)


# @@protoc_insertion_point(module_scope)