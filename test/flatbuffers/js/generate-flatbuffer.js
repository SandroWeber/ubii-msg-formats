import test from 'ava';
import { flatbuffers } from 'flatbuffers';

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

let testData = {
  bool: true,
  //bool_list: [true, false, true],
  //string: string,
  string_list: ['one', 'two', 'three'],
  //byte: byte,
  //int32: int32,
  //int32_list: [int32],
  //float: float,
  //float_list: [float],
  //double: double,
  //double_list: [double],

  //   vector2: ubii.dataStructures.Vector2,
  vector3: { x: 1.1, y: 2.2, z: 3.3 },
  //   vector4: ubii.dataStructures.Vector4,
  //   quaternion: ubii.dataStructures.Quaternion,
  //   matrix3x2: ubii.dataStructures.Matrix3x2,
  //   matrix4x4: ubii.dataStructures.Matrix4x4,
  //   color: ubii.dataStructures.Color,
  //   touch_event: ubii.dataStructures.TouchEvent,
  //   key_event: ubii.dataStructures.KeyEvent,
  //   mouse_event: ubii.dataStructures.MouseEvent,
  //   myo_event: ubii.dataStructures.MyoEvent,
  //   pose2D: ubii.dataStructures.Pose2D,
  //   pose3D: ubii.dataStructures.Pose3D,
  //   object2D: ubii.dataStructures.Object2D,
  //   object3D: ubii.dataStructures.Object3D,
  //   object2D_list: [ubii.dataStructures.Object2D],
  //   object3D_list: [ubii.dataStructures.Object3D],
  //   image2D: ubii.dataStructures.Image2D,
  //   image2D_list: [ubii.dataStructures.Image2D],
  //   session: ubii.sessions.Session,
  //   interaction: ubii.interactions.Interaction,
};

/**
 * Creates a TopicData object with testData object fields
 *
 * @param {*} topicString
 * @param {*} timestamp
 */
let createFlatbufferTopicData = (topicString, timestamp) => {
  let builder = new flatbuffers.Builder(0);

  let topic = builder.createString(topicString);

  let stringList = DataStructure.createStringListVector(builder, [
    builder.createString(testData.string_list[0]),
    builder.createString(testData.string_list[1]),
    builder.createString(testData.string_list[2]),
  ]);

  DataStructure.startDataStructure(builder);
  DataStructure.addVector3(
    builder,
    Vector3.createVector3(builder, testData.vector3.x, testData.vector3.y, testData.vector3.z)
  );
  DataStructure.addBool(builder, testData.bool);
  DataStructure.addStringList(builder, stringList);
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

let verifyTopicDataRecord = (test, record) => {
  let data = record.data(new DataStructure());
  let vector3 = data.vector3(new Vector3());
  test.is(vector3.x().toFixed(1), testData.vector3.x.toFixed(1));
  test.is(vector3.y().toFixed(1), testData.vector3.y.toFixed(1));
  test.is(vector3.z().toFixed(1), testData.vector3.z.toFixed(1));

  test.is(data.bool(), testData.bool);

  test.is(data.stringListLength(), testData.string_list.length);
  test.is(data.stringList(0), testData.string_list[0]);
  test.is(data.stringList(1), testData.string_list[1]);
  test.is(data.stringList(2), testData.string_list[2]);
};

/* prepare tests */

/* run tests */

test('create a TopicData flatbuffer, then read it back in', (t) => {
  let topicString = '/my/test/topic';
  let timestamp = { seconds: 1, nanos: 2 };

  // create buffer
  let bufferTopicData = createFlatbufferTopicData(topicString, timestamp);

  // read buffer
  let topicData = TopicData.getRootAsTopicData(bufferTopicData);
  let topicDataRecordList = topicData.content(new TopicDataRecordList());

  t.is(topicData.contentType(), TopicDataContent.topic_data_records);
  t.is(topicDataRecordList.elementsLength(), 1);

  verifyTopicDataRecord(t, topicDataRecordList.elements(0));
});

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
});
