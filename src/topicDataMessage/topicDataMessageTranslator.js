const MessageTranslator = require('../messageTranslator/messageTranslator');

/**
 * Message translator for topic data input and output messages.
 */
class TopicDataMessageTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname+'/topicDataMessage.proto', 'topicDataMessage', loadProtoFileSynchronously);
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