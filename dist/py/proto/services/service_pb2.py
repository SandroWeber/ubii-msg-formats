# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/services/service.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1cproto/services/service.proto\x12\rubii.services\"|\n\x07Service\x12\r\n\x05topic\x18\x01 \x01(\t\x12\x1e\n\x16request_message_format\x18\x02 \x01(\t\x12\x1f\n\x17response_message_format\x18\x03 \x01(\t\x12\x0c\n\x04tags\x18\x04 \x03(\t\x12\x13\n\x0b\x64\x65scription\x18\x05 \x01(\t\"7\n\x0bServiceList\x12(\n\x08\x65lements\x18\x01 \x03(\x0b\x32\x16.ubii.services.Serviceb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'proto.services.service_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _globals['_SERVICE']._serialized_start=47
  _globals['_SERVICE']._serialized_end=171
  _globals['_SERVICELIST']._serialized_start=173
  _globals['_SERVICELIST']._serialized_end=228
# @@protoc_insertion_point(module_scope)
