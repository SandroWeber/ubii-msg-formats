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
ubii.dataStructures.Color = function() {
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
 * @returns {ubii.dataStructures.Color}
 */
ubii.dataStructures.Color.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns {number}
 */
ubii.dataStructures.Color.prototype.r = function() {
  return this.bb.readFloat32(this.bb_pos);
};

/**
 * @returns {number}
 */
ubii.dataStructures.Color.prototype.g = function() {
  return this.bb.readFloat32(this.bb_pos + 4);
};

/**
 * @returns {number}
 */
ubii.dataStructures.Color.prototype.b = function() {
  return this.bb.readFloat32(this.bb_pos + 8);
};

/**
 * @returns {number}
 */
ubii.dataStructures.Color.prototype.a = function() {
  return this.bb.readFloat32(this.bb_pos + 12);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @param {number} a
 * @returns {flatbuffers.Offset}
 */
ubii.dataStructures.Color.createColor = function(builder, r, g, b, a) {
  builder.prep(4, 16);
  builder.writeFloat32(a);
  builder.writeFloat32(b);
  builder.writeFloat32(g);
  builder.writeFloat32(r);
  return builder.offset();
};

// Exports for Node.js and RequireJS
this.ubii = ubii;