// source: proto/topicData/topicDataRecord/topicDataRecord.proto
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

var proto_topicData_topicDataRecord_timestamp_pb = require('../../../proto/topicData/topicDataRecord/timestamp_pb.js');
goog.object.extend(proto, proto_topicData_topicDataRecord_timestamp_pb);
var proto_topicData_topicDataRecord_dataStructure_lists_pb = require('../../../proto/topicData/topicDataRecord/dataStructure/lists_pb.js');
goog.object.extend(proto, proto_topicData_topicDataRecord_dataStructure_lists_pb);
var proto_topicData_topicDataRecord_dataStructure_vector2_pb = require('../../../proto/topicData/topicDataRecord/dataStructure/vector2_pb.js');
goog.object.extend(proto, proto_topicData_topicDataRecord_dataStructure_vector2_pb);
var proto_topicData_topicDataRecord_dataStructure_vector3_pb = require('../../../proto/topicData/topicDataRecord/dataStructure/vector3_pb.js');
goog.object.extend(proto, proto_topicData_topicDataRecord_dataStructure_vector3_pb);
var proto_topicData_topicDataRecord_dataStructure_vector4_pb = require('../../../proto/topicData/topicDataRecord/dataStructure/vector4_pb.js');
goog.object.extend(proto, proto_topicData_topicDataRecord_dataStructure_vector4_pb);
var proto_topicData_topicDataRecord_dataStructure_quaternion_pb = require('../../../proto/topicData/topicDataRecord/dataStructure/quaternion_pb.js');
goog.object.extend(proto, proto_topicData_topicDataRecord_dataStructure_quaternion_pb);
var proto_topicData_topicDataRecord_dataStructure_matrix3x2_pb = require('../../../proto/topicData/topicDataRecord/dataStructure/matrix3x2_pb.js');
goog.object.extend(proto, proto_topicData_topicDataRecord_dataStructure_matrix3x2_pb);
var proto_topicData_topicDataRecord_dataStructure_matrix4x4_pb = require('../../../proto/topicData/topicDataRecord/dataStructure/matrix4x4_pb.js');
goog.object.extend(proto, proto_topicData_topicDataRecord_dataStructure_matrix4x4_pb);
var proto_topicData_topicDataRecord_dataStructure_color_pb = require('../../../proto/topicData/topicDataRecord/dataStructure/color_pb.js');
goog.object.extend(proto, proto_topicData_topicDataRecord_dataStructure_color_pb);
var proto_topicData_topicDataRecord_dataStructure_touchEvent_pb = require('../../../proto/topicData/topicDataRecord/dataStructure/touchEvent_pb.js');
goog.object.extend(proto, proto_topicData_topicDataRecord_dataStructure_touchEvent_pb);
var proto_topicData_topicDataRecord_dataStructure_keyEvent_pb = require('../../../proto/topicData/topicDataRecord/dataStructure/keyEvent_pb.js');
goog.object.extend(proto, proto_topicData_topicDataRecord_dataStructure_keyEvent_pb);
var proto_topicData_topicDataRecord_dataStructure_mouseEvent_pb = require('../../../proto/topicData/topicDataRecord/dataStructure/mouseEvent_pb.js');
goog.object.extend(proto, proto_topicData_topicDataRecord_dataStructure_mouseEvent_pb);
var proto_topicData_topicDataRecord_dataStructure_myoEvent_pb = require('../../../proto/topicData/topicDataRecord/dataStructure/myoEvent_pb.js');
goog.object.extend(proto, proto_topicData_topicDataRecord_dataStructure_myoEvent_pb);
var proto_topicData_topicDataRecord_dataStructure_pose2d_pb = require('../../../proto/topicData/topicDataRecord/dataStructure/pose2d_pb.js');
goog.object.extend(proto, proto_topicData_topicDataRecord_dataStructure_pose2d_pb);
var proto_topicData_topicDataRecord_dataStructure_pose3d_pb = require('../../../proto/topicData/topicDataRecord/dataStructure/pose3d_pb.js');
goog.object.extend(proto, proto_topicData_topicDataRecord_dataStructure_pose3d_pb);
var proto_topicData_topicDataRecord_dataStructure_object2d_pb = require('../../../proto/topicData/topicDataRecord/dataStructure/object2d_pb.js');
goog.object.extend(proto, proto_topicData_topicDataRecord_dataStructure_object2d_pb);
var proto_topicData_topicDataRecord_dataStructure_object3d_pb = require('../../../proto/topicData/topicDataRecord/dataStructure/object3d_pb.js');
goog.object.extend(proto, proto_topicData_topicDataRecord_dataStructure_object3d_pb);
var proto_topicData_topicDataRecord_dataStructure_image_pb = require('../../../proto/topicData/topicDataRecord/dataStructure/image_pb.js');
goog.object.extend(proto, proto_topicData_topicDataRecord_dataStructure_image_pb);
var proto_sessions_session_pb = require('../../../proto/sessions/session_pb.js');
goog.object.extend(proto, proto_sessions_session_pb);
var proto_processing_processingModule_pb = require('../../../proto/processing/processingModule_pb.js');
goog.object.extend(proto, proto_processing_processingModule_pb);
goog.exportSymbol('proto.ubii.topicData.TopicDataRecord', null, global);
goog.exportSymbol('proto.ubii.topicData.TopicDataRecord.TypeCase', null, global);
goog.exportSymbol('proto.ubii.topicData.TopicDataRecordList', null, global);
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
proto.ubii.topicData.TopicDataRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ubii.topicData.TopicDataRecord.oneofGroups_);
};
goog.inherits(proto.ubii.topicData.TopicDataRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.topicData.TopicDataRecord.displayName = 'proto.ubii.topicData.TopicDataRecord';
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
proto.ubii.topicData.TopicDataRecordList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ubii.topicData.TopicDataRecordList.repeatedFields_, null);
};
goog.inherits(proto.ubii.topicData.TopicDataRecordList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ubii.topicData.TopicDataRecordList.displayName = 'proto.ubii.topicData.TopicDataRecordList';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ubii.topicData.TopicDataRecord.oneofGroups_ = [[3,4,5,23,24,6,35,7,36,8,37,9,38,10,11,12,13,34,14,15,16,17,18,19,20,21,22,25,26,27,28,29,30,31,32]];

/**
 * @enum {number}
 */
proto.ubii.topicData.TopicDataRecord.TypeCase = {
  TYPE_NOT_SET: 0,
  DOUBLE: 3,
  BOOL: 4,
  STRING: 5,
  INT32: 23,
  FLOAT: 24,
  VECTOR2: 6,
  VECTOR2_LIST: 35,
  VECTOR3: 7,
  VECTOR3_LIST: 36,
  VECTOR4: 8,
  VECTOR4_LIST: 37,
  QUATERNION: 9,
  QUATERNION_LIST: 38,
  MATRIX3X2: 10,
  MATRIX4X4: 11,
  COLOR: 12,
  TOUCH_EVENT: 13,
  TOUCH_EVENT_LIST: 34,
  KEY_EVENT: 14,
  MOUSE_EVENT: 15,
  MYO_EVENT: 16,
  POSE2D: 17,
  POSE3D: 18,
  OBJECT2D: 19,
  OBJECT3D: 20,
  OBJECT2D_LIST: 21,
  OBJECT3D_LIST: 22,
  INT32_LIST: 25,
  FLOAT_LIST: 26,
  DOUBLE_LIST: 27,
  STRING_LIST: 28,
  BOOL_LIST: 29,
  IMAGE2D: 30,
  IMAGE2D_LIST: 31,
  SESSION: 32
};

/**
 * @return {proto.ubii.topicData.TopicDataRecord.TypeCase}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getTypeCase = function() {
  return /** @type {proto.ubii.topicData.TopicDataRecord.TypeCase} */(jspb.Message.computeOneofCase(this, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0]));
};



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
proto.ubii.topicData.TopicDataRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.topicData.TopicDataRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.topicData.TopicDataRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.topicData.TopicDataRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    topic: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: (f = msg.getTimestamp()) && proto_topicData_topicDataRecord_timestamp_pb.Timestamp.toObject(includeInstance, f),
    pb_double: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    bool: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    string: jspb.Message.getFieldWithDefault(msg, 5, ""),
    int32: jspb.Message.getFieldWithDefault(msg, 23, 0),
    pb_float: jspb.Message.getFloatingPointFieldWithDefault(msg, 24, 0.0),
    vector2: (f = msg.getVector2()) && proto_topicData_topicDataRecord_dataStructure_vector2_pb.Vector2.toObject(includeInstance, f),
    vector2List: (f = msg.getVector2List()) && proto_topicData_topicDataRecord_dataStructure_vector2_pb.Vector2List.toObject(includeInstance, f),
    vector3: (f = msg.getVector3()) && proto_topicData_topicDataRecord_dataStructure_vector3_pb.Vector3.toObject(includeInstance, f),
    vector3List: (f = msg.getVector3List()) && proto_topicData_topicDataRecord_dataStructure_vector3_pb.Vector3List.toObject(includeInstance, f),
    vector4: (f = msg.getVector4()) && proto_topicData_topicDataRecord_dataStructure_vector4_pb.Vector4.toObject(includeInstance, f),
    vector4List: (f = msg.getVector4List()) && proto_topicData_topicDataRecord_dataStructure_vector4_pb.Vector4List.toObject(includeInstance, f),
    quaternion: (f = msg.getQuaternion()) && proto_topicData_topicDataRecord_dataStructure_quaternion_pb.Quaternion.toObject(includeInstance, f),
    quaternionList: (f = msg.getQuaternionList()) && proto_topicData_topicDataRecord_dataStructure_quaternion_pb.Quaternion.toObject(includeInstance, f),
    matrix3x2: (f = msg.getMatrix3x2()) && proto_topicData_topicDataRecord_dataStructure_matrix3x2_pb.Matrix3x2.toObject(includeInstance, f),
    matrix4x4: (f = msg.getMatrix4x4()) && proto_topicData_topicDataRecord_dataStructure_matrix4x4_pb.Matrix4x4.toObject(includeInstance, f),
    color: (f = msg.getColor()) && proto_topicData_topicDataRecord_dataStructure_color_pb.Color.toObject(includeInstance, f),
    touchEvent: (f = msg.getTouchEvent()) && proto_topicData_topicDataRecord_dataStructure_touchEvent_pb.TouchEvent.toObject(includeInstance, f),
    touchEventList: (f = msg.getTouchEventList()) && proto_topicData_topicDataRecord_dataStructure_touchEvent_pb.TouchEventList.toObject(includeInstance, f),
    keyEvent: (f = msg.getKeyEvent()) && proto_topicData_topicDataRecord_dataStructure_keyEvent_pb.KeyEvent.toObject(includeInstance, f),
    mouseEvent: (f = msg.getMouseEvent()) && proto_topicData_topicDataRecord_dataStructure_mouseEvent_pb.MouseEvent.toObject(includeInstance, f),
    myoEvent: (f = msg.getMyoEvent()) && proto_topicData_topicDataRecord_dataStructure_myoEvent_pb.MyoEvent.toObject(includeInstance, f),
    pose2d: (f = msg.getPose2d()) && proto_topicData_topicDataRecord_dataStructure_pose2d_pb.Pose2D.toObject(includeInstance, f),
    pose3d: (f = msg.getPose3d()) && proto_topicData_topicDataRecord_dataStructure_pose3d_pb.Pose3D.toObject(includeInstance, f),
    object2d: (f = msg.getObject2d()) && proto_topicData_topicDataRecord_dataStructure_object2d_pb.Object2D.toObject(includeInstance, f),
    object3d: (f = msg.getObject3d()) && proto_topicData_topicDataRecord_dataStructure_object3d_pb.Object3D.toObject(includeInstance, f),
    object2dList: (f = msg.getObject2dList()) && proto_topicData_topicDataRecord_dataStructure_object2d_pb.Object2DList.toObject(includeInstance, f),
    object3dList: (f = msg.getObject3dList()) && proto_topicData_topicDataRecord_dataStructure_object3d_pb.Object3DList.toObject(includeInstance, f),
    int32List: (f = msg.getInt32List()) && proto_topicData_topicDataRecord_dataStructure_lists_pb.Int32List.toObject(includeInstance, f),
    floatList: (f = msg.getFloatList()) && proto_topicData_topicDataRecord_dataStructure_lists_pb.FloatList.toObject(includeInstance, f),
    doubleList: (f = msg.getDoubleList()) && proto_topicData_topicDataRecord_dataStructure_lists_pb.DoubleList.toObject(includeInstance, f),
    stringList: (f = msg.getStringList()) && proto_topicData_topicDataRecord_dataStructure_lists_pb.StringList.toObject(includeInstance, f),
    boolList: (f = msg.getBoolList()) && proto_topicData_topicDataRecord_dataStructure_lists_pb.BoolList.toObject(includeInstance, f),
    image2d: (f = msg.getImage2d()) && proto_topicData_topicDataRecord_dataStructure_image_pb.Image2D.toObject(includeInstance, f),
    image2dList: (f = msg.getImage2dList()) && proto_topicData_topicDataRecord_dataStructure_image_pb.Image2DList.toObject(includeInstance, f),
    session: (f = msg.getSession()) && proto_sessions_session_pb.Session.toObject(includeInstance, f)
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
 * @return {!proto.ubii.topicData.TopicDataRecord}
 */
