const protobuf = require("protobufjs");
var jsonDescriptor = require("./carrierMessage.json");
const Message = require('../messageTranslator/messageTranslator');

/**
 * Message translator for topic data input and output messages.
 */
class carrierMessageTranslator extends Message {

    constructor() {
        super();
    }

    loadProtoFile() {
        const lookupType = 'carrierMessage';

        var root = protobuf.Root.fromJSON(jsonDescriptor);

        this.Proto = root.lookupType(lookupType);
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

module.exports = carrierMessageTranslator;