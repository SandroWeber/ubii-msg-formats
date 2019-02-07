const proto = require('../../dist/js/protobuf');

class ProtobufUtils {
    static getMessageOfType(typeString) {
        let packageArray = typeString.split('.');
        let protobuf = proto;
        packageArray.forEach((subpackage) => {
            protobuf = protobuf[subpackage] || undefined;
        });

        return protobuf;
    }

    static newMessage(typeString, data) {
        let protobuf = this.getMessageOfType(typeString);
        if (typeof protobuf === 'undefined') {
            return undefined;
        } else {
            return new protobuf(data);
        }
    }
}

module.exports = ProtobufUtils;