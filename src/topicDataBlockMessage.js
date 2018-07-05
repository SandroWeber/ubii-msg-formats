var protobuf = require("protobufjs");
var jsonDescriptor = require("./topicDataBlockMessage.json");

class TopicDataBlockMessage {

    constructor(){
        this.message = {};
        this.Proto = undefined;
        this.loadProtoFile();
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

    verify(object){
        let errMsg = this.Proto.verify(object);
        if (errMsg){
            throw Error(errMsg);
        }
        return true;
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

    createMessageFromPayload(payload){
        // Verify the payload
        this.verify(payload);

        // Create a new message
        return this.Proto.create(payload);
    }

    createPayloadFromMessage(message){
        // Maybe convert the message back to a plain object
        let payload = this.Proto.toObject(message, {
            longs: String,
            enums: String,
            bytes: String,
            // see ConversionOptions
        });

        // Verify the object
        this.verify(payload);

        return payload;
    }

    createBufferFromMessage(message){
        // Encode a message to an Uint8Array (browser) or Buffer (node)
        return this.Proto.encode(message).finish();
    }

    createMessageFromBuffer(buffer){
        // Decode an Uint8Array (browser) or Buffer (node) to a message
        let message =  this.Proto.decode(buffer);
        
        // Verify
        this.verify(message);

        return message;
    }

    // Set

    setMessageFromPayload(payload){
        this.message = this.createMessageFromPayload(payload);
    }

    setMesageFromBuffer(buffer){
        this.message = this.createMessageFromBuffer(buffer);
    }
    
}

module.exports = TopicDataBlockMessage;