import test from 'ava';
const GenerateProto = require('../protobuf/js/generate-protobuf.js');
const GenerateFlat = require('../flatbuffers/js/generate-flatbuffer.js');
const TopicData = require('../../dist/flatbuffers/js/topicData_generated').ubii.topicData
    .TopicData;
const TopicDataContent = require('../../dist/flatbuffers/js/topicData_generated').ubii.topicData
    .TopicDataContent;
const TopicDataRecord = require('../../dist/flatbuffers/js/topicDataRecord_generated').ubii
    .topicData.TopicDataRecord;
const TopicDataRecordList = require('../../dist/flatbuffers/js/topicDataRecord_generated').ubii
    .topicData.TopicDataRecordList;

let testData = [

  {bool: true},
//bool_list: [true, false, true],
//string: string,

    {stringList: {elements:['one', 'two', 'three']}},
//byte: byte,
//int32: int32,
//int32_list: [int32],
//float: float,
//float_list: [float],
//double: double,
//double_list: [double],

//   vector2: ubii.dataStructures.Vector2,

    {vector3: {
    x: 1.1, y: 2.2, z: 3.3
  }},
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
];

test('create a TopicData protobuffer, then read it back in', (t)=>{
  let timestampProto = {seconds: 1, nanos:2};
  let topicString = 'my/test/topic';
  // create protobuf
  let protobufTopicData = GenerateProto.createProtobufTopicData(t, topicString, timestampProto, testData);
  // read protobuf
  GenerateProto.verifyTopicDataRecord(t, protobufTopicData, testData);
});

test('create a TopicData flatbuffer, then read it back in', (t) => {
  let topicString = '/my/test/topic';
  let timestamp = { seconds: 1, nanos: 2 };

  // create buffer
  let bufferTopicData = GenerateFlat.createFlatbufferTopicData(topicString, timestamp, testData);

  // read buffer
  let topicData = TopicData.getRootAsTopicData(bufferTopicData);
  let topicDataRecordList = topicData.content(new TopicDataRecordList());

  t.is(topicData.contentType(), TopicDataContent.topic_data_records);
  t.is(topicDataRecordList.elementsLength(), 1);

  GenerateFlat.verifyTopicDataRecord(t, topicDataRecordList.elements(0),testData);
});


