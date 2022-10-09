/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var proto_general_success_pb = require('../../proto/general/success_pb.js');
var proto_general_error_pb = require('../../proto/general/error_pb.js');
var proto_dataStructure_lists_pb = require('../../proto/dataStructure/lists_pb.js');
var proto_clients_client_pb = require('../../proto/clients/client_pb.js');
var proto_conditions_notifyCondition_pb = require('../../proto/conditions/notifyCondition_pb.js');
var proto_devices_component_pb = require('../../proto/devices/component_pb.js');
var proto_devices_device_pb = require('../../proto/devices/device_pb.js');
var proto_devices_topicMux_pb = require('../../proto/devices/topicMux_pb.js');
var proto_devices_topicDemux_pb = require('../../proto/devices/topicDemux_pb.js');
var proto_servers_server_pb = require('../../proto/servers/server_pb.js');
var proto_sessions_session_pb = require('../../proto/sessions/session_pb.js');
var proto_services_service_pb = require('../../proto/services/service_pb.js');
var proto_processing_processingModule_pb = require('../../proto/processing/processingModule_pb.js');
var proto_processing_lockstepProcessing_pb = require('../../proto/processing/lockstepProcessing_pb.js');
goog.exportSymbol('proto.ubii.services.ServiceReply', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ubii.services.ServiceReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ubii.services.ServiceReply.oneofGroups_);
};
goog.inherits(proto.ubii.services.ServiceReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ubii.services.ServiceReply.displayName = 'proto.ubii.services.ServiceReply';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ubii.services.ServiceReply.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]];

/**
 * @enum {number}
 */
proto.ubii.services.ServiceReply.TypeCase = {
  TYPE_NOT_SET: 0,
  SUCCESS: 1,
  ERROR: 2,
  CLIENT: 3,
  DEVICE: 4,
  SERVER: 5,
  SESSION: 6,
  SESSION_LIST: 7,
  PROCESSING_MODULE: 8,
  PROCESSING_MODULE_LIST: 9,
  STRING_LIST: 10,
  TOPIC_MUX: 11,
  TOPIC_MUX_LIST: 12,
  TOPIC_DEMUX: 13,
  TOPIC_DEMUX_LIST: 14,
  CLIENT_LIST: 15,
  DEVICE_LIST: 16,
  SERVICE: 17,
  SERVICE_LIST: 18,
  LOCKSTEP_PROCESSING_REPLY: 19,
  COMPONENT: 20,
  COMPONENT_LIST: 21,
  NOTIFY_CONDITION: 22
};

/**
 * @return {proto.ubii.services.ServiceReply.TypeCase}
 */
