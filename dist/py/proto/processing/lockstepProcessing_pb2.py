# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/processing/lockstepProcessing.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from proto.topicData import topicDataRecord_pb2 as proto_dot_topicData_dot_topicDataRecord__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n)proto/processing/lockstepProcessing.proto\x12\x0fubii.processing\x1a%proto/topicData/topicDataRecord.proto\"\x83\x01\n\x19LockstepProcessingRequest\x12\x1d\n\x15processing_module_ids\x18\x01 \x03(\t\x12\x30\n\x07records\x18\x02 \x03(\x0b\x32\x1f.ubii.topicData.TopicDataRecord\x12\x15\n\rdelta_time_ms\x18\x03 \x01(\x05\"j\n\x17LockstepProcessingReply\x12\x1d\n\x15processing_module_ids\x18\x01 \x03(\t\x12\x30\n\x07records\x18\x02 \x03(\x0b\x32\x1f.ubii.topicData.TopicDataRecordb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'proto.processing.lockstepProcessing_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _globals['_LOCKSTEPPROCESSINGREQUEST']._serialized_start=102
  _globals['_LOCKSTEPPROCESSINGREQUEST']._serialized_end=233
  _globals['_LOCKSTEPPROCESSINGREPLY']._serialized_start=235
  _globals['_LOCKSTEPPROCESSINGREPLY']._serialized_end=341
# @@protoc_insertion_point(module_scope)
