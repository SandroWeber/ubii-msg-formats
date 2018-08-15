const MessageTranslator = require('./messageTranslator');

/**
 * Message translator for topic data input and output messages.
 */
class SubscribtionMessageTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname+'/../../proto/topicDataMessage.proto', 'topicDataMessage', loadProtoFileSynchronously);
    }

    createPayload(deviceIdentifier, repeatedSubscribeTopicData = [], repeatedUnsubscribeTopicData = []) {
        let payload = {
            messageType: 'subscribtion',
            deviceIdentifier: ''+deviceIdentifier,
            subscribeTopicData: repeatedSubscribeTopicData,
            unsubscribeTopicData: repeatedUnsubscribeTopicData,
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