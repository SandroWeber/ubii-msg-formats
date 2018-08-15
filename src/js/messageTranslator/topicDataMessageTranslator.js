const MessageTranslator = require('./messageTranslator');

/**
 * Message translator for topic data input and output messages.
 */
class TopicDataMessageTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname+'/../../proto/topicDataMessage.proto', 'topicDataMessage', loadProtoFileSynchronously);
    }

    createPayload(deviceIdentifier, repeatedPublishTopicData = []) {
        let payload = {
            messageType: 'topicData',
            deviceIdentifier: ''+deviceIdentifier,
            publishTopicData: repeatedPublishTopicData,
        }

        return payload;
    }

    createPublishTopicDataPayload(topic, data) {
        let payload = {
            topic: topic,
            data: data,
        }

        return payload;
    }
}

module.exports = TopicDataMessageTranslator;