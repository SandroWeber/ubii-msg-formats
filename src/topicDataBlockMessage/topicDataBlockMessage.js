const protobuf = require("protobufjs");
var jsonDescriptor = require("./topicDataBlockMessage.json");
const UbiiMessage = require('../ubiiMessage/ubiiMessage');

class TopicDataBlockMessage extends UbiiMessage {

    constructor(){
       super();
    }

    loadProtoFile(){
        //const protoFilename = './topicDataBlockMessage.proto';
        const lookupType = 'topicDataBlockMessage';

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
            messageType: 'topicDataBlock',
            topic: data.topic,
            value: data.value,
            deviceIdentifier: data.deviceIdentifier,
        };

        return payload;
    }
  
}

module.exports = TopicDataBlockMessage;