// source: proto/topicData/topicDataRecord/dataStructure/matrix4x4.proto
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

goog.exportSymbol('proto.ubii.dataStructure.Matrix4x4', null, global);
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
proto.ubii.dataStructure.Matrix4x4 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.dataStructure.Matrix4x4, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.Matrix4x4.displayName = 'proto.ubii.dataStructure.Matrix4x4';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Matrix4x4.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Matrix4x4} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Matrix4x4.toObject = function(includeInstance, msg) {
  var f, obj = {
    m00: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    m01: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    m02: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    m03: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    m10: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    m11: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    m12: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    m13: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    m20: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    m21: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    m22: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    m23: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    m30: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0),
    m31: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    m32: jspb.Message.getFloatingPointFieldWithDefault(msg, 15, 0.0),
    m33: jspb.Message.getFloatingPointFieldWithDefault(msg, 16, 0.0)
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
 * @return {!proto.ubii.dataStructure.Matrix4x4}
 */
proto.ubii.dataStructure.Matrix4x4.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Matrix4x4;
  return proto.ubii.dataStructure.Matrix4x4.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Matrix4x4} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Matrix4x4}
 */
proto.ubii.dataStructure.Matrix4x4.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM00(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM01(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM02(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM03(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM10(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM11(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM12(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM13(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM20(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM21(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM22(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM23(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM30(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM31(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM32(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setM33(value);
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
proto.ubii.dataStructure.Matrix4x4.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Matrix4x4.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Matrix4x4} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Matrix4x4.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getM00();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getM01();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getM02();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getM03();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getM10();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getM11();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getM12();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getM13();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getM20();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getM21();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getM22();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getM23();
  if (f !== 0.0) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = message.getM30();
  if (f !== 0.0) {
    writer.writeDouble(
      13,
      f
    );
  }
  f = message.getM31();
  if (f !== 0.0) {
    writer.writeDouble(
      14,
      f
    );
  }
  f = message.getM32();
  if (f !== 0.0) {
    writer.writeDouble(
      15,
      f
    );
  }
  f = message.getM33();
  if (f !== 0.0) {
    writer.writeDouble(
      16,
      f
    );
  }
};


/**
 * optional double m00 = 1;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM00 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM00 = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double m01 = 2;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM01 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM01 = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double m02 = 3;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM02 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM02 = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double m03 = 4;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM03 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM03 = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional double m10 = 5;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM10 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM10 = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional double m11 = 6;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM11 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM11 = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double m12 = 7;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM12 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM12 = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double m13 = 8;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM13 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM13 = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional double m20 = 9;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM20 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM20 = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional double m21 = 10;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM21 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM21 = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional double m22 = 11;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM22 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM22 = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional double m23 = 12;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM23 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM23 = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional double m30 = 13;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM30 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM30 = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};


/**
 * optional double m31 = 14;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM31 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM31 = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional double m32 = 15;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM32 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM32 = function(value) {
  return jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional double m33 = 16;
 * @return {number}
 */
proto.ubii.dataStructure.Matrix4x4.prototype.getM33 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.dataStructure.Matrix4x4} returns this
 */
proto.ubii.dataStructure.Matrix4x4.prototype.setM33 = function(value) {
  return jspb.Message.setProto3FloatField(this, 16, value);
};


goog.object.extend(exports, proto.ubii.dataStructure);
