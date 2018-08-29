const MessageTranslator = require('./messageTranslator');

/**
 * Message translator for topic data input and output messages.
 */
class RegistrationMessageTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname+'/../../proto/registrationMessage.proto', 'registrationMessage', loadProtoFileSynchronously);
    }

    createPayload(deviceIdentifier, deviceType) {
        let payload = {
            deviceIdentifier: deviceIdentifier,
            deviceType: deviceType,
            messageType: 'registration',
        }

        return payload;
    }
}

module.exports = RegistrationMessageTranslator;