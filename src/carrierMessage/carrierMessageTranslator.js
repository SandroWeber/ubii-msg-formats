const MessageTranslator = require('../messageTranslator/messageTranslator');

/**
 * Message translator for topic data input and output messages.
 */
class CarrierMessageTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname+'/carrierMessage.proto', 'carrierMessage', loadProtoFileSynchronously);
    }
    
    createPayload(data) {
        // todo: check for string

        let payload = {
            messageType: 'carrier',
            content: data.content,
            contentType: data.contentType,
        };

        return payload;
    }
}

module.exports = CarrierMessageTranslator;