const {flatbuffers} = require('flatbuffers');
const { FlatbufferUtils } = require('../../../src/js/index');

const TopicData = require('../../../dist/flatbuffers/js/topicData_generated').ubii.topicData
  .TopicData;
const TopicDataContent = require('../../../dist/flatbuffers/js/topicData_generated').ubii.topicData
  .TopicDataContent;
const TopicDataRecord = require('../../../dist/flatbuffers/js/topicDataRecord_generated').ubii
  .topicData.TopicDataRecord;
const TopicDataRecordList = require('../../../dist/flatbuffers/js/topicDataRecord_generated').ubii
  .topicData.TopicDataRecordList;
const DataStructure = require('../../../dist/flatbuffers/js/dataStructure_generated').ubii
  .dataStructures.DataStructure;
const Timestamp = require('../../../dist/flatbuffers/js/timestamp_generated').ubii.dataStructures
  .Timestamp;
const Vector3 = require('../../../dist/flatbuffers/js/vector3_generated').ubii.dataStructures
  .Vector3;

/* helpers */

/*
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
*/

/**
 * Creates a TopicData object with testData object fields
 *
 * @param {*} topicString
 * @param {*} timestamp
 * @param {*} testData
 */
let createFlatbufferTopicData = (topicString, timestamp, testData) => {
  let builder = new flatbuffers.Builder(0);
  let tmpList = new Array();
  let topic = builder.createString(topicString);

  // create objects from testData
  testData.forEach((td)=>{
    let keys = Object.keys(td);
    keys.forEach((k)=>{
      switch (k) {
        case "bool":
          let ByteBuffer
          tmpList.push({'bool':td.bool});
          break;
        case "vector3":
          tmpList.push({'vector3': td.vector3});
          break;
        case "stringList":
          let strings = new Array();
          for(let i=0;i<td.stringList.elements.length;++i){
            strings.push(builder.createString(td.stringList.elements[i]))
          }
          let stringList = DataStructure.createStringListVector(builder,
            [builder.createString(td.stringList.elements[0]),
            builder.createString(td.stringList.elements[1]),
            builder.createString(td.stringList.elements[2])]
          );
          tmpList.push({'stringList':stringList});
          break;
        default:
          console.log("Following datastructure has to be added: %s", k)
          break;
      }
    });
  });

  // add object to datastructure
  DataStructure.startDataStructure(builder);
  tmpList.forEach((td)=>{
    let keys = Object.keys(td);
    keys.forEach((k)=>{
      switch (k) {
        case "bool":
          DataStructure.addBool(builder, td.bool);
          break;
        case "vector3":
          DataStructure.addVector3(
              builder,
              Vector3.createVector3(builder, td.vector3.x, td.vector3.y, td.vector3.z)
          );
          break;
        case "stringList":
          DataStructure.addStringList(builder, td.stringList);
          break;
        default:
          console.log("Following datastructure has to be added: %s", k)
          break;
      }
    });
  });

  let dataStructure = DataStructure.endDataStructure(builder);
  TopicDataRecord.startTopicDataRecord(builder);
  TopicDataRecord.addTopic(builder, topic);
  TopicDataRecord.addTimestamp(
    builder,
    Timestamp.createTimestamp(builder, timestamp.seconds, timestamp.nanos)
  );
  TopicDataRecord.addData(builder, dataStructure);
  let topicDataRecord = TopicDataRecord.endTopicDataRecord(builder);

  let recordsListElements = TopicDataRecordList.createElementsVector(builder, [topicDataRecord]);
  let recordsList = TopicDataRecordList.createTopicDataRecordList(builder, recordsListElements);

  TopicData.startTopicData(builder);
  TopicData.addContentType(builder, TopicDataContent.topic_data_records);
  TopicData.addContent(builder, recordsList);
  let topicData = TopicData.endTopicData(builder);

  builder.finish(topicData);
  let topicDataBuffer = builder.dataBuffer();
  return topicDataBuffer;
};

let verifyTopicDataRecord = (test, record, testData, index) => {
  let data = record.data(new DataStructure());

  switch (Object.keys(testData[index])[0]) {
    case 'bool':
      test.is(data.bool(), testData[index].bool);
      break;
    case 'stringList':
      for(let i=0;i<testData[index].stringList.elements.length;++i){
        test.is(data.stringList(i),testData[index].stringList.elements[i]);
      }
      break;
    case 'vector3':
      let v3 = data.vector3(new Vector3());
      test.is(v3.x().toFixed(1),testData[index].vector3.x.toFixed(1));
      test.is(v3.y().toFixed(1),testData[index].vector3.y.toFixed(1));
      test.is(v3.z().toFixed(1),testData[index].vector3.z.toFixed(1));
  }
};
/* run tests */
/*
test('simulate a storage to save parts of a message, repack it into a new message', (t) => {
  let topicString = '/my/test/topic';
  let timestamp = { seconds: 1, nanos: 2 };

  // create buffer
  let bufferTopicData = createFlatbufferTopicData(topicString, timestamp);

  // decode buffer
  let newTopicData = TopicData.getRootAsTopicData(bufferTopicData);
  let topicDataRecordList = newTopicData.content(new TopicDataRecordList());

  // store in a map and verify
  let storage = new Map();
  for (let i = 0; i < topicDataRecordList.elementsLength(); i++) {
    let record = topicDataRecordList.elements(0);
    let topic = record.topic();
    storage.set(topic, record);
  }

  let storageRecord = storage.get(topicString);
  verifyTopicDataRecord(t, storageRecord);

  // copy record into new TopicData message
  let builder = new flatbuffers.Builder(0);
  let copiedTopicDataRecordList = FlatbufferUtils.copyTopicDataRecords(builder, [storageRecord]);

  let copiedTopicDataOffset = TopicData.createTopicData(
      builder,
      TopicDataContent.topic_data_records,
      copiedTopicDataRecordList
  );
  builder.finish(copiedTopicDataOffset);

  // decode repacked buffer and verify
  let repackedTopicDataBuffer = builder.dataBuffer();
  let repackedTopicData = TopicData.getRootAsTopicData(repackedTopicDataBuffer);
  t.is(repackedTopicData.contentType(), TopicDataContent.topic_data_records);
  let repackedTopicDataRecordList = repackedTopicData.content(new TopicDataRecordList());
  t.is(repackedTopicDataRecordList.elementsLength(), 1);
  verifyTopicDataRecord(t, repackedTopicDataRecordList.elements(0, new TopicDataRecord()));
});*/

module.exports = {
  createFlatbufferTopicData: createFlatbufferTopicData,
  verifyTopicDataRecord: verifyTopicDataRecord,
}