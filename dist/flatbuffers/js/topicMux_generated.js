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
ubii.devices = ubii.devices || {};

/**
 * @constructor
 */
ubii.devices.TopicMux = function() {
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
 * @returns {ubii.devices.TopicMux}
 */
ubii.devices.TopicMux.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {ubii.devices.TopicMux=} obj
 * @returns {ubii.devices.TopicMux}
 */
ubii.devices.TopicMux.getRootAsTopicMux = function(bb, obj) {
  return (obj || new ubii.devices.TopicMux).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
ubii.devices.TopicMux.prototype.id = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
ubii.devices.TopicMux.prototype.name = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
ubii.devices.TopicMux.prototype.dataType = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
ubii.devices.TopicMux.prototype.topicSelector = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array|null}
 */
ubii.devices.TopicMux.prototype.identityMatchPattern = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
ubii.devices.TopicMux.startTopicMux = function(builder) {
  builder.startObject(5);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} idOffset
 */
ubii.devices.TopicMux.addId = function(builder, idOffset) {
  builder.addFieldOffset(0, idOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} nameOffset
 */
ubii.devices.TopicMux.addName = function(builder, nameOffset) {
  builder.addFieldOffset(1, nameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} dataTypeOffset
 */
ubii.devices.TopicMux.addDataType = function(builder, dataTypeOffset) {
  builder.addFieldOffset(2, dataTypeOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} topicSelectorOffset
 */
ubii.devices.TopicMux.addTopicSelector = function(builder, topicSelectorOffset) {
  builder.addFieldOffset(3, topicSelectorOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} identityMatchPatternOffset
 */
ubii.devices.TopicMux.addIdentityMatchPattern = function(builder, identityMatchPatternOffset) {
  builder.addFieldOffset(4, identityMatchPatternOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
ubii.devices.TopicMux.endTopicMux = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
ubii.devices.TopicMux.finishTopicMuxBuffer = function(builder, offset) {
  builder.finish(offset);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} idOffset
 * @param {flatbuffers.Offset} nameOffset
 * @param {flatbuffers.Offset} dataTypeOffset
 * @param {flatbuffers.Offset} topicSelectorOffset
 * @param {flatbuffers.Offset} identityMatchPatternOffset
 * @returns {flatbuffers.Offset}
 */
ubii.devices.TopicMux.createTopicMux = function(builder, idOffset, nameOffset, dataTypeOffset, topicSelectorOffset, identityMatchPatternOffset) {
  ubii.devices.TopicMux.startTopicMux(builder);
  ubii.devices.TopicMux.addId(builder, idOffset);
  ubii.devices.TopicMux.addName(builder, nameOffset);
  ubii.devices.TopicMux.addDataType(builder, dataTypeOffset);
  ubii.devices.TopicMux.addTopicSelector(builder, topicSelectorOffset);
  ubii.devices.TopicMux.addIdentityMatchPattern(builder, identityMatchPatternOffset);
  return ubii.devices.TopicMux.endTopicMux(builder);
}

// Exports for Node.js and RequireJS
this.ubii = ubii;