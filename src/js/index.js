const fs = require("fs");

const proto = require("../../dist/js/protobuf");
const ProtobufUtils = require("./protobufUtils");
const ProtobufTranslator = require("./protobufTranslator");

let constants = JSON.parse(fs.readFileSync("./dist/constants.json"));

module.exports = {
  proto: proto,
  ProtobufUtils: ProtobufUtils,
  ProtobufTranslator: ProtobufTranslator,
  DEFAULT_TOPICS: constants.DEFAULT_TOPICS,
  MSG_TYPES: constants.MSG_TYPES
};
