const protobuf = require("protobufjs");

class UbiiMessage {

    constructor() {
        if (new.target === UbiiMessage) {
            throw new TypeError("Cannot construct UbiiMessage instances directly");
        }

        if (this.createPayload === undefined) {
            throw new TypeError("Must override createPayload method.");
        }
        if (this.loadProtoFile === undefined) {
            // or maybe test typeof this.method === "function"
            throw new TypeError("Must override loadProtoFile method.");
        }

        this.message = {};
        this.Proto = undefined;
        this.loadProtoFile();
  
    }

    verify(object){
        let errMsg = this.Proto.verify(object);
        if (errMsg){
            throw Error(errMsg);
        }
        return true;
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
  
  module.exports = UbiiMessage;
  