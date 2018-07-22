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
            messageType: 'registration',
        }

        return payload;
    }
}

module.exports = TopicDataMessageTranslator;