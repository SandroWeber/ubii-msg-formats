const MessageTranslator = require('../messageTranslator/messageTranslator');

/**
 * Message translator for topic data input and output messages.
 */
class CarrierMessageTranslator extends MessageTranslator {

    constructor(proto) {
        super(proto);
    }
    
    static async createMessageTranslator(){
        let proto = await CarrierMessageTranslator.loadProtoFile('src/carrierMessage/carrierMessage.proto', 'carrierMessage');

        return new CarrierMessageTranslator(proto);
    }

    createPayload(data) {
        // todo: check for string

        let payload = {
            messageType: 'topicData',
            contentType: data.contentType,
            content: data.content,
        };

        return payload;
    }

}

module.exports = CarrierMessageTranslator;