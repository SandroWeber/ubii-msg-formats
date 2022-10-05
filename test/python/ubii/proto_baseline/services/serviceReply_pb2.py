# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: ubii/proto_baseline/services/serviceReply.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from ubii.proto_baseline.general import success_pb2 as ubii_dot_proto__baseline_dot_general_dot_success__pb2
from ubii.proto_baseline.general import error_pb2 as ubii_dot_proto__baseline_dot_general_dot_error__pb2
from ubii.proto_baseline.dataStructure import lists_pb2 as ubii_dot_proto__baseline_dot_dataStructure_dot_lists__pb2
from ubii.proto_baseline.clients import client_pb2 as ubii_dot_proto__baseline_dot_clients_dot_client__pb2
from ubii.proto_baseline.devices import component_pb2 as ubii_dot_proto__baseline_dot_devices_dot_component__pb2
from ubii.proto_baseline.devices import device_pb2 as ubii_dot_proto__baseline_dot_devices_dot_device__pb2
from ubii.proto_baseline.devices import topicMux_pb2 as ubii_dot_proto__baseline_dot_devices_dot_topicMux__pb2
from ubii.proto_baseline.devices import topicDemux_pb2 as ubii_dot_proto__baseline_dot_devices_dot_topicDemux__pb2
from ubii.proto_baseline.servers import server_pb2 as ubii_dot_proto__baseline_dot_servers_dot_server__pb2
from ubii.proto_baseline.sessions import session_pb2 as ubii_dot_proto__baseline_dot_sessions_dot_session__pb2
from ubii.proto_baseline.services import service_pb2 as ubii_dot_proto__baseline_dot_services_dot_service__pb2
from ubii.proto_baseline.processing import processingModule_pb2 as ubii_dot_proto__baseline_dot_processing_dot_processingModule__pb2
from ubii.proto_baseline.processing import lockstepProcessing_pb2 as ubii_dot_proto__baseline_dot_processing_dot_lockstepProcessing__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n/ubii/proto_baseline/services/serviceReply.proto\x12\x1cubii.proto_baseline.services\x1a)ubii/proto_baseline/general/success.proto\x1a\'ubii/proto_baseline/general/error.proto\x1a-ubii/proto_baseline/dataStructure/lists.proto\x1a(ubii/proto_baseline/clients/client.proto\x1a+ubii/proto_baseline/devices/component.proto\x1a(ubii/proto_baseline/devices/device.proto\x1a*ubii/proto_baseline/devices/topicMux.proto\x1a,ubii/proto_baseline/devices/topicDemux.proto\x1a(ubii/proto_baseline/servers/server.proto\x1a*ubii/proto_baseline/sessions/session.proto\x1a*ubii/proto_baseline/services/service.proto\x1a\x35ubii/proto_baseline/processing/processingModule.proto\x1a\x37ubii/proto_baseline/processing/lockstepProcessing.proto\"\xfb\n\n\x0cServiceReply\x12\x37\n\x07success\x18\x01 \x01(\x0b\x32$.ubii.proto_baseline.general.SuccessH\x00\x12\x33\n\x05\x65rror\x18\x02 \x01(\x0b\x32\".ubii.proto_baseline.general.ErrorH\x00\x12\x35\n\x06\x63lient\x18\x03 \x01(\x0b\x32#.ubii.proto_baseline.clients.ClientH\x00\x12\x35\n\x06\x64\x65vice\x18\x04 \x01(\x0b\x32#.ubii.proto_baseline.devices.DeviceH\x00\x12\x35\n\x06server\x18\x05 \x01(\x0b\x32#.ubii.proto_baseline.servers.ServerH\x00\x12\x38\n\x07session\x18\x06 \x01(\x0b\x32%.ubii.proto_baseline.sessions.SessionH\x00\x12\x41\n\x0csession_list\x18\x07 \x01(\x0b\x32).ubii.proto_baseline.sessions.SessionListH\x00\x12M\n\x11processing_module\x18\x08 \x01(\x0b\x32\x30.ubii.proto_baseline.processing.ProcessingModuleH\x00\x12V\n\x16processing_module_list\x18\t \x01(\x0b\x32\x34.ubii.proto_baseline.processing.ProcessingModuleListH\x00\x12\x44\n\x0bstring_list\x18\n \x01(\x0b\x32-.ubii.proto_baseline.dataStructure.StringListH\x00\x12:\n\ttopic_mux\x18\x0b \x01(\x0b\x32%.ubii.proto_baseline.devices.TopicMuxH\x00\x12\x43\n\x0etopic_mux_list\x18\x0c \x01(\x0b\x32).ubii.proto_baseline.devices.TopicMuxListH\x00\x12>\n\x0btopic_demux\x18\r \x01(\x0b\x32\'.ubii.proto_baseline.devices.TopicDemuxH\x00\x12G\n\x10topic_demux_list\x18\x0e \x01(\x0b\x32+.ubii.proto_baseline.devices.TopicDemuxListH\x00\x12>\n\x0b\x63lient_list\x18\x0f \x01(\x0b\x32\'.ubii.proto_baseline.clients.ClientListH\x00\x12>\n\x0b\x64\x65vice_list\x18\x10 \x01(\x0b\x32\'.ubii.proto_baseline.devices.DeviceListH\x00\x12\x38\n\x07service\x18\x11 \x01(\x0b\x32%.ubii.proto_baseline.services.ServiceH\x00\x12\x41\n\x0cservice_list\x18\x12 \x01(\x0b\x32).ubii.proto_baseline.services.ServiceListH\x00\x12\\\n\x19lockstep_processing_reply\x18\x13 \x01(\x0b\x32\x37.ubii.proto_baseline.processing.LockstepProcessingReplyH\x00\x12;\n\tcomponent\x18\x14 \x01(\x0b\x32&.ubii.proto_baseline.devices.ComponentH\x00\x12\x44\n\x0e\x63omponent_list\x18\x15 \x01(\x0b\x32*.ubii.proto_baseline.devices.ComponentListH\x00\x42\x06\n\x04typeb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'ubii.proto_baseline.services.serviceReply_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _SERVICEREPLY._serialized_start=674
  _SERVICEREPLY._serialized_end=2077
# @@protoc_insertion_point(module_scope)
