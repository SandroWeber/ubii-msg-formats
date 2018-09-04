const MessageTranslator = require('./messageTranslator');

/**
 * Message translator for topic data input and output messages.
 */
class RegistrationMessageTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname+'/../../proto/registrationMessage.proto', 'registrationMessage', loadProtoFileSynchronously);
    }

    createPayload(data) {
        let payload = {
            ...data,
            messageType: 'registration',
        }
        return payload;
    }
}

module.exports = RegistrationMessageTranslator;