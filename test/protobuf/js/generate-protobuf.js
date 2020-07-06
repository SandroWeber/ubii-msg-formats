const proto = require('../../../dist/js/protobuf');
const { ProtobufUtils, ProtobufTranslator, MSG_TYPES } = require('../../../src/js/index'); // ../../../../src/js/index

/**
 * Creates a TopicData object with testData object fields
 *
 * @param {*} topicString
 * @param {*} timestamp
 * @param {*} testData
 */
let createProtobufTopicData = (test, testData) => {
  let tdrArray = new Array();
  testData.forEach(function (data) {
    let tdr = proto.ubii.topicData.TopicDataRecord.create(data.data);
    tdr.topic = data.topic;
    //tdr.timestamp = timestamp;
    tdrArray.push(tdr);
  });
  let tdrl = proto.ubii.topicData.TopicDataRecordList.create();
  tdrl.elements = tdrArray;
  let translator = new ProtobufTranslator(MSG_TYPES.TOPIC_DATA);
  let message = translator.createMessageFromPayload({ topicDataRecordList: tdrl });
  let buffer = undefined;
  test.notThrows(() => {
    buffer = translator.createBufferFromMessage(message);
  });
  return buffer;
};

let verifyTopicDataRecord = (test, buffer, testData) => {
  let translator = new ProtobufTranslator(MSG_TYPES.TOPIC_DATA);
  test.notThrows(() => {
    let decodedMessage = translator.createMessageFromBuffer(buffer);
    let tdrl = decodedMessage.topicDataRecordList;
    let index = 0;
    tdrl.elements.forEach((el) => {
      el.timestamp = null;
      el.topic = null;
      let obj = proto.ubii.topicData.TopicDataRecord.toObject(el);
      test.deepEqual(obj, testData[index].data);
      index++;
    });
  });
};

let updateTopicDataBuffer = (buffer, data) => {
  let translator = new ProtobufTranslator(MSG_TYPES.TOPIC_DATA);
  let decodedMessage = translator.createMessageFromBuffer(buffer);
  let tdrl = decodedMessage.topicDataRecordList;
  tdrl.elements.forEach((el) => {
    data.forEach((d) => {
      if (el.topic == d.topic) {
        let keys = Object.keys(el);
        keys.forEach((k) => {
          if (k != 'timestamp' && k != 'topic') {
            el[k] = d.data[k];
          }
        });
      }
    });
  });
  let message = translator.createMessageFromPayload({ topicDataRecordList: tdrl });
  buffer = undefined;
  buffer = translator.createBufferFromMessage(message);
  return buffer;
};

let processTopicDataBuffer = (buffer) => {
  // decode buffer as topicData
  let translator = new ProtobufTranslator(MSG_TYPES.TOPIC_DATA);
  let decodedMessage = translator.createMessageFromBuffer(buffer);
  let tdrl = decodedMessage.topicDataRecordList;
  // processing

  // encode as buffer again
  let message = translator.createMessageFromPayload({ topicDataRecordList: tdrl });
  buffer = translator.createBufferFromMessage(message);
  return buffer;
};

let getDataFromBuffer = (buffer, pmNumber) => {
  // decode buffer as topicData
  let translator = new ProtobufTranslator(MSG_TYPES.TOPIC_DATA);
  let decodedMessage = translator.createMessageFromBuffer(buffer);
  let tdrl = decodedMessage.topicDataRecordList;
  let data = [];
  tdrl.elements.forEach((tdr) => {
    let d = undefined;
    let keys = Object.keys(tdr);
    keys.forEach((k) => {
      if (k != 'timestamp' && k != 'topic') {
        switch (k) {
          case 'stringList':
            d = { stringList: tdr[k] };
            break;
          case 'vector3':
            d = { vector3: tdr[k] };
            break;
          case 'float':
            d = { float: tdr[k] };
            break;
          case 'doubleList':
            d = { doubleList: tdr[k] };
            break;
          case 'bool':
            d = { bool: tdr[k] };
            break;
          case 'image2D':
            d = { image2D: tdr[k] };
            break;
        }
      }
    });
    data.push({ topicData: { topic: '' + tdr.topic + '' + pmNumber, data: d } });
  });
  // this is just to mimic the same load like flat
  //data.forEach((d)=>{});
  return data;
};

module.exports = {
  createProtobufTopicData: createProtobufTopicData,
  verifyTopicDataRecord: verifyTopicDataRecord,
  updateTopicDataBuffer: updateTopicDataBuffer,
  processTopicDataBuffer: processTopicDataBuffer,
  getDataFromBuffer: getDataFromBuffer
};
