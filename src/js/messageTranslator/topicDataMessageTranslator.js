const MessageTranslator = require('./messageTranslator');

/**
 * Message translator for topic data input and output messages.
 */
class TopicDataMessageTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname+'/../../proto/topicDataMessage.proto', 'topicDataMessage', loadProtoFileSynchronously);
    }

    createPayload(deviceIdentifier, repeatedPublishTopicData = [], repeatedSubscribeTopicData = [], repeatedUnsubscribeTopicData = []) {
        let payload = {
            messageType: 'topicData',
            deviceIdentifier: ''+deviceIdentifier,
            publishTopicData: repeatedPublishTopicData,
            subscribeTopicData: repeatedSubscribeTopicData,
            unsubscribeTopicData: repeatedUnsubscribeTopicData,
        }

        return payload;
    }

    /**
     * 
     * @param {String} deviceIdentifier 
     * @param {Object} action 
     */
    createPublishTopicDataPayload(topic, data) {
        let payload = {
            topic: topic,
            data: data,
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

module.exports = TopicDataMessageTranslator;