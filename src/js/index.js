const proto = require('../../proto_compile/js/protobuf');
const constants = require('../../proto_compile/js/constants');
const ProtobufUtils = require('./protobufUtils');
const ProtobufTranslator = require('./protobufTranslator');

module.exports = {
  proto: proto,
  ProtobufUtils: ProtobufUtils,
  ProtobufTranslator: ProtobufTranslator,
  DEFAULT_TOPICS: constants.DEFAULT_TOPICS,
  MSG_TYPES: constants.MSG_TYPES
};
