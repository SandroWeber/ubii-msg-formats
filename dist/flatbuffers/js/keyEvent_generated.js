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
ubii.dataStructures.KeyEvent = function() {
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
 * @returns {ubii.dataStructures.KeyEvent}
 */
ubii.dataStructures.KeyEvent.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {ubii.dataStructures.KeyEvent=} obj
 * @returns {ubii.dataStructures.KeyEvent}
 */
ubii.dataStructures.KeyEvent.getRootAsKeyEvent = function(bb, obj) {
  return (obj || new ubii.dataStructures.KeyEvent).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {ubii.dataStructures.ButtonEventType}
 */
ubii.dataStructures.KeyEvent.prototype.type = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? /** @type {ubii.dataStructures.ButtonEventType} */ (this.bb.readInt8(this.bb_pos + offset)) : ubii.dataStructures.ButtonEventType.UP;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
ubii.dataStructures.KeyEvent.prototype.key = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
ubii.dataStructures.KeyEvent.startKeyEvent = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {ubii.dataStructures.ButtonEventType} type
 */
ubii.dataStructures.KeyEvent.addType = function(builder, type) {
  builder.addFieldInt8(0, type, ubii.dataStructures.ButtonEventType.UP);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} keyOffset
 */
ubii.dataStructures.KeyEvent.addKey = function(builder, keyOffset) {
  builder.addFieldOffset(1, keyOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
ubii.dataStructures.KeyEvent.endKeyEvent = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
ubii.dataStructures.KeyEvent.finishKeyEventBuffer = function(builder, offset) {
  builder.finish(offset);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {NS2182680046439287787.ubii.dataStructures.ButtonEventType} type
 * @param {flatbuffers.Offset} keyOffset
 * @returns {flatbuffers.Offset}
 */
ubii.dataStructures.KeyEvent.createKeyEvent = function(builder, type, keyOffset) {
  ubii.dataStructures.KeyEvent.startKeyEvent(builder);
  ubii.dataStructures.KeyEvent.addType(builder, type);
  ubii.dataStructures.KeyEvent.addKey(builder, keyOffset);
  return ubii.dataStructures.KeyEvent.endKeyEvent(builder);
}

// Exports for Node.js and RequireJS
this.ubii = ubii;