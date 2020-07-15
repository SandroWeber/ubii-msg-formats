const proto = require('../../dist/js/protobuf');

class ProtobufUtils {
  static getMessageOfType(typeString) {
    let packageArray = typeString.split('.');
    let protobuf = proto;
    packageArray.forEach((subpackage) => {
      if (typeof protobuf !== 'undefined') {
        protobuf = protobuf[subpackage] || undefined;
      }
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

  static getTimestamp() {
    let t = Date.now();
    let tSeconds = Math.floor(t / 1000);
    let tNanos = (t - tSeconds * 1000) * 1000000;
    return { seconds: tSeconds, nanos: tNanos };
  }
}

module.exports = ProtobufUtils;