proto.ubii.topicData.TopicDataRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.topicData.TopicDataRecord;
  return proto.ubii.topicData.TopicDataRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.topicData.TopicDataRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.topicData.TopicDataRecord}
 */
proto.ubii.topicData.TopicDataRecord.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto_topicData_topicDataRecord_timestamp_pb.Timestamp;
      reader.readMessage(value,proto_topicData_topicDataRecord_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDouble(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBool(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setString(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInt32(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFloat(value);
      break;
    case 6:
      var value = new proto_topicData_topicDataRecord_dataStructure_vector2_pb.Vector2;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_vector2_pb.Vector2.deserializeBinaryFromReader);
      msg.setVector2(value);
      break;
    case 35:
      var value = new proto_topicData_topicDataRecord_dataStructure_vector2_pb.Vector2List;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_vector2_pb.Vector2List.deserializeBinaryFromReader);
      msg.setVector2List(value);
      break;
    case 7:
      var value = new proto_topicData_topicDataRecord_dataStructure_vector3_pb.Vector3;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_vector3_pb.Vector3.deserializeBinaryFromReader);
      msg.setVector3(value);
      break;
    case 36:
      var value = new proto_topicData_topicDataRecord_dataStructure_vector3_pb.Vector3List;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_vector3_pb.Vector3List.deserializeBinaryFromReader);
      msg.setVector3List(value);
      break;
    case 8:
      var value = new proto_topicData_topicDataRecord_dataStructure_vector4_pb.Vector4;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_vector4_pb.Vector4.deserializeBinaryFromReader);
      msg.setVector4(value);
      break;
    case 37:
      var value = new proto_topicData_topicDataRecord_dataStructure_vector4_pb.Vector4List;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_vector4_pb.Vector4List.deserializeBinaryFromReader);
      msg.setVector4List(value);
      break;
    case 9:
      var value = new proto_topicData_topicDataRecord_dataStructure_quaternion_pb.Quaternion;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_quaternion_pb.Quaternion.deserializeBinaryFromReader);
      msg.setQuaternion(value);
      break;
    case 38:
      var value = new proto_topicData_topicDataRecord_dataStructure_quaternion_pb.Quaternion;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_quaternion_pb.Quaternion.deserializeBinaryFromReader);
      msg.setQuaternionList(value);
      break;
    case 10:
      var value = new proto_topicData_topicDataRecord_dataStructure_matrix3x2_pb.Matrix3x2;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_matrix3x2_pb.Matrix3x2.deserializeBinaryFromReader);
      msg.setMatrix3x2(value);
      break;
    case 11:
      var value = new proto_topicData_topicDataRecord_dataStructure_matrix4x4_pb.Matrix4x4;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_matrix4x4_pb.Matrix4x4.deserializeBinaryFromReader);
      msg.setMatrix4x4(value);
      break;
    case 12:
      var value = new proto_topicData_topicDataRecord_dataStructure_color_pb.Color;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_color_pb.Color.deserializeBinaryFromReader);
      msg.setColor(value);
      break;
    case 13:
      var value = new proto_topicData_topicDataRecord_dataStructure_touchEvent_pb.TouchEvent;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_touchEvent_pb.TouchEvent.deserializeBinaryFromReader);
      msg.setTouchEvent(value);
      break;
    case 34:
      var value = new proto_topicData_topicDataRecord_dataStructure_touchEvent_pb.TouchEventList;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_touchEvent_pb.TouchEventList.deserializeBinaryFromReader);
      msg.setTouchEventList(value);
      break;
    case 14:
      var value = new proto_topicData_topicDataRecord_dataStructure_keyEvent_pb.KeyEvent;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_keyEvent_pb.KeyEvent.deserializeBinaryFromReader);
      msg.setKeyEvent(value);
      break;
    case 15:
      var value = new proto_topicData_topicDataRecord_dataStructure_mouseEvent_pb.MouseEvent;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_mouseEvent_pb.MouseEvent.deserializeBinaryFromReader);
      msg.setMouseEvent(value);
      break;
    case 16:
      var value = new proto_topicData_topicDataRecord_dataStructure_myoEvent_pb.MyoEvent;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_myoEvent_pb.MyoEvent.deserializeBinaryFromReader);
      msg.setMyoEvent(value);
      break;
    case 17:
      var value = new proto_topicData_topicDataRecord_dataStructure_pose2d_pb.Pose2D;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_pose2d_pb.Pose2D.deserializeBinaryFromReader);
      msg.setPose2d(value);
      break;
    case 18:
      var value = new proto_topicData_topicDataRecord_dataStructure_pose3d_pb.Pose3D;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_pose3d_pb.Pose3D.deserializeBinaryFromReader);
      msg.setPose3d(value);
      break;
    case 19:
      var value = new proto_topicData_topicDataRecord_dataStructure_object2d_pb.Object2D;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_object2d_pb.Object2D.deserializeBinaryFromReader);
      msg.setObject2d(value);
      break;
    case 20:
      var value = new proto_topicData_topicDataRecord_dataStructure_object3d_pb.Object3D;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_object3d_pb.Object3D.deserializeBinaryFromReader);
      msg.setObject3d(value);
      break;
    case 21:
      var value = new proto_topicData_topicDataRecord_dataStructure_object2d_pb.Object2DList;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_object2d_pb.Object2DList.deserializeBinaryFromReader);
      msg.setObject2dList(value);
      break;
    case 22:
      var value = new proto_topicData_topicDataRecord_dataStructure_object3d_pb.Object3DList;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_object3d_pb.Object3DList.deserializeBinaryFromReader);
      msg.setObject3dList(value);
      break;
    case 25:
      var value = new proto_topicData_topicDataRecord_dataStructure_lists_pb.Int32List;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_lists_pb.Int32List.deserializeBinaryFromReader);
      msg.setInt32List(value);
      break;
    case 26:
      var value = new proto_topicData_topicDataRecord_dataStructure_lists_pb.FloatList;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_lists_pb.FloatList.deserializeBinaryFromReader);
      msg.setFloatList(value);
      break;
    case 27:
      var value = new proto_topicData_topicDataRecord_dataStructure_lists_pb.DoubleList;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_lists_pb.DoubleList.deserializeBinaryFromReader);
      msg.setDoubleList(value);
      break;
    case 28:
      var value = new proto_topicData_topicDataRecord_dataStructure_lists_pb.StringList;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_lists_pb.StringList.deserializeBinaryFromReader);
      msg.setStringList(value);
      break;
    case 29:
      var value = new proto_topicData_topicDataRecord_dataStructure_lists_pb.BoolList;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_lists_pb.BoolList.deserializeBinaryFromReader);
      msg.setBoolList(value);
      break;
    case 30:
      var value = new proto_topicData_topicDataRecord_dataStructure_image_pb.Image2D;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_image_pb.Image2D.deserializeBinaryFromReader);
      msg.setImage2d(value);
      break;
    case 31:
      var value = new proto_topicData_topicDataRecord_dataStructure_image_pb.Image2DList;
      reader.readMessage(value,proto_topicData_topicDataRecord_dataStructure_image_pb.Image2DList.deserializeBinaryFromReader);
      msg.setImage2dList(value);
      break;
    case 32:
      var value = new proto_sessions_session_pb.Session;
      reader.readMessage(value,proto_sessions_session_pb.Session.deserializeBinaryFromReader);
      msg.setSession(value);
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
proto.ubii.topicData.TopicDataRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.topicData.TopicDataRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.topicData.TopicDataRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.topicData.TopicDataRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopic();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_topicData_topicDataRecord_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 23));
  if (f != null) {
    writer.writeInt32(
      23,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 24));
  if (f != null) {
    writer.writeFloat(
      24,
      f
    );
  }
  f = message.getVector2();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_topicData_topicDataRecord_dataStructure_vector2_pb.Vector2.serializeBinaryToWriter
    );
  }
  f = message.getVector2List();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto_topicData_topicDataRecord_dataStructure_vector2_pb.Vector2List.serializeBinaryToWriter
    );
  }
  f = message.getVector3();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_topicData_topicDataRecord_dataStructure_vector3_pb.Vector3.serializeBinaryToWriter
    );
  }
  f = message.getVector3List();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto_topicData_topicDataRecord_dataStructure_vector3_pb.Vector3List.serializeBinaryToWriter
    );
  }
  f = message.getVector4();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_topicData_topicDataRecord_dataStructure_vector4_pb.Vector4.serializeBinaryToWriter
    );
  }
  f = message.getVector4List();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto_topicData_topicDataRecord_dataStructure_vector4_pb.Vector4List.serializeBinaryToWriter
    );
  }
  f = message.getQuaternion();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_topicData_topicDataRecord_dataStructure_quaternion_pb.Quaternion.serializeBinaryToWriter
    );
  }
  f = message.getQuaternionList();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      proto_topicData_topicDataRecord_dataStructure_quaternion_pb.Quaternion.serializeBinaryToWriter
    );
  }
  f = message.getMatrix3x2();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto_topicData_topicDataRecord_dataStructure_matrix3x2_pb.Matrix3x2.serializeBinaryToWriter
    );
  }
  f = message.getMatrix4x4();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto_topicData_topicDataRecord_dataStructure_matrix4x4_pb.Matrix4x4.serializeBinaryToWriter
    );
  }
  f = message.getColor();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto_topicData_topicDataRecord_dataStructure_color_pb.Color.serializeBinaryToWriter
    );
  }
  f = message.getTouchEvent();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto_topicData_topicDataRecord_dataStructure_touchEvent_pb.TouchEvent.serializeBinaryToWriter
    );
  }
  f = message.getTouchEventList();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto_topicData_topicDataRecord_dataStructure_touchEvent_pb.TouchEventList.serializeBinaryToWriter
    );
  }
  f = message.getKeyEvent();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto_topicData_topicDataRecord_dataStructure_keyEvent_pb.KeyEvent.serializeBinaryToWriter
    );
  }
  f = message.getMouseEvent();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto_topicData_topicDataRecord_dataStructure_mouseEvent_pb.MouseEvent.serializeBinaryToWriter
    );
  }
  f = message.getMyoEvent();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto_topicData_topicDataRecord_dataStructure_myoEvent_pb.MyoEvent.serializeBinaryToWriter
    );
  }
  f = message.getPose2d();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto_topicData_topicDataRecord_dataStructure_pose2d_pb.Pose2D.serializeBinaryToWriter
    );
  }
  f = message.getPose3d();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto_topicData_topicDataRecord_dataStructure_pose3d_pb.Pose3D.serializeBinaryToWriter
    );
  }
  f = message.getObject2d();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto_topicData_topicDataRecord_dataStructure_object2d_pb.Object2D.serializeBinaryToWriter
    );
  }
  f = message.getObject3d();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto_topicData_topicDataRecord_dataStructure_object3d_pb.Object3D.serializeBinaryToWriter
    );
  }
  f = message.getObject2dList();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto_topicData_topicDataRecord_dataStructure_object2d_pb.Object2DList.serializeBinaryToWriter
    );
  }
  f = message.getObject3dList();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto_topicData_topicDataRecord_dataStructure_object3d_pb.Object3DList.serializeBinaryToWriter
    );
  }
  f = message.getInt32List();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto_topicData_topicDataRecord_dataStructure_lists_pb.Int32List.serializeBinaryToWriter
    );
  }
  f = message.getFloatList();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto_topicData_topicDataRecord_dataStructure_lists_pb.FloatList.serializeBinaryToWriter
    );
  }
  f = message.getDoubleList();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto_topicData_topicDataRecord_dataStructure_lists_pb.DoubleList.serializeBinaryToWriter
    );
  }
  f = message.getStringList();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto_topicData_topicDataRecord_dataStructure_lists_pb.StringList.serializeBinaryToWriter
    );
  }
  f = message.getBoolList();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto_topicData_topicDataRecord_dataStructure_lists_pb.BoolList.serializeBinaryToWriter
    );
  }
  f = message.getImage2d();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto_topicData_topicDataRecord_dataStructure_image_pb.Image2D.serializeBinaryToWriter
    );
  }
  f = message.getImage2dList();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto_topicData_topicDataRecord_dataStructure_image_pb.Image2DList.serializeBinaryToWriter
    );
  }
  f = message.getSession();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto_sessions_session_pb.Session.serializeBinaryToWriter
    );
  }
};


