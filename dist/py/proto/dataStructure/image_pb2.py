# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/dataStructure/image.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x1fproto/dataStructure/image.proto\x12\x12ubii.dataStructure\"\xa1\x01\n\x07Image2D\x12\r\n\x05width\x18\x01 \x01(\x05\x12\x0e\n\x06height\x18\x02 \x01(\x05\x12;\n\x0b\x64\x61ta_format\x18\x03 \x01(\x0e\x32&.ubii.dataStructure.Image2D.DataFormat\x12\x0c\n\x04\x64\x61ta\x18\x04 \x01(\x0c\",\n\nDataFormat\x12\t\n\x05GRAY8\x10\x00\x12\x08\n\x04RGB8\x10\x01\x12\t\n\x05RGBA8\x10\x02\"<\n\x0bImage2DList\x12-\n\x08\x65lements\x18\x01 \x03(\x0b\x32\x1b.ubii.dataStructure.Image2Db\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'proto.dataStructure.image_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _globals['_IMAGE2D']._serialized_start=56
  _globals['_IMAGE2D']._serialized_end=217
  _globals['_IMAGE2D_DATAFORMAT']._serialized_start=173
  _globals['_IMAGE2D_DATAFORMAT']._serialized_end=217
  _globals['_IMAGE2DLIST']._serialized_start=219
  _globals['_IMAGE2DLIST']._serialized_end=279
# @@protoc_insertion_point(module_scope)
