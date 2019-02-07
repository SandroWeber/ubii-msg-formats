/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ubii = (function() {

    /**
     * Namespace ubii.
     * @exports ubii
     * @namespace
     */
    var ubii = {};

    ubii.service = (function() {

        /**
         * Namespace service.
         * @memberof ubii
         * @namespace
         */
        var service = {};

        service.reply = (function() {

            /**
             * Namespace reply.
             * @memberof ubii.service
             * @namespace
             */
            var reply = {};

            reply.Error = (function() {

                /**
                 * Properties of an Error.
                 * @memberof ubii.service.reply
                 * @interface IError
                 * @property {string|null} [title] Error title
                 * @property {string|null} [message] Error message
                 * @property {string|null} [stack] Error stack
                 */

                /**
                 * Constructs a new Error.
                 * @memberof ubii.service.reply
                 * @classdesc Represents an Error.
                 * @implements IError
                 * @constructor
                 * @param {ubii.service.reply.IError=} [properties] Properties to set
                 */
                function Error(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Error title.
                 * @member {string} title
                 * @memberof ubii.service.reply.Error
                 * @instance
                 */
                Error.prototype.title = "";

                /**
                 * Error message.
                 * @member {string} message
                 * @memberof ubii.service.reply.Error
                 * @instance
                 */
                Error.prototype.message = "";

                /**
                 * Error stack.
                 * @member {string} stack
                 * @memberof ubii.service.reply.Error
                 * @instance
                 */
                Error.prototype.stack = "";

                /**
                 * Creates a new Error instance using the specified properties.
                 * @function create
                 * @memberof ubii.service.reply.Error
                 * @static
                 * @param {ubii.service.reply.IError=} [properties] Properties to set
                 * @returns {ubii.service.reply.Error} Error instance
                 */
                Error.create = function create(properties) {
                    return new Error(properties);
                };

                /**
                 * Encodes the specified Error message. Does not implicitly {@link ubii.service.reply.Error.verify|verify} messages.
                 * @function encode
                 * @memberof ubii.service.reply.Error
                 * @static
                 * @param {ubii.service.reply.IError} message Error message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Error.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.title != null && message.hasOwnProperty("title"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
                    if (message.message != null && message.hasOwnProperty("message"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                    if (message.stack != null && message.hasOwnProperty("stack"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.stack);
                    return writer;
                };

                /**
                 * Encodes the specified Error message, length delimited. Does not implicitly {@link ubii.service.reply.Error.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ubii.service.reply.Error
                 * @static
                 * @param {ubii.service.reply.IError} message Error message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Error.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Error message from the specified reader or buffer.
                 * @function decode
                 * @memberof ubii.service.reply.Error
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ubii.service.reply.Error} Error
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Error.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.service.reply.Error();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.title = reader.string();
                            break;
                        case 2:
                            message.message = reader.string();
                            break;
                        case 3:
                            message.stack = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Error message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ubii.service.reply.Error
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ubii.service.reply.Error} Error
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Error.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Error message.
                 * @function verify
                 * @memberof ubii.service.reply.Error
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Error.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.title != null && message.hasOwnProperty("title"))
                        if (!$util.isString(message.title))
                            return "title: string expected";
                    if (message.message != null && message.hasOwnProperty("message"))
                        if (!$util.isString(message.message))
                            return "message: string expected";
                    if (message.stack != null && message.hasOwnProperty("stack"))
                        if (!$util.isString(message.stack))
                            return "stack: string expected";
                    return null;
                };

                /**
                 * Creates an Error message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ubii.service.reply.Error
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ubii.service.reply.Error} Error
                 */
                Error.fromObject = function fromObject(object) {
                    if (object instanceof $root.ubii.service.reply.Error)
                        return object;
                    var message = new $root.ubii.service.reply.Error();
                    if (object.title != null)
                        message.title = String(object.title);
                    if (object.message != null)
                        message.message = String(object.message);
                    if (object.stack != null)
                        message.stack = String(object.stack);
                    return message;
                };

                /**
                 * Creates a plain object from an Error message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ubii.service.reply.Error
                 * @static
                 * @param {ubii.service.reply.Error} message Error
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Error.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.title = "";
                        object.message = "";
                        object.stack = "";
                    }
                    if (message.title != null && message.hasOwnProperty("title"))
                        object.title = message.title;
                    if (message.message != null && message.hasOwnProperty("message"))
                        object.message = message.message;
                    if (message.stack != null && message.hasOwnProperty("stack"))
                        object.stack = message.stack;
                    return object;
                };

                /**
                 * Converts this Error to JSON.
                 * @function toJSON
                 * @memberof ubii.service.reply.Error
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Error.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Error;
            })();

            reply.ClientSpecification = (function() {

                /**
                 * Properties of a ClientSpecification.
                 * @memberof ubii.service.reply
                 * @interface IClientSpecification
                 * @property {string|null} [name] ClientSpecification name
                 * @property {string|null} [namespace] ClientSpecification namespace
                 * @property {string|null} [identifier] ClientSpecification identifier
                 * @property {string|null} [topicDataHost] ClientSpecification topicDataHost
                 * @property {string|null} [topicDataPortZmq] ClientSpecification topicDataPortZmq
                 * @property {string|null} [topicDataPortWs] ClientSpecification topicDataPortWs
                 */

                /**
                 * Constructs a new ClientSpecification.
                 * @memberof ubii.service.reply
                 * @classdesc Represents a ClientSpecification.
                 * @implements IClientSpecification
                 * @constructor
                 * @param {ubii.service.reply.IClientSpecification=} [properties] Properties to set
                 */
                function ClientSpecification(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ClientSpecification name.
                 * @member {string} name
                 * @memberof ubii.service.reply.ClientSpecification
                 * @instance
                 */
                ClientSpecification.prototype.name = "";

                /**
                 * ClientSpecification namespace.
                 * @member {string} namespace
                 * @memberof ubii.service.reply.ClientSpecification
                 * @instance
                 */
                ClientSpecification.prototype.namespace = "";

                /**
                 * ClientSpecification identifier.
                 * @member {string} identifier
                 * @memberof ubii.service.reply.ClientSpecification
                 * @instance
                 */
                ClientSpecification.prototype.identifier = "";

                /**
                 * ClientSpecification topicDataHost.
                 * @member {string} topicDataHost
                 * @memberof ubii.service.reply.ClientSpecification
                 * @instance
                 */
                ClientSpecification.prototype.topicDataHost = "";

                /**
                 * ClientSpecification topicDataPortZmq.
                 * @member {string} topicDataPortZmq
                 * @memberof ubii.service.reply.ClientSpecification
                 * @instance
                 */
                ClientSpecification.prototype.topicDataPortZmq = "";

                /**
                 * ClientSpecification topicDataPortWs.
                 * @member {string} topicDataPortWs
                 * @memberof ubii.service.reply.ClientSpecification
                 * @instance
                 */
                ClientSpecification.prototype.topicDataPortWs = "";

                /**
                 * Creates a new ClientSpecification instance using the specified properties.
                 * @function create
                 * @memberof ubii.service.reply.ClientSpecification
                 * @static
                 * @param {ubii.service.reply.IClientSpecification=} [properties] Properties to set
                 * @returns {ubii.service.reply.ClientSpecification} ClientSpecification instance
                 */
                ClientSpecification.create = function create(properties) {
                    return new ClientSpecification(properties);
                };

                /**
                 * Encodes the specified ClientSpecification message. Does not implicitly {@link ubii.service.reply.ClientSpecification.verify|verify} messages.
                 * @function encode
                 * @memberof ubii.service.reply.ClientSpecification
                 * @static
                 * @param {ubii.service.reply.IClientSpecification} message ClientSpecification message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClientSpecification.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.namespace != null && message.hasOwnProperty("namespace"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.namespace);
                    if (message.identifier != null && message.hasOwnProperty("identifier"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifier);
                    if (message.topicDataHost != null && message.hasOwnProperty("topicDataHost"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.topicDataHost);
                    if (message.topicDataPortZmq != null && message.hasOwnProperty("topicDataPortZmq"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.topicDataPortZmq);
                    if (message.topicDataPortWs != null && message.hasOwnProperty("topicDataPortWs"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.topicDataPortWs);
                    return writer;
                };

                /**
                 * Encodes the specified ClientSpecification message, length delimited. Does not implicitly {@link ubii.service.reply.ClientSpecification.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ubii.service.reply.ClientSpecification
                 * @static
                 * @param {ubii.service.reply.IClientSpecification} message ClientSpecification message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClientSpecification.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ClientSpecification message from the specified reader or buffer.
                 * @function decode
                 * @memberof ubii.service.reply.ClientSpecification
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ubii.service.reply.ClientSpecification} ClientSpecification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClientSpecification.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.service.reply.ClientSpecification();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.namespace = reader.string();
                            break;
                        case 3:
                            message.identifier = reader.string();
                            break;
                        case 4:
                            message.topicDataHost = reader.string();
                            break;
                        case 5:
                            message.topicDataPortZmq = reader.string();
                            break;
                        case 6:
                            message.topicDataPortWs = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ClientSpecification message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ubii.service.reply.ClientSpecification
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ubii.service.reply.ClientSpecification} ClientSpecification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClientSpecification.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ClientSpecification message.
                 * @function verify
                 * @memberof ubii.service.reply.ClientSpecification
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ClientSpecification.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.namespace != null && message.hasOwnProperty("namespace"))
                        if (!$util.isString(message.namespace))
                            return "namespace: string expected";
                    if (message.identifier != null && message.hasOwnProperty("identifier"))
                        if (!$util.isString(message.identifier))
                            return "identifier: string expected";
                    if (message.topicDataHost != null && message.hasOwnProperty("topicDataHost"))
                        if (!$util.isString(message.topicDataHost))
                            return "topicDataHost: string expected";
                    if (message.topicDataPortZmq != null && message.hasOwnProperty("topicDataPortZmq"))
                        if (!$util.isString(message.topicDataPortZmq))
                            return "topicDataPortZmq: string expected";
                    if (message.topicDataPortWs != null && message.hasOwnProperty("topicDataPortWs"))
                        if (!$util.isString(message.topicDataPortWs))
                            return "topicDataPortWs: string expected";
                    return null;
                };

                /**
                 * Creates a ClientSpecification message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ubii.service.reply.ClientSpecification
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ubii.service.reply.ClientSpecification} ClientSpecification
                 */
                ClientSpecification.fromObject = function fromObject(object) {
                    if (object instanceof $root.ubii.service.reply.ClientSpecification)
                        return object;
                    var message = new $root.ubii.service.reply.ClientSpecification();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.namespace != null)
                        message.namespace = String(object.namespace);
                    if (object.identifier != null)
                        message.identifier = String(object.identifier);
                    if (object.topicDataHost != null)
                        message.topicDataHost = String(object.topicDataHost);
                    if (object.topicDataPortZmq != null)
                        message.topicDataPortZmq = String(object.topicDataPortZmq);
                    if (object.topicDataPortWs != null)
                        message.topicDataPortWs = String(object.topicDataPortWs);
                    return message;
                };

                /**
                 * Creates a plain object from a ClientSpecification message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ubii.service.reply.ClientSpecification
                 * @static
                 * @param {ubii.service.reply.ClientSpecification} message ClientSpecification
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ClientSpecification.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.namespace = "";
                        object.identifier = "";
                        object.topicDataHost = "";
                        object.topicDataPortZmq = "";
                        object.topicDataPortWs = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.namespace != null && message.hasOwnProperty("namespace"))
                        object.namespace = message.namespace;
                    if (message.identifier != null && message.hasOwnProperty("identifier"))
                        object.identifier = message.identifier;
                    if (message.topicDataHost != null && message.hasOwnProperty("topicDataHost"))
                        object.topicDataHost = message.topicDataHost;
                    if (message.topicDataPortZmq != null && message.hasOwnProperty("topicDataPortZmq"))
                        object.topicDataPortZmq = message.topicDataPortZmq;
                    if (message.topicDataPortWs != null && message.hasOwnProperty("topicDataPortWs"))
                        object.topicDataPortWs = message.topicDataPortWs;
                    return object;
                };

                /**
                 * Converts this ClientSpecification to JSON.
                 * @function toJSON
                 * @memberof ubii.service.reply.ClientSpecification
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ClientSpecification.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ClientSpecification;
            })();

            reply.DeviceSpecification = (function() {

                /**
                 * Properties of a DeviceSpecification.
                 * @memberof ubii.service.reply
                 * @interface IDeviceSpecification
                 * @property {string|null} [name] DeviceSpecification name
                 * @property {string|null} [namespace] DeviceSpecification namespace
                 * @property {string|null} [identifier] DeviceSpecification identifier
                 * @property {string|null} [deviceType] DeviceSpecification deviceType
                 * @property {string|null} [correspondingClientIdentifier] DeviceSpecification correspondingClientIdentifier
                 */

                /**
                 * Constructs a new DeviceSpecification.
                 * @memberof ubii.service.reply
                 * @classdesc Represents a DeviceSpecification.
                 * @implements IDeviceSpecification
                 * @constructor
                 * @param {ubii.service.reply.IDeviceSpecification=} [properties] Properties to set
                 */
                function DeviceSpecification(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeviceSpecification name.
                 * @member {string} name
                 * @memberof ubii.service.reply.DeviceSpecification
                 * @instance
                 */
                DeviceSpecification.prototype.name = "";

                /**
                 * DeviceSpecification namespace.
                 * @member {string} namespace
                 * @memberof ubii.service.reply.DeviceSpecification
                 * @instance
                 */
                DeviceSpecification.prototype.namespace = "";

                /**
                 * DeviceSpecification identifier.
                 * @member {string} identifier
                 * @memberof ubii.service.reply.DeviceSpecification
                 * @instance
                 */
                DeviceSpecification.prototype.identifier = "";

                /**
                 * DeviceSpecification deviceType.
                 * @member {string} deviceType
                 * @memberof ubii.service.reply.DeviceSpecification
                 * @instance
                 */
                DeviceSpecification.prototype.deviceType = "";

                /**
                 * DeviceSpecification correspondingClientIdentifier.
                 * @member {string} correspondingClientIdentifier
                 * @memberof ubii.service.reply.DeviceSpecification
                 * @instance
                 */
                DeviceSpecification.prototype.correspondingClientIdentifier = "";

                /**
                 * Creates a new DeviceSpecification instance using the specified properties.
                 * @function create
                 * @memberof ubii.service.reply.DeviceSpecification
                 * @static
                 * @param {ubii.service.reply.IDeviceSpecification=} [properties] Properties to set
                 * @returns {ubii.service.reply.DeviceSpecification} DeviceSpecification instance
                 */
                DeviceSpecification.create = function create(properties) {
                    return new DeviceSpecification(properties);
                };

                /**
                 * Encodes the specified DeviceSpecification message. Does not implicitly {@link ubii.service.reply.DeviceSpecification.verify|verify} messages.
                 * @function encode
                 * @memberof ubii.service.reply.DeviceSpecification
                 * @static
                 * @param {ubii.service.reply.IDeviceSpecification} message DeviceSpecification message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeviceSpecification.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.namespace != null && message.hasOwnProperty("namespace"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.namespace);
                    if (message.identifier != null && message.hasOwnProperty("identifier"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifier);
                    if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceType);
                    if (message.correspondingClientIdentifier != null && message.hasOwnProperty("correspondingClientIdentifier"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.correspondingClientIdentifier);
                    return writer;
                };

                /**
                 * Encodes the specified DeviceSpecification message, length delimited. Does not implicitly {@link ubii.service.reply.DeviceSpecification.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ubii.service.reply.DeviceSpecification
                 * @static
                 * @param {ubii.service.reply.IDeviceSpecification} message DeviceSpecification message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeviceSpecification.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeviceSpecification message from the specified reader or buffer.
                 * @function decode
                 * @memberof ubii.service.reply.DeviceSpecification
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ubii.service.reply.DeviceSpecification} DeviceSpecification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeviceSpecification.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.service.reply.DeviceSpecification();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.namespace = reader.string();
                            break;
                        case 3:
                            message.identifier = reader.string();
                            break;
                        case 4:
                            message.deviceType = reader.string();
                            break;
                        case 5:
                            message.correspondingClientIdentifier = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DeviceSpecification message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ubii.service.reply.DeviceSpecification
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ubii.service.reply.DeviceSpecification} DeviceSpecification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeviceSpecification.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeviceSpecification message.
                 * @function verify
                 * @memberof ubii.service.reply.DeviceSpecification
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeviceSpecification.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.namespace != null && message.hasOwnProperty("namespace"))
                        if (!$util.isString(message.namespace))
                            return "namespace: string expected";
                    if (message.identifier != null && message.hasOwnProperty("identifier"))
                        if (!$util.isString(message.identifier))
                            return "identifier: string expected";
                    if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                        if (!$util.isString(message.deviceType))
                            return "deviceType: string expected";
                    if (message.correspondingClientIdentifier != null && message.hasOwnProperty("correspondingClientIdentifier"))
                        if (!$util.isString(message.correspondingClientIdentifier))
                            return "correspondingClientIdentifier: string expected";
                    return null;
                };

                /**
                 * Creates a DeviceSpecification message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ubii.service.reply.DeviceSpecification
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ubii.service.reply.DeviceSpecification} DeviceSpecification
                 */
                DeviceSpecification.fromObject = function fromObject(object) {
                    if (object instanceof $root.ubii.service.reply.DeviceSpecification)
                        return object;
                    var message = new $root.ubii.service.reply.DeviceSpecification();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.namespace != null)
                        message.namespace = String(object.namespace);
                    if (object.identifier != null)
                        message.identifier = String(object.identifier);
                    if (object.deviceType != null)
                        message.deviceType = String(object.deviceType);
                    if (object.correspondingClientIdentifier != null)
                        message.correspondingClientIdentifier = String(object.correspondingClientIdentifier);
                    return message;
                };

                /**
                 * Creates a plain object from a DeviceSpecification message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ubii.service.reply.DeviceSpecification
                 * @static
                 * @param {ubii.service.reply.DeviceSpecification} message DeviceSpecification
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeviceSpecification.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.namespace = "";
                        object.identifier = "";
                        object.deviceType = "";
                        object.correspondingClientIdentifier = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.namespace != null && message.hasOwnProperty("namespace"))
                        object.namespace = message.namespace;
                    if (message.identifier != null && message.hasOwnProperty("identifier"))
                        object.identifier = message.identifier;
                    if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                        object.deviceType = message.deviceType;
                    if (message.correspondingClientIdentifier != null && message.hasOwnProperty("correspondingClientIdentifier"))
                        object.correspondingClientIdentifier = message.correspondingClientIdentifier;
                    return object;
                };

                /**
                 * Converts this DeviceSpecification to JSON.
                 * @function toJSON
                 * @memberof ubii.service.reply.DeviceSpecification
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeviceSpecification.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DeviceSpecification;
            })();

            reply.Success = (function() {

                /**
                 * Properties of a Success.
                 * @memberof ubii.service.reply
                 * @interface ISuccess
                 * @property {string|null} [title] Success title
                 * @property {string|null} [message] Success message
                 */

                /**
                 * Constructs a new Success.
                 * @memberof ubii.service.reply
                 * @classdesc Represents a Success.
                 * @implements ISuccess
                 * @constructor
                 * @param {ubii.service.reply.ISuccess=} [properties] Properties to set
                 */
                function Success(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Success title.
                 * @member {string} title
                 * @memberof ubii.service.reply.Success
                 * @instance
                 */
                Success.prototype.title = "";

                /**
                 * Success message.
                 * @member {string} message
                 * @memberof ubii.service.reply.Success
                 * @instance
                 */
                Success.prototype.message = "";

                /**
                 * Creates a new Success instance using the specified properties.
                 * @function create
                 * @memberof ubii.service.reply.Success
                 * @static
                 * @param {ubii.service.reply.ISuccess=} [properties] Properties to set
                 * @returns {ubii.service.reply.Success} Success instance
                 */
                Success.create = function create(properties) {
                    return new Success(properties);
                };

                /**
                 * Encodes the specified Success message. Does not implicitly {@link ubii.service.reply.Success.verify|verify} messages.
                 * @function encode
                 * @memberof ubii.service.reply.Success
                 * @static
                 * @param {ubii.service.reply.ISuccess} message Success message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Success.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.title != null && message.hasOwnProperty("title"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
                    if (message.message != null && message.hasOwnProperty("message"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                    return writer;
                };

                /**
                 * Encodes the specified Success message, length delimited. Does not implicitly {@link ubii.service.reply.Success.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ubii.service.reply.Success
                 * @static
                 * @param {ubii.service.reply.ISuccess} message Success message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Success.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Success message from the specified reader or buffer.
                 * @function decode
                 * @memberof ubii.service.reply.Success
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ubii.service.reply.Success} Success
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Success.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.service.reply.Success();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.title = reader.string();
                            break;
                        case 2:
                            message.message = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Success message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ubii.service.reply.Success
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ubii.service.reply.Success} Success
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Success.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Success message.
                 * @function verify
                 * @memberof ubii.service.reply.Success
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Success.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.title != null && message.hasOwnProperty("title"))
                        if (!$util.isString(message.title))
                            return "title: string expected";
                    if (message.message != null && message.hasOwnProperty("message"))
                        if (!$util.isString(message.message))
                            return "message: string expected";
                    return null;
                };

                /**
                 * Creates a Success message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ubii.service.reply.Success
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ubii.service.reply.Success} Success
                 */
                Success.fromObject = function fromObject(object) {
                    if (object instanceof $root.ubii.service.reply.Success)
                        return object;
                    var message = new $root.ubii.service.reply.Success();
                    if (object.title != null)
                        message.title = String(object.title);
                    if (object.message != null)
                        message.message = String(object.message);
                    return message;
                };

                /**
                 * Creates a plain object from a Success message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ubii.service.reply.Success
                 * @static
                 * @param {ubii.service.reply.Success} message Success
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Success.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.title = "";
                        object.message = "";
                    }
                    if (message.title != null && message.hasOwnProperty("title"))
                        object.title = message.title;
                    if (message.message != null && message.hasOwnProperty("message"))
                        object.message = message.message;
                    return object;
                };

                /**
                 * Converts this Success to JSON.
                 * @function toJSON
                 * @memberof ubii.service.reply.Success
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Success.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Success;
            })();

            return reply;
        })();

        service.ServiceReply = (function() {

            /**
             * Properties of a ServiceReply.
             * @memberof ubii.service
             * @interface IServiceReply
             * @property {ubii.service.reply.ISuccess|null} [success] ServiceReply success
             * @property {ubii.service.reply.IError|null} [error] ServiceReply error
             * @property {ubii.service.reply.IClientSpecification|null} [clientSpecification] ServiceReply clientSpecification
             * @property {ubii.service.reply.IDeviceSpecification|null} [deviceSpecification] ServiceReply deviceSpecification
             */

            /**
             * Constructs a new ServiceReply.
             * @memberof ubii.service
             * @classdesc Represents a ServiceReply.
             * @implements IServiceReply
             * @constructor
             * @param {ubii.service.IServiceReply=} [properties] Properties to set
             */
            function ServiceReply(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceReply success.
             * @member {ubii.service.reply.ISuccess|null|undefined} success
             * @memberof ubii.service.ServiceReply
             * @instance
             */
            ServiceReply.prototype.success = null;

            /**
             * ServiceReply error.
             * @member {ubii.service.reply.IError|null|undefined} error
             * @memberof ubii.service.ServiceReply
             * @instance
             */
            ServiceReply.prototype.error = null;

            /**
             * ServiceReply clientSpecification.
             * @member {ubii.service.reply.IClientSpecification|null|undefined} clientSpecification
             * @memberof ubii.service.ServiceReply
             * @instance
             */
            ServiceReply.prototype.clientSpecification = null;

            /**
             * ServiceReply deviceSpecification.
             * @member {ubii.service.reply.IDeviceSpecification|null|undefined} deviceSpecification
             * @memberof ubii.service.ServiceReply
             * @instance
             */
            ServiceReply.prototype.deviceSpecification = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * ServiceReply type.
             * @member {"success"|"error"|"clientSpecification"|"deviceSpecification"|undefined} type
             * @memberof ubii.service.ServiceReply
             * @instance
             */
            Object.defineProperty(ServiceReply.prototype, "type", {
                get: $util.oneOfGetter($oneOfFields = ["success", "error", "clientSpecification", "deviceSpecification"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ServiceReply instance using the specified properties.
             * @function create
             * @memberof ubii.service.ServiceReply
             * @static
             * @param {ubii.service.IServiceReply=} [properties] Properties to set
             * @returns {ubii.service.ServiceReply} ServiceReply instance
             */
            ServiceReply.create = function create(properties) {
                return new ServiceReply(properties);
            };

            /**
             * Encodes the specified ServiceReply message. Does not implicitly {@link ubii.service.ServiceReply.verify|verify} messages.
             * @function encode
             * @memberof ubii.service.ServiceReply
             * @static
             * @param {ubii.service.IServiceReply} message ServiceReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceReply.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.success != null && message.hasOwnProperty("success"))
                    $root.ubii.service.reply.Success.encode(message.success, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.ubii.service.reply.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.clientSpecification != null && message.hasOwnProperty("clientSpecification"))
                    $root.ubii.service.reply.ClientSpecification.encode(message.clientSpecification, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.deviceSpecification != null && message.hasOwnProperty("deviceSpecification"))
                    $root.ubii.service.reply.DeviceSpecification.encode(message.deviceSpecification, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceReply message, length delimited. Does not implicitly {@link ubii.service.ServiceReply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.service.ServiceReply
             * @static
             * @param {ubii.service.IServiceReply} message ServiceReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceReply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceReply message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.service.ServiceReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.service.ServiceReply} ServiceReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceReply.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.service.ServiceReply();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.success = $root.ubii.service.reply.Success.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.error = $root.ubii.service.reply.Error.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.clientSpecification = $root.ubii.service.reply.ClientSpecification.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.deviceSpecification = $root.ubii.service.reply.DeviceSpecification.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceReply message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.service.ServiceReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.service.ServiceReply} ServiceReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceReply.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceReply message.
             * @function verify
             * @memberof ubii.service.ServiceReply
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceReply.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.success != null && message.hasOwnProperty("success")) {
                    properties.type = 1;
                    {
                        var error = $root.ubii.service.reply.Success.verify(message.success);
                        if (error)
                            return "success." + error;
                    }
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.service.reply.Error.verify(message.error);
                        if (error)
                            return "error." + error;
                    }
                }
                if (message.clientSpecification != null && message.hasOwnProperty("clientSpecification")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.service.reply.ClientSpecification.verify(message.clientSpecification);
                        if (error)
                            return "clientSpecification." + error;
                    }
                }
                if (message.deviceSpecification != null && message.hasOwnProperty("deviceSpecification")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.service.reply.DeviceSpecification.verify(message.deviceSpecification);
                        if (error)
                            return "deviceSpecification." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ServiceReply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.service.ServiceReply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.service.ServiceReply} ServiceReply
             */
            ServiceReply.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.service.ServiceReply)
                    return object;
                var message = new $root.ubii.service.ServiceReply();
                if (object.success != null) {
                    if (typeof object.success !== "object")
                        throw TypeError(".ubii.service.ServiceReply.success: object expected");
                    message.success = $root.ubii.service.reply.Success.fromObject(object.success);
                }
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".ubii.service.ServiceReply.error: object expected");
                    message.error = $root.ubii.service.reply.Error.fromObject(object.error);
                }
                if (object.clientSpecification != null) {
                    if (typeof object.clientSpecification !== "object")
                        throw TypeError(".ubii.service.ServiceReply.clientSpecification: object expected");
                    message.clientSpecification = $root.ubii.service.reply.ClientSpecification.fromObject(object.clientSpecification);
                }
                if (object.deviceSpecification != null) {
                    if (typeof object.deviceSpecification !== "object")
                        throw TypeError(".ubii.service.ServiceReply.deviceSpecification: object expected");
                    message.deviceSpecification = $root.ubii.service.reply.DeviceSpecification.fromObject(object.deviceSpecification);
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceReply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.service.ServiceReply
             * @static
             * @param {ubii.service.ServiceReply} message ServiceReply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceReply.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.success != null && message.hasOwnProperty("success")) {
                    object.success = $root.ubii.service.reply.Success.toObject(message.success, options);
                    if (options.oneofs)
                        object.type = "success";
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    object.error = $root.ubii.service.reply.Error.toObject(message.error, options);
                    if (options.oneofs)
                        object.type = "error";
                }
                if (message.clientSpecification != null && message.hasOwnProperty("clientSpecification")) {
                    object.clientSpecification = $root.ubii.service.reply.ClientSpecification.toObject(message.clientSpecification, options);
                    if (options.oneofs)
                        object.type = "clientSpecification";
                }
                if (message.deviceSpecification != null && message.hasOwnProperty("deviceSpecification")) {
                    object.deviceSpecification = $root.ubii.service.reply.DeviceSpecification.toObject(message.deviceSpecification, options);
                    if (options.oneofs)
                        object.type = "deviceSpecification";
                }
                return object;
            };

            /**
             * Converts this ServiceReply to JSON.
             * @function toJSON
             * @memberof ubii.service.ServiceReply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceReply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceReply;
        })();

        service.request = (function() {

            /**
             * Namespace request.
             * @memberof ubii.service
             * @namespace
             */
            var request = {};

            request.ClientRegistration = (function() {

                /**
                 * Properties of a ClientRegistration.
                 * @memberof ubii.service.request
                 * @interface IClientRegistration
                 * @property {string|null} [name] ClientRegistration name
                 * @property {string|null} [namespace] ClientRegistration namespace
                 */

                /**
                 * Constructs a new ClientRegistration.
                 * @memberof ubii.service.request
                 * @classdesc Represents a ClientRegistration.
                 * @implements IClientRegistration
                 * @constructor
                 * @param {ubii.service.request.IClientRegistration=} [properties] Properties to set
                 */
                function ClientRegistration(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ClientRegistration name.
                 * @member {string} name
                 * @memberof ubii.service.request.ClientRegistration
                 * @instance
                 */
                ClientRegistration.prototype.name = "";

                /**
                 * ClientRegistration namespace.
                 * @member {string} namespace
                 * @memberof ubii.service.request.ClientRegistration
                 * @instance
                 */
                ClientRegistration.prototype.namespace = "";

                /**
                 * Creates a new ClientRegistration instance using the specified properties.
                 * @function create
                 * @memberof ubii.service.request.ClientRegistration
                 * @static
                 * @param {ubii.service.request.IClientRegistration=} [properties] Properties to set
                 * @returns {ubii.service.request.ClientRegistration} ClientRegistration instance
                 */
                ClientRegistration.create = function create(properties) {
                    return new ClientRegistration(properties);
                };

                /**
                 * Encodes the specified ClientRegistration message. Does not implicitly {@link ubii.service.request.ClientRegistration.verify|verify} messages.
                 * @function encode
                 * @memberof ubii.service.request.ClientRegistration
                 * @static
                 * @param {ubii.service.request.IClientRegistration} message ClientRegistration message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClientRegistration.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.namespace != null && message.hasOwnProperty("namespace"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.namespace);
                    return writer;
                };

                /**
                 * Encodes the specified ClientRegistration message, length delimited. Does not implicitly {@link ubii.service.request.ClientRegistration.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ubii.service.request.ClientRegistration
                 * @static
                 * @param {ubii.service.request.IClientRegistration} message ClientRegistration message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ClientRegistration.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ClientRegistration message from the specified reader or buffer.
                 * @function decode
                 * @memberof ubii.service.request.ClientRegistration
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ubii.service.request.ClientRegistration} ClientRegistration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClientRegistration.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.service.request.ClientRegistration();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.namespace = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ClientRegistration message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ubii.service.request.ClientRegistration
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ubii.service.request.ClientRegistration} ClientRegistration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ClientRegistration.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ClientRegistration message.
                 * @function verify
                 * @memberof ubii.service.request.ClientRegistration
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ClientRegistration.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.namespace != null && message.hasOwnProperty("namespace"))
                        if (!$util.isString(message.namespace))
                            return "namespace: string expected";
                    return null;
                };

                /**
                 * Creates a ClientRegistration message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ubii.service.request.ClientRegistration
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ubii.service.request.ClientRegistration} ClientRegistration
                 */
                ClientRegistration.fromObject = function fromObject(object) {
                    if (object instanceof $root.ubii.service.request.ClientRegistration)
                        return object;
                    var message = new $root.ubii.service.request.ClientRegistration();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.namespace != null)
                        message.namespace = String(object.namespace);
                    return message;
                };

                /**
                 * Creates a plain object from a ClientRegistration message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ubii.service.request.ClientRegistration
                 * @static
                 * @param {ubii.service.request.ClientRegistration} message ClientRegistration
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ClientRegistration.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.namespace = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.namespace != null && message.hasOwnProperty("namespace"))
                        object.namespace = message.namespace;
                    return object;
                };

                /**
                 * Converts this ClientRegistration to JSON.
                 * @function toJSON
                 * @memberof ubii.service.request.ClientRegistration
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ClientRegistration.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ClientRegistration;
            })();

            request.DeviceRegistration = (function() {

                /**
                 * Properties of a DeviceRegistration.
                 * @memberof ubii.service.request
                 * @interface IDeviceRegistration
                 * @property {string|null} [name] DeviceRegistration name
                 * @property {ubii.service.request.DeviceRegistration.DeviceType|null} [deviceType] DeviceRegistration deviceType
                 * @property {string|null} [correspondingClientIdentifier] DeviceRegistration correspondingClientIdentifier
                 */

                /**
                 * Constructs a new DeviceRegistration.
                 * @memberof ubii.service.request
                 * @classdesc Represents a DeviceRegistration.
                 * @implements IDeviceRegistration
                 * @constructor
                 * @param {ubii.service.request.IDeviceRegistration=} [properties] Properties to set
                 */
                function DeviceRegistration(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DeviceRegistration name.
                 * @member {string} name
                 * @memberof ubii.service.request.DeviceRegistration
                 * @instance
                 */
                DeviceRegistration.prototype.name = "";

                /**
                 * DeviceRegistration deviceType.
                 * @member {ubii.service.request.DeviceRegistration.DeviceType} deviceType
                 * @memberof ubii.service.request.DeviceRegistration
                 * @instance
                 */
                DeviceRegistration.prototype.deviceType = 0;

                /**
                 * DeviceRegistration correspondingClientIdentifier.
                 * @member {string} correspondingClientIdentifier
                 * @memberof ubii.service.request.DeviceRegistration
                 * @instance
                 */
                DeviceRegistration.prototype.correspondingClientIdentifier = "";

                /**
                 * Creates a new DeviceRegistration instance using the specified properties.
                 * @function create
                 * @memberof ubii.service.request.DeviceRegistration
                 * @static
                 * @param {ubii.service.request.IDeviceRegistration=} [properties] Properties to set
                 * @returns {ubii.service.request.DeviceRegistration} DeviceRegistration instance
                 */
                DeviceRegistration.create = function create(properties) {
                    return new DeviceRegistration(properties);
                };

                /**
                 * Encodes the specified DeviceRegistration message. Does not implicitly {@link ubii.service.request.DeviceRegistration.verify|verify} messages.
                 * @function encode
                 * @memberof ubii.service.request.DeviceRegistration
                 * @static
                 * @param {ubii.service.request.IDeviceRegistration} message DeviceRegistration message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeviceRegistration.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.deviceType);
                    if (message.correspondingClientIdentifier != null && message.hasOwnProperty("correspondingClientIdentifier"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.correspondingClientIdentifier);
                    return writer;
                };

                /**
                 * Encodes the specified DeviceRegistration message, length delimited. Does not implicitly {@link ubii.service.request.DeviceRegistration.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ubii.service.request.DeviceRegistration
                 * @static
                 * @param {ubii.service.request.IDeviceRegistration} message DeviceRegistration message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DeviceRegistration.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DeviceRegistration message from the specified reader or buffer.
                 * @function decode
                 * @memberof ubii.service.request.DeviceRegistration
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ubii.service.request.DeviceRegistration} DeviceRegistration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeviceRegistration.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.service.request.DeviceRegistration();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.deviceType = reader.int32();
                            break;
                        case 3:
                            message.correspondingClientIdentifier = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DeviceRegistration message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ubii.service.request.DeviceRegistration
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ubii.service.request.DeviceRegistration} DeviceRegistration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DeviceRegistration.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DeviceRegistration message.
                 * @function verify
                 * @memberof ubii.service.request.DeviceRegistration
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DeviceRegistration.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                        switch (message.deviceType) {
                        default:
                            return "deviceType: enum value expected";
                        case 0:
                        case 1:
                            break;
                        }
                    if (message.correspondingClientIdentifier != null && message.hasOwnProperty("correspondingClientIdentifier"))
                        if (!$util.isString(message.correspondingClientIdentifier))
                            return "correspondingClientIdentifier: string expected";
                    return null;
                };

                /**
                 * Creates a DeviceRegistration message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ubii.service.request.DeviceRegistration
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ubii.service.request.DeviceRegistration} DeviceRegistration
                 */
                DeviceRegistration.fromObject = function fromObject(object) {
                    if (object instanceof $root.ubii.service.request.DeviceRegistration)
                        return object;
                    var message = new $root.ubii.service.request.DeviceRegistration();
                    if (object.name != null)
                        message.name = String(object.name);
                    switch (object.deviceType) {
                    case "PARTICIPANT":
                    case 0:
                        message.deviceType = 0;
                        break;
                    case "WATCHER":
                    case 1:
                        message.deviceType = 1;
                        break;
                    }
                    if (object.correspondingClientIdentifier != null)
                        message.correspondingClientIdentifier = String(object.correspondingClientIdentifier);
                    return message;
                };

                /**
                 * Creates a plain object from a DeviceRegistration message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ubii.service.request.DeviceRegistration
                 * @static
                 * @param {ubii.service.request.DeviceRegistration} message DeviceRegistration
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DeviceRegistration.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.deviceType = options.enums === String ? "PARTICIPANT" : 0;
                        object.correspondingClientIdentifier = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                        object.deviceType = options.enums === String ? $root.ubii.service.request.DeviceRegistration.DeviceType[message.deviceType] : message.deviceType;
                    if (message.correspondingClientIdentifier != null && message.hasOwnProperty("correspondingClientIdentifier"))
                        object.correspondingClientIdentifier = message.correspondingClientIdentifier;
                    return object;
                };

                /**
                 * Converts this DeviceRegistration to JSON.
                 * @function toJSON
                 * @memberof ubii.service.request.DeviceRegistration
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DeviceRegistration.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * DeviceType enum.
                 * @name ubii.service.request.DeviceRegistration.DeviceType
                 * @enum {string}
                 * @property {number} PARTICIPANT=0 PARTICIPANT value
                 * @property {number} WATCHER=1 WATCHER value
                 */
                DeviceRegistration.DeviceType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "PARTICIPANT"] = 0;
                    values[valuesById[1] = "WATCHER"] = 1;
                    return values;
                })();

                return DeviceRegistration;
            })();

            request.Subscription = (function() {

                /**
                 * Properties of a Subscription.
                 * @memberof ubii.service.request
                 * @interface ISubscription
                 * @property {string|null} [deviceIdentifier] Subscription deviceIdentifier
                 * @property {Array.<string>|null} [subscribeTopics] Subscription subscribeTopics
                 * @property {Array.<string>|null} [unsubscribeTopics] Subscription unsubscribeTopics
                 */

                /**
                 * Constructs a new Subscription.
                 * @memberof ubii.service.request
                 * @classdesc Represents a Subscription.
                 * @implements ISubscription
                 * @constructor
                 * @param {ubii.service.request.ISubscription=} [properties] Properties to set
                 */
                function Subscription(properties) {
                    this.subscribeTopics = [];
                    this.unsubscribeTopics = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Subscription deviceIdentifier.
                 * @member {string} deviceIdentifier
                 * @memberof ubii.service.request.Subscription
                 * @instance
                 */
                Subscription.prototype.deviceIdentifier = "";

                /**
                 * Subscription subscribeTopics.
                 * @member {Array.<string>} subscribeTopics
                 * @memberof ubii.service.request.Subscription
                 * @instance
                 */
                Subscription.prototype.subscribeTopics = $util.emptyArray;

                /**
                 * Subscription unsubscribeTopics.
                 * @member {Array.<string>} unsubscribeTopics
                 * @memberof ubii.service.request.Subscription
                 * @instance
                 */
                Subscription.prototype.unsubscribeTopics = $util.emptyArray;

                /**
                 * Creates a new Subscription instance using the specified properties.
                 * @function create
                 * @memberof ubii.service.request.Subscription
                 * @static
                 * @param {ubii.service.request.ISubscription=} [properties] Properties to set
                 * @returns {ubii.service.request.Subscription} Subscription instance
                 */
                Subscription.create = function create(properties) {
                    return new Subscription(properties);
                };

                /**
                 * Encodes the specified Subscription message. Does not implicitly {@link ubii.service.request.Subscription.verify|verify} messages.
                 * @function encode
                 * @memberof ubii.service.request.Subscription
                 * @static
                 * @param {ubii.service.request.ISubscription} message Subscription message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Subscription.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deviceIdentifier != null && message.hasOwnProperty("deviceIdentifier"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceIdentifier);
                    if (message.subscribeTopics != null && message.subscribeTopics.length)
                        for (var i = 0; i < message.subscribeTopics.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.subscribeTopics[i]);
                    if (message.unsubscribeTopics != null && message.unsubscribeTopics.length)
                        for (var i = 0; i < message.unsubscribeTopics.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.unsubscribeTopics[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Subscription message, length delimited. Does not implicitly {@link ubii.service.request.Subscription.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ubii.service.request.Subscription
                 * @static
                 * @param {ubii.service.request.ISubscription} message Subscription message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Subscription.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Subscription message from the specified reader or buffer.
                 * @function decode
                 * @memberof ubii.service.request.Subscription
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ubii.service.request.Subscription} Subscription
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Subscription.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.service.request.Subscription();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.deviceIdentifier = reader.string();
                            break;
                        case 2:
                            if (!(message.subscribeTopics && message.subscribeTopics.length))
                                message.subscribeTopics = [];
                            message.subscribeTopics.push(reader.string());
                            break;
                        case 3:
                            if (!(message.unsubscribeTopics && message.unsubscribeTopics.length))
                                message.unsubscribeTopics = [];
                            message.unsubscribeTopics.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Subscription message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ubii.service.request.Subscription
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ubii.service.request.Subscription} Subscription
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Subscription.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Subscription message.
                 * @function verify
                 * @memberof ubii.service.request.Subscription
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Subscription.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deviceIdentifier != null && message.hasOwnProperty("deviceIdentifier"))
                        if (!$util.isString(message.deviceIdentifier))
                            return "deviceIdentifier: string expected";
                    if (message.subscribeTopics != null && message.hasOwnProperty("subscribeTopics")) {
                        if (!Array.isArray(message.subscribeTopics))
                            return "subscribeTopics: array expected";
                        for (var i = 0; i < message.subscribeTopics.length; ++i)
                            if (!$util.isString(message.subscribeTopics[i]))
                                return "subscribeTopics: string[] expected";
                    }
                    if (message.unsubscribeTopics != null && message.hasOwnProperty("unsubscribeTopics")) {
                        if (!Array.isArray(message.unsubscribeTopics))
                            return "unsubscribeTopics: array expected";
                        for (var i = 0; i < message.unsubscribeTopics.length; ++i)
                            if (!$util.isString(message.unsubscribeTopics[i]))
                                return "unsubscribeTopics: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a Subscription message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ubii.service.request.Subscription
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ubii.service.request.Subscription} Subscription
                 */
                Subscription.fromObject = function fromObject(object) {
                    if (object instanceof $root.ubii.service.request.Subscription)
                        return object;
                    var message = new $root.ubii.service.request.Subscription();
                    if (object.deviceIdentifier != null)
                        message.deviceIdentifier = String(object.deviceIdentifier);
                    if (object.subscribeTopics) {
                        if (!Array.isArray(object.subscribeTopics))
                            throw TypeError(".ubii.service.request.Subscription.subscribeTopics: array expected");
                        message.subscribeTopics = [];
                        for (var i = 0; i < object.subscribeTopics.length; ++i)
                            message.subscribeTopics[i] = String(object.subscribeTopics[i]);
                    }
                    if (object.unsubscribeTopics) {
                        if (!Array.isArray(object.unsubscribeTopics))
                            throw TypeError(".ubii.service.request.Subscription.unsubscribeTopics: array expected");
                        message.unsubscribeTopics = [];
                        for (var i = 0; i < object.unsubscribeTopics.length; ++i)
                            message.unsubscribeTopics[i] = String(object.unsubscribeTopics[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Subscription message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ubii.service.request.Subscription
                 * @static
                 * @param {ubii.service.request.Subscription} message Subscription
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Subscription.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.subscribeTopics = [];
                        object.unsubscribeTopics = [];
                    }
                    if (options.defaults)
                        object.deviceIdentifier = "";
                    if (message.deviceIdentifier != null && message.hasOwnProperty("deviceIdentifier"))
                        object.deviceIdentifier = message.deviceIdentifier;
                    if (message.subscribeTopics && message.subscribeTopics.length) {
                        object.subscribeTopics = [];
                        for (var j = 0; j < message.subscribeTopics.length; ++j)
                            object.subscribeTopics[j] = message.subscribeTopics[j];
                    }
                    if (message.unsubscribeTopics && message.unsubscribeTopics.length) {
                        object.unsubscribeTopics = [];
                        for (var j = 0; j < message.unsubscribeTopics.length; ++j)
                            object.unsubscribeTopics[j] = message.unsubscribeTopics[j];
                    }
                    return object;
                };

                /**
                 * Converts this Subscription to JSON.
                 * @function toJSON
                 * @memberof ubii.service.request.Subscription
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Subscription.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Subscription;
            })();

            return request;
        })();

        service.ServiceRequest = (function() {

            /**
             * Properties of a ServiceRequest.
             * @memberof ubii.service
             * @interface IServiceRequest
             * @property {string|null} [topic] ServiceRequest topic
             * @property {ubii.service.request.IClientRegistration|null} [clientRegistration] ServiceRequest clientRegistration
             * @property {ubii.service.request.IDeviceRegistration|null} [deviceRegistration] ServiceRequest deviceRegistration
             * @property {ubii.service.request.ISubscription|null} [subscription] ServiceRequest subscription
             */

            /**
             * Constructs a new ServiceRequest.
             * @memberof ubii.service
             * @classdesc Represents a ServiceRequest.
             * @implements IServiceRequest
             * @constructor
             * @param {ubii.service.IServiceRequest=} [properties] Properties to set
             */
            function ServiceRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceRequest topic.
             * @member {string} topic
             * @memberof ubii.service.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.topic = "";

            /**
             * ServiceRequest clientRegistration.
             * @member {ubii.service.request.IClientRegistration|null|undefined} clientRegistration
             * @memberof ubii.service.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.clientRegistration = null;

            /**
             * ServiceRequest deviceRegistration.
             * @member {ubii.service.request.IDeviceRegistration|null|undefined} deviceRegistration
             * @memberof ubii.service.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.deviceRegistration = null;

            /**
             * ServiceRequest subscription.
             * @member {ubii.service.request.ISubscription|null|undefined} subscription
             * @memberof ubii.service.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.subscription = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * ServiceRequest type.
             * @member {"clientRegistration"|"deviceRegistration"|"subscription"|undefined} type
             * @memberof ubii.service.ServiceRequest
             * @instance
             */
            Object.defineProperty(ServiceRequest.prototype, "type", {
                get: $util.oneOfGetter($oneOfFields = ["clientRegistration", "deviceRegistration", "subscription"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ServiceRequest instance using the specified properties.
             * @function create
             * @memberof ubii.service.ServiceRequest
             * @static
             * @param {ubii.service.IServiceRequest=} [properties] Properties to set
             * @returns {ubii.service.ServiceRequest} ServiceRequest instance
             */
            ServiceRequest.create = function create(properties) {
                return new ServiceRequest(properties);
            };

            /**
             * Encodes the specified ServiceRequest message. Does not implicitly {@link ubii.service.ServiceRequest.verify|verify} messages.
             * @function encode
             * @memberof ubii.service.ServiceRequest
             * @static
             * @param {ubii.service.IServiceRequest} message ServiceRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.topic != null && message.hasOwnProperty("topic"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.topic);
                if (message.clientRegistration != null && message.hasOwnProperty("clientRegistration"))
                    $root.ubii.service.request.ClientRegistration.encode(message.clientRegistration, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.deviceRegistration != null && message.hasOwnProperty("deviceRegistration"))
                    $root.ubii.service.request.DeviceRegistration.encode(message.deviceRegistration, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.subscription != null && message.hasOwnProperty("subscription"))
                    $root.ubii.service.request.Subscription.encode(message.subscription, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceRequest message, length delimited. Does not implicitly {@link ubii.service.ServiceRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.service.ServiceRequest
             * @static
             * @param {ubii.service.IServiceRequest} message ServiceRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceRequest message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.service.ServiceRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.service.ServiceRequest} ServiceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.service.ServiceRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.topic = reader.string();
                        break;
                    case 2:
                        message.clientRegistration = $root.ubii.service.request.ClientRegistration.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.deviceRegistration = $root.ubii.service.request.DeviceRegistration.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.subscription = $root.ubii.service.request.Subscription.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.service.ServiceRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.service.ServiceRequest} ServiceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceRequest message.
             * @function verify
             * @memberof ubii.service.ServiceRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.topic != null && message.hasOwnProperty("topic"))
                    if (!$util.isString(message.topic))
                        return "topic: string expected";
                if (message.clientRegistration != null && message.hasOwnProperty("clientRegistration")) {
                    properties.type = 1;
                    {
                        var error = $root.ubii.service.request.ClientRegistration.verify(message.clientRegistration);
                        if (error)
                            return "clientRegistration." + error;
                    }
                }
                if (message.deviceRegistration != null && message.hasOwnProperty("deviceRegistration")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.service.request.DeviceRegistration.verify(message.deviceRegistration);
                        if (error)
                            return "deviceRegistration." + error;
                    }
                }
                if (message.subscription != null && message.hasOwnProperty("subscription")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.service.request.Subscription.verify(message.subscription);
                        if (error)
                            return "subscription." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ServiceRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.service.ServiceRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.service.ServiceRequest} ServiceRequest
             */
            ServiceRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.service.ServiceRequest)
                    return object;
                var message = new $root.ubii.service.ServiceRequest();
                if (object.topic != null)
                    message.topic = String(object.topic);
                if (object.clientRegistration != null) {
                    if (typeof object.clientRegistration !== "object")
                        throw TypeError(".ubii.service.ServiceRequest.clientRegistration: object expected");
                    message.clientRegistration = $root.ubii.service.request.ClientRegistration.fromObject(object.clientRegistration);
                }
                if (object.deviceRegistration != null) {
                    if (typeof object.deviceRegistration !== "object")
                        throw TypeError(".ubii.service.ServiceRequest.deviceRegistration: object expected");
                    message.deviceRegistration = $root.ubii.service.request.DeviceRegistration.fromObject(object.deviceRegistration);
                }
                if (object.subscription != null) {
                    if (typeof object.subscription !== "object")
                        throw TypeError(".ubii.service.ServiceRequest.subscription: object expected");
                    message.subscription = $root.ubii.service.request.Subscription.fromObject(object.subscription);
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.service.ServiceRequest
             * @static
             * @param {ubii.service.ServiceRequest} message ServiceRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.topic = "";
                if (message.topic != null && message.hasOwnProperty("topic"))
                    object.topic = message.topic;
                if (message.clientRegistration != null && message.hasOwnProperty("clientRegistration")) {
                    object.clientRegistration = $root.ubii.service.request.ClientRegistration.toObject(message.clientRegistration, options);
                    if (options.oneofs)
                        object.type = "clientRegistration";
                }
                if (message.deviceRegistration != null && message.hasOwnProperty("deviceRegistration")) {
                    object.deviceRegistration = $root.ubii.service.request.DeviceRegistration.toObject(message.deviceRegistration, options);
                    if (options.oneofs)
                        object.type = "deviceRegistration";
                }
                if (message.subscription != null && message.hasOwnProperty("subscription")) {
                    object.subscription = $root.ubii.service.request.Subscription.toObject(message.subscription, options);
                    if (options.oneofs)
                        object.type = "subscription";
                }
                return object;
            };

            /**
             * Converts this ServiceRequest to JSON.
             * @function toJSON
             * @memberof ubii.service.ServiceRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceRequest;
        })();

        return service;
    })();

    ubii.interaction = (function() {

        /**
         * Namespace interaction.
         * @memberof ubii
         * @namespace
         */
        var interaction = {};

        interaction.Cause = (function() {

            /**
             * Properties of a Cause.
             * @memberof ubii.interaction
             * @interface ICause
             * @property {string|null} [id] Cause id
             * @property {string|null} [name] Cause name
             * @property {string|null} [callback] Cause callback
             * @property {Array.<ubii.interaction.IIOMapping>|null} [inputs] Cause inputs
             */

            /**
             * Constructs a new Cause.
             * @memberof ubii.interaction
             * @classdesc Represents a Cause.
             * @implements ICause
             * @constructor
             * @param {ubii.interaction.ICause=} [properties] Properties to set
             */
            function Cause(properties) {
                this.inputs = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Cause id.
             * @member {string} id
             * @memberof ubii.interaction.Cause
             * @instance
             */
            Cause.prototype.id = "";

            /**
             * Cause name.
             * @member {string} name
             * @memberof ubii.interaction.Cause
             * @instance
             */
            Cause.prototype.name = "";

            /**
             * Cause callback.
             * @member {string} callback
             * @memberof ubii.interaction.Cause
             * @instance
             */
            Cause.prototype.callback = "";

            /**
             * Cause inputs.
             * @member {Array.<ubii.interaction.IIOMapping>} inputs
             * @memberof ubii.interaction.Cause
             * @instance
             */
            Cause.prototype.inputs = $util.emptyArray;

            /**
             * Creates a new Cause instance using the specified properties.
             * @function create
             * @memberof ubii.interaction.Cause
             * @static
             * @param {ubii.interaction.ICause=} [properties] Properties to set
             * @returns {ubii.interaction.Cause} Cause instance
             */
            Cause.create = function create(properties) {
                return new Cause(properties);
            };

            /**
             * Encodes the specified Cause message. Does not implicitly {@link ubii.interaction.Cause.verify|verify} messages.
             * @function encode
             * @memberof ubii.interaction.Cause
             * @static
             * @param {ubii.interaction.ICause} message Cause message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Cause.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.callback != null && message.hasOwnProperty("callback"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.callback);
                if (message.inputs != null && message.inputs.length)
                    for (var i = 0; i < message.inputs.length; ++i)
                        $root.ubii.interaction.IOMapping.encode(message.inputs[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Cause message, length delimited. Does not implicitly {@link ubii.interaction.Cause.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.interaction.Cause
             * @static
             * @param {ubii.interaction.ICause} message Cause message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Cause.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Cause message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.interaction.Cause
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.interaction.Cause} Cause
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Cause.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.interaction.Cause();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.callback = reader.string();
                        break;
                    case 4:
                        if (!(message.inputs && message.inputs.length))
                            message.inputs = [];
                        message.inputs.push($root.ubii.interaction.IOMapping.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Cause message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.interaction.Cause
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.interaction.Cause} Cause
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Cause.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Cause message.
             * @function verify
             * @memberof ubii.interaction.Cause
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Cause.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.callback != null && message.hasOwnProperty("callback"))
                    if (!$util.isString(message.callback))
                        return "callback: string expected";
                if (message.inputs != null && message.hasOwnProperty("inputs")) {
                    if (!Array.isArray(message.inputs))
                        return "inputs: array expected";
                    for (var i = 0; i < message.inputs.length; ++i) {
                        var error = $root.ubii.interaction.IOMapping.verify(message.inputs[i]);
                        if (error)
                            return "inputs." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Cause message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.interaction.Cause
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.interaction.Cause} Cause
             */
            Cause.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.interaction.Cause)
                    return object;
                var message = new $root.ubii.interaction.Cause();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.callback != null)
                    message.callback = String(object.callback);
                if (object.inputs) {
                    if (!Array.isArray(object.inputs))
                        throw TypeError(".ubii.interaction.Cause.inputs: array expected");
                    message.inputs = [];
                    for (var i = 0; i < object.inputs.length; ++i) {
                        if (typeof object.inputs[i] !== "object")
                            throw TypeError(".ubii.interaction.Cause.inputs: object expected");
                        message.inputs[i] = $root.ubii.interaction.IOMapping.fromObject(object.inputs[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Cause message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.interaction.Cause
             * @static
             * @param {ubii.interaction.Cause} message Cause
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Cause.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.inputs = [];
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.callback = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.callback != null && message.hasOwnProperty("callback"))
                    object.callback = message.callback;
                if (message.inputs && message.inputs.length) {
                    object.inputs = [];
                    for (var j = 0; j < message.inputs.length; ++j)
                        object.inputs[j] = $root.ubii.interaction.IOMapping.toObject(message.inputs[j], options);
                }
                return object;
            };

            /**
             * Converts this Cause to JSON.
             * @function toJSON
             * @memberof ubii.interaction.Cause
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Cause.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Cause;
        })();

        interaction.CauseEffectRelation = (function() {

            /**
             * Properties of a CauseEffectRelation.
             * @memberof ubii.interaction
             * @interface ICauseEffectRelation
             * @property {string|null} [id] CauseEffectRelation id
             * @property {string|null} [name] CauseEffectRelation name
             * @property {Array.<ubii.interaction.ICause>|null} [causes] CauseEffectRelation causes
             * @property {Array.<ubii.interaction.IEffect>|null} [effects] CauseEffectRelation effects
             */

            /**
             * Constructs a new CauseEffectRelation.
             * @memberof ubii.interaction
             * @classdesc Represents a CauseEffectRelation.
             * @implements ICauseEffectRelation
             * @constructor
             * @param {ubii.interaction.ICauseEffectRelation=} [properties] Properties to set
             */
            function CauseEffectRelation(properties) {
                this.causes = [];
                this.effects = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CauseEffectRelation id.
             * @member {string} id
             * @memberof ubii.interaction.CauseEffectRelation
             * @instance
             */
            CauseEffectRelation.prototype.id = "";

            /**
             * CauseEffectRelation name.
             * @member {string} name
             * @memberof ubii.interaction.CauseEffectRelation
             * @instance
             */
            CauseEffectRelation.prototype.name = "";

            /**
             * CauseEffectRelation causes.
             * @member {Array.<ubii.interaction.ICause>} causes
             * @memberof ubii.interaction.CauseEffectRelation
             * @instance
             */
            CauseEffectRelation.prototype.causes = $util.emptyArray;

            /**
             * CauseEffectRelation effects.
             * @member {Array.<ubii.interaction.IEffect>} effects
             * @memberof ubii.interaction.CauseEffectRelation
             * @instance
             */
            CauseEffectRelation.prototype.effects = $util.emptyArray;

            /**
             * Creates a new CauseEffectRelation instance using the specified properties.
             * @function create
             * @memberof ubii.interaction.CauseEffectRelation
             * @static
             * @param {ubii.interaction.ICauseEffectRelation=} [properties] Properties to set
             * @returns {ubii.interaction.CauseEffectRelation} CauseEffectRelation instance
             */
            CauseEffectRelation.create = function create(properties) {
                return new CauseEffectRelation(properties);
            };

            /**
             * Encodes the specified CauseEffectRelation message. Does not implicitly {@link ubii.interaction.CauseEffectRelation.verify|verify} messages.
             * @function encode
             * @memberof ubii.interaction.CauseEffectRelation
             * @static
             * @param {ubii.interaction.ICauseEffectRelation} message CauseEffectRelation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CauseEffectRelation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.causes != null && message.causes.length)
                    for (var i = 0; i < message.causes.length; ++i)
                        $root.ubii.interaction.Cause.encode(message.causes[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.effects != null && message.effects.length)
                    for (var i = 0; i < message.effects.length; ++i)
                        $root.ubii.interaction.Effect.encode(message.effects[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified CauseEffectRelation message, length delimited. Does not implicitly {@link ubii.interaction.CauseEffectRelation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.interaction.CauseEffectRelation
             * @static
             * @param {ubii.interaction.ICauseEffectRelation} message CauseEffectRelation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CauseEffectRelation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CauseEffectRelation message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.interaction.CauseEffectRelation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.interaction.CauseEffectRelation} CauseEffectRelation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CauseEffectRelation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.interaction.CauseEffectRelation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        if (!(message.causes && message.causes.length))
                            message.causes = [];
                        message.causes.push($root.ubii.interaction.Cause.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        if (!(message.effects && message.effects.length))
                            message.effects = [];
                        message.effects.push($root.ubii.interaction.Effect.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CauseEffectRelation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.interaction.CauseEffectRelation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.interaction.CauseEffectRelation} CauseEffectRelation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CauseEffectRelation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CauseEffectRelation message.
             * @function verify
             * @memberof ubii.interaction.CauseEffectRelation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CauseEffectRelation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.causes != null && message.hasOwnProperty("causes")) {
                    if (!Array.isArray(message.causes))
                        return "causes: array expected";
                    for (var i = 0; i < message.causes.length; ++i) {
                        var error = $root.ubii.interaction.Cause.verify(message.causes[i]);
                        if (error)
                            return "causes." + error;
                    }
                }
                if (message.effects != null && message.hasOwnProperty("effects")) {
                    if (!Array.isArray(message.effects))
                        return "effects: array expected";
                    for (var i = 0; i < message.effects.length; ++i) {
                        var error = $root.ubii.interaction.Effect.verify(message.effects[i]);
                        if (error)
                            return "effects." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a CauseEffectRelation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.interaction.CauseEffectRelation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.interaction.CauseEffectRelation} CauseEffectRelation
             */
            CauseEffectRelation.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.interaction.CauseEffectRelation)
                    return object;
                var message = new $root.ubii.interaction.CauseEffectRelation();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.causes) {
                    if (!Array.isArray(object.causes))
                        throw TypeError(".ubii.interaction.CauseEffectRelation.causes: array expected");
                    message.causes = [];
                    for (var i = 0; i < object.causes.length; ++i) {
                        if (typeof object.causes[i] !== "object")
                            throw TypeError(".ubii.interaction.CauseEffectRelation.causes: object expected");
                        message.causes[i] = $root.ubii.interaction.Cause.fromObject(object.causes[i]);
                    }
                }
                if (object.effects) {
                    if (!Array.isArray(object.effects))
                        throw TypeError(".ubii.interaction.CauseEffectRelation.effects: array expected");
                    message.effects = [];
                    for (var i = 0; i < object.effects.length; ++i) {
                        if (typeof object.effects[i] !== "object")
                            throw TypeError(".ubii.interaction.CauseEffectRelation.effects: object expected");
                        message.effects[i] = $root.ubii.interaction.Effect.fromObject(object.effects[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a CauseEffectRelation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.interaction.CauseEffectRelation
             * @static
             * @param {ubii.interaction.CauseEffectRelation} message CauseEffectRelation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CauseEffectRelation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.causes = [];
                    object.effects = [];
                }
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.causes && message.causes.length) {
                    object.causes = [];
                    for (var j = 0; j < message.causes.length; ++j)
                        object.causes[j] = $root.ubii.interaction.Cause.toObject(message.causes[j], options);
                }
                if (message.effects && message.effects.length) {
                    object.effects = [];
                    for (var j = 0; j < message.effects.length; ++j)
                        object.effects[j] = $root.ubii.interaction.Effect.toObject(message.effects[j], options);
                }
                return object;
            };

            /**
             * Converts this CauseEffectRelation to JSON.
             * @function toJSON
             * @memberof ubii.interaction.CauseEffectRelation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CauseEffectRelation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return CauseEffectRelation;
        })();

        interaction.Effect = (function() {

            /**
             * Properties of an Effect.
             * @memberof ubii.interaction
             * @interface IEffect
             * @property {string|null} [id] Effect id
             * @property {string|null} [name] Effect name
             * @property {string|null} [callback] Effect callback
             * @property {Array.<ubii.interaction.IIOMapping>|null} [outputs] Effect outputs
             */

            /**
             * Constructs a new Effect.
             * @memberof ubii.interaction
             * @classdesc Represents an Effect.
             * @implements IEffect
             * @constructor
             * @param {ubii.interaction.IEffect=} [properties] Properties to set
             */
            function Effect(properties) {
                this.outputs = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Effect id.
             * @member {string} id
             * @memberof ubii.interaction.Effect
             * @instance
             */
            Effect.prototype.id = "";

            /**
             * Effect name.
             * @member {string} name
             * @memberof ubii.interaction.Effect
             * @instance
             */
            Effect.prototype.name = "";

            /**
             * Effect callback.
             * @member {string} callback
             * @memberof ubii.interaction.Effect
             * @instance
             */
            Effect.prototype.callback = "";

            /**
             * Effect outputs.
             * @member {Array.<ubii.interaction.IIOMapping>} outputs
             * @memberof ubii.interaction.Effect
             * @instance
             */
            Effect.prototype.outputs = $util.emptyArray;

            /**
             * Creates a new Effect instance using the specified properties.
             * @function create
             * @memberof ubii.interaction.Effect
             * @static
             * @param {ubii.interaction.IEffect=} [properties] Properties to set
             * @returns {ubii.interaction.Effect} Effect instance
             */
            Effect.create = function create(properties) {
                return new Effect(properties);
            };

            /**
             * Encodes the specified Effect message. Does not implicitly {@link ubii.interaction.Effect.verify|verify} messages.
             * @function encode
             * @memberof ubii.interaction.Effect
             * @static
             * @param {ubii.interaction.IEffect} message Effect message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Effect.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.callback != null && message.hasOwnProperty("callback"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.callback);
                if (message.outputs != null && message.outputs.length)
                    for (var i = 0; i < message.outputs.length; ++i)
                        $root.ubii.interaction.IOMapping.encode(message.outputs[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Effect message, length delimited. Does not implicitly {@link ubii.interaction.Effect.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.interaction.Effect
             * @static
             * @param {ubii.interaction.IEffect} message Effect message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Effect.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Effect message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.interaction.Effect
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.interaction.Effect} Effect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Effect.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.interaction.Effect();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.callback = reader.string();
                        break;
                    case 4:
                        if (!(message.outputs && message.outputs.length))
                            message.outputs = [];
                        message.outputs.push($root.ubii.interaction.IOMapping.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Effect message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.interaction.Effect
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.interaction.Effect} Effect
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Effect.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Effect message.
             * @function verify
             * @memberof ubii.interaction.Effect
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Effect.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.callback != null && message.hasOwnProperty("callback"))
                    if (!$util.isString(message.callback))
                        return "callback: string expected";
                if (message.outputs != null && message.hasOwnProperty("outputs")) {
                    if (!Array.isArray(message.outputs))
                        return "outputs: array expected";
                    for (var i = 0; i < message.outputs.length; ++i) {
                        var error = $root.ubii.interaction.IOMapping.verify(message.outputs[i]);
                        if (error)
                            return "outputs." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an Effect message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.interaction.Effect
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.interaction.Effect} Effect
             */
            Effect.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.interaction.Effect)
                    return object;
                var message = new $root.ubii.interaction.Effect();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.callback != null)
                    message.callback = String(object.callback);
                if (object.outputs) {
                    if (!Array.isArray(object.outputs))
                        throw TypeError(".ubii.interaction.Effect.outputs: array expected");
                    message.outputs = [];
                    for (var i = 0; i < object.outputs.length; ++i) {
                        if (typeof object.outputs[i] !== "object")
                            throw TypeError(".ubii.interaction.Effect.outputs: object expected");
                        message.outputs[i] = $root.ubii.interaction.IOMapping.fromObject(object.outputs[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an Effect message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.interaction.Effect
             * @static
             * @param {ubii.interaction.Effect} message Effect
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Effect.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.outputs = [];
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.callback = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.callback != null && message.hasOwnProperty("callback"))
                    object.callback = message.callback;
                if (message.outputs && message.outputs.length) {
                    object.outputs = [];
                    for (var j = 0; j < message.outputs.length; ++j)
                        object.outputs[j] = $root.ubii.interaction.IOMapping.toObject(message.outputs[j], options);
                }
                return object;
            };

            /**
             * Converts this Effect to JSON.
             * @function toJSON
             * @memberof ubii.interaction.Effect
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Effect.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Effect;
        })();

        interaction.Interaction = (function() {

            /**
             * Properties of an Interaction.
             * @memberof ubii.interaction
             * @interface IInteraction
             * @property {string|null} [id] Interaction id
             * @property {string|null} [name] Interaction name
             * @property {string|null} [callback] Interaction callback
             * @property {Array.<ubii.interaction.IIOMapping>|null} [inputs] Interaction inputs
             * @property {Array.<ubii.interaction.IIOMapping>|null} [outputs] Interaction outputs
             */

            /**
             * Constructs a new Interaction.
             * @memberof ubii.interaction
             * @classdesc Represents an Interaction.
             * @implements IInteraction
             * @constructor
             * @param {ubii.interaction.IInteraction=} [properties] Properties to set
             */
            function Interaction(properties) {
                this.inputs = [];
                this.outputs = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Interaction id.
             * @member {string} id
             * @memberof ubii.interaction.Interaction
             * @instance
             */
            Interaction.prototype.id = "";

            /**
             * Interaction name.
             * @member {string} name
             * @memberof ubii.interaction.Interaction
             * @instance
             */
            Interaction.prototype.name = "";

            /**
             * Interaction callback.
             * @member {string} callback
             * @memberof ubii.interaction.Interaction
             * @instance
             */
            Interaction.prototype.callback = "";

            /**
             * Interaction inputs.
             * @member {Array.<ubii.interaction.IIOMapping>} inputs
             * @memberof ubii.interaction.Interaction
             * @instance
             */
            Interaction.prototype.inputs = $util.emptyArray;

            /**
             * Interaction outputs.
             * @member {Array.<ubii.interaction.IIOMapping>} outputs
             * @memberof ubii.interaction.Interaction
             * @instance
             */
            Interaction.prototype.outputs = $util.emptyArray;

            /**
             * Creates a new Interaction instance using the specified properties.
             * @function create
             * @memberof ubii.interaction.Interaction
             * @static
             * @param {ubii.interaction.IInteraction=} [properties] Properties to set
             * @returns {ubii.interaction.Interaction} Interaction instance
             */
            Interaction.create = function create(properties) {
                return new Interaction(properties);
            };

            /**
             * Encodes the specified Interaction message. Does not implicitly {@link ubii.interaction.Interaction.verify|verify} messages.
             * @function encode
             * @memberof ubii.interaction.Interaction
             * @static
             * @param {ubii.interaction.IInteraction} message Interaction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Interaction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.callback != null && message.hasOwnProperty("callback"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.callback);
                if (message.inputs != null && message.inputs.length)
                    for (var i = 0; i < message.inputs.length; ++i)
                        $root.ubii.interaction.IOMapping.encode(message.inputs[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.outputs != null && message.outputs.length)
                    for (var i = 0; i < message.outputs.length; ++i)
                        $root.ubii.interaction.IOMapping.encode(message.outputs[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Interaction message, length delimited. Does not implicitly {@link ubii.interaction.Interaction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.interaction.Interaction
             * @static
             * @param {ubii.interaction.IInteraction} message Interaction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Interaction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Interaction message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.interaction.Interaction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.interaction.Interaction} Interaction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Interaction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.interaction.Interaction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.callback = reader.string();
                        break;
                    case 4:
                        if (!(message.inputs && message.inputs.length))
                            message.inputs = [];
                        message.inputs.push($root.ubii.interaction.IOMapping.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.outputs && message.outputs.length))
                            message.outputs = [];
                        message.outputs.push($root.ubii.interaction.IOMapping.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Interaction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.interaction.Interaction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.interaction.Interaction} Interaction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Interaction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Interaction message.
             * @function verify
             * @memberof ubii.interaction.Interaction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Interaction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.callback != null && message.hasOwnProperty("callback"))
                    if (!$util.isString(message.callback))
                        return "callback: string expected";
                if (message.inputs != null && message.hasOwnProperty("inputs")) {
                    if (!Array.isArray(message.inputs))
                        return "inputs: array expected";
                    for (var i = 0; i < message.inputs.length; ++i) {
                        var error = $root.ubii.interaction.IOMapping.verify(message.inputs[i]);
                        if (error)
                            return "inputs." + error;
                    }
                }
                if (message.outputs != null && message.hasOwnProperty("outputs")) {
                    if (!Array.isArray(message.outputs))
                        return "outputs: array expected";
                    for (var i = 0; i < message.outputs.length; ++i) {
                        var error = $root.ubii.interaction.IOMapping.verify(message.outputs[i]);
                        if (error)
                            return "outputs." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an Interaction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.interaction.Interaction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.interaction.Interaction} Interaction
             */
            Interaction.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.interaction.Interaction)
                    return object;
                var message = new $root.ubii.interaction.Interaction();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.callback != null)
                    message.callback = String(object.callback);
                if (object.inputs) {
                    if (!Array.isArray(object.inputs))
                        throw TypeError(".ubii.interaction.Interaction.inputs: array expected");
                    message.inputs = [];
                    for (var i = 0; i < object.inputs.length; ++i) {
                        if (typeof object.inputs[i] !== "object")
                            throw TypeError(".ubii.interaction.Interaction.inputs: object expected");
                        message.inputs[i] = $root.ubii.interaction.IOMapping.fromObject(object.inputs[i]);
                    }
                }
                if (object.outputs) {
                    if (!Array.isArray(object.outputs))
                        throw TypeError(".ubii.interaction.Interaction.outputs: array expected");
                    message.outputs = [];
                    for (var i = 0; i < object.outputs.length; ++i) {
                        if (typeof object.outputs[i] !== "object")
                            throw TypeError(".ubii.interaction.Interaction.outputs: object expected");
                        message.outputs[i] = $root.ubii.interaction.IOMapping.fromObject(object.outputs[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an Interaction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.interaction.Interaction
             * @static
             * @param {ubii.interaction.Interaction} message Interaction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Interaction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.inputs = [];
                    object.outputs = [];
                }
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.callback = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.callback != null && message.hasOwnProperty("callback"))
                    object.callback = message.callback;
                if (message.inputs && message.inputs.length) {
                    object.inputs = [];
                    for (var j = 0; j < message.inputs.length; ++j)
                        object.inputs[j] = $root.ubii.interaction.IOMapping.toObject(message.inputs[j], options);
                }
                if (message.outputs && message.outputs.length) {
                    object.outputs = [];
                    for (var j = 0; j < message.outputs.length; ++j)
                        object.outputs[j] = $root.ubii.interaction.IOMapping.toObject(message.outputs[j], options);
                }
                return object;
            };

            /**
             * Converts this Interaction to JSON.
             * @function toJSON
             * @memberof ubii.interaction.Interaction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Interaction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Interaction;
        })();

        interaction.IOMapping = (function() {

            /**
             * Properties of a IOMapping.
             * @memberof ubii.interaction
             * @interface IIOMapping
             * @property {string|null} [internalName] IOMapping internalName
             * @property {string|null} [topic] IOMapping topic
             * @property {string|null} [protobufType] IOMapping protobufType
             * @property {string|null} [protobufFile] IOMapping protobufFile
             */

            /**
             * Constructs a new IOMapping.
             * @memberof ubii.interaction
             * @classdesc Represents a IOMapping.
             * @implements IIOMapping
             * @constructor
             * @param {ubii.interaction.IIOMapping=} [properties] Properties to set
             */
            function IOMapping(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IOMapping internalName.
             * @member {string} internalName
             * @memberof ubii.interaction.IOMapping
             * @instance
             */
            IOMapping.prototype.internalName = "";

            /**
             * IOMapping topic.
             * @member {string} topic
             * @memberof ubii.interaction.IOMapping
             * @instance
             */
            IOMapping.prototype.topic = "";

            /**
             * IOMapping protobufType.
             * @member {string} protobufType
             * @memberof ubii.interaction.IOMapping
             * @instance
             */
            IOMapping.prototype.protobufType = "";

            /**
             * IOMapping protobufFile.
             * @member {string} protobufFile
             * @memberof ubii.interaction.IOMapping
             * @instance
             */
            IOMapping.prototype.protobufFile = "";

            /**
             * Creates a new IOMapping instance using the specified properties.
             * @function create
             * @memberof ubii.interaction.IOMapping
             * @static
             * @param {ubii.interaction.IIOMapping=} [properties] Properties to set
             * @returns {ubii.interaction.IOMapping} IOMapping instance
             */
            IOMapping.create = function create(properties) {
                return new IOMapping(properties);
            };

            /**
             * Encodes the specified IOMapping message. Does not implicitly {@link ubii.interaction.IOMapping.verify|verify} messages.
             * @function encode
             * @memberof ubii.interaction.IOMapping
             * @static
             * @param {ubii.interaction.IIOMapping} message IOMapping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IOMapping.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.internalName != null && message.hasOwnProperty("internalName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.internalName);
                if (message.topic != null && message.hasOwnProperty("topic"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.topic);
                if (message.protobufType != null && message.hasOwnProperty("protobufType"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.protobufType);
                if (message.protobufFile != null && message.hasOwnProperty("protobufFile"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.protobufFile);
                return writer;
            };

            /**
             * Encodes the specified IOMapping message, length delimited. Does not implicitly {@link ubii.interaction.IOMapping.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.interaction.IOMapping
             * @static
             * @param {ubii.interaction.IIOMapping} message IOMapping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IOMapping.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a IOMapping message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.interaction.IOMapping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.interaction.IOMapping} IOMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IOMapping.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.interaction.IOMapping();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.internalName = reader.string();
                        break;
                    case 2:
                        message.topic = reader.string();
                        break;
                    case 3:
                        message.protobufType = reader.string();
                        break;
                    case 4:
                        message.protobufFile = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a IOMapping message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.interaction.IOMapping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.interaction.IOMapping} IOMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IOMapping.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a IOMapping message.
             * @function verify
             * @memberof ubii.interaction.IOMapping
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IOMapping.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.internalName != null && message.hasOwnProperty("internalName"))
                    if (!$util.isString(message.internalName))
                        return "internalName: string expected";
                if (message.topic != null && message.hasOwnProperty("topic"))
                    if (!$util.isString(message.topic))
                        return "topic: string expected";
                if (message.protobufType != null && message.hasOwnProperty("protobufType"))
                    if (!$util.isString(message.protobufType))
                        return "protobufType: string expected";
                if (message.protobufFile != null && message.hasOwnProperty("protobufFile"))
                    if (!$util.isString(message.protobufFile))
                        return "protobufFile: string expected";
                return null;
            };

            /**
             * Creates a IOMapping message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.interaction.IOMapping
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.interaction.IOMapping} IOMapping
             */
            IOMapping.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.interaction.IOMapping)
                    return object;
                var message = new $root.ubii.interaction.IOMapping();
                if (object.internalName != null)
                    message.internalName = String(object.internalName);
                if (object.topic != null)
                    message.topic = String(object.topic);
                if (object.protobufType != null)
                    message.protobufType = String(object.protobufType);
                if (object.protobufFile != null)
                    message.protobufFile = String(object.protobufFile);
                return message;
            };

            /**
             * Creates a plain object from a IOMapping message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.interaction.IOMapping
             * @static
             * @param {ubii.interaction.IOMapping} message IOMapping
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IOMapping.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.internalName = "";
                    object.topic = "";
                    object.protobufType = "";
                    object.protobufFile = "";
                }
                if (message.internalName != null && message.hasOwnProperty("internalName"))
                    object.internalName = message.internalName;
                if (message.topic != null && message.hasOwnProperty("topic"))
                    object.topic = message.topic;
                if (message.protobufType != null && message.hasOwnProperty("protobufType"))
                    object.protobufType = message.protobufType;
                if (message.protobufFile != null && message.hasOwnProperty("protobufFile"))
                    object.protobufFile = message.protobufFile;
                return object;
            };

            /**
             * Converts this IOMapping to JSON.
             * @function toJSON
             * @memberof ubii.interaction.IOMapping
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            IOMapping.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return IOMapping;
        })();

        return interaction;
    })();

    ubii.session = (function() {

        /**
         * Namespace session.
         * @memberof ubii
         * @namespace
         */
        var session = {};

        session.Session = (function() {

            /**
             * Properties of a Session.
             * @memberof ubii.session
             * @interface ISession
             * @property {string|null} [name] Session name
             * @property {Array.<ubii.interaction.IInteraction>|null} [interactions] Session interactions
             */

            /**
             * Constructs a new Session.
             * @memberof ubii.session
             * @classdesc Represents a Session.
             * @implements ISession
             * @constructor
             * @param {ubii.session.ISession=} [properties] Properties to set
             */
            function Session(properties) {
                this.interactions = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Session name.
             * @member {string} name
             * @memberof ubii.session.Session
             * @instance
             */
            Session.prototype.name = "";

            /**
             * Session interactions.
             * @member {Array.<ubii.interaction.IInteraction>} interactions
             * @memberof ubii.session.Session
             * @instance
             */
            Session.prototype.interactions = $util.emptyArray;

            /**
             * Creates a new Session instance using the specified properties.
             * @function create
             * @memberof ubii.session.Session
             * @static
             * @param {ubii.session.ISession=} [properties] Properties to set
             * @returns {ubii.session.Session} Session instance
             */
            Session.create = function create(properties) {
                return new Session(properties);
            };

            /**
             * Encodes the specified Session message. Does not implicitly {@link ubii.session.Session.verify|verify} messages.
             * @function encode
             * @memberof ubii.session.Session
             * @static
             * @param {ubii.session.ISession} message Session message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Session.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.interactions != null && message.interactions.length)
                    for (var i = 0; i < message.interactions.length; ++i)
                        $root.ubii.interaction.Interaction.encode(message.interactions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Session message, length delimited. Does not implicitly {@link ubii.session.Session.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.session.Session
             * @static
             * @param {ubii.session.ISession} message Session message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Session.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Session message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.session.Session
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.session.Session} Session
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Session.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.session.Session();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        if (!(message.interactions && message.interactions.length))
                            message.interactions = [];
                        message.interactions.push($root.ubii.interaction.Interaction.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Session message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.session.Session
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.session.Session} Session
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Session.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Session message.
             * @function verify
             * @memberof ubii.session.Session
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Session.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.interactions != null && message.hasOwnProperty("interactions")) {
                    if (!Array.isArray(message.interactions))
                        return "interactions: array expected";
                    for (var i = 0; i < message.interactions.length; ++i) {
                        var error = $root.ubii.interaction.Interaction.verify(message.interactions[i]);
                        if (error)
                            return "interactions." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Session message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.session.Session
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.session.Session} Session
             */
            Session.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.session.Session)
                    return object;
                var message = new $root.ubii.session.Session();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.interactions) {
                    if (!Array.isArray(object.interactions))
                        throw TypeError(".ubii.session.Session.interactions: array expected");
                    message.interactions = [];
                    for (var i = 0; i < object.interactions.length; ++i) {
                        if (typeof object.interactions[i] !== "object")
                            throw TypeError(".ubii.session.Session.interactions: object expected");
                        message.interactions[i] = $root.ubii.interaction.Interaction.fromObject(object.interactions[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Session message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.session.Session
             * @static
             * @param {ubii.session.Session} message Session
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Session.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.interactions = [];
                if (options.defaults)
                    object.name = "";
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.interactions && message.interactions.length) {
                    object.interactions = [];
                    for (var j = 0; j < message.interactions.length; ++j)
                        object.interactions[j] = $root.ubii.interaction.Interaction.toObject(message.interactions[j], options);
                }
                return object;
            };

            /**
             * Converts this Session to JSON.
             * @function toJSON
             * @memberof ubii.session.Session
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Session.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Session;
        })();

        return session;
    })();

    ubii.topicData = (function() {

        /**
         * Namespace topicData.
         * @memberof ubii
         * @namespace
         */
        var topicData = {};

        topicData.TopicData = (function() {

            /**
             * Properties of a TopicData.
             * @memberof ubii.topicData
             * @interface ITopicData
             * @property {string|null} [deviceIdentifier] TopicData deviceIdentifier
             * @property {ubii.topicData.ITopicDataRecord|null} [topicDataRecord] TopicData topicDataRecord
             * @property {ubii.service.reply.IError|null} [error] TopicData error
             */

            /**
             * Constructs a new TopicData.
             * @memberof ubii.topicData
             * @classdesc Represents a TopicData.
             * @implements ITopicData
             * @constructor
             * @param {ubii.topicData.ITopicData=} [properties] Properties to set
             */
            function TopicData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TopicData deviceIdentifier.
             * @member {string} deviceIdentifier
             * @memberof ubii.topicData.TopicData
             * @instance
             */
            TopicData.prototype.deviceIdentifier = "";

            /**
             * TopicData topicDataRecord.
             * @member {ubii.topicData.ITopicDataRecord|null|undefined} topicDataRecord
             * @memberof ubii.topicData.TopicData
             * @instance
             */
            TopicData.prototype.topicDataRecord = null;

            /**
             * TopicData error.
             * @member {ubii.service.reply.IError|null|undefined} error
             * @memberof ubii.topicData.TopicData
             * @instance
             */
            TopicData.prototype.error = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * TopicData type.
             * @member {"topicDataRecord"|"error"|undefined} type
             * @memberof ubii.topicData.TopicData
             * @instance
             */
            Object.defineProperty(TopicData.prototype, "type", {
                get: $util.oneOfGetter($oneOfFields = ["topicDataRecord", "error"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new TopicData instance using the specified properties.
             * @function create
             * @memberof ubii.topicData.TopicData
             * @static
             * @param {ubii.topicData.ITopicData=} [properties] Properties to set
             * @returns {ubii.topicData.TopicData} TopicData instance
             */
            TopicData.create = function create(properties) {
                return new TopicData(properties);
            };

            /**
             * Encodes the specified TopicData message. Does not implicitly {@link ubii.topicData.TopicData.verify|verify} messages.
             * @function encode
             * @memberof ubii.topicData.TopicData
             * @static
             * @param {ubii.topicData.ITopicData} message TopicData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deviceIdentifier != null && message.hasOwnProperty("deviceIdentifier"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceIdentifier);
                if (message.topicDataRecord != null && message.hasOwnProperty("topicDataRecord"))
                    $root.ubii.topicData.TopicDataRecord.encode(message.topicDataRecord, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.ubii.service.reply.Error.encode(message.error, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TopicData message, length delimited. Does not implicitly {@link ubii.topicData.TopicData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.topicData.TopicData
             * @static
             * @param {ubii.topicData.ITopicData} message TopicData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TopicData message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.topicData.TopicData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.topicData.TopicData} TopicData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicData.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.topicData.TopicData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.deviceIdentifier = reader.string();
                        break;
                    case 2:
                        message.topicDataRecord = $root.ubii.topicData.TopicDataRecord.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.error = $root.ubii.service.reply.Error.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TopicData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.topicData.TopicData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.topicData.TopicData} TopicData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TopicData message.
             * @function verify
             * @memberof ubii.topicData.TopicData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TopicData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.deviceIdentifier != null && message.hasOwnProperty("deviceIdentifier"))
                    if (!$util.isString(message.deviceIdentifier))
                        return "deviceIdentifier: string expected";
                if (message.topicDataRecord != null && message.hasOwnProperty("topicDataRecord")) {
                    properties.type = 1;
                    {
                        var error = $root.ubii.topicData.TopicDataRecord.verify(message.topicDataRecord);
                        if (error)
                            return "topicDataRecord." + error;
                    }
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.service.reply.Error.verify(message.error);
                        if (error)
                            return "error." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TopicData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.topicData.TopicData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.topicData.TopicData} TopicData
             */
            TopicData.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.topicData.TopicData)
                    return object;
                var message = new $root.ubii.topicData.TopicData();
                if (object.deviceIdentifier != null)
                    message.deviceIdentifier = String(object.deviceIdentifier);
                if (object.topicDataRecord != null) {
                    if (typeof object.topicDataRecord !== "object")
                        throw TypeError(".ubii.topicData.TopicData.topicDataRecord: object expected");
                    message.topicDataRecord = $root.ubii.topicData.TopicDataRecord.fromObject(object.topicDataRecord);
                }
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".ubii.topicData.TopicData.error: object expected");
                    message.error = $root.ubii.service.reply.Error.fromObject(object.error);
                }
                return message;
            };

            /**
             * Creates a plain object from a TopicData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.topicData.TopicData
             * @static
             * @param {ubii.topicData.TopicData} message TopicData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TopicData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.deviceIdentifier = "";
                if (message.deviceIdentifier != null && message.hasOwnProperty("deviceIdentifier"))
                    object.deviceIdentifier = message.deviceIdentifier;
                if (message.topicDataRecord != null && message.hasOwnProperty("topicDataRecord")) {
                    object.topicDataRecord = $root.ubii.topicData.TopicDataRecord.toObject(message.topicDataRecord, options);
                    if (options.oneofs)
                        object.type = "topicDataRecord";
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    object.error = $root.ubii.service.reply.Error.toObject(message.error, options);
                    if (options.oneofs)
                        object.type = "error";
                }
                return object;
            };

            /**
             * Converts this TopicData to JSON.
             * @function toJSON
             * @memberof ubii.topicData.TopicData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TopicData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TopicData;
        })();

        topicData.TopicDataRecord = (function() {

            /**
             * Properties of a TopicDataRecord.
             * @memberof ubii.topicData
             * @interface ITopicDataRecord
             * @property {string|null} [topic] TopicDataRecord topic
             * @property {number|null} [number] TopicDataRecord number
             * @property {boolean|null} [boolean] TopicDataRecord boolean
             * @property {string|null} [string] TopicDataRecord string
             * @property {ubii.dataStructure.IVector2|null} [vector2] TopicDataRecord vector2
             * @property {ubii.dataStructure.IVector3|null} [vector3] TopicDataRecord vector3
             * @property {ubii.dataStructure.IVector4|null} [vector4] TopicDataRecord vector4
             * @property {ubii.dataStructure.IQuaternion|null} [quaternion] TopicDataRecord quaternion
             * @property {ubii.dataStructure.IMatrix3x2|null} [matrix3x2] TopicDataRecord matrix3x2
             * @property {ubii.dataStructure.IMatrix4x4|null} [matrix4x4] TopicDataRecord matrix4x4
             * @property {ubii.dataStructure.IColor|null} [color] TopicDataRecord color
             */

            /**
             * Constructs a new TopicDataRecord.
             * @memberof ubii.topicData
             * @classdesc Represents a TopicDataRecord.
             * @implements ITopicDataRecord
             * @constructor
             * @param {ubii.topicData.ITopicDataRecord=} [properties] Properties to set
             */
            function TopicDataRecord(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TopicDataRecord topic.
             * @member {string} topic
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.topic = "";

            /**
             * TopicDataRecord number.
             * @member {number} number
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.number = 0;

            /**
             * TopicDataRecord boolean.
             * @member {boolean} boolean
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.boolean = false;

            /**
             * TopicDataRecord string.
             * @member {string} string
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.string = "";

            /**
             * TopicDataRecord vector2.
             * @member {ubii.dataStructure.IVector2|null|undefined} vector2
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.vector2 = null;

            /**
             * TopicDataRecord vector3.
             * @member {ubii.dataStructure.IVector3|null|undefined} vector3
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.vector3 = null;

            /**
             * TopicDataRecord vector4.
             * @member {ubii.dataStructure.IVector4|null|undefined} vector4
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.vector4 = null;

            /**
             * TopicDataRecord quaternion.
             * @member {ubii.dataStructure.IQuaternion|null|undefined} quaternion
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.quaternion = null;

            /**
             * TopicDataRecord matrix3x2.
             * @member {ubii.dataStructure.IMatrix3x2|null|undefined} matrix3x2
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.matrix3x2 = null;

            /**
             * TopicDataRecord matrix4x4.
             * @member {ubii.dataStructure.IMatrix4x4|null|undefined} matrix4x4
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.matrix4x4 = null;

            /**
             * TopicDataRecord color.
             * @member {ubii.dataStructure.IColor|null|undefined} color
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.color = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * TopicDataRecord type.
             * @member {"number"|"boolean"|"string"|"vector2"|"vector3"|"vector4"|"quaternion"|"matrix3x2"|"matrix4x4"|"color"|undefined} type
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            Object.defineProperty(TopicDataRecord.prototype, "type", {
                get: $util.oneOfGetter($oneOfFields = ["number", "boolean", "string", "vector2", "vector3", "vector4", "quaternion", "matrix3x2", "matrix4x4", "color"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new TopicDataRecord instance using the specified properties.
             * @function create
             * @memberof ubii.topicData.TopicDataRecord
             * @static
             * @param {ubii.topicData.ITopicDataRecord=} [properties] Properties to set
             * @returns {ubii.topicData.TopicDataRecord} TopicDataRecord instance
             */
            TopicDataRecord.create = function create(properties) {
                return new TopicDataRecord(properties);
            };

            /**
             * Encodes the specified TopicDataRecord message. Does not implicitly {@link ubii.topicData.TopicDataRecord.verify|verify} messages.
             * @function encode
             * @memberof ubii.topicData.TopicDataRecord
             * @static
             * @param {ubii.topicData.ITopicDataRecord} message TopicDataRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicDataRecord.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.topic != null && message.hasOwnProperty("topic"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.topic);
                if (message.number != null && message.hasOwnProperty("number"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.number);
                if (message.boolean != null && message.hasOwnProperty("boolean"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.boolean);
                if (message.string != null && message.hasOwnProperty("string"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.string);
                if (message.vector2 != null && message.hasOwnProperty("vector2"))
                    $root.ubii.dataStructure.Vector2.encode(message.vector2, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.vector3 != null && message.hasOwnProperty("vector3"))
                    $root.ubii.dataStructure.Vector3.encode(message.vector3, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.vector4 != null && message.hasOwnProperty("vector4"))
                    $root.ubii.dataStructure.Vector4.encode(message.vector4, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.quaternion != null && message.hasOwnProperty("quaternion"))
                    $root.ubii.dataStructure.Quaternion.encode(message.quaternion, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.matrix3x2 != null && message.hasOwnProperty("matrix3x2"))
                    $root.ubii.dataStructure.Matrix3x2.encode(message.matrix3x2, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.matrix4x4 != null && message.hasOwnProperty("matrix4x4"))
                    $root.ubii.dataStructure.Matrix4x4.encode(message.matrix4x4, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.color != null && message.hasOwnProperty("color"))
                    $root.ubii.dataStructure.Color.encode(message.color, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TopicDataRecord message, length delimited. Does not implicitly {@link ubii.topicData.TopicDataRecord.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.topicData.TopicDataRecord
             * @static
             * @param {ubii.topicData.ITopicDataRecord} message TopicDataRecord message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicDataRecord.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TopicDataRecord message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.topicData.TopicDataRecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.topicData.TopicDataRecord} TopicDataRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicDataRecord.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.topicData.TopicDataRecord();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.topic = reader.string();
                        break;
                    case 2:
                        message.number = reader.double();
                        break;
                    case 3:
                        message.boolean = reader.bool();
                        break;
                    case 4:
                        message.string = reader.string();
                        break;
                    case 5:
                        message.vector2 = $root.ubii.dataStructure.Vector2.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.vector3 = $root.ubii.dataStructure.Vector3.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.vector4 = $root.ubii.dataStructure.Vector4.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.quaternion = $root.ubii.dataStructure.Quaternion.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.matrix3x2 = $root.ubii.dataStructure.Matrix3x2.decode(reader, reader.uint32());
                        break;
                    case 10:
                        message.matrix4x4 = $root.ubii.dataStructure.Matrix4x4.decode(reader, reader.uint32());
                        break;
                    case 11:
                        message.color = $root.ubii.dataStructure.Color.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TopicDataRecord message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.topicData.TopicDataRecord
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.topicData.TopicDataRecord} TopicDataRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicDataRecord.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TopicDataRecord message.
             * @function verify
             * @memberof ubii.topicData.TopicDataRecord
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TopicDataRecord.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.topic != null && message.hasOwnProperty("topic"))
                    if (!$util.isString(message.topic))
                        return "topic: string expected";
                if (message.number != null && message.hasOwnProperty("number")) {
                    properties.type = 1;
                    if (typeof message.number !== "number")
                        return "number: number expected";
                }
                if (message.boolean != null && message.hasOwnProperty("boolean")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    if (typeof message.boolean !== "boolean")
                        return "boolean: boolean expected";
                }
                if (message.string != null && message.hasOwnProperty("string")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    if (!$util.isString(message.string))
                        return "string: string expected";
                }
                if (message.vector2 != null && message.hasOwnProperty("vector2")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Vector2.verify(message.vector2);
                        if (error)
                            return "vector2." + error;
                    }
                }
                if (message.vector3 != null && message.hasOwnProperty("vector3")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Vector3.verify(message.vector3);
                        if (error)
                            return "vector3." + error;
                    }
                }
                if (message.vector4 != null && message.hasOwnProperty("vector4")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Vector4.verify(message.vector4);
                        if (error)
                            return "vector4." + error;
                    }
                }
                if (message.quaternion != null && message.hasOwnProperty("quaternion")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Quaternion.verify(message.quaternion);
                        if (error)
                            return "quaternion." + error;
                    }
                }
                if (message.matrix3x2 != null && message.hasOwnProperty("matrix3x2")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Matrix3x2.verify(message.matrix3x2);
                        if (error)
                            return "matrix3x2." + error;
                    }
                }
                if (message.matrix4x4 != null && message.hasOwnProperty("matrix4x4")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Matrix4x4.verify(message.matrix4x4);
                        if (error)
                            return "matrix4x4." + error;
                    }
                }
                if (message.color != null && message.hasOwnProperty("color")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Color.verify(message.color);
                        if (error)
                            return "color." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TopicDataRecord message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.topicData.TopicDataRecord
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.topicData.TopicDataRecord} TopicDataRecord
             */
            TopicDataRecord.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.topicData.TopicDataRecord)
                    return object;
                var message = new $root.ubii.topicData.TopicDataRecord();
                if (object.topic != null)
                    message.topic = String(object.topic);
                if (object.number != null)
                    message.number = Number(object.number);
                if (object.boolean != null)
                    message.boolean = Boolean(object.boolean);
                if (object.string != null)
                    message.string = String(object.string);
                if (object.vector2 != null) {
                    if (typeof object.vector2 !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.vector2: object expected");
                    message.vector2 = $root.ubii.dataStructure.Vector2.fromObject(object.vector2);
                }
                if (object.vector3 != null) {
                    if (typeof object.vector3 !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.vector3: object expected");
                    message.vector3 = $root.ubii.dataStructure.Vector3.fromObject(object.vector3);
                }
                if (object.vector4 != null) {
                    if (typeof object.vector4 !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.vector4: object expected");
                    message.vector4 = $root.ubii.dataStructure.Vector4.fromObject(object.vector4);
                }
                if (object.quaternion != null) {
                    if (typeof object.quaternion !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.quaternion: object expected");
                    message.quaternion = $root.ubii.dataStructure.Quaternion.fromObject(object.quaternion);
                }
                if (object.matrix3x2 != null) {
                    if (typeof object.matrix3x2 !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.matrix3x2: object expected");
                    message.matrix3x2 = $root.ubii.dataStructure.Matrix3x2.fromObject(object.matrix3x2);
                }
                if (object.matrix4x4 != null) {
                    if (typeof object.matrix4x4 !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.matrix4x4: object expected");
                    message.matrix4x4 = $root.ubii.dataStructure.Matrix4x4.fromObject(object.matrix4x4);
                }
                if (object.color != null) {
                    if (typeof object.color !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.color: object expected");
                    message.color = $root.ubii.dataStructure.Color.fromObject(object.color);
                }
                return message;
            };

            /**
             * Creates a plain object from a TopicDataRecord message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.topicData.TopicDataRecord
             * @static
             * @param {ubii.topicData.TopicDataRecord} message TopicDataRecord
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TopicDataRecord.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.topic = "";
                if (message.topic != null && message.hasOwnProperty("topic"))
                    object.topic = message.topic;
                if (message.number != null && message.hasOwnProperty("number")) {
                    object.number = options.json && !isFinite(message.number) ? String(message.number) : message.number;
                    if (options.oneofs)
                        object.type = "number";
                }
                if (message.boolean != null && message.hasOwnProperty("boolean")) {
                    object.boolean = message.boolean;
                    if (options.oneofs)
                        object.type = "boolean";
                }
                if (message.string != null && message.hasOwnProperty("string")) {
                    object.string = message.string;
                    if (options.oneofs)
                        object.type = "string";
                }
                if (message.vector2 != null && message.hasOwnProperty("vector2")) {
                    object.vector2 = $root.ubii.dataStructure.Vector2.toObject(message.vector2, options);
                    if (options.oneofs)
                        object.type = "vector2";
                }
                if (message.vector3 != null && message.hasOwnProperty("vector3")) {
                    object.vector3 = $root.ubii.dataStructure.Vector3.toObject(message.vector3, options);
                    if (options.oneofs)
                        object.type = "vector3";
                }
                if (message.vector4 != null && message.hasOwnProperty("vector4")) {
                    object.vector4 = $root.ubii.dataStructure.Vector4.toObject(message.vector4, options);
                    if (options.oneofs)
                        object.type = "vector4";
                }
                if (message.quaternion != null && message.hasOwnProperty("quaternion")) {
                    object.quaternion = $root.ubii.dataStructure.Quaternion.toObject(message.quaternion, options);
                    if (options.oneofs)
                        object.type = "quaternion";
                }
                if (message.matrix3x2 != null && message.hasOwnProperty("matrix3x2")) {
                    object.matrix3x2 = $root.ubii.dataStructure.Matrix3x2.toObject(message.matrix3x2, options);
                    if (options.oneofs)
                        object.type = "matrix3x2";
                }
                if (message.matrix4x4 != null && message.hasOwnProperty("matrix4x4")) {
                    object.matrix4x4 = $root.ubii.dataStructure.Matrix4x4.toObject(message.matrix4x4, options);
                    if (options.oneofs)
                        object.type = "matrix4x4";
                }
                if (message.color != null && message.hasOwnProperty("color")) {
                    object.color = $root.ubii.dataStructure.Color.toObject(message.color, options);
                    if (options.oneofs)
                        object.type = "color";
                }
                return object;
            };

            /**
             * Converts this TopicDataRecord to JSON.
             * @function toJSON
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TopicDataRecord.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TopicDataRecord;
        })();

        return topicData;
    })();

    ubii.dataStructure = (function() {

        /**
         * Namespace dataStructure.
         * @memberof ubii
         * @namespace
         */
        var dataStructure = {};

        dataStructure.Color = (function() {

            /**
             * Properties of a Color.
             * @memberof ubii.dataStructure
             * @interface IColor
             * @property {number|null} [r] Color r
             * @property {number|null} [g] Color g
             * @property {number|null} [b] Color b
             * @property {number|null} [a] Color a
             */

            /**
             * Constructs a new Color.
             * @memberof ubii.dataStructure
             * @classdesc Represents a Color.
             * @implements IColor
             * @constructor
             * @param {ubii.dataStructure.IColor=} [properties] Properties to set
             */
            function Color(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Color r.
             * @member {number} r
             * @memberof ubii.dataStructure.Color
             * @instance
             */
            Color.prototype.r = 0;

            /**
             * Color g.
             * @member {number} g
             * @memberof ubii.dataStructure.Color
             * @instance
             */
            Color.prototype.g = 0;

            /**
             * Color b.
             * @member {number} b
             * @memberof ubii.dataStructure.Color
             * @instance
             */
            Color.prototype.b = 0;

            /**
             * Color a.
             * @member {number} a
             * @memberof ubii.dataStructure.Color
             * @instance
             */
            Color.prototype.a = 0;

            /**
             * Creates a new Color instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Color
             * @static
             * @param {ubii.dataStructure.IColor=} [properties] Properties to set
             * @returns {ubii.dataStructure.Color} Color instance
             */
            Color.create = function create(properties) {
                return new Color(properties);
            };

            /**
             * Encodes the specified Color message. Does not implicitly {@link ubii.dataStructure.Color.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Color
             * @static
             * @param {ubii.dataStructure.IColor} message Color message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Color.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.r != null && message.hasOwnProperty("r"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.r);
                if (message.g != null && message.hasOwnProperty("g"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.g);
                if (message.b != null && message.hasOwnProperty("b"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.b);
                if (message.a != null && message.hasOwnProperty("a"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.a);
                return writer;
            };

            /**
             * Encodes the specified Color message, length delimited. Does not implicitly {@link ubii.dataStructure.Color.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Color
             * @static
             * @param {ubii.dataStructure.IColor} message Color message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Color.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Color message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Color
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Color} Color
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Color.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Color();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.r = reader.double();
                        break;
                    case 2:
                        message.g = reader.double();
                        break;
                    case 3:
                        message.b = reader.double();
                        break;
                    case 4:
                        message.a = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Color message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Color
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Color} Color
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Color.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Color message.
             * @function verify
             * @memberof ubii.dataStructure.Color
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Color.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.r != null && message.hasOwnProperty("r"))
                    if (typeof message.r !== "number")
                        return "r: number expected";
                if (message.g != null && message.hasOwnProperty("g"))
                    if (typeof message.g !== "number")
                        return "g: number expected";
                if (message.b != null && message.hasOwnProperty("b"))
                    if (typeof message.b !== "number")
                        return "b: number expected";
                if (message.a != null && message.hasOwnProperty("a"))
                    if (typeof message.a !== "number")
                        return "a: number expected";
                return null;
            };

            /**
             * Creates a Color message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Color
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Color} Color
             */
            Color.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Color)
                    return object;
                var message = new $root.ubii.dataStructure.Color();
                if (object.r != null)
                    message.r = Number(object.r);
                if (object.g != null)
                    message.g = Number(object.g);
                if (object.b != null)
                    message.b = Number(object.b);
                if (object.a != null)
                    message.a = Number(object.a);
                return message;
            };

            /**
             * Creates a plain object from a Color message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Color
             * @static
             * @param {ubii.dataStructure.Color} message Color
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Color.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.r = 0;
                    object.g = 0;
                    object.b = 0;
                    object.a = 0;
                }
                if (message.r != null && message.hasOwnProperty("r"))
                    object.r = options.json && !isFinite(message.r) ? String(message.r) : message.r;
                if (message.g != null && message.hasOwnProperty("g"))
                    object.g = options.json && !isFinite(message.g) ? String(message.g) : message.g;
                if (message.b != null && message.hasOwnProperty("b"))
                    object.b = options.json && !isFinite(message.b) ? String(message.b) : message.b;
                if (message.a != null && message.hasOwnProperty("a"))
                    object.a = options.json && !isFinite(message.a) ? String(message.a) : message.a;
                return object;
            };

            /**
             * Converts this Color to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Color
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Color.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Color;
        })();

        dataStructure.Matrix3x2 = (function() {

            /**
             * Properties of a Matrix3x2.
             * @memberof ubii.dataStructure
             * @interface IMatrix3x2
             * @property {number|null} [m00] Matrix3x2 m00
             * @property {number|null} [m01] Matrix3x2 m01
             * @property {number|null} [m10] Matrix3x2 m10
             * @property {number|null} [m11] Matrix3x2 m11
             * @property {number|null} [m20] Matrix3x2 m20
             * @property {number|null} [m21] Matrix3x2 m21
             */

            /**
             * Constructs a new Matrix3x2.
             * @memberof ubii.dataStructure
             * @classdesc Represents a Matrix3x2.
             * @implements IMatrix3x2
             * @constructor
             * @param {ubii.dataStructure.IMatrix3x2=} [properties] Properties to set
             */
            function Matrix3x2(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Matrix3x2 m00.
             * @member {number} m00
             * @memberof ubii.dataStructure.Matrix3x2
             * @instance
             */
            Matrix3x2.prototype.m00 = 0;

            /**
             * Matrix3x2 m01.
             * @member {number} m01
             * @memberof ubii.dataStructure.Matrix3x2
             * @instance
             */
            Matrix3x2.prototype.m01 = 0;

            /**
             * Matrix3x2 m10.
             * @member {number} m10
             * @memberof ubii.dataStructure.Matrix3x2
             * @instance
             */
            Matrix3x2.prototype.m10 = 0;

            /**
             * Matrix3x2 m11.
             * @member {number} m11
             * @memberof ubii.dataStructure.Matrix3x2
             * @instance
             */
            Matrix3x2.prototype.m11 = 0;

            /**
             * Matrix3x2 m20.
             * @member {number} m20
             * @memberof ubii.dataStructure.Matrix3x2
             * @instance
             */
            Matrix3x2.prototype.m20 = 0;

            /**
             * Matrix3x2 m21.
             * @member {number} m21
             * @memberof ubii.dataStructure.Matrix3x2
             * @instance
             */
            Matrix3x2.prototype.m21 = 0;

            /**
             * Creates a new Matrix3x2 instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Matrix3x2
             * @static
             * @param {ubii.dataStructure.IMatrix3x2=} [properties] Properties to set
             * @returns {ubii.dataStructure.Matrix3x2} Matrix3x2 instance
             */
            Matrix3x2.create = function create(properties) {
                return new Matrix3x2(properties);
            };

            /**
             * Encodes the specified Matrix3x2 message. Does not implicitly {@link ubii.dataStructure.Matrix3x2.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Matrix3x2
             * @static
             * @param {ubii.dataStructure.IMatrix3x2} message Matrix3x2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Matrix3x2.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.m00 != null && message.hasOwnProperty("m00"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.m00);
                if (message.m01 != null && message.hasOwnProperty("m01"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.m01);
                if (message.m10 != null && message.hasOwnProperty("m10"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.m10);
                if (message.m11 != null && message.hasOwnProperty("m11"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.m11);
                if (message.m20 != null && message.hasOwnProperty("m20"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.m20);
                if (message.m21 != null && message.hasOwnProperty("m21"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.m21);
                return writer;
            };

            /**
             * Encodes the specified Matrix3x2 message, length delimited. Does not implicitly {@link ubii.dataStructure.Matrix3x2.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Matrix3x2
             * @static
             * @param {ubii.dataStructure.IMatrix3x2} message Matrix3x2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Matrix3x2.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Matrix3x2 message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Matrix3x2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Matrix3x2} Matrix3x2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Matrix3x2.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Matrix3x2();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.m00 = reader.double();
                        break;
                    case 2:
                        message.m01 = reader.double();
                        break;
                    case 3:
                        message.m10 = reader.double();
                        break;
                    case 4:
                        message.m11 = reader.double();
                        break;
                    case 5:
                        message.m20 = reader.double();
                        break;
                    case 6:
                        message.m21 = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Matrix3x2 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Matrix3x2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Matrix3x2} Matrix3x2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Matrix3x2.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Matrix3x2 message.
             * @function verify
             * @memberof ubii.dataStructure.Matrix3x2
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Matrix3x2.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.m00 != null && message.hasOwnProperty("m00"))
                    if (typeof message.m00 !== "number")
                        return "m00: number expected";
                if (message.m01 != null && message.hasOwnProperty("m01"))
                    if (typeof message.m01 !== "number")
                        return "m01: number expected";
                if (message.m10 != null && message.hasOwnProperty("m10"))
                    if (typeof message.m10 !== "number")
                        return "m10: number expected";
                if (message.m11 != null && message.hasOwnProperty("m11"))
                    if (typeof message.m11 !== "number")
                        return "m11: number expected";
                if (message.m20 != null && message.hasOwnProperty("m20"))
                    if (typeof message.m20 !== "number")
                        return "m20: number expected";
                if (message.m21 != null && message.hasOwnProperty("m21"))
                    if (typeof message.m21 !== "number")
                        return "m21: number expected";
                return null;
            };

            /**
             * Creates a Matrix3x2 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Matrix3x2
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Matrix3x2} Matrix3x2
             */
            Matrix3x2.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Matrix3x2)
                    return object;
                var message = new $root.ubii.dataStructure.Matrix3x2();
                if (object.m00 != null)
                    message.m00 = Number(object.m00);
                if (object.m01 != null)
                    message.m01 = Number(object.m01);
                if (object.m10 != null)
                    message.m10 = Number(object.m10);
                if (object.m11 != null)
                    message.m11 = Number(object.m11);
                if (object.m20 != null)
                    message.m20 = Number(object.m20);
                if (object.m21 != null)
                    message.m21 = Number(object.m21);
                return message;
            };

            /**
             * Creates a plain object from a Matrix3x2 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Matrix3x2
             * @static
             * @param {ubii.dataStructure.Matrix3x2} message Matrix3x2
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Matrix3x2.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.m00 = 0;
                    object.m01 = 0;
                    object.m10 = 0;
                    object.m11 = 0;
                    object.m20 = 0;
                    object.m21 = 0;
                }
                if (message.m00 != null && message.hasOwnProperty("m00"))
                    object.m00 = options.json && !isFinite(message.m00) ? String(message.m00) : message.m00;
                if (message.m01 != null && message.hasOwnProperty("m01"))
                    object.m01 = options.json && !isFinite(message.m01) ? String(message.m01) : message.m01;
                if (message.m10 != null && message.hasOwnProperty("m10"))
                    object.m10 = options.json && !isFinite(message.m10) ? String(message.m10) : message.m10;
                if (message.m11 != null && message.hasOwnProperty("m11"))
                    object.m11 = options.json && !isFinite(message.m11) ? String(message.m11) : message.m11;
                if (message.m20 != null && message.hasOwnProperty("m20"))
                    object.m20 = options.json && !isFinite(message.m20) ? String(message.m20) : message.m20;
                if (message.m21 != null && message.hasOwnProperty("m21"))
                    object.m21 = options.json && !isFinite(message.m21) ? String(message.m21) : message.m21;
                return object;
            };

            /**
             * Converts this Matrix3x2 to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Matrix3x2
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Matrix3x2.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Matrix3x2;
        })();

        dataStructure.Matrix4x4 = (function() {

            /**
             * Properties of a Matrix4x4.
             * @memberof ubii.dataStructure
             * @interface IMatrix4x4
             * @property {number|null} [m00] Matrix4x4 m00
             * @property {number|null} [m01] Matrix4x4 m01
             * @property {number|null} [m02] Matrix4x4 m02
             * @property {number|null} [m03] Matrix4x4 m03
             * @property {number|null} [m10] Matrix4x4 m10
             * @property {number|null} [m11] Matrix4x4 m11
             * @property {number|null} [m12] Matrix4x4 m12
             * @property {number|null} [m13] Matrix4x4 m13
             * @property {number|null} [m20] Matrix4x4 m20
             * @property {number|null} [m21] Matrix4x4 m21
             * @property {number|null} [m22] Matrix4x4 m22
             * @property {number|null} [m23] Matrix4x4 m23
             * @property {number|null} [m30] Matrix4x4 m30
             * @property {number|null} [m31] Matrix4x4 m31
             * @property {number|null} [m32] Matrix4x4 m32
             * @property {number|null} [m33] Matrix4x4 m33
             */

            /**
             * Constructs a new Matrix4x4.
             * @memberof ubii.dataStructure
             * @classdesc Represents a Matrix4x4.
             * @implements IMatrix4x4
             * @constructor
             * @param {ubii.dataStructure.IMatrix4x4=} [properties] Properties to set
             */
            function Matrix4x4(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Matrix4x4 m00.
             * @member {number} m00
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m00 = 0;

            /**
             * Matrix4x4 m01.
             * @member {number} m01
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m01 = 0;

            /**
             * Matrix4x4 m02.
             * @member {number} m02
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m02 = 0;

            /**
             * Matrix4x4 m03.
             * @member {number} m03
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m03 = 0;

            /**
             * Matrix4x4 m10.
             * @member {number} m10
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m10 = 0;

            /**
             * Matrix4x4 m11.
             * @member {number} m11
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m11 = 0;

            /**
             * Matrix4x4 m12.
             * @member {number} m12
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m12 = 0;

            /**
             * Matrix4x4 m13.
             * @member {number} m13
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m13 = 0;

            /**
             * Matrix4x4 m20.
             * @member {number} m20
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m20 = 0;

            /**
             * Matrix4x4 m21.
             * @member {number} m21
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m21 = 0;

            /**
             * Matrix4x4 m22.
             * @member {number} m22
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m22 = 0;

            /**
             * Matrix4x4 m23.
             * @member {number} m23
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m23 = 0;

            /**
             * Matrix4x4 m30.
             * @member {number} m30
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m30 = 0;

            /**
             * Matrix4x4 m31.
             * @member {number} m31
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m31 = 0;

            /**
             * Matrix4x4 m32.
             * @member {number} m32
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m32 = 0;

            /**
             * Matrix4x4 m33.
             * @member {number} m33
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             */
            Matrix4x4.prototype.m33 = 0;

            /**
             * Creates a new Matrix4x4 instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Matrix4x4
             * @static
             * @param {ubii.dataStructure.IMatrix4x4=} [properties] Properties to set
             * @returns {ubii.dataStructure.Matrix4x4} Matrix4x4 instance
             */
            Matrix4x4.create = function create(properties) {
                return new Matrix4x4(properties);
            };

            /**
             * Encodes the specified Matrix4x4 message. Does not implicitly {@link ubii.dataStructure.Matrix4x4.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Matrix4x4
             * @static
             * @param {ubii.dataStructure.IMatrix4x4} message Matrix4x4 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Matrix4x4.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.m00 != null && message.hasOwnProperty("m00"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.m00);
                if (message.m01 != null && message.hasOwnProperty("m01"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.m01);
                if (message.m02 != null && message.hasOwnProperty("m02"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.m02);
                if (message.m03 != null && message.hasOwnProperty("m03"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.m03);
                if (message.m10 != null && message.hasOwnProperty("m10"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.m10);
                if (message.m11 != null && message.hasOwnProperty("m11"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.m11);
                if (message.m12 != null && message.hasOwnProperty("m12"))
                    writer.uint32(/* id 7, wireType 1 =*/57).double(message.m12);
                if (message.m13 != null && message.hasOwnProperty("m13"))
                    writer.uint32(/* id 8, wireType 1 =*/65).double(message.m13);
                if (message.m20 != null && message.hasOwnProperty("m20"))
                    writer.uint32(/* id 9, wireType 1 =*/73).double(message.m20);
                if (message.m21 != null && message.hasOwnProperty("m21"))
                    writer.uint32(/* id 10, wireType 1 =*/81).double(message.m21);
                if (message.m22 != null && message.hasOwnProperty("m22"))
                    writer.uint32(/* id 11, wireType 1 =*/89).double(message.m22);
                if (message.m23 != null && message.hasOwnProperty("m23"))
                    writer.uint32(/* id 12, wireType 1 =*/97).double(message.m23);
                if (message.m30 != null && message.hasOwnProperty("m30"))
                    writer.uint32(/* id 13, wireType 1 =*/105).double(message.m30);
                if (message.m31 != null && message.hasOwnProperty("m31"))
                    writer.uint32(/* id 14, wireType 1 =*/113).double(message.m31);
                if (message.m32 != null && message.hasOwnProperty("m32"))
                    writer.uint32(/* id 15, wireType 1 =*/121).double(message.m32);
                if (message.m33 != null && message.hasOwnProperty("m33"))
                    writer.uint32(/* id 16, wireType 1 =*/129).double(message.m33);
                return writer;
            };

            /**
             * Encodes the specified Matrix4x4 message, length delimited. Does not implicitly {@link ubii.dataStructure.Matrix4x4.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Matrix4x4
             * @static
             * @param {ubii.dataStructure.IMatrix4x4} message Matrix4x4 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Matrix4x4.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Matrix4x4 message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Matrix4x4
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Matrix4x4} Matrix4x4
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Matrix4x4.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Matrix4x4();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.m00 = reader.double();
                        break;
                    case 2:
                        message.m01 = reader.double();
                        break;
                    case 3:
                        message.m02 = reader.double();
                        break;
                    case 4:
                        message.m03 = reader.double();
                        break;
                    case 5:
                        message.m10 = reader.double();
                        break;
                    case 6:
                        message.m11 = reader.double();
                        break;
                    case 7:
                        message.m12 = reader.double();
                        break;
                    case 8:
                        message.m13 = reader.double();
                        break;
                    case 9:
                        message.m20 = reader.double();
                        break;
                    case 10:
                        message.m21 = reader.double();
                        break;
                    case 11:
                        message.m22 = reader.double();
                        break;
                    case 12:
                        message.m23 = reader.double();
                        break;
                    case 13:
                        message.m30 = reader.double();
                        break;
                    case 14:
                        message.m31 = reader.double();
                        break;
                    case 15:
                        message.m32 = reader.double();
                        break;
                    case 16:
                        message.m33 = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Matrix4x4 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Matrix4x4
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Matrix4x4} Matrix4x4
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Matrix4x4.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Matrix4x4 message.
             * @function verify
             * @memberof ubii.dataStructure.Matrix4x4
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Matrix4x4.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.m00 != null && message.hasOwnProperty("m00"))
                    if (typeof message.m00 !== "number")
                        return "m00: number expected";
                if (message.m01 != null && message.hasOwnProperty("m01"))
                    if (typeof message.m01 !== "number")
                        return "m01: number expected";
                if (message.m02 != null && message.hasOwnProperty("m02"))
                    if (typeof message.m02 !== "number")
                        return "m02: number expected";
                if (message.m03 != null && message.hasOwnProperty("m03"))
                    if (typeof message.m03 !== "number")
                        return "m03: number expected";
                if (message.m10 != null && message.hasOwnProperty("m10"))
                    if (typeof message.m10 !== "number")
                        return "m10: number expected";
                if (message.m11 != null && message.hasOwnProperty("m11"))
                    if (typeof message.m11 !== "number")
                        return "m11: number expected";
                if (message.m12 != null && message.hasOwnProperty("m12"))
                    if (typeof message.m12 !== "number")
                        return "m12: number expected";
                if (message.m13 != null && message.hasOwnProperty("m13"))
                    if (typeof message.m13 !== "number")
                        return "m13: number expected";
                if (message.m20 != null && message.hasOwnProperty("m20"))
                    if (typeof message.m20 !== "number")
                        return "m20: number expected";
                if (message.m21 != null && message.hasOwnProperty("m21"))
                    if (typeof message.m21 !== "number")
                        return "m21: number expected";
                if (message.m22 != null && message.hasOwnProperty("m22"))
                    if (typeof message.m22 !== "number")
                        return "m22: number expected";
                if (message.m23 != null && message.hasOwnProperty("m23"))
                    if (typeof message.m23 !== "number")
                        return "m23: number expected";
                if (message.m30 != null && message.hasOwnProperty("m30"))
                    if (typeof message.m30 !== "number")
                        return "m30: number expected";
                if (message.m31 != null && message.hasOwnProperty("m31"))
                    if (typeof message.m31 !== "number")
                        return "m31: number expected";
                if (message.m32 != null && message.hasOwnProperty("m32"))
                    if (typeof message.m32 !== "number")
                        return "m32: number expected";
                if (message.m33 != null && message.hasOwnProperty("m33"))
                    if (typeof message.m33 !== "number")
                        return "m33: number expected";
                return null;
            };

            /**
             * Creates a Matrix4x4 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Matrix4x4
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Matrix4x4} Matrix4x4
             */
            Matrix4x4.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Matrix4x4)
                    return object;
                var message = new $root.ubii.dataStructure.Matrix4x4();
                if (object.m00 != null)
                    message.m00 = Number(object.m00);
                if (object.m01 != null)
                    message.m01 = Number(object.m01);
                if (object.m02 != null)
                    message.m02 = Number(object.m02);
                if (object.m03 != null)
                    message.m03 = Number(object.m03);
                if (object.m10 != null)
                    message.m10 = Number(object.m10);
                if (object.m11 != null)
                    message.m11 = Number(object.m11);
                if (object.m12 != null)
                    message.m12 = Number(object.m12);
                if (object.m13 != null)
                    message.m13 = Number(object.m13);
                if (object.m20 != null)
                    message.m20 = Number(object.m20);
                if (object.m21 != null)
                    message.m21 = Number(object.m21);
                if (object.m22 != null)
                    message.m22 = Number(object.m22);
                if (object.m23 != null)
                    message.m23 = Number(object.m23);
                if (object.m30 != null)
                    message.m30 = Number(object.m30);
                if (object.m31 != null)
                    message.m31 = Number(object.m31);
                if (object.m32 != null)
                    message.m32 = Number(object.m32);
                if (object.m33 != null)
                    message.m33 = Number(object.m33);
                return message;
            };

            /**
             * Creates a plain object from a Matrix4x4 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Matrix4x4
             * @static
             * @param {ubii.dataStructure.Matrix4x4} message Matrix4x4
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Matrix4x4.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.m00 = 0;
                    object.m01 = 0;
                    object.m02 = 0;
                    object.m03 = 0;
                    object.m10 = 0;
                    object.m11 = 0;
                    object.m12 = 0;
                    object.m13 = 0;
                    object.m20 = 0;
                    object.m21 = 0;
                    object.m22 = 0;
                    object.m23 = 0;
                    object.m30 = 0;
                    object.m31 = 0;
                    object.m32 = 0;
                    object.m33 = 0;
                }
                if (message.m00 != null && message.hasOwnProperty("m00"))
                    object.m00 = options.json && !isFinite(message.m00) ? String(message.m00) : message.m00;
                if (message.m01 != null && message.hasOwnProperty("m01"))
                    object.m01 = options.json && !isFinite(message.m01) ? String(message.m01) : message.m01;
                if (message.m02 != null && message.hasOwnProperty("m02"))
                    object.m02 = options.json && !isFinite(message.m02) ? String(message.m02) : message.m02;
                if (message.m03 != null && message.hasOwnProperty("m03"))
                    object.m03 = options.json && !isFinite(message.m03) ? String(message.m03) : message.m03;
                if (message.m10 != null && message.hasOwnProperty("m10"))
                    object.m10 = options.json && !isFinite(message.m10) ? String(message.m10) : message.m10;
                if (message.m11 != null && message.hasOwnProperty("m11"))
                    object.m11 = options.json && !isFinite(message.m11) ? String(message.m11) : message.m11;
                if (message.m12 != null && message.hasOwnProperty("m12"))
                    object.m12 = options.json && !isFinite(message.m12) ? String(message.m12) : message.m12;
                if (message.m13 != null && message.hasOwnProperty("m13"))
                    object.m13 = options.json && !isFinite(message.m13) ? String(message.m13) : message.m13;
                if (message.m20 != null && message.hasOwnProperty("m20"))
                    object.m20 = options.json && !isFinite(message.m20) ? String(message.m20) : message.m20;
                if (message.m21 != null && message.hasOwnProperty("m21"))
                    object.m21 = options.json && !isFinite(message.m21) ? String(message.m21) : message.m21;
                if (message.m22 != null && message.hasOwnProperty("m22"))
                    object.m22 = options.json && !isFinite(message.m22) ? String(message.m22) : message.m22;
                if (message.m23 != null && message.hasOwnProperty("m23"))
                    object.m23 = options.json && !isFinite(message.m23) ? String(message.m23) : message.m23;
                if (message.m30 != null && message.hasOwnProperty("m30"))
                    object.m30 = options.json && !isFinite(message.m30) ? String(message.m30) : message.m30;
                if (message.m31 != null && message.hasOwnProperty("m31"))
                    object.m31 = options.json && !isFinite(message.m31) ? String(message.m31) : message.m31;
                if (message.m32 != null && message.hasOwnProperty("m32"))
                    object.m32 = options.json && !isFinite(message.m32) ? String(message.m32) : message.m32;
                if (message.m33 != null && message.hasOwnProperty("m33"))
                    object.m33 = options.json && !isFinite(message.m33) ? String(message.m33) : message.m33;
                return object;
            };

            /**
             * Converts this Matrix4x4 to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Matrix4x4
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Matrix4x4.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Matrix4x4;
        })();

        dataStructure.Quaternion = (function() {

            /**
             * Properties of a Quaternion.
             * @memberof ubii.dataStructure
             * @interface IQuaternion
             * @property {number|null} [x] Quaternion x
             * @property {number|null} [y] Quaternion y
             * @property {number|null} [z] Quaternion z
             * @property {number|null} [w] Quaternion w
             */

            /**
             * Constructs a new Quaternion.
             * @memberof ubii.dataStructure
             * @classdesc Represents a Quaternion.
             * @implements IQuaternion
             * @constructor
             * @param {ubii.dataStructure.IQuaternion=} [properties] Properties to set
             */
            function Quaternion(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Quaternion x.
             * @member {number} x
             * @memberof ubii.dataStructure.Quaternion
             * @instance
             */
            Quaternion.prototype.x = 0;

            /**
             * Quaternion y.
             * @member {number} y
             * @memberof ubii.dataStructure.Quaternion
             * @instance
             */
            Quaternion.prototype.y = 0;

            /**
             * Quaternion z.
             * @member {number} z
             * @memberof ubii.dataStructure.Quaternion
             * @instance
             */
            Quaternion.prototype.z = 0;

            /**
             * Quaternion w.
             * @member {number} w
             * @memberof ubii.dataStructure.Quaternion
             * @instance
             */
            Quaternion.prototype.w = 0;

            /**
             * Creates a new Quaternion instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Quaternion
             * @static
             * @param {ubii.dataStructure.IQuaternion=} [properties] Properties to set
             * @returns {ubii.dataStructure.Quaternion} Quaternion instance
             */
            Quaternion.create = function create(properties) {
                return new Quaternion(properties);
            };

            /**
             * Encodes the specified Quaternion message. Does not implicitly {@link ubii.dataStructure.Quaternion.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Quaternion
             * @static
             * @param {ubii.dataStructure.IQuaternion} message Quaternion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Quaternion.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.x != null && message.hasOwnProperty("x"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
                if (message.y != null && message.hasOwnProperty("y"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
                if (message.z != null && message.hasOwnProperty("z"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.z);
                if (message.w != null && message.hasOwnProperty("w"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.w);
                return writer;
            };

            /**
             * Encodes the specified Quaternion message, length delimited. Does not implicitly {@link ubii.dataStructure.Quaternion.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Quaternion
             * @static
             * @param {ubii.dataStructure.IQuaternion} message Quaternion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Quaternion.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Quaternion message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Quaternion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Quaternion} Quaternion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Quaternion.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Quaternion();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.x = reader.double();
                        break;
                    case 2:
                        message.y = reader.double();
                        break;
                    case 3:
                        message.z = reader.double();
                        break;
                    case 4:
                        message.w = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Quaternion message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Quaternion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Quaternion} Quaternion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Quaternion.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Quaternion message.
             * @function verify
             * @memberof ubii.dataStructure.Quaternion
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Quaternion.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.x != null && message.hasOwnProperty("x"))
                    if (typeof message.x !== "number")
                        return "x: number expected";
                if (message.y != null && message.hasOwnProperty("y"))
                    if (typeof message.y !== "number")
                        return "y: number expected";
                if (message.z != null && message.hasOwnProperty("z"))
                    if (typeof message.z !== "number")
                        return "z: number expected";
                if (message.w != null && message.hasOwnProperty("w"))
                    if (typeof message.w !== "number")
                        return "w: number expected";
                return null;
            };

            /**
             * Creates a Quaternion message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Quaternion
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Quaternion} Quaternion
             */
            Quaternion.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Quaternion)
                    return object;
                var message = new $root.ubii.dataStructure.Quaternion();
                if (object.x != null)
                    message.x = Number(object.x);
                if (object.y != null)
                    message.y = Number(object.y);
                if (object.z != null)
                    message.z = Number(object.z);
                if (object.w != null)
                    message.w = Number(object.w);
                return message;
            };

            /**
             * Creates a plain object from a Quaternion message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Quaternion
             * @static
             * @param {ubii.dataStructure.Quaternion} message Quaternion
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Quaternion.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.x = 0;
                    object.y = 0;
                    object.z = 0;
                    object.w = 0;
                }
                if (message.x != null && message.hasOwnProperty("x"))
                    object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                if (message.y != null && message.hasOwnProperty("y"))
                    object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
                if (message.z != null && message.hasOwnProperty("z"))
                    object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
                if (message.w != null && message.hasOwnProperty("w"))
                    object.w = options.json && !isFinite(message.w) ? String(message.w) : message.w;
                return object;
            };

            /**
             * Converts this Quaternion to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Quaternion
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Quaternion.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Quaternion;
        })();

        dataStructure.Vector2 = (function() {

            /**
             * Properties of a Vector2.
             * @memberof ubii.dataStructure
             * @interface IVector2
             * @property {number|null} [x] Vector2 x
             * @property {number|null} [y] Vector2 y
             */

            /**
             * Constructs a new Vector2.
             * @memberof ubii.dataStructure
             * @classdesc Represents a Vector2.
             * @implements IVector2
             * @constructor
             * @param {ubii.dataStructure.IVector2=} [properties] Properties to set
             */
            function Vector2(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Vector2 x.
             * @member {number} x
             * @memberof ubii.dataStructure.Vector2
             * @instance
             */
            Vector2.prototype.x = 0;

            /**
             * Vector2 y.
             * @member {number} y
             * @memberof ubii.dataStructure.Vector2
             * @instance
             */
            Vector2.prototype.y = 0;

            /**
             * Creates a new Vector2 instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Vector2
             * @static
             * @param {ubii.dataStructure.IVector2=} [properties] Properties to set
             * @returns {ubii.dataStructure.Vector2} Vector2 instance
             */
            Vector2.create = function create(properties) {
                return new Vector2(properties);
            };

            /**
             * Encodes the specified Vector2 message. Does not implicitly {@link ubii.dataStructure.Vector2.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Vector2
             * @static
             * @param {ubii.dataStructure.IVector2} message Vector2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Vector2.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.x != null && message.hasOwnProperty("x"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
                if (message.y != null && message.hasOwnProperty("y"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
                return writer;
            };

            /**
             * Encodes the specified Vector2 message, length delimited. Does not implicitly {@link ubii.dataStructure.Vector2.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Vector2
             * @static
             * @param {ubii.dataStructure.IVector2} message Vector2 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Vector2.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Vector2 message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Vector2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Vector2} Vector2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Vector2.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Vector2();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.x = reader.double();
                        break;
                    case 2:
                        message.y = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Vector2 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Vector2
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Vector2} Vector2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Vector2.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Vector2 message.
             * @function verify
             * @memberof ubii.dataStructure.Vector2
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Vector2.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.x != null && message.hasOwnProperty("x"))
                    if (typeof message.x !== "number")
                        return "x: number expected";
                if (message.y != null && message.hasOwnProperty("y"))
                    if (typeof message.y !== "number")
                        return "y: number expected";
                return null;
            };

            /**
             * Creates a Vector2 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Vector2
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Vector2} Vector2
             */
            Vector2.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Vector2)
                    return object;
                var message = new $root.ubii.dataStructure.Vector2();
                if (object.x != null)
                    message.x = Number(object.x);
                if (object.y != null)
                    message.y = Number(object.y);
                return message;
            };

            /**
             * Creates a plain object from a Vector2 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Vector2
             * @static
             * @param {ubii.dataStructure.Vector2} message Vector2
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Vector2.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.x = 0;
                    object.y = 0;
                }
                if (message.x != null && message.hasOwnProperty("x"))
                    object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                if (message.y != null && message.hasOwnProperty("y"))
                    object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
                return object;
            };

            /**
             * Converts this Vector2 to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Vector2
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Vector2.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Vector2;
        })();

        dataStructure.Vector3 = (function() {

            /**
             * Properties of a Vector3.
             * @memberof ubii.dataStructure
             * @interface IVector3
             * @property {number|null} [x] Vector3 x
             * @property {number|null} [y] Vector3 y
             * @property {number|null} [z] Vector3 z
             */

            /**
             * Constructs a new Vector3.
             * @memberof ubii.dataStructure
             * @classdesc Represents a Vector3.
             * @implements IVector3
             * @constructor
             * @param {ubii.dataStructure.IVector3=} [properties] Properties to set
             */
            function Vector3(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Vector3 x.
             * @member {number} x
             * @memberof ubii.dataStructure.Vector3
             * @instance
             */
            Vector3.prototype.x = 0;

            /**
             * Vector3 y.
             * @member {number} y
             * @memberof ubii.dataStructure.Vector3
             * @instance
             */
            Vector3.prototype.y = 0;

            /**
             * Vector3 z.
             * @member {number} z
             * @memberof ubii.dataStructure.Vector3
             * @instance
             */
            Vector3.prototype.z = 0;

            /**
             * Creates a new Vector3 instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Vector3
             * @static
             * @param {ubii.dataStructure.IVector3=} [properties] Properties to set
             * @returns {ubii.dataStructure.Vector3} Vector3 instance
             */
            Vector3.create = function create(properties) {
                return new Vector3(properties);
            };

            /**
             * Encodes the specified Vector3 message. Does not implicitly {@link ubii.dataStructure.Vector3.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Vector3
             * @static
             * @param {ubii.dataStructure.IVector3} message Vector3 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Vector3.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.x != null && message.hasOwnProperty("x"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
                if (message.y != null && message.hasOwnProperty("y"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
                if (message.z != null && message.hasOwnProperty("z"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.z);
                return writer;
            };

            /**
             * Encodes the specified Vector3 message, length delimited. Does not implicitly {@link ubii.dataStructure.Vector3.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Vector3
             * @static
             * @param {ubii.dataStructure.IVector3} message Vector3 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Vector3.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Vector3 message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Vector3
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Vector3} Vector3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Vector3.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Vector3();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.x = reader.double();
                        break;
                    case 2:
                        message.y = reader.double();
                        break;
                    case 3:
                        message.z = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Vector3 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Vector3
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Vector3} Vector3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Vector3.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Vector3 message.
             * @function verify
             * @memberof ubii.dataStructure.Vector3
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Vector3.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.x != null && message.hasOwnProperty("x"))
                    if (typeof message.x !== "number")
                        return "x: number expected";
                if (message.y != null && message.hasOwnProperty("y"))
                    if (typeof message.y !== "number")
                        return "y: number expected";
                if (message.z != null && message.hasOwnProperty("z"))
                    if (typeof message.z !== "number")
                        return "z: number expected";
                return null;
            };

            /**
             * Creates a Vector3 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Vector3
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Vector3} Vector3
             */
            Vector3.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Vector3)
                    return object;
                var message = new $root.ubii.dataStructure.Vector3();
                if (object.x != null)
                    message.x = Number(object.x);
                if (object.y != null)
                    message.y = Number(object.y);
                if (object.z != null)
                    message.z = Number(object.z);
                return message;
            };

            /**
             * Creates a plain object from a Vector3 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Vector3
             * @static
             * @param {ubii.dataStructure.Vector3} message Vector3
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Vector3.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.x = 0;
                    object.y = 0;
                    object.z = 0;
                }
                if (message.x != null && message.hasOwnProperty("x"))
                    object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                if (message.y != null && message.hasOwnProperty("y"))
                    object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
                if (message.z != null && message.hasOwnProperty("z"))
                    object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
                return object;
            };

            /**
             * Converts this Vector3 to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Vector3
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Vector3.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Vector3;
        })();

        dataStructure.Vector4 = (function() {

            /**
             * Properties of a Vector4.
             * @memberof ubii.dataStructure
             * @interface IVector4
             * @property {number|null} [x] Vector4 x
             * @property {number|null} [y] Vector4 y
             * @property {number|null} [z] Vector4 z
             * @property {number|null} [w] Vector4 w
             */

            /**
             * Constructs a new Vector4.
             * @memberof ubii.dataStructure
             * @classdesc Represents a Vector4.
             * @implements IVector4
             * @constructor
             * @param {ubii.dataStructure.IVector4=} [properties] Properties to set
             */
            function Vector4(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Vector4 x.
             * @member {number} x
             * @memberof ubii.dataStructure.Vector4
             * @instance
             */
            Vector4.prototype.x = 0;

            /**
             * Vector4 y.
             * @member {number} y
             * @memberof ubii.dataStructure.Vector4
             * @instance
             */
            Vector4.prototype.y = 0;

            /**
             * Vector4 z.
             * @member {number} z
             * @memberof ubii.dataStructure.Vector4
             * @instance
             */
            Vector4.prototype.z = 0;

            /**
             * Vector4 w.
             * @member {number} w
             * @memberof ubii.dataStructure.Vector4
             * @instance
             */
            Vector4.prototype.w = 0;

            /**
             * Creates a new Vector4 instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Vector4
             * @static
             * @param {ubii.dataStructure.IVector4=} [properties] Properties to set
             * @returns {ubii.dataStructure.Vector4} Vector4 instance
             */
            Vector4.create = function create(properties) {
                return new Vector4(properties);
            };

            /**
             * Encodes the specified Vector4 message. Does not implicitly {@link ubii.dataStructure.Vector4.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Vector4
             * @static
             * @param {ubii.dataStructure.IVector4} message Vector4 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Vector4.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.x != null && message.hasOwnProperty("x"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
                if (message.y != null && message.hasOwnProperty("y"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
                if (message.z != null && message.hasOwnProperty("z"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.z);
                if (message.w != null && message.hasOwnProperty("w"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.w);
                return writer;
            };

            /**
             * Encodes the specified Vector4 message, length delimited. Does not implicitly {@link ubii.dataStructure.Vector4.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Vector4
             * @static
             * @param {ubii.dataStructure.IVector4} message Vector4 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Vector4.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Vector4 message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Vector4
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Vector4} Vector4
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Vector4.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Vector4();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.x = reader.double();
                        break;
                    case 2:
                        message.y = reader.double();
                        break;
                    case 3:
                        message.z = reader.double();
                        break;
                    case 4:
                        message.w = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Vector4 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Vector4
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Vector4} Vector4
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Vector4.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Vector4 message.
             * @function verify
             * @memberof ubii.dataStructure.Vector4
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Vector4.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.x != null && message.hasOwnProperty("x"))
                    if (typeof message.x !== "number")
                        return "x: number expected";
                if (message.y != null && message.hasOwnProperty("y"))
                    if (typeof message.y !== "number")
                        return "y: number expected";
                if (message.z != null && message.hasOwnProperty("z"))
                    if (typeof message.z !== "number")
                        return "z: number expected";
                if (message.w != null && message.hasOwnProperty("w"))
                    if (typeof message.w !== "number")
                        return "w: number expected";
                return null;
            };

            /**
             * Creates a Vector4 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Vector4
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Vector4} Vector4
             */
            Vector4.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Vector4)
                    return object;
                var message = new $root.ubii.dataStructure.Vector4();
                if (object.x != null)
                    message.x = Number(object.x);
                if (object.y != null)
                    message.y = Number(object.y);
                if (object.z != null)
                    message.z = Number(object.z);
                if (object.w != null)
                    message.w = Number(object.w);
                return message;
            };

            /**
             * Creates a plain object from a Vector4 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Vector4
             * @static
             * @param {ubii.dataStructure.Vector4} message Vector4
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Vector4.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.x = 0;
                    object.y = 0;
                    object.z = 0;
                    object.w = 0;
                }
                if (message.x != null && message.hasOwnProperty("x"))
                    object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
                if (message.y != null && message.hasOwnProperty("y"))
                    object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
                if (message.z != null && message.hasOwnProperty("z"))
                    object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
                if (message.w != null && message.hasOwnProperty("w"))
                    object.w = options.json && !isFinite(message.w) ? String(message.w) : message.w;
                return object;
            };

            /**
             * Converts this Vector4 to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Vector4
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Vector4.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Vector4;
        })();

        return dataStructure;
    })();

    return ubii;
})();

module.exports = $root;
