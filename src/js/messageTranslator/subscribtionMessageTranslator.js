const MessageTranslator = require('./messageTranslator');

/**
 * Message translator for topic data input and output messages.
 */
class SubscribtionMessageTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname+'/../../proto/subscribtionMessage.proto', 'SubscribtionMessage', loadProtoFileSynchronously);
    }

    createPayload(data) {
        let payload = {
            ...data,
        }
        return payload;
    }

    createSubscribeTopicDataPayload(topic) {
        let payload = {          
            topic: topic
        }
        return payload;
    }

    createUnsubscribeTopicDataPayload(topic) {
        let payload = {          
            topic: topic
        }
        return payload;
    }
}

module.exports = SubscribtionMessageTranslator;