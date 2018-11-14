const MessageTranslator = require('./messageTranslator');

/**
 * Message translator for cause messages.
 */
class CauseTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname + '/../../proto/interaction/cause.proto', 'Cause', loadProtoFileSynchronously);
    }
}

module.exports = CauseTranslator;