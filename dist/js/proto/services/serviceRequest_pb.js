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

var proto_clients_client_pb = require('../../proto/clients/client_pb.js');
var proto_devices_device_pb = require('../../proto/devices/device_pb.js');
var proto_devices_topicMux_pb = require('../../proto/devices/topicMux_pb.js');
var proto_devices_topicDemux_pb = require('../../proto/devices/topicDemux_pb.js');
var proto_sessions_session_pb = require('../../proto/sessions/session_pb.js');
var proto_interactions_interaction_pb = require('../../proto/interactions/interaction_pb.js');
var proto_services_request_topicSubscription_pb = require('../../proto/services/request/topicSubscription_pb.js');
goog.exportSymbol('proto.ubii.services.ServiceRequest', null, global);

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
proto.ubii.services.ServiceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ubii.services.ServiceRequest.oneofGroups_);
};
goog.inherits(proto.ubii.services.ServiceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ubii.services.ServiceRequest.displayName = 'proto.ubii.services.ServiceRequest';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ubii.services.ServiceRequest.oneofGroups_ = [[2,3,4,5,6,7,8,9,10]];

/**
 * @enum {number}
 */
proto.ubii.services.ServiceRequest.TypeCase = {
  TYPE_NOT_SET: 0,
  CLIENT: 2,
  DEVICE: 3,
  TOPIC_SUBSCRIPTION: 4,
  SESSION: 5,
  SESSION_LIST: 6,
  INTERACTION: 7,
  INTERACTION_LIST: 8,
  TOPIC_MUX: 9,
  TOPIC_DEMUX: 10
};

/**
 * @return {proto.ubii.services.ServiceRequest.TypeCase}
 */
proto.ubii.services.ServiceRequest.prototype.getTypeCase = function() {
  return /** @type {proto.ubii.services.ServiceRequest.TypeCase} */(jspb.Message.computeOneofCase(this, proto.ubii.services.ServiceRequest.oneofGroups_[0]));
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
proto.ubii.services.ServiceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.services.ServiceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.services.ServiceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.services.ServiceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    topic: jspb.Message.getFieldWithDefault(msg, 1, ""),
    client: (f = msg.getClient()) && proto_clients_client_pb.Client.toObject(includeInstance, f),
    device: (f = msg.getDevice()) && proto_devices_device_pb.Device.toObject(includeInstance, f),
    topicSubscription: (f = msg.getTopicSubscription()) && proto_services_request_topicSubscription_pb.TopicSubscription.toObject(includeInstance, f),
    session: (f = msg.getSession()) && proto_sessions_session_pb.Session.toObject(includeInstance, f),
    sessionList: (f = msg.getSessionList()) && proto_sessions_session_pb.SessionList.toObject(includeInstance, f),
    interaction: (f = msg.getInteraction()) && proto_interactions_interaction_pb.Interaction.toObject(includeInstance, f),
    interactionList: (f = msg.getInteractionList()) && proto_interactions_interaction_pb.InteractionList.toObject(includeInstance, f),
    topicMux: (f = msg.getTopicMux()) && proto_devices_topicMux_pb.TopicMux.toObject(includeInstance, f),
    topicDemux: (f = msg.getTopicDemux()) && proto_devices_topicDemux_pb.TopicDemux.toObject(includeInstance, f)
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
 * @return {!proto.ubii.services.ServiceRequest}
 */
proto.ubii.services.ServiceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.services.ServiceRequest;
  return proto.ubii.services.ServiceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.services.ServiceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.services.ServiceRequest}
 */
proto.ubii.services.ServiceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 2:
      var value = new proto_clients_client_pb.Client;
      reader.readMessage(value,proto_clients_client_pb.Client.deserializeBinaryFromReader);
      msg.setClient(value);
      break;
    case 3:
      var value = new proto_devices_device_pb.Device;
      reader.readMessage(value,proto_devices_device_pb.Device.deserializeBinaryFromReader);
      msg.setDevice(value);
      break;
    case 4:
      var value = new proto_services_request_topicSubscription_pb.TopicSubscription;
      reader.readMessage(value,proto_services_request_topicSubscription_pb.TopicSubscription.deserializeBinaryFromReader);
      msg.setTopicSubscription(value);
      break;
    case 5:
      var value = new proto_sessions_session_pb.Session;
      reader.readMessage(value,proto_sessions_session_pb.Session.deserializeBinaryFromReader);
      msg.setSession(value);
      break;
    case 6:
      var value = new proto_sessions_session_pb.SessionList;
      reader.readMessage(value,proto_sessions_session_pb.SessionList.deserializeBinaryFromReader);
      msg.setSessionList(value);
      break;
    case 7:
      var value = new proto_interactions_interaction_pb.Interaction;
      reader.readMessage(value,proto_interactions_interaction_pb.Interaction.deserializeBinaryFromReader);
      msg.setInteraction(value);
      break;
    case 8:
      var value = new proto_interactions_interaction_pb.InteractionList;
      reader.readMessage(value,proto_interactions_interaction_pb.InteractionList.deserializeBinaryFromReader);
      msg.setInteractionList(value);
      break;
    case 9:
      var value = new proto_devices_topicMux_pb.TopicMux;
      reader.readMessage(value,proto_devices_topicMux_pb.TopicMux.deserializeBinaryFromReader);
      msg.setTopicMux(value);
      break;
    case 10:
      var value = new proto_devices_topicDemux_pb.TopicDemux;
      reader.readMessage(value,proto_devices_topicDemux_pb.TopicDemux.deserializeBinaryFromReader);
      msg.setTopicDemux(value);
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
proto.ubii.services.ServiceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.services.ServiceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.services.ServiceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.services.ServiceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClient();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_clients_client_pb.Client.serializeBinaryToWriter
    );
  }
  f = message.getDevice();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_devices_device_pb.Device.serializeBinaryToWriter
    );
  }
  f = message.getTopicSubscription();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_services_request_topicSubscription_pb.TopicSubscription.serializeBinaryToWriter
    );
  }
  f = message.getSession();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_sessions_session_pb.Session.serializeBinaryToWriter
    );
  }
  f = message.getSessionList();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_sessions_session_pb.SessionList.serializeBinaryToWriter
    );
  }
  f = message.getInteraction();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_interactions_interaction_pb.Interaction.serializeBinaryToWriter
    );
  }
  f = message.getInteractionList();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_interactions_interaction_pb.InteractionList.serializeBinaryToWriter
    );
  }
  f = message.getTopicMux();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_devices_topicMux_pb.TopicMux.serializeBinaryToWriter
    );
  }
  f = message.getTopicDemux();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto_devices_topicDemux_pb.TopicDemux.serializeBinaryToWriter
    );
  }
};