/**
 * optional string topic = 1;
 * @return {string}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.setTopic = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Timestamp timestamp = 2;
 * @return {?proto.ubii.topicData.Timestamp}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getTimestamp = function() {
  return /** @type{?proto.ubii.topicData.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.ubii.topicData.Timestamp|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double double = 3;
 * @return {number}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getDouble = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.setDouble = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearDouble = function() {
  return jspb.Message.setOneofField(this, 3, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasDouble = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool bool = 4;
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getBool = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.setBool = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearBool = function() {
  return jspb.Message.setOneofField(this, 4, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasBool = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string string = 5;
 * @return {string}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.setString = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearString = function() {
  return jspb.Message.setOneofField(this, 5, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasString = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 int32 = 23;
 * @return {number}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getInt32 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.setInt32 = function(value) {
  return jspb.Message.setOneofField(this, 23, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearInt32 = function() {
  return jspb.Message.setOneofField(this, 23, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasInt32 = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional float float = 24;
 * @return {number}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getFloat = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 24, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.setFloat = function(value) {
  return jspb.Message.setOneofField(this, 24, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearFloat = function() {
  return jspb.Message.setOneofField(this, 24, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasFloat = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional ubii.dataStructure.Vector2 vector2 = 6;
 * @return {?proto.ubii.dataStructure.Vector2}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getVector2 = function() {
  return /** @type{?proto.ubii.dataStructure.Vector2} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_vector2_pb.Vector2, 6));
};


/**
 * @param {?proto.ubii.dataStructure.Vector2|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setVector2 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearVector2 = function() {
  return this.setVector2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasVector2 = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ubii.dataStructure.Vector2List vector2_list = 35;
 * @return {?proto.ubii.dataStructure.Vector2List}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getVector2List = function() {
  return /** @type{?proto.ubii.dataStructure.Vector2List} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_vector2_pb.Vector2List, 35));
};


/**
 * @param {?proto.ubii.dataStructure.Vector2List|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setVector2List = function(value) {
  return jspb.Message.setOneofWrapperField(this, 35, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearVector2List = function() {
  return this.setVector2List(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasVector2List = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional ubii.dataStructure.Vector3 vector3 = 7;
 * @return {?proto.ubii.dataStructure.Vector3}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getVector3 = function() {
  return /** @type{?proto.ubii.dataStructure.Vector3} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_vector3_pb.Vector3, 7));
};


/**
 * @param {?proto.ubii.dataStructure.Vector3|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setVector3 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearVector3 = function() {
  return this.setVector3(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasVector3 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ubii.dataStructure.Vector3List vector3_list = 36;
 * @return {?proto.ubii.dataStructure.Vector3List}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getVector3List = function() {
  return /** @type{?proto.ubii.dataStructure.Vector3List} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_vector3_pb.Vector3List, 36));
};


/**
 * @param {?proto.ubii.dataStructure.Vector3List|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setVector3List = function(value) {
  return jspb.Message.setOneofWrapperField(this, 36, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearVector3List = function() {
  return this.setVector3List(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasVector3List = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional ubii.dataStructure.Vector4 vector4 = 8;
 * @return {?proto.ubii.dataStructure.Vector4}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getVector4 = function() {
  return /** @type{?proto.ubii.dataStructure.Vector4} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_vector4_pb.Vector4, 8));
};


/**
 * @param {?proto.ubii.dataStructure.Vector4|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setVector4 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearVector4 = function() {
  return this.setVector4(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasVector4 = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ubii.dataStructure.Vector4List vector4_list = 37;
 * @return {?proto.ubii.dataStructure.Vector4List}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getVector4List = function() {
  return /** @type{?proto.ubii.dataStructure.Vector4List} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_vector4_pb.Vector4List, 37));
};


/**
 * @param {?proto.ubii.dataStructure.Vector4List|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setVector4List = function(value) {
  return jspb.Message.setOneofWrapperField(this, 37, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearVector4List = function() {
  return this.setVector4List(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasVector4List = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional ubii.dataStructure.Quaternion quaternion = 9;
 * @return {?proto.ubii.dataStructure.Quaternion}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getQuaternion = function() {
  return /** @type{?proto.ubii.dataStructure.Quaternion} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_quaternion_pb.Quaternion, 9));
};


/**
 * @param {?proto.ubii.dataStructure.Quaternion|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setQuaternion = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearQuaternion = function() {
  return this.setQuaternion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasQuaternion = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ubii.dataStructure.Quaternion quaternion_list = 38;
 * @return {?proto.ubii.dataStructure.Quaternion}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getQuaternionList = function() {
  return /** @type{?proto.ubii.dataStructure.Quaternion} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_quaternion_pb.Quaternion, 38));
};


/**
 * @param {?proto.ubii.dataStructure.Quaternion|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setQuaternionList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 38, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearQuaternionList = function() {
  return this.setQuaternionList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasQuaternionList = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional ubii.dataStructure.Matrix3x2 matrix3x2 = 10;
 * @return {?proto.ubii.dataStructure.Matrix3x2}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getMatrix3x2 = function() {
  return /** @type{?proto.ubii.dataStructure.Matrix3x2} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_matrix3x2_pb.Matrix3x2, 10));
};


/**
 * @param {?proto.ubii.dataStructure.Matrix3x2|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setMatrix3x2 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearMatrix3x2 = function() {
  return this.setMatrix3x2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasMatrix3x2 = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ubii.dataStructure.Matrix4x4 matrix4x4 = 11;
 * @return {?proto.ubii.dataStructure.Matrix4x4}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getMatrix4x4 = function() {
  return /** @type{?proto.ubii.dataStructure.Matrix4x4} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_matrix4x4_pb.Matrix4x4, 11));
};


/**
 * @param {?proto.ubii.dataStructure.Matrix4x4|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setMatrix4x4 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearMatrix4x4 = function() {
  return this.setMatrix4x4(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasMatrix4x4 = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional ubii.dataStructure.Color color = 12;
 * @return {?proto.ubii.dataStructure.Color}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getColor = function() {
  return /** @type{?proto.ubii.dataStructure.Color} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_color_pb.Color, 12));
};


/**
 * @param {?proto.ubii.dataStructure.Color|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setColor = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearColor = function() {
  return this.setColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasColor = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional ubii.dataStructure.TouchEvent touch_event = 13;
 * @return {?proto.ubii.dataStructure.TouchEvent}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getTouchEvent = function() {
  return /** @type{?proto.ubii.dataStructure.TouchEvent} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_touchEvent_pb.TouchEvent, 13));
};


/**
 * @param {?proto.ubii.dataStructure.TouchEvent|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setTouchEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearTouchEvent = function() {
  return this.setTouchEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasTouchEvent = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional ubii.dataStructure.TouchEventList touch_event_list = 34;
 * @return {?proto.ubii.dataStructure.TouchEventList}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getTouchEventList = function() {
  return /** @type{?proto.ubii.dataStructure.TouchEventList} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_touchEvent_pb.TouchEventList, 34));
};


/**
 * @param {?proto.ubii.dataStructure.TouchEventList|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setTouchEventList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 34, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearTouchEventList = function() {
  return this.setTouchEventList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasTouchEventList = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional ubii.dataStructure.KeyEvent key_event = 14;
 * @return {?proto.ubii.dataStructure.KeyEvent}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getKeyEvent = function() {
  return /** @type{?proto.ubii.dataStructure.KeyEvent} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_keyEvent_pb.KeyEvent, 14));
};


/**
 * @param {?proto.ubii.dataStructure.KeyEvent|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setKeyEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearKeyEvent = function() {
  return this.setKeyEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasKeyEvent = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ubii.dataStructure.MouseEvent mouse_event = 15;
 * @return {?proto.ubii.dataStructure.MouseEvent}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getMouseEvent = function() {
  return /** @type{?proto.ubii.dataStructure.MouseEvent} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_mouseEvent_pb.MouseEvent, 15));
};


/**
 * @param {?proto.ubii.dataStructure.MouseEvent|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setMouseEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearMouseEvent = function() {
  return this.setMouseEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasMouseEvent = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ubii.dataStructure.MyoEvent myo_event = 16;
 * @return {?proto.ubii.dataStructure.MyoEvent}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getMyoEvent = function() {
  return /** @type{?proto.ubii.dataStructure.MyoEvent} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_myoEvent_pb.MyoEvent, 16));
};


/**
 * @param {?proto.ubii.dataStructure.MyoEvent|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setMyoEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearMyoEvent = function() {
  return this.setMyoEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasMyoEvent = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ubii.dataStructure.Pose2D pose2D = 17;
 * @return {?proto.ubii.dataStructure.Pose2D}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getPose2d = function() {
  return /** @type{?proto.ubii.dataStructure.Pose2D} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_pose2d_pb.Pose2D, 17));
};


/**
 * @param {?proto.ubii.dataStructure.Pose2D|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setPose2d = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearPose2d = function() {
  return this.setPose2d(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasPose2d = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional ubii.dataStructure.Pose3D pose3D = 18;
 * @return {?proto.ubii.dataStructure.Pose3D}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getPose3d = function() {
  return /** @type{?proto.ubii.dataStructure.Pose3D} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_pose3d_pb.Pose3D, 18));
};


/**
 * @param {?proto.ubii.dataStructure.Pose3D|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setPose3d = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearPose3d = function() {
  return this.setPose3d(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasPose3d = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional ubii.dataStructure.Object2D object2D = 19;
 * @return {?proto.ubii.dataStructure.Object2D}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getObject2d = function() {
  return /** @type{?proto.ubii.dataStructure.Object2D} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_object2d_pb.Object2D, 19));
};


/**
 * @param {?proto.ubii.dataStructure.Object2D|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setObject2d = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearObject2d = function() {
  return this.setObject2d(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasObject2d = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional ubii.dataStructure.Object3D object3D = 20;
 * @return {?proto.ubii.dataStructure.Object3D}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getObject3d = function() {
  return /** @type{?proto.ubii.dataStructure.Object3D} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_object3d_pb.Object3D, 20));
};


/**
 * @param {?proto.ubii.dataStructure.Object3D|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setObject3d = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearObject3d = function() {
  return this.setObject3d(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasObject3d = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional ubii.dataStructure.Object2DList object2D_list = 21;
 * @return {?proto.ubii.dataStructure.Object2DList}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getObject2dList = function() {
  return /** @type{?proto.ubii.dataStructure.Object2DList} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_object2d_pb.Object2DList, 21));
};


/**
 * @param {?proto.ubii.dataStructure.Object2DList|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setObject2dList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearObject2dList = function() {
  return this.setObject2dList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasObject2dList = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional ubii.dataStructure.Object3DList object3D_list = 22;
 * @return {?proto.ubii.dataStructure.Object3DList}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getObject3dList = function() {
  return /** @type{?proto.ubii.dataStructure.Object3DList} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_object3d_pb.Object3DList, 22));
};


/**
 * @param {?proto.ubii.dataStructure.Object3DList|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setObject3dList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearObject3dList = function() {
  return this.setObject3dList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasObject3dList = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional ubii.dataStructure.Int32List int32_list = 25;
 * @return {?proto.ubii.dataStructure.Int32List}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getInt32List = function() {
  return /** @type{?proto.ubii.dataStructure.Int32List} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_lists_pb.Int32List, 25));
};


/**
 * @param {?proto.ubii.dataStructure.Int32List|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setInt32List = function(value) {
  return jspb.Message.setOneofWrapperField(this, 25, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearInt32List = function() {
  return this.setInt32List(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasInt32List = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional ubii.dataStructure.FloatList float_list = 26;
 * @return {?proto.ubii.dataStructure.FloatList}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getFloatList = function() {
  return /** @type{?proto.ubii.dataStructure.FloatList} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_lists_pb.FloatList, 26));
};


/**
 * @param {?proto.ubii.dataStructure.FloatList|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setFloatList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 26, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearFloatList = function() {
  return this.setFloatList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasFloatList = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional ubii.dataStructure.DoubleList double_list = 27;
 * @return {?proto.ubii.dataStructure.DoubleList}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getDoubleList = function() {
  return /** @type{?proto.ubii.dataStructure.DoubleList} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_lists_pb.DoubleList, 27));
};


/**
 * @param {?proto.ubii.dataStructure.DoubleList|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setDoubleList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 27, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearDoubleList = function() {
  return this.setDoubleList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasDoubleList = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional ubii.dataStructure.StringList string_list = 28;
 * @return {?proto.ubii.dataStructure.StringList}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getStringList = function() {
  return /** @type{?proto.ubii.dataStructure.StringList} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_lists_pb.StringList, 28));
};


/**
 * @param {?proto.ubii.dataStructure.StringList|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setStringList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 28, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearStringList = function() {
  return this.setStringList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasStringList = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional ubii.dataStructure.BoolList bool_list = 29;
 * @return {?proto.ubii.dataStructure.BoolList}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getBoolList = function() {
  return /** @type{?proto.ubii.dataStructure.BoolList} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_lists_pb.BoolList, 29));
};


/**
 * @param {?proto.ubii.dataStructure.BoolList|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setBoolList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 29, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearBoolList = function() {
  return this.setBoolList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasBoolList = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional ubii.dataStructure.Image2D image2D = 30;
 * @return {?proto.ubii.dataStructure.Image2D}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getImage2d = function() {
  return /** @type{?proto.ubii.dataStructure.Image2D} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_image_pb.Image2D, 30));
};


/**
 * @param {?proto.ubii.dataStructure.Image2D|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setImage2d = function(value) {
  return jspb.Message.setOneofWrapperField(this, 30, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearImage2d = function() {
  return this.setImage2d(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasImage2d = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional ubii.dataStructure.Image2DList image2D_list = 31;
 * @return {?proto.ubii.dataStructure.Image2DList}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getImage2dList = function() {
  return /** @type{?proto.ubii.dataStructure.Image2DList} */ (
    jspb.Message.getWrapperField(this, proto_topicData_topicDataRecord_dataStructure_image_pb.Image2DList, 31));
};


