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
ubii.clients = ubii.clients || {};

/**
 * @const
 * @namespace
 */
ubii.devices = ubii.devices || {};

/**
 * @const
 * @namespace
 */
ubii.general = ubii.general || {};

/**
 * @const
 * @namespace
 */
ubii.interactions = ubii.interactions || {};

/**
 * @const
 * @namespace
 */
ubii.servers = ubii.servers || {};

/**
 * @const
 * @namespace
 */
ubii.services = ubii.services || {};

/**
 * @const
 * @namespace
 */
ubii.services.requests = ubii.services.requests || {};

/**
 * @const
 * @namespace
 */
ubii.sessions = ubii.sessions || {};

/**
 * @constructor
 */
ubii.services.ServiceReply = function() {
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
 * @returns {ubii.services.ServiceReply}
 */
ubii.services.ServiceReply.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {ubii.services.ServiceReply=} obj
 * @returns {ubii.services.ServiceReply}
 */
ubii.services.ServiceReply.getRootAsServiceReply = function(bb, obj) {
  return (obj || new ubii.services.ServiceReply).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {ubii.services.ServiceData=} obj
 * @returns {ubii.services.ServiceData|null}
 */
ubii.services.ServiceReply.prototype.reply = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new ubii.services.ServiceData).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
ubii.services.ServiceReply.startServiceReply = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} replyOffset
 */
ubii.services.ServiceReply.addReply = function(builder, replyOffset) {
  builder.addFieldOffset(0, replyOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
ubii.services.ServiceReply.endServiceReply = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
ubii.services.ServiceReply.finishServiceReplyBuffer = function(builder, offset) {
  builder.finish(offset);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} replyOffset
 * @returns {flatbuffers.Offset}
 */
ubii.services.ServiceReply.createServiceReply = function(builder, replyOffset) {
  ubii.services.ServiceReply.startServiceReply(builder);
  ubii.services.ServiceReply.addReply(builder, replyOffset);
  return ubii.services.ServiceReply.endServiceReply(builder);
}

// Exports for Node.js and RequireJS
this.ubii = ubii;