/**
 * optional string topic = 1;
 * @return {string}
 */
proto.ubii.services.ServiceRequest.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ubii.services.ServiceRequest.prototype.setTopic = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ubii.clients.Client client = 2;
 * @return {?proto.ubii.clients.Client}
 */
proto.ubii.services.ServiceRequest.prototype.getClient = function() {
  return /** @type{?proto.ubii.clients.Client} */ (
    jspb.Message.getWrapperField(this, proto_clients_client_pb.Client, 2));
};


/** @param {?proto.ubii.clients.Client|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setClient = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearClient = function() {
  this.setClient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasClient = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ubii.devices.Device device = 3;
 * @return {?proto.ubii.devices.Device}
 */
proto.ubii.services.ServiceRequest.prototype.getDevice = function() {
  return /** @type{?proto.ubii.devices.Device} */ (
    jspb.Message.getWrapperField(this, proto_devices_device_pb.Device, 3));
};


/** @param {?proto.ubii.devices.Device|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setDevice = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearDevice = function() {
  this.setDevice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasDevice = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional request.TopicSubscription topic_subscription = 4;
 * @return {?proto.ubii.services.request.TopicSubscription}
 */
proto.ubii.services.ServiceRequest.prototype.getTopicSubscription = function() {
  return /** @type{?proto.ubii.services.request.TopicSubscription} */ (
    jspb.Message.getWrapperField(this, proto_services_request_topicSubscription_pb.TopicSubscription, 4));
};


