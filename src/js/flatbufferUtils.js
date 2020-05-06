//const flatbuffers = require('flatbuffers');
const DataStructure = require('../../dist/flatbuffers/js/dataStructure_generated').ubii
  .dataStructures.DataStructure;
const Vector3 = require('../../dist/flatbuffers/js/vector3_generated').ubii.dataStructures.Vector3;
const Timestamp = require('../../dist/flatbuffers/js/timestamp_generated').ubii.dataStructures
  .Timestamp;
const TopicDataRecord = require('../../dist/flatbuffers/js/topicDataRecord_generated').ubii
  .topicData.TopicDataRecord;
const TopicDataRecordList = require('../../dist/flatbuffers/js/topicDataRecord_generated').ubii
  .topicData.TopicDataRecordList;

class FlatbufferUtils {
  static copyTopicDataRecords(builder, existingTopicDataRecordList) {
    let newTopicDataRecordOffsets = [];
    existingTopicDataRecordList.forEach((record) => {
      let data = record.data(new DataStructure());

      // create base data
      let offsets = {};
      if (data.stringListLength() > 0) {
        let length = data.stringListLength();
        let stringOffsets = [];
        for (let i = 0; i < length; i++) {
          stringOffsets.push(builder.createString(data.stringList(i)));
        }
        offsets.stringListOffset = DataStructure.createStringListVector(builder, stringOffsets);
      }

      // create DataStructure
      /*DataStructure.createDataStructure(
        builder,
        data.bool()
        offsets.boolListOffset,
        offsets.stringOffset,
        offsets.stringListOffset,
        data.byte(),
        data.int32(),
        offsets.int32ListOffset,
        data.float(),
        offsets.floatListOffset,
        data.double(),
        offsets.doubleListOffset
        offsets.vector2Offset,
        offsets.vector3Offset,
        offsets.vector4Offset,
        offsets.quaternionOffset,
        offsets.matrix3x2Offset,
        offsets.matrix4x4Offset,
        offsets.colorOffset,
        offsets.touchEventOffset,
        offsets.keyEventOffset,
        offsets.mouseEventOffset,
        offsets.myoEventOffset,
        offsets.pose2DOffset,
        offsets.pose3DOffset,
        offsets.object2DOffset,
        offsets.object3DOffset,
        offsets.object2DListOffset,
        offsets.object3DListOffset,
        offsets.image2DOffset,
        offsets.image2DListOffset,
        offsets.sessionOffset,
        offsets.interactionOffset
      );*/
      DataStructure.startDataStructure(builder);
      if (data !== null) {
        data.bool() && DataStructure.addBool(builder, data.bool());

        if (data.boolListArray() !== null) {
          DataStructure.addBoolList(
            builder,
            DataStructure.createBoolListVector(builder, data.boolListArray())
          );
        }

        offsets.stringListOffset && DataStructure.addStringList(builder, offsets.stringListOffset);

        let vector3 = data.vector3(new Vector3());
        if (vector3 !== null) {
          offsets.vector3 = Vector3.createVector3(builder, vector3.x(), vector3.y(), vector3.z());
        }
        offsets.vector3 && DataStructure.addVector3(builder, offsets.vector3);
      }
      let dataStructure = DataStructure.endDataStructure(builder);

      let topic = builder.createString(record.topic());
      TopicDataRecord.startTopicDataRecord(builder);
      TopicDataRecord.addTopic(builder, topic);

      let timestamp = record.timestamp(new Timestamp());
      TopicDataRecord.addTimestamp(
        builder,
        Timestamp.createTimestamp(builder, timestamp.seconds(), timestamp.nanos())
      );
      TopicDataRecord.addData(builder, dataStructure);
      let topicDataRecord = TopicDataRecord.endTopicDataRecord(builder);

      newTopicDataRecordOffsets.push(topicDataRecord);
    });

    let recordsListElements = TopicDataRecordList.createElementsVector(
      builder,
      newTopicDataRecordOffsets
    );
    return TopicDataRecordList.createTopicDataRecordList(builder, recordsListElements);
  }
}

module.exports = FlatbufferUtils;
