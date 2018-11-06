const MessageTranslator = require('./messageTranslator');

/**
 * Message translator for service replies.
 */
class ServiceReplyTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname + '/../../proto/topicData/topicData.proto', 'ServiceRequest', loadProtoFileSynchronously);
    }
}

module.exports = ServiceReplyTranslator;