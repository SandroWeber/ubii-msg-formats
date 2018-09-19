const MessageTranslator = require('./messageTranslator');

/**
 * Message translator for topic data input and output messages.
 */
class TopicDataMessageTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname+'/../../proto/topicDataMessage.proto', 'TopicDataMessage', loadProtoFileSynchronously);
    }

    createPayload(data) {
        let payload = {
            ...data,
        }
        return payload;
    }
}

module.exports = TopicDataMessageTranslator;