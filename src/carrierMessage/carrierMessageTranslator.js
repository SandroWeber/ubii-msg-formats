const MessageTranslator = require('../messageTranslator/messageTranslator');

/**
 * Message translator for topic data input and output messages.
 */
class CarrierMessageTranslator extends MessageTranslator {

    constructor(proto) {
        super(proto);
    }
    
    static async createMessageTranslator(){
        let proto = await CarrierMessageTranslator.loadProtoFile(__dirname+'/carrierMessage.proto', 'carrierMessage');

        return new CarrierMessageTranslator(proto);
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