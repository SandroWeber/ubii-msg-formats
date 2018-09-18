const MessageTranslator = require('./messageTranslator');

/**
 * Message translator for error messages.
 */
class ErrorMessageTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname+'/../../proto/errorMessage.proto', 'ErrorMessage', loadProtoFileSynchronously);
    }

    createPayload(data) {
        let payload = {
            ...data,
            messageType: 'error',
        }
        return payload;
    }
}

module.exports = ErrorMessageTranslator;