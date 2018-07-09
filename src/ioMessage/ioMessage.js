const protobuf = require("protobufjs");
var jsonDescriptor = require("./ioMessage.json");
const Message = require('../message/message');

class IoMessage extends Message {

    constructor(){
       super();
    }

    loadProtoFile(){
        //const protoFilename = './topicDataBlockMessage.proto';
        const lookupType = 'ioMessage';

        var root = protobuf.Root.fromJSON(jsonDescriptor);

        this.Proto = root.lookupType(lookupType);
        

        // Legacy async laoding:
        /* protobuf.load(protoFilename)
        .then( (root) => {
            // Obtain a message type
            this.Proto = root.lookupType(lookupType);
            console.log('loaded');
        });*/
    }

    createPayload(data){
        // todo: check for string

        let payload = {
            messageType: 'io',
            topic: data.topic,
            value: data.value,
            deviceIdentifier: data.deviceIdentifier,
        };

        return payload;
    }
  
}

module.exports = IoMessage;