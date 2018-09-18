const MessageTranslator = require('./messageTranslator');

/**
 * Message translator for topic data input and output messages.
 */
class UbiiMessageTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname+'/../../proto/ubiiMessage.proto', 'UbiiMessage', loadProtoFileSynchronously);
    }
    
    createPayload(data) {
        let payload = {
            ...data, 
            messageType: 'ubii',
        }
        return payload;
    }
}

module.exports = UbiiMessageTranslator;