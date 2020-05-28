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

let types = ["vector3","stringList","doubleList","float","bool"];

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
let createFlatbufferTopicData = (testData) => {
  let builder = new flatbuffers.Builder(0);
  let tdrList = [];

  // create objects from testData
  testData.forEach((td)=>{
    let topic = builder.createString(td.topic);
    let keys = Object.keys(td.data);
    keys.forEach((k)=>{
      switch (k) {
        case "bool":
          DataStructure.startDataStructure(builder);
          DataStructure.addBool(builder, td.data.bool);
          break;
        case "vector3":
          DataStructure.startDataStructure(builder);
          DataStructure.addVector3(
              builder,
              Vector3.createVector3(builder, td.data.vector3.x, td.data.vector3.y, td.data.vector3.z)
          );
          break;
        case "stringList":
          let strings = new Array();
          for(let i=0;i<td.data.stringList.elements.length;++i){
            strings.push(builder.createString(td.data.stringList.elements[i]))
          }
          let stringList = DataStructure.createStringListVector(builder,
            [builder.createString(td.data.stringList.elements[0]),
            builder.createString(td.data.stringList.elements[1]),
            builder.createString(td.data.stringList.elements[2])]
          );
          DataStructure.startDataStructure(builder);
          DataStructure.addStringList(builder, stringList);
          break;
        case "float":
          DataStructure.startDataStructure(builder);
          DataStructure.addFloat(builder, td.data.float);
          break;
        case "doubleList":
          let doubleList = DataStructure.createDoubleListVector(builder, td.data.doubleList);
          DataStructure.startDataStructure(builder);
          DataStructure.addDoubleList(builder, doubleList);
          break;
        default:
          console.log("Following datastructure has to be added: %s", k)
          break;
      }
      let dataStructure = DataStructure.endDataStructure(builder);
      TopicDataRecord.startTopicDataRecord(builder);
      TopicDataRecord.addTopic(builder, topic);
      TopicDataRecord.addData(builder, dataStructure);
      tdrList.push(TopicDataRecord.endTopicDataRecord(builder));
    });
  });

  /*let dataStructure = DataStructure.endDataStructure(builder);
  TopicDataRecord.startTopicDataRecord(builder);
  TopicDataRecord.addTopic(builder, topic);
  TopicDataRecord.addTimestamp(
    builder,
    Timestamp.createTimestamp(builder, timestamp.seconds, timestamp.nanos)
  );
  TopicDataRecord.addData(builder, dataStructure);
  let topicDataRecord = TopicDataRecord.endTopicDataRecord(builder);*/

  //let recordsListElements = TopicDataRecordList.createElementsVector(builder, [topicDataRecord]);
  let recordsListElements = TopicDataRecordList.createElementsVector(builder, tdrList);
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

  switch (Object.keys(testData[index].data)[0]) {
    case 'bool':
      test.is(data.bool(), testData[index].data.bool);
      break;
    case 'stringList':
      for(let i=0;i<testData[index].data.stringList.elements.length;++i){
        test.is(data.stringList(i),testData[index].data.stringList.elements[i]);
      }
      break;
    case 'vector3':
      let v3 = data.vector3(new Vector3());
      test.is(v3.x().toFixed(1),testData[index].data.vector3.x.toFixed(1));
      test.is(v3.y().toFixed(1),testData[index].data.vector3.y.toFixed(1));
      test.is(v3.z().toFixed(1),testData[index].data.vector3.z.toFixed(1));
  }
};

let createTestDataFromTopicDataRecordList = (topicDataRecordList, newData = null) => {
  let data = [];
  for(let i = 0; i<topicDataRecordList.elementsLength();++i){
    let tdr = topicDataRecordList.elements(i);
    let tdrdata = tdr.data(new DataStructure());
    // if new data available => update topicDataRecordList
    if(newData){
      newData.forEach((nd)=>{
        if(nd.topic == tdr.topic()){
          data.push({topic:nd.topic,data:nd.data});
        }
      });
    }
    if(i==data.length){
      let d = undefined;
      if(tdrdata.stringList() != undefined && d == undefined){
        let stringList ={elements:[]};
        for(let n=0;n<tdrdata.stringListLength();++n){
          stringList.elements.push(tdrdata.stringList(n));
        }
        d = {stringList: stringList};
      }
      if(tdrdata.vector3(new Vector3()) != undefined && d == undefined){
        d = {vector3: tdrdata.vector3(new Vector3())};
      }
      if(tdrdata.float() != 0 && d == undefined){
        d = {float: tdrdata.float()};
      }
      if(tdrdata.doubleList() != undefined && d == undefined){
        d = {doubleList: tdrdata.doubleList()};
      }
      if(d != undefined){
        d = {bool: tdrdata.bool()};
      }

      data.push({topic:tdr.topic(),data:d});
    }
  }
  return data;
};

let updateTopicDataBuffer = (buffer, newData) => {
  // read buffer
  let topicData = TopicData.getRootAsTopicData(buffer);
  let topicDataRecordList = topicData.content(new TopicDataRecordList());
  // update topicDataRecordList
  let data = [];
  data = createTestDataFromTopicDataRecordList(topicDataRecordList, newData);
  // create buffer from topicData
  return createFlatbufferTopicData(data);
};

let processTopicDataBuffer = (buffer) => {
  // "decode" buffer as topicData
  let topicData = TopicData.getRootAsTopicData(buffer);
  let topicDataRecordList = topicData.content(new TopicDataRecordList());
  // processing

  // create buffer from topicData
  let data = [];
  data = createTestDataFromTopicDataRecordList(topicDataRecordList);
  // create buffer from topicData
  return createFlatbufferTopicData(data);
};

let getDataFromBuffer = (buffer, pmNumber) => {
  // read buffer
  let topicData = TopicData.getRootAsTopicData(buffer);
  let topicDataRecordList = topicData.content(new TopicDataRecordList());
  // update topicDataRecordList
  let data = [];
  data = createTestDataFromTopicDataRecordList(topicDataRecordList);
  let dataToReturn = [];
  // TODO rewrite to not going through everything just to add topicData
  data.forEach((d)=>{
    d.topic = ""+d.topic+""+pmNumber;
    dataToReturn.push({topicData:d});
  });
  return dataToReturn;
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
  updateTopicDataBuffer: updateTopicDataBuffer,
  processTopicDataBuffer: processTopicDataBuffer,
  getDataFromBuffer: getDataFromBuffer
}