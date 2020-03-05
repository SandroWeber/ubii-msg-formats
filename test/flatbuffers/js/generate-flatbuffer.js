import test from 'ava';
import { flatbuffers } from 'flatbuffers';

const { MSG_TYPES } = require('../../../src/js/index');

/*const TopicData = require('../../../dist/flatbuffers/js/topicData_generated').ubii.topicData.TopicData;
const TopicDataContent = require('../../../dist/flatbuffers/js/topicData_generated').ubii.topicData.TopicDataContent;
const TopicDataRecord = require('../../../dist/flatbuffers/js/topicDataRecord_generated').ubii.topicData.TopicDataRecord;
const DataStructure = require('../../../dist/flatbuffers/js/topicDataRecord_generated').ubii.dataStructures.DataStructure;
const Timestamp = require('../../../dist/flatbuffers/js/timestamp_generated').ubii.dataStructures.Timestamp;
const Vector3 = require('../../../dist/flatbuffers/js/vector3_generated').ubii.dataStructures.Vector3;*/

//let ubii = {};
/*let ubiiTopicData = require('../../../dist/flatbuffers/js/topicData_generated').ubii;
ubii = { ...ubii, ...ubiiTopicData };
console.info(ubii);
let ubiiTopicDataRecord = require('../../../dist/flatbuffers/js/topicDataRecord_generated').ubii;
ubii = { ...ubii, ...ubiiTopicDataRecord };
console.info('\n\n');
console.info(ubii);*/
let ubiiTimestamp = require('../../../dist/flatbuffers/js/timestamp_generated').ubii;
console.info(ubiiTimestamp);
let ubiiVector3 = require('../../../dist/flatbuffers/js/vector3_generated').ubii;
console.info(ubiiVector3);

const ubii = Object.assign({}, ubiiTimestamp, ubiiVector3);
console.info(ubii);

const TopicData = ubii.topicData.TopicData;
const TopicDataContent = ubii.topicData.TopicDataContent;
const TopicDataRecord = ubii.topicData.TopicDataRecord;
const DataStructure = ubii.dataStructures.DataStructure;
const Timestamp = ubii.dataStructures.Timestamp;
const Vector3 = ubii.dataStructures.Vector3;

/* helper methods */

let createFlatbufferTopicDataVector3 = (topicString, timestamp, vector3) => {
    let builder = new flatbuffers.Builder(0);

    let topic = builder.createString(topicString);

    DataStructure.startDataStructure(builder);
    DataStructure.addVector3(builder, Vector3.createVector3(builder, vector3.x, vector3.y, vector3.z));
    let dataStructure = DataStructure.endDataStructure(builder);

    TopicDataRecord.startTopicDataRecord(builder);
    TopicDataRecord.addTopic(builder, topic);
    TopicDataRecord.addTimestamp(builder, Timestamp.createTimestamp(builder, timestamp.seconds, timestamp.nanos));
    TopicDataRecord.addData(builder, dataStructure);
    let topicDataRecord = TopicDataRecord.endTopicDataRecord(builder);

    TopicData.startTopicData(builder);
    TopicData.addContentType(builder, TopicDataContent.topic_data_record);
    TopicData.addContent(builder, topicDataRecord);
    let topicData = TopicData.endTopicData(builder);

    builder.finish(topicData);
    let topicDataBuffer = builder.dataBuffer();
    return topicDataBuffer;
};

/* prepare tests */

/* run tests */

test('create a TopicData flatbuffer, then read it back in', t => {
    let topicString = '/my/test/topic';
    let timestamp = { seconds: 1, nanos: 2 };
    let vector3 = { x: 1.1, y: 2.2, z: 3.3 };

    // create buffer
    let bufferTopicData = createFlatbufferTopicDataVector3(topicString, timestamp, vector3);

    // read buffer
    let topicData = TopicData.getRootAsTopicData(bufferTopicData);

    let topicDataRecord = new TopicDataRecord();
    topicData.content(topicDataRecord);

    console.info(topicDataRecord.data().vector3());
});