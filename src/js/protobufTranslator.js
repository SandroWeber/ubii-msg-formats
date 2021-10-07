const ProtobufUtils = require('./protobufUtils');

class ProtobufTranslator {
    constructor(type) {
        this.proto = ProtobufUtils.getMessageOfType(type);

        if (!this.proto) {
            throw TypeError('Protobuf message type "' + type + '" is not defined!');
        }
    }

    /**
     * Verifies any payload or message object. Throws an error for invalid objects.
     * @param {*} object Object to be verified. Can be a payload or message object.
     * @return Returns true for valid objects. Throws an error for invalid objects.
     */
    verify(object) {
        let errMsg = this.proto.verify(object);
        if (errMsg) {
            throw Error(errMsg);
        }
        return true;
    }

    /**
     * Creates and returns a verified protobuf message object from a specified plain JavaScript payload object.
     * @param {Object} payload Valid plain JavaScript payload object.
     * @return Returns a protobuf message object.
     */
    createMessageFromPayload(payload) {
        // Verify the payload
        this.verify(payload);

        // Create a new message
        return this.proto.create(payload);
    }

    /**
     * Creates and returns a verified plain JavaScript payload object from a specified protobuf message object.
     * @param {Object} message Valid protobuf message object.
     * @return Returns a plain JavaScript payload object.
     */
    createPayloadFromMessage(message) {
        let payload = this.proto.toObject(message, {
            oneofs: true
        });

        // Verify the object
        this.verify(payload);

        return payload;
    }

    /**
     * Creates and returns an encoded buffer from a specified protobuf message object.
     * @param {Object} message Valid protobuf message object.
     * @return Returns a Uint8Array (browser) or Buffer (node).
     */
    createBufferFromMessage(message) {
        return this.proto.encode(message).finish();
    }

    /**
     * Creates and returns a valid protobuf message object from a specified buffer.
     * @param buffer Uint8Array (browser) or Buffer (node).
     * @return Returns a valid protobuf message object.
     */
    createMessageFromBuffer(buffer) {
        let message = this.proto.decode(buffer);

        this.verify(message);

        return message;
    }

    /**
     * Creates and returns an encoded buffer from a specified payload object.
     * @param {Object} payload Valid plain JavaScript payload object.
     * @return Returns a Uint8Array (browser) or Buffer (node).
     */
    createBufferFromPayload(payload){
        return this.createBufferFromMessage(this.createMessageFromPayload(payload));
    }

    /**
     * Creates and returns an encoded buffer from a specified payload object.
     * @param {Object} payload Valid plain JavaScript payload object.
     * @return Returns a Uint8Array (browser) or Buffer (node).
     */
    createPayloadFromBuffer(buffer){
        return this.createPayloadFromMessage(this.createMessageFromBuffer(buffer));
    }
}

module.exports = ProtobufTranslator;