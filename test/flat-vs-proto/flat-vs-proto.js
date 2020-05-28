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
let newDatas = [{newData:[{topicData: {topic:'A',data: {bool:true}}},
    {topicData: {topic: 'B',data: {stringList: {elements:['one', 'two', 'three']}}}},
    {topicData: {topic: 'C', data: {float: 0.987}}},
    {topicData: {topic: 'D',data: {doubleList: [0.123,1,234,2,345]}}},
    {topicData: {topic: 'E',data: {vector3: {x: 1.1, y: 2.2, z: 3.3}}}}]
}];
let testData = [
  {
    topicData: {
      topic: 'A',
      data: {bool:true}
    }
  },
//bool_list: [true, false, true],
//string: string,
  {
    topicData: {
      topic: 'B',
      data: {stringList: {elements:['one', 'two', 'three']}}
    }
  },
//byte: byte,
//int32: int32,
//int32_list: [int32],
  {
    topicData: {
      topic: 'C',
      data: {float: 0.987}
    }
  },
//float_list: [float],
//double: double,
  {
    topicData: {
      topic: 'D',
      data: {doubleList: [0.123,1,234,2,345]}
    }
  },
//   vector2: ubii.dataStructures.Vector2,
  {
    topicData: {
      topic: 'E',
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

let testDataDefault = [
  {
    topicData: {
      topic: 'A',
      data: {bool:true}
    }
  },
//bool_list: [true, false, true],
//string: string,
  {
    topicData: {
      topic: 'B',
      data: {stringList: {elements:['one', 'two', 'three']}}
    }
  },
//byte: byte,
//int32: int32,
//int32_list: [int32],
  {
    topicData: {
      topic: 'C',
      data: {float: 0.987}
    }
  },
//float_list: [float],
//double: double,
  {
    topicData: {
      topic: 'D',
      data: {doubleList: [0.123,1,234,2,345]}
    }
  },
//   vector2: ubii.dataStructures.Vector2,
  {
    topicData: {
      topic: 'E',
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
    topics:[{topic: 'A'},{topic: 'C'}],
    buffer: null
  },
  {
    topics:[{topic: 'A'},{topic: 'B'},{topic: 'E'}],
    buffer: null
  },
  {
    topics:[{topic: 'D'}],
    buffer: null
  },
  {
    topics:[{topic: 'B'},{topic: 'D'},{topic: 'E'}],
    buffer: null
  },
  {
    topics:[{topic: 'A'},{topic: 'B'},{topic: 'C'},{topic: 'D'},{topic: 'E'}],
    buffer: null
  }
];
let processingModulesDefault = [
  {
    topics:[{topic: 'A'},{topic: 'C'}],
    buffer: null
  },
  {
    topics:[{topic: 'A'},{topic: 'B'},{topic: 'E'}],
    buffer: null
  },
  {
    topics:[{topic: 'D'}],
    buffer: null
  },
  {
    topics:[{topic: 'B'},{topic: 'D'},{topic: 'E'}],
    buffer: null
  },
  {
    topics:[{topic: 'A'},{topic: 'B'},{topic: 'C'},{topic: 'D'},{topic: 'E'}],
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
      let topic = '';
      let data = undefined;
      switch (td) {
        case 1:
          topic = 'A';
          testData.forEach((testd)=>{
            if(testd.topicData.topic == 'A'){
              data = testd.topicData.data;
            }
          });
          break;
        case 2:
          topic = 'B';
          testData.forEach((testd)=>{
            if(testd.topicData.topic == 'B'){
              data = testd.topicData.data;
            }
          });
          break;
        case 3:
          topic = 'C';
          testData.forEach((testd)=>{
            if(testd.topicData.topic == 'C'){
              data = testd.topicData.data;
            }
          });
          break;
        case 4:
          topic = 'D';
          testData.forEach((testd)=>{
            if(testd.topicData.topic == 'D'){
              data = testd.topicData.data;
            }
          });
          break;
        case 5:
          topic = 'E';
          testData.forEach((testd)=>{
            if(testd.topicData.topic == 'E'){
              data = testd.topicData.data;
            }
          });
          break;
      }
      if(listNew.length==0){
        listNew.push({topicData:{topic:topic,data:data}});
        l--;
      }else{
        let exists = false;
        listNew.forEach((ln)=>{
          if(ln.topicData.topic == topic){
            exists = true;
          }
        });
        if(!exists){
          listNew.push({topicData:{topic:topic,data:data}});
          l--;
        }
      }
    }
    newDatas.push({newData:listNew});
    goes--;
  }
};

let cloneProcessingModules = () => {
  let arr = [];
  processingModulesDefault.forEach((pm)=>{
    let topics = [];
    pm.topics.forEach((t)=>{
      topics.push({topic:t.topic});
    });
    arr.push({topics:topics,buffer:null});
  });
  processingModules = arr;
};

let cloneTestData = () => {
  let arr = [];
  testDataDefault.forEach((td)=>{
    let data = {};
    let keys = Object.keys(td.topicData.data);
    keys.forEach((k)=>{
      data[k] = td.topicData.data[k];
    });
    arr.push({topicData:{topic:td.topicData.topic,data}});
  });
  testData = arr;
};

let writeDataToTestData = (data) => {
  data.forEach((d)=>{
    let topicExists = false;
    testData.forEach((td)=>{
      if(td.topicData.topic == d.topicData.topic){
        topicExists = true;
        td.data = d.topicData.data;
      }
    });
    if(!topicExists){
      testData.push(d);
    }
  });
}

let runThroughData = (t, testProto,datas) =>{
  while(datas.length != 0){
    let newData = datas.shift();
    processingModules.forEach((pm)=>{
      // check which processing module requires which new topicData
      let neededTopicData = [];
      newData.newData.forEach((nd)=>{
        pm.topics.forEach((td) => {
          if(nd.topicData.topic == td.topic){
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
    // processing of topic data
    let i = 0;
    processingModules.forEach((pm)=>{
      // read buffer and "process data"
      if(testProto){
        pm.buffer = GenerateProto.processTopicDataBuffer(pm.buffer);
      }else{
        pm.buffer = GenerateFlat.processTopicDataBuffer(pm.buffer);
      }
      // write to topic data
      let dataToWrite = [];
      if(testProto){
        dataToWrite = GenerateProto.getDataFromBuffer(pm.buffer, i);
      }else{
        dataToWrite = GenerateFlat.getDataFromBuffer(pm.buffer, i);
      }
      writeDataToTestData(dataToWrite);
      i++;
    });
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

test('create, read and process, recreate buffer and save topic data', (t)=>{
  let iterations = 1000;
  let averageProto = 0;
  let averageFlat = 0;
  for(let m=0;m<iterations;m++){
    getNewData(1000);
    let dataForFirstRun = newDatas.slice(0);
    // test protobuffer
    let timestampProto = Date.now();
    runThroughData(t, true,dataForFirstRun);
    let neededTimeProto = Date.now() - timestampProto;
    averageProto += neededTimeProto;
    //console.log("Protobuffers needed: " +neededTimeProto+ " Milliseconds");
    // test flatbuffer
    cloneProcessingModules();
    cloneTestData();
    let timestampFlat = Date.now();
    runThroughData(t, false, newDatas);
    let neededTimeFlat = Date.now() - timestampFlat;
    averageFlat += neededTimeFlat;
    //console.log("Flatbuffers needed: " +neededTimeFlat+ " Milliseconds");
    cloneProcessingModules();
    cloneTestData();
  }
  averageProto /= iterations;
  averageFlat /= iterations;
  console.log("On an average of "+iterations+" Test-iterations\n" +
      "Protobuffers needed: " +averageProto+ " Milliseconds\n" +
      "Flatbuffers needed: " +averageFlat+ " Milliseconds");
});