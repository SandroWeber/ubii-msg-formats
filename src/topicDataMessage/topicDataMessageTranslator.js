const protobuf = require("protobufjs");
var jsonDescriptor = require("./topicDataMessage.json");
const Message = require('../messageTranslator/messageTranslator');

/**
 * Message translator for topic data input and output messages.
 */
class topicDataMessageTranslator extends Message {

    constructor() {
        super();
    }

    loadProtoFile() {
        const lookupType = 'topicDataMessage';

        var root = protobuf.Root.fromJSON(jsonDescriptor);

        this.Proto = root.lookupType(lookupType);
    }

    createPayload(data) {
        // todo: check for string

        let payload = {
            messageType: 'topicData',
            topic: data.topic,
            value: data.value,
            deviceIdentifier: data.deviceIdentifier,
        };

        return payload;
    }

}

module.exports = topicDataMessageTranslator;