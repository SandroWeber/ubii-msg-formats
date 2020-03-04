import test from 'ava';
import { flatbuffers } from 'flatbuffers';

const { MSG_TYPES } = require('../../../src/js/index');
const TopicData = require('../../../dist/flatbuffers/js/topicData_generated').ubii.topicData.TopicData;
const TopicDataContent = require('../../../dist/flatbuffers/js/topicData_generated').ubii.topicData.TopicDataContent;
const TopicDataRecord = require('../../../dist/flatbuffers/js/topicDataRecord_generated').ubii.topicData.TopicDataRecord;
const DataStructure = require('../../../dist/flatbuffers/js/topicDataRecord_generated').ubii.dataStructures.DataStructure;
const Timestamp = require('../../../dist/flatbuffers/js/timestamp_generated').ubii.dataStructures.Timestamp;
const Vector3 = require('../../../dist/flatbuffers/js/vector3_generated').ubii.dataStructures.Vector3;

/* prepare tests */

/*test.beforeEach(t => {
    t.context.msgType = MSG_TYPES.ERROR;
    t.context.msgTypeUndefined = 'ubii.service.reply.SomethingUndefined';
});*/

/* run tests */

test('create a TopicData flatbuffer', t => {
    //console.info(flatbuffers);
    let topicString = '/my/test/topic';

    //// VERSION 1
    //// createXYZ calls
    /*let builder = new flatbuffers.Builder(0);

    //let vector3 = Vector3.createVector3(builder, 1.1, 2.2, 3.3);
    DataStructure.startDataStructure(builder);
    DataStructure.addVector3(builder, Vector3.createVector3(builder, 1.1, 2.2, 3.3));
    let data = DataStructure.endDataStructure(builder);

    //let topic = builder.createString(topicString);
    //let timestamp = Timestamp.createTimestamp(builder, 1, 5000);

    let topicDataRecord = TopicDataRecord.createTopicDataRecord(
        builder,
        builder.createString(topicString),
        Timestamp.createTimestamp(builder, 1, 5000),
        data
    );
    let topicData = TopicData.createTopicData(
        builder,
        TopicDataContent.topic_data_record,
        topicDataRecord
    );
    builder.finish(topicData);*/

    //// VERSION 2
    //// startXYZ / endXYZ calls
    let builder = new flatbuffers.Builder(0);

    TopicData.startTopicData(builder);

    TopicDataRecord.startTopicDataRecord(builder);
    TopicDataRecord.addTopic(builder, builder.createString(topicString));
    let topicDataRecord = TopicDataRecord.endTopicDataRecord(builder);

    TopicData.addContentType(builder, TopicDataContent.topic_data_record);
    TopicData.addContent(builder, topicDataRecord);

    let topicData = TopicData.endTopicData(builder);

    console.info(topicData);
});