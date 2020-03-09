//const flatbuffers = require('flatbuffers');
const DataStructure = require('../../dist/flatbuffers/js/dataStructure_generated').ubii.dataStructures.DataStructure;
const Vector3 = require('../../dist/flatbuffers/js/vector3_generated').ubii.dataStructures.Vector3;

class FlatbufferUtils {
    static copyTopicDataRecords(builder, existingTopicDataRecordList) {
        let newTopicDataRecordOffsets = [];
        existingTopicDataRecordList.forEach(record => {
            let topic = builder.createString(record.topic());

            DataStructure.startDataStructure(builder);
            let data = record.data(new DataStructure());
            if (data !== null) {

                //console.info(data.bool());
                if (data.bool() !== false) {
                    DataStructure.addBool(builder, data.bool());
                }

                //console.info(data.boolList());
                if (data.boolList() !== false) {
                    //DataStructure.addBool(builder, data.bool());
                }

                //console.info(data.stringListLength());
                if (data.stringListLength() > 0) {
                    let length = data.stringListLength();
                    let stringOffsets = [];
                    for (let i = 0; i < length; i++) {
                        stringOffsets.push(builder.createString(data.stringList(i)));
                    }
                    DataStructure.addStringList(builder, DataStructure.createStringListVector(builder, stringOffsets));
                }

                let vector3 = data.vector3(new Vector3());
                if (vector3 !== null) {
                    //let length = data.stringListLength();
                    //let list = data.stringList();
                    DataStructure.addVector3(builder, Vector3.createVector3(builder, vector3.x(), vector3.y(), vector3.z()));
                }
            }
            let dataStructure = DataStructure.endDataStructure(builder);

            TopicDataRecord.startTopicDataRecord(builder);
            TopicDataRecord.addTopic(builder, topic);
            TopicDataRecord.addTimestamp(builder, Timestamp.createTimestamp(builder, record.timestamp().seconds(), record.timestamp().nanos()));
            TopicDataRecord.addData(builder, dataStructure);
            let topicDataRecord = TopicDataRecord.endTopicDataRecord(builder);

            newTopicDataRecordOffsets.push(topicDataRecord);
        });

        return newTopicDataRecordOffsets;
    };
}

module.exports = FlatbufferUtils;