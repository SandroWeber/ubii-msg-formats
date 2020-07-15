//import test from 'ava';
const fs = require('fs');

const { ProtobufUtils, ProtobufTranslator, MSG_TYPES, proto } = require('../src/js/index');
//const GenerateProto = require('../test/protobuf/js/generate-protobuf.js');

const NUM_FULL_TEST_ITERATIONS = 10;
const NUM_PROCESSING_MODULES = 10;

const MAX_DOUBLELIST_ELEMENTS = 10;
const MAX_STRINGLIST_ELEMENTS = 10;
const CHAR_STRING = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const TOPICDATA_RECORD_IMAGE = {
  data: fs.readFileSync('test/flat-vs-proto/lotad.png'),
  height: 250,
  width: 250
};

const translatorTopicData = new ProtobufTranslator(MSG_TYPES.TOPIC_DATA);

/* mock topic data */

let topicDataRecords = [
  {
    topic: '/my/topic/bool',
    type: 'bool',
    timestamp: undefined,
    bool: true
  },
  {
    topic: '/my/topic/float',
    timestamp: undefined,
    type: 'float',
    float: 0.1
  },
  {
    topic: '/my/topic/doubleList',
    timestamp: undefined,
    type: 'doubleList',
    doubleList: [0.1, 0.2, 0.3]
  },
  {
    topic: '/my/topic/stringList',
    timestamp: undefined,
    type: 'stringList',
    stringList: { elements: ['one', 'two', 'three'] }
  },
  {
    topic: '/my/topic/vector3',
    timestamp: undefined,
    type: 'vector3',
    vector3: { x: 1.1, y: 2.2, z: 3.3 }
  },
  {
    topic: '/my/topic/image2D',
    timestamp: undefined,
    type: 'image2D',
    image2D: TOPICDATA_RECORD_IMAGE
  }
];

/* utility */
// between [0;max-1]
function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generateAllRandomData() {
  topicDataRecords.forEach((record) => {
    generateRandomData(record);
  });
}

let generateRandomData = (record) => {
  // timestamp
  record.timestamp = ProtobufUtils.getTimestamp();

  // bool
  if (record.bool !== undefined) {
    record.bool = Math.random() >= 0.5;
  }
  // float
  if (record.float !== undefined) {
    record.float = Math.random();
  }
  // doubleList
  if (record.doubleList !== undefined) {
    let numElements = randomInt(MAX_DOUBLELIST_ELEMENTS) + 1;
    record.doubleList = [];
    for (let i = 0; i < numElements; i++) {
      record.doubleList.push(Math.random());
    }
  }
  // stringList
  if (record.stringList !== undefined) {
    let numElements = randomInt(MAX_STRINGLIST_ELEMENTS) + 1;
    record.stringList.elements = [];
    for (let i = 0; i < numElements; i++) {
      let stringLength = randomInt(CHAR_STRING.length) + 1;
      record.stringList.elements.push(CHAR_STRING.substring(0, stringLength));
    }
  }
  // vector3
  if (record.vector3 !== undefined) {
    record.vector3.x = Math.random();
    record.vector3.y = Math.random();
    record.vector3.z = Math.random();
  }
  // image2D
  if (record.image2D !== undefined) {
    // no randomized images yet
  }
};

let generateProcessingModules = (numModules) => {
  let processingModules = [];
  for (let i = 0; i < numModules; i++) {
    let interestedTopics = [...Array(topicDataRecords.length).keys()];
    let numOfTopics = randomInt(topicDataRecords.length) + 1;
    while (interestedTopics.length > numOfTopics) {
      interestedTopics.splice(randomInt(interestedTopics.length), 1);
    }
    processingModules.push({
      id: i,
      interestedTopicIndices: interestedTopics,
      inputBuffer: null,
      outputBuffer: null
    });
  }

  return processingModules;
};

let runSynchronousProcessingProtobuf = (processingModules, topicDataRecords) => {
  processingModules.forEach((pm) => {
    //console.info('### PM ' + pm.id);
    // gather topic data records relevant for processing module
    neededRecords = [];
    pm.interestedTopicIndices.forEach((topicIndex) => {
      neededRecords.push(topicDataRecords[topicIndex]);
    });

    // encode input buffer
    let payload = {
      topicDataRecordList: {
        elements: neededRecords
      }
    };
    //console.info(payload);
    pm.inputBuffer = translatorTopicData.createBufferFromPayload(payload);
    //console.info(pm.inputBuffer);

    // ... "sending input"

    // PM: decode input buffer
    let topicDataDecoded = translatorTopicData.createMessageFromBuffer(pm.inputBuffer);
    //console.info(topicDataDecoded);
    // PM: ... "process"
    // PM: encode output buffer
    pm.outputBuffer = translatorTopicData.createBufferFromMessage(topicDataDecoded);

    // ... "sending output"

    // decode output buffer
    let messageOutput = translatorTopicData.createMessageFromBuffer(pm.outputBuffer);
    //console.info(messageOutput);
  });
};

let processingModules = generateProcessingModules(NUM_PROCESSING_MODULES);

let sumMeasurements = 0;
for (let it = 0; it < NUM_FULL_TEST_ITERATIONS; it++) {
  generateAllRandomData();
  let protoMeasureStart = Date.now();
  runSynchronousProcessingProtobuf(processingModules, topicDataRecords);
  sumMeasurements += Date.now() - protoMeasureStart;
}
console.info('proto processing time (avg): ' + sumMeasurements / NUM_FULL_TEST_ITERATIONS + 'ms');
