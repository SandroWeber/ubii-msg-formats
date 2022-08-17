const ProtobufUtils = require('./protobufUtils');

class ProtobufTranslator {
    constructor(type) {
        this.proto = ProtobufUtils.getMessageOfType(type);

        if (!this.proto) {
            throw TypeError('Protobuf message type "' + type + '" is not defined!');
        }
    }

    /**
     * Exposes and returns protobuf.js verify() method. Verifies any payload or message object. Throws an error for invalid objects.
     * @param {*} object Object to be verified. Can be a payload or message object.
     * @return Returns true for valid objects. Throws an error for invalid objects.
     */
    verify(object) {
        return this.proto.verify(object);
    }

    /**
     * Exposes and returns protobuf.js toObject() method.
     * @param {Object} protoMessage A valid protobuf message
     * @returns Returns a plain javascript object.
     */
    toObject(protoMessage) {
        return this.proto.toObject(protoMessage);
    }

    /**
     * Exposes and returns protobuf.js fromObject() method.
     * @param {Object} protoMessage A plain javascript object
     * @returns Returns a valid protobuf message.
     */
    fromObject(object) {
        return this.proto.fromObject(object);
    }

    /**
     * Creates and returns a verified protobuf message object from a specified plain JavaScript payload object.
     * @param {Object} payload Valid plain JavaScript payload object.
     * @return Returns a protobuf message object.
     */
    createMessageFromPayload(payload) {
        // Verify the payload
        this.proto.verify(payload);

        // Create a new message
        return this.proto.create(payload);
    }

    /**
     * Creates and returns a verified plain JavaScript payload object from a specified protobuf message object.
     * @param {Object} message Valid protobuf message object.
     * @return Returns a plain JavaScript payload object.
     */
    createPayloadFromMessage(message) {
        return this.proto.toObject(message, {
            oneofs: true
        });
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
        return this.proto.decode(buffer);
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