proto.ubii.services.ServiceReply.prototype.getTypeCase = function() {
  return /** @type {proto.ubii.services.ServiceReply.TypeCase} */(jspb.Message.computeOneofCase(this, proto.ubii.services.ServiceReply.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.services.ServiceReply.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.services.ServiceReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.services.ServiceReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.services.ServiceReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: (f = msg.getSuccess()) && proto_general_success_pb.Success.toObject(includeInstance, f),
    error: (f = msg.getError()) && proto_general_error_pb.Error.toObject(includeInstance, f),
    client: (f = msg.getClient()) && proto_clients_client_pb.Client.toObject(includeInstance, f),
    device: (f = msg.getDevice()) && proto_devices_device_pb.Device.toObject(includeInstance, f),
    server: (f = msg.getServer()) && proto_servers_server_pb.Server.toObject(includeInstance, f),
    session: (f = msg.getSession()) && proto_sessions_session_pb.Session.toObject(includeInstance, f),
    sessionList: (f = msg.getSessionList()) && proto_sessions_session_pb.SessionList.toObject(includeInstance, f),
    processingModule: (f = msg.getProcessingModule()) && proto_processing_processingModule_pb.ProcessingModule.toObject(includeInstance, f),
    processingModuleList: (f = msg.getProcessingModuleList()) && proto_processing_processingModule_pb.ProcessingModuleList.toObject(includeInstance, f),
    stringList: (f = msg.getStringList()) && proto_dataStructure_lists_pb.StringList.toObject(includeInstance, f),
    topicMux: (f = msg.getTopicMux()) && proto_devices_topicMux_pb.TopicMux.toObject(includeInstance, f),
    topicMuxList: (f = msg.getTopicMuxList()) && proto_devices_topicMux_pb.TopicMuxList.toObject(includeInstance, f),
    topicDemux: (f = msg.getTopicDemux()) && proto_devices_topicDemux_pb.TopicDemux.toObject(includeInstance, f),
    topicDemuxList: (f = msg.getTopicDemuxList()) && proto_devices_topicDemux_pb.TopicDemuxList.toObject(includeInstance, f),
    clientList: (f = msg.getClientList()) && proto_clients_client_pb.ClientList.toObject(includeInstance, f),
    deviceList: (f = msg.getDeviceList()) && proto_devices_device_pb.DeviceList.toObject(includeInstance, f),
    service: (f = msg.getService()) && proto_services_service_pb.Service.toObject(includeInstance, f),
    serviceList: (f = msg.getServiceList()) && proto_services_service_pb.ServiceList.toObject(includeInstance, f),
    lockstepProcessingReply: (f = msg.getLockstepProcessingReply()) && proto_processing_lockstepProcessing_pb.LockstepProcessingReply.toObject(includeInstance, f),
    component: (f = msg.getComponent()) && proto_devices_component_pb.Component.toObject(includeInstance, f),
    componentList: (f = msg.getComponentList()) && proto_devices_component_pb.ComponentList.toObject(includeInstance, f),
    notifyCondition: (f = msg.getNotifyCondition()) && proto_conditions_notifyCondition_pb.NotifyCondition.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ubii.services.ServiceReply}
 */
proto.ubii.services.ServiceReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.services.ServiceReply;
  return proto.ubii.services.ServiceReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.services.ServiceReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.services.ServiceReply}
 */
proto.ubii.services.ServiceReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_general_success_pb.Success;
      reader.readMessage(value,proto_general_success_pb.Success.deserializeBinaryFromReader);
      msg.setSuccess(value);
      break;
    case 2:
      var value = new proto_general_error_pb.Error;
      reader.readMessage(value,proto_general_error_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 3:
      var value = new proto_clients_client_pb.Client;
      reader.readMessage(value,proto_clients_client_pb.Client.deserializeBinaryFromReader);
      msg.setClient(value);
      break;
    case 4:
      var value = new proto_devices_device_pb.Device;
      reader.readMessage(value,proto_devices_device_pb.Device.deserializeBinaryFromReader);
      msg.setDevice(value);
      break;
    case 5:
      var value = new proto_servers_server_pb.Server;
      reader.readMessage(value,proto_servers_server_pb.Server.deserializeBinaryFromReader);
      msg.setServer(value);
      break;
    case 6:
      var value = new proto_sessions_session_pb.Session;
      reader.readMessage(value,proto_sessions_session_pb.Session.deserializeBinaryFromReader);
      msg.setSession(value);
      break;
    case 7:
      var value = new proto_sessions_session_pb.SessionList;
      reader.readMessage(value,proto_sessions_session_pb.SessionList.deserializeBinaryFromReader);
      msg.setSessionList(value);
      break;
    case 8:
      var value = new proto_processing_processingModule_pb.ProcessingModule;
      reader.readMessage(value,proto_processing_processingModule_pb.ProcessingModule.deserializeBinaryFromReader);
      msg.setProcessingModule(value);
      break;
    case 9:
      var value = new proto_processing_processingModule_pb.ProcessingModuleList;
      reader.readMessage(value,proto_processing_processingModule_pb.ProcessingModuleList.deserializeBinaryFromReader);
      msg.setProcessingModuleList(value);
      break;
    case 10:
      var value = new proto_dataStructure_lists_pb.StringList;
      reader.readMessage(value,proto_dataStructure_lists_pb.StringList.deserializeBinaryFromReader);
      msg.setStringList(value);
      break;
    case 11:
      var value = new proto_devices_topicMux_pb.TopicMux;
      reader.readMessage(value,proto_devices_topicMux_pb.TopicMux.deserializeBinaryFromReader);
      msg.setTopicMux(value);
      break;
    case 12:
      var value = new proto_devices_topicMux_pb.TopicMuxList;
      reader.readMessage(value,proto_devices_topicMux_pb.TopicMuxList.deserializeBinaryFromReader);
      msg.setTopicMuxList(value);
      break;
    case 13:
      var value = new proto_devices_topicDemux_pb.TopicDemux;
      reader.readMessage(value,proto_devices_topicDemux_pb.TopicDemux.deserializeBinaryFromReader);
      msg.setTopicDemux(value);
      break;
    case 14:
      var value = new proto_devices_topicDemux_pb.TopicDemuxList;
      reader.readMessage(value,proto_devices_topicDemux_pb.TopicDemuxList.deserializeBinaryFromReader);
      msg.setTopicDemuxList(value);
      break;
    case 15:
      var value = new proto_clients_client_pb.ClientList;
      reader.readMessage(value,proto_clients_client_pb.ClientList.deserializeBinaryFromReader);
      msg.setClientList(value);
      break;
    case 16:
      var value = new proto_devices_device_pb.DeviceList;
      reader.readMessage(value,proto_devices_device_pb.DeviceList.deserializeBinaryFromReader);
      msg.setDeviceList(value);
      break;
    case 17:
      var value = new proto_services_service_pb.Service;
      reader.readMessage(value,proto_services_service_pb.Service.deserializeBinaryFromReader);
      msg.setService(value);
      break;
    case 18:
      var value = new proto_services_service_pb.ServiceList;
      reader.readMessage(value,proto_services_service_pb.ServiceList.deserializeBinaryFromReader);
      msg.setServiceList(value);
      break;
    case 19:
      var value = new proto_processing_lockstepProcessing_pb.LockstepProcessingReply;
      reader.readMessage(value,proto_processing_lockstepProcessing_pb.LockstepProcessingReply.deserializeBinaryFromReader);
      msg.setLockstepProcessingReply(value);
      break;
    case 20:
      var value = new proto_devices_component_pb.Component;
      reader.readMessage(value,proto_devices_component_pb.Component.deserializeBinaryFromReader);
      msg.setComponent(value);
      break;
    case 21:
      var value = new proto_devices_component_pb.ComponentList;
      reader.readMessage(value,proto_devices_component_pb.ComponentList.deserializeBinaryFromReader);
      msg.setComponentList(value);
      break;
    case 22:
      var value = new proto_conditions_notifyCondition_pb.NotifyCondition;
      reader.readMessage(value,proto_conditions_notifyCondition_pb.NotifyCondition.deserializeBinaryFromReader);
      msg.setNotifyCondition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ubii.services.ServiceReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.services.ServiceReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.services.ServiceReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.services.ServiceReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_general_success_pb.Success.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_general_error_pb.Error.serializeBinaryToWriter
    );
  }
  f = message.getClient();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_clients_client_pb.Client.serializeBinaryToWriter
    );
  }
  f = message.getDevice();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_devices_device_pb.Device.serializeBinaryToWriter
    );
  }
  f = message.getServer();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_servers_server_pb.Server.serializeBinaryToWriter
    );
  }
  f = message.getSession();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_sessions_session_pb.Session.serializeBinaryToWriter
    );
  }
  f = message.getSessionList();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_sessions_session_pb.SessionList.serializeBinaryToWriter
    );
  }
  f = message.getProcessingModule();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_processing_processingModule_pb.ProcessingModule.serializeBinaryToWriter
    );
  }
  f = message.getProcessingModuleList();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_processing_processingModule_pb.ProcessingModuleList.serializeBinaryToWriter
    );
  }
  f = message.getStringList();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto_dataStructure_lists_pb.StringList.serializeBinaryToWriter
    );
  }
  f = message.getTopicMux();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto_devices_topicMux_pb.TopicMux.serializeBinaryToWriter
    );
  }
  f = message.getTopicMuxList();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto_devices_topicMux_pb.TopicMuxList.serializeBinaryToWriter
    );
  }
  f = message.getTopicDemux();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto_devices_topicDemux_pb.TopicDemux.serializeBinaryToWriter
    );
  }
  f = message.getTopicDemuxList();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto_devices_topicDemux_pb.TopicDemuxList.serializeBinaryToWriter
    );
  }
  f = message.getClientList();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto_clients_client_pb.ClientList.serializeBinaryToWriter
    );
  }
  f = message.getDeviceList();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto_devices_device_pb.DeviceList.serializeBinaryToWriter
    );
  }
  f = message.getService();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto_services_service_pb.Service.serializeBinaryToWriter
    );
  }
  f = message.getServiceList();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto_services_service_pb.ServiceList.serializeBinaryToWriter
    );
  }
  f = message.getLockstepProcessingReply();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto_processing_lockstepProcessing_pb.LockstepProcessingReply.serializeBinaryToWriter
    );
  }
  f = message.getComponent();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto_devices_component_pb.Component.serializeBinaryToWriter
    );
  }
  f = message.getComponentList();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto_devices_component_pb.ComponentList.serializeBinaryToWriter
    );
  }
  f = message.getNotifyCondition();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto_conditions_notifyCondition_pb.NotifyCondition.serializeBinaryToWriter
    );
  }
};


