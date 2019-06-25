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

var proto_devices_device_pb = require('../../proto/devices/device_pb.js');
goog.exportSymbol('proto.ubii.clients.Client', null, global);
goog.exportSymbol('proto.ubii.clients.ClientList', null, global);

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
proto.ubii.clients.Client = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.clients.Client.repeatedFields_, null);
};
goog.inherits(proto.ubii.clients.Client, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ubii.clients.Client.displayName = 'proto.ubii.clients.Client';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.clients.Client.repeatedFields_ = [3];



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
proto.ubii.clients.Client.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.clients.Client.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.clients.Client} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.clients.Client.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    devicesList: jspb.Message.toObjectList(msg.getDevicesList(),
    proto_devices_device_pb.Device.toObject, includeInstance)
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
 * @return {!proto.ubii.clients.Client}
 */
proto.ubii.clients.Client.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.clients.Client;
  return proto.ubii.clients.Client.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.clients.Client} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.clients.Client}
 */
proto.ubii.clients.Client.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto_devices_device_pb.Device;
      reader.readMessage(value,proto_devices_device_pb.Device.deserializeBinaryFromReader);
      msg.addDevices(value);
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
proto.ubii.clients.Client.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.clients.Client.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.clients.Client} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.clients.Client.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getDevicesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_devices_device_pb.Device.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ubii.clients.Client.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ubii.clients.Client.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ubii.clients.Client.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.ubii.clients.Client.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated ubii.devices.Device devices = 3;
 * @return {!Array<!proto.ubii.devices.Device>}
 */
proto.ubii.clients.Client.prototype.getDevicesList = function() {
  return /** @type{!Array<!proto.ubii.devices.Device>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_devices_device_pb.Device, 3));
};


/** @param {!Array<!proto.ubii.devices.Device>} value */
proto.ubii.clients.Client.prototype.setDevicesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ubii.devices.Device=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.devices.Device}
 */
proto.ubii.clients.Client.prototype.addDevices = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ubii.devices.Device, opt_index);
};


proto.ubii.clients.Client.prototype.clearDevicesList = function() {
  this.setDevicesList([]);
};



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
proto.ubii.clients.ClientList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.clients.ClientList.repeatedFields_, null);
};
goog.inherits(proto.ubii.clients.ClientList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ubii.clients.ClientList.displayName = 'proto.ubii.clients.ClientList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.clients.ClientList.repeatedFields_ = [1];



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
proto.ubii.clients.ClientList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.clients.ClientList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.clients.ClientList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.clients.ClientList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.ubii.clients.Client.toObject, includeInstance)
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
 * @return {!proto.ubii.clients.ClientList}
 */
proto.ubii.clients.ClientList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.clients.ClientList;
  return proto.ubii.clients.ClientList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.clients.ClientList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.clients.ClientList}
 */
proto.ubii.clients.ClientList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.clients.Client;
      reader.readMessage(value,proto.ubii.clients.Client.deserializeBinaryFromReader);
      msg.addElements(value);
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
proto.ubii.clients.ClientList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.clients.ClientList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.clients.ClientList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.clients.ClientList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ubii.clients.Client.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Client elements = 1;
 * @return {!Array<!proto.ubii.clients.Client>}
 */
proto.ubii.clients.ClientList.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.ubii.clients.Client>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.clients.Client, 1));
};


/** @param {!Array<!proto.ubii.clients.Client>} value */
proto.ubii.clients.ClientList.prototype.setElementsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ubii.clients.Client=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.clients.Client}
 */
proto.ubii.clients.ClientList.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ubii.clients.Client, opt_index);
};


proto.ubii.clients.ClientList.prototype.clearElementsList = function() {
  this.setElementsList([]);
};


goog.object.extend(exports, proto.ubii.clients);
