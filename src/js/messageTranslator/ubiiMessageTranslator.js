const MessageTranslator = require('./messageTranslator');

/**
 * Message translator for topic data input and output messages.
 */
class UbiiMessageTranslator extends MessageTranslator {

    constructor(loadProtoFileSynchronously = true) {
        super(__dirname+'/../../proto/ubiiMessage.proto', 'UbiiMessage', loadProtoFileSynchronously);
    }
    
    /**
     * Creates and returns a payload object based on a specified plain JS object.
     * The plain JS object is augmented with common fields for this message type.
     * @param {Object} data 
     */
    createPayload(data) {
        let payload = {
            ...data, 
            messageType: 'ubii',
        }
        return payload;
    }
}

module.exports = UbiiMessageTranslator;