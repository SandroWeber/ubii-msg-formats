# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ubii/proto_baseline/dataStructure/object3d.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from ubii.proto_baseline.dataStructure import pose3d_pb2 as ubii_dot_proto__baseline_dot_dataStructure_dot_pose3d__pb2
from ubii.proto_baseline.dataStructure import vector3_pb2 as ubii_dot_proto__baseline_dot_dataStructure_dot_vector3__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n0ubii/proto_baseline/dataStructure/object3d.proto\x12!ubii.proto_baseline.dataStructure\x1a.ubii/proto_baseline/dataStructure/pose3d.proto\x1a/ubii/proto_baseline/dataStructure/vector3.proto\"\xa1\x01\n\x08Object3D\x12\n\n\x02id\x18\x01 \x01(\t\x12\x37\n\x04pose\x18\x02 \x01(\x0b\x32).ubii.proto_baseline.dataStructure.Pose3D\x12\x38\n\x04size\x18\x03 \x01(\x0b\x32*.ubii.proto_baseline.dataStructure.Vector3\x12\x16\n\x0euser_data_json\x18\x04 \x01(\t\"M\n\x0cObject3DList\x12=\n\x08\x65lements\x18\x01 \x03(\x0b\x32+.ubii.proto_baseline.dataStructure.Object3Db\x06proto3')



_OBJECT3D = DESCRIPTOR.message_types_by_name['Object3D']
_OBJECT3DLIST = DESCRIPTOR.message_types_by_name['Object3DList']
Object3D = _reflection.GeneratedProtocolMessageType('Object3D', (_message.Message,), {
  'DESCRIPTOR' : _OBJECT3D,
  '__module__' : 'ubii.proto_baseline.dataStructure.object3d_pb2'
  # @@protoc_insertion_point(class_scope:ubii.proto_baseline.dataStructure.Object3D)
  })
_sym_db.RegisterMessage(Object3D)

Object3DList = _reflection.GeneratedProtocolMessageType('Object3DList', (_message.Message,), {
  'DESCRIPTOR' : _OBJECT3DLIST,
  '__module__' : 'ubii.proto_baseline.dataStructure.object3d_pb2'
  # @@protoc_insertion_point(class_scope:ubii.proto_baseline.dataStructure.Object3DList)
  })
_sym_db.RegisterMessage(Object3DList)

if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _OBJECT3D._serialized_start=185
  _OBJECT3D._serialized_end=346
  _OBJECT3DLIST._serialized_start=348
  _OBJECT3DLIST._serialized_end=425
# @@protoc_insertion_point(module_scope)