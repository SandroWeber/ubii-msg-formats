const MessageTranslator = require('./messageTranslator');

/**
 * Message translator for topic data messages.
 */
class SessionTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname + '/../../proto/session/session.proto', 'Session', loadProtoFileSynchronously);
    }
}

module.exports = SessionTranslator;