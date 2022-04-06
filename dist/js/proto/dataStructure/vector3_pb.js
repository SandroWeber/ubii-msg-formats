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

goog.exportSymbol('proto.ubii.dataStructure.Vector3', null, global);
goog.exportSymbol('proto.ubii.dataStructure.Vector3List', null, global);

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
proto.ubii.dataStructure.Vector3 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.dataStructure.Vector3, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ubii.dataStructure.Vector3.displayName = 'proto.ubii.dataStructure.Vector3';
}


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
proto.ubii.dataStructure.Vector3.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Vector3.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Vector3} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Vector3.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: +jspb.Message.getFieldWithDefault(msg, 1, 0.0),
    y: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    z: +jspb.Message.getFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.ubii.dataStructure.Vector3}
 */
proto.ubii.dataStructure.Vector3.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Vector3;
  return proto.ubii.dataStructure.Vector3.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Vector3} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Vector3}
 */
proto.ubii.dataStructure.Vector3.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setZ(value);
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
proto.ubii.dataStructure.Vector3.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Vector3.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Vector3} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Vector3.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getZ();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional double x = 1;
 * @return {number}
 */
proto.ubii.dataStructure.Vector3.prototype.getX = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.ubii.dataStructure.Vector3.prototype.setX = function(value) {
  jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double y = 2;
 * @return {number}
 */
proto.ubii.dataStructure.Vector3.prototype.getY = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.ubii.dataStructure.Vector3.prototype.setY = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double z = 3;
 * @return {number}
 */
proto.ubii.dataStructure.Vector3.prototype.getZ = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.ubii.dataStructure.Vector3.prototype.setZ = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
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
proto.ubii.dataStructure.Vector3List = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.dataStructure.Vector3List.repeatedFields_, null);
};
goog.inherits(proto.ubii.dataStructure.Vector3List, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ubii.dataStructure.Vector3List.displayName = 'proto.ubii.dataStructure.Vector3List';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.dataStructure.Vector3List.repeatedFields_ = [1];



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
proto.ubii.dataStructure.Vector3List.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Vector3List.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Vector3List} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Vector3List.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.ubii.dataStructure.Vector3.toObject, includeInstance)
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
 * @return {!proto.ubii.dataStructure.Vector3List}
 */
proto.ubii.dataStructure.Vector3List.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Vector3List;
  return proto.ubii.dataStructure.Vector3List.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Vector3List} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Vector3List}
 */
proto.ubii.dataStructure.Vector3List.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.dataStructure.Vector3;
      reader.readMessage(value,proto.ubii.dataStructure.Vector3.deserializeBinaryFromReader);
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
proto.ubii.dataStructure.Vector3List.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Vector3List.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Vector3List} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Vector3List.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ubii.dataStructure.Vector3.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Vector3 elements = 1;
 * @return {!Array<!proto.ubii.dataStructure.Vector3>}
 */
proto.ubii.dataStructure.Vector3List.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.ubii.dataStructure.Vector3>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.dataStructure.Vector3, 1));
};


/** @param {!Array<!proto.ubii.dataStructure.Vector3>} value */
proto.ubii.dataStructure.Vector3List.prototype.setElementsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ubii.dataStructure.Vector3=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.dataStructure.Vector3}
 */
proto.ubii.dataStructure.Vector3List.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ubii.dataStructure.Vector3, opt_index);
};


proto.ubii.dataStructure.Vector3List.prototype.clearElementsList = function() {
  this.setElementsList([]);
};


goog.object.extend(exports, proto.ubii.dataStructure);