/**
 * optional ubii.general.Success success = 1;
 * @return {?proto.ubii.general.Success}
 */
proto.ubii.services.ServiceReply.prototype.getSuccess = function() {
  return /** @type{?proto.ubii.general.Success} */ (
    jspb.Message.getWrapperField(this, proto_general_success_pb.Success, 1));
};


/** @param {?proto.ubii.general.Success|undefined} value */
proto.ubii.services.ServiceReply.prototype.setSuccess = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearSuccess = function() {
  this.setSuccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasSuccess = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ubii.general.Error error = 2;
 * @return {?proto.ubii.general.Error}
 */
proto.ubii.services.ServiceReply.prototype.getError = function() {
  return /** @type{?proto.ubii.general.Error} */ (
    jspb.Message.getWrapperField(this, proto_general_error_pb.Error, 2));
};


/** @param {?proto.ubii.general.Error|undefined} value */
proto.ubii.services.ServiceReply.prototype.setError = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearError = function() {
  this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ubii.clients.Client client = 3;
 * @return {?proto.ubii.clients.Client}
 */
proto.ubii.services.ServiceReply.prototype.getClient = function() {
  return /** @type{?proto.ubii.clients.Client} */ (
    jspb.Message.getWrapperField(this, proto_clients_client_pb.Client, 3));
};


/** @param {?proto.ubii.clients.Client|undefined} value */
proto.ubii.services.ServiceReply.prototype.setClient = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearClient = function() {
  this.setClient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasClient = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ubii.devices.Device device = 4;
 * @return {?proto.ubii.devices.Device}
 */
proto.ubii.services.ServiceReply.prototype.getDevice = function() {
  return /** @type{?proto.ubii.devices.Device} */ (
    jspb.Message.getWrapperField(this, proto_devices_device_pb.Device, 4));
};


/** @param {?proto.ubii.devices.Device|undefined} value */
proto.ubii.services.ServiceReply.prototype.setDevice = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearDevice = function() {
  this.setDevice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasDevice = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ubii.servers.Server server = 5;
 * @return {?proto.ubii.servers.Server}
 */
proto.ubii.services.ServiceReply.prototype.getServer = function() {
  return /** @type{?proto.ubii.servers.Server} */ (
    jspb.Message.getWrapperField(this, proto_servers_server_pb.Server, 5));
};


/** @param {?proto.ubii.servers.Server|undefined} value */
proto.ubii.services.ServiceReply.prototype.setServer = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearServer = function() {
  this.setServer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasServer = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ubii.sessions.Session session = 6;
 * @return {?proto.ubii.sessions.Session}
 */
proto.ubii.services.ServiceReply.prototype.getSession = function() {
  return /** @type{?proto.ubii.sessions.Session} */ (
    jspb.Message.getWrapperField(this, proto_sessions_session_pb.Session, 6));
};


/** @param {?proto.ubii.sessions.Session|undefined} value */
proto.ubii.services.ServiceReply.prototype.setSession = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearSession = function() {
  this.setSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasSession = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ubii.sessions.SessionList session_list = 7;
 * @return {?proto.ubii.sessions.SessionList}
 */
proto.ubii.services.ServiceReply.prototype.getSessionList = function() {
  return /** @type{?proto.ubii.sessions.SessionList} */ (
    jspb.Message.getWrapperField(this, proto_sessions_session_pb.SessionList, 7));
};


/** @param {?proto.ubii.sessions.SessionList|undefined} value */
proto.ubii.services.ServiceReply.prototype.setSessionList = function(value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearSessionList = function() {
  this.setSessionList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasSessionList = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ubii.processing.ProcessingModule processing_module = 8;
 * @return {?proto.ubii.processing.ProcessingModule}
 */
proto.ubii.services.ServiceReply.prototype.getProcessingModule = function() {
  return /** @type{?proto.ubii.processing.ProcessingModule} */ (
    jspb.Message.getWrapperField(this, proto_processing_processingModule_pb.ProcessingModule, 8));
};


/** @param {?proto.ubii.processing.ProcessingModule|undefined} value */
proto.ubii.services.ServiceReply.prototype.setProcessingModule = function(value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearProcessingModule = function() {
  this.setProcessingModule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasProcessingModule = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ubii.processing.ProcessingModuleList processing_module_list = 9;
 * @return {?proto.ubii.processing.ProcessingModuleList}
 */
proto.ubii.services.ServiceReply.prototype.getProcessingModuleList = function() {
  return /** @type{?proto.ubii.processing.ProcessingModuleList} */ (
    jspb.Message.getWrapperField(this, proto_processing_processingModule_pb.ProcessingModuleList, 9));
};


/** @param {?proto.ubii.processing.ProcessingModuleList|undefined} value */
proto.ubii.services.ServiceReply.prototype.setProcessingModuleList = function(value) {
  jspb.Message.setOneofWrapperField(this, 9, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearProcessingModuleList = function() {
  this.setProcessingModuleList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasProcessingModuleList = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ubii.dataStructure.StringList string_list = 10;
 * @return {?proto.ubii.dataStructure.StringList}
 */
proto.ubii.services.ServiceReply.prototype.getStringList = function() {
  return /** @type{?proto.ubii.dataStructure.StringList} */ (
    jspb.Message.getWrapperField(this, proto_dataStructure_lists_pb.StringList, 10));
};


/** @param {?proto.ubii.dataStructure.StringList|undefined} value */
proto.ubii.services.ServiceReply.prototype.setStringList = function(value) {
  jspb.Message.setOneofWrapperField(this, 10, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearStringList = function() {
  this.setStringList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasStringList = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ubii.devices.TopicMux topic_mux = 11;
 * @return {?proto.ubii.devices.TopicMux}
 */
proto.ubii.services.ServiceReply.prototype.getTopicMux = function() {
  return /** @type{?proto.ubii.devices.TopicMux} */ (
    jspb.Message.getWrapperField(this, proto_devices_topicMux_pb.TopicMux, 11));
};


/** @param {?proto.ubii.devices.TopicMux|undefined} value */
proto.ubii.services.ServiceReply.prototype.setTopicMux = function(value) {
  jspb.Message.setOneofWrapperField(this, 11, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearTopicMux = function() {
  this.setTopicMux(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasTopicMux = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ubii.devices.TopicMuxList topic_mux_list = 12;
 * @return {?proto.ubii.devices.TopicMuxList}
 */
proto.ubii.services.ServiceReply.prototype.getTopicMuxList = function() {
  return /** @type{?proto.ubii.devices.TopicMuxList} */ (
    jspb.Message.getWrapperField(this, proto_devices_topicMux_pb.TopicMuxList, 12));
};


/** @param {?proto.ubii.devices.TopicMuxList|undefined} value */
proto.ubii.services.ServiceReply.prototype.setTopicMuxList = function(value) {
  jspb.Message.setOneofWrapperField(this, 12, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearTopicMuxList = function() {
  this.setTopicMuxList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasTopicMuxList = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ubii.devices.TopicDemux topic_demux = 13;
 * @return {?proto.ubii.devices.TopicDemux}
 */
proto.ubii.services.ServiceReply.prototype.getTopicDemux = function() {
  return /** @type{?proto.ubii.devices.TopicDemux} */ (
    jspb.Message.getWrapperField(this, proto_devices_topicDemux_pb.TopicDemux, 13));
};


/** @param {?proto.ubii.devices.TopicDemux|undefined} value */
proto.ubii.services.ServiceReply.prototype.setTopicDemux = function(value) {
  jspb.Message.setOneofWrapperField(this, 13, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearTopicDemux = function() {
  this.setTopicDemux(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasTopicDemux = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ubii.devices.TopicDemuxList topic_demux_list = 14;
 * @return {?proto.ubii.devices.TopicDemuxList}
 */
proto.ubii.services.ServiceReply.prototype.getTopicDemuxList = function() {
  return /** @type{?proto.ubii.devices.TopicDemuxList} */ (
    jspb.Message.getWrapperField(this, proto_devices_topicDemux_pb.TopicDemuxList, 14));
};


/** @param {?proto.ubii.devices.TopicDemuxList|undefined} value */
proto.ubii.services.ServiceReply.prototype.setTopicDemuxList = function(value) {
  jspb.Message.setOneofWrapperField(this, 14, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearTopicDemuxList = function() {
  this.setTopicDemuxList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasTopicDemuxList = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ubii.clients.ClientList client_list = 15;
 * @return {?proto.ubii.clients.ClientList}
 */
proto.ubii.services.ServiceReply.prototype.getClientList = function() {
  return /** @type{?proto.ubii.clients.ClientList} */ (
    jspb.Message.getWrapperField(this, proto_clients_client_pb.ClientList, 15));
};


/** @param {?proto.ubii.clients.ClientList|undefined} value */
proto.ubii.services.ServiceReply.prototype.setClientList = function(value) {
  jspb.Message.setOneofWrapperField(this, 15, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearClientList = function() {
  this.setClientList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasClientList = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ubii.devices.DeviceList device_list = 16;
 * @return {?proto.ubii.devices.DeviceList}
 */
proto.ubii.services.ServiceReply.prototype.getDeviceList = function() {
  return /** @type{?proto.ubii.devices.DeviceList} */ (
    jspb.Message.getWrapperField(this, proto_devices_device_pb.DeviceList, 16));
};


/** @param {?proto.ubii.devices.DeviceList|undefined} value */
proto.ubii.services.ServiceReply.prototype.setDeviceList = function(value) {
  jspb.Message.setOneofWrapperField(this, 16, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearDeviceList = function() {
  this.setDeviceList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasDeviceList = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional Service service = 17;
 * @return {?proto.ubii.services.Service}
 */
proto.ubii.services.ServiceReply.prototype.getService = function() {
  return /** @type{?proto.ubii.services.Service} */ (
    jspb.Message.getWrapperField(this, proto_services_service_pb.Service, 17));
};


/** @param {?proto.ubii.services.Service|undefined} value */
proto.ubii.services.ServiceReply.prototype.setService = function(value) {
  jspb.Message.setOneofWrapperField(this, 17, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearService = function() {
  this.setService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasService = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional ServiceList service_list = 18;
 * @return {?proto.ubii.services.ServiceList}
 */
proto.ubii.services.ServiceReply.prototype.getServiceList = function() {
  return /** @type{?proto.ubii.services.ServiceList} */ (
    jspb.Message.getWrapperField(this, proto_services_service_pb.ServiceList, 18));
};


/** @param {?proto.ubii.services.ServiceList|undefined} value */
proto.ubii.services.ServiceReply.prototype.setServiceList = function(value) {
  jspb.Message.setOneofWrapperField(this, 18, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearServiceList = function() {
  this.setServiceList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasServiceList = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional ubii.processing.LockstepProcessingReply lockstep_processing_reply = 19;
 * @return {?proto.ubii.processing.LockstepProcessingReply}
 */
proto.ubii.services.ServiceReply.prototype.getLockstepProcessingReply = function() {
  return /** @type{?proto.ubii.processing.LockstepProcessingReply} */ (
    jspb.Message.getWrapperField(this, proto_processing_lockstepProcessing_pb.LockstepProcessingReply, 19));
};


/** @param {?proto.ubii.processing.LockstepProcessingReply|undefined} value */
proto.ubii.services.ServiceReply.prototype.setLockstepProcessingReply = function(value) {
  jspb.Message.setOneofWrapperField(this, 19, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearLockstepProcessingReply = function() {
  this.setLockstepProcessingReply(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasLockstepProcessingReply = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional ubii.devices.Component component = 20;
 * @return {?proto.ubii.devices.Component}
 */
proto.ubii.services.ServiceReply.prototype.getComponent = function() {
  return /** @type{?proto.ubii.devices.Component} */ (
    jspb.Message.getWrapperField(this, proto_devices_component_pb.Component, 20));
};


/** @param {?proto.ubii.devices.Component|undefined} value */
proto.ubii.services.ServiceReply.prototype.setComponent = function(value) {
  jspb.Message.setOneofWrapperField(this, 20, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearComponent = function() {
  this.setComponent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasComponent = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional ubii.devices.ComponentList component_list = 21;
 * @return {?proto.ubii.devices.ComponentList}
 */
proto.ubii.services.ServiceReply.prototype.getComponentList = function() {
  return /** @type{?proto.ubii.devices.ComponentList} */ (
    jspb.Message.getWrapperField(this, proto_devices_component_pb.ComponentList, 21));
};


/** @param {?proto.ubii.devices.ComponentList|undefined} value */
proto.ubii.services.ServiceReply.prototype.setComponentList = function(value) {
  jspb.Message.setOneofWrapperField(this, 21, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearComponentList = function() {
  this.setComponentList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasComponentList = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional ubii.conditions.NotifyCondition notify_condition = 22;
 * @return {?proto.ubii.conditions.NotifyCondition}
 */
proto.ubii.services.ServiceReply.prototype.getNotifyCondition = function() {
  return /** @type{?proto.ubii.conditions.NotifyCondition} */ (
    jspb.Message.getWrapperField(this, proto_conditions_notifyCondition_pb.NotifyCondition, 22));
};


/** @param {?proto.ubii.conditions.NotifyCondition|undefined} value */
proto.ubii.services.ServiceReply.prototype.setNotifyCondition = function(value) {
  jspb.Message.setOneofWrapperField(this, 22, proto.ubii.services.ServiceReply.oneofGroups_[0], value);
};


proto.ubii.services.ServiceReply.prototype.clearNotifyCondition = function() {
  this.setNotifyCondition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceReply.prototype.hasNotifyCondition = function() {
  return jspb.Message.getField(this, 22) != null;
};


goog.object.extend(exports, proto.ubii.services);
