const protobuf = require("protobufjs");

/**
 * Abstract message translator base class.
 * Message translators provide basic functionalities for translating variables between the three js protobuf formats: 
 * plain JavaScript payload object <-> protobuf message object <-> buffer
 * 
 * The class can load proto files automatically using a synchronous method (only in node environments) or manually using 
 * a asynchronous method by calling the initializeAsync() member method after object initialization.
 * You can specify which method you want to use by passing a value for the constructor parameter loadProtoFileSynchronously.
 * The automatic, synchronous method is used by default.
 */
class MessageTranslator {

    constructor(fileName, typePath, loadProtoFileSynchronously = true) {
        if (new.target === MessageTranslator) {
            throw new TypeError("Cannot construct MessageTranslator instances directly");
        }

        this.fileName = fileName;
        this.typePath = typePath;
        this.proto = {};

        try {
            if (loadProtoFileSynchronously) {
                this.loadProtoFileSync();
            }
        } catch (e) {
            console.log(`Unable to laod proto file synchronously. 
            Use the async initializeAsync() method after object initialization. 
            Orginal error message: ${e}`);
        }
    }

    /**
     * Asynchronously initialization method.
     * Can be used in non-node environments such as the browser where the synchronously loading of proto files does not work.
     */
    async initializeAsync() {
        await protobuf.load(this.fileName)
            .then(function (root) {
                this.proto = root.lookupType(this.typePath);
            });
    }

    /**
     * (NODE ONLY)
     * Synchronously loading of the proto file. 
     * This is only available in node environments.
     */
    loadProtoFileSync() {
        this.proto = protobuf.loadSync(this.fileName).lookupType(this.typePath);
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
            //longs: String,
            //enums: String,
            //bytes: String,
            // see ConversionOptions
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
}

module.exports = MessageTranslator;