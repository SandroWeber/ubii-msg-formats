require('../../dist/js/proto/general/error_pb');


class ProtobufUtils {
    static getMessage(typeString) {
        let packageArray = typeString.split('.');
        let message = proto;
        packageArray.forEach((subpackage) => {
            message = protobuf[subpackage];
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