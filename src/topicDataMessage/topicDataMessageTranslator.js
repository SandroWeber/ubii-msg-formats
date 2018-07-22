const MessageTranslator = require('../messageTranslator/messageTranslator');

/**
 * Message translator for topic data input and output messages.
 */
class TopicDataMessageTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname+'/topicDataMessage.proto', 'topicDataMessage', loadProtoFileSynchronously);
    }

    /**
     * 
     * @param {String} deviceIdentifier 
     * @param {Object} action 
     */
    createPayload(deviceIdentifier, action) {
        let payload = {
            messageType: 'topicData',
            deviceIdentifier: ''+deviceIdentifier,
            action: action,
        }

        return payload;
    }

    createPublishTopicDataAction(topic, data){
        let action = {
            topic: topic,
            data: data,
        }

        return action;
    }

    createSubscribeTopicDataAction(topic){
        let action = {
            topic: topic,
        }

        return action;
    }

    createUnsubscribeTopicDataAction(topic){
        let action = {
            topic: topic,
        }

        return action;
    }
}

module.exports = TopicDataMessageTranslator;