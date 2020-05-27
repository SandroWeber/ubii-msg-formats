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

let run = true;
let newDatas = [{newData:[{topicData: {tag:'A',data: {bool:true}}},
    {topicData: {tag: 'B',data: {stringList: {elements:['one', 'two', 'three']}}}},
    {topicData: {tag: 'C', data: {float: 0.987}}},
    {topicData: {tag: 'D',data: {doubleList: [0.123,1,234,2,345]}}},
    {topicData: {tag: 'E',data: {vector3: {x: 1.1, y: 2.2, z: 3.3}}}}]
}];
let testData = [
  {
    topicData: {
      tag: 'A',
      data: {bool:true}
    }
  },
//bool_list: [true, false, true],
//string: string,
  {
    topicData: {
      tag: 'B',
      data: {stringList: {elements:['one', 'two', 'three']}}
    }
  },
//byte: byte,
//int32: int32,
//int32_list: [int32],
  {
    topicData: {
      tag: 'C',
      data: {float: 0.987}
    }
  },
//float_list: [float],
//double: double,
  {
    topicData: {
      tag: 'D',
      data: {doubleList: [0.123,1,234,2,345]}
    }
  },
//   vector2: ubii.dataStructures.Vector2,
  {
    topicData: {
      tag: 'E',
      data: {vector3: {x: 1.1, y: 2.2, z: 3.3}}
    }
  },
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
let processingModules = [
  {
    tags:[{tag: 'A'},{tag: 'C'}],
    buffer: null
  },
  {
    tags:[{tag: 'A'},{tag: 'B'},{tag: 'E'}],
    buffer: null
  },
  {
    tags:[{tag: 'D'}],
    buffer: null
  },
  {
    tags:[{tag: 'B'},{tag: 'D'},{tag: 'E'}],
    buffer: null
  },
  {
    tags:[{tag: 'A'},{tag: 'B'},{tag: 'C'},{tag: 'D'},{tag: 'E'}],
    buffer: null
  }
];
let processingModulesDefault = [
  {
    tags:[{tag: 'A'},{tag: 'C'}],
    buffer: null
  },
  {
    tags:[{tag: 'A'},{tag: 'B'},{tag: 'E'}],
    buffer: null
  },
  {
    tags:[{tag: 'D'}],
    buffer: null
  },
  {
    tags:[{tag: 'B'},{tag: 'D'},{tag: 'E'}],
    buffer: null
  },
  {
    tags:[{tag: 'A'},{tag: 'B'},{tag: 'C'},{tag: 'D'},{tag: 'E'}],
    buffer: null
  }
];

let getNewData = (goes) => {
  while(goes>0){
    // how many new topicData
    let listNew = [];
    let l = Math.floor(Math.random() * 5 + 1);
    while(l>0){
      let td = Math.floor(Math.random() * 5 + 1);
      let tag = '';
      let data = undefined;
      switch (td) {
        case 1:
          tag = 'A';
          testData.forEach((testd)=>{
            if(testd.topicData.tag == 'A'){
              data = testd.topicData.data;
            }
          });
          break;
        case 2:
          tag = 'B';
          testData.forEach((testd)=>{
            if(testd.topicData.tag == 'B'){
              data = testd.topicData.data;
            }
          });
          break;
        case 3:
          tag = 'C';
          testData.forEach((testd)=>{
            if(testd.topicData.tag == 'C'){
              data = testd.topicData.data;
            }
          });
          break;
        case 4:
          tag = 'D';
          testData.forEach((testd)=>{
            if(testd.topicData.tag == 'D'){
              data = testd.topicData.data;
            }
          });
          break;
        case 5:
          tag = 'E';
          testData.forEach((testd)=>{
            if(testd.topicData.tag == 'E'){
              data = testd.topicData.data;
            }
          });
          break;
      }
      if(listNew.length==0){
        listNew.push({topicData:{tag:tag,data:data}});
        l--;
      }else{
        let exists = false;
        listNew.forEach((ln)=>{
          if(ln.topicData.tag == tag){
            exists = true;
          }
        });
        if(!exists){
          listNew.push({topicData:{tag:tag,data:data}});
          l--;
        }
      }
    }
    newDatas.push({newData:listNew});
    goes--;
  }
};

let runThroughData = (t, testProto,datas) =>{
  while(datas.length != 0){
    let newData = datas.shift();
    processingModules.forEach((pm)=>{
      // check which processing module requires which new topicData
      let neededTopicData = [];
      newData.newData.forEach((nd)=>{
        pm.tags.forEach((td) => {
          if(nd.topicData.tag == td.tag){
            neededTopicData.push(nd.topicData);
          }
        });
      });

      if(!pm.buffer){
        // create new buffer
        if(testProto){
          pm.buffer = GenerateProto.createProtobufTopicData(t, neededTopicData);
        }else{
          pm.buffer = GenerateFlat.createFlatbufferTopicData(neededTopicData);
        }
      }else{
        if(neededTopicData.length>0){
          // update buffer
          if(testProto){
            pm.buffer = GenerateProto.updateTopicDataBuffer(pm.buffer, neededTopicData);
          }else{
            pm.buffer = GenerateFlat.updateTopicDataBuffer(pm.buffer, neededTopicData);
          }
        }
      }

    });
    // processing

  }
}

/*test('create a TopicData protobuffer, then read it back in', (t)=>{
  let timestampProto = {seconds: 1, nanos:2};
  // create protobuf
  let protobufTopicData = GenerateProto.createProtobufTopicData(t, timestampProto, testData);
  // read protobuf
  GenerateProto.verifyTopicDataRecord(t, protobufTopicData, testData);
});

test('create a TopicData flatbuffer, then read it back in', (t) => {
  let timestamp = { seconds: 1, nanos: 2 };

  // create buffer
  let bufferTopicData = GenerateFlat.createFlatbufferTopicData(timestamp, testData);

  // read buffer
  let topicData = TopicData.getRootAsTopicData(bufferTopicData);
  let topicDataRecordList = topicData.content(new TopicDataRecordList());

  t.is(topicData.contentType(), TopicDataContent.topic_data_records);
  t.is(topicDataRecordList.elementsLength(), 1);


  for(let i=0;i<testData.length;++i){
    GenerateFlat.verifyTopicDataRecord(t, topicDataRecordList.elements(0), testData, i);
  }
});*/

test('create, read and recreate buffer', (t)=>{
  getNewData(100000);
  let dataForFirstRun = newDatas.slice(0);
  // test protobuffer
  let timestampProto = Date.now();
  runThroughData(t, true,dataForFirstRun);
  let neededTimeProto = Date.now() - timestampProto;
  console.log("Protobuffers needed: " +neededTimeProto+ " Milliseconds");
  // test flatbuffer
  processingModules = processingModulesDefault;
  let timestampFlat = Date.now();
  runThroughData(t, false, newDatas);
  let neededTimeFlat = Date.now() - timestampFlat;
  console.log("Flatbuffers needed: " +neededTimeFlat+ " Milliseconds");
});


