const fs = require("fs");
const path = require("path");

const proto = require("../../dist/js/protobuf");
const ProtobufUtils = require("./protobufUtils");
const ProtobufTranslator = require("./protobufTranslator");

let constants = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../../dist/constants.json"))
);

module.exports = {
  proto: proto,
  ProtobufUtils: ProtobufUtils,
  ProtobufTranslator: ProtobufTranslator,
  DEFAULT_TOPICS: constants.DEFAULT_TOPICS,
  MSG_TYPES: constants.MSG_TYPES
};
