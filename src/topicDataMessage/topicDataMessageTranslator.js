const protobuf = require("protobufjs");
const MessageTranslator = require('../messageTranslator/messageTranslator');


/**
 * Message translator for topic data input and output messages.
 */
class TopicDataMessageTranslator extends MessageTranslator {

    constructor(proto) {
        super(proto);
    }
    
    static async createMessageTranslator(){
        console.log('1');
        
        let proto = await TopicDataMessageTranslator.loadProtoFile(__dirname+'/topicDataMessage.proto', 'topicDataMessage');
        
        console.log('11');
        return new TopicDataMessageTranslator(proto);
    }

    

    createPayload(data) {
        // todo: check for string

        let payload = {
            messageType: 'topicData',
            topic: data.topic,
            value: data.value,
            deviceIdentifier: data.deviceIdentifier,
        };

        return payload;
    }

}

module.exports = TopicDataMessageTranslator;