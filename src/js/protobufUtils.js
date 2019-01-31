
require('google-protobuf');
require('google-closure-library');

require('../../dist/js/protobuf_library');
//goog.require('../../dist/js/protobuf_library');

class ProtobufUtils {
    static getMessage(typeString) {
        let packageArray = typeString.split('.');
        let message = proto;
        packageArray.forEach((subpackage) => {
            message = message[subpackage];
        });

        return message;
    }

    static createMessage(typeString) {
        return new ProtobufUtils.getMessage(typeString);
    }

    static serialize(msg) {
        return msg.serializeBinary();
    }

    static deserialize(buffer, typeString) {
        return ProtobufUtils.getMessage(typeString).deserializeBinary(buffer);
    }
}

module.exports = ProtobufUtils;