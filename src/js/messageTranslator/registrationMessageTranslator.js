const MessageTranslator = require('./messageTranslator');

/**
 * Message translator for topic data input and output messages.
 */
class RegistrationMessageTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname+'/../../proto/registrationMessage.proto', 'RegistrationMessage', loadProtoFileSynchronously);
    }

    createPayload(data) {
        let payload = {
            ...data,
        }
        return payload;
    }
}

module.exports = RegistrationMessageTranslator;