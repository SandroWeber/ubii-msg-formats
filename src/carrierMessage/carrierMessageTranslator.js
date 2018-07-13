const MessageTranslator = require('../messageTranslator/messageTranslator');

/**
 * Message translator for topic data input and output messages.
 */
class CarrierMessageTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname+'/carrierMessage.proto', 'carrierMessage', loadProtoFileSynchronously);
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