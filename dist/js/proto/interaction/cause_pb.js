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

var proto_interaction_ioMapping_pb = require('../../proto/interaction/ioMapping_pb.js');
goog.exportSymbol('proto.ubii.interaction.Cause', null, global);

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
proto.ubii.interaction.Cause = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.interaction.Cause.repeatedFields_, null);
};
goog.inherits(proto.ubii.interaction.Cause, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ubii.interaction.Cause.displayName = 'proto.ubii.interaction.Cause';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.interaction.Cause.repeatedFields_ = [4];



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
proto.ubii.interaction.Cause.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.interaction.Cause.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.interaction.Cause} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.interaction.Cause.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    callback: jspb.Message.getFieldWithDefault(msg, 3, ""),
    inputsList: jspb.Message.toObjectList(msg.getInputsList(),
    proto_interaction_ioMapping_pb.IOMapping.toObject, includeInstance)
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
 * @return {!proto.ubii.interaction.Cause}
 */
proto.ubii.interaction.Cause.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.interaction.Cause;
  return proto.ubii.interaction.Cause.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.interaction.Cause} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.interaction.Cause}
 */
proto.ubii.interaction.Cause.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallback(value);
      break;
    case 4:
      var value = new proto_interaction_ioMapping_pb.IOMapping;
      reader.readMessage(value,proto_interaction_ioMapping_pb.IOMapping.deserializeBinaryFromReader);
      msg.addInputs(value);
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
proto.ubii.interaction.Cause.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.interaction.Cause.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.interaction.Cause} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.interaction.Cause.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCallback();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getInputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto_interaction_ioMapping_pb.IOMapping.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ubii.interaction.Cause.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ubii.interaction.Cause.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ubii.interaction.Cause.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.ubii.interaction.Cause.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string callback = 3;
 * @return {string}
 */
proto.ubii.interaction.Cause.prototype.getCallback = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.ubii.interaction.Cause.prototype.setCallback = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated IOMapping inputs = 4;
 * @return {!Array<!proto.ubii.interaction.IOMapping>}
 */
proto.ubii.interaction.Cause.prototype.getInputsList = function() {
  return /** @type{!Array<!proto.ubii.interaction.IOMapping>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_interaction_ioMapping_pb.IOMapping, 4));
};


/** @param {!Array<!proto.ubii.interaction.IOMapping>} value */
proto.ubii.interaction.Cause.prototype.setInputsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ubii.interaction.IOMapping=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.interaction.IOMapping}
 */
proto.ubii.interaction.Cause.prototype.addInputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ubii.interaction.IOMapping, opt_index);
};


proto.ubii.interaction.Cause.prototype.clearInputsList = function() {
  this.setInputsList([]);
};


goog.object.extend(exports, proto.ubii.interaction);
