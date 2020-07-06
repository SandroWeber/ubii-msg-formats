//import test from 'ava';
const fs = require('fs');

const GenerateProto = require('../protobuf/js/generate-protobuf.js');

const NUM_FULL_TEST_ITERATIONS = 10;
const NUM_PROCESSING_MODULES = 5;

const MAX_DOUBLELIST_ELEMENTS = 10;
const MAX_STRINGLIST_ELEMENTS = 10;
const CHAR_STRING = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const TOPICDATA_RECORD_IMAGE = {
  data: fs.readFileSync('test/flat-vs-proto/lotad.png'),
  height: 250,
  width: 250
};

// between [0;max-1]
function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let topicdata = [
  {
    type: 'bool',
    data: {
      bool: true
    }
  },
  {
    type: 'float',
    data: {
      float: 0.1
    }
  },
  {
    type: 'doubleList',
    data: {
      doubleList: [0.1, 0.2, 0.3]
    }
  },
  {
    type: 'stringList',
    data: {
      stringList: { elements: ['one', 'two', 'three'] }
    }
  },
  {
    type: 'vector3',
    data: {
      vector3: { x: 1.1, y: 2.2, z: 3.3 }
    }
  },
  {
    type: 'image2D',
    data: {
      image2D: TOPICDATA_RECORD_IMAGE
    }
  }
];

let generateTopicData = (topic) => {
  if (topic.type === 'bool') {
    topic.data.bool = Math.random() >= 0.5;
  } else if (topic.type === 'float') {
    topic.data.float = Math.random();
  } else if (topic.type === 'doubleList') {
    let numElements = randomInt(MAX_DOUBLELIST_ELEMENTS) + 1;
    topic.data.doubleList = [];
    for (let i = 0; i < numElements; i++) {
      topic.data.doubleList.push(Math.random());
    }
  } else if (topic.type === 'stringList') {
    let numElements = randomInt(MAX_STRINGLIST_ELEMENTS) + 1;
    topic.data.stringList.elements = [];
    for (let i = 0; i < numElements; i++) {
      let stringLength = randomInt(CHAR_STRING.length) + 1;
      topic.data.stringList.elements.push(CHAR_STRING.substring(0, stringLength));
    }
  } else if (topic.type === 'vector3') {
    topic.data.vector3.x = Math.random();
    topic.data.vector3.y = Math.random();
    topic.data.vector3.z = Math.random();
  } else if (topic.type === 'image2D') {
    // no randomized images yet
  }
};

let generateProcessingModules = (numModules) => {
  let processingModules = [];
  for (let i = 0; i < numModules; i++) {
    let interestedTopics = [...Array(topicdata.length).keys()];
    let numOfTopics = randomInt(topicdata.length) + 1;
    while (interestedTopics.length > numOfTopics) {
      interestedTopics.splice(randomInt(interestedTopics.length), 1);
    }
    processingModules.push({
      interestedTopicIndices: interestedTopics,
      buffer: null
    });
  }

  return processingModules;
};

let runSynchronousProcessingProtobuf = (processingModules, topicdata) => {
  processingModules.forEach((pm) => {
    neededTopics = [];
    pm.interestedTopicIndices.forEach((topicIndex) => {
      neededTopics.push(topicdata[topicIndex]);
    });
    pm.buffer = GenerateProto.createProtobufTopicData(t, neededTopics);
  });
};

let processingModules = generateProcessingModules(NUM_PROCESSING_MODULES);
console.info(processingModules);

topicdata.forEach((topic) => {
  generateTopicData(topic);
});
topicdata.forEach((topic) => {
  console.info(topic.data);
});
