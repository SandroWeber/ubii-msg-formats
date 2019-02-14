# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/servers/server.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='proto/servers/server.proto',
  package='ubii.servers',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n\x1aproto/servers/server.proto\x12\x0cubii.servers\"\x9c\x01\n\x06Server\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\n\n\x02ip\x18\x03 \x01(\t\x12\x18\n\x10port_service_zmq\x18\x04 \x01(\t\x12\x19\n\x11port_service_rest\x18\x05 \x01(\t\x12\x1b\n\x13port_topic_data_zmq\x18\x06 \x01(\t\x12\x1a\n\x12port_topic_data_ws\x18\x07 \x01(\tb\x06proto3')
)




_SERVER = _descriptor.Descriptor(
  name='Server',
  full_name='ubii.servers.Server',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='ubii.servers.Server.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='name', full_name='ubii.servers.Server.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ip', full_name='ubii.servers.Server.ip', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='port_service_zmq', full_name='ubii.servers.Server.port_service_zmq', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='port_service_rest', full_name='ubii.servers.Server.port_service_rest', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='port_topic_data_zmq', full_name='ubii.servers.Server.port_topic_data_zmq', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='port_topic_data_ws', full_name='ubii.servers.Server.port_topic_data_ws', index=6,
      number=7, type=9, cpp_type=9, label=1,
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
  serialized_start=45,
  serialized_end=201,
)

DESCRIPTOR.message_types_by_name['Server'] = _SERVER
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Server = _reflection.GeneratedProtocolMessageType('Server', (_message.Message,), dict(
  DESCRIPTOR = _SERVER,
  __module__ = 'proto.servers.server_pb2'
  # @@protoc_insertion_point(class_scope:ubii.servers.Server)
  ))
_sym_db.RegisterMessage(Server)


# @@protoc_insertion_point(module_scope)