/**
 * @param {?proto.ubii.dataStructure.Image2DList|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setImage2dList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 31, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearImage2dList = function() {
  return this.setImage2dList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasImage2dList = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional ubii.sessions.Session session = 32;
 * @return {?proto.ubii.sessions.Session}
 */
proto.ubii.topicData.TopicDataRecord.prototype.getSession = function() {
  return /** @type{?proto.ubii.sessions.Session} */ (
    jspb.Message.getWrapperField(this, proto_sessions_session_pb.Session, 32));
};


/**
 * @param {?proto.ubii.sessions.Session|undefined} value
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
*/
proto.ubii.topicData.TopicDataRecord.prototype.setSession = function(value) {
  return jspb.Message.setOneofWrapperField(this, 32, proto.ubii.topicData.TopicDataRecord.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ubii.topicData.TopicDataRecord} returns this
 */
proto.ubii.topicData.TopicDataRecord.prototype.clearSession = function() {
  return this.setSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ubii.topicData.TopicDataRecord.prototype.hasSession = function() {
  return jspb.Message.getField(this, 32) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ubii.topicData.TopicDataRecordList.repeatedFields_ = [1];



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
proto.ubii.topicData.TopicDataRecordList.prototype.toObject = function(opt_includeInstance) {
  return proto.ubii.topicData.TopicDataRecordList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ubii.topicData.TopicDataRecordList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.topicData.TopicDataRecordList.toObject = function(includeInstance, msg) {
  var f, obj = {
    elementsList: jspb.Message.toObjectList(msg.getElementsList(),
    proto.ubii.topicData.TopicDataRecord.toObject, includeInstance)
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
 * @return {!proto.ubii.topicData.TopicDataRecordList}
 */
proto.ubii.topicData.TopicDataRecordList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ubii.topicData.TopicDataRecordList;
  return proto.ubii.topicData.TopicDataRecordList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ubii.topicData.TopicDataRecordList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ubii.topicData.TopicDataRecordList}
 */
proto.ubii.topicData.TopicDataRecordList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ubii.topicData.TopicDataRecord;
      reader.readMessage(value,proto.ubii.topicData.TopicDataRecord.deserializeBinaryFromReader);
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
proto.ubii.topicData.TopicDataRecordList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ubii.topicData.TopicDataRecordList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ubii.topicData.TopicDataRecordList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ubii.topicData.TopicDataRecordList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getElementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ubii.topicData.TopicDataRecord.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TopicDataRecord elements = 1;
 * @return {!Array<!proto.ubii.topicData.TopicDataRecord>}
 */
proto.ubii.topicData.TopicDataRecordList.prototype.getElementsList = function() {
  return /** @type{!Array<!proto.ubii.topicData.TopicDataRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ubii.topicData.TopicDataRecord, 1));
};


/**
 * @param {!Array<!proto.ubii.topicData.TopicDataRecord>} value
 * @return {!proto.ubii.topicData.TopicDataRecordList} returns this
*/
proto.ubii.topicData.TopicDataRecordList.prototype.setElementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ubii.topicData.TopicDataRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ubii.topicData.TopicDataRecord}
 */
proto.ubii.topicData.TopicDataRecordList.prototype.addElements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ubii.topicData.TopicDataRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ubii.topicData.TopicDataRecordList} returns this
 */
proto.ubii.topicData.TopicDataRecordList.prototype.clearElementsList = function() {
  return this.setElementsList([]);
};


goog.object.extend(exports, proto.ubii.topicData);
