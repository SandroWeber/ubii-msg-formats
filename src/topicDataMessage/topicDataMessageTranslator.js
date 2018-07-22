const MessageTranslator = require('../messageTranslator/messageTranslator');

/**
 * Message translator for topic data input and output messages.
 */
class TopicDataMessageTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname+'/topicDataMessage.proto', 'topicDataMessage', loadProtoFileSynchronously);
    }

    createPayload(data) {
        let payload = {
            ...data, 
            messageType: 'topicData',
        }

        return payload;
    }

    /**
     * 
     * @param {String} deviceIdentifier 
     * @param {Object} action 
     */
    createPublishTopicDataPayload(deviceIdentifier, topic, data) {
        let payload = {
            messageType: 'topicData',
            deviceIdentifier: ''+deviceIdentifier,
            publishTopicData: {
                topic: topic,
                data: data,
            }
        }

        return payload;
    }

    createSubscribeTopicDataPayload(deviceIdentifier, topic) {
        let payload = {
            messageType: 'topicData',
            deviceIdentifier: ''+deviceIdentifier,
            subscribeTopicData: {
                topic: topic
            }
        }

        return payload;
    }

    createUnsubscribeTopicDataPayload(deviceIdentifier, topic) {
        let payload = {
            messageType: 'topicData',
            deviceIdentifier: ''+deviceIdentifier,
            unsubscribeTopicData: {
                topic: topic
            }
        }

        return payload;
    }
}

module.exports = TopicDataMessageTranslator;