const MessageTranslator = require('./messageTranslator');

/**
 * Message translator for topic data input and output messages.
 */
class CarrierMessageTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname+'/../../proto/carrierMessage.proto', 'carrierMessage', loadProtoFileSynchronously);
    }
    
    createPayload(data) {
        let payload = {
            ...data, 
            messageType: 'carrier',
        }

        return payload;
    }
}

module.exports = CarrierMessageTranslator;