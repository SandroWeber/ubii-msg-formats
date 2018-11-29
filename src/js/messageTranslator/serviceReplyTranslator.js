const MessageTranslator = require('./messageTranslator');

/**
 * Message translator for service replies.
 */
class ServiceReplyTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname + '/../../proto/serviceReply/serviceReply.proto', 'ServiceReply', loadProtoFileSynchronously);
    }
}

module.exports = ServiceReplyTranslator;