/** @param {?proto.ubii.services.request.TopicSubscription|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setTopicSubscription = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearTopicSubscription = function() {
  this.setTopicSubscription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasTopicSubscription = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ubii.sessions.Session session = 5;
 * @return {?proto.ubii.sessions.Session}
 */
proto.ubii.services.ServiceRequest.prototype.getSession = function() {
  return /** @type{?proto.ubii.sessions.Session} */ (
    jspb.Message.getWrapperField(this, proto_sessions_session_pb.Session, 5));
};


/** @param {?proto.ubii.sessions.Session|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setSession = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearSession = function() {
  this.setSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasSession = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ubii.sessions.SessionList session_list = 6;
 * @return {?proto.ubii.sessions.SessionList}
 */
proto.ubii.services.ServiceRequest.prototype.getSessionList = function() {
  return /** @type{?proto.ubii.sessions.SessionList} */ (
    jspb.Message.getWrapperField(this, proto_sessions_session_pb.SessionList, 6));
};


/** @param {?proto.ubii.sessions.SessionList|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setSessionList = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearSessionList = function() {
  this.setSessionList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasSessionList = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ubii.interactions.Interaction interaction = 7;
 * @return {?proto.ubii.interactions.Interaction}
 */
proto.ubii.services.ServiceRequest.prototype.getInteraction = function() {
  return /** @type{?proto.ubii.interactions.Interaction} */ (
    jspb.Message.getWrapperField(this, proto_interactions_interaction_pb.Interaction, 7));
};


/** @param {?proto.ubii.interactions.Interaction|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setInteraction = function(value) {
  jspb.Message.setOneofWrapperField(this, 7, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearInteraction = function() {
  this.setInteraction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasInteraction = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ubii.interactions.InteractionList interaction_list = 8;
 * @return {?proto.ubii.interactions.InteractionList}
 */
proto.ubii.services.ServiceRequest.prototype.getInteractionList = function() {
  return /** @type{?proto.ubii.interactions.InteractionList} */ (
    jspb.Message.getWrapperField(this, proto_interactions_interaction_pb.InteractionList, 8));
};


/** @param {?proto.ubii.interactions.InteractionList|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setInteractionList = function(value) {
  jspb.Message.setOneofWrapperField(this, 8, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearInteractionList = function() {
  this.setInteractionList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasInteractionList = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ubii.devices.TopicMux topic_mux = 9;
 * @return {?proto.ubii.devices.TopicMux}
 */
proto.ubii.services.ServiceRequest.prototype.getTopicMux = function() {
  return /** @type{?proto.ubii.devices.TopicMux} */ (
    jspb.Message.getWrapperField(this, proto_devices_topicMux_pb.TopicMux, 9));
};


/** @param {?proto.ubii.devices.TopicMux|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setTopicMux = function(value) {
  jspb.Message.setOneofWrapperField(this, 9, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearTopicMux = function() {
  this.setTopicMux(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasTopicMux = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ubii.devices.TopicDemux topic_demux = 10;
 * @return {?proto.ubii.devices.TopicDemux}
 */
proto.ubii.services.ServiceRequest.prototype.getTopicDemux = function() {
  return /** @type{?proto.ubii.devices.TopicDemux} */ (
    jspb.Message.getWrapperField(this, proto_devices_topicDemux_pb.TopicDemux, 10));
};


/** @param {?proto.ubii.devices.TopicDemux|undefined} value */
proto.ubii.services.ServiceRequest.prototype.setTopicDemux = function(value) {
  jspb.Message.setOneofWrapperField(this, 10, proto.ubii.services.ServiceRequest.oneofGroups_[0], value);
};


proto.ubii.services.ServiceRequest.prototype.clearTopicDemux = function() {
  this.setTopicDemux(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ubii.services.ServiceRequest.prototype.hasTopicDemux = function() {
  return jspb.Message.getField(this, 10) != null;
};


goog.object.extend(exports, proto.ubii.services);
