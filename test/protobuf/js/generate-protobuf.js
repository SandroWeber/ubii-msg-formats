const proto = require ("../../../dist/js/protobuf");
const { ProtobufUtils, ProtobufTranslator, MSG_TYPES } = require('../../../src/js/index'); // ../../../../src/js/index

/**
 * Creates a TopicData object with testData object fields
 *
 * @param {*} topicString
 * @param {*} timestamp
 * @param {*} testData
 */
let createProtobufTopicData = (test, testData) => {
    let tdrArray = new Array();
    testData.forEach(function(data){
        let tdr = proto.ubii.topicData.TopicDataRecord.create(data.data);
        tdr.topic = data.tag;
        //tdr.timestamp = timestamp;
        tdrArray.push(tdr);
    });
    let tdrl = proto.ubii.topicData.TopicDataRecordList.create();
    tdrl.elements = tdrArray;
    let translator = new ProtobufTranslator(MSG_TYPES.TOPIC_DATA);
    let message = translator.createMessageFromPayload({topicDataRecordList:tdrl});
    let buffer = undefined;
    test.notThrows(()=>{
        buffer = translator.createBufferFromMessage(message);
    });
    return buffer;
};

let verifyTopicDataRecord = (test, buffer, testData) => {
    let translator = new ProtobufTranslator(MSG_TYPES.TOPIC_DATA);
    test.notThrows(()=>{
        let decodedMessage = translator.createMessageFromBuffer(buffer);
        let tdrl = decodedMessage.topicDataRecordList;
        let index = 0;
        tdrl.elements.forEach((el)=>{
            el.timestamp = null;
            el.topic = null;
            let obj = proto.ubii.topicData.TopicDataRecord.toObject(el);
            test.deepEqual(obj,testData[index].data);
            index++;
        })
    });
};

let updateTopicDataBuffer = (buffer, data) => {
    let translator = new ProtobufTranslator(MSG_TYPES.TOPIC_DATA);
    let decodedMessage = translator.createMessageFromBuffer(buffer);
    let tdrl = decodedMessage.topicDataRecordList;
    data.forEach((d)=>{
        tdrl.elements.forEach((el)=>{
            if(el.topic == d.tag){
                let keys = Object.keys(el);
                keys.forEach((k)=>{
                    if(k != "timestamp" && k != "topic"){
                        switch (k) {
                            case "bool":
                                el.bool = d.data.bool;
                                break;
                            case "vector3":
                                el.vector3 = d.data.vector3;
                                break;
                            case "stringList":
                                el.stringList = d.data.stringList;
                                break;
                            case "float":
                                el.float = d.data.float;
                                break;
                        }
                    }
                });
            }
        });
    });
    let message = translator.createMessageFromPayload({topicDataRecordList:tdrl});
    buffer = undefined;
    buffer = translator.createBufferFromMessage(message);
    return buffer;
};

module.exports = {
    createProtobufTopicData: createProtobufTopicData,
    verifyTopicDataRecord: verifyTopicDataRecord,
    updateTopicDataBuffer: updateTopicDataBuffer
}