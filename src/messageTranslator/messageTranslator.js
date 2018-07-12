const protobuf = require("protobufjs");
/**
 * Message Translator base class.
 * Message translators provide basic functionalities to translate variables between the three js protobuf formats: 
 * payload (plain js objects) <--> protobuf message <--> buffer
 */
class MessageTranslator {

    constructor(proto) {
        if (new.target === MessageTranslator) {
            throw new TypeError("Cannot construct MessageTranslator instances directly");
        }

        if (this.createPayload === undefined) {
            throw new TypeError("Must override createPayload method.");
        }
        
        if (this.constructor.createMessageTranslator === undefined) {
            throw new TypeError("Must override static async method createMessageTranslator.");
        }

        this.proto = proto;
    }

    static async loadProtoFile(filename, typePath){
        return await protobuf.load(filename)
        .then(function(root) {
            // Obtain a message type
            return root.lookupType(typePath);
        });
    }

    /**
     * Verifies any payload, mesage or buffer object.
     * @param {*} object Object to be verified. Can be a payload, message or buffer.
     */
    verify(object) {
        let errMsg = this.proto.verify(object);
        if (errMsg) {
            throw Error(errMsg);
        }
        return true;
    }

    createMessageFromPayload(payload) {
        // Verify the payload
        this.verify(payload);

        // Create a new message
        return this.proto.create(payload);
    }

    createPayloadFromMessage(message) {
        let payload = this.proto.toObject(message, {
            longs: String,
            enums: String,
            bytes: String,
            // see ConversionOptions
        });

        // Verify the object
        this.verify(payload);

        return payload;
    }

    createBufferFromMessage(message) {
        // Encode a message to an Uint8Array (browser) or Buffer (node)
        return this.proto.encode(message).finish();
    }

    createMessageFromBuffer(buffer) {
        // Decode an Uint8Array (browser) or Buffer (node) to a message
        let message = this.proto.decode(buffer);

        // Verify
        this.verify(message);

        return message;
    }
}

module.exports = MessageTranslator;