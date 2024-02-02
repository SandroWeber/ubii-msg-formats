// source: proto/dataStructure/object2d.proto
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

var proto_dataStructure_pose2d_pb = require('../../proto/dataStructure/pose2d_pb.js');
goog.object.extend(proto, proto_dataStructure_pose2d_pb);
var proto_dataStructure_vector2_pb = require('../../proto/dataStructure/vector2_pb.js');
goog.object.extend(proto, proto_dataStructure_vector2_pb);
goog.exportSymbol('proto.ubii.dataStructure.Object2D', null, global);
goog.exportSymbol('proto.ubii.dataStructure.Object2DList', null, global);
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
proto.ubii.dataStructure.Object2D = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ubii.dataStructure.Object2D, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.Object2D.displayName = 'proto.ubii.dataStructure.Object2D';
}
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
proto.ubii.dataStructure.Object2DList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.dataStructure.Object2DList.repeatedFields_, null);
};
goog.inherits(proto.ubii.dataStructure.Object2DList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.dataStructure.Object2DList.displayName = 'proto.ubii.dataStructure.Object2DList';
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
proto.ubii.dataStructure.Object2D.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Object2D.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Object2D} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Object2D.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pose: (f = msg.getPose()) && proto_dataStructure_pose2d_pb.Pose2D.toObject(includeInstance, f),
    size: (f = msg.getSize()) && proto_dataStructure_vector2_pb.Vector2.toObject(includeInstance, f),
    userDataJson: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.ubii.dataStructure.Object2D}
 */
proto.ubii.dataStructure.Object2D.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Object2D;
  return proto.ubii.dataStructure.Object2D.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Object2D} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Object2D}
 */
proto.ubii.dataStructure.Object2D.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto_dataStructure_pose2d_pb.Pose2D;
      reader.readMessage(value,proto_dataStructure_pose2d_pb.Pose2D.deserializeBinaryFromReader);
      msg.setPose(value);
      break;
    case 3:
      var value = new proto_dataStructure_vector2_pb.Vector2;
      reader.readMessage(value,proto_dataStructure_vector2_pb.Vector2.deserializeBinaryFromReader);
      msg.setSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserDataJson(value);
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
proto.ubii.dataStructure.Object2D.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Object2D.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Object2D} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Object2D.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPose();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_dataStructure_pose2d_pb.Pose2D.serializeBinaryToWriter
    );
  }
  f = message.getSize();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_dataStructure_vector2_pb.Vector2.serializeBinaryToWriter
    );
  }
  f = message.getUserDataJson();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ubii.dataStructure.Object2D.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.dataStructure.Object2D} returns this
 */
proto.ubii.dataStructure.Object2D.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Pose2D pose = 2;
 * @return {?proto.ubii.dataStructure.Pose2D}
 */
proto.ubii.dataStructure.Object2D.prototype.getPose = function() {
  return /** @type{?proto.ubii.dataStructure.Pose2D} */ (
    jspb.Message.getWrapperField(this, proto_dataStructure_pose2d_pb.Pose2D, 2));
};


/**
 * @param {?proto.ubii.dataStructure.Pose2D|undefined} value
 * @return {!proto.ubii.dataStructure.Object2D} returns this
*/
proto.ubii.dataStructure.Object2D.prototype.setPose = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.dataStructure.Object2D} returns this
 */
proto.ubii.dataStructure.Object2D.prototype.clearPose = function() {
  return this.setPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.dataStructure.Object2D.prototype.hasPose = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Vector2 size = 3;
 * @return {?proto.ubii.dataStructure.Vector2}
 */
proto.ubii.dataStructure.Object2D.prototype.getSize = function() {
  return /** @type{?proto.ubii.dataStructure.Vector2} */ (
    jspb.Message.getWrapperField(this, proto_dataStructure_vector2_pb.Vector2, 3));
};


/**
 * @param {?proto.ubii.dataStructure.Vector2|undefined} value
 * @return {!proto.ubii.dataStructure.Object2D} returns this
*/
proto.ubii.dataStructure.Object2D.prototype.setSize = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.dataStructure.Object2D} returns this
 */
proto.ubii.dataStructure.Object2D.prototype.clearSize = function() {
  return this.setSize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.dataStructure.Object2D.prototype.hasSize = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string user_data_json = 4;
 * @return {string}
 */
proto.ubii.dataStructure.Object2D.prototype.getUserDataJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.dataStructure.Object2D} returns this
 */
proto.ubii.dataStructure.Object2D.prototype.setUserDataJson = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.dataStructure.Object2DList.repeatedFields_ = [1];



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
proto.ubii.dataStructure.Object2DList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.dataStructure.Object2DList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.dataStructure.Object2DList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Object2DList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.ubii.dataStructure.Object2D.toObject, includeInstance)
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
 * @return {!proto.ubii.dataStructure.Object2DList}
 */
proto.ubii.dataStructure.Object2DList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.dataStructure.Object2DList;
  return proto.ubii.dataStructure.Object2DList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.dataStructure.Object2DList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.dataStructure.Object2DList}
 */
proto.ubii.dataStructure.Object2DList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.dataStructure.Object2D;
      reader.readMessage(value,proto.ubii.dataStructure.Object2D.deserializeBinaryFromReader);
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
proto.ubii.dataStructure.Object2DList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.dataStructure.Object2DList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.dataStructure.Object2DList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.dataStructure.Object2DList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ubii.dataStructure.Object2D.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Object2D elements = 1;
 * @return {!Array<!proto.ubii.dataStructure.Object2D>}
 */
proto.ubii.dataStructure.Object2DList.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.ubii.dataStructure.Object2D>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.dataStructure.Object2D, 1));
};


/**
 * @param {!Array<!proto.ubii.dataStructure.Object2D>} value
 * @return {!proto.ubii.dataStructure.Object2DList} returns this
*/
proto.ubii.dataStructure.Object2DList.prototype.setElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ubii.dataStructure.Object2D=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.dataStructure.Object2D}
 */
proto.ubii.dataStructure.Object2DList.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ubii.dataStructure.Object2D, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.dataStructure.Object2DList} returns this
 */
proto.ubii.dataStructure.Object2DList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};


goog.object.extend(exports, proto.ubii.dataStructure);
