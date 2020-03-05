// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var ubii = ubii || {};

/**
 * @const
 * @namespace
 */
ubii.dataStructures = ubii.dataStructures || {};

/**
 * @constructor
 */
ubii.dataStructures.AngleOrientation = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {ubii.dataStructures.AngleOrientation}
 */
ubii.dataStructures.AngleOrientation.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {ubii.dataStructures.AngleOrientation=} obj
 * @returns {ubii.dataStructures.AngleOrientation}
 */
ubii.dataStructures.AngleOrientation.getRootAsAngleOrientation = function(bb, obj) {
  return (obj || new ubii.dataStructures.AngleOrientation).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {ubii.dataStructures.Vector2=} obj
 * @returns {ubii.dataStructures.Vector2|null}
 */
ubii.dataStructures.AngleOrientation.prototype.zeroDirection = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new ubii.dataStructures.Vector2).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {number}
 */
ubii.dataStructures.AngleOrientation.prototype.angle = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readFloat32(this.bb_pos + offset) : 0.0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
ubii.dataStructures.AngleOrientation.startAngleOrientation = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} zeroDirectionOffset
 */
ubii.dataStructures.AngleOrientation.addZeroDirection = function(builder, zeroDirectionOffset) {
  builder.addFieldStruct(0, zeroDirectionOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} angle
 */
ubii.dataStructures.AngleOrientation.addAngle = function(builder, angle) {
  builder.addFieldFloat32(1, angle, 0.0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
ubii.dataStructures.AngleOrientation.endAngleOrientation = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} zeroDirectionOffset
 * @param {number} angle
 * @returns {flatbuffers.Offset}
 */
ubii.dataStructures.AngleOrientation.createAngleOrientation = function(builder, zeroDirectionOffset, angle) {
  ubii.dataStructures.AngleOrientation.startAngleOrientation(builder);
  ubii.dataStructures.AngleOrientation.addZeroDirection(builder, zeroDirectionOffset);
  ubii.dataStructures.AngleOrientation.addAngle(builder, angle);
  return ubii.dataStructures.AngleOrientation.endAngleOrientation(builder);
}

/**
 * @constructor
 */
ubii.dataStructures.Orientation2D = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {ubii.dataStructures.Orientation2D}
 */
ubii.dataStructures.Orientation2D.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {ubii.dataStructures.Orientation2D=} obj
 * @returns {ubii.dataStructures.Orientation2D}
 */
ubii.dataStructures.Orientation2D.getRootAsOrientation2D = function(bb, obj) {
  return (obj || new ubii.dataStructures.Orientation2D).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {ubii.dataStructures.AngleOrientation=} obj
 * @returns {ubii.dataStructures.AngleOrientation|null}
 */
ubii.dataStructures.Orientation2D.prototype.angle = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new ubii.dataStructures.AngleOrientation).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {ubii.dataStructures.Vector2=} obj
 * @returns {ubii.dataStructures.Vector2|null}
 */
ubii.dataStructures.Orientation2D.prototype.direction = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? (obj || new ubii.dataStructures.Vector2).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
ubii.dataStructures.Orientation2D.startOrientation2D = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} angleOffset
 */
ubii.dataStructures.Orientation2D.addAngle = function(builder, angleOffset) {
  builder.addFieldOffset(0, angleOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} directionOffset
 */
ubii.dataStructures.Orientation2D.addDirection = function(builder, directionOffset) {
  builder.addFieldStruct(1, directionOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
ubii.dataStructures.Orientation2D.endOrientation2D = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} angleOffset
 * @param {flatbuffers.Offset} directionOffset
 * @returns {flatbuffers.Offset}
 */
ubii.dataStructures.Orientation2D.createOrientation2D = function(builder, angleOffset, directionOffset) {
  ubii.dataStructures.Orientation2D.startOrientation2D(builder);
  ubii.dataStructures.Orientation2D.addAngle(builder, angleOffset);
  ubii.dataStructures.Orientation2D.addDirection(builder, directionOffset);
  return ubii.dataStructures.Orientation2D.endOrientation2D(builder);
}

/**
 * @constructor
 */
ubii.dataStructures.Pose2D = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {ubii.dataStructures.Pose2D}
 */
ubii.dataStructures.Pose2D.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {ubii.dataStructures.Pose2D=} obj
 * @returns {ubii.dataStructures.Pose2D}
 */
ubii.dataStructures.Pose2D.getRootAsPose2D = function(bb, obj) {
  return (obj || new ubii.dataStructures.Pose2D).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {ubii.dataStructures.Vector2=} obj
 * @returns {ubii.dataStructures.Vector2|null}
 */
ubii.dataStructures.Pose2D.prototype.position = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new ubii.dataStructures.Vector2).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @param {ubii.dataStructures.Orientation2D=} obj
 * @returns {ubii.dataStructures.Orientation2D|null}
 */
ubii.dataStructures.Pose2D.prototype.orientation = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? (obj || new ubii.dataStructures.Orientation2D).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
ubii.dataStructures.Pose2D.startPose2D = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} positionOffset
 */
ubii.dataStructures.Pose2D.addPosition = function(builder, positionOffset) {
  builder.addFieldStruct(0, positionOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} orientationOffset
 */
ubii.dataStructures.Pose2D.addOrientation = function(builder, orientationOffset) {
  builder.addFieldOffset(1, orientationOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
ubii.dataStructures.Pose2D.endPose2D = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
ubii.dataStructures.Pose2D.finishPose2DBuffer = function(builder, offset) {
  builder.finish(offset);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} positionOffset
 * @param {flatbuffers.Offset} orientationOffset
 * @returns {flatbuffers.Offset}
 */
ubii.dataStructures.Pose2D.createPose2D = function(builder, positionOffset, orientationOffset) {
  ubii.dataStructures.Pose2D.startPose2D(builder);
  ubii.dataStructures.Pose2D.addPosition(builder, positionOffset);
  ubii.dataStructures.Pose2D.addOrientation(builder, orientationOffset);
  return ubii.dataStructures.Pose2D.endPose2D(builder);
}

// Exports for Node.js and RequireJS
this.ubii = ubii;