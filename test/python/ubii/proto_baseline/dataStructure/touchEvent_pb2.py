# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ubii/proto_baseline/dataStructure/touchEvent.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from ubii.proto_baseline.dataStructure import buttonEventType_pb2 as ubii_dot_proto__baseline_dot_dataStructure_dot_buttonEventType__pb2
from ubii.proto_baseline.dataStructure import vector2_pb2 as ubii_dot_proto__baseline_dot_dataStructure_dot_vector2__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n2ubii/proto_baseline/dataStructure/touchEvent.proto\x12!ubii.proto_baseline.dataStructure\x1a\x37ubii/proto_baseline/dataStructure/buttonEventType.proto\x1a/ubii/proto_baseline/dataStructure/vector2.proto\"\xf3\x01\n\nTouchEvent\x12J\n\x04type\x18\x01 \x01(\x0e\x32<.ubii.proto_baseline.dataStructure.TouchEvent.TouchEventType\x12<\n\x08position\x18\x02 \x01(\x0b\x32*.ubii.proto_baseline.dataStructure.Vector2\x12\n\n\x02id\x18\x03 \x01(\t\x12\r\n\x05\x66orce\x18\x04 \x01(\x02\"@\n\x0eTouchEventType\x12\x0f\n\x0bTOUCH_START\x10\x00\x12\x0e\n\nTOUCH_MOVE\x10\x01\x12\r\n\tTOUCH_END\x10\x02\"Q\n\x0eTouchEventList\x12?\n\x08\x65lements\x18\x01 \x03(\x0b\x32-.ubii.proto_baseline.dataStructure.TouchEventb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ubii.proto_baseline.dataStructure.touchEvent_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _TOUCHEVENT._serialized_start=196
  _TOUCHEVENT._serialized_end=439
  _TOUCHEVENT_TOUCHEVENTTYPE._serialized_start=375
  _TOUCHEVENT_TOUCHEVENTTYPE._serialized_end=439
  _TOUCHEVENTLIST._serialized_start=441
  _TOUCHEVENTLIST._serialized_end=522
# @@protoc_insertion_point(module_scope)
