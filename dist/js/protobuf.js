/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
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

    ubii.clients = (function() {

        /**
         * Namespace clients.
         * @memberof ubii
         * @namespace
         */
        var clients = {};

        clients.Client = (function() {

            /**
             * Properties of a Client.
             * @memberof ubii.clients
             * @interface IClient
             * @property {string|null} [id] Client id
             * @property {string|null} [name] Client name
             * @property {Array.<ubii.devices.IDevice>|null} [devices] Client devices
             * @property {Array.<string>|null} [tags] Client tags
             * @property {string|null} [description] Client description
             */

            /**
             * Constructs a new Client.
             * @memberof ubii.clients
             * @classdesc Represents a Client.
             * @implements IClient
             * @constructor
             * @param {ubii.clients.IClient=} [properties] Properties to set
             */
            function Client(properties) {
                this.devices = [];
                this.tags = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Client id.
             * @member {string} id
             * @memberof ubii.clients.Client
             * @instance
             */
            Client.prototype.id = "";

            /**
             * Client name.
             * @member {string} name
             * @memberof ubii.clients.Client
             * @instance
             */
            Client.prototype.name = "";

            /**
             * Client devices.
             * @member {Array.<ubii.devices.IDevice>} devices
             * @memberof ubii.clients.Client
             * @instance
             */
            Client.prototype.devices = $util.emptyArray;

            /**
             * Client tags.
             * @member {Array.<string>} tags
             * @memberof ubii.clients.Client
             * @instance
             */
            Client.prototype.tags = $util.emptyArray;

            /**
             * Client description.
             * @member {string} description
             * @memberof ubii.clients.Client
             * @instance
             */
            Client.prototype.description = "";

            /**
             * Creates a new Client instance using the specified properties.
             * @function create
             * @memberof ubii.clients.Client
             * @static
             * @param {ubii.clients.IClient=} [properties] Properties to set
             * @returns {ubii.clients.Client} Client instance
             */
            Client.create = function create(properties) {
                return new Client(properties);
            };

            /**
             * Encodes the specified Client message. Does not implicitly {@link ubii.clients.Client.verify|verify} messages.
             * @function encode
             * @memberof ubii.clients.Client
             * @static
             * @param {ubii.clients.IClient} message Client message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Client.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.devices != null && message.devices.length)
                    for (var i = 0; i < message.devices.length; ++i)
                        $root.ubii.devices.Device.encode(message.devices[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.tags != null && message.tags.length)
                    for (var i = 0; i < message.tags.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.tags[i]);
                if (message.description != null && message.hasOwnProperty("description"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
                return writer;
            };

            /**
             * Encodes the specified Client message, length delimited. Does not implicitly {@link ubii.clients.Client.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.clients.Client
             * @static
             * @param {ubii.clients.IClient} message Client message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Client.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Client message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.clients.Client
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.clients.Client} Client
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Client.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.clients.Client();
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
                        if (!(message.devices && message.devices.length))
                            message.devices = [];
                        message.devices.push($root.ubii.devices.Device.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        message.tags.push(reader.string());
                        break;
                    case 5:
                        message.description = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Client message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.clients.Client
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.clients.Client} Client
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Client.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Client message.
             * @function verify
             * @memberof ubii.clients.Client
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Client.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.devices != null && message.hasOwnProperty("devices")) {
                    if (!Array.isArray(message.devices))
                        return "devices: array expected";
                    for (var i = 0; i < message.devices.length; ++i) {
                        var error = $root.ubii.devices.Device.verify(message.devices[i]);
                        if (error)
                            return "devices." + error;
                    }
                }
                if (message.tags != null && message.hasOwnProperty("tags")) {
                    if (!Array.isArray(message.tags))
                        return "tags: array expected";
                    for (var i = 0; i < message.tags.length; ++i)
                        if (!$util.isString(message.tags[i]))
                            return "tags: string[] expected";
                }
                if (message.description != null && message.hasOwnProperty("description"))
                    if (!$util.isString(message.description))
                        return "description: string expected";
                return null;
            };

            /**
             * Creates a Client message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.clients.Client
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.clients.Client} Client
             */
            Client.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.clients.Client)
                    return object;
                var message = new $root.ubii.clients.Client();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.devices) {
                    if (!Array.isArray(object.devices))
                        throw TypeError(".ubii.clients.Client.devices: array expected");
                    message.devices = [];
                    for (var i = 0; i < object.devices.length; ++i) {
                        if (typeof object.devices[i] !== "object")
                            throw TypeError(".ubii.clients.Client.devices: object expected");
                        message.devices[i] = $root.ubii.devices.Device.fromObject(object.devices[i]);
                    }
                }
                if (object.tags) {
                    if (!Array.isArray(object.tags))
                        throw TypeError(".ubii.clients.Client.tags: array expected");
                    message.tags = [];
                    for (var i = 0; i < object.tags.length; ++i)
                        message.tags[i] = String(object.tags[i]);
                }
                if (object.description != null)
                    message.description = String(object.description);
                return message;
            };

            /**
             * Creates a plain object from a Client message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.clients.Client
             * @static
             * @param {ubii.clients.Client} message Client
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Client.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.devices = [];
                    object.tags = [];
                }
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.description = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.devices && message.devices.length) {
                    object.devices = [];
                    for (var j = 0; j < message.devices.length; ++j)
                        object.devices[j] = $root.ubii.devices.Device.toObject(message.devices[j], options);
                }
                if (message.tags && message.tags.length) {
                    object.tags = [];
                    for (var j = 0; j < message.tags.length; ++j)
                        object.tags[j] = message.tags[j];
                }
                if (message.description != null && message.hasOwnProperty("description"))
                    object.description = message.description;
                return object;
            };

            /**
             * Converts this Client to JSON.
             * @function toJSON
             * @memberof ubii.clients.Client
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Client.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Client;
        })();

        clients.ClientList = (function() {

            /**
             * Properties of a ClientList.
             * @memberof ubii.clients
             * @interface IClientList
             * @property {Array.<ubii.clients.IClient>|null} [elements] ClientList elements
             */

            /**
             * Constructs a new ClientList.
             * @memberof ubii.clients
             * @classdesc Represents a ClientList.
             * @implements IClientList
             * @constructor
             * @param {ubii.clients.IClientList=} [properties] Properties to set
             */
            function ClientList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ClientList elements.
             * @member {Array.<ubii.clients.IClient>} elements
             * @memberof ubii.clients.ClientList
             * @instance
             */
            ClientList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new ClientList instance using the specified properties.
             * @function create
             * @memberof ubii.clients.ClientList
             * @static
             * @param {ubii.clients.IClientList=} [properties] Properties to set
             * @returns {ubii.clients.ClientList} ClientList instance
             */
            ClientList.create = function create(properties) {
                return new ClientList(properties);
            };

            /**
             * Encodes the specified ClientList message. Does not implicitly {@link ubii.clients.ClientList.verify|verify} messages.
             * @function encode
             * @memberof ubii.clients.ClientList
             * @static
             * @param {ubii.clients.IClientList} message ClientList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.clients.Client.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ClientList message, length delimited. Does not implicitly {@link ubii.clients.ClientList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.clients.ClientList
             * @static
             * @param {ubii.clients.IClientList} message ClientList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ClientList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.clients.ClientList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.clients.ClientList} ClientList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.clients.ClientList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.clients.Client.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ClientList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.clients.ClientList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.clients.ClientList} ClientList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ClientList message.
             * @function verify
             * @memberof ubii.clients.ClientList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ClientList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.clients.Client.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ClientList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.clients.ClientList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.clients.ClientList} ClientList
             */
            ClientList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.clients.ClientList)
                    return object;
                var message = new $root.ubii.clients.ClientList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.clients.ClientList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.clients.ClientList.elements: object expected");
                        message.elements[i] = $root.ubii.clients.Client.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ClientList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.clients.ClientList
             * @static
             * @param {ubii.clients.ClientList} message ClientList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ClientList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.clients.Client.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this ClientList to JSON.
             * @function toJSON
             * @memberof ubii.clients.ClientList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ClientList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ClientList;
        })();

        return clients;
    })();

    ubii.devices = (function() {

        /**
         * Namespace devices.
         * @memberof ubii
         * @namespace
         */
        var devices = {};

        devices.Component = (function() {

            /**
             * Properties of a Component.
             * @memberof ubii.devices
             * @interface IComponent
             * @property {string|null} [topic] Component topic
             * @property {string|null} [messageFormat] Component messageFormat
             * @property {ubii.devices.Component.IOType|null} [ioType] Component ioType
             * @property {string|null} [deviceId] Component deviceId
             * @property {Array.<string>|null} [tags] Component tags
             * @property {string|null} [description] Component description
             * @property {string|null} [id] Component id
             */

            /**
             * Constructs a new Component.
             * @memberof ubii.devices
             * @classdesc Represents a Component.
             * @implements IComponent
             * @constructor
             * @param {ubii.devices.IComponent=} [properties] Properties to set
             */
            function Component(properties) {
                this.tags = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Component topic.
             * @member {string} topic
             * @memberof ubii.devices.Component
             * @instance
             */
            Component.prototype.topic = "";

            /**
             * Component messageFormat.
             * @member {string} messageFormat
             * @memberof ubii.devices.Component
             * @instance
             */
            Component.prototype.messageFormat = "";

            /**
             * Component ioType.
             * @member {ubii.devices.Component.IOType} ioType
             * @memberof ubii.devices.Component
             * @instance
             */
            Component.prototype.ioType = 0;

            /**
             * Component deviceId.
             * @member {string} deviceId
             * @memberof ubii.devices.Component
             * @instance
             */
            Component.prototype.deviceId = "";

            /**
             * Component tags.
             * @member {Array.<string>} tags
             * @memberof ubii.devices.Component
             * @instance
             */
            Component.prototype.tags = $util.emptyArray;

            /**
             * Component description.
             * @member {string} description
             * @memberof ubii.devices.Component
             * @instance
             */
            Component.prototype.description = "";

            /**
             * Component id.
             * @member {string} id
             * @memberof ubii.devices.Component
             * @instance
             */
            Component.prototype.id = "";

            /**
             * Creates a new Component instance using the specified properties.
             * @function create
             * @memberof ubii.devices.Component
             * @static
             * @param {ubii.devices.IComponent=} [properties] Properties to set
             * @returns {ubii.devices.Component} Component instance
             */
            Component.create = function create(properties) {
                return new Component(properties);
            };

            /**
             * Encodes the specified Component message. Does not implicitly {@link ubii.devices.Component.verify|verify} messages.
             * @function encode
             * @memberof ubii.devices.Component
             * @static
             * @param {ubii.devices.IComponent} message Component message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Component.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.topic != null && message.hasOwnProperty("topic"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.topic);
                if (message.messageFormat != null && message.hasOwnProperty("messageFormat"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.messageFormat);
                if (message.ioType != null && message.hasOwnProperty("ioType"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ioType);
                if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceId);
                if (message.tags != null && message.tags.length)
                    for (var i = 0; i < message.tags.length; ++i)
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.tags[i]);
                if (message.description != null && message.hasOwnProperty("description"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.description);
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.id);
                return writer;
            };

            /**
             * Encodes the specified Component message, length delimited. Does not implicitly {@link ubii.devices.Component.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.devices.Component
             * @static
             * @param {ubii.devices.IComponent} message Component message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Component.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Component message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.devices.Component
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.devices.Component} Component
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Component.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.devices.Component();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.topic = reader.string();
                        break;
                    case 2:
                        message.messageFormat = reader.string();
                        break;
                    case 3:
                        message.ioType = reader.int32();
                        break;
                    case 4:
                        message.deviceId = reader.string();
                        break;
                    case 5:
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        message.tags.push(reader.string());
                        break;
                    case 6:
                        message.description = reader.string();
                        break;
                    case 7:
                        message.id = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Component message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.devices.Component
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.devices.Component} Component
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Component.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Component message.
             * @function verify
             * @memberof ubii.devices.Component
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Component.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.topic != null && message.hasOwnProperty("topic"))
                    if (!$util.isString(message.topic))
                        return "topic: string expected";
                if (message.messageFormat != null && message.hasOwnProperty("messageFormat"))
                    if (!$util.isString(message.messageFormat))
                        return "messageFormat: string expected";
                if (message.ioType != null && message.hasOwnProperty("ioType"))
                    switch (message.ioType) {
                    default:
                        return "ioType: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                    if (!$util.isString(message.deviceId))
                        return "deviceId: string expected";
                if (message.tags != null && message.hasOwnProperty("tags")) {
                    if (!Array.isArray(message.tags))
                        return "tags: array expected";
                    for (var i = 0; i < message.tags.length; ++i)
                        if (!$util.isString(message.tags[i]))
                            return "tags: string[] expected";
                }
                if (message.description != null && message.hasOwnProperty("description"))
                    if (!$util.isString(message.description))
                        return "description: string expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                return null;
            };

            /**
             * Creates a Component message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.devices.Component
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.devices.Component} Component
             */
            Component.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.devices.Component)
                    return object;
                var message = new $root.ubii.devices.Component();
                if (object.topic != null)
                    message.topic = String(object.topic);
                if (object.messageFormat != null)
                    message.messageFormat = String(object.messageFormat);
                switch (object.ioType) {
                case "PUBLISHER":
                case 0:
                    message.ioType = 0;
                    break;
                case "SUBSCRIBER":
                case 1:
                    message.ioType = 1;
                    break;
                }
                if (object.deviceId != null)
                    message.deviceId = String(object.deviceId);
                if (object.tags) {
                    if (!Array.isArray(object.tags))
                        throw TypeError(".ubii.devices.Component.tags: array expected");
                    message.tags = [];
                    for (var i = 0; i < object.tags.length; ++i)
                        message.tags[i] = String(object.tags[i]);
                }
                if (object.description != null)
                    message.description = String(object.description);
                if (object.id != null)
                    message.id = String(object.id);
                return message;
            };

            /**
             * Creates a plain object from a Component message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.devices.Component
             * @static
             * @param {ubii.devices.Component} message Component
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Component.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.tags = [];
                if (options.defaults) {
                    object.topic = "";
                    object.messageFormat = "";
                    object.ioType = options.enums === String ? "PUBLISHER" : 0;
                    object.deviceId = "";
                    object.description = "";
                    object.id = "";
                }
                if (message.topic != null && message.hasOwnProperty("topic"))
                    object.topic = message.topic;
                if (message.messageFormat != null && message.hasOwnProperty("messageFormat"))
                    object.messageFormat = message.messageFormat;
                if (message.ioType != null && message.hasOwnProperty("ioType"))
                    object.ioType = options.enums === String ? $root.ubii.devices.Component.IOType[message.ioType] : message.ioType;
                if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                    object.deviceId = message.deviceId;
                if (message.tags && message.tags.length) {
                    object.tags = [];
                    for (var j = 0; j < message.tags.length; ++j)
                        object.tags[j] = message.tags[j];
                }
                if (message.description != null && message.hasOwnProperty("description"))
                    object.description = message.description;
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                return object;
            };

            /**
             * Converts this Component to JSON.
             * @function toJSON
             * @memberof ubii.devices.Component
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Component.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * IOType enum.
             * @name ubii.devices.Component.IOType
             * @enum {string}
             * @property {number} PUBLISHER=0 PUBLISHER value
             * @property {number} SUBSCRIBER=1 SUBSCRIBER value
             */
            Component.IOType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "PUBLISHER"] = 0;
                values[valuesById[1] = "SUBSCRIBER"] = 1;
                return values;
            })();

            return Component;
        })();

        devices.ComponentList = (function() {

            /**
             * Properties of a ComponentList.
             * @memberof ubii.devices
             * @interface IComponentList
             * @property {Array.<ubii.devices.IComponent>|null} [elements] ComponentList elements
             */

            /**
             * Constructs a new ComponentList.
             * @memberof ubii.devices
             * @classdesc Represents a ComponentList.
             * @implements IComponentList
             * @constructor
             * @param {ubii.devices.IComponentList=} [properties] Properties to set
             */
            function ComponentList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ComponentList elements.
             * @member {Array.<ubii.devices.IComponent>} elements
             * @memberof ubii.devices.ComponentList
             * @instance
             */
            ComponentList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new ComponentList instance using the specified properties.
             * @function create
             * @memberof ubii.devices.ComponentList
             * @static
             * @param {ubii.devices.IComponentList=} [properties] Properties to set
             * @returns {ubii.devices.ComponentList} ComponentList instance
             */
            ComponentList.create = function create(properties) {
                return new ComponentList(properties);
            };

            /**
             * Encodes the specified ComponentList message. Does not implicitly {@link ubii.devices.ComponentList.verify|verify} messages.
             * @function encode
             * @memberof ubii.devices.ComponentList
             * @static
             * @param {ubii.devices.IComponentList} message ComponentList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ComponentList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.devices.Component.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ComponentList message, length delimited. Does not implicitly {@link ubii.devices.ComponentList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.devices.ComponentList
             * @static
             * @param {ubii.devices.IComponentList} message ComponentList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ComponentList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ComponentList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.devices.ComponentList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.devices.ComponentList} ComponentList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ComponentList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.devices.ComponentList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.devices.Component.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ComponentList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.devices.ComponentList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.devices.ComponentList} ComponentList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ComponentList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ComponentList message.
             * @function verify
             * @memberof ubii.devices.ComponentList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ComponentList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.devices.Component.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ComponentList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.devices.ComponentList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.devices.ComponentList} ComponentList
             */
            ComponentList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.devices.ComponentList)
                    return object;
                var message = new $root.ubii.devices.ComponentList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.devices.ComponentList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.devices.ComponentList.elements: object expected");
                        message.elements[i] = $root.ubii.devices.Component.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ComponentList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.devices.ComponentList
             * @static
             * @param {ubii.devices.ComponentList} message ComponentList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ComponentList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.devices.Component.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this ComponentList to JSON.
             * @function toJSON
             * @memberof ubii.devices.ComponentList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ComponentList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ComponentList;
        })();

        devices.Device = (function() {

            /**
             * Properties of a Device.
             * @memberof ubii.devices
             * @interface IDevice
             * @property {string|null} [id] Device id
             * @property {string|null} [name] Device name
             * @property {ubii.devices.Device.DeviceType|null} [deviceType] Device deviceType
             * @property {Array.<ubii.devices.IComponent>|null} [components] Device components
             * @property {string|null} [clientId] Device clientId
             * @property {Array.<string>|null} [tags] Device tags
             * @property {string|null} [description] Device description
             */

            /**
             * Constructs a new Device.
             * @memberof ubii.devices
             * @classdesc Represents a Device.
             * @implements IDevice
             * @constructor
             * @param {ubii.devices.IDevice=} [properties] Properties to set
             */
            function Device(properties) {
                this.components = [];
                this.tags = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Device id.
             * @member {string} id
             * @memberof ubii.devices.Device
             * @instance
             */
            Device.prototype.id = "";

            /**
             * Device name.
             * @member {string} name
             * @memberof ubii.devices.Device
             * @instance
             */
            Device.prototype.name = "";

            /**
             * Device deviceType.
             * @member {ubii.devices.Device.DeviceType} deviceType
             * @memberof ubii.devices.Device
             * @instance
             */
            Device.prototype.deviceType = 0;

            /**
             * Device components.
             * @member {Array.<ubii.devices.IComponent>} components
             * @memberof ubii.devices.Device
             * @instance
             */
            Device.prototype.components = $util.emptyArray;

            /**
             * Device clientId.
             * @member {string} clientId
             * @memberof ubii.devices.Device
             * @instance
             */
            Device.prototype.clientId = "";

            /**
             * Device tags.
             * @member {Array.<string>} tags
             * @memberof ubii.devices.Device
             * @instance
             */
            Device.prototype.tags = $util.emptyArray;

            /**
             * Device description.
             * @member {string} description
             * @memberof ubii.devices.Device
             * @instance
             */
            Device.prototype.description = "";

            /**
             * Creates a new Device instance using the specified properties.
             * @function create
             * @memberof ubii.devices.Device
             * @static
             * @param {ubii.devices.IDevice=} [properties] Properties to set
             * @returns {ubii.devices.Device} Device instance
             */
            Device.create = function create(properties) {
                return new Device(properties);
            };

            /**
             * Encodes the specified Device message. Does not implicitly {@link ubii.devices.Device.verify|verify} messages.
             * @function encode
             * @memberof ubii.devices.Device
             * @static
             * @param {ubii.devices.IDevice} message Device message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Device.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.deviceType);
                if (message.components != null && message.components.length)
                    for (var i = 0; i < message.components.length; ++i)
                        $root.ubii.devices.Component.encode(message.components[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.clientId != null && message.hasOwnProperty("clientId"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.clientId);
                if (message.tags != null && message.tags.length)
                    for (var i = 0; i < message.tags.length; ++i)
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.tags[i]);
                if (message.description != null && message.hasOwnProperty("description"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.description);
                return writer;
            };

            /**
             * Encodes the specified Device message, length delimited. Does not implicitly {@link ubii.devices.Device.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.devices.Device
             * @static
             * @param {ubii.devices.IDevice} message Device message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Device.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Device message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.devices.Device
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.devices.Device} Device
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Device.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.devices.Device();
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
                        message.deviceType = reader.int32();
                        break;
                    case 4:
                        if (!(message.components && message.components.length))
                            message.components = [];
                        message.components.push($root.ubii.devices.Component.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        message.clientId = reader.string();
                        break;
                    case 6:
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        message.tags.push(reader.string());
                        break;
                    case 7:
                        message.description = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Device message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.devices.Device
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.devices.Device} Device
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Device.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Device message.
             * @function verify
             * @memberof ubii.devices.Device
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Device.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
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
                if (message.components != null && message.hasOwnProperty("components")) {
                    if (!Array.isArray(message.components))
                        return "components: array expected";
                    for (var i = 0; i < message.components.length; ++i) {
                        var error = $root.ubii.devices.Component.verify(message.components[i]);
                        if (error)
                            return "components." + error;
                    }
                }
                if (message.clientId != null && message.hasOwnProperty("clientId"))
                    if (!$util.isString(message.clientId))
                        return "clientId: string expected";
                if (message.tags != null && message.hasOwnProperty("tags")) {
                    if (!Array.isArray(message.tags))
                        return "tags: array expected";
                    for (var i = 0; i < message.tags.length; ++i)
                        if (!$util.isString(message.tags[i]))
                            return "tags: string[] expected";
                }
                if (message.description != null && message.hasOwnProperty("description"))
                    if (!$util.isString(message.description))
                        return "description: string expected";
                return null;
            };

            /**
             * Creates a Device message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.devices.Device
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.devices.Device} Device
             */
            Device.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.devices.Device)
                    return object;
                var message = new $root.ubii.devices.Device();
                if (object.id != null)
                    message.id = String(object.id);
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
                if (object.components) {
                    if (!Array.isArray(object.components))
                        throw TypeError(".ubii.devices.Device.components: array expected");
                    message.components = [];
                    for (var i = 0; i < object.components.length; ++i) {
                        if (typeof object.components[i] !== "object")
                            throw TypeError(".ubii.devices.Device.components: object expected");
                        message.components[i] = $root.ubii.devices.Component.fromObject(object.components[i]);
                    }
                }
                if (object.clientId != null)
                    message.clientId = String(object.clientId);
                if (object.tags) {
                    if (!Array.isArray(object.tags))
                        throw TypeError(".ubii.devices.Device.tags: array expected");
                    message.tags = [];
                    for (var i = 0; i < object.tags.length; ++i)
                        message.tags[i] = String(object.tags[i]);
                }
                if (object.description != null)
                    message.description = String(object.description);
                return message;
            };

            /**
             * Creates a plain object from a Device message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.devices.Device
             * @static
             * @param {ubii.devices.Device} message Device
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Device.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.components = [];
                    object.tags = [];
                }
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.deviceType = options.enums === String ? "PARTICIPANT" : 0;
                    object.clientId = "";
                    object.description = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.deviceType != null && message.hasOwnProperty("deviceType"))
                    object.deviceType = options.enums === String ? $root.ubii.devices.Device.DeviceType[message.deviceType] : message.deviceType;
                if (message.components && message.components.length) {
                    object.components = [];
                    for (var j = 0; j < message.components.length; ++j)
                        object.components[j] = $root.ubii.devices.Component.toObject(message.components[j], options);
                }
                if (message.clientId != null && message.hasOwnProperty("clientId"))
                    object.clientId = message.clientId;
                if (message.tags && message.tags.length) {
                    object.tags = [];
                    for (var j = 0; j < message.tags.length; ++j)
                        object.tags[j] = message.tags[j];
                }
                if (message.description != null && message.hasOwnProperty("description"))
                    object.description = message.description;
                return object;
            };

            /**
             * Converts this Device to JSON.
             * @function toJSON
             * @memberof ubii.devices.Device
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Device.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * DeviceType enum.
             * @name ubii.devices.Device.DeviceType
             * @enum {string}
             * @property {number} PARTICIPANT=0 PARTICIPANT value
             * @property {number} WATCHER=1 WATCHER value
             */
            Device.DeviceType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "PARTICIPANT"] = 0;
                values[valuesById[1] = "WATCHER"] = 1;
                return values;
            })();

            return Device;
        })();

        devices.DeviceList = (function() {

            /**
             * Properties of a DeviceList.
             * @memberof ubii.devices
             * @interface IDeviceList
             * @property {Array.<ubii.devices.IDevice>|null} [elements] DeviceList elements
             */

            /**
             * Constructs a new DeviceList.
             * @memberof ubii.devices
             * @classdesc Represents a DeviceList.
             * @implements IDeviceList
             * @constructor
             * @param {ubii.devices.IDeviceList=} [properties] Properties to set
             */
            function DeviceList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeviceList elements.
             * @member {Array.<ubii.devices.IDevice>} elements
             * @memberof ubii.devices.DeviceList
             * @instance
             */
            DeviceList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new DeviceList instance using the specified properties.
             * @function create
             * @memberof ubii.devices.DeviceList
             * @static
             * @param {ubii.devices.IDeviceList=} [properties] Properties to set
             * @returns {ubii.devices.DeviceList} DeviceList instance
             */
            DeviceList.create = function create(properties) {
                return new DeviceList(properties);
            };

            /**
             * Encodes the specified DeviceList message. Does not implicitly {@link ubii.devices.DeviceList.verify|verify} messages.
             * @function encode
             * @memberof ubii.devices.DeviceList
             * @static
             * @param {ubii.devices.IDeviceList} message DeviceList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.devices.Device.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified DeviceList message, length delimited. Does not implicitly {@link ubii.devices.DeviceList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.devices.DeviceList
             * @static
             * @param {ubii.devices.IDeviceList} message DeviceList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeviceList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeviceList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.devices.DeviceList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.devices.DeviceList} DeviceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.devices.DeviceList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.devices.Device.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DeviceList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.devices.DeviceList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.devices.DeviceList} DeviceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeviceList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeviceList message.
             * @function verify
             * @memberof ubii.devices.DeviceList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeviceList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.devices.Device.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a DeviceList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.devices.DeviceList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.devices.DeviceList} DeviceList
             */
            DeviceList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.devices.DeviceList)
                    return object;
                var message = new $root.ubii.devices.DeviceList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.devices.DeviceList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.devices.DeviceList.elements: object expected");
                        message.elements[i] = $root.ubii.devices.Device.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a DeviceList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.devices.DeviceList
             * @static
             * @param {ubii.devices.DeviceList} message DeviceList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeviceList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.devices.Device.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this DeviceList to JSON.
             * @function toJSON
             * @memberof ubii.devices.DeviceList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeviceList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DeviceList;
        })();

        devices.TopicDemux = (function() {

            /**
             * Properties of a TopicDemux.
             * @memberof ubii.devices
             * @interface ITopicDemux
             * @property {string|null} [id] TopicDemux id
             * @property {string|null} [name] TopicDemux name
             * @property {string|null} [dataType] TopicDemux dataType
             * @property {string|null} [outputTopicFormat] TopicDemux outputTopicFormat
             */

            /**
             * Constructs a new TopicDemux.
             * @memberof ubii.devices
             * @classdesc Represents a TopicDemux.
             * @implements ITopicDemux
             * @constructor
             * @param {ubii.devices.ITopicDemux=} [properties] Properties to set
             */
            function TopicDemux(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TopicDemux id.
             * @member {string} id
             * @memberof ubii.devices.TopicDemux
             * @instance
             */
            TopicDemux.prototype.id = "";

            /**
             * TopicDemux name.
             * @member {string} name
             * @memberof ubii.devices.TopicDemux
             * @instance
             */
            TopicDemux.prototype.name = "";

            /**
             * TopicDemux dataType.
             * @member {string} dataType
             * @memberof ubii.devices.TopicDemux
             * @instance
             */
            TopicDemux.prototype.dataType = "";

            /**
             * TopicDemux outputTopicFormat.
             * @member {string} outputTopicFormat
             * @memberof ubii.devices.TopicDemux
             * @instance
             */
            TopicDemux.prototype.outputTopicFormat = "";

            /**
             * Creates a new TopicDemux instance using the specified properties.
             * @function create
             * @memberof ubii.devices.TopicDemux
             * @static
             * @param {ubii.devices.ITopicDemux=} [properties] Properties to set
             * @returns {ubii.devices.TopicDemux} TopicDemux instance
             */
            TopicDemux.create = function create(properties) {
                return new TopicDemux(properties);
            };

            /**
             * Encodes the specified TopicDemux message. Does not implicitly {@link ubii.devices.TopicDemux.verify|verify} messages.
             * @function encode
             * @memberof ubii.devices.TopicDemux
             * @static
             * @param {ubii.devices.ITopicDemux} message TopicDemux message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicDemux.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.dataType);
                if (message.outputTopicFormat != null && message.hasOwnProperty("outputTopicFormat"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.outputTopicFormat);
                return writer;
            };

            /**
             * Encodes the specified TopicDemux message, length delimited. Does not implicitly {@link ubii.devices.TopicDemux.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.devices.TopicDemux
             * @static
             * @param {ubii.devices.ITopicDemux} message TopicDemux message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicDemux.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TopicDemux message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.devices.TopicDemux
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.devices.TopicDemux} TopicDemux
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicDemux.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.devices.TopicDemux();
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
                        message.dataType = reader.string();
                        break;
                    case 4:
                        message.outputTopicFormat = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TopicDemux message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.devices.TopicDemux
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.devices.TopicDemux} TopicDemux
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicDemux.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TopicDemux message.
             * @function verify
             * @memberof ubii.devices.TopicDemux
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TopicDemux.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    if (!$util.isString(message.dataType))
                        return "dataType: string expected";
                if (message.outputTopicFormat != null && message.hasOwnProperty("outputTopicFormat"))
                    if (!$util.isString(message.outputTopicFormat))
                        return "outputTopicFormat: string expected";
                return null;
            };

            /**
             * Creates a TopicDemux message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.devices.TopicDemux
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.devices.TopicDemux} TopicDemux
             */
            TopicDemux.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.devices.TopicDemux)
                    return object;
                var message = new $root.ubii.devices.TopicDemux();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.dataType != null)
                    message.dataType = String(object.dataType);
                if (object.outputTopicFormat != null)
                    message.outputTopicFormat = String(object.outputTopicFormat);
                return message;
            };

            /**
             * Creates a plain object from a TopicDemux message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.devices.TopicDemux
             * @static
             * @param {ubii.devices.TopicDemux} message TopicDemux
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TopicDemux.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.dataType = "";
                    object.outputTopicFormat = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    object.dataType = message.dataType;
                if (message.outputTopicFormat != null && message.hasOwnProperty("outputTopicFormat"))
                    object.outputTopicFormat = message.outputTopicFormat;
                return object;
            };

            /**
             * Converts this TopicDemux to JSON.
             * @function toJSON
             * @memberof ubii.devices.TopicDemux
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TopicDemux.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TopicDemux;
        })();

        devices.TopicDemuxList = (function() {

            /**
             * Properties of a TopicDemuxList.
             * @memberof ubii.devices
             * @interface ITopicDemuxList
             * @property {Array.<ubii.devices.ITopicDemux>|null} [elements] TopicDemuxList elements
             */

            /**
             * Constructs a new TopicDemuxList.
             * @memberof ubii.devices
             * @classdesc Represents a TopicDemuxList.
             * @implements ITopicDemuxList
             * @constructor
             * @param {ubii.devices.ITopicDemuxList=} [properties] Properties to set
             */
            function TopicDemuxList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TopicDemuxList elements.
             * @member {Array.<ubii.devices.ITopicDemux>} elements
             * @memberof ubii.devices.TopicDemuxList
             * @instance
             */
            TopicDemuxList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new TopicDemuxList instance using the specified properties.
             * @function create
             * @memberof ubii.devices.TopicDemuxList
             * @static
             * @param {ubii.devices.ITopicDemuxList=} [properties] Properties to set
             * @returns {ubii.devices.TopicDemuxList} TopicDemuxList instance
             */
            TopicDemuxList.create = function create(properties) {
                return new TopicDemuxList(properties);
            };

            /**
             * Encodes the specified TopicDemuxList message. Does not implicitly {@link ubii.devices.TopicDemuxList.verify|verify} messages.
             * @function encode
             * @memberof ubii.devices.TopicDemuxList
             * @static
             * @param {ubii.devices.ITopicDemuxList} message TopicDemuxList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicDemuxList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.devices.TopicDemux.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TopicDemuxList message, length delimited. Does not implicitly {@link ubii.devices.TopicDemuxList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.devices.TopicDemuxList
             * @static
             * @param {ubii.devices.ITopicDemuxList} message TopicDemuxList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicDemuxList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TopicDemuxList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.devices.TopicDemuxList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.devices.TopicDemuxList} TopicDemuxList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicDemuxList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.devices.TopicDemuxList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.devices.TopicDemux.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TopicDemuxList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.devices.TopicDemuxList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.devices.TopicDemuxList} TopicDemuxList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicDemuxList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TopicDemuxList message.
             * @function verify
             * @memberof ubii.devices.TopicDemuxList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TopicDemuxList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.devices.TopicDemux.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TopicDemuxList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.devices.TopicDemuxList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.devices.TopicDemuxList} TopicDemuxList
             */
            TopicDemuxList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.devices.TopicDemuxList)
                    return object;
                var message = new $root.ubii.devices.TopicDemuxList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.devices.TopicDemuxList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.devices.TopicDemuxList.elements: object expected");
                        message.elements[i] = $root.ubii.devices.TopicDemux.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a TopicDemuxList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.devices.TopicDemuxList
             * @static
             * @param {ubii.devices.TopicDemuxList} message TopicDemuxList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TopicDemuxList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.devices.TopicDemux.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this TopicDemuxList to JSON.
             * @function toJSON
             * @memberof ubii.devices.TopicDemuxList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TopicDemuxList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TopicDemuxList;
        })();

        devices.TopicMux = (function() {

            /**
             * Properties of a TopicMux.
             * @memberof ubii.devices
             * @interface ITopicMux
             * @property {string|null} [id] TopicMux id
             * @property {string|null} [name] TopicMux name
             * @property {string|null} [dataType] TopicMux dataType
             * @property {string|null} [topicSelector] TopicMux topicSelector
             * @property {string|null} [identityMatchPattern] TopicMux identityMatchPattern
             */

            /**
             * Constructs a new TopicMux.
             * @memberof ubii.devices
             * @classdesc Represents a TopicMux.
             * @implements ITopicMux
             * @constructor
             * @param {ubii.devices.ITopicMux=} [properties] Properties to set
             */
            function TopicMux(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TopicMux id.
             * @member {string} id
             * @memberof ubii.devices.TopicMux
             * @instance
             */
            TopicMux.prototype.id = "";

            /**
             * TopicMux name.
             * @member {string} name
             * @memberof ubii.devices.TopicMux
             * @instance
             */
            TopicMux.prototype.name = "";

            /**
             * TopicMux dataType.
             * @member {string} dataType
             * @memberof ubii.devices.TopicMux
             * @instance
             */
            TopicMux.prototype.dataType = "";

            /**
             * TopicMux topicSelector.
             * @member {string} topicSelector
             * @memberof ubii.devices.TopicMux
             * @instance
             */
            TopicMux.prototype.topicSelector = "";

            /**
             * TopicMux identityMatchPattern.
             * @member {string} identityMatchPattern
             * @memberof ubii.devices.TopicMux
             * @instance
             */
            TopicMux.prototype.identityMatchPattern = "";

            /**
             * Creates a new TopicMux instance using the specified properties.
             * @function create
             * @memberof ubii.devices.TopicMux
             * @static
             * @param {ubii.devices.ITopicMux=} [properties] Properties to set
             * @returns {ubii.devices.TopicMux} TopicMux instance
             */
            TopicMux.create = function create(properties) {
                return new TopicMux(properties);
            };

            /**
             * Encodes the specified TopicMux message. Does not implicitly {@link ubii.devices.TopicMux.verify|verify} messages.
             * @function encode
             * @memberof ubii.devices.TopicMux
             * @static
             * @param {ubii.devices.ITopicMux} message TopicMux message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicMux.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.dataType);
                if (message.topicSelector != null && message.hasOwnProperty("topicSelector"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.topicSelector);
                if (message.identityMatchPattern != null && message.hasOwnProperty("identityMatchPattern"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.identityMatchPattern);
                return writer;
            };

            /**
             * Encodes the specified TopicMux message, length delimited. Does not implicitly {@link ubii.devices.TopicMux.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.devices.TopicMux
             * @static
             * @param {ubii.devices.ITopicMux} message TopicMux message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicMux.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TopicMux message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.devices.TopicMux
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.devices.TopicMux} TopicMux
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicMux.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.devices.TopicMux();
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
                        message.dataType = reader.string();
                        break;
                    case 4:
                        message.topicSelector = reader.string();
                        break;
                    case 5:
                        message.identityMatchPattern = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TopicMux message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.devices.TopicMux
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.devices.TopicMux} TopicMux
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicMux.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TopicMux message.
             * @function verify
             * @memberof ubii.devices.TopicMux
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TopicMux.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    if (!$util.isString(message.dataType))
                        return "dataType: string expected";
                if (message.topicSelector != null && message.hasOwnProperty("topicSelector"))
                    if (!$util.isString(message.topicSelector))
                        return "topicSelector: string expected";
                if (message.identityMatchPattern != null && message.hasOwnProperty("identityMatchPattern"))
                    if (!$util.isString(message.identityMatchPattern))
                        return "identityMatchPattern: string expected";
                return null;
            };

            /**
             * Creates a TopicMux message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.devices.TopicMux
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.devices.TopicMux} TopicMux
             */
            TopicMux.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.devices.TopicMux)
                    return object;
                var message = new $root.ubii.devices.TopicMux();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.dataType != null)
                    message.dataType = String(object.dataType);
                if (object.topicSelector != null)
                    message.topicSelector = String(object.topicSelector);
                if (object.identityMatchPattern != null)
                    message.identityMatchPattern = String(object.identityMatchPattern);
                return message;
            };

            /**
             * Creates a plain object from a TopicMux message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.devices.TopicMux
             * @static
             * @param {ubii.devices.TopicMux} message TopicMux
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TopicMux.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.dataType = "";
                    object.topicSelector = "";
                    object.identityMatchPattern = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.dataType != null && message.hasOwnProperty("dataType"))
                    object.dataType = message.dataType;
                if (message.topicSelector != null && message.hasOwnProperty("topicSelector"))
                    object.topicSelector = message.topicSelector;
                if (message.identityMatchPattern != null && message.hasOwnProperty("identityMatchPattern"))
                    object.identityMatchPattern = message.identityMatchPattern;
                return object;
            };

            /**
             * Converts this TopicMux to JSON.
             * @function toJSON
             * @memberof ubii.devices.TopicMux
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TopicMux.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TopicMux;
        })();

        devices.TopicMuxList = (function() {

            /**
             * Properties of a TopicMuxList.
             * @memberof ubii.devices
             * @interface ITopicMuxList
             * @property {Array.<ubii.devices.ITopicMux>|null} [elements] TopicMuxList elements
             */

            /**
             * Constructs a new TopicMuxList.
             * @memberof ubii.devices
             * @classdesc Represents a TopicMuxList.
             * @implements ITopicMuxList
             * @constructor
             * @param {ubii.devices.ITopicMuxList=} [properties] Properties to set
             */
            function TopicMuxList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TopicMuxList elements.
             * @member {Array.<ubii.devices.ITopicMux>} elements
             * @memberof ubii.devices.TopicMuxList
             * @instance
             */
            TopicMuxList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new TopicMuxList instance using the specified properties.
             * @function create
             * @memberof ubii.devices.TopicMuxList
             * @static
             * @param {ubii.devices.ITopicMuxList=} [properties] Properties to set
             * @returns {ubii.devices.TopicMuxList} TopicMuxList instance
             */
            TopicMuxList.create = function create(properties) {
                return new TopicMuxList(properties);
            };

            /**
             * Encodes the specified TopicMuxList message. Does not implicitly {@link ubii.devices.TopicMuxList.verify|verify} messages.
             * @function encode
             * @memberof ubii.devices.TopicMuxList
             * @static
             * @param {ubii.devices.ITopicMuxList} message TopicMuxList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicMuxList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.devices.TopicMux.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TopicMuxList message, length delimited. Does not implicitly {@link ubii.devices.TopicMuxList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.devices.TopicMuxList
             * @static
             * @param {ubii.devices.ITopicMuxList} message TopicMuxList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicMuxList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TopicMuxList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.devices.TopicMuxList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.devices.TopicMuxList} TopicMuxList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicMuxList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.devices.TopicMuxList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.devices.TopicMux.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TopicMuxList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.devices.TopicMuxList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.devices.TopicMuxList} TopicMuxList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicMuxList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TopicMuxList message.
             * @function verify
             * @memberof ubii.devices.TopicMuxList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TopicMuxList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.devices.TopicMux.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TopicMuxList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.devices.TopicMuxList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.devices.TopicMuxList} TopicMuxList
             */
            TopicMuxList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.devices.TopicMuxList)
                    return object;
                var message = new $root.ubii.devices.TopicMuxList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.devices.TopicMuxList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.devices.TopicMuxList.elements: object expected");
                        message.elements[i] = $root.ubii.devices.TopicMux.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a TopicMuxList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.devices.TopicMuxList
             * @static
             * @param {ubii.devices.TopicMuxList} message TopicMuxList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TopicMuxList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.devices.TopicMux.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this TopicMuxList to JSON.
             * @function toJSON
             * @memberof ubii.devices.TopicMuxList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TopicMuxList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TopicMuxList;
        })();

        return devices;
    })();

    ubii.general = (function() {

        /**
         * Namespace general.
         * @memberof ubii
         * @namespace
         */
        var general = {};

        general.Error = (function() {

            /**
             * Properties of an Error.
             * @memberof ubii.general
             * @interface IError
             * @property {string|null} [title] Error title
             * @property {string|null} [message] Error message
             * @property {string|null} [stack] Error stack
             */

            /**
             * Constructs a new Error.
             * @memberof ubii.general
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {ubii.general.IError=} [properties] Properties to set
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
             * @memberof ubii.general.Error
             * @instance
             */
            Error.prototype.title = "";

            /**
             * Error message.
             * @member {string} message
             * @memberof ubii.general.Error
             * @instance
             */
            Error.prototype.message = "";

            /**
             * Error stack.
             * @member {string} stack
             * @memberof ubii.general.Error
             * @instance
             */
            Error.prototype.stack = "";

            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof ubii.general.Error
             * @static
             * @param {ubii.general.IError=} [properties] Properties to set
             * @returns {ubii.general.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };

            /**
             * Encodes the specified Error message. Does not implicitly {@link ubii.general.Error.verify|verify} messages.
             * @function encode
             * @memberof ubii.general.Error
             * @static
             * @param {ubii.general.IError} message Error message or plain object to encode
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
             * Encodes the specified Error message, length delimited. Does not implicitly {@link ubii.general.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.general.Error
             * @static
             * @param {ubii.general.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.general.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.general.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.general.Error();
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
             * @memberof ubii.general.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.general.Error} Error
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
             * @memberof ubii.general.Error
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
             * @memberof ubii.general.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.general.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.general.Error)
                    return object;
                var message = new $root.ubii.general.Error();
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
             * @memberof ubii.general.Error
             * @static
             * @param {ubii.general.Error} message Error
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
             * @memberof ubii.general.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Error;
        })();

        general.Success = (function() {

            /**
             * Properties of a Success.
             * @memberof ubii.general
             * @interface ISuccess
             * @property {string|null} [title] Success title
             * @property {string|null} [message] Success message
             */

            /**
             * Constructs a new Success.
             * @memberof ubii.general
             * @classdesc Represents a Success.
             * @implements ISuccess
             * @constructor
             * @param {ubii.general.ISuccess=} [properties] Properties to set
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
             * @memberof ubii.general.Success
             * @instance
             */
            Success.prototype.title = "";

            /**
             * Success message.
             * @member {string} message
             * @memberof ubii.general.Success
             * @instance
             */
            Success.prototype.message = "";

            /**
             * Creates a new Success instance using the specified properties.
             * @function create
             * @memberof ubii.general.Success
             * @static
             * @param {ubii.general.ISuccess=} [properties] Properties to set
             * @returns {ubii.general.Success} Success instance
             */
            Success.create = function create(properties) {
                return new Success(properties);
            };

            /**
             * Encodes the specified Success message. Does not implicitly {@link ubii.general.Success.verify|verify} messages.
             * @function encode
             * @memberof ubii.general.Success
             * @static
             * @param {ubii.general.ISuccess} message Success message or plain object to encode
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
             * Encodes the specified Success message, length delimited. Does not implicitly {@link ubii.general.Success.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.general.Success
             * @static
             * @param {ubii.general.ISuccess} message Success message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Success.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Success message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.general.Success
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.general.Success} Success
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Success.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.general.Success();
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
             * @memberof ubii.general.Success
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.general.Success} Success
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
             * @memberof ubii.general.Success
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
             * @memberof ubii.general.Success
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.general.Success} Success
             */
            Success.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.general.Success)
                    return object;
                var message = new $root.ubii.general.Success();
                if (object.title != null)
                    message.title = String(object.title);
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a Success message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.general.Success
             * @static
             * @param {ubii.general.Success} message Success
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
             * @memberof ubii.general.Success
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Success.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Success;
        })();

        return general;
    })();

    ubii.processing = (function() {

        /**
         * Namespace processing.
         * @memberof ubii
         * @namespace
         */
        var processing = {};

        processing.LockstepProcessingRequest = (function() {

            /**
             * Properties of a LockstepProcessingRequest.
             * @memberof ubii.processing
             * @interface ILockstepProcessingRequest
             * @property {ubii.topicData.ITopicDataRecordList|null} [records] LockstepProcessingRequest records
             * @property {number|null} [deltaTimeMs] LockstepProcessingRequest deltaTimeMs
             */

            /**
             * Constructs a new LockstepProcessingRequest.
             * @memberof ubii.processing
             * @classdesc Represents a LockstepProcessingRequest.
             * @implements ILockstepProcessingRequest
             * @constructor
             * @param {ubii.processing.ILockstepProcessingRequest=} [properties] Properties to set
             */
            function LockstepProcessingRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LockstepProcessingRequest records.
             * @member {ubii.topicData.ITopicDataRecordList|null|undefined} records
             * @memberof ubii.processing.LockstepProcessingRequest
             * @instance
             */
            LockstepProcessingRequest.prototype.records = null;

            /**
             * LockstepProcessingRequest deltaTimeMs.
             * @member {number} deltaTimeMs
             * @memberof ubii.processing.LockstepProcessingRequest
             * @instance
             */
            LockstepProcessingRequest.prototype.deltaTimeMs = 0;

            /**
             * Creates a new LockstepProcessingRequest instance using the specified properties.
             * @function create
             * @memberof ubii.processing.LockstepProcessingRequest
             * @static
             * @param {ubii.processing.ILockstepProcessingRequest=} [properties] Properties to set
             * @returns {ubii.processing.LockstepProcessingRequest} LockstepProcessingRequest instance
             */
            LockstepProcessingRequest.create = function create(properties) {
                return new LockstepProcessingRequest(properties);
            };

            /**
             * Encodes the specified LockstepProcessingRequest message. Does not implicitly {@link ubii.processing.LockstepProcessingRequest.verify|verify} messages.
             * @function encode
             * @memberof ubii.processing.LockstepProcessingRequest
             * @static
             * @param {ubii.processing.ILockstepProcessingRequest} message LockstepProcessingRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LockstepProcessingRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.records != null && message.hasOwnProperty("records"))
                    $root.ubii.topicData.TopicDataRecordList.encode(message.records, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.deltaTimeMs != null && message.hasOwnProperty("deltaTimeMs"))
                    writer.uint32(/* id 2, wireType 5 =*/21).float(message.deltaTimeMs);
                return writer;
            };

            /**
             * Encodes the specified LockstepProcessingRequest message, length delimited. Does not implicitly {@link ubii.processing.LockstepProcessingRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.processing.LockstepProcessingRequest
             * @static
             * @param {ubii.processing.ILockstepProcessingRequest} message LockstepProcessingRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LockstepProcessingRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LockstepProcessingRequest message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.processing.LockstepProcessingRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.processing.LockstepProcessingRequest} LockstepProcessingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LockstepProcessingRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.processing.LockstepProcessingRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.records = $root.ubii.topicData.TopicDataRecordList.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.deltaTimeMs = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LockstepProcessingRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.processing.LockstepProcessingRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.processing.LockstepProcessingRequest} LockstepProcessingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LockstepProcessingRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LockstepProcessingRequest message.
             * @function verify
             * @memberof ubii.processing.LockstepProcessingRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LockstepProcessingRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.records != null && message.hasOwnProperty("records")) {
                    var error = $root.ubii.topicData.TopicDataRecordList.verify(message.records);
                    if (error)
                        return "records." + error;
                }
                if (message.deltaTimeMs != null && message.hasOwnProperty("deltaTimeMs"))
                    if (typeof message.deltaTimeMs !== "number")
                        return "deltaTimeMs: number expected";
                return null;
            };

            /**
             * Creates a LockstepProcessingRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.processing.LockstepProcessingRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.processing.LockstepProcessingRequest} LockstepProcessingRequest
             */
            LockstepProcessingRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.processing.LockstepProcessingRequest)
                    return object;
                var message = new $root.ubii.processing.LockstepProcessingRequest();
                if (object.records != null) {
                    if (typeof object.records !== "object")
                        throw TypeError(".ubii.processing.LockstepProcessingRequest.records: object expected");
                    message.records = $root.ubii.topicData.TopicDataRecordList.fromObject(object.records);
                }
                if (object.deltaTimeMs != null)
                    message.deltaTimeMs = Number(object.deltaTimeMs);
                return message;
            };

            /**
             * Creates a plain object from a LockstepProcessingRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.processing.LockstepProcessingRequest
             * @static
             * @param {ubii.processing.LockstepProcessingRequest} message LockstepProcessingRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LockstepProcessingRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.records = null;
                    object.deltaTimeMs = 0;
                }
                if (message.records != null && message.hasOwnProperty("records"))
                    object.records = $root.ubii.topicData.TopicDataRecordList.toObject(message.records, options);
                if (message.deltaTimeMs != null && message.hasOwnProperty("deltaTimeMs"))
                    object.deltaTimeMs = options.json && !isFinite(message.deltaTimeMs) ? String(message.deltaTimeMs) : message.deltaTimeMs;
                return object;
            };

            /**
             * Converts this LockstepProcessingRequest to JSON.
             * @function toJSON
             * @memberof ubii.processing.LockstepProcessingRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LockstepProcessingRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LockstepProcessingRequest;
        })();

        processing.LockstepProcessingReply = (function() {

            /**
             * Properties of a LockstepProcessingReply.
             * @memberof ubii.processing
             * @interface ILockstepProcessingReply
             * @property {ubii.topicData.ITopicDataRecordList|null} [records] LockstepProcessingReply records
             */

            /**
             * Constructs a new LockstepProcessingReply.
             * @memberof ubii.processing
             * @classdesc Represents a LockstepProcessingReply.
             * @implements ILockstepProcessingReply
             * @constructor
             * @param {ubii.processing.ILockstepProcessingReply=} [properties] Properties to set
             */
            function LockstepProcessingReply(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LockstepProcessingReply records.
             * @member {ubii.topicData.ITopicDataRecordList|null|undefined} records
             * @memberof ubii.processing.LockstepProcessingReply
             * @instance
             */
            LockstepProcessingReply.prototype.records = null;

            /**
             * Creates a new LockstepProcessingReply instance using the specified properties.
             * @function create
             * @memberof ubii.processing.LockstepProcessingReply
             * @static
             * @param {ubii.processing.ILockstepProcessingReply=} [properties] Properties to set
             * @returns {ubii.processing.LockstepProcessingReply} LockstepProcessingReply instance
             */
            LockstepProcessingReply.create = function create(properties) {
                return new LockstepProcessingReply(properties);
            };

            /**
             * Encodes the specified LockstepProcessingReply message. Does not implicitly {@link ubii.processing.LockstepProcessingReply.verify|verify} messages.
             * @function encode
             * @memberof ubii.processing.LockstepProcessingReply
             * @static
             * @param {ubii.processing.ILockstepProcessingReply} message LockstepProcessingReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LockstepProcessingReply.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.records != null && message.hasOwnProperty("records"))
                    $root.ubii.topicData.TopicDataRecordList.encode(message.records, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified LockstepProcessingReply message, length delimited. Does not implicitly {@link ubii.processing.LockstepProcessingReply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.processing.LockstepProcessingReply
             * @static
             * @param {ubii.processing.ILockstepProcessingReply} message LockstepProcessingReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LockstepProcessingReply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LockstepProcessingReply message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.processing.LockstepProcessingReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.processing.LockstepProcessingReply} LockstepProcessingReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LockstepProcessingReply.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.processing.LockstepProcessingReply();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.records = $root.ubii.topicData.TopicDataRecordList.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LockstepProcessingReply message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.processing.LockstepProcessingReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.processing.LockstepProcessingReply} LockstepProcessingReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LockstepProcessingReply.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LockstepProcessingReply message.
             * @function verify
             * @memberof ubii.processing.LockstepProcessingReply
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LockstepProcessingReply.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.records != null && message.hasOwnProperty("records")) {
                    var error = $root.ubii.topicData.TopicDataRecordList.verify(message.records);
                    if (error)
                        return "records." + error;
                }
                return null;
            };

            /**
             * Creates a LockstepProcessingReply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.processing.LockstepProcessingReply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.processing.LockstepProcessingReply} LockstepProcessingReply
             */
            LockstepProcessingReply.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.processing.LockstepProcessingReply)
                    return object;
                var message = new $root.ubii.processing.LockstepProcessingReply();
                if (object.records != null) {
                    if (typeof object.records !== "object")
                        throw TypeError(".ubii.processing.LockstepProcessingReply.records: object expected");
                    message.records = $root.ubii.topicData.TopicDataRecordList.fromObject(object.records);
                }
                return message;
            };

            /**
             * Creates a plain object from a LockstepProcessingReply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.processing.LockstepProcessingReply
             * @static
             * @param {ubii.processing.LockstepProcessingReply} message LockstepProcessingReply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LockstepProcessingReply.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.records = null;
                if (message.records != null && message.hasOwnProperty("records"))
                    object.records = $root.ubii.topicData.TopicDataRecordList.toObject(message.records, options);
                return object;
            };

            /**
             * Converts this LockstepProcessingReply to JSON.
             * @function toJSON
             * @memberof ubii.processing.LockstepProcessingReply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LockstepProcessingReply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LockstepProcessingReply;
        })();

        processing.ProcessingMode = (function() {

            /**
             * Properties of a ProcessingMode.
             * @memberof ubii.processing
             * @interface IProcessingMode
             * @property {ubii.processing.ProcessingMode.IFrequency|null} [frequency] ProcessingMode frequency
             * @property {ubii.processing.ProcessingMode.ILockstep|null} [lockstep] ProcessingMode lockstep
             * @property {ubii.processing.ProcessingMode.ITriggerOnInput|null} [triggerOnInput] ProcessingMode triggerOnInput
             */

            /**
             * Constructs a new ProcessingMode.
             * @memberof ubii.processing
             * @classdesc Represents a ProcessingMode.
             * @implements IProcessingMode
             * @constructor
             * @param {ubii.processing.IProcessingMode=} [properties] Properties to set
             */
            function ProcessingMode(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ProcessingMode frequency.
             * @member {ubii.processing.ProcessingMode.IFrequency|null|undefined} frequency
             * @memberof ubii.processing.ProcessingMode
             * @instance
             */
            ProcessingMode.prototype.frequency = null;

            /**
             * ProcessingMode lockstep.
             * @member {ubii.processing.ProcessingMode.ILockstep|null|undefined} lockstep
             * @memberof ubii.processing.ProcessingMode
             * @instance
             */
            ProcessingMode.prototype.lockstep = null;

            /**
             * ProcessingMode triggerOnInput.
             * @member {ubii.processing.ProcessingMode.ITriggerOnInput|null|undefined} triggerOnInput
             * @memberof ubii.processing.ProcessingMode
             * @instance
             */
            ProcessingMode.prototype.triggerOnInput = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * ProcessingMode mode.
             * @member {"frequency"|"lockstep"|"triggerOnInput"|undefined} mode
             * @memberof ubii.processing.ProcessingMode
             * @instance
             */
            Object.defineProperty(ProcessingMode.prototype, "mode", {
                get: $util.oneOfGetter($oneOfFields = ["frequency", "lockstep", "triggerOnInput"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ProcessingMode instance using the specified properties.
             * @function create
             * @memberof ubii.processing.ProcessingMode
             * @static
             * @param {ubii.processing.IProcessingMode=} [properties] Properties to set
             * @returns {ubii.processing.ProcessingMode} ProcessingMode instance
             */
            ProcessingMode.create = function create(properties) {
                return new ProcessingMode(properties);
            };

            /**
             * Encodes the specified ProcessingMode message. Does not implicitly {@link ubii.processing.ProcessingMode.verify|verify} messages.
             * @function encode
             * @memberof ubii.processing.ProcessingMode
             * @static
             * @param {ubii.processing.IProcessingMode} message ProcessingMode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProcessingMode.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.frequency != null && message.hasOwnProperty("frequency"))
                    $root.ubii.processing.ProcessingMode.Frequency.encode(message.frequency, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.lockstep != null && message.hasOwnProperty("lockstep"))
                    $root.ubii.processing.ProcessingMode.Lockstep.encode(message.lockstep, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.triggerOnInput != null && message.hasOwnProperty("triggerOnInput"))
                    $root.ubii.processing.ProcessingMode.TriggerOnInput.encode(message.triggerOnInput, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ProcessingMode message, length delimited. Does not implicitly {@link ubii.processing.ProcessingMode.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.processing.ProcessingMode
             * @static
             * @param {ubii.processing.IProcessingMode} message ProcessingMode message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProcessingMode.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ProcessingMode message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.processing.ProcessingMode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.processing.ProcessingMode} ProcessingMode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProcessingMode.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.processing.ProcessingMode();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.frequency = $root.ubii.processing.ProcessingMode.Frequency.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.lockstep = $root.ubii.processing.ProcessingMode.Lockstep.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.triggerOnInput = $root.ubii.processing.ProcessingMode.TriggerOnInput.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ProcessingMode message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.processing.ProcessingMode
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.processing.ProcessingMode} ProcessingMode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProcessingMode.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ProcessingMode message.
             * @function verify
             * @memberof ubii.processing.ProcessingMode
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ProcessingMode.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.frequency != null && message.hasOwnProperty("frequency")) {
                    properties.mode = 1;
                    {
                        var error = $root.ubii.processing.ProcessingMode.Frequency.verify(message.frequency);
                        if (error)
                            return "frequency." + error;
                    }
                }
                if (message.lockstep != null && message.hasOwnProperty("lockstep")) {
                    if (properties.mode === 1)
                        return "mode: multiple values";
                    properties.mode = 1;
                    {
                        var error = $root.ubii.processing.ProcessingMode.Lockstep.verify(message.lockstep);
                        if (error)
                            return "lockstep." + error;
                    }
                }
                if (message.triggerOnInput != null && message.hasOwnProperty("triggerOnInput")) {
                    if (properties.mode === 1)
                        return "mode: multiple values";
                    properties.mode = 1;
                    {
                        var error = $root.ubii.processing.ProcessingMode.TriggerOnInput.verify(message.triggerOnInput);
                        if (error)
                            return "triggerOnInput." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ProcessingMode message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.processing.ProcessingMode
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.processing.ProcessingMode} ProcessingMode
             */
            ProcessingMode.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.processing.ProcessingMode)
                    return object;
                var message = new $root.ubii.processing.ProcessingMode();
                if (object.frequency != null) {
                    if (typeof object.frequency !== "object")
                        throw TypeError(".ubii.processing.ProcessingMode.frequency: object expected");
                    message.frequency = $root.ubii.processing.ProcessingMode.Frequency.fromObject(object.frequency);
                }
                if (object.lockstep != null) {
                    if (typeof object.lockstep !== "object")
                        throw TypeError(".ubii.processing.ProcessingMode.lockstep: object expected");
                    message.lockstep = $root.ubii.processing.ProcessingMode.Lockstep.fromObject(object.lockstep);
                }
                if (object.triggerOnInput != null) {
                    if (typeof object.triggerOnInput !== "object")
                        throw TypeError(".ubii.processing.ProcessingMode.triggerOnInput: object expected");
                    message.triggerOnInput = $root.ubii.processing.ProcessingMode.TriggerOnInput.fromObject(object.triggerOnInput);
                }
                return message;
            };

            /**
             * Creates a plain object from a ProcessingMode message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.processing.ProcessingMode
             * @static
             * @param {ubii.processing.ProcessingMode} message ProcessingMode
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ProcessingMode.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.frequency != null && message.hasOwnProperty("frequency")) {
                    object.frequency = $root.ubii.processing.ProcessingMode.Frequency.toObject(message.frequency, options);
                    if (options.oneofs)
                        object.mode = "frequency";
                }
                if (message.lockstep != null && message.hasOwnProperty("lockstep")) {
                    object.lockstep = $root.ubii.processing.ProcessingMode.Lockstep.toObject(message.lockstep, options);
                    if (options.oneofs)
                        object.mode = "lockstep";
                }
                if (message.triggerOnInput != null && message.hasOwnProperty("triggerOnInput")) {
                    object.triggerOnInput = $root.ubii.processing.ProcessingMode.TriggerOnInput.toObject(message.triggerOnInput, options);
                    if (options.oneofs)
                        object.mode = "triggerOnInput";
                }
                return object;
            };

            /**
             * Converts this ProcessingMode to JSON.
             * @function toJSON
             * @memberof ubii.processing.ProcessingMode
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ProcessingMode.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            ProcessingMode.Frequency = (function() {

                /**
                 * Properties of a Frequency.
                 * @memberof ubii.processing.ProcessingMode
                 * @interface IFrequency
                 * @property {number|null} [hertz] Frequency hertz
                 */

                /**
                 * Constructs a new Frequency.
                 * @memberof ubii.processing.ProcessingMode
                 * @classdesc Represents a Frequency.
                 * @implements IFrequency
                 * @constructor
                 * @param {ubii.processing.ProcessingMode.IFrequency=} [properties] Properties to set
                 */
                function Frequency(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Frequency hertz.
                 * @member {number} hertz
                 * @memberof ubii.processing.ProcessingMode.Frequency
                 * @instance
                 */
                Frequency.prototype.hertz = 0;

                /**
                 * Creates a new Frequency instance using the specified properties.
                 * @function create
                 * @memberof ubii.processing.ProcessingMode.Frequency
                 * @static
                 * @param {ubii.processing.ProcessingMode.IFrequency=} [properties] Properties to set
                 * @returns {ubii.processing.ProcessingMode.Frequency} Frequency instance
                 */
                Frequency.create = function create(properties) {
                    return new Frequency(properties);
                };

                /**
                 * Encodes the specified Frequency message. Does not implicitly {@link ubii.processing.ProcessingMode.Frequency.verify|verify} messages.
                 * @function encode
                 * @memberof ubii.processing.ProcessingMode.Frequency
                 * @static
                 * @param {ubii.processing.ProcessingMode.IFrequency} message Frequency message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Frequency.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.hertz != null && message.hasOwnProperty("hertz"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.hertz);
                    return writer;
                };

                /**
                 * Encodes the specified Frequency message, length delimited. Does not implicitly {@link ubii.processing.ProcessingMode.Frequency.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ubii.processing.ProcessingMode.Frequency
                 * @static
                 * @param {ubii.processing.ProcessingMode.IFrequency} message Frequency message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Frequency.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Frequency message from the specified reader or buffer.
                 * @function decode
                 * @memberof ubii.processing.ProcessingMode.Frequency
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ubii.processing.ProcessingMode.Frequency} Frequency
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Frequency.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.processing.ProcessingMode.Frequency();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.hertz = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Frequency message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ubii.processing.ProcessingMode.Frequency
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ubii.processing.ProcessingMode.Frequency} Frequency
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Frequency.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Frequency message.
                 * @function verify
                 * @memberof ubii.processing.ProcessingMode.Frequency
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Frequency.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.hertz != null && message.hasOwnProperty("hertz"))
                        if (!$util.isInteger(message.hertz))
                            return "hertz: integer expected";
                    return null;
                };

                /**
                 * Creates a Frequency message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ubii.processing.ProcessingMode.Frequency
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ubii.processing.ProcessingMode.Frequency} Frequency
                 */
                Frequency.fromObject = function fromObject(object) {
                    if (object instanceof $root.ubii.processing.ProcessingMode.Frequency)
                        return object;
                    var message = new $root.ubii.processing.ProcessingMode.Frequency();
                    if (object.hertz != null)
                        message.hertz = object.hertz | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a Frequency message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ubii.processing.ProcessingMode.Frequency
                 * @static
                 * @param {ubii.processing.ProcessingMode.Frequency} message Frequency
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Frequency.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.hertz = 0;
                    if (message.hertz != null && message.hasOwnProperty("hertz"))
                        object.hertz = message.hertz;
                    return object;
                };

                /**
                 * Converts this Frequency to JSON.
                 * @function toJSON
                 * @memberof ubii.processing.ProcessingMode.Frequency
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Frequency.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Frequency;
            })();

            ProcessingMode.Lockstep = (function() {

                /**
                 * Properties of a Lockstep.
                 * @memberof ubii.processing.ProcessingMode
                 * @interface ILockstep
                 * @property {string|null} [processRequestEndpoint] Lockstep processRequestEndpoint
                 */

                /**
                 * Constructs a new Lockstep.
                 * @memberof ubii.processing.ProcessingMode
                 * @classdesc Represents a Lockstep.
                 * @implements ILockstep
                 * @constructor
                 * @param {ubii.processing.ProcessingMode.ILockstep=} [properties] Properties to set
                 */
                function Lockstep(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Lockstep processRequestEndpoint.
                 * @member {string} processRequestEndpoint
                 * @memberof ubii.processing.ProcessingMode.Lockstep
                 * @instance
                 */
                Lockstep.prototype.processRequestEndpoint = "";

                /**
                 * Creates a new Lockstep instance using the specified properties.
                 * @function create
                 * @memberof ubii.processing.ProcessingMode.Lockstep
                 * @static
                 * @param {ubii.processing.ProcessingMode.ILockstep=} [properties] Properties to set
                 * @returns {ubii.processing.ProcessingMode.Lockstep} Lockstep instance
                 */
                Lockstep.create = function create(properties) {
                    return new Lockstep(properties);
                };

                /**
                 * Encodes the specified Lockstep message. Does not implicitly {@link ubii.processing.ProcessingMode.Lockstep.verify|verify} messages.
                 * @function encode
                 * @memberof ubii.processing.ProcessingMode.Lockstep
                 * @static
                 * @param {ubii.processing.ProcessingMode.ILockstep} message Lockstep message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Lockstep.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.processRequestEndpoint != null && message.hasOwnProperty("processRequestEndpoint"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.processRequestEndpoint);
                    return writer;
                };

                /**
                 * Encodes the specified Lockstep message, length delimited. Does not implicitly {@link ubii.processing.ProcessingMode.Lockstep.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ubii.processing.ProcessingMode.Lockstep
                 * @static
                 * @param {ubii.processing.ProcessingMode.ILockstep} message Lockstep message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Lockstep.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Lockstep message from the specified reader or buffer.
                 * @function decode
                 * @memberof ubii.processing.ProcessingMode.Lockstep
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ubii.processing.ProcessingMode.Lockstep} Lockstep
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Lockstep.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.processing.ProcessingMode.Lockstep();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.processRequestEndpoint = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Lockstep message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ubii.processing.ProcessingMode.Lockstep
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ubii.processing.ProcessingMode.Lockstep} Lockstep
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Lockstep.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Lockstep message.
                 * @function verify
                 * @memberof ubii.processing.ProcessingMode.Lockstep
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Lockstep.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.processRequestEndpoint != null && message.hasOwnProperty("processRequestEndpoint"))
                        if (!$util.isString(message.processRequestEndpoint))
                            return "processRequestEndpoint: string expected";
                    return null;
                };

                /**
                 * Creates a Lockstep message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ubii.processing.ProcessingMode.Lockstep
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ubii.processing.ProcessingMode.Lockstep} Lockstep
                 */
                Lockstep.fromObject = function fromObject(object) {
                    if (object instanceof $root.ubii.processing.ProcessingMode.Lockstep)
                        return object;
                    var message = new $root.ubii.processing.ProcessingMode.Lockstep();
                    if (object.processRequestEndpoint != null)
                        message.processRequestEndpoint = String(object.processRequestEndpoint);
                    return message;
                };

                /**
                 * Creates a plain object from a Lockstep message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ubii.processing.ProcessingMode.Lockstep
                 * @static
                 * @param {ubii.processing.ProcessingMode.Lockstep} message Lockstep
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Lockstep.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.processRequestEndpoint = "";
                    if (message.processRequestEndpoint != null && message.hasOwnProperty("processRequestEndpoint"))
                        object.processRequestEndpoint = message.processRequestEndpoint;
                    return object;
                };

                /**
                 * Converts this Lockstep to JSON.
                 * @function toJSON
                 * @memberof ubii.processing.ProcessingMode.Lockstep
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Lockstep.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Lockstep;
            })();

            ProcessingMode.TriggerOnInput = (function() {

                /**
                 * Properties of a TriggerOnInput.
                 * @memberof ubii.processing.ProcessingMode
                 * @interface ITriggerOnInput
                 * @property {number|null} [minDelayMs] TriggerOnInput minDelayMs
                 * @property {boolean|null} [allInputsNeedUpdate] TriggerOnInput allInputsNeedUpdate
                 */

                /**
                 * Constructs a new TriggerOnInput.
                 * @memberof ubii.processing.ProcessingMode
                 * @classdesc Represents a TriggerOnInput.
                 * @implements ITriggerOnInput
                 * @constructor
                 * @param {ubii.processing.ProcessingMode.ITriggerOnInput=} [properties] Properties to set
                 */
                function TriggerOnInput(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TriggerOnInput minDelayMs.
                 * @member {number} minDelayMs
                 * @memberof ubii.processing.ProcessingMode.TriggerOnInput
                 * @instance
                 */
                TriggerOnInput.prototype.minDelayMs = 0;

                /**
                 * TriggerOnInput allInputsNeedUpdate.
                 * @member {boolean} allInputsNeedUpdate
                 * @memberof ubii.processing.ProcessingMode.TriggerOnInput
                 * @instance
                 */
                TriggerOnInput.prototype.allInputsNeedUpdate = false;

                /**
                 * Creates a new TriggerOnInput instance using the specified properties.
                 * @function create
                 * @memberof ubii.processing.ProcessingMode.TriggerOnInput
                 * @static
                 * @param {ubii.processing.ProcessingMode.ITriggerOnInput=} [properties] Properties to set
                 * @returns {ubii.processing.ProcessingMode.TriggerOnInput} TriggerOnInput instance
                 */
                TriggerOnInput.create = function create(properties) {
                    return new TriggerOnInput(properties);
                };

                /**
                 * Encodes the specified TriggerOnInput message. Does not implicitly {@link ubii.processing.ProcessingMode.TriggerOnInput.verify|verify} messages.
                 * @function encode
                 * @memberof ubii.processing.ProcessingMode.TriggerOnInput
                 * @static
                 * @param {ubii.processing.ProcessingMode.ITriggerOnInput} message TriggerOnInput message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TriggerOnInput.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.minDelayMs != null && message.hasOwnProperty("minDelayMs"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.minDelayMs);
                    if (message.allInputsNeedUpdate != null && message.hasOwnProperty("allInputsNeedUpdate"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allInputsNeedUpdate);
                    return writer;
                };

                /**
                 * Encodes the specified TriggerOnInput message, length delimited. Does not implicitly {@link ubii.processing.ProcessingMode.TriggerOnInput.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ubii.processing.ProcessingMode.TriggerOnInput
                 * @static
                 * @param {ubii.processing.ProcessingMode.ITriggerOnInput} message TriggerOnInput message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TriggerOnInput.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a TriggerOnInput message from the specified reader or buffer.
                 * @function decode
                 * @memberof ubii.processing.ProcessingMode.TriggerOnInput
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ubii.processing.ProcessingMode.TriggerOnInput} TriggerOnInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TriggerOnInput.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.processing.ProcessingMode.TriggerOnInput();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.minDelayMs = reader.int32();
                            break;
                        case 2:
                            message.allInputsNeedUpdate = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a TriggerOnInput message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ubii.processing.ProcessingMode.TriggerOnInput
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ubii.processing.ProcessingMode.TriggerOnInput} TriggerOnInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TriggerOnInput.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TriggerOnInput message.
                 * @function verify
                 * @memberof ubii.processing.ProcessingMode.TriggerOnInput
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TriggerOnInput.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.minDelayMs != null && message.hasOwnProperty("minDelayMs"))
                        if (!$util.isInteger(message.minDelayMs))
                            return "minDelayMs: integer expected";
                    if (message.allInputsNeedUpdate != null && message.hasOwnProperty("allInputsNeedUpdate"))
                        if (typeof message.allInputsNeedUpdate !== "boolean")
                            return "allInputsNeedUpdate: boolean expected";
                    return null;
                };

                /**
                 * Creates a TriggerOnInput message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ubii.processing.ProcessingMode.TriggerOnInput
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ubii.processing.ProcessingMode.TriggerOnInput} TriggerOnInput
                 */
                TriggerOnInput.fromObject = function fromObject(object) {
                    if (object instanceof $root.ubii.processing.ProcessingMode.TriggerOnInput)
                        return object;
                    var message = new $root.ubii.processing.ProcessingMode.TriggerOnInput();
                    if (object.minDelayMs != null)
                        message.minDelayMs = object.minDelayMs | 0;
                    if (object.allInputsNeedUpdate != null)
                        message.allInputsNeedUpdate = Boolean(object.allInputsNeedUpdate);
                    return message;
                };

                /**
                 * Creates a plain object from a TriggerOnInput message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ubii.processing.ProcessingMode.TriggerOnInput
                 * @static
                 * @param {ubii.processing.ProcessingMode.TriggerOnInput} message TriggerOnInput
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TriggerOnInput.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.minDelayMs = 0;
                        object.allInputsNeedUpdate = false;
                    }
                    if (message.minDelayMs != null && message.hasOwnProperty("minDelayMs"))
                        object.minDelayMs = message.minDelayMs;
                    if (message.allInputsNeedUpdate != null && message.hasOwnProperty("allInputsNeedUpdate"))
                        object.allInputsNeedUpdate = message.allInputsNeedUpdate;
                    return object;
                };

                /**
                 * Converts this TriggerOnInput to JSON.
                 * @function toJSON
                 * @memberof ubii.processing.ProcessingMode.TriggerOnInput
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TriggerOnInput.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return TriggerOnInput;
            })();

            return ProcessingMode;
        })();

        processing.ModuleIO = (function() {

            /**
             * Properties of a ModuleIO.
             * @memberof ubii.processing
             * @interface IModuleIO
             * @property {string|null} [internalName] ModuleIO internalName
             * @property {string|null} [messageFormat] ModuleIO messageFormat
             */

            /**
             * Constructs a new ModuleIO.
             * @memberof ubii.processing
             * @classdesc Represents a ModuleIO.
             * @implements IModuleIO
             * @constructor
             * @param {ubii.processing.IModuleIO=} [properties] Properties to set
             */
            function ModuleIO(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ModuleIO internalName.
             * @member {string} internalName
             * @memberof ubii.processing.ModuleIO
             * @instance
             */
            ModuleIO.prototype.internalName = "";

            /**
             * ModuleIO messageFormat.
             * @member {string} messageFormat
             * @memberof ubii.processing.ModuleIO
             * @instance
             */
            ModuleIO.prototype.messageFormat = "";

            /**
             * Creates a new ModuleIO instance using the specified properties.
             * @function create
             * @memberof ubii.processing.ModuleIO
             * @static
             * @param {ubii.processing.IModuleIO=} [properties] Properties to set
             * @returns {ubii.processing.ModuleIO} ModuleIO instance
             */
            ModuleIO.create = function create(properties) {
                return new ModuleIO(properties);
            };

            /**
             * Encodes the specified ModuleIO message. Does not implicitly {@link ubii.processing.ModuleIO.verify|verify} messages.
             * @function encode
             * @memberof ubii.processing.ModuleIO
             * @static
             * @param {ubii.processing.IModuleIO} message ModuleIO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ModuleIO.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.internalName != null && message.hasOwnProperty("internalName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.internalName);
                if (message.messageFormat != null && message.hasOwnProperty("messageFormat"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.messageFormat);
                return writer;
            };

            /**
             * Encodes the specified ModuleIO message, length delimited. Does not implicitly {@link ubii.processing.ModuleIO.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.processing.ModuleIO
             * @static
             * @param {ubii.processing.IModuleIO} message ModuleIO message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ModuleIO.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ModuleIO message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.processing.ModuleIO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.processing.ModuleIO} ModuleIO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ModuleIO.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.processing.ModuleIO();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.internalName = reader.string();
                        break;
                    case 2:
                        message.messageFormat = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ModuleIO message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.processing.ModuleIO
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.processing.ModuleIO} ModuleIO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ModuleIO.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ModuleIO message.
             * @function verify
             * @memberof ubii.processing.ModuleIO
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ModuleIO.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.internalName != null && message.hasOwnProperty("internalName"))
                    if (!$util.isString(message.internalName))
                        return "internalName: string expected";
                if (message.messageFormat != null && message.hasOwnProperty("messageFormat"))
                    if (!$util.isString(message.messageFormat))
                        return "messageFormat: string expected";
                return null;
            };

            /**
             * Creates a ModuleIO message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.processing.ModuleIO
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.processing.ModuleIO} ModuleIO
             */
            ModuleIO.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.processing.ModuleIO)
                    return object;
                var message = new $root.ubii.processing.ModuleIO();
                if (object.internalName != null)
                    message.internalName = String(object.internalName);
                if (object.messageFormat != null)
                    message.messageFormat = String(object.messageFormat);
                return message;
            };

            /**
             * Creates a plain object from a ModuleIO message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.processing.ModuleIO
             * @static
             * @param {ubii.processing.ModuleIO} message ModuleIO
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ModuleIO.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.internalName = "";
                    object.messageFormat = "";
                }
                if (message.internalName != null && message.hasOwnProperty("internalName"))
                    object.internalName = message.internalName;
                if (message.messageFormat != null && message.hasOwnProperty("messageFormat"))
                    object.messageFormat = message.messageFormat;
                return object;
            };

            /**
             * Converts this ModuleIO to JSON.
             * @function toJSON
             * @memberof ubii.processing.ModuleIO
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ModuleIO.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ModuleIO;
        })();

        processing.ProcessingModule = (function() {

            /**
             * Properties of a ProcessingModule.
             * @memberof ubii.processing
             * @interface IProcessingModule
             * @property {string|null} [id] ProcessingModule id
             * @property {string|null} [name] ProcessingModule name
             * @property {Array.<string>|null} [authors] ProcessingModule authors
             * @property {Array.<string>|null} [tags] ProcessingModule tags
             * @property {string|null} [description] ProcessingModule description
             * @property {string|null} [clientId] ProcessingModule clientId
             * @property {ubii.processing.ProcessingModule.Status|null} [status] ProcessingModule status
             * @property {ubii.processing.IProcessingMode|null} [processingMode] ProcessingModule processingMode
             * @property {Array.<ubii.processing.IModuleIO>|null} [inputs] ProcessingModule inputs
             * @property {Array.<ubii.processing.IModuleIO>|null} [outputs] ProcessingModule outputs
             * @property {ubii.processing.ProcessingModule.Language|null} [language] ProcessingModule language
             * @property {string|null} [onProcessingStringified] ProcessingModule onProcessingStringified
             * @property {string|null} [onCreatedStringified] ProcessingModule onCreatedStringified
             * @property {string|null} [onHaltedStringified] ProcessingModule onHaltedStringified
             * @property {string|null} [onDestroyedStringified] ProcessingModule onDestroyedStringified
             */

            /**
             * Constructs a new ProcessingModule.
             * @memberof ubii.processing
             * @classdesc Represents a ProcessingModule.
             * @implements IProcessingModule
             * @constructor
             * @param {ubii.processing.IProcessingModule=} [properties] Properties to set
             */
            function ProcessingModule(properties) {
                this.authors = [];
                this.tags = [];
                this.inputs = [];
                this.outputs = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ProcessingModule id.
             * @member {string} id
             * @memberof ubii.processing.ProcessingModule
             * @instance
             */
            ProcessingModule.prototype.id = "";

            /**
             * ProcessingModule name.
             * @member {string} name
             * @memberof ubii.processing.ProcessingModule
             * @instance
             */
            ProcessingModule.prototype.name = "";

            /**
             * ProcessingModule authors.
             * @member {Array.<string>} authors
             * @memberof ubii.processing.ProcessingModule
             * @instance
             */
            ProcessingModule.prototype.authors = $util.emptyArray;

            /**
             * ProcessingModule tags.
             * @member {Array.<string>} tags
             * @memberof ubii.processing.ProcessingModule
             * @instance
             */
            ProcessingModule.prototype.tags = $util.emptyArray;

            /**
             * ProcessingModule description.
             * @member {string} description
             * @memberof ubii.processing.ProcessingModule
             * @instance
             */
            ProcessingModule.prototype.description = "";

            /**
             * ProcessingModule clientId.
             * @member {string} clientId
             * @memberof ubii.processing.ProcessingModule
             * @instance
             */
            ProcessingModule.prototype.clientId = "";

            /**
             * ProcessingModule status.
             * @member {ubii.processing.ProcessingModule.Status} status
             * @memberof ubii.processing.ProcessingModule
             * @instance
             */
            ProcessingModule.prototype.status = 0;

            /**
             * ProcessingModule processingMode.
             * @member {ubii.processing.IProcessingMode|null|undefined} processingMode
             * @memberof ubii.processing.ProcessingModule
             * @instance
             */
            ProcessingModule.prototype.processingMode = null;

            /**
             * ProcessingModule inputs.
             * @member {Array.<ubii.processing.IModuleIO>} inputs
             * @memberof ubii.processing.ProcessingModule
             * @instance
             */
            ProcessingModule.prototype.inputs = $util.emptyArray;

            /**
             * ProcessingModule outputs.
             * @member {Array.<ubii.processing.IModuleIO>} outputs
             * @memberof ubii.processing.ProcessingModule
             * @instance
             */
            ProcessingModule.prototype.outputs = $util.emptyArray;

            /**
             * ProcessingModule language.
             * @member {ubii.processing.ProcessingModule.Language} language
             * @memberof ubii.processing.ProcessingModule
             * @instance
             */
            ProcessingModule.prototype.language = 0;

            /**
             * ProcessingModule onProcessingStringified.
             * @member {string} onProcessingStringified
             * @memberof ubii.processing.ProcessingModule
             * @instance
             */
            ProcessingModule.prototype.onProcessingStringified = "";

            /**
             * ProcessingModule onCreatedStringified.
             * @member {string} onCreatedStringified
             * @memberof ubii.processing.ProcessingModule
             * @instance
             */
            ProcessingModule.prototype.onCreatedStringified = "";

            /**
             * ProcessingModule onHaltedStringified.
             * @member {string} onHaltedStringified
             * @memberof ubii.processing.ProcessingModule
             * @instance
             */
            ProcessingModule.prototype.onHaltedStringified = "";

            /**
             * ProcessingModule onDestroyedStringified.
             * @member {string} onDestroyedStringified
             * @memberof ubii.processing.ProcessingModule
             * @instance
             */
            ProcessingModule.prototype.onDestroyedStringified = "";

            /**
             * Creates a new ProcessingModule instance using the specified properties.
             * @function create
             * @memberof ubii.processing.ProcessingModule
             * @static
             * @param {ubii.processing.IProcessingModule=} [properties] Properties to set
             * @returns {ubii.processing.ProcessingModule} ProcessingModule instance
             */
            ProcessingModule.create = function create(properties) {
                return new ProcessingModule(properties);
            };

            /**
             * Encodes the specified ProcessingModule message. Does not implicitly {@link ubii.processing.ProcessingModule.verify|verify} messages.
             * @function encode
             * @memberof ubii.processing.ProcessingModule
             * @static
             * @param {ubii.processing.IProcessingModule} message ProcessingModule message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProcessingModule.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.authors != null && message.authors.length)
                    for (var i = 0; i < message.authors.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.authors[i]);
                if (message.tags != null && message.tags.length)
                    for (var i = 0; i < message.tags.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.tags[i]);
                if (message.description != null && message.hasOwnProperty("description"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
                if (message.clientId != null && message.hasOwnProperty("clientId"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.clientId);
                if (message.status != null && message.hasOwnProperty("status"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.status);
                if (message.processingMode != null && message.hasOwnProperty("processingMode"))
                    $root.ubii.processing.ProcessingMode.encode(message.processingMode, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.inputs != null && message.inputs.length)
                    for (var i = 0; i < message.inputs.length; ++i)
                        $root.ubii.processing.ModuleIO.encode(message.inputs[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.outputs != null && message.outputs.length)
                    for (var i = 0; i < message.outputs.length; ++i)
                        $root.ubii.processing.ModuleIO.encode(message.outputs[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.language != null && message.hasOwnProperty("language"))
                    writer.uint32(/* id 11, wireType 0 =*/88).int32(message.language);
                if (message.onProcessingStringified != null && message.hasOwnProperty("onProcessingStringified"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.onProcessingStringified);
                if (message.onCreatedStringified != null && message.hasOwnProperty("onCreatedStringified"))
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.onCreatedStringified);
                if (message.onHaltedStringified != null && message.hasOwnProperty("onHaltedStringified"))
                    writer.uint32(/* id 14, wireType 2 =*/114).string(message.onHaltedStringified);
                if (message.onDestroyedStringified != null && message.hasOwnProperty("onDestroyedStringified"))
                    writer.uint32(/* id 15, wireType 2 =*/122).string(message.onDestroyedStringified);
                return writer;
            };

            /**
             * Encodes the specified ProcessingModule message, length delimited. Does not implicitly {@link ubii.processing.ProcessingModule.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.processing.ProcessingModule
             * @static
             * @param {ubii.processing.IProcessingModule} message ProcessingModule message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProcessingModule.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ProcessingModule message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.processing.ProcessingModule
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.processing.ProcessingModule} ProcessingModule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProcessingModule.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.processing.ProcessingModule();
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
                        if (!(message.authors && message.authors.length))
                            message.authors = [];
                        message.authors.push(reader.string());
                        break;
                    case 4:
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        message.tags.push(reader.string());
                        break;
                    case 5:
                        message.description = reader.string();
                        break;
                    case 6:
                        message.clientId = reader.string();
                        break;
                    case 7:
                        message.status = reader.int32();
                        break;
                    case 8:
                        message.processingMode = $root.ubii.processing.ProcessingMode.decode(reader, reader.uint32());
                        break;
                    case 9:
                        if (!(message.inputs && message.inputs.length))
                            message.inputs = [];
                        message.inputs.push($root.ubii.processing.ModuleIO.decode(reader, reader.uint32()));
                        break;
                    case 10:
                        if (!(message.outputs && message.outputs.length))
                            message.outputs = [];
                        message.outputs.push($root.ubii.processing.ModuleIO.decode(reader, reader.uint32()));
                        break;
                    case 11:
                        message.language = reader.int32();
                        break;
                    case 12:
                        message.onProcessingStringified = reader.string();
                        break;
                    case 13:
                        message.onCreatedStringified = reader.string();
                        break;
                    case 14:
                        message.onHaltedStringified = reader.string();
                        break;
                    case 15:
                        message.onDestroyedStringified = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ProcessingModule message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.processing.ProcessingModule
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.processing.ProcessingModule} ProcessingModule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProcessingModule.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ProcessingModule message.
             * @function verify
             * @memberof ubii.processing.ProcessingModule
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ProcessingModule.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.authors != null && message.hasOwnProperty("authors")) {
                    if (!Array.isArray(message.authors))
                        return "authors: array expected";
                    for (var i = 0; i < message.authors.length; ++i)
                        if (!$util.isString(message.authors[i]))
                            return "authors: string[] expected";
                }
                if (message.tags != null && message.hasOwnProperty("tags")) {
                    if (!Array.isArray(message.tags))
                        return "tags: array expected";
                    for (var i = 0; i < message.tags.length; ++i)
                        if (!$util.isString(message.tags[i]))
                            return "tags: string[] expected";
                }
                if (message.description != null && message.hasOwnProperty("description"))
                    if (!$util.isString(message.description))
                        return "description: string expected";
                if (message.clientId != null && message.hasOwnProperty("clientId"))
                    if (!$util.isString(message.clientId))
                        return "clientId: string expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    switch (message.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
                if (message.processingMode != null && message.hasOwnProperty("processingMode")) {
                    var error = $root.ubii.processing.ProcessingMode.verify(message.processingMode);
                    if (error)
                        return "processingMode." + error;
                }
                if (message.inputs != null && message.hasOwnProperty("inputs")) {
                    if (!Array.isArray(message.inputs))
                        return "inputs: array expected";
                    for (var i = 0; i < message.inputs.length; ++i) {
                        var error = $root.ubii.processing.ModuleIO.verify(message.inputs[i]);
                        if (error)
                            return "inputs." + error;
                    }
                }
                if (message.outputs != null && message.hasOwnProperty("outputs")) {
                    if (!Array.isArray(message.outputs))
                        return "outputs: array expected";
                    for (var i = 0; i < message.outputs.length; ++i) {
                        var error = $root.ubii.processing.ModuleIO.verify(message.outputs[i]);
                        if (error)
                            return "outputs." + error;
                    }
                }
                if (message.language != null && message.hasOwnProperty("language"))
                    switch (message.language) {
                    default:
                        return "language: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
                if (message.onProcessingStringified != null && message.hasOwnProperty("onProcessingStringified"))
                    if (!$util.isString(message.onProcessingStringified))
                        return "onProcessingStringified: string expected";
                if (message.onCreatedStringified != null && message.hasOwnProperty("onCreatedStringified"))
                    if (!$util.isString(message.onCreatedStringified))
                        return "onCreatedStringified: string expected";
                if (message.onHaltedStringified != null && message.hasOwnProperty("onHaltedStringified"))
                    if (!$util.isString(message.onHaltedStringified))
                        return "onHaltedStringified: string expected";
                if (message.onDestroyedStringified != null && message.hasOwnProperty("onDestroyedStringified"))
                    if (!$util.isString(message.onDestroyedStringified))
                        return "onDestroyedStringified: string expected";
                return null;
            };

            /**
             * Creates a ProcessingModule message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.processing.ProcessingModule
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.processing.ProcessingModule} ProcessingModule
             */
            ProcessingModule.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.processing.ProcessingModule)
                    return object;
                var message = new $root.ubii.processing.ProcessingModule();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.authors) {
                    if (!Array.isArray(object.authors))
                        throw TypeError(".ubii.processing.ProcessingModule.authors: array expected");
                    message.authors = [];
                    for (var i = 0; i < object.authors.length; ++i)
                        message.authors[i] = String(object.authors[i]);
                }
                if (object.tags) {
                    if (!Array.isArray(object.tags))
                        throw TypeError(".ubii.processing.ProcessingModule.tags: array expected");
                    message.tags = [];
                    for (var i = 0; i < object.tags.length; ++i)
                        message.tags[i] = String(object.tags[i]);
                }
                if (object.description != null)
                    message.description = String(object.description);
                if (object.clientId != null)
                    message.clientId = String(object.clientId);
                switch (object.status) {
                case "INITIALIZED":
                case 0:
                    message.status = 0;
                    break;
                case "CREATED":
                case 1:
                    message.status = 1;
                    break;
                case "PROCESSING":
                case 2:
                    message.status = 2;
                    break;
                case "HALTED":
                case 3:
                    message.status = 3;
                    break;
                case "DESTROYED":
                case 4:
                    message.status = 4;
                    break;
                }
                if (object.processingMode != null) {
                    if (typeof object.processingMode !== "object")
                        throw TypeError(".ubii.processing.ProcessingModule.processingMode: object expected");
                    message.processingMode = $root.ubii.processing.ProcessingMode.fromObject(object.processingMode);
                }
                if (object.inputs) {
                    if (!Array.isArray(object.inputs))
                        throw TypeError(".ubii.processing.ProcessingModule.inputs: array expected");
                    message.inputs = [];
                    for (var i = 0; i < object.inputs.length; ++i) {
                        if (typeof object.inputs[i] !== "object")
                            throw TypeError(".ubii.processing.ProcessingModule.inputs: object expected");
                        message.inputs[i] = $root.ubii.processing.ModuleIO.fromObject(object.inputs[i]);
                    }
                }
                if (object.outputs) {
                    if (!Array.isArray(object.outputs))
                        throw TypeError(".ubii.processing.ProcessingModule.outputs: array expected");
                    message.outputs = [];
                    for (var i = 0; i < object.outputs.length; ++i) {
                        if (typeof object.outputs[i] !== "object")
                            throw TypeError(".ubii.processing.ProcessingModule.outputs: object expected");
                        message.outputs[i] = $root.ubii.processing.ModuleIO.fromObject(object.outputs[i]);
                    }
                }
                switch (object.language) {
                case "CPP":
                case 0:
                    message.language = 0;
                    break;
                case "PY":
                case 1:
                    message.language = 1;
                    break;
                case "JS":
                case 2:
                    message.language = 2;
                    break;
                case "CS":
                case 3:
                    message.language = 3;
                    break;
                case "JAVA":
                case 4:
                    message.language = 4;
                    break;
                }
                if (object.onProcessingStringified != null)
                    message.onProcessingStringified = String(object.onProcessingStringified);
                if (object.onCreatedStringified != null)
                    message.onCreatedStringified = String(object.onCreatedStringified);
                if (object.onHaltedStringified != null)
                    message.onHaltedStringified = String(object.onHaltedStringified);
                if (object.onDestroyedStringified != null)
                    message.onDestroyedStringified = String(object.onDestroyedStringified);
                return message;
            };

            /**
             * Creates a plain object from a ProcessingModule message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.processing.ProcessingModule
             * @static
             * @param {ubii.processing.ProcessingModule} message ProcessingModule
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ProcessingModule.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.authors = [];
                    object.tags = [];
                    object.inputs = [];
                    object.outputs = [];
                }
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.description = "";
                    object.clientId = "";
                    object.status = options.enums === String ? "INITIALIZED" : 0;
                    object.processingMode = null;
                    object.language = options.enums === String ? "CPP" : 0;
                    object.onProcessingStringified = "";
                    object.onCreatedStringified = "";
                    object.onHaltedStringified = "";
                    object.onDestroyedStringified = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.authors && message.authors.length) {
                    object.authors = [];
                    for (var j = 0; j < message.authors.length; ++j)
                        object.authors[j] = message.authors[j];
                }
                if (message.tags && message.tags.length) {
                    object.tags = [];
                    for (var j = 0; j < message.tags.length; ++j)
                        object.tags[j] = message.tags[j];
                }
                if (message.description != null && message.hasOwnProperty("description"))
                    object.description = message.description;
                if (message.clientId != null && message.hasOwnProperty("clientId"))
                    object.clientId = message.clientId;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.ubii.processing.ProcessingModule.Status[message.status] : message.status;
                if (message.processingMode != null && message.hasOwnProperty("processingMode"))
                    object.processingMode = $root.ubii.processing.ProcessingMode.toObject(message.processingMode, options);
                if (message.inputs && message.inputs.length) {
                    object.inputs = [];
                    for (var j = 0; j < message.inputs.length; ++j)
                        object.inputs[j] = $root.ubii.processing.ModuleIO.toObject(message.inputs[j], options);
                }
                if (message.outputs && message.outputs.length) {
                    object.outputs = [];
                    for (var j = 0; j < message.outputs.length; ++j)
                        object.outputs[j] = $root.ubii.processing.ModuleIO.toObject(message.outputs[j], options);
                }
                if (message.language != null && message.hasOwnProperty("language"))
                    object.language = options.enums === String ? $root.ubii.processing.ProcessingModule.Language[message.language] : message.language;
                if (message.onProcessingStringified != null && message.hasOwnProperty("onProcessingStringified"))
                    object.onProcessingStringified = message.onProcessingStringified;
                if (message.onCreatedStringified != null && message.hasOwnProperty("onCreatedStringified"))
                    object.onCreatedStringified = message.onCreatedStringified;
                if (message.onHaltedStringified != null && message.hasOwnProperty("onHaltedStringified"))
                    object.onHaltedStringified = message.onHaltedStringified;
                if (message.onDestroyedStringified != null && message.hasOwnProperty("onDestroyedStringified"))
                    object.onDestroyedStringified = message.onDestroyedStringified;
                return object;
            };

            /**
             * Converts this ProcessingModule to JSON.
             * @function toJSON
             * @memberof ubii.processing.ProcessingModule
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ProcessingModule.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Status enum.
             * @name ubii.processing.ProcessingModule.Status
             * @enum {string}
             * @property {number} INITIALIZED=0 INITIALIZED value
             * @property {number} CREATED=1 CREATED value
             * @property {number} PROCESSING=2 PROCESSING value
             * @property {number} HALTED=3 HALTED value
             * @property {number} DESTROYED=4 DESTROYED value
             */
            ProcessingModule.Status = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "INITIALIZED"] = 0;
                values[valuesById[1] = "CREATED"] = 1;
                values[valuesById[2] = "PROCESSING"] = 2;
                values[valuesById[3] = "HALTED"] = 3;
                values[valuesById[4] = "DESTROYED"] = 4;
                return values;
            })();

            /**
             * Language enum.
             * @name ubii.processing.ProcessingModule.Language
             * @enum {string}
             * @property {number} CPP=0 CPP value
             * @property {number} PY=1 PY value
             * @property {number} JS=2 JS value
             * @property {number} CS=3 CS value
             * @property {number} JAVA=4 JAVA value
             */
            ProcessingModule.Language = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "CPP"] = 0;
                values[valuesById[1] = "PY"] = 1;
                values[valuesById[2] = "JS"] = 2;
                values[valuesById[3] = "CS"] = 3;
                values[valuesById[4] = "JAVA"] = 4;
                return values;
            })();

            return ProcessingModule;
        })();

        processing.ProcessingModuleList = (function() {

            /**
             * Properties of a ProcessingModuleList.
             * @memberof ubii.processing
             * @interface IProcessingModuleList
             * @property {Array.<ubii.processing.IProcessingModule>|null} [elements] ProcessingModuleList elements
             */

            /**
             * Constructs a new ProcessingModuleList.
             * @memberof ubii.processing
             * @classdesc Represents a ProcessingModuleList.
             * @implements IProcessingModuleList
             * @constructor
             * @param {ubii.processing.IProcessingModuleList=} [properties] Properties to set
             */
            function ProcessingModuleList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ProcessingModuleList elements.
             * @member {Array.<ubii.processing.IProcessingModule>} elements
             * @memberof ubii.processing.ProcessingModuleList
             * @instance
             */
            ProcessingModuleList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new ProcessingModuleList instance using the specified properties.
             * @function create
             * @memberof ubii.processing.ProcessingModuleList
             * @static
             * @param {ubii.processing.IProcessingModuleList=} [properties] Properties to set
             * @returns {ubii.processing.ProcessingModuleList} ProcessingModuleList instance
             */
            ProcessingModuleList.create = function create(properties) {
                return new ProcessingModuleList(properties);
            };

            /**
             * Encodes the specified ProcessingModuleList message. Does not implicitly {@link ubii.processing.ProcessingModuleList.verify|verify} messages.
             * @function encode
             * @memberof ubii.processing.ProcessingModuleList
             * @static
             * @param {ubii.processing.IProcessingModuleList} message ProcessingModuleList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProcessingModuleList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.processing.ProcessingModule.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ProcessingModuleList message, length delimited. Does not implicitly {@link ubii.processing.ProcessingModuleList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.processing.ProcessingModuleList
             * @static
             * @param {ubii.processing.IProcessingModuleList} message ProcessingModuleList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProcessingModuleList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ProcessingModuleList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.processing.ProcessingModuleList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.processing.ProcessingModuleList} ProcessingModuleList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProcessingModuleList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.processing.ProcessingModuleList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.processing.ProcessingModule.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ProcessingModuleList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.processing.ProcessingModuleList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.processing.ProcessingModuleList} ProcessingModuleList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProcessingModuleList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ProcessingModuleList message.
             * @function verify
             * @memberof ubii.processing.ProcessingModuleList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ProcessingModuleList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.processing.ProcessingModule.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ProcessingModuleList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.processing.ProcessingModuleList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.processing.ProcessingModuleList} ProcessingModuleList
             */
            ProcessingModuleList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.processing.ProcessingModuleList)
                    return object;
                var message = new $root.ubii.processing.ProcessingModuleList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.processing.ProcessingModuleList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.processing.ProcessingModuleList.elements: object expected");
                        message.elements[i] = $root.ubii.processing.ProcessingModule.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ProcessingModuleList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.processing.ProcessingModuleList
             * @static
             * @param {ubii.processing.ProcessingModuleList} message ProcessingModuleList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ProcessingModuleList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.processing.ProcessingModule.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this ProcessingModuleList to JSON.
             * @function toJSON
             * @memberof ubii.processing.ProcessingModuleList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ProcessingModuleList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ProcessingModuleList;
        })();

        return processing;
    })();

    ubii.servers = (function() {

        /**
         * Namespace servers.
         * @memberof ubii
         * @namespace
         */
        var servers = {};

        servers.Server = (function() {

            /**
             * Properties of a Server.
             * @memberof ubii.servers
             * @interface IServer
             * @property {string|null} [id] Server id
             * @property {string|null} [name] Server name
             * @property {string|null} [ipEthernet] Server ipEthernet
             * @property {string|null} [ipWlan] Server ipWlan
             * @property {string|null} [portServiceZmq] Server portServiceZmq
             * @property {string|null} [portServiceRest] Server portServiceRest
             * @property {string|null} [portTopicDataZmq] Server portTopicDataZmq
             * @property {string|null} [portTopicDataWs] Server portTopicDataWs
             * @property {string|null} [constantsJson] Server constantsJson
             */

            /**
             * Constructs a new Server.
             * @memberof ubii.servers
             * @classdesc Represents a Server.
             * @implements IServer
             * @constructor
             * @param {ubii.servers.IServer=} [properties] Properties to set
             */
            function Server(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Server id.
             * @member {string} id
             * @memberof ubii.servers.Server
             * @instance
             */
            Server.prototype.id = "";

            /**
             * Server name.
             * @member {string} name
             * @memberof ubii.servers.Server
             * @instance
             */
            Server.prototype.name = "";

            /**
             * Server ipEthernet.
             * @member {string} ipEthernet
             * @memberof ubii.servers.Server
             * @instance
             */
            Server.prototype.ipEthernet = "";

            /**
             * Server ipWlan.
             * @member {string} ipWlan
             * @memberof ubii.servers.Server
             * @instance
             */
            Server.prototype.ipWlan = "";

            /**
             * Server portServiceZmq.
             * @member {string} portServiceZmq
             * @memberof ubii.servers.Server
             * @instance
             */
            Server.prototype.portServiceZmq = "";

            /**
             * Server portServiceRest.
             * @member {string} portServiceRest
             * @memberof ubii.servers.Server
             * @instance
             */
            Server.prototype.portServiceRest = "";

            /**
             * Server portTopicDataZmq.
             * @member {string} portTopicDataZmq
             * @memberof ubii.servers.Server
             * @instance
             */
            Server.prototype.portTopicDataZmq = "";

            /**
             * Server portTopicDataWs.
             * @member {string} portTopicDataWs
             * @memberof ubii.servers.Server
             * @instance
             */
            Server.prototype.portTopicDataWs = "";

            /**
             * Server constantsJson.
             * @member {string} constantsJson
             * @memberof ubii.servers.Server
             * @instance
             */
            Server.prototype.constantsJson = "";

            /**
             * Creates a new Server instance using the specified properties.
             * @function create
             * @memberof ubii.servers.Server
             * @static
             * @param {ubii.servers.IServer=} [properties] Properties to set
             * @returns {ubii.servers.Server} Server instance
             */
            Server.create = function create(properties) {
                return new Server(properties);
            };

            /**
             * Encodes the specified Server message. Does not implicitly {@link ubii.servers.Server.verify|verify} messages.
             * @function encode
             * @memberof ubii.servers.Server
             * @static
             * @param {ubii.servers.IServer} message Server message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Server.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.ipEthernet != null && message.hasOwnProperty("ipEthernet"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.ipEthernet);
                if (message.ipWlan != null && message.hasOwnProperty("ipWlan"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.ipWlan);
                if (message.portServiceZmq != null && message.hasOwnProperty("portServiceZmq"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.portServiceZmq);
                if (message.portServiceRest != null && message.hasOwnProperty("portServiceRest"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.portServiceRest);
                if (message.portTopicDataZmq != null && message.hasOwnProperty("portTopicDataZmq"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.portTopicDataZmq);
                if (message.portTopicDataWs != null && message.hasOwnProperty("portTopicDataWs"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.portTopicDataWs);
                if (message.constantsJson != null && message.hasOwnProperty("constantsJson"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.constantsJson);
                return writer;
            };

            /**
             * Encodes the specified Server message, length delimited. Does not implicitly {@link ubii.servers.Server.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.servers.Server
             * @static
             * @param {ubii.servers.IServer} message Server message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Server.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Server message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.servers.Server
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.servers.Server} Server
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Server.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.servers.Server();
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
                        message.ipEthernet = reader.string();
                        break;
                    case 4:
                        message.ipWlan = reader.string();
                        break;
                    case 5:
                        message.portServiceZmq = reader.string();
                        break;
                    case 6:
                        message.portServiceRest = reader.string();
                        break;
                    case 7:
                        message.portTopicDataZmq = reader.string();
                        break;
                    case 8:
                        message.portTopicDataWs = reader.string();
                        break;
                    case 9:
                        message.constantsJson = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Server message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.servers.Server
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.servers.Server} Server
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Server.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Server message.
             * @function verify
             * @memberof ubii.servers.Server
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Server.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.ipEthernet != null && message.hasOwnProperty("ipEthernet"))
                    if (!$util.isString(message.ipEthernet))
                        return "ipEthernet: string expected";
                if (message.ipWlan != null && message.hasOwnProperty("ipWlan"))
                    if (!$util.isString(message.ipWlan))
                        return "ipWlan: string expected";
                if (message.portServiceZmq != null && message.hasOwnProperty("portServiceZmq"))
                    if (!$util.isString(message.portServiceZmq))
                        return "portServiceZmq: string expected";
                if (message.portServiceRest != null && message.hasOwnProperty("portServiceRest"))
                    if (!$util.isString(message.portServiceRest))
                        return "portServiceRest: string expected";
                if (message.portTopicDataZmq != null && message.hasOwnProperty("portTopicDataZmq"))
                    if (!$util.isString(message.portTopicDataZmq))
                        return "portTopicDataZmq: string expected";
                if (message.portTopicDataWs != null && message.hasOwnProperty("portTopicDataWs"))
                    if (!$util.isString(message.portTopicDataWs))
                        return "portTopicDataWs: string expected";
                if (message.constantsJson != null && message.hasOwnProperty("constantsJson"))
                    if (!$util.isString(message.constantsJson))
                        return "constantsJson: string expected";
                return null;
            };

            /**
             * Creates a Server message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.servers.Server
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.servers.Server} Server
             */
            Server.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.servers.Server)
                    return object;
                var message = new $root.ubii.servers.Server();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.ipEthernet != null)
                    message.ipEthernet = String(object.ipEthernet);
                if (object.ipWlan != null)
                    message.ipWlan = String(object.ipWlan);
                if (object.portServiceZmq != null)
                    message.portServiceZmq = String(object.portServiceZmq);
                if (object.portServiceRest != null)
                    message.portServiceRest = String(object.portServiceRest);
                if (object.portTopicDataZmq != null)
                    message.portTopicDataZmq = String(object.portTopicDataZmq);
                if (object.portTopicDataWs != null)
                    message.portTopicDataWs = String(object.portTopicDataWs);
                if (object.constantsJson != null)
                    message.constantsJson = String(object.constantsJson);
                return message;
            };

            /**
             * Creates a plain object from a Server message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.servers.Server
             * @static
             * @param {ubii.servers.Server} message Server
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Server.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.ipEthernet = "";
                    object.ipWlan = "";
                    object.portServiceZmq = "";
                    object.portServiceRest = "";
                    object.portTopicDataZmq = "";
                    object.portTopicDataWs = "";
                    object.constantsJson = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.ipEthernet != null && message.hasOwnProperty("ipEthernet"))
                    object.ipEthernet = message.ipEthernet;
                if (message.ipWlan != null && message.hasOwnProperty("ipWlan"))
                    object.ipWlan = message.ipWlan;
                if (message.portServiceZmq != null && message.hasOwnProperty("portServiceZmq"))
                    object.portServiceZmq = message.portServiceZmq;
                if (message.portServiceRest != null && message.hasOwnProperty("portServiceRest"))
                    object.portServiceRest = message.portServiceRest;
                if (message.portTopicDataZmq != null && message.hasOwnProperty("portTopicDataZmq"))
                    object.portTopicDataZmq = message.portTopicDataZmq;
                if (message.portTopicDataWs != null && message.hasOwnProperty("portTopicDataWs"))
                    object.portTopicDataWs = message.portTopicDataWs;
                if (message.constantsJson != null && message.hasOwnProperty("constantsJson"))
                    object.constantsJson = message.constantsJson;
                return object;
            };

            /**
             * Converts this Server to JSON.
             * @function toJSON
             * @memberof ubii.servers.Server
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Server.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Server;
        })();

        return servers;
    })();

    ubii.services = (function() {

        /**
         * Namespace services.
         * @memberof ubii
         * @namespace
         */
        var services = {};

        services.request = (function() {

            /**
             * Namespace request.
             * @memberof ubii.services
             * @namespace
             */
            var request = {};

            request.TopicSubscription = (function() {

                /**
                 * Properties of a TopicSubscription.
                 * @memberof ubii.services.request
                 * @interface ITopicSubscription
                 * @property {string|null} [clientId] TopicSubscription clientId
                 * @property {Array.<string>|null} [subscribeTopics] TopicSubscription subscribeTopics
                 * @property {Array.<string>|null} [unsubscribeTopics] TopicSubscription unsubscribeTopics
                 * @property {Array.<string>|null} [subscribeTopicRegexp] TopicSubscription subscribeTopicRegexp
                 * @property {Array.<string>|null} [unsubscribeTopicRegexp] TopicSubscription unsubscribeTopicRegexp
                 */

                /**
                 * Constructs a new TopicSubscription.
                 * @memberof ubii.services.request
                 * @classdesc Represents a TopicSubscription.
                 * @implements ITopicSubscription
                 * @constructor
                 * @param {ubii.services.request.ITopicSubscription=} [properties] Properties to set
                 */
                function TopicSubscription(properties) {
                    this.subscribeTopics = [];
                    this.unsubscribeTopics = [];
                    this.subscribeTopicRegexp = [];
                    this.unsubscribeTopicRegexp = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TopicSubscription clientId.
                 * @member {string} clientId
                 * @memberof ubii.services.request.TopicSubscription
                 * @instance
                 */
                TopicSubscription.prototype.clientId = "";

                /**
                 * TopicSubscription subscribeTopics.
                 * @member {Array.<string>} subscribeTopics
                 * @memberof ubii.services.request.TopicSubscription
                 * @instance
                 */
                TopicSubscription.prototype.subscribeTopics = $util.emptyArray;

                /**
                 * TopicSubscription unsubscribeTopics.
                 * @member {Array.<string>} unsubscribeTopics
                 * @memberof ubii.services.request.TopicSubscription
                 * @instance
                 */
                TopicSubscription.prototype.unsubscribeTopics = $util.emptyArray;

                /**
                 * TopicSubscription subscribeTopicRegexp.
                 * @member {Array.<string>} subscribeTopicRegexp
                 * @memberof ubii.services.request.TopicSubscription
                 * @instance
                 */
                TopicSubscription.prototype.subscribeTopicRegexp = $util.emptyArray;

                /**
                 * TopicSubscription unsubscribeTopicRegexp.
                 * @member {Array.<string>} unsubscribeTopicRegexp
                 * @memberof ubii.services.request.TopicSubscription
                 * @instance
                 */
                TopicSubscription.prototype.unsubscribeTopicRegexp = $util.emptyArray;

                /**
                 * Creates a new TopicSubscription instance using the specified properties.
                 * @function create
                 * @memberof ubii.services.request.TopicSubscription
                 * @static
                 * @param {ubii.services.request.ITopicSubscription=} [properties] Properties to set
                 * @returns {ubii.services.request.TopicSubscription} TopicSubscription instance
                 */
                TopicSubscription.create = function create(properties) {
                    return new TopicSubscription(properties);
                };

                /**
                 * Encodes the specified TopicSubscription message. Does not implicitly {@link ubii.services.request.TopicSubscription.verify|verify} messages.
                 * @function encode
                 * @memberof ubii.services.request.TopicSubscription
                 * @static
                 * @param {ubii.services.request.ITopicSubscription} message TopicSubscription message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TopicSubscription.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.clientId != null && message.hasOwnProperty("clientId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.clientId);
                    if (message.subscribeTopics != null && message.subscribeTopics.length)
                        for (var i = 0; i < message.subscribeTopics.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.subscribeTopics[i]);
                    if (message.unsubscribeTopics != null && message.unsubscribeTopics.length)
                        for (var i = 0; i < message.unsubscribeTopics.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.unsubscribeTopics[i]);
                    if (message.subscribeTopicRegexp != null && message.subscribeTopicRegexp.length)
                        for (var i = 0; i < message.subscribeTopicRegexp.length; ++i)
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.subscribeTopicRegexp[i]);
                    if (message.unsubscribeTopicRegexp != null && message.unsubscribeTopicRegexp.length)
                        for (var i = 0; i < message.unsubscribeTopicRegexp.length; ++i)
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.unsubscribeTopicRegexp[i]);
                    return writer;
                };

                /**
                 * Encodes the specified TopicSubscription message, length delimited. Does not implicitly {@link ubii.services.request.TopicSubscription.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof ubii.services.request.TopicSubscription
                 * @static
                 * @param {ubii.services.request.ITopicSubscription} message TopicSubscription message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TopicSubscription.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a TopicSubscription message from the specified reader or buffer.
                 * @function decode
                 * @memberof ubii.services.request.TopicSubscription
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {ubii.services.request.TopicSubscription} TopicSubscription
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TopicSubscription.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.services.request.TopicSubscription();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.clientId = reader.string();
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
                        case 4:
                            if (!(message.subscribeTopicRegexp && message.subscribeTopicRegexp.length))
                                message.subscribeTopicRegexp = [];
                            message.subscribeTopicRegexp.push(reader.string());
                            break;
                        case 5:
                            if (!(message.unsubscribeTopicRegexp && message.unsubscribeTopicRegexp.length))
                                message.unsubscribeTopicRegexp = [];
                            message.unsubscribeTopicRegexp.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a TopicSubscription message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof ubii.services.request.TopicSubscription
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {ubii.services.request.TopicSubscription} TopicSubscription
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TopicSubscription.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TopicSubscription message.
                 * @function verify
                 * @memberof ubii.services.request.TopicSubscription
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TopicSubscription.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.clientId != null && message.hasOwnProperty("clientId"))
                        if (!$util.isString(message.clientId))
                            return "clientId: string expected";
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
                    if (message.subscribeTopicRegexp != null && message.hasOwnProperty("subscribeTopicRegexp")) {
                        if (!Array.isArray(message.subscribeTopicRegexp))
                            return "subscribeTopicRegexp: array expected";
                        for (var i = 0; i < message.subscribeTopicRegexp.length; ++i)
                            if (!$util.isString(message.subscribeTopicRegexp[i]))
                                return "subscribeTopicRegexp: string[] expected";
                    }
                    if (message.unsubscribeTopicRegexp != null && message.hasOwnProperty("unsubscribeTopicRegexp")) {
                        if (!Array.isArray(message.unsubscribeTopicRegexp))
                            return "unsubscribeTopicRegexp: array expected";
                        for (var i = 0; i < message.unsubscribeTopicRegexp.length; ++i)
                            if (!$util.isString(message.unsubscribeTopicRegexp[i]))
                                return "unsubscribeTopicRegexp: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a TopicSubscription message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof ubii.services.request.TopicSubscription
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {ubii.services.request.TopicSubscription} TopicSubscription
                 */
                TopicSubscription.fromObject = function fromObject(object) {
                    if (object instanceof $root.ubii.services.request.TopicSubscription)
                        return object;
                    var message = new $root.ubii.services.request.TopicSubscription();
                    if (object.clientId != null)
                        message.clientId = String(object.clientId);
                    if (object.subscribeTopics) {
                        if (!Array.isArray(object.subscribeTopics))
                            throw TypeError(".ubii.services.request.TopicSubscription.subscribeTopics: array expected");
                        message.subscribeTopics = [];
                        for (var i = 0; i < object.subscribeTopics.length; ++i)
                            message.subscribeTopics[i] = String(object.subscribeTopics[i]);
                    }
                    if (object.unsubscribeTopics) {
                        if (!Array.isArray(object.unsubscribeTopics))
                            throw TypeError(".ubii.services.request.TopicSubscription.unsubscribeTopics: array expected");
                        message.unsubscribeTopics = [];
                        for (var i = 0; i < object.unsubscribeTopics.length; ++i)
                            message.unsubscribeTopics[i] = String(object.unsubscribeTopics[i]);
                    }
                    if (object.subscribeTopicRegexp) {
                        if (!Array.isArray(object.subscribeTopicRegexp))
                            throw TypeError(".ubii.services.request.TopicSubscription.subscribeTopicRegexp: array expected");
                        message.subscribeTopicRegexp = [];
                        for (var i = 0; i < object.subscribeTopicRegexp.length; ++i)
                            message.subscribeTopicRegexp[i] = String(object.subscribeTopicRegexp[i]);
                    }
                    if (object.unsubscribeTopicRegexp) {
                        if (!Array.isArray(object.unsubscribeTopicRegexp))
                            throw TypeError(".ubii.services.request.TopicSubscription.unsubscribeTopicRegexp: array expected");
                        message.unsubscribeTopicRegexp = [];
                        for (var i = 0; i < object.unsubscribeTopicRegexp.length; ++i)
                            message.unsubscribeTopicRegexp[i] = String(object.unsubscribeTopicRegexp[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a TopicSubscription message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof ubii.services.request.TopicSubscription
                 * @static
                 * @param {ubii.services.request.TopicSubscription} message TopicSubscription
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TopicSubscription.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.subscribeTopics = [];
                        object.unsubscribeTopics = [];
                        object.subscribeTopicRegexp = [];
                        object.unsubscribeTopicRegexp = [];
                    }
                    if (options.defaults)
                        object.clientId = "";
                    if (message.clientId != null && message.hasOwnProperty("clientId"))
                        object.clientId = message.clientId;
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
                    if (message.subscribeTopicRegexp && message.subscribeTopicRegexp.length) {
                        object.subscribeTopicRegexp = [];
                        for (var j = 0; j < message.subscribeTopicRegexp.length; ++j)
                            object.subscribeTopicRegexp[j] = message.subscribeTopicRegexp[j];
                    }
                    if (message.unsubscribeTopicRegexp && message.unsubscribeTopicRegexp.length) {
                        object.unsubscribeTopicRegexp = [];
                        for (var j = 0; j < message.unsubscribeTopicRegexp.length; ++j)
                            object.unsubscribeTopicRegexp[j] = message.unsubscribeTopicRegexp[j];
                    }
                    return object;
                };

                /**
                 * Converts this TopicSubscription to JSON.
                 * @function toJSON
                 * @memberof ubii.services.request.TopicSubscription
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TopicSubscription.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return TopicSubscription;
            })();

            return request;
        })();

        services.Service = (function() {

            /**
             * Properties of a Service.
             * @memberof ubii.services
             * @interface IService
             * @property {string|null} [topic] Service topic
             * @property {string|null} [requestMessageFormat] Service requestMessageFormat
             * @property {string|null} [responseMessageFormat] Service responseMessageFormat
             * @property {Array.<string>|null} [tags] Service tags
             * @property {string|null} [description] Service description
             */

            /**
             * Constructs a new Service.
             * @memberof ubii.services
             * @classdesc Represents a Service.
             * @implements IService
             * @constructor
             * @param {ubii.services.IService=} [properties] Properties to set
             */
            function Service(properties) {
                this.tags = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Service topic.
             * @member {string} topic
             * @memberof ubii.services.Service
             * @instance
             */
            Service.prototype.topic = "";

            /**
             * Service requestMessageFormat.
             * @member {string} requestMessageFormat
             * @memberof ubii.services.Service
             * @instance
             */
            Service.prototype.requestMessageFormat = "";

            /**
             * Service responseMessageFormat.
             * @member {string} responseMessageFormat
             * @memberof ubii.services.Service
             * @instance
             */
            Service.prototype.responseMessageFormat = "";

            /**
             * Service tags.
             * @member {Array.<string>} tags
             * @memberof ubii.services.Service
             * @instance
             */
            Service.prototype.tags = $util.emptyArray;

            /**
             * Service description.
             * @member {string} description
             * @memberof ubii.services.Service
             * @instance
             */
            Service.prototype.description = "";

            /**
             * Creates a new Service instance using the specified properties.
             * @function create
             * @memberof ubii.services.Service
             * @static
             * @param {ubii.services.IService=} [properties] Properties to set
             * @returns {ubii.services.Service} Service instance
             */
            Service.create = function create(properties) {
                return new Service(properties);
            };

            /**
             * Encodes the specified Service message. Does not implicitly {@link ubii.services.Service.verify|verify} messages.
             * @function encode
             * @memberof ubii.services.Service
             * @static
             * @param {ubii.services.IService} message Service message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Service.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.topic != null && message.hasOwnProperty("topic"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.topic);
                if (message.requestMessageFormat != null && message.hasOwnProperty("requestMessageFormat"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.requestMessageFormat);
                if (message.responseMessageFormat != null && message.hasOwnProperty("responseMessageFormat"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.responseMessageFormat);
                if (message.tags != null && message.tags.length)
                    for (var i = 0; i < message.tags.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.tags[i]);
                if (message.description != null && message.hasOwnProperty("description"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.description);
                return writer;
            };

            /**
             * Encodes the specified Service message, length delimited. Does not implicitly {@link ubii.services.Service.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.services.Service
             * @static
             * @param {ubii.services.IService} message Service message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Service.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Service message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.services.Service
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.services.Service} Service
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Service.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.services.Service();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.topic = reader.string();
                        break;
                    case 2:
                        message.requestMessageFormat = reader.string();
                        break;
                    case 3:
                        message.responseMessageFormat = reader.string();
                        break;
                    case 4:
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        message.tags.push(reader.string());
                        break;
                    case 5:
                        message.description = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Service message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.services.Service
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.services.Service} Service
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Service.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Service message.
             * @function verify
             * @memberof ubii.services.Service
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Service.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.topic != null && message.hasOwnProperty("topic"))
                    if (!$util.isString(message.topic))
                        return "topic: string expected";
                if (message.requestMessageFormat != null && message.hasOwnProperty("requestMessageFormat"))
                    if (!$util.isString(message.requestMessageFormat))
                        return "requestMessageFormat: string expected";
                if (message.responseMessageFormat != null && message.hasOwnProperty("responseMessageFormat"))
                    if (!$util.isString(message.responseMessageFormat))
                        return "responseMessageFormat: string expected";
                if (message.tags != null && message.hasOwnProperty("tags")) {
                    if (!Array.isArray(message.tags))
                        return "tags: array expected";
                    for (var i = 0; i < message.tags.length; ++i)
                        if (!$util.isString(message.tags[i]))
                            return "tags: string[] expected";
                }
                if (message.description != null && message.hasOwnProperty("description"))
                    if (!$util.isString(message.description))
                        return "description: string expected";
                return null;
            };

            /**
             * Creates a Service message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.services.Service
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.services.Service} Service
             */
            Service.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.services.Service)
                    return object;
                var message = new $root.ubii.services.Service();
                if (object.topic != null)
                    message.topic = String(object.topic);
                if (object.requestMessageFormat != null)
                    message.requestMessageFormat = String(object.requestMessageFormat);
                if (object.responseMessageFormat != null)
                    message.responseMessageFormat = String(object.responseMessageFormat);
                if (object.tags) {
                    if (!Array.isArray(object.tags))
                        throw TypeError(".ubii.services.Service.tags: array expected");
                    message.tags = [];
                    for (var i = 0; i < object.tags.length; ++i)
                        message.tags[i] = String(object.tags[i]);
                }
                if (object.description != null)
                    message.description = String(object.description);
                return message;
            };

            /**
             * Creates a plain object from a Service message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.services.Service
             * @static
             * @param {ubii.services.Service} message Service
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Service.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.tags = [];
                if (options.defaults) {
                    object.topic = "";
                    object.requestMessageFormat = "";
                    object.responseMessageFormat = "";
                    object.description = "";
                }
                if (message.topic != null && message.hasOwnProperty("topic"))
                    object.topic = message.topic;
                if (message.requestMessageFormat != null && message.hasOwnProperty("requestMessageFormat"))
                    object.requestMessageFormat = message.requestMessageFormat;
                if (message.responseMessageFormat != null && message.hasOwnProperty("responseMessageFormat"))
                    object.responseMessageFormat = message.responseMessageFormat;
                if (message.tags && message.tags.length) {
                    object.tags = [];
                    for (var j = 0; j < message.tags.length; ++j)
                        object.tags[j] = message.tags[j];
                }
                if (message.description != null && message.hasOwnProperty("description"))
                    object.description = message.description;
                return object;
            };

            /**
             * Converts this Service to JSON.
             * @function toJSON
             * @memberof ubii.services.Service
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Service.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Service;
        })();

        services.ServiceList = (function() {

            /**
             * Properties of a ServiceList.
             * @memberof ubii.services
             * @interface IServiceList
             * @property {Array.<ubii.services.IService>|null} [elements] ServiceList elements
             */

            /**
             * Constructs a new ServiceList.
             * @memberof ubii.services
             * @classdesc Represents a ServiceList.
             * @implements IServiceList
             * @constructor
             * @param {ubii.services.IServiceList=} [properties] Properties to set
             */
            function ServiceList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceList elements.
             * @member {Array.<ubii.services.IService>} elements
             * @memberof ubii.services.ServiceList
             * @instance
             */
            ServiceList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new ServiceList instance using the specified properties.
             * @function create
             * @memberof ubii.services.ServiceList
             * @static
             * @param {ubii.services.IServiceList=} [properties] Properties to set
             * @returns {ubii.services.ServiceList} ServiceList instance
             */
            ServiceList.create = function create(properties) {
                return new ServiceList(properties);
            };

            /**
             * Encodes the specified ServiceList message. Does not implicitly {@link ubii.services.ServiceList.verify|verify} messages.
             * @function encode
             * @memberof ubii.services.ServiceList
             * @static
             * @param {ubii.services.IServiceList} message ServiceList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.services.Service.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceList message, length delimited. Does not implicitly {@link ubii.services.ServiceList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.services.ServiceList
             * @static
             * @param {ubii.services.IServiceList} message ServiceList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.services.ServiceList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.services.ServiceList} ServiceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.services.ServiceList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.services.Service.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ServiceList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.services.ServiceList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.services.ServiceList} ServiceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceList message.
             * @function verify
             * @memberof ubii.services.ServiceList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.services.Service.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ServiceList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.services.ServiceList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.services.ServiceList} ServiceList
             */
            ServiceList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.services.ServiceList)
                    return object;
                var message = new $root.ubii.services.ServiceList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.services.ServiceList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.services.ServiceList.elements: object expected");
                        message.elements[i] = $root.ubii.services.Service.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.services.ServiceList
             * @static
             * @param {ubii.services.ServiceList} message ServiceList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.services.Service.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this ServiceList to JSON.
             * @function toJSON
             * @memberof ubii.services.ServiceList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceList;
        })();

        services.ServiceReply = (function() {

            /**
             * Properties of a ServiceReply.
             * @memberof ubii.services
             * @interface IServiceReply
             * @property {ubii.general.ISuccess|null} [success] ServiceReply success
             * @property {ubii.general.IError|null} [error] ServiceReply error
             * @property {ubii.clients.IClient|null} [client] ServiceReply client
             * @property {ubii.devices.IDevice|null} [device] ServiceReply device
             * @property {ubii.servers.IServer|null} [server] ServiceReply server
             * @property {ubii.sessions.ISession|null} [session] ServiceReply session
             * @property {ubii.sessions.ISessionList|null} [sessionList] ServiceReply sessionList
             * @property {ubii.processing.IProcessingModule|null} [processingModule] ServiceReply processingModule
             * @property {ubii.processing.IProcessingModuleList|null} [processingModuleList] ServiceReply processingModuleList
             * @property {ubii.dataStructure.IStringList|null} [stringList] ServiceReply stringList
             * @property {ubii.devices.ITopicMux|null} [topicMux] ServiceReply topicMux
             * @property {ubii.devices.ITopicMuxList|null} [topicMuxList] ServiceReply topicMuxList
             * @property {ubii.devices.ITopicDemux|null} [topicDemux] ServiceReply topicDemux
             * @property {ubii.devices.ITopicDemuxList|null} [topicDemuxList] ServiceReply topicDemuxList
             * @property {ubii.clients.IClientList|null} [clientList] ServiceReply clientList
             * @property {ubii.devices.IDeviceList|null} [deviceList] ServiceReply deviceList
             * @property {ubii.services.IService|null} [service] ServiceReply service
             * @property {ubii.services.IServiceList|null} [serviceList] ServiceReply serviceList
             * @property {ubii.processing.ILockstepProcessingReply|null} [lockstepProcessingReply] ServiceReply lockstepProcessingReply
             */

            /**
             * Constructs a new ServiceReply.
             * @memberof ubii.services
             * @classdesc Represents a ServiceReply.
             * @implements IServiceReply
             * @constructor
             * @param {ubii.services.IServiceReply=} [properties] Properties to set
             */
            function ServiceReply(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceReply success.
             * @member {ubii.general.ISuccess|null|undefined} success
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.success = null;

            /**
             * ServiceReply error.
             * @member {ubii.general.IError|null|undefined} error
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.error = null;

            /**
             * ServiceReply client.
             * @member {ubii.clients.IClient|null|undefined} client
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.client = null;

            /**
             * ServiceReply device.
             * @member {ubii.devices.IDevice|null|undefined} device
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.device = null;

            /**
             * ServiceReply server.
             * @member {ubii.servers.IServer|null|undefined} server
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.server = null;

            /**
             * ServiceReply session.
             * @member {ubii.sessions.ISession|null|undefined} session
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.session = null;

            /**
             * ServiceReply sessionList.
             * @member {ubii.sessions.ISessionList|null|undefined} sessionList
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.sessionList = null;

            /**
             * ServiceReply processingModule.
             * @member {ubii.processing.IProcessingModule|null|undefined} processingModule
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.processingModule = null;

            /**
             * ServiceReply processingModuleList.
             * @member {ubii.processing.IProcessingModuleList|null|undefined} processingModuleList
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.processingModuleList = null;

            /**
             * ServiceReply stringList.
             * @member {ubii.dataStructure.IStringList|null|undefined} stringList
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.stringList = null;

            /**
             * ServiceReply topicMux.
             * @member {ubii.devices.ITopicMux|null|undefined} topicMux
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.topicMux = null;

            /**
             * ServiceReply topicMuxList.
             * @member {ubii.devices.ITopicMuxList|null|undefined} topicMuxList
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.topicMuxList = null;

            /**
             * ServiceReply topicDemux.
             * @member {ubii.devices.ITopicDemux|null|undefined} topicDemux
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.topicDemux = null;

            /**
             * ServiceReply topicDemuxList.
             * @member {ubii.devices.ITopicDemuxList|null|undefined} topicDemuxList
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.topicDemuxList = null;

            /**
             * ServiceReply clientList.
             * @member {ubii.clients.IClientList|null|undefined} clientList
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.clientList = null;

            /**
             * ServiceReply deviceList.
             * @member {ubii.devices.IDeviceList|null|undefined} deviceList
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.deviceList = null;

            /**
             * ServiceReply service.
             * @member {ubii.services.IService|null|undefined} service
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.service = null;

            /**
             * ServiceReply serviceList.
             * @member {ubii.services.IServiceList|null|undefined} serviceList
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.serviceList = null;

            /**
             * ServiceReply lockstepProcessingReply.
             * @member {ubii.processing.ILockstepProcessingReply|null|undefined} lockstepProcessingReply
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            ServiceReply.prototype.lockstepProcessingReply = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * ServiceReply type.
             * @member {"success"|"error"|"client"|"device"|"server"|"session"|"sessionList"|"processingModule"|"processingModuleList"|"stringList"|"topicMux"|"topicMuxList"|"topicDemux"|"topicDemuxList"|"clientList"|"deviceList"|"service"|"serviceList"|"lockstepProcessingReply"|undefined} type
             * @memberof ubii.services.ServiceReply
             * @instance
             */
            Object.defineProperty(ServiceReply.prototype, "type", {
                get: $util.oneOfGetter($oneOfFields = ["success", "error", "client", "device", "server", "session", "sessionList", "processingModule", "processingModuleList", "stringList", "topicMux", "topicMuxList", "topicDemux", "topicDemuxList", "clientList", "deviceList", "service", "serviceList", "lockstepProcessingReply"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ServiceReply instance using the specified properties.
             * @function create
             * @memberof ubii.services.ServiceReply
             * @static
             * @param {ubii.services.IServiceReply=} [properties] Properties to set
             * @returns {ubii.services.ServiceReply} ServiceReply instance
             */
            ServiceReply.create = function create(properties) {
                return new ServiceReply(properties);
            };

            /**
             * Encodes the specified ServiceReply message. Does not implicitly {@link ubii.services.ServiceReply.verify|verify} messages.
             * @function encode
             * @memberof ubii.services.ServiceReply
             * @static
             * @param {ubii.services.IServiceReply} message ServiceReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceReply.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.success != null && message.hasOwnProperty("success"))
                    $root.ubii.general.Success.encode(message.success, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.ubii.general.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.client != null && message.hasOwnProperty("client"))
                    $root.ubii.clients.Client.encode(message.client, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.device != null && message.hasOwnProperty("device"))
                    $root.ubii.devices.Device.encode(message.device, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.server != null && message.hasOwnProperty("server"))
                    $root.ubii.servers.Server.encode(message.server, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.session != null && message.hasOwnProperty("session"))
                    $root.ubii.sessions.Session.encode(message.session, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.sessionList != null && message.hasOwnProperty("sessionList"))
                    $root.ubii.sessions.SessionList.encode(message.sessionList, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.processingModule != null && message.hasOwnProperty("processingModule"))
                    $root.ubii.processing.ProcessingModule.encode(message.processingModule, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.processingModuleList != null && message.hasOwnProperty("processingModuleList"))
                    $root.ubii.processing.ProcessingModuleList.encode(message.processingModuleList, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.stringList != null && message.hasOwnProperty("stringList"))
                    $root.ubii.dataStructure.StringList.encode(message.stringList, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.topicMux != null && message.hasOwnProperty("topicMux"))
                    $root.ubii.devices.TopicMux.encode(message.topicMux, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                if (message.topicMuxList != null && message.hasOwnProperty("topicMuxList"))
                    $root.ubii.devices.TopicMuxList.encode(message.topicMuxList, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                if (message.topicDemux != null && message.hasOwnProperty("topicDemux"))
                    $root.ubii.devices.TopicDemux.encode(message.topicDemux, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                if (message.topicDemuxList != null && message.hasOwnProperty("topicDemuxList"))
                    $root.ubii.devices.TopicDemuxList.encode(message.topicDemuxList, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                if (message.clientList != null && message.hasOwnProperty("clientList"))
                    $root.ubii.clients.ClientList.encode(message.clientList, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                if (message.deviceList != null && message.hasOwnProperty("deviceList"))
                    $root.ubii.devices.DeviceList.encode(message.deviceList, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                if (message.service != null && message.hasOwnProperty("service"))
                    $root.ubii.services.Service.encode(message.service, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
                if (message.serviceList != null && message.hasOwnProperty("serviceList"))
                    $root.ubii.services.ServiceList.encode(message.serviceList, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
                if (message.lockstepProcessingReply != null && message.hasOwnProperty("lockstepProcessingReply"))
                    $root.ubii.processing.LockstepProcessingReply.encode(message.lockstepProcessingReply, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceReply message, length delimited. Does not implicitly {@link ubii.services.ServiceReply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.services.ServiceReply
             * @static
             * @param {ubii.services.IServiceReply} message ServiceReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceReply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceReply message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.services.ServiceReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.services.ServiceReply} ServiceReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceReply.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.services.ServiceReply();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.success = $root.ubii.general.Success.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.error = $root.ubii.general.Error.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.client = $root.ubii.clients.Client.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.device = $root.ubii.devices.Device.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.server = $root.ubii.servers.Server.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.session = $root.ubii.sessions.Session.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.sessionList = $root.ubii.sessions.SessionList.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.processingModule = $root.ubii.processing.ProcessingModule.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.processingModuleList = $root.ubii.processing.ProcessingModuleList.decode(reader, reader.uint32());
                        break;
                    case 10:
                        message.stringList = $root.ubii.dataStructure.StringList.decode(reader, reader.uint32());
                        break;
                    case 11:
                        message.topicMux = $root.ubii.devices.TopicMux.decode(reader, reader.uint32());
                        break;
                    case 12:
                        message.topicMuxList = $root.ubii.devices.TopicMuxList.decode(reader, reader.uint32());
                        break;
                    case 13:
                        message.topicDemux = $root.ubii.devices.TopicDemux.decode(reader, reader.uint32());
                        break;
                    case 14:
                        message.topicDemuxList = $root.ubii.devices.TopicDemuxList.decode(reader, reader.uint32());
                        break;
                    case 15:
                        message.clientList = $root.ubii.clients.ClientList.decode(reader, reader.uint32());
                        break;
                    case 16:
                        message.deviceList = $root.ubii.devices.DeviceList.decode(reader, reader.uint32());
                        break;
                    case 17:
                        message.service = $root.ubii.services.Service.decode(reader, reader.uint32());
                        break;
                    case 18:
                        message.serviceList = $root.ubii.services.ServiceList.decode(reader, reader.uint32());
                        break;
                    case 19:
                        message.lockstepProcessingReply = $root.ubii.processing.LockstepProcessingReply.decode(reader, reader.uint32());
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
             * @memberof ubii.services.ServiceReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.services.ServiceReply} ServiceReply
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
             * @memberof ubii.services.ServiceReply
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
                        var error = $root.ubii.general.Success.verify(message.success);
                        if (error)
                            return "success." + error;
                    }
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.general.Error.verify(message.error);
                        if (error)
                            return "error." + error;
                    }
                }
                if (message.client != null && message.hasOwnProperty("client")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.clients.Client.verify(message.client);
                        if (error)
                            return "client." + error;
                    }
                }
                if (message.device != null && message.hasOwnProperty("device")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.Device.verify(message.device);
                        if (error)
                            return "device." + error;
                    }
                }
                if (message.server != null && message.hasOwnProperty("server")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.servers.Server.verify(message.server);
                        if (error)
                            return "server." + error;
                    }
                }
                if (message.session != null && message.hasOwnProperty("session")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.sessions.Session.verify(message.session);
                        if (error)
                            return "session." + error;
                    }
                }
                if (message.sessionList != null && message.hasOwnProperty("sessionList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.sessions.SessionList.verify(message.sessionList);
                        if (error)
                            return "sessionList." + error;
                    }
                }
                if (message.processingModule != null && message.hasOwnProperty("processingModule")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.processing.ProcessingModule.verify(message.processingModule);
                        if (error)
                            return "processingModule." + error;
                    }
                }
                if (message.processingModuleList != null && message.hasOwnProperty("processingModuleList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.processing.ProcessingModuleList.verify(message.processingModuleList);
                        if (error)
                            return "processingModuleList." + error;
                    }
                }
                if (message.stringList != null && message.hasOwnProperty("stringList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.StringList.verify(message.stringList);
                        if (error)
                            return "stringList." + error;
                    }
                }
                if (message.topicMux != null && message.hasOwnProperty("topicMux")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.TopicMux.verify(message.topicMux);
                        if (error)
                            return "topicMux." + error;
                    }
                }
                if (message.topicMuxList != null && message.hasOwnProperty("topicMuxList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.TopicMuxList.verify(message.topicMuxList);
                        if (error)
                            return "topicMuxList." + error;
                    }
                }
                if (message.topicDemux != null && message.hasOwnProperty("topicDemux")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.TopicDemux.verify(message.topicDemux);
                        if (error)
                            return "topicDemux." + error;
                    }
                }
                if (message.topicDemuxList != null && message.hasOwnProperty("topicDemuxList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.TopicDemuxList.verify(message.topicDemuxList);
                        if (error)
                            return "topicDemuxList." + error;
                    }
                }
                if (message.clientList != null && message.hasOwnProperty("clientList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.clients.ClientList.verify(message.clientList);
                        if (error)
                            return "clientList." + error;
                    }
                }
                if (message.deviceList != null && message.hasOwnProperty("deviceList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.DeviceList.verify(message.deviceList);
                        if (error)
                            return "deviceList." + error;
                    }
                }
                if (message.service != null && message.hasOwnProperty("service")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.services.Service.verify(message.service);
                        if (error)
                            return "service." + error;
                    }
                }
                if (message.serviceList != null && message.hasOwnProperty("serviceList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.services.ServiceList.verify(message.serviceList);
                        if (error)
                            return "serviceList." + error;
                    }
                }
                if (message.lockstepProcessingReply != null && message.hasOwnProperty("lockstepProcessingReply")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.processing.LockstepProcessingReply.verify(message.lockstepProcessingReply);
                        if (error)
                            return "lockstepProcessingReply." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ServiceReply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.services.ServiceReply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.services.ServiceReply} ServiceReply
             */
            ServiceReply.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.services.ServiceReply)
                    return object;
                var message = new $root.ubii.services.ServiceReply();
                if (object.success != null) {
                    if (typeof object.success !== "object")
                        throw TypeError(".ubii.services.ServiceReply.success: object expected");
                    message.success = $root.ubii.general.Success.fromObject(object.success);
                }
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".ubii.services.ServiceReply.error: object expected");
                    message.error = $root.ubii.general.Error.fromObject(object.error);
                }
                if (object.client != null) {
                    if (typeof object.client !== "object")
                        throw TypeError(".ubii.services.ServiceReply.client: object expected");
                    message.client = $root.ubii.clients.Client.fromObject(object.client);
                }
                if (object.device != null) {
                    if (typeof object.device !== "object")
                        throw TypeError(".ubii.services.ServiceReply.device: object expected");
                    message.device = $root.ubii.devices.Device.fromObject(object.device);
                }
                if (object.server != null) {
                    if (typeof object.server !== "object")
                        throw TypeError(".ubii.services.ServiceReply.server: object expected");
                    message.server = $root.ubii.servers.Server.fromObject(object.server);
                }
                if (object.session != null) {
                    if (typeof object.session !== "object")
                        throw TypeError(".ubii.services.ServiceReply.session: object expected");
                    message.session = $root.ubii.sessions.Session.fromObject(object.session);
                }
                if (object.sessionList != null) {
                    if (typeof object.sessionList !== "object")
                        throw TypeError(".ubii.services.ServiceReply.sessionList: object expected");
                    message.sessionList = $root.ubii.sessions.SessionList.fromObject(object.sessionList);
                }
                if (object.processingModule != null) {
                    if (typeof object.processingModule !== "object")
                        throw TypeError(".ubii.services.ServiceReply.processingModule: object expected");
                    message.processingModule = $root.ubii.processing.ProcessingModule.fromObject(object.processingModule);
                }
                if (object.processingModuleList != null) {
                    if (typeof object.processingModuleList !== "object")
                        throw TypeError(".ubii.services.ServiceReply.processingModuleList: object expected");
                    message.processingModuleList = $root.ubii.processing.ProcessingModuleList.fromObject(object.processingModuleList);
                }
                if (object.stringList != null) {
                    if (typeof object.stringList !== "object")
                        throw TypeError(".ubii.services.ServiceReply.stringList: object expected");
                    message.stringList = $root.ubii.dataStructure.StringList.fromObject(object.stringList);
                }
                if (object.topicMux != null) {
                    if (typeof object.topicMux !== "object")
                        throw TypeError(".ubii.services.ServiceReply.topicMux: object expected");
                    message.topicMux = $root.ubii.devices.TopicMux.fromObject(object.topicMux);
                }
                if (object.topicMuxList != null) {
                    if (typeof object.topicMuxList !== "object")
                        throw TypeError(".ubii.services.ServiceReply.topicMuxList: object expected");
                    message.topicMuxList = $root.ubii.devices.TopicMuxList.fromObject(object.topicMuxList);
                }
                if (object.topicDemux != null) {
                    if (typeof object.topicDemux !== "object")
                        throw TypeError(".ubii.services.ServiceReply.topicDemux: object expected");
                    message.topicDemux = $root.ubii.devices.TopicDemux.fromObject(object.topicDemux);
                }
                if (object.topicDemuxList != null) {
                    if (typeof object.topicDemuxList !== "object")
                        throw TypeError(".ubii.services.ServiceReply.topicDemuxList: object expected");
                    message.topicDemuxList = $root.ubii.devices.TopicDemuxList.fromObject(object.topicDemuxList);
                }
                if (object.clientList != null) {
                    if (typeof object.clientList !== "object")
                        throw TypeError(".ubii.services.ServiceReply.clientList: object expected");
                    message.clientList = $root.ubii.clients.ClientList.fromObject(object.clientList);
                }
                if (object.deviceList != null) {
                    if (typeof object.deviceList !== "object")
                        throw TypeError(".ubii.services.ServiceReply.deviceList: object expected");
                    message.deviceList = $root.ubii.devices.DeviceList.fromObject(object.deviceList);
                }
                if (object.service != null) {
                    if (typeof object.service !== "object")
                        throw TypeError(".ubii.services.ServiceReply.service: object expected");
                    message.service = $root.ubii.services.Service.fromObject(object.service);
                }
                if (object.serviceList != null) {
                    if (typeof object.serviceList !== "object")
                        throw TypeError(".ubii.services.ServiceReply.serviceList: object expected");
                    message.serviceList = $root.ubii.services.ServiceList.fromObject(object.serviceList);
                }
                if (object.lockstepProcessingReply != null) {
                    if (typeof object.lockstepProcessingReply !== "object")
                        throw TypeError(".ubii.services.ServiceReply.lockstepProcessingReply: object expected");
                    message.lockstepProcessingReply = $root.ubii.processing.LockstepProcessingReply.fromObject(object.lockstepProcessingReply);
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceReply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.services.ServiceReply
             * @static
             * @param {ubii.services.ServiceReply} message ServiceReply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceReply.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.success != null && message.hasOwnProperty("success")) {
                    object.success = $root.ubii.general.Success.toObject(message.success, options);
                    if (options.oneofs)
                        object.type = "success";
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    object.error = $root.ubii.general.Error.toObject(message.error, options);
                    if (options.oneofs)
                        object.type = "error";
                }
                if (message.client != null && message.hasOwnProperty("client")) {
                    object.client = $root.ubii.clients.Client.toObject(message.client, options);
                    if (options.oneofs)
                        object.type = "client";
                }
                if (message.device != null && message.hasOwnProperty("device")) {
                    object.device = $root.ubii.devices.Device.toObject(message.device, options);
                    if (options.oneofs)
                        object.type = "device";
                }
                if (message.server != null && message.hasOwnProperty("server")) {
                    object.server = $root.ubii.servers.Server.toObject(message.server, options);
                    if (options.oneofs)
                        object.type = "server";
                }
                if (message.session != null && message.hasOwnProperty("session")) {
                    object.session = $root.ubii.sessions.Session.toObject(message.session, options);
                    if (options.oneofs)
                        object.type = "session";
                }
                if (message.sessionList != null && message.hasOwnProperty("sessionList")) {
                    object.sessionList = $root.ubii.sessions.SessionList.toObject(message.sessionList, options);
                    if (options.oneofs)
                        object.type = "sessionList";
                }
                if (message.processingModule != null && message.hasOwnProperty("processingModule")) {
                    object.processingModule = $root.ubii.processing.ProcessingModule.toObject(message.processingModule, options);
                    if (options.oneofs)
                        object.type = "processingModule";
                }
                if (message.processingModuleList != null && message.hasOwnProperty("processingModuleList")) {
                    object.processingModuleList = $root.ubii.processing.ProcessingModuleList.toObject(message.processingModuleList, options);
                    if (options.oneofs)
                        object.type = "processingModuleList";
                }
                if (message.stringList != null && message.hasOwnProperty("stringList")) {
                    object.stringList = $root.ubii.dataStructure.StringList.toObject(message.stringList, options);
                    if (options.oneofs)
                        object.type = "stringList";
                }
                if (message.topicMux != null && message.hasOwnProperty("topicMux")) {
                    object.topicMux = $root.ubii.devices.TopicMux.toObject(message.topicMux, options);
                    if (options.oneofs)
                        object.type = "topicMux";
                }
                if (message.topicMuxList != null && message.hasOwnProperty("topicMuxList")) {
                    object.topicMuxList = $root.ubii.devices.TopicMuxList.toObject(message.topicMuxList, options);
                    if (options.oneofs)
                        object.type = "topicMuxList";
                }
                if (message.topicDemux != null && message.hasOwnProperty("topicDemux")) {
                    object.topicDemux = $root.ubii.devices.TopicDemux.toObject(message.topicDemux, options);
                    if (options.oneofs)
                        object.type = "topicDemux";
                }
                if (message.topicDemuxList != null && message.hasOwnProperty("topicDemuxList")) {
                    object.topicDemuxList = $root.ubii.devices.TopicDemuxList.toObject(message.topicDemuxList, options);
                    if (options.oneofs)
                        object.type = "topicDemuxList";
                }
                if (message.clientList != null && message.hasOwnProperty("clientList")) {
                    object.clientList = $root.ubii.clients.ClientList.toObject(message.clientList, options);
                    if (options.oneofs)
                        object.type = "clientList";
                }
                if (message.deviceList != null && message.hasOwnProperty("deviceList")) {
                    object.deviceList = $root.ubii.devices.DeviceList.toObject(message.deviceList, options);
                    if (options.oneofs)
                        object.type = "deviceList";
                }
                if (message.service != null && message.hasOwnProperty("service")) {
                    object.service = $root.ubii.services.Service.toObject(message.service, options);
                    if (options.oneofs)
                        object.type = "service";
                }
                if (message.serviceList != null && message.hasOwnProperty("serviceList")) {
                    object.serviceList = $root.ubii.services.ServiceList.toObject(message.serviceList, options);
                    if (options.oneofs)
                        object.type = "serviceList";
                }
                if (message.lockstepProcessingReply != null && message.hasOwnProperty("lockstepProcessingReply")) {
                    object.lockstepProcessingReply = $root.ubii.processing.LockstepProcessingReply.toObject(message.lockstepProcessingReply, options);
                    if (options.oneofs)
                        object.type = "lockstepProcessingReply";
                }
                return object;
            };

            /**
             * Converts this ServiceReply to JSON.
             * @function toJSON
             * @memberof ubii.services.ServiceReply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceReply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceReply;
        })();

        services.ServiceRequest = (function() {

            /**
             * Properties of a ServiceRequest.
             * @memberof ubii.services
             * @interface IServiceRequest
             * @property {string|null} [topic] ServiceRequest topic
             * @property {ubii.clients.IClient|null} [client] ServiceRequest client
             * @property {ubii.devices.IDevice|null} [device] ServiceRequest device
             * @property {ubii.services.request.ITopicSubscription|null} [topicSubscription] ServiceRequest topicSubscription
             * @property {ubii.sessions.ISession|null} [session] ServiceRequest session
             * @property {ubii.sessions.ISessionList|null} [sessionList] ServiceRequest sessionList
             * @property {ubii.processing.IProcessingModule|null} [processingModule] ServiceRequest processingModule
             * @property {ubii.processing.IProcessingModuleList|null} [processingModuleList] ServiceRequest processingModuleList
             * @property {ubii.devices.ITopicMux|null} [topicMux] ServiceRequest topicMux
             * @property {ubii.devices.ITopicMuxList|null} [topicMuxList] ServiceRequest topicMuxList
             * @property {ubii.devices.ITopicDemux|null} [topicDemux] ServiceRequest topicDemux
             * @property {ubii.devices.ITopicDemuxList|null} [topicDemuxList] ServiceRequest topicDemuxList
             * @property {ubii.clients.IClientList|null} [clientList] ServiceRequest clientList
             * @property {ubii.devices.IDeviceList|null} [deviceList] ServiceRequest deviceList
             * @property {ubii.processing.ILockstepProcessingRequest|null} [lockstepProcessingRequest] ServiceRequest lockstepProcessingRequest
             */

            /**
             * Constructs a new ServiceRequest.
             * @memberof ubii.services
             * @classdesc Represents a ServiceRequest.
             * @implements IServiceRequest
             * @constructor
             * @param {ubii.services.IServiceRequest=} [properties] Properties to set
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
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.topic = "";

            /**
             * ServiceRequest client.
             * @member {ubii.clients.IClient|null|undefined} client
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.client = null;

            /**
             * ServiceRequest device.
             * @member {ubii.devices.IDevice|null|undefined} device
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.device = null;

            /**
             * ServiceRequest topicSubscription.
             * @member {ubii.services.request.ITopicSubscription|null|undefined} topicSubscription
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.topicSubscription = null;

            /**
             * ServiceRequest session.
             * @member {ubii.sessions.ISession|null|undefined} session
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.session = null;

            /**
             * ServiceRequest sessionList.
             * @member {ubii.sessions.ISessionList|null|undefined} sessionList
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.sessionList = null;

            /**
             * ServiceRequest processingModule.
             * @member {ubii.processing.IProcessingModule|null|undefined} processingModule
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.processingModule = null;

            /**
             * ServiceRequest processingModuleList.
             * @member {ubii.processing.IProcessingModuleList|null|undefined} processingModuleList
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.processingModuleList = null;

            /**
             * ServiceRequest topicMux.
             * @member {ubii.devices.ITopicMux|null|undefined} topicMux
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.topicMux = null;

            /**
             * ServiceRequest topicMuxList.
             * @member {ubii.devices.ITopicMuxList|null|undefined} topicMuxList
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.topicMuxList = null;

            /**
             * ServiceRequest topicDemux.
             * @member {ubii.devices.ITopicDemux|null|undefined} topicDemux
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.topicDemux = null;

            /**
             * ServiceRequest topicDemuxList.
             * @member {ubii.devices.ITopicDemuxList|null|undefined} topicDemuxList
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.topicDemuxList = null;

            /**
             * ServiceRequest clientList.
             * @member {ubii.clients.IClientList|null|undefined} clientList
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.clientList = null;

            /**
             * ServiceRequest deviceList.
             * @member {ubii.devices.IDeviceList|null|undefined} deviceList
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.deviceList = null;

            /**
             * ServiceRequest lockstepProcessingRequest.
             * @member {ubii.processing.ILockstepProcessingRequest|null|undefined} lockstepProcessingRequest
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            ServiceRequest.prototype.lockstepProcessingRequest = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * ServiceRequest type.
             * @member {"client"|"device"|"topicSubscription"|"session"|"sessionList"|"processingModule"|"processingModuleList"|"topicMux"|"topicMuxList"|"topicDemux"|"topicDemuxList"|"clientList"|"deviceList"|"lockstepProcessingRequest"|undefined} type
             * @memberof ubii.services.ServiceRequest
             * @instance
             */
            Object.defineProperty(ServiceRequest.prototype, "type", {
                get: $util.oneOfGetter($oneOfFields = ["client", "device", "topicSubscription", "session", "sessionList", "processingModule", "processingModuleList", "topicMux", "topicMuxList", "topicDemux", "topicDemuxList", "clientList", "deviceList", "lockstepProcessingRequest"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ServiceRequest instance using the specified properties.
             * @function create
             * @memberof ubii.services.ServiceRequest
             * @static
             * @param {ubii.services.IServiceRequest=} [properties] Properties to set
             * @returns {ubii.services.ServiceRequest} ServiceRequest instance
             */
            ServiceRequest.create = function create(properties) {
                return new ServiceRequest(properties);
            };

            /**
             * Encodes the specified ServiceRequest message. Does not implicitly {@link ubii.services.ServiceRequest.verify|verify} messages.
             * @function encode
             * @memberof ubii.services.ServiceRequest
             * @static
             * @param {ubii.services.IServiceRequest} message ServiceRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.topic != null && message.hasOwnProperty("topic"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.topic);
                if (message.client != null && message.hasOwnProperty("client"))
                    $root.ubii.clients.Client.encode(message.client, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.device != null && message.hasOwnProperty("device"))
                    $root.ubii.devices.Device.encode(message.device, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.topicSubscription != null && message.hasOwnProperty("topicSubscription"))
                    $root.ubii.services.request.TopicSubscription.encode(message.topicSubscription, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.session != null && message.hasOwnProperty("session"))
                    $root.ubii.sessions.Session.encode(message.session, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.sessionList != null && message.hasOwnProperty("sessionList"))
                    $root.ubii.sessions.SessionList.encode(message.sessionList, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.processingModule != null && message.hasOwnProperty("processingModule"))
                    $root.ubii.processing.ProcessingModule.encode(message.processingModule, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.processingModuleList != null && message.hasOwnProperty("processingModuleList"))
                    $root.ubii.processing.ProcessingModuleList.encode(message.processingModuleList, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.topicMux != null && message.hasOwnProperty("topicMux"))
                    $root.ubii.devices.TopicMux.encode(message.topicMux, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.topicMuxList != null && message.hasOwnProperty("topicMuxList"))
                    $root.ubii.devices.TopicMuxList.encode(message.topicMuxList, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.topicDemux != null && message.hasOwnProperty("topicDemux"))
                    $root.ubii.devices.TopicDemux.encode(message.topicDemux, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                if (message.topicDemuxList != null && message.hasOwnProperty("topicDemuxList"))
                    $root.ubii.devices.TopicDemuxList.encode(message.topicDemuxList, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                if (message.clientList != null && message.hasOwnProperty("clientList"))
                    $root.ubii.clients.ClientList.encode(message.clientList, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                if (message.deviceList != null && message.hasOwnProperty("deviceList"))
                    $root.ubii.devices.DeviceList.encode(message.deviceList, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                if (message.lockstepProcessingRequest != null && message.hasOwnProperty("lockstepProcessingRequest"))
                    $root.ubii.processing.LockstepProcessingRequest.encode(message.lockstepProcessingRequest, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ServiceRequest message, length delimited. Does not implicitly {@link ubii.services.ServiceRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.services.ServiceRequest
             * @static
             * @param {ubii.services.IServiceRequest} message ServiceRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceRequest message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.services.ServiceRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.services.ServiceRequest} ServiceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.services.ServiceRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.topic = reader.string();
                        break;
                    case 2:
                        message.client = $root.ubii.clients.Client.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.device = $root.ubii.devices.Device.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.topicSubscription = $root.ubii.services.request.TopicSubscription.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.session = $root.ubii.sessions.Session.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.sessionList = $root.ubii.sessions.SessionList.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.processingModule = $root.ubii.processing.ProcessingModule.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.processingModuleList = $root.ubii.processing.ProcessingModuleList.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.topicMux = $root.ubii.devices.TopicMux.decode(reader, reader.uint32());
                        break;
                    case 10:
                        message.topicMuxList = $root.ubii.devices.TopicMuxList.decode(reader, reader.uint32());
                        break;
                    case 11:
                        message.topicDemux = $root.ubii.devices.TopicDemux.decode(reader, reader.uint32());
                        break;
                    case 12:
                        message.topicDemuxList = $root.ubii.devices.TopicDemuxList.decode(reader, reader.uint32());
                        break;
                    case 13:
                        message.clientList = $root.ubii.clients.ClientList.decode(reader, reader.uint32());
                        break;
                    case 14:
                        message.deviceList = $root.ubii.devices.DeviceList.decode(reader, reader.uint32());
                        break;
                    case 15:
                        message.lockstepProcessingRequest = $root.ubii.processing.LockstepProcessingRequest.decode(reader, reader.uint32());
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
             * @memberof ubii.services.ServiceRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.services.ServiceRequest} ServiceRequest
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
             * @memberof ubii.services.ServiceRequest
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
                if (message.client != null && message.hasOwnProperty("client")) {
                    properties.type = 1;
                    {
                        var error = $root.ubii.clients.Client.verify(message.client);
                        if (error)
                            return "client." + error;
                    }
                }
                if (message.device != null && message.hasOwnProperty("device")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.Device.verify(message.device);
                        if (error)
                            return "device." + error;
                    }
                }
                if (message.topicSubscription != null && message.hasOwnProperty("topicSubscription")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.services.request.TopicSubscription.verify(message.topicSubscription);
                        if (error)
                            return "topicSubscription." + error;
                    }
                }
                if (message.session != null && message.hasOwnProperty("session")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.sessions.Session.verify(message.session);
                        if (error)
                            return "session." + error;
                    }
                }
                if (message.sessionList != null && message.hasOwnProperty("sessionList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.sessions.SessionList.verify(message.sessionList);
                        if (error)
                            return "sessionList." + error;
                    }
                }
                if (message.processingModule != null && message.hasOwnProperty("processingModule")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.processing.ProcessingModule.verify(message.processingModule);
                        if (error)
                            return "processingModule." + error;
                    }
                }
                if (message.processingModuleList != null && message.hasOwnProperty("processingModuleList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.processing.ProcessingModuleList.verify(message.processingModuleList);
                        if (error)
                            return "processingModuleList." + error;
                    }
                }
                if (message.topicMux != null && message.hasOwnProperty("topicMux")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.TopicMux.verify(message.topicMux);
                        if (error)
                            return "topicMux." + error;
                    }
                }
                if (message.topicMuxList != null && message.hasOwnProperty("topicMuxList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.TopicMuxList.verify(message.topicMuxList);
                        if (error)
                            return "topicMuxList." + error;
                    }
                }
                if (message.topicDemux != null && message.hasOwnProperty("topicDemux")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.TopicDemux.verify(message.topicDemux);
                        if (error)
                            return "topicDemux." + error;
                    }
                }
                if (message.topicDemuxList != null && message.hasOwnProperty("topicDemuxList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.TopicDemuxList.verify(message.topicDemuxList);
                        if (error)
                            return "topicDemuxList." + error;
                    }
                }
                if (message.clientList != null && message.hasOwnProperty("clientList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.clients.ClientList.verify(message.clientList);
                        if (error)
                            return "clientList." + error;
                    }
                }
                if (message.deviceList != null && message.hasOwnProperty("deviceList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.devices.DeviceList.verify(message.deviceList);
                        if (error)
                            return "deviceList." + error;
                    }
                }
                if (message.lockstepProcessingRequest != null && message.hasOwnProperty("lockstepProcessingRequest")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.processing.LockstepProcessingRequest.verify(message.lockstepProcessingRequest);
                        if (error)
                            return "lockstepProcessingRequest." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ServiceRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.services.ServiceRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.services.ServiceRequest} ServiceRequest
             */
            ServiceRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.services.ServiceRequest)
                    return object;
                var message = new $root.ubii.services.ServiceRequest();
                if (object.topic != null)
                    message.topic = String(object.topic);
                if (object.client != null) {
                    if (typeof object.client !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.client: object expected");
                    message.client = $root.ubii.clients.Client.fromObject(object.client);
                }
                if (object.device != null) {
                    if (typeof object.device !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.device: object expected");
                    message.device = $root.ubii.devices.Device.fromObject(object.device);
                }
                if (object.topicSubscription != null) {
                    if (typeof object.topicSubscription !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.topicSubscription: object expected");
                    message.topicSubscription = $root.ubii.services.request.TopicSubscription.fromObject(object.topicSubscription);
                }
                if (object.session != null) {
                    if (typeof object.session !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.session: object expected");
                    message.session = $root.ubii.sessions.Session.fromObject(object.session);
                }
                if (object.sessionList != null) {
                    if (typeof object.sessionList !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.sessionList: object expected");
                    message.sessionList = $root.ubii.sessions.SessionList.fromObject(object.sessionList);
                }
                if (object.processingModule != null) {
                    if (typeof object.processingModule !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.processingModule: object expected");
                    message.processingModule = $root.ubii.processing.ProcessingModule.fromObject(object.processingModule);
                }
                if (object.processingModuleList != null) {
                    if (typeof object.processingModuleList !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.processingModuleList: object expected");
                    message.processingModuleList = $root.ubii.processing.ProcessingModuleList.fromObject(object.processingModuleList);
                }
                if (object.topicMux != null) {
                    if (typeof object.topicMux !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.topicMux: object expected");
                    message.topicMux = $root.ubii.devices.TopicMux.fromObject(object.topicMux);
                }
                if (object.topicMuxList != null) {
                    if (typeof object.topicMuxList !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.topicMuxList: object expected");
                    message.topicMuxList = $root.ubii.devices.TopicMuxList.fromObject(object.topicMuxList);
                }
                if (object.topicDemux != null) {
                    if (typeof object.topicDemux !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.topicDemux: object expected");
                    message.topicDemux = $root.ubii.devices.TopicDemux.fromObject(object.topicDemux);
                }
                if (object.topicDemuxList != null) {
                    if (typeof object.topicDemuxList !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.topicDemuxList: object expected");
                    message.topicDemuxList = $root.ubii.devices.TopicDemuxList.fromObject(object.topicDemuxList);
                }
                if (object.clientList != null) {
                    if (typeof object.clientList !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.clientList: object expected");
                    message.clientList = $root.ubii.clients.ClientList.fromObject(object.clientList);
                }
                if (object.deviceList != null) {
                    if (typeof object.deviceList !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.deviceList: object expected");
                    message.deviceList = $root.ubii.devices.DeviceList.fromObject(object.deviceList);
                }
                if (object.lockstepProcessingRequest != null) {
                    if (typeof object.lockstepProcessingRequest !== "object")
                        throw TypeError(".ubii.services.ServiceRequest.lockstepProcessingRequest: object expected");
                    message.lockstepProcessingRequest = $root.ubii.processing.LockstepProcessingRequest.fromObject(object.lockstepProcessingRequest);
                }
                return message;
            };

            /**
             * Creates a plain object from a ServiceRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.services.ServiceRequest
             * @static
             * @param {ubii.services.ServiceRequest} message ServiceRequest
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
                if (message.client != null && message.hasOwnProperty("client")) {
                    object.client = $root.ubii.clients.Client.toObject(message.client, options);
                    if (options.oneofs)
                        object.type = "client";
                }
                if (message.device != null && message.hasOwnProperty("device")) {
                    object.device = $root.ubii.devices.Device.toObject(message.device, options);
                    if (options.oneofs)
                        object.type = "device";
                }
                if (message.topicSubscription != null && message.hasOwnProperty("topicSubscription")) {
                    object.topicSubscription = $root.ubii.services.request.TopicSubscription.toObject(message.topicSubscription, options);
                    if (options.oneofs)
                        object.type = "topicSubscription";
                }
                if (message.session != null && message.hasOwnProperty("session")) {
                    object.session = $root.ubii.sessions.Session.toObject(message.session, options);
                    if (options.oneofs)
                        object.type = "session";
                }
                if (message.sessionList != null && message.hasOwnProperty("sessionList")) {
                    object.sessionList = $root.ubii.sessions.SessionList.toObject(message.sessionList, options);
                    if (options.oneofs)
                        object.type = "sessionList";
                }
                if (message.processingModule != null && message.hasOwnProperty("processingModule")) {
                    object.processingModule = $root.ubii.processing.ProcessingModule.toObject(message.processingModule, options);
                    if (options.oneofs)
                        object.type = "processingModule";
                }
                if (message.processingModuleList != null && message.hasOwnProperty("processingModuleList")) {
                    object.processingModuleList = $root.ubii.processing.ProcessingModuleList.toObject(message.processingModuleList, options);
                    if (options.oneofs)
                        object.type = "processingModuleList";
                }
                if (message.topicMux != null && message.hasOwnProperty("topicMux")) {
                    object.topicMux = $root.ubii.devices.TopicMux.toObject(message.topicMux, options);
                    if (options.oneofs)
                        object.type = "topicMux";
                }
                if (message.topicMuxList != null && message.hasOwnProperty("topicMuxList")) {
                    object.topicMuxList = $root.ubii.devices.TopicMuxList.toObject(message.topicMuxList, options);
                    if (options.oneofs)
                        object.type = "topicMuxList";
                }
                if (message.topicDemux != null && message.hasOwnProperty("topicDemux")) {
                    object.topicDemux = $root.ubii.devices.TopicDemux.toObject(message.topicDemux, options);
                    if (options.oneofs)
                        object.type = "topicDemux";
                }
                if (message.topicDemuxList != null && message.hasOwnProperty("topicDemuxList")) {
                    object.topicDemuxList = $root.ubii.devices.TopicDemuxList.toObject(message.topicDemuxList, options);
                    if (options.oneofs)
                        object.type = "topicDemuxList";
                }
                if (message.clientList != null && message.hasOwnProperty("clientList")) {
                    object.clientList = $root.ubii.clients.ClientList.toObject(message.clientList, options);
                    if (options.oneofs)
                        object.type = "clientList";
                }
                if (message.deviceList != null && message.hasOwnProperty("deviceList")) {
                    object.deviceList = $root.ubii.devices.DeviceList.toObject(message.deviceList, options);
                    if (options.oneofs)
                        object.type = "deviceList";
                }
                if (message.lockstepProcessingRequest != null && message.hasOwnProperty("lockstepProcessingRequest")) {
                    object.lockstepProcessingRequest = $root.ubii.processing.LockstepProcessingRequest.toObject(message.lockstepProcessingRequest, options);
                    if (options.oneofs)
                        object.type = "lockstepProcessingRequest";
                }
                return object;
            };

            /**
             * Converts this ServiceRequest to JSON.
             * @function toJSON
             * @memberof ubii.services.ServiceRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ServiceRequest;
        })();

        return services;
    })();

    ubii.sessions = (function() {

        /**
         * Namespace sessions.
         * @memberof ubii
         * @namespace
         */
        var sessions = {};

        sessions.TopicInputMapping = (function() {

            /**
             * Properties of a TopicInputMapping.
             * @memberof ubii.sessions
             * @interface ITopicInputMapping
             * @property {string|null} [inputName] TopicInputMapping inputName
             * @property {string|null} [topic] TopicInputMapping topic
             * @property {ubii.devices.ITopicMux|null} [topicMux] TopicInputMapping topicMux
             */

            /**
             * Constructs a new TopicInputMapping.
             * @memberof ubii.sessions
             * @classdesc Represents a TopicInputMapping.
             * @implements ITopicInputMapping
             * @constructor
             * @param {ubii.sessions.ITopicInputMapping=} [properties] Properties to set
             */
            function TopicInputMapping(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TopicInputMapping inputName.
             * @member {string} inputName
             * @memberof ubii.sessions.TopicInputMapping
             * @instance
             */
            TopicInputMapping.prototype.inputName = "";

            /**
             * TopicInputMapping topic.
             * @member {string} topic
             * @memberof ubii.sessions.TopicInputMapping
             * @instance
             */
            TopicInputMapping.prototype.topic = "";

            /**
             * TopicInputMapping topicMux.
             * @member {ubii.devices.ITopicMux|null|undefined} topicMux
             * @memberof ubii.sessions.TopicInputMapping
             * @instance
             */
            TopicInputMapping.prototype.topicMux = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * TopicInputMapping topicSource.
             * @member {"topic"|"topicMux"|undefined} topicSource
             * @memberof ubii.sessions.TopicInputMapping
             * @instance
             */
            Object.defineProperty(TopicInputMapping.prototype, "topicSource", {
                get: $util.oneOfGetter($oneOfFields = ["topic", "topicMux"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new TopicInputMapping instance using the specified properties.
             * @function create
             * @memberof ubii.sessions.TopicInputMapping
             * @static
             * @param {ubii.sessions.ITopicInputMapping=} [properties] Properties to set
             * @returns {ubii.sessions.TopicInputMapping} TopicInputMapping instance
             */
            TopicInputMapping.create = function create(properties) {
                return new TopicInputMapping(properties);
            };

            /**
             * Encodes the specified TopicInputMapping message. Does not implicitly {@link ubii.sessions.TopicInputMapping.verify|verify} messages.
             * @function encode
             * @memberof ubii.sessions.TopicInputMapping
             * @static
             * @param {ubii.sessions.ITopicInputMapping} message TopicInputMapping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicInputMapping.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.inputName != null && message.hasOwnProperty("inputName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.inputName);
                if (message.topic != null && message.hasOwnProperty("topic"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.topic);
                if (message.topicMux != null && message.hasOwnProperty("topicMux"))
                    $root.ubii.devices.TopicMux.encode(message.topicMux, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TopicInputMapping message, length delimited. Does not implicitly {@link ubii.sessions.TopicInputMapping.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.sessions.TopicInputMapping
             * @static
             * @param {ubii.sessions.ITopicInputMapping} message TopicInputMapping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicInputMapping.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TopicInputMapping message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.sessions.TopicInputMapping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.sessions.TopicInputMapping} TopicInputMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicInputMapping.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.sessions.TopicInputMapping();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.inputName = reader.string();
                        break;
                    case 2:
                        message.topic = reader.string();
                        break;
                    case 3:
                        message.topicMux = $root.ubii.devices.TopicMux.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TopicInputMapping message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.sessions.TopicInputMapping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.sessions.TopicInputMapping} TopicInputMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicInputMapping.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TopicInputMapping message.
             * @function verify
             * @memberof ubii.sessions.TopicInputMapping
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TopicInputMapping.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.inputName != null && message.hasOwnProperty("inputName"))
                    if (!$util.isString(message.inputName))
                        return "inputName: string expected";
                if (message.topic != null && message.hasOwnProperty("topic")) {
                    properties.topicSource = 1;
                    if (!$util.isString(message.topic))
                        return "topic: string expected";
                }
                if (message.topicMux != null && message.hasOwnProperty("topicMux")) {
                    if (properties.topicSource === 1)
                        return "topicSource: multiple values";
                    properties.topicSource = 1;
                    {
                        var error = $root.ubii.devices.TopicMux.verify(message.topicMux);
                        if (error)
                            return "topicMux." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TopicInputMapping message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.sessions.TopicInputMapping
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.sessions.TopicInputMapping} TopicInputMapping
             */
            TopicInputMapping.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.sessions.TopicInputMapping)
                    return object;
                var message = new $root.ubii.sessions.TopicInputMapping();
                if (object.inputName != null)
                    message.inputName = String(object.inputName);
                if (object.topic != null)
                    message.topic = String(object.topic);
                if (object.topicMux != null) {
                    if (typeof object.topicMux !== "object")
                        throw TypeError(".ubii.sessions.TopicInputMapping.topicMux: object expected");
                    message.topicMux = $root.ubii.devices.TopicMux.fromObject(object.topicMux);
                }
                return message;
            };

            /**
             * Creates a plain object from a TopicInputMapping message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.sessions.TopicInputMapping
             * @static
             * @param {ubii.sessions.TopicInputMapping} message TopicInputMapping
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TopicInputMapping.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.inputName = "";
                if (message.inputName != null && message.hasOwnProperty("inputName"))
                    object.inputName = message.inputName;
                if (message.topic != null && message.hasOwnProperty("topic")) {
                    object.topic = message.topic;
                    if (options.oneofs)
                        object.topicSource = "topic";
                }
                if (message.topicMux != null && message.hasOwnProperty("topicMux")) {
                    object.topicMux = $root.ubii.devices.TopicMux.toObject(message.topicMux, options);
                    if (options.oneofs)
                        object.topicSource = "topicMux";
                }
                return object;
            };

            /**
             * Converts this TopicInputMapping to JSON.
             * @function toJSON
             * @memberof ubii.sessions.TopicInputMapping
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TopicInputMapping.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TopicInputMapping;
        })();

        sessions.TopicInputMappingList = (function() {

            /**
             * Properties of a TopicInputMappingList.
             * @memberof ubii.sessions
             * @interface ITopicInputMappingList
             * @property {Array.<ubii.sessions.ITopicInputMapping>|null} [elements] TopicInputMappingList elements
             */

            /**
             * Constructs a new TopicInputMappingList.
             * @memberof ubii.sessions
             * @classdesc Represents a TopicInputMappingList.
             * @implements ITopicInputMappingList
             * @constructor
             * @param {ubii.sessions.ITopicInputMappingList=} [properties] Properties to set
             */
            function TopicInputMappingList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TopicInputMappingList elements.
             * @member {Array.<ubii.sessions.ITopicInputMapping>} elements
             * @memberof ubii.sessions.TopicInputMappingList
             * @instance
             */
            TopicInputMappingList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new TopicInputMappingList instance using the specified properties.
             * @function create
             * @memberof ubii.sessions.TopicInputMappingList
             * @static
             * @param {ubii.sessions.ITopicInputMappingList=} [properties] Properties to set
             * @returns {ubii.sessions.TopicInputMappingList} TopicInputMappingList instance
             */
            TopicInputMappingList.create = function create(properties) {
                return new TopicInputMappingList(properties);
            };

            /**
             * Encodes the specified TopicInputMappingList message. Does not implicitly {@link ubii.sessions.TopicInputMappingList.verify|verify} messages.
             * @function encode
             * @memberof ubii.sessions.TopicInputMappingList
             * @static
             * @param {ubii.sessions.ITopicInputMappingList} message TopicInputMappingList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicInputMappingList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.sessions.TopicInputMapping.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TopicInputMappingList message, length delimited. Does not implicitly {@link ubii.sessions.TopicInputMappingList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.sessions.TopicInputMappingList
             * @static
             * @param {ubii.sessions.ITopicInputMappingList} message TopicInputMappingList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicInputMappingList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TopicInputMappingList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.sessions.TopicInputMappingList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.sessions.TopicInputMappingList} TopicInputMappingList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicInputMappingList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.sessions.TopicInputMappingList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.sessions.TopicInputMapping.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TopicInputMappingList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.sessions.TopicInputMappingList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.sessions.TopicInputMappingList} TopicInputMappingList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicInputMappingList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TopicInputMappingList message.
             * @function verify
             * @memberof ubii.sessions.TopicInputMappingList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TopicInputMappingList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.sessions.TopicInputMapping.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TopicInputMappingList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.sessions.TopicInputMappingList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.sessions.TopicInputMappingList} TopicInputMappingList
             */
            TopicInputMappingList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.sessions.TopicInputMappingList)
                    return object;
                var message = new $root.ubii.sessions.TopicInputMappingList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.sessions.TopicInputMappingList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.sessions.TopicInputMappingList.elements: object expected");
                        message.elements[i] = $root.ubii.sessions.TopicInputMapping.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a TopicInputMappingList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.sessions.TopicInputMappingList
             * @static
             * @param {ubii.sessions.TopicInputMappingList} message TopicInputMappingList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TopicInputMappingList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.sessions.TopicInputMapping.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this TopicInputMappingList to JSON.
             * @function toJSON
             * @memberof ubii.sessions.TopicInputMappingList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TopicInputMappingList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TopicInputMappingList;
        })();

        sessions.TopicOutputMapping = (function() {

            /**
             * Properties of a TopicOutputMapping.
             * @memberof ubii.sessions
             * @interface ITopicOutputMapping
             * @property {string|null} [outputName] TopicOutputMapping outputName
             * @property {string|null} [topic] TopicOutputMapping topic
             * @property {ubii.devices.ITopicDemux|null} [topicDemux] TopicOutputMapping topicDemux
             */

            /**
             * Constructs a new TopicOutputMapping.
             * @memberof ubii.sessions
             * @classdesc Represents a TopicOutputMapping.
             * @implements ITopicOutputMapping
             * @constructor
             * @param {ubii.sessions.ITopicOutputMapping=} [properties] Properties to set
             */
            function TopicOutputMapping(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TopicOutputMapping outputName.
             * @member {string} outputName
             * @memberof ubii.sessions.TopicOutputMapping
             * @instance
             */
            TopicOutputMapping.prototype.outputName = "";

            /**
             * TopicOutputMapping topic.
             * @member {string} topic
             * @memberof ubii.sessions.TopicOutputMapping
             * @instance
             */
            TopicOutputMapping.prototype.topic = "";

            /**
             * TopicOutputMapping topicDemux.
             * @member {ubii.devices.ITopicDemux|null|undefined} topicDemux
             * @memberof ubii.sessions.TopicOutputMapping
             * @instance
             */
            TopicOutputMapping.prototype.topicDemux = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * TopicOutputMapping topicDestination.
             * @member {"topic"|"topicDemux"|undefined} topicDestination
             * @memberof ubii.sessions.TopicOutputMapping
             * @instance
             */
            Object.defineProperty(TopicOutputMapping.prototype, "topicDestination", {
                get: $util.oneOfGetter($oneOfFields = ["topic", "topicDemux"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new TopicOutputMapping instance using the specified properties.
             * @function create
             * @memberof ubii.sessions.TopicOutputMapping
             * @static
             * @param {ubii.sessions.ITopicOutputMapping=} [properties] Properties to set
             * @returns {ubii.sessions.TopicOutputMapping} TopicOutputMapping instance
             */
            TopicOutputMapping.create = function create(properties) {
                return new TopicOutputMapping(properties);
            };

            /**
             * Encodes the specified TopicOutputMapping message. Does not implicitly {@link ubii.sessions.TopicOutputMapping.verify|verify} messages.
             * @function encode
             * @memberof ubii.sessions.TopicOutputMapping
             * @static
             * @param {ubii.sessions.ITopicOutputMapping} message TopicOutputMapping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicOutputMapping.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.outputName != null && message.hasOwnProperty("outputName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.outputName);
                if (message.topic != null && message.hasOwnProperty("topic"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.topic);
                if (message.topicDemux != null && message.hasOwnProperty("topicDemux"))
                    $root.ubii.devices.TopicDemux.encode(message.topicDemux, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TopicOutputMapping message, length delimited. Does not implicitly {@link ubii.sessions.TopicOutputMapping.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.sessions.TopicOutputMapping
             * @static
             * @param {ubii.sessions.ITopicOutputMapping} message TopicOutputMapping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicOutputMapping.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TopicOutputMapping message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.sessions.TopicOutputMapping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.sessions.TopicOutputMapping} TopicOutputMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicOutputMapping.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.sessions.TopicOutputMapping();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.outputName = reader.string();
                        break;
                    case 2:
                        message.topic = reader.string();
                        break;
                    case 3:
                        message.topicDemux = $root.ubii.devices.TopicDemux.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TopicOutputMapping message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.sessions.TopicOutputMapping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.sessions.TopicOutputMapping} TopicOutputMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicOutputMapping.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TopicOutputMapping message.
             * @function verify
             * @memberof ubii.sessions.TopicOutputMapping
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TopicOutputMapping.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.outputName != null && message.hasOwnProperty("outputName"))
                    if (!$util.isString(message.outputName))
                        return "outputName: string expected";
                if (message.topic != null && message.hasOwnProperty("topic")) {
                    properties.topicDestination = 1;
                    if (!$util.isString(message.topic))
                        return "topic: string expected";
                }
                if (message.topicDemux != null && message.hasOwnProperty("topicDemux")) {
                    if (properties.topicDestination === 1)
                        return "topicDestination: multiple values";
                    properties.topicDestination = 1;
                    {
                        var error = $root.ubii.devices.TopicDemux.verify(message.topicDemux);
                        if (error)
                            return "topicDemux." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TopicOutputMapping message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.sessions.TopicOutputMapping
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.sessions.TopicOutputMapping} TopicOutputMapping
             */
            TopicOutputMapping.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.sessions.TopicOutputMapping)
                    return object;
                var message = new $root.ubii.sessions.TopicOutputMapping();
                if (object.outputName != null)
                    message.outputName = String(object.outputName);
                if (object.topic != null)
                    message.topic = String(object.topic);
                if (object.topicDemux != null) {
                    if (typeof object.topicDemux !== "object")
                        throw TypeError(".ubii.sessions.TopicOutputMapping.topicDemux: object expected");
                    message.topicDemux = $root.ubii.devices.TopicDemux.fromObject(object.topicDemux);
                }
                return message;
            };

            /**
             * Creates a plain object from a TopicOutputMapping message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.sessions.TopicOutputMapping
             * @static
             * @param {ubii.sessions.TopicOutputMapping} message TopicOutputMapping
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TopicOutputMapping.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.outputName = "";
                if (message.outputName != null && message.hasOwnProperty("outputName"))
                    object.outputName = message.outputName;
                if (message.topic != null && message.hasOwnProperty("topic")) {
                    object.topic = message.topic;
                    if (options.oneofs)
                        object.topicDestination = "topic";
                }
                if (message.topicDemux != null && message.hasOwnProperty("topicDemux")) {
                    object.topicDemux = $root.ubii.devices.TopicDemux.toObject(message.topicDemux, options);
                    if (options.oneofs)
                        object.topicDestination = "topicDemux";
                }
                return object;
            };

            /**
             * Converts this TopicOutputMapping to JSON.
             * @function toJSON
             * @memberof ubii.sessions.TopicOutputMapping
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TopicOutputMapping.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TopicOutputMapping;
        })();

        sessions.TopicOutputMappingList = (function() {

            /**
             * Properties of a TopicOutputMappingList.
             * @memberof ubii.sessions
             * @interface ITopicOutputMappingList
             * @property {Array.<ubii.sessions.ITopicOutputMapping>|null} [elements] TopicOutputMappingList elements
             */

            /**
             * Constructs a new TopicOutputMappingList.
             * @memberof ubii.sessions
             * @classdesc Represents a TopicOutputMappingList.
             * @implements ITopicOutputMappingList
             * @constructor
             * @param {ubii.sessions.ITopicOutputMappingList=} [properties] Properties to set
             */
            function TopicOutputMappingList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TopicOutputMappingList elements.
             * @member {Array.<ubii.sessions.ITopicOutputMapping>} elements
             * @memberof ubii.sessions.TopicOutputMappingList
             * @instance
             */
            TopicOutputMappingList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new TopicOutputMappingList instance using the specified properties.
             * @function create
             * @memberof ubii.sessions.TopicOutputMappingList
             * @static
             * @param {ubii.sessions.ITopicOutputMappingList=} [properties] Properties to set
             * @returns {ubii.sessions.TopicOutputMappingList} TopicOutputMappingList instance
             */
            TopicOutputMappingList.create = function create(properties) {
                return new TopicOutputMappingList(properties);
            };

            /**
             * Encodes the specified TopicOutputMappingList message. Does not implicitly {@link ubii.sessions.TopicOutputMappingList.verify|verify} messages.
             * @function encode
             * @memberof ubii.sessions.TopicOutputMappingList
             * @static
             * @param {ubii.sessions.ITopicOutputMappingList} message TopicOutputMappingList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicOutputMappingList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.sessions.TopicOutputMapping.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TopicOutputMappingList message, length delimited. Does not implicitly {@link ubii.sessions.TopicOutputMappingList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.sessions.TopicOutputMappingList
             * @static
             * @param {ubii.sessions.ITopicOutputMappingList} message TopicOutputMappingList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicOutputMappingList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TopicOutputMappingList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.sessions.TopicOutputMappingList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.sessions.TopicOutputMappingList} TopicOutputMappingList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicOutputMappingList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.sessions.TopicOutputMappingList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.sessions.TopicOutputMapping.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TopicOutputMappingList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.sessions.TopicOutputMappingList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.sessions.TopicOutputMappingList} TopicOutputMappingList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicOutputMappingList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TopicOutputMappingList message.
             * @function verify
             * @memberof ubii.sessions.TopicOutputMappingList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TopicOutputMappingList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.sessions.TopicOutputMapping.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TopicOutputMappingList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.sessions.TopicOutputMappingList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.sessions.TopicOutputMappingList} TopicOutputMappingList
             */
            TopicOutputMappingList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.sessions.TopicOutputMappingList)
                    return object;
                var message = new $root.ubii.sessions.TopicOutputMappingList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.sessions.TopicOutputMappingList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.sessions.TopicOutputMappingList.elements: object expected");
                        message.elements[i] = $root.ubii.sessions.TopicOutputMapping.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a TopicOutputMappingList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.sessions.TopicOutputMappingList
             * @static
             * @param {ubii.sessions.TopicOutputMappingList} message TopicOutputMappingList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TopicOutputMappingList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.sessions.TopicOutputMapping.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this TopicOutputMappingList to JSON.
             * @function toJSON
             * @memberof ubii.sessions.TopicOutputMappingList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TopicOutputMappingList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TopicOutputMappingList;
        })();

        sessions.IOMapping = (function() {

            /**
             * Properties of a IOMapping.
             * @memberof ubii.sessions
             * @interface IIOMapping
             * @property {string|null} [processingModuleId] IOMapping processingModuleId
             * @property {Array.<ubii.sessions.ITopicInputMapping>|null} [inputMappings] IOMapping inputMappings
             * @property {Array.<ubii.sessions.ITopicOutputMapping>|null} [outputMappings] IOMapping outputMappings
             * @property {string|null} [processingModuleName] IOMapping processingModuleName
             */

            /**
             * Constructs a new IOMapping.
             * @memberof ubii.sessions
             * @classdesc Represents a IOMapping.
             * @implements IIOMapping
             * @constructor
             * @param {ubii.sessions.IIOMapping=} [properties] Properties to set
             */
            function IOMapping(properties) {
                this.inputMappings = [];
                this.outputMappings = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IOMapping processingModuleId.
             * @member {string} processingModuleId
             * @memberof ubii.sessions.IOMapping
             * @instance
             */
            IOMapping.prototype.processingModuleId = "";

            /**
             * IOMapping inputMappings.
             * @member {Array.<ubii.sessions.ITopicInputMapping>} inputMappings
             * @memberof ubii.sessions.IOMapping
             * @instance
             */
            IOMapping.prototype.inputMappings = $util.emptyArray;

            /**
             * IOMapping outputMappings.
             * @member {Array.<ubii.sessions.ITopicOutputMapping>} outputMappings
             * @memberof ubii.sessions.IOMapping
             * @instance
             */
            IOMapping.prototype.outputMappings = $util.emptyArray;

            /**
             * IOMapping processingModuleName.
             * @member {string} processingModuleName
             * @memberof ubii.sessions.IOMapping
             * @instance
             */
            IOMapping.prototype.processingModuleName = "";

            /**
             * Creates a new IOMapping instance using the specified properties.
             * @function create
             * @memberof ubii.sessions.IOMapping
             * @static
             * @param {ubii.sessions.IIOMapping=} [properties] Properties to set
             * @returns {ubii.sessions.IOMapping} IOMapping instance
             */
            IOMapping.create = function create(properties) {
                return new IOMapping(properties);
            };

            /**
             * Encodes the specified IOMapping message. Does not implicitly {@link ubii.sessions.IOMapping.verify|verify} messages.
             * @function encode
             * @memberof ubii.sessions.IOMapping
             * @static
             * @param {ubii.sessions.IIOMapping} message IOMapping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IOMapping.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.processingModuleId != null && message.hasOwnProperty("processingModuleId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.processingModuleId);
                if (message.inputMappings != null && message.inputMappings.length)
                    for (var i = 0; i < message.inputMappings.length; ++i)
                        $root.ubii.sessions.TopicInputMapping.encode(message.inputMappings[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.outputMappings != null && message.outputMappings.length)
                    for (var i = 0; i < message.outputMappings.length; ++i)
                        $root.ubii.sessions.TopicOutputMapping.encode(message.outputMappings[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.processingModuleName != null && message.hasOwnProperty("processingModuleName"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.processingModuleName);
                return writer;
            };

            /**
             * Encodes the specified IOMapping message, length delimited. Does not implicitly {@link ubii.sessions.IOMapping.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.sessions.IOMapping
             * @static
             * @param {ubii.sessions.IIOMapping} message IOMapping message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IOMapping.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a IOMapping message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.sessions.IOMapping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.sessions.IOMapping} IOMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IOMapping.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.sessions.IOMapping();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.processingModuleId = reader.string();
                        break;
                    case 2:
                        if (!(message.inputMappings && message.inputMappings.length))
                            message.inputMappings = [];
                        message.inputMappings.push($root.ubii.sessions.TopicInputMapping.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.outputMappings && message.outputMappings.length))
                            message.outputMappings = [];
                        message.outputMappings.push($root.ubii.sessions.TopicOutputMapping.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        message.processingModuleName = reader.string();
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
             * @memberof ubii.sessions.IOMapping
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.sessions.IOMapping} IOMapping
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
             * @memberof ubii.sessions.IOMapping
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IOMapping.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.processingModuleId != null && message.hasOwnProperty("processingModuleId"))
                    if (!$util.isString(message.processingModuleId))
                        return "processingModuleId: string expected";
                if (message.inputMappings != null && message.hasOwnProperty("inputMappings")) {
                    if (!Array.isArray(message.inputMappings))
                        return "inputMappings: array expected";
                    for (var i = 0; i < message.inputMappings.length; ++i) {
                        var error = $root.ubii.sessions.TopicInputMapping.verify(message.inputMappings[i]);
                        if (error)
                            return "inputMappings." + error;
                    }
                }
                if (message.outputMappings != null && message.hasOwnProperty("outputMappings")) {
                    if (!Array.isArray(message.outputMappings))
                        return "outputMappings: array expected";
                    for (var i = 0; i < message.outputMappings.length; ++i) {
                        var error = $root.ubii.sessions.TopicOutputMapping.verify(message.outputMappings[i]);
                        if (error)
                            return "outputMappings." + error;
                    }
                }
                if (message.processingModuleName != null && message.hasOwnProperty("processingModuleName"))
                    if (!$util.isString(message.processingModuleName))
                        return "processingModuleName: string expected";
                return null;
            };

            /**
             * Creates a IOMapping message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.sessions.IOMapping
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.sessions.IOMapping} IOMapping
             */
            IOMapping.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.sessions.IOMapping)
                    return object;
                var message = new $root.ubii.sessions.IOMapping();
                if (object.processingModuleId != null)
                    message.processingModuleId = String(object.processingModuleId);
                if (object.inputMappings) {
                    if (!Array.isArray(object.inputMappings))
                        throw TypeError(".ubii.sessions.IOMapping.inputMappings: array expected");
                    message.inputMappings = [];
                    for (var i = 0; i < object.inputMappings.length; ++i) {
                        if (typeof object.inputMappings[i] !== "object")
                            throw TypeError(".ubii.sessions.IOMapping.inputMappings: object expected");
                        message.inputMappings[i] = $root.ubii.sessions.TopicInputMapping.fromObject(object.inputMappings[i]);
                    }
                }
                if (object.outputMappings) {
                    if (!Array.isArray(object.outputMappings))
                        throw TypeError(".ubii.sessions.IOMapping.outputMappings: array expected");
                    message.outputMappings = [];
                    for (var i = 0; i < object.outputMappings.length; ++i) {
                        if (typeof object.outputMappings[i] !== "object")
                            throw TypeError(".ubii.sessions.IOMapping.outputMappings: object expected");
                        message.outputMappings[i] = $root.ubii.sessions.TopicOutputMapping.fromObject(object.outputMappings[i]);
                    }
                }
                if (object.processingModuleName != null)
                    message.processingModuleName = String(object.processingModuleName);
                return message;
            };

            /**
             * Creates a plain object from a IOMapping message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.sessions.IOMapping
             * @static
             * @param {ubii.sessions.IOMapping} message IOMapping
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IOMapping.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.inputMappings = [];
                    object.outputMappings = [];
                }
                if (options.defaults) {
                    object.processingModuleId = "";
                    object.processingModuleName = "";
                }
                if (message.processingModuleId != null && message.hasOwnProperty("processingModuleId"))
                    object.processingModuleId = message.processingModuleId;
                if (message.inputMappings && message.inputMappings.length) {
                    object.inputMappings = [];
                    for (var j = 0; j < message.inputMappings.length; ++j)
                        object.inputMappings[j] = $root.ubii.sessions.TopicInputMapping.toObject(message.inputMappings[j], options);
                }
                if (message.outputMappings && message.outputMappings.length) {
                    object.outputMappings = [];
                    for (var j = 0; j < message.outputMappings.length; ++j)
                        object.outputMappings[j] = $root.ubii.sessions.TopicOutputMapping.toObject(message.outputMappings[j], options);
                }
                if (message.processingModuleName != null && message.hasOwnProperty("processingModuleName"))
                    object.processingModuleName = message.processingModuleName;
                return object;
            };

            /**
             * Converts this IOMapping to JSON.
             * @function toJSON
             * @memberof ubii.sessions.IOMapping
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            IOMapping.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return IOMapping;
        })();

        sessions.IOMappingList = (function() {

            /**
             * Properties of a IOMappingList.
             * @memberof ubii.sessions
             * @interface IIOMappingList
             * @property {Array.<ubii.sessions.IIOMapping>|null} [elements] IOMappingList elements
             */

            /**
             * Constructs a new IOMappingList.
             * @memberof ubii.sessions
             * @classdesc Represents a IOMappingList.
             * @implements IIOMappingList
             * @constructor
             * @param {ubii.sessions.IIOMappingList=} [properties] Properties to set
             */
            function IOMappingList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IOMappingList elements.
             * @member {Array.<ubii.sessions.IIOMapping>} elements
             * @memberof ubii.sessions.IOMappingList
             * @instance
             */
            IOMappingList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new IOMappingList instance using the specified properties.
             * @function create
             * @memberof ubii.sessions.IOMappingList
             * @static
             * @param {ubii.sessions.IIOMappingList=} [properties] Properties to set
             * @returns {ubii.sessions.IOMappingList} IOMappingList instance
             */
            IOMappingList.create = function create(properties) {
                return new IOMappingList(properties);
            };

            /**
             * Encodes the specified IOMappingList message. Does not implicitly {@link ubii.sessions.IOMappingList.verify|verify} messages.
             * @function encode
             * @memberof ubii.sessions.IOMappingList
             * @static
             * @param {ubii.sessions.IIOMappingList} message IOMappingList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IOMappingList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.sessions.IOMapping.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified IOMappingList message, length delimited. Does not implicitly {@link ubii.sessions.IOMappingList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.sessions.IOMappingList
             * @static
             * @param {ubii.sessions.IIOMappingList} message IOMappingList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IOMappingList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a IOMappingList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.sessions.IOMappingList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.sessions.IOMappingList} IOMappingList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IOMappingList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.sessions.IOMappingList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.sessions.IOMapping.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a IOMappingList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.sessions.IOMappingList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.sessions.IOMappingList} IOMappingList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IOMappingList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a IOMappingList message.
             * @function verify
             * @memberof ubii.sessions.IOMappingList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IOMappingList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.sessions.IOMapping.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a IOMappingList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.sessions.IOMappingList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.sessions.IOMappingList} IOMappingList
             */
            IOMappingList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.sessions.IOMappingList)
                    return object;
                var message = new $root.ubii.sessions.IOMappingList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.sessions.IOMappingList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.sessions.IOMappingList.elements: object expected");
                        message.elements[i] = $root.ubii.sessions.IOMapping.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a IOMappingList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.sessions.IOMappingList
             * @static
             * @param {ubii.sessions.IOMappingList} message IOMappingList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IOMappingList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.sessions.IOMapping.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this IOMappingList to JSON.
             * @function toJSON
             * @memberof ubii.sessions.IOMappingList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            IOMappingList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return IOMappingList;
        })();

        /**
         * SessionStatus enum.
         * @name ubii.sessions.SessionStatus
         * @enum {string}
         * @property {number} CREATED=0 CREATED value
         * @property {number} RUNNING=1 RUNNING value
         * @property {number} PAUSED=2 PAUSED value
         * @property {number} STOPPED=3 STOPPED value
         */
        sessions.SessionStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CREATED"] = 0;
            values[valuesById[1] = "RUNNING"] = 1;
            values[valuesById[2] = "PAUSED"] = 2;
            values[valuesById[3] = "STOPPED"] = 3;
            return values;
        })();

        sessions.Session = (function() {

            /**
             * Properties of a Session.
             * @memberof ubii.sessions
             * @interface ISession
             * @property {string|null} [id] Session id
             * @property {string|null} [name] Session name
             * @property {Array.<ubii.processing.IProcessingModule>|null} [processingModules] Session processingModules
             * @property {Array.<ubii.sessions.IIOMapping>|null} [ioMappings] Session ioMappings
             * @property {Array.<string>|null} [tags] Session tags
             * @property {string|null} [description] Session description
             * @property {Array.<string>|null} [authors] Session authors
             * @property {ubii.sessions.SessionStatus|null} [status] Session status
             * @property {boolean|null} [editable] Session editable
             */

            /**
             * Constructs a new Session.
             * @memberof ubii.sessions
             * @classdesc Represents a Session.
             * @implements ISession
             * @constructor
             * @param {ubii.sessions.ISession=} [properties] Properties to set
             */
            function Session(properties) {
                this.processingModules = [];
                this.ioMappings = [];
                this.tags = [];
                this.authors = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Session id.
             * @member {string} id
             * @memberof ubii.sessions.Session
             * @instance
             */
            Session.prototype.id = "";

            /**
             * Session name.
             * @member {string} name
             * @memberof ubii.sessions.Session
             * @instance
             */
            Session.prototype.name = "";

            /**
             * Session processingModules.
             * @member {Array.<ubii.processing.IProcessingModule>} processingModules
             * @memberof ubii.sessions.Session
             * @instance
             */
            Session.prototype.processingModules = $util.emptyArray;

            /**
             * Session ioMappings.
             * @member {Array.<ubii.sessions.IIOMapping>} ioMappings
             * @memberof ubii.sessions.Session
             * @instance
             */
            Session.prototype.ioMappings = $util.emptyArray;

            /**
             * Session tags.
             * @member {Array.<string>} tags
             * @memberof ubii.sessions.Session
             * @instance
             */
            Session.prototype.tags = $util.emptyArray;

            /**
             * Session description.
             * @member {string} description
             * @memberof ubii.sessions.Session
             * @instance
             */
            Session.prototype.description = "";

            /**
             * Session authors.
             * @member {Array.<string>} authors
             * @memberof ubii.sessions.Session
             * @instance
             */
            Session.prototype.authors = $util.emptyArray;

            /**
             * Session status.
             * @member {ubii.sessions.SessionStatus} status
             * @memberof ubii.sessions.Session
             * @instance
             */
            Session.prototype.status = 0;

            /**
             * Session editable.
             * @member {boolean} editable
             * @memberof ubii.sessions.Session
             * @instance
             */
            Session.prototype.editable = false;

            /**
             * Creates a new Session instance using the specified properties.
             * @function create
             * @memberof ubii.sessions.Session
             * @static
             * @param {ubii.sessions.ISession=} [properties] Properties to set
             * @returns {ubii.sessions.Session} Session instance
             */
            Session.create = function create(properties) {
                return new Session(properties);
            };

            /**
             * Encodes the specified Session message. Does not implicitly {@link ubii.sessions.Session.verify|verify} messages.
             * @function encode
             * @memberof ubii.sessions.Session
             * @static
             * @param {ubii.sessions.ISession} message Session message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Session.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.processingModules != null && message.processingModules.length)
                    for (var i = 0; i < message.processingModules.length; ++i)
                        $root.ubii.processing.ProcessingModule.encode(message.processingModules[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.ioMappings != null && message.ioMappings.length)
                    for (var i = 0; i < message.ioMappings.length; ++i)
                        $root.ubii.sessions.IOMapping.encode(message.ioMappings[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.tags != null && message.tags.length)
                    for (var i = 0; i < message.tags.length; ++i)
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.tags[i]);
                if (message.description != null && message.hasOwnProperty("description"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.description);
                if (message.authors != null && message.authors.length)
                    for (var i = 0; i < message.authors.length; ++i)
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.authors[i]);
                if (message.status != null && message.hasOwnProperty("status"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.status);
                if (message.editable != null && message.hasOwnProperty("editable"))
                    writer.uint32(/* id 9, wireType 0 =*/72).bool(message.editable);
                return writer;
            };

            /**
             * Encodes the specified Session message, length delimited. Does not implicitly {@link ubii.sessions.Session.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.sessions.Session
             * @static
             * @param {ubii.sessions.ISession} message Session message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Session.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Session message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.sessions.Session
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.sessions.Session} Session
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Session.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.sessions.Session();
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
                        if (!(message.processingModules && message.processingModules.length))
                            message.processingModules = [];
                        message.processingModules.push($root.ubii.processing.ProcessingModule.decode(reader, reader.uint32()));
                        break;
                    case 4:
                        if (!(message.ioMappings && message.ioMappings.length))
                            message.ioMappings = [];
                        message.ioMappings.push($root.ubii.sessions.IOMapping.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        message.tags.push(reader.string());
                        break;
                    case 6:
                        message.description = reader.string();
                        break;
                    case 7:
                        if (!(message.authors && message.authors.length))
                            message.authors = [];
                        message.authors.push(reader.string());
                        break;
                    case 8:
                        message.status = reader.int32();
                        break;
                    case 9:
                        message.editable = reader.bool();
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
             * @memberof ubii.sessions.Session
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.sessions.Session} Session
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
             * @memberof ubii.sessions.Session
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Session.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.processingModules != null && message.hasOwnProperty("processingModules")) {
                    if (!Array.isArray(message.processingModules))
                        return "processingModules: array expected";
                    for (var i = 0; i < message.processingModules.length; ++i) {
                        var error = $root.ubii.processing.ProcessingModule.verify(message.processingModules[i]);
                        if (error)
                            return "processingModules." + error;
                    }
                }
                if (message.ioMappings != null && message.hasOwnProperty("ioMappings")) {
                    if (!Array.isArray(message.ioMappings))
                        return "ioMappings: array expected";
                    for (var i = 0; i < message.ioMappings.length; ++i) {
                        var error = $root.ubii.sessions.IOMapping.verify(message.ioMappings[i]);
                        if (error)
                            return "ioMappings." + error;
                    }
                }
                if (message.tags != null && message.hasOwnProperty("tags")) {
                    if (!Array.isArray(message.tags))
                        return "tags: array expected";
                    for (var i = 0; i < message.tags.length; ++i)
                        if (!$util.isString(message.tags[i]))
                            return "tags: string[] expected";
                }
                if (message.description != null && message.hasOwnProperty("description"))
                    if (!$util.isString(message.description))
                        return "description: string expected";
                if (message.authors != null && message.hasOwnProperty("authors")) {
                    if (!Array.isArray(message.authors))
                        return "authors: array expected";
                    for (var i = 0; i < message.authors.length; ++i)
                        if (!$util.isString(message.authors[i]))
                            return "authors: string[] expected";
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    switch (message.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.editable != null && message.hasOwnProperty("editable"))
                    if (typeof message.editable !== "boolean")
                        return "editable: boolean expected";
                return null;
            };

            /**
             * Creates a Session message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.sessions.Session
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.sessions.Session} Session
             */
            Session.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.sessions.Session)
                    return object;
                var message = new $root.ubii.sessions.Session();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.processingModules) {
                    if (!Array.isArray(object.processingModules))
                        throw TypeError(".ubii.sessions.Session.processingModules: array expected");
                    message.processingModules = [];
                    for (var i = 0; i < object.processingModules.length; ++i) {
                        if (typeof object.processingModules[i] !== "object")
                            throw TypeError(".ubii.sessions.Session.processingModules: object expected");
                        message.processingModules[i] = $root.ubii.processing.ProcessingModule.fromObject(object.processingModules[i]);
                    }
                }
                if (object.ioMappings) {
                    if (!Array.isArray(object.ioMappings))
                        throw TypeError(".ubii.sessions.Session.ioMappings: array expected");
                    message.ioMappings = [];
                    for (var i = 0; i < object.ioMappings.length; ++i) {
                        if (typeof object.ioMappings[i] !== "object")
                            throw TypeError(".ubii.sessions.Session.ioMappings: object expected");
                        message.ioMappings[i] = $root.ubii.sessions.IOMapping.fromObject(object.ioMappings[i]);
                    }
                }
                if (object.tags) {
                    if (!Array.isArray(object.tags))
                        throw TypeError(".ubii.sessions.Session.tags: array expected");
                    message.tags = [];
                    for (var i = 0; i < object.tags.length; ++i)
                        message.tags[i] = String(object.tags[i]);
                }
                if (object.description != null)
                    message.description = String(object.description);
                if (object.authors) {
                    if (!Array.isArray(object.authors))
                        throw TypeError(".ubii.sessions.Session.authors: array expected");
                    message.authors = [];
                    for (var i = 0; i < object.authors.length; ++i)
                        message.authors[i] = String(object.authors[i]);
                }
                switch (object.status) {
                case "CREATED":
                case 0:
                    message.status = 0;
                    break;
                case "RUNNING":
                case 1:
                    message.status = 1;
                    break;
                case "PAUSED":
                case 2:
                    message.status = 2;
                    break;
                case "STOPPED":
                case 3:
                    message.status = 3;
                    break;
                }
                if (object.editable != null)
                    message.editable = Boolean(object.editable);
                return message;
            };

            /**
             * Creates a plain object from a Session message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.sessions.Session
             * @static
             * @param {ubii.sessions.Session} message Session
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Session.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.processingModules = [];
                    object.ioMappings = [];
                    object.tags = [];
                    object.authors = [];
                }
                if (options.defaults) {
                    object.id = "";
                    object.name = "";
                    object.description = "";
                    object.status = options.enums === String ? "CREATED" : 0;
                    object.editable = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.processingModules && message.processingModules.length) {
                    object.processingModules = [];
                    for (var j = 0; j < message.processingModules.length; ++j)
                        object.processingModules[j] = $root.ubii.processing.ProcessingModule.toObject(message.processingModules[j], options);
                }
                if (message.ioMappings && message.ioMappings.length) {
                    object.ioMappings = [];
                    for (var j = 0; j < message.ioMappings.length; ++j)
                        object.ioMappings[j] = $root.ubii.sessions.IOMapping.toObject(message.ioMappings[j], options);
                }
                if (message.tags && message.tags.length) {
                    object.tags = [];
                    for (var j = 0; j < message.tags.length; ++j)
                        object.tags[j] = message.tags[j];
                }
                if (message.description != null && message.hasOwnProperty("description"))
                    object.description = message.description;
                if (message.authors && message.authors.length) {
                    object.authors = [];
                    for (var j = 0; j < message.authors.length; ++j)
                        object.authors[j] = message.authors[j];
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.ubii.sessions.SessionStatus[message.status] : message.status;
                if (message.editable != null && message.hasOwnProperty("editable"))
                    object.editable = message.editable;
                return object;
            };

            /**
             * Converts this Session to JSON.
             * @function toJSON
             * @memberof ubii.sessions.Session
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Session.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Session;
        })();

        sessions.SessionList = (function() {

            /**
             * Properties of a SessionList.
             * @memberof ubii.sessions
             * @interface ISessionList
             * @property {Array.<ubii.sessions.ISession>|null} [elements] SessionList elements
             */

            /**
             * Constructs a new SessionList.
             * @memberof ubii.sessions
             * @classdesc Represents a SessionList.
             * @implements ISessionList
             * @constructor
             * @param {ubii.sessions.ISessionList=} [properties] Properties to set
             */
            function SessionList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SessionList elements.
             * @member {Array.<ubii.sessions.ISession>} elements
             * @memberof ubii.sessions.SessionList
             * @instance
             */
            SessionList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new SessionList instance using the specified properties.
             * @function create
             * @memberof ubii.sessions.SessionList
             * @static
             * @param {ubii.sessions.ISessionList=} [properties] Properties to set
             * @returns {ubii.sessions.SessionList} SessionList instance
             */
            SessionList.create = function create(properties) {
                return new SessionList(properties);
            };

            /**
             * Encodes the specified SessionList message. Does not implicitly {@link ubii.sessions.SessionList.verify|verify} messages.
             * @function encode
             * @memberof ubii.sessions.SessionList
             * @static
             * @param {ubii.sessions.ISessionList} message SessionList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SessionList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.sessions.Session.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SessionList message, length delimited. Does not implicitly {@link ubii.sessions.SessionList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.sessions.SessionList
             * @static
             * @param {ubii.sessions.ISessionList} message SessionList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SessionList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SessionList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.sessions.SessionList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.sessions.SessionList} SessionList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SessionList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.sessions.SessionList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.sessions.Session.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SessionList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.sessions.SessionList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.sessions.SessionList} SessionList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SessionList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SessionList message.
             * @function verify
             * @memberof ubii.sessions.SessionList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SessionList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.sessions.Session.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SessionList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.sessions.SessionList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.sessions.SessionList} SessionList
             */
            SessionList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.sessions.SessionList)
                    return object;
                var message = new $root.ubii.sessions.SessionList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.sessions.SessionList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.sessions.SessionList.elements: object expected");
                        message.elements[i] = $root.ubii.sessions.Session.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SessionList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.sessions.SessionList
             * @static
             * @param {ubii.sessions.SessionList} message SessionList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SessionList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.sessions.Session.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this SessionList to JSON.
             * @function toJSON
             * @memberof ubii.sessions.SessionList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SessionList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return SessionList;
        })();

        return sessions;
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
             * @property {ubii.topicData.ITopicDataRecord|null} [topicDataRecord] TopicData topicDataRecord
             * @property {ubii.topicData.ITopicDataRecordList|null} [topicDataRecordList] TopicData topicDataRecordList
             * @property {ubii.general.IError|null} [error] TopicData error
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
             * TopicData topicDataRecord.
             * @member {ubii.topicData.ITopicDataRecord|null|undefined} topicDataRecord
             * @memberof ubii.topicData.TopicData
             * @instance
             */
            TopicData.prototype.topicDataRecord = null;

            /**
             * TopicData topicDataRecordList.
             * @member {ubii.topicData.ITopicDataRecordList|null|undefined} topicDataRecordList
             * @memberof ubii.topicData.TopicData
             * @instance
             */
            TopicData.prototype.topicDataRecordList = null;

            /**
             * TopicData error.
             * @member {ubii.general.IError|null|undefined} error
             * @memberof ubii.topicData.TopicData
             * @instance
             */
            TopicData.prototype.error = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * TopicData type.
             * @member {"topicDataRecord"|"topicDataRecordList"|"error"|undefined} type
             * @memberof ubii.topicData.TopicData
             * @instance
             */
            Object.defineProperty(TopicData.prototype, "type", {
                get: $util.oneOfGetter($oneOfFields = ["topicDataRecord", "topicDataRecordList", "error"]),
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
                if (message.topicDataRecord != null && message.hasOwnProperty("topicDataRecord"))
                    $root.ubii.topicData.TopicDataRecord.encode(message.topicDataRecord, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.topicDataRecordList != null && message.hasOwnProperty("topicDataRecordList"))
                    $root.ubii.topicData.TopicDataRecordList.encode(message.topicDataRecordList, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.ubii.general.Error.encode(message.error, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
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
                    case 2:
                        message.topicDataRecord = $root.ubii.topicData.TopicDataRecord.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.topicDataRecordList = $root.ubii.topicData.TopicDataRecordList.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.error = $root.ubii.general.Error.decode(reader, reader.uint32());
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
                if (message.topicDataRecord != null && message.hasOwnProperty("topicDataRecord")) {
                    properties.type = 1;
                    {
                        var error = $root.ubii.topicData.TopicDataRecord.verify(message.topicDataRecord);
                        if (error)
                            return "topicDataRecord." + error;
                    }
                }
                if (message.topicDataRecordList != null && message.hasOwnProperty("topicDataRecordList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.topicData.TopicDataRecordList.verify(message.topicDataRecordList);
                        if (error)
                            return "topicDataRecordList." + error;
                    }
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.general.Error.verify(message.error);
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
                if (object.topicDataRecord != null) {
                    if (typeof object.topicDataRecord !== "object")
                        throw TypeError(".ubii.topicData.TopicData.topicDataRecord: object expected");
                    message.topicDataRecord = $root.ubii.topicData.TopicDataRecord.fromObject(object.topicDataRecord);
                }
                if (object.topicDataRecordList != null) {
                    if (typeof object.topicDataRecordList !== "object")
                        throw TypeError(".ubii.topicData.TopicData.topicDataRecordList: object expected");
                    message.topicDataRecordList = $root.ubii.topicData.TopicDataRecordList.fromObject(object.topicDataRecordList);
                }
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".ubii.topicData.TopicData.error: object expected");
                    message.error = $root.ubii.general.Error.fromObject(object.error);
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
                if (message.topicDataRecord != null && message.hasOwnProperty("topicDataRecord")) {
                    object.topicDataRecord = $root.ubii.topicData.TopicDataRecord.toObject(message.topicDataRecord, options);
                    if (options.oneofs)
                        object.type = "topicDataRecord";
                }
                if (message.topicDataRecordList != null && message.hasOwnProperty("topicDataRecordList")) {
                    object.topicDataRecordList = $root.ubii.topicData.TopicDataRecordList.toObject(message.topicDataRecordList, options);
                    if (options.oneofs)
                        object.type = "topicDataRecordList";
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    object.error = $root.ubii.general.Error.toObject(message.error, options);
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

        topicData.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof ubii.topicData
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof ubii.topicData
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {ubii.topicData.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof ubii.topicData.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof ubii.topicData.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof ubii.topicData.Timestamp
             * @static
             * @param {ubii.topicData.ITimestamp=} [properties] Properties to set
             * @returns {ubii.topicData.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link ubii.topicData.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof ubii.topicData.Timestamp
             * @static
             * @param {ubii.topicData.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link ubii.topicData.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.topicData.Timestamp
             * @static
             * @param {ubii.topicData.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.topicData.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.topicData.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.topicData.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.topicData.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.topicData.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof ubii.topicData.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.topicData.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.topicData.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.topicData.Timestamp)
                    return object;
                var message = new $root.ubii.topicData.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.topicData.Timestamp
             * @static
             * @param {ubii.topicData.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof ubii.topicData.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        topicData.TopicDataRecord = (function() {

            /**
             * Properties of a TopicDataRecord.
             * @memberof ubii.topicData
             * @interface ITopicDataRecord
             * @property {string|null} [topic] TopicDataRecord topic
             * @property {ubii.topicData.ITimestamp|null} [timestamp] TopicDataRecord timestamp
             * @property {number|null} [double] TopicDataRecord double
             * @property {boolean|null} [bool] TopicDataRecord bool
             * @property {string|null} [string] TopicDataRecord string
             * @property {ubii.dataStructure.IVector2|null} [vector2] TopicDataRecord vector2
             * @property {ubii.dataStructure.IVector3|null} [vector3] TopicDataRecord vector3
             * @property {ubii.dataStructure.IVector4|null} [vector4] TopicDataRecord vector4
             * @property {ubii.dataStructure.IQuaternion|null} [quaternion] TopicDataRecord quaternion
             * @property {ubii.dataStructure.IMatrix3x2|null} [matrix3x2] TopicDataRecord matrix3x2
             * @property {ubii.dataStructure.IMatrix4x4|null} [matrix4x4] TopicDataRecord matrix4x4
             * @property {ubii.dataStructure.IColor|null} [color] TopicDataRecord color
             * @property {ubii.dataStructure.ITouchEvent|null} [touchEvent] TopicDataRecord touchEvent
             * @property {ubii.dataStructure.IKeyEvent|null} [keyEvent] TopicDataRecord keyEvent
             * @property {ubii.dataStructure.IMouseEvent|null} [mouseEvent] TopicDataRecord mouseEvent
             * @property {ubii.dataStructure.IMyoEvent|null} [myoEvent] TopicDataRecord myoEvent
             * @property {ubii.dataStructure.IPose2D|null} [pose2D] TopicDataRecord pose2D
             * @property {ubii.dataStructure.IPose3D|null} [pose3D] TopicDataRecord pose3D
             * @property {ubii.dataStructure.IObject2D|null} [object2D] TopicDataRecord object2D
             * @property {ubii.dataStructure.IObject3D|null} [object3D] TopicDataRecord object3D
             * @property {ubii.dataStructure.IObject2DList|null} [object2DList] TopicDataRecord object2DList
             * @property {ubii.dataStructure.IObject3DList|null} [object3DList] TopicDataRecord object3DList
             * @property {number|null} [int32] TopicDataRecord int32
             * @property {number|null} [float] TopicDataRecord float
             * @property {ubii.dataStructure.IInt32List|null} [int32List] TopicDataRecord int32List
             * @property {ubii.dataStructure.IFloatList|null} [floatList] TopicDataRecord floatList
             * @property {ubii.dataStructure.IDoubleList|null} [doubleList] TopicDataRecord doubleList
             * @property {ubii.dataStructure.IStringList|null} [stringList] TopicDataRecord stringList
             * @property {ubii.dataStructure.IBoolList|null} [boolList] TopicDataRecord boolList
             * @property {ubii.dataStructure.IImage2D|null} [image2D] TopicDataRecord image2D
             * @property {ubii.dataStructure.IImage2DList|null} [image2DList] TopicDataRecord image2DList
             * @property {ubii.sessions.ISession|null} [session] TopicDataRecord session
             * @property {ubii.processing.IProcessingModuleList|null} [processingModuleList] TopicDataRecord processingModuleList
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
             * TopicDataRecord timestamp.
             * @member {ubii.topicData.ITimestamp|null|undefined} timestamp
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.timestamp = null;

            /**
             * TopicDataRecord double.
             * @member {number} double
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.double = 0;

            /**
             * TopicDataRecord bool.
             * @member {boolean} bool
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.bool = false;

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

            /**
             * TopicDataRecord touchEvent.
             * @member {ubii.dataStructure.ITouchEvent|null|undefined} touchEvent
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.touchEvent = null;

            /**
             * TopicDataRecord keyEvent.
             * @member {ubii.dataStructure.IKeyEvent|null|undefined} keyEvent
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.keyEvent = null;

            /**
             * TopicDataRecord mouseEvent.
             * @member {ubii.dataStructure.IMouseEvent|null|undefined} mouseEvent
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.mouseEvent = null;

            /**
             * TopicDataRecord myoEvent.
             * @member {ubii.dataStructure.IMyoEvent|null|undefined} myoEvent
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.myoEvent = null;

            /**
             * TopicDataRecord pose2D.
             * @member {ubii.dataStructure.IPose2D|null|undefined} pose2D
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.pose2D = null;

            /**
             * TopicDataRecord pose3D.
             * @member {ubii.dataStructure.IPose3D|null|undefined} pose3D
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.pose3D = null;

            /**
             * TopicDataRecord object2D.
             * @member {ubii.dataStructure.IObject2D|null|undefined} object2D
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.object2D = null;

            /**
             * TopicDataRecord object3D.
             * @member {ubii.dataStructure.IObject3D|null|undefined} object3D
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.object3D = null;

            /**
             * TopicDataRecord object2DList.
             * @member {ubii.dataStructure.IObject2DList|null|undefined} object2DList
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.object2DList = null;

            /**
             * TopicDataRecord object3DList.
             * @member {ubii.dataStructure.IObject3DList|null|undefined} object3DList
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.object3DList = null;

            /**
             * TopicDataRecord int32.
             * @member {number} int32
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.int32 = 0;

            /**
             * TopicDataRecord float.
             * @member {number} float
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.float = 0;

            /**
             * TopicDataRecord int32List.
             * @member {ubii.dataStructure.IInt32List|null|undefined} int32List
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.int32List = null;

            /**
             * TopicDataRecord floatList.
             * @member {ubii.dataStructure.IFloatList|null|undefined} floatList
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.floatList = null;

            /**
             * TopicDataRecord doubleList.
             * @member {ubii.dataStructure.IDoubleList|null|undefined} doubleList
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.doubleList = null;

            /**
             * TopicDataRecord stringList.
             * @member {ubii.dataStructure.IStringList|null|undefined} stringList
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.stringList = null;

            /**
             * TopicDataRecord boolList.
             * @member {ubii.dataStructure.IBoolList|null|undefined} boolList
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.boolList = null;

            /**
             * TopicDataRecord image2D.
             * @member {ubii.dataStructure.IImage2D|null|undefined} image2D
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.image2D = null;

            /**
             * TopicDataRecord image2DList.
             * @member {ubii.dataStructure.IImage2DList|null|undefined} image2DList
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.image2DList = null;

            /**
             * TopicDataRecord session.
             * @member {ubii.sessions.ISession|null|undefined} session
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.session = null;

            /**
             * TopicDataRecord processingModuleList.
             * @member {ubii.processing.IProcessingModuleList|null|undefined} processingModuleList
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            TopicDataRecord.prototype.processingModuleList = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * TopicDataRecord type.
             * @member {"double"|"bool"|"string"|"vector2"|"vector3"|"vector4"|"quaternion"|"matrix3x2"|"matrix4x4"|"color"|"touchEvent"|"keyEvent"|"mouseEvent"|"myoEvent"|"pose2D"|"pose3D"|"object2D"|"object3D"|"object2DList"|"object3DList"|"int32"|"float"|"int32List"|"floatList"|"doubleList"|"stringList"|"boolList"|"image2D"|"image2DList"|"session"|"processingModuleList"|undefined} type
             * @memberof ubii.topicData.TopicDataRecord
             * @instance
             */
            Object.defineProperty(TopicDataRecord.prototype, "type", {
                get: $util.oneOfGetter($oneOfFields = ["double", "bool", "string", "vector2", "vector3", "vector4", "quaternion", "matrix3x2", "matrix4x4", "color", "touchEvent", "keyEvent", "mouseEvent", "myoEvent", "pose2D", "pose3D", "object2D", "object3D", "object2DList", "object3DList", "int32", "float", "int32List", "floatList", "doubleList", "stringList", "boolList", "image2D", "image2DList", "session", "processingModuleList"]),
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
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    $root.ubii.topicData.Timestamp.encode(message.timestamp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.double != null && message.hasOwnProperty("double"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.double);
                if (message.bool != null && message.hasOwnProperty("bool"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.bool);
                if (message.string != null && message.hasOwnProperty("string"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.string);
                if (message.vector2 != null && message.hasOwnProperty("vector2"))
                    $root.ubii.dataStructure.Vector2.encode(message.vector2, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.vector3 != null && message.hasOwnProperty("vector3"))
                    $root.ubii.dataStructure.Vector3.encode(message.vector3, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.vector4 != null && message.hasOwnProperty("vector4"))
                    $root.ubii.dataStructure.Vector4.encode(message.vector4, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.quaternion != null && message.hasOwnProperty("quaternion"))
                    $root.ubii.dataStructure.Quaternion.encode(message.quaternion, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.matrix3x2 != null && message.hasOwnProperty("matrix3x2"))
                    $root.ubii.dataStructure.Matrix3x2.encode(message.matrix3x2, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.matrix4x4 != null && message.hasOwnProperty("matrix4x4"))
                    $root.ubii.dataStructure.Matrix4x4.encode(message.matrix4x4, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                if (message.color != null && message.hasOwnProperty("color"))
                    $root.ubii.dataStructure.Color.encode(message.color, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                if (message.touchEvent != null && message.hasOwnProperty("touchEvent"))
                    $root.ubii.dataStructure.TouchEvent.encode(message.touchEvent, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                if (message.keyEvent != null && message.hasOwnProperty("keyEvent"))
                    $root.ubii.dataStructure.KeyEvent.encode(message.keyEvent, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                if (message.mouseEvent != null && message.hasOwnProperty("mouseEvent"))
                    $root.ubii.dataStructure.MouseEvent.encode(message.mouseEvent, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                if (message.myoEvent != null && message.hasOwnProperty("myoEvent"))
                    $root.ubii.dataStructure.MyoEvent.encode(message.myoEvent, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                if (message.pose2D != null && message.hasOwnProperty("pose2D"))
                    $root.ubii.dataStructure.Pose2D.encode(message.pose2D, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
                if (message.pose3D != null && message.hasOwnProperty("pose3D"))
                    $root.ubii.dataStructure.Pose3D.encode(message.pose3D, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
                if (message.object2D != null && message.hasOwnProperty("object2D"))
                    $root.ubii.dataStructure.Object2D.encode(message.object2D, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
                if (message.object3D != null && message.hasOwnProperty("object3D"))
                    $root.ubii.dataStructure.Object3D.encode(message.object3D, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
                if (message.object2DList != null && message.hasOwnProperty("object2DList"))
                    $root.ubii.dataStructure.Object2DList.encode(message.object2DList, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
                if (message.object3DList != null && message.hasOwnProperty("object3DList"))
                    $root.ubii.dataStructure.Object3DList.encode(message.object3DList, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
                if (message.int32 != null && message.hasOwnProperty("int32"))
                    writer.uint32(/* id 23, wireType 0 =*/184).int32(message.int32);
                if (message.float != null && message.hasOwnProperty("float"))
                    writer.uint32(/* id 24, wireType 5 =*/197).float(message.float);
                if (message.int32List != null && message.hasOwnProperty("int32List"))
                    $root.ubii.dataStructure.Int32List.encode(message.int32List, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
                if (message.floatList != null && message.hasOwnProperty("floatList"))
                    $root.ubii.dataStructure.FloatList.encode(message.floatList, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
                if (message.doubleList != null && message.hasOwnProperty("doubleList"))
                    $root.ubii.dataStructure.DoubleList.encode(message.doubleList, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
                if (message.stringList != null && message.hasOwnProperty("stringList"))
                    $root.ubii.dataStructure.StringList.encode(message.stringList, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
                if (message.boolList != null && message.hasOwnProperty("boolList"))
                    $root.ubii.dataStructure.BoolList.encode(message.boolList, writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
                if (message.image2D != null && message.hasOwnProperty("image2D"))
                    $root.ubii.dataStructure.Image2D.encode(message.image2D, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
                if (message.image2DList != null && message.hasOwnProperty("image2DList"))
                    $root.ubii.dataStructure.Image2DList.encode(message.image2DList, writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
                if (message.session != null && message.hasOwnProperty("session"))
                    $root.ubii.sessions.Session.encode(message.session, writer.uint32(/* id 32, wireType 2 =*/258).fork()).ldelim();
                if (message.processingModuleList != null && message.hasOwnProperty("processingModuleList"))
                    $root.ubii.processing.ProcessingModuleList.encode(message.processingModuleList, writer.uint32(/* id 33, wireType 2 =*/266).fork()).ldelim();
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
                        message.timestamp = $root.ubii.topicData.Timestamp.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.double = reader.double();
                        break;
                    case 4:
                        message.bool = reader.bool();
                        break;
                    case 5:
                        message.string = reader.string();
                        break;
                    case 6:
                        message.vector2 = $root.ubii.dataStructure.Vector2.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.vector3 = $root.ubii.dataStructure.Vector3.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.vector4 = $root.ubii.dataStructure.Vector4.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.quaternion = $root.ubii.dataStructure.Quaternion.decode(reader, reader.uint32());
                        break;
                    case 10:
                        message.matrix3x2 = $root.ubii.dataStructure.Matrix3x2.decode(reader, reader.uint32());
                        break;
                    case 11:
                        message.matrix4x4 = $root.ubii.dataStructure.Matrix4x4.decode(reader, reader.uint32());
                        break;
                    case 12:
                        message.color = $root.ubii.dataStructure.Color.decode(reader, reader.uint32());
                        break;
                    case 13:
                        message.touchEvent = $root.ubii.dataStructure.TouchEvent.decode(reader, reader.uint32());
                        break;
                    case 14:
                        message.keyEvent = $root.ubii.dataStructure.KeyEvent.decode(reader, reader.uint32());
                        break;
                    case 15:
                        message.mouseEvent = $root.ubii.dataStructure.MouseEvent.decode(reader, reader.uint32());
                        break;
                    case 16:
                        message.myoEvent = $root.ubii.dataStructure.MyoEvent.decode(reader, reader.uint32());
                        break;
                    case 17:
                        message.pose2D = $root.ubii.dataStructure.Pose2D.decode(reader, reader.uint32());
                        break;
                    case 18:
                        message.pose3D = $root.ubii.dataStructure.Pose3D.decode(reader, reader.uint32());
                        break;
                    case 19:
                        message.object2D = $root.ubii.dataStructure.Object2D.decode(reader, reader.uint32());
                        break;
                    case 20:
                        message.object3D = $root.ubii.dataStructure.Object3D.decode(reader, reader.uint32());
                        break;
                    case 21:
                        message.object2DList = $root.ubii.dataStructure.Object2DList.decode(reader, reader.uint32());
                        break;
                    case 22:
                        message.object3DList = $root.ubii.dataStructure.Object3DList.decode(reader, reader.uint32());
                        break;
                    case 23:
                        message.int32 = reader.int32();
                        break;
                    case 24:
                        message.float = reader.float();
                        break;
                    case 25:
                        message.int32List = $root.ubii.dataStructure.Int32List.decode(reader, reader.uint32());
                        break;
                    case 26:
                        message.floatList = $root.ubii.dataStructure.FloatList.decode(reader, reader.uint32());
                        break;
                    case 27:
                        message.doubleList = $root.ubii.dataStructure.DoubleList.decode(reader, reader.uint32());
                        break;
                    case 28:
                        message.stringList = $root.ubii.dataStructure.StringList.decode(reader, reader.uint32());
                        break;
                    case 29:
                        message.boolList = $root.ubii.dataStructure.BoolList.decode(reader, reader.uint32());
                        break;
                    case 30:
                        message.image2D = $root.ubii.dataStructure.Image2D.decode(reader, reader.uint32());
                        break;
                    case 31:
                        message.image2DList = $root.ubii.dataStructure.Image2DList.decode(reader, reader.uint32());
                        break;
                    case 32:
                        message.session = $root.ubii.sessions.Session.decode(reader, reader.uint32());
                        break;
                    case 33:
                        message.processingModuleList = $root.ubii.processing.ProcessingModuleList.decode(reader, reader.uint32());
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
                if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                    var error = $root.ubii.topicData.Timestamp.verify(message.timestamp);
                    if (error)
                        return "timestamp." + error;
                }
                if (message.double != null && message.hasOwnProperty("double")) {
                    properties.type = 1;
                    if (typeof message.double !== "number")
                        return "double: number expected";
                }
                if (message.bool != null && message.hasOwnProperty("bool")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    if (typeof message.bool !== "boolean")
                        return "bool: boolean expected";
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
                if (message.touchEvent != null && message.hasOwnProperty("touchEvent")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.TouchEvent.verify(message.touchEvent);
                        if (error)
                            return "touchEvent." + error;
                    }
                }
                if (message.keyEvent != null && message.hasOwnProperty("keyEvent")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.KeyEvent.verify(message.keyEvent);
                        if (error)
                            return "keyEvent." + error;
                    }
                }
                if (message.mouseEvent != null && message.hasOwnProperty("mouseEvent")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.MouseEvent.verify(message.mouseEvent);
                        if (error)
                            return "mouseEvent." + error;
                    }
                }
                if (message.myoEvent != null && message.hasOwnProperty("myoEvent")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.MyoEvent.verify(message.myoEvent);
                        if (error)
                            return "myoEvent." + error;
                    }
                }
                if (message.pose2D != null && message.hasOwnProperty("pose2D")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Pose2D.verify(message.pose2D);
                        if (error)
                            return "pose2D." + error;
                    }
                }
                if (message.pose3D != null && message.hasOwnProperty("pose3D")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Pose3D.verify(message.pose3D);
                        if (error)
                            return "pose3D." + error;
                    }
                }
                if (message.object2D != null && message.hasOwnProperty("object2D")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Object2D.verify(message.object2D);
                        if (error)
                            return "object2D." + error;
                    }
                }
                if (message.object3D != null && message.hasOwnProperty("object3D")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Object3D.verify(message.object3D);
                        if (error)
                            return "object3D." + error;
                    }
                }
                if (message.object2DList != null && message.hasOwnProperty("object2DList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Object2DList.verify(message.object2DList);
                        if (error)
                            return "object2DList." + error;
                    }
                }
                if (message.object3DList != null && message.hasOwnProperty("object3DList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Object3DList.verify(message.object3DList);
                        if (error)
                            return "object3DList." + error;
                    }
                }
                if (message.int32 != null && message.hasOwnProperty("int32")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    if (!$util.isInteger(message.int32))
                        return "int32: integer expected";
                }
                if (message.float != null && message.hasOwnProperty("float")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    if (typeof message.float !== "number")
                        return "float: number expected";
                }
                if (message.int32List != null && message.hasOwnProperty("int32List")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Int32List.verify(message.int32List);
                        if (error)
                            return "int32List." + error;
                    }
                }
                if (message.floatList != null && message.hasOwnProperty("floatList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.FloatList.verify(message.floatList);
                        if (error)
                            return "floatList." + error;
                    }
                }
                if (message.doubleList != null && message.hasOwnProperty("doubleList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.DoubleList.verify(message.doubleList);
                        if (error)
                            return "doubleList." + error;
                    }
                }
                if (message.stringList != null && message.hasOwnProperty("stringList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.StringList.verify(message.stringList);
                        if (error)
                            return "stringList." + error;
                    }
                }
                if (message.boolList != null && message.hasOwnProperty("boolList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.BoolList.verify(message.boolList);
                        if (error)
                            return "boolList." + error;
                    }
                }
                if (message.image2D != null && message.hasOwnProperty("image2D")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Image2D.verify(message.image2D);
                        if (error)
                            return "image2D." + error;
                    }
                }
                if (message.image2DList != null && message.hasOwnProperty("image2DList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.dataStructure.Image2DList.verify(message.image2DList);
                        if (error)
                            return "image2DList." + error;
                    }
                }
                if (message.session != null && message.hasOwnProperty("session")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.sessions.Session.verify(message.session);
                        if (error)
                            return "session." + error;
                    }
                }
                if (message.processingModuleList != null && message.hasOwnProperty("processingModuleList")) {
                    if (properties.type === 1)
                        return "type: multiple values";
                    properties.type = 1;
                    {
                        var error = $root.ubii.processing.ProcessingModuleList.verify(message.processingModuleList);
                        if (error)
                            return "processingModuleList." + error;
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
                if (object.timestamp != null) {
                    if (typeof object.timestamp !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.timestamp: object expected");
                    message.timestamp = $root.ubii.topicData.Timestamp.fromObject(object.timestamp);
                }
                if (object.double != null)
                    message.double = Number(object.double);
                if (object.bool != null)
                    message.bool = Boolean(object.bool);
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
                if (object.touchEvent != null) {
                    if (typeof object.touchEvent !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.touchEvent: object expected");
                    message.touchEvent = $root.ubii.dataStructure.TouchEvent.fromObject(object.touchEvent);
                }
                if (object.keyEvent != null) {
                    if (typeof object.keyEvent !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.keyEvent: object expected");
                    message.keyEvent = $root.ubii.dataStructure.KeyEvent.fromObject(object.keyEvent);
                }
                if (object.mouseEvent != null) {
                    if (typeof object.mouseEvent !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.mouseEvent: object expected");
                    message.mouseEvent = $root.ubii.dataStructure.MouseEvent.fromObject(object.mouseEvent);
                }
                if (object.myoEvent != null) {
                    if (typeof object.myoEvent !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.myoEvent: object expected");
                    message.myoEvent = $root.ubii.dataStructure.MyoEvent.fromObject(object.myoEvent);
                }
                if (object.pose2D != null) {
                    if (typeof object.pose2D !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.pose2D: object expected");
                    message.pose2D = $root.ubii.dataStructure.Pose2D.fromObject(object.pose2D);
                }
                if (object.pose3D != null) {
                    if (typeof object.pose3D !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.pose3D: object expected");
                    message.pose3D = $root.ubii.dataStructure.Pose3D.fromObject(object.pose3D);
                }
                if (object.object2D != null) {
                    if (typeof object.object2D !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.object2D: object expected");
                    message.object2D = $root.ubii.dataStructure.Object2D.fromObject(object.object2D);
                }
                if (object.object3D != null) {
                    if (typeof object.object3D !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.object3D: object expected");
                    message.object3D = $root.ubii.dataStructure.Object3D.fromObject(object.object3D);
                }
                if (object.object2DList != null) {
                    if (typeof object.object2DList !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.object2DList: object expected");
                    message.object2DList = $root.ubii.dataStructure.Object2DList.fromObject(object.object2DList);
                }
                if (object.object3DList != null) {
                    if (typeof object.object3DList !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.object3DList: object expected");
                    message.object3DList = $root.ubii.dataStructure.Object3DList.fromObject(object.object3DList);
                }
                if (object.int32 != null)
                    message.int32 = object.int32 | 0;
                if (object.float != null)
                    message.float = Number(object.float);
                if (object.int32List != null) {
                    if (typeof object.int32List !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.int32List: object expected");
                    message.int32List = $root.ubii.dataStructure.Int32List.fromObject(object.int32List);
                }
                if (object.floatList != null) {
                    if (typeof object.floatList !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.floatList: object expected");
                    message.floatList = $root.ubii.dataStructure.FloatList.fromObject(object.floatList);
                }
                if (object.doubleList != null) {
                    if (typeof object.doubleList !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.doubleList: object expected");
                    message.doubleList = $root.ubii.dataStructure.DoubleList.fromObject(object.doubleList);
                }
                if (object.stringList != null) {
                    if (typeof object.stringList !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.stringList: object expected");
                    message.stringList = $root.ubii.dataStructure.StringList.fromObject(object.stringList);
                }
                if (object.boolList != null) {
                    if (typeof object.boolList !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.boolList: object expected");
                    message.boolList = $root.ubii.dataStructure.BoolList.fromObject(object.boolList);
                }
                if (object.image2D != null) {
                    if (typeof object.image2D !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.image2D: object expected");
                    message.image2D = $root.ubii.dataStructure.Image2D.fromObject(object.image2D);
                }
                if (object.image2DList != null) {
                    if (typeof object.image2DList !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.image2DList: object expected");
                    message.image2DList = $root.ubii.dataStructure.Image2DList.fromObject(object.image2DList);
                }
                if (object.session != null) {
                    if (typeof object.session !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.session: object expected");
                    message.session = $root.ubii.sessions.Session.fromObject(object.session);
                }
                if (object.processingModuleList != null) {
                    if (typeof object.processingModuleList !== "object")
                        throw TypeError(".ubii.topicData.TopicDataRecord.processingModuleList: object expected");
                    message.processingModuleList = $root.ubii.processing.ProcessingModuleList.fromObject(object.processingModuleList);
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
                if (options.defaults) {
                    object.topic = "";
                    object.timestamp = null;
                }
                if (message.topic != null && message.hasOwnProperty("topic"))
                    object.topic = message.topic;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    object.timestamp = $root.ubii.topicData.Timestamp.toObject(message.timestamp, options);
                if (message.double != null && message.hasOwnProperty("double")) {
                    object.double = options.json && !isFinite(message.double) ? String(message.double) : message.double;
                    if (options.oneofs)
                        object.type = "double";
                }
                if (message.bool != null && message.hasOwnProperty("bool")) {
                    object.bool = message.bool;
                    if (options.oneofs)
                        object.type = "bool";
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
                if (message.touchEvent != null && message.hasOwnProperty("touchEvent")) {
                    object.touchEvent = $root.ubii.dataStructure.TouchEvent.toObject(message.touchEvent, options);
                    if (options.oneofs)
                        object.type = "touchEvent";
                }
                if (message.keyEvent != null && message.hasOwnProperty("keyEvent")) {
                    object.keyEvent = $root.ubii.dataStructure.KeyEvent.toObject(message.keyEvent, options);
                    if (options.oneofs)
                        object.type = "keyEvent";
                }
                if (message.mouseEvent != null && message.hasOwnProperty("mouseEvent")) {
                    object.mouseEvent = $root.ubii.dataStructure.MouseEvent.toObject(message.mouseEvent, options);
                    if (options.oneofs)
                        object.type = "mouseEvent";
                }
                if (message.myoEvent != null && message.hasOwnProperty("myoEvent")) {
                    object.myoEvent = $root.ubii.dataStructure.MyoEvent.toObject(message.myoEvent, options);
                    if (options.oneofs)
                        object.type = "myoEvent";
                }
                if (message.pose2D != null && message.hasOwnProperty("pose2D")) {
                    object.pose2D = $root.ubii.dataStructure.Pose2D.toObject(message.pose2D, options);
                    if (options.oneofs)
                        object.type = "pose2D";
                }
                if (message.pose3D != null && message.hasOwnProperty("pose3D")) {
                    object.pose3D = $root.ubii.dataStructure.Pose3D.toObject(message.pose3D, options);
                    if (options.oneofs)
                        object.type = "pose3D";
                }
                if (message.object2D != null && message.hasOwnProperty("object2D")) {
                    object.object2D = $root.ubii.dataStructure.Object2D.toObject(message.object2D, options);
                    if (options.oneofs)
                        object.type = "object2D";
                }
                if (message.object3D != null && message.hasOwnProperty("object3D")) {
                    object.object3D = $root.ubii.dataStructure.Object3D.toObject(message.object3D, options);
                    if (options.oneofs)
                        object.type = "object3D";
                }
                if (message.object2DList != null && message.hasOwnProperty("object2DList")) {
                    object.object2DList = $root.ubii.dataStructure.Object2DList.toObject(message.object2DList, options);
                    if (options.oneofs)
                        object.type = "object2DList";
                }
                if (message.object3DList != null && message.hasOwnProperty("object3DList")) {
                    object.object3DList = $root.ubii.dataStructure.Object3DList.toObject(message.object3DList, options);
                    if (options.oneofs)
                        object.type = "object3DList";
                }
                if (message.int32 != null && message.hasOwnProperty("int32")) {
                    object.int32 = message.int32;
                    if (options.oneofs)
                        object.type = "int32";
                }
                if (message.float != null && message.hasOwnProperty("float")) {
                    object.float = options.json && !isFinite(message.float) ? String(message.float) : message.float;
                    if (options.oneofs)
                        object.type = "float";
                }
                if (message.int32List != null && message.hasOwnProperty("int32List")) {
                    object.int32List = $root.ubii.dataStructure.Int32List.toObject(message.int32List, options);
                    if (options.oneofs)
                        object.type = "int32List";
                }
                if (message.floatList != null && message.hasOwnProperty("floatList")) {
                    object.floatList = $root.ubii.dataStructure.FloatList.toObject(message.floatList, options);
                    if (options.oneofs)
                        object.type = "floatList";
                }
                if (message.doubleList != null && message.hasOwnProperty("doubleList")) {
                    object.doubleList = $root.ubii.dataStructure.DoubleList.toObject(message.doubleList, options);
                    if (options.oneofs)
                        object.type = "doubleList";
                }
                if (message.stringList != null && message.hasOwnProperty("stringList")) {
                    object.stringList = $root.ubii.dataStructure.StringList.toObject(message.stringList, options);
                    if (options.oneofs)
                        object.type = "stringList";
                }
                if (message.boolList != null && message.hasOwnProperty("boolList")) {
                    object.boolList = $root.ubii.dataStructure.BoolList.toObject(message.boolList, options);
                    if (options.oneofs)
                        object.type = "boolList";
                }
                if (message.image2D != null && message.hasOwnProperty("image2D")) {
                    object.image2D = $root.ubii.dataStructure.Image2D.toObject(message.image2D, options);
                    if (options.oneofs)
                        object.type = "image2D";
                }
                if (message.image2DList != null && message.hasOwnProperty("image2DList")) {
                    object.image2DList = $root.ubii.dataStructure.Image2DList.toObject(message.image2DList, options);
                    if (options.oneofs)
                        object.type = "image2DList";
                }
                if (message.session != null && message.hasOwnProperty("session")) {
                    object.session = $root.ubii.sessions.Session.toObject(message.session, options);
                    if (options.oneofs)
                        object.type = "session";
                }
                if (message.processingModuleList != null && message.hasOwnProperty("processingModuleList")) {
                    object.processingModuleList = $root.ubii.processing.ProcessingModuleList.toObject(message.processingModuleList, options);
                    if (options.oneofs)
                        object.type = "processingModuleList";
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

        topicData.TopicDataRecordList = (function() {

            /**
             * Properties of a TopicDataRecordList.
             * @memberof ubii.topicData
             * @interface ITopicDataRecordList
             * @property {Array.<ubii.topicData.ITopicDataRecord>|null} [elements] TopicDataRecordList elements
             */

            /**
             * Constructs a new TopicDataRecordList.
             * @memberof ubii.topicData
             * @classdesc Represents a TopicDataRecordList.
             * @implements ITopicDataRecordList
             * @constructor
             * @param {ubii.topicData.ITopicDataRecordList=} [properties] Properties to set
             */
            function TopicDataRecordList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TopicDataRecordList elements.
             * @member {Array.<ubii.topicData.ITopicDataRecord>} elements
             * @memberof ubii.topicData.TopicDataRecordList
             * @instance
             */
            TopicDataRecordList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new TopicDataRecordList instance using the specified properties.
             * @function create
             * @memberof ubii.topicData.TopicDataRecordList
             * @static
             * @param {ubii.topicData.ITopicDataRecordList=} [properties] Properties to set
             * @returns {ubii.topicData.TopicDataRecordList} TopicDataRecordList instance
             */
            TopicDataRecordList.create = function create(properties) {
                return new TopicDataRecordList(properties);
            };

            /**
             * Encodes the specified TopicDataRecordList message. Does not implicitly {@link ubii.topicData.TopicDataRecordList.verify|verify} messages.
             * @function encode
             * @memberof ubii.topicData.TopicDataRecordList
             * @static
             * @param {ubii.topicData.ITopicDataRecordList} message TopicDataRecordList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicDataRecordList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.topicData.TopicDataRecord.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TopicDataRecordList message, length delimited. Does not implicitly {@link ubii.topicData.TopicDataRecordList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.topicData.TopicDataRecordList
             * @static
             * @param {ubii.topicData.ITopicDataRecordList} message TopicDataRecordList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TopicDataRecordList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TopicDataRecordList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.topicData.TopicDataRecordList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.topicData.TopicDataRecordList} TopicDataRecordList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicDataRecordList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.topicData.TopicDataRecordList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.topicData.TopicDataRecord.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TopicDataRecordList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.topicData.TopicDataRecordList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.topicData.TopicDataRecordList} TopicDataRecordList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TopicDataRecordList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TopicDataRecordList message.
             * @function verify
             * @memberof ubii.topicData.TopicDataRecordList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TopicDataRecordList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.topicData.TopicDataRecord.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TopicDataRecordList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.topicData.TopicDataRecordList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.topicData.TopicDataRecordList} TopicDataRecordList
             */
            TopicDataRecordList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.topicData.TopicDataRecordList)
                    return object;
                var message = new $root.ubii.topicData.TopicDataRecordList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.topicData.TopicDataRecordList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.topicData.TopicDataRecordList.elements: object expected");
                        message.elements[i] = $root.ubii.topicData.TopicDataRecord.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a TopicDataRecordList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.topicData.TopicDataRecordList
             * @static
             * @param {ubii.topicData.TopicDataRecordList} message TopicDataRecordList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TopicDataRecordList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.topicData.TopicDataRecord.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this TopicDataRecordList to JSON.
             * @function toJSON
             * @memberof ubii.topicData.TopicDataRecordList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TopicDataRecordList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TopicDataRecordList;
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

        /**
         * ButtonEventType enum.
         * @name ubii.dataStructure.ButtonEventType
         * @enum {string}
         * @property {number} UP=0 UP value
         * @property {number} DOWN=1 DOWN value
         */
        dataStructure.ButtonEventType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UP"] = 0;
            values[valuesById[1] = "DOWN"] = 1;
            return values;
        })();

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

        /**
         * HandGestureType enum.
         * @name ubii.dataStructure.HandGestureType
         * @enum {string}
         * @property {number} REST=0 REST value
         * @property {number} FINGERS_SPREAD=1 FINGERS_SPREAD value
         * @property {number} WAVE_IN=2 WAVE_IN value
         * @property {number} WAVE_OUT=3 WAVE_OUT value
         * @property {number} FIST=4 FIST value
         * @property {number} DOUBLE_TAP=5 DOUBLE_TAP value
         */
        dataStructure.HandGestureType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "REST"] = 0;
            values[valuesById[1] = "FINGERS_SPREAD"] = 1;
            values[valuesById[2] = "WAVE_IN"] = 2;
            values[valuesById[3] = "WAVE_OUT"] = 3;
            values[valuesById[4] = "FIST"] = 4;
            values[valuesById[5] = "DOUBLE_TAP"] = 5;
            return values;
        })();

        dataStructure.Image2D = (function() {

            /**
             * Properties of an Image2D.
             * @memberof ubii.dataStructure
             * @interface IImage2D
             * @property {number|null} [width] Image2D width
             * @property {number|null} [height] Image2D height
             * @property {ubii.dataStructure.Image2D.DataFormat|null} [dataFormat] Image2D dataFormat
             * @property {Uint8Array|null} [data] Image2D data
             */

            /**
             * Constructs a new Image2D.
             * @memberof ubii.dataStructure
             * @classdesc Represents an Image2D.
             * @implements IImage2D
             * @constructor
             * @param {ubii.dataStructure.IImage2D=} [properties] Properties to set
             */
            function Image2D(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Image2D width.
             * @member {number} width
             * @memberof ubii.dataStructure.Image2D
             * @instance
             */
            Image2D.prototype.width = 0;

            /**
             * Image2D height.
             * @member {number} height
             * @memberof ubii.dataStructure.Image2D
             * @instance
             */
            Image2D.prototype.height = 0;

            /**
             * Image2D dataFormat.
             * @member {ubii.dataStructure.Image2D.DataFormat} dataFormat
             * @memberof ubii.dataStructure.Image2D
             * @instance
             */
            Image2D.prototype.dataFormat = 0;

            /**
             * Image2D data.
             * @member {Uint8Array} data
             * @memberof ubii.dataStructure.Image2D
             * @instance
             */
            Image2D.prototype.data = $util.newBuffer([]);

            /**
             * Creates a new Image2D instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Image2D
             * @static
             * @param {ubii.dataStructure.IImage2D=} [properties] Properties to set
             * @returns {ubii.dataStructure.Image2D} Image2D instance
             */
            Image2D.create = function create(properties) {
                return new Image2D(properties);
            };

            /**
             * Encodes the specified Image2D message. Does not implicitly {@link ubii.dataStructure.Image2D.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Image2D
             * @static
             * @param {ubii.dataStructure.IImage2D} message Image2D message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Image2D.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.width != null && message.hasOwnProperty("width"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.width);
                if (message.height != null && message.hasOwnProperty("height"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.height);
                if (message.dataFormat != null && message.hasOwnProperty("dataFormat"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.dataFormat);
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.data);
                return writer;
            };

            /**
             * Encodes the specified Image2D message, length delimited. Does not implicitly {@link ubii.dataStructure.Image2D.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Image2D
             * @static
             * @param {ubii.dataStructure.IImage2D} message Image2D message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Image2D.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Image2D message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Image2D
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Image2D} Image2D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Image2D.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Image2D();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.width = reader.int32();
                        break;
                    case 2:
                        message.height = reader.int32();
                        break;
                    case 3:
                        message.dataFormat = reader.int32();
                        break;
                    case 4:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Image2D message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Image2D
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Image2D} Image2D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Image2D.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Image2D message.
             * @function verify
             * @memberof ubii.dataStructure.Image2D
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Image2D.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.width != null && message.hasOwnProperty("width"))
                    if (!$util.isInteger(message.width))
                        return "width: integer expected";
                if (message.height != null && message.hasOwnProperty("height"))
                    if (!$util.isInteger(message.height))
                        return "height: integer expected";
                if (message.dataFormat != null && message.hasOwnProperty("dataFormat"))
                    switch (message.dataFormat) {
                    default:
                        return "dataFormat: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };

            /**
             * Creates an Image2D message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Image2D
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Image2D} Image2D
             */
            Image2D.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Image2D)
                    return object;
                var message = new $root.ubii.dataStructure.Image2D();
                if (object.width != null)
                    message.width = object.width | 0;
                if (object.height != null)
                    message.height = object.height | 0;
                switch (object.dataFormat) {
                case "GRAY8":
                case 0:
                    message.dataFormat = 0;
                    break;
                case "RGB8":
                case 1:
                    message.dataFormat = 1;
                    break;
                case "RGBA8":
                case 2:
                    message.dataFormat = 2;
                    break;
                }
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                return message;
            };

            /**
             * Creates a plain object from an Image2D message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Image2D
             * @static
             * @param {ubii.dataStructure.Image2D} message Image2D
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Image2D.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.width = 0;
                    object.height = 0;
                    object.dataFormat = options.enums === String ? "GRAY8" : 0;
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                }
                if (message.width != null && message.hasOwnProperty("width"))
                    object.width = message.width;
                if (message.height != null && message.hasOwnProperty("height"))
                    object.height = message.height;
                if (message.dataFormat != null && message.hasOwnProperty("dataFormat"))
                    object.dataFormat = options.enums === String ? $root.ubii.dataStructure.Image2D.DataFormat[message.dataFormat] : message.dataFormat;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };

            /**
             * Converts this Image2D to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Image2D
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Image2D.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * DataFormat enum.
             * @name ubii.dataStructure.Image2D.DataFormat
             * @enum {string}
             * @property {number} GRAY8=0 GRAY8 value
             * @property {number} RGB8=1 RGB8 value
             * @property {number} RGBA8=2 RGBA8 value
             */
            Image2D.DataFormat = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "GRAY8"] = 0;
                values[valuesById[1] = "RGB8"] = 1;
                values[valuesById[2] = "RGBA8"] = 2;
                return values;
            })();

            return Image2D;
        })();

        dataStructure.Image2DList = (function() {

            /**
             * Properties of an Image2DList.
             * @memberof ubii.dataStructure
             * @interface IImage2DList
             * @property {Array.<ubii.dataStructure.IImage2D>|null} [elements] Image2DList elements
             */

            /**
             * Constructs a new Image2DList.
             * @memberof ubii.dataStructure
             * @classdesc Represents an Image2DList.
             * @implements IImage2DList
             * @constructor
             * @param {ubii.dataStructure.IImage2DList=} [properties] Properties to set
             */
            function Image2DList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Image2DList elements.
             * @member {Array.<ubii.dataStructure.IImage2D>} elements
             * @memberof ubii.dataStructure.Image2DList
             * @instance
             */
            Image2DList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new Image2DList instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Image2DList
             * @static
             * @param {ubii.dataStructure.IImage2DList=} [properties] Properties to set
             * @returns {ubii.dataStructure.Image2DList} Image2DList instance
             */
            Image2DList.create = function create(properties) {
                return new Image2DList(properties);
            };

            /**
             * Encodes the specified Image2DList message. Does not implicitly {@link ubii.dataStructure.Image2DList.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Image2DList
             * @static
             * @param {ubii.dataStructure.IImage2DList} message Image2DList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Image2DList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.dataStructure.Image2D.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Image2DList message, length delimited. Does not implicitly {@link ubii.dataStructure.Image2DList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Image2DList
             * @static
             * @param {ubii.dataStructure.IImage2DList} message Image2DList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Image2DList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Image2DList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Image2DList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Image2DList} Image2DList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Image2DList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Image2DList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.dataStructure.Image2D.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Image2DList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Image2DList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Image2DList} Image2DList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Image2DList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Image2DList message.
             * @function verify
             * @memberof ubii.dataStructure.Image2DList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Image2DList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.dataStructure.Image2D.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an Image2DList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Image2DList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Image2DList} Image2DList
             */
            Image2DList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Image2DList)
                    return object;
                var message = new $root.ubii.dataStructure.Image2DList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.dataStructure.Image2DList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.dataStructure.Image2DList.elements: object expected");
                        message.elements[i] = $root.ubii.dataStructure.Image2D.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an Image2DList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Image2DList
             * @static
             * @param {ubii.dataStructure.Image2DList} message Image2DList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Image2DList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.dataStructure.Image2D.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this Image2DList to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Image2DList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Image2DList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Image2DList;
        })();

        dataStructure.KeyEvent = (function() {

            /**
             * Properties of a KeyEvent.
             * @memberof ubii.dataStructure
             * @interface IKeyEvent
             * @property {ubii.dataStructure.ButtonEventType|null} [type] KeyEvent type
             * @property {string|null} [key] KeyEvent key
             */

            /**
             * Constructs a new KeyEvent.
             * @memberof ubii.dataStructure
             * @classdesc Represents a KeyEvent.
             * @implements IKeyEvent
             * @constructor
             * @param {ubii.dataStructure.IKeyEvent=} [properties] Properties to set
             */
            function KeyEvent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * KeyEvent type.
             * @member {ubii.dataStructure.ButtonEventType} type
             * @memberof ubii.dataStructure.KeyEvent
             * @instance
             */
            KeyEvent.prototype.type = 0;

            /**
             * KeyEvent key.
             * @member {string} key
             * @memberof ubii.dataStructure.KeyEvent
             * @instance
             */
            KeyEvent.prototype.key = "";

            /**
             * Creates a new KeyEvent instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.KeyEvent
             * @static
             * @param {ubii.dataStructure.IKeyEvent=} [properties] Properties to set
             * @returns {ubii.dataStructure.KeyEvent} KeyEvent instance
             */
            KeyEvent.create = function create(properties) {
                return new KeyEvent(properties);
            };

            /**
             * Encodes the specified KeyEvent message. Does not implicitly {@link ubii.dataStructure.KeyEvent.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.KeyEvent
             * @static
             * @param {ubii.dataStructure.IKeyEvent} message KeyEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KeyEvent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.key != null && message.hasOwnProperty("key"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
                return writer;
            };

            /**
             * Encodes the specified KeyEvent message, length delimited. Does not implicitly {@link ubii.dataStructure.KeyEvent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.KeyEvent
             * @static
             * @param {ubii.dataStructure.IKeyEvent} message KeyEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            KeyEvent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a KeyEvent message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.KeyEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.KeyEvent} KeyEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KeyEvent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.KeyEvent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        message.key = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a KeyEvent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.KeyEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.KeyEvent} KeyEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            KeyEvent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a KeyEvent message.
             * @function verify
             * @memberof ubii.dataStructure.KeyEvent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            KeyEvent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                return null;
            };

            /**
             * Creates a KeyEvent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.KeyEvent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.KeyEvent} KeyEvent
             */
            KeyEvent.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.KeyEvent)
                    return object;
                var message = new $root.ubii.dataStructure.KeyEvent();
                switch (object.type) {
                case "UP":
                case 0:
                    message.type = 0;
                    break;
                case "DOWN":
                case 1:
                    message.type = 1;
                    break;
                }
                if (object.key != null)
                    message.key = String(object.key);
                return message;
            };

            /**
             * Creates a plain object from a KeyEvent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.KeyEvent
             * @static
             * @param {ubii.dataStructure.KeyEvent} message KeyEvent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            KeyEvent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = options.enums === String ? "UP" : 0;
                    object.key = "";
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.ubii.dataStructure.ButtonEventType[message.type] : message.type;
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                return object;
            };

            /**
             * Converts this KeyEvent to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.KeyEvent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            KeyEvent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return KeyEvent;
        })();

        dataStructure.StringList = (function() {

            /**
             * Properties of a StringList.
             * @memberof ubii.dataStructure
             * @interface IStringList
             * @property {Array.<string>|null} [elements] StringList elements
             */

            /**
             * Constructs a new StringList.
             * @memberof ubii.dataStructure
             * @classdesc Represents a StringList.
             * @implements IStringList
             * @constructor
             * @param {ubii.dataStructure.IStringList=} [properties] Properties to set
             */
            function StringList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StringList elements.
             * @member {Array.<string>} elements
             * @memberof ubii.dataStructure.StringList
             * @instance
             */
            StringList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new StringList instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.StringList
             * @static
             * @param {ubii.dataStructure.IStringList=} [properties] Properties to set
             * @returns {ubii.dataStructure.StringList} StringList instance
             */
            StringList.create = function create(properties) {
                return new StringList(properties);
            };

            /**
             * Encodes the specified StringList message. Does not implicitly {@link ubii.dataStructure.StringList.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.StringList
             * @static
             * @param {ubii.dataStructure.IStringList} message StringList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.elements[i]);
                return writer;
            };

            /**
             * Encodes the specified StringList message, length delimited. Does not implicitly {@link ubii.dataStructure.StringList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.StringList
             * @static
             * @param {ubii.dataStructure.IStringList} message StringList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StringList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.StringList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.StringList} StringList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.StringList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StringList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.StringList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.StringList} StringList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StringList message.
             * @function verify
             * @memberof ubii.dataStructure.StringList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StringList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i)
                        if (!$util.isString(message.elements[i]))
                            return "elements: string[] expected";
                }
                return null;
            };

            /**
             * Creates a StringList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.StringList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.StringList} StringList
             */
            StringList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.StringList)
                    return object;
                var message = new $root.ubii.dataStructure.StringList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.dataStructure.StringList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i)
                        message.elements[i] = String(object.elements[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a StringList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.StringList
             * @static
             * @param {ubii.dataStructure.StringList} message StringList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StringList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = message.elements[j];
                }
                return object;
            };

            /**
             * Converts this StringList to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.StringList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StringList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return StringList;
        })();

        dataStructure.DoubleList = (function() {

            /**
             * Properties of a DoubleList.
             * @memberof ubii.dataStructure
             * @interface IDoubleList
             * @property {Array.<number>|null} [elements] DoubleList elements
             */

            /**
             * Constructs a new DoubleList.
             * @memberof ubii.dataStructure
             * @classdesc Represents a DoubleList.
             * @implements IDoubleList
             * @constructor
             * @param {ubii.dataStructure.IDoubleList=} [properties] Properties to set
             */
            function DoubleList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DoubleList elements.
             * @member {Array.<number>} elements
             * @memberof ubii.dataStructure.DoubleList
             * @instance
             */
            DoubleList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new DoubleList instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.DoubleList
             * @static
             * @param {ubii.dataStructure.IDoubleList=} [properties] Properties to set
             * @returns {ubii.dataStructure.DoubleList} DoubleList instance
             */
            DoubleList.create = function create(properties) {
                return new DoubleList(properties);
            };

            /**
             * Encodes the specified DoubleList message. Does not implicitly {@link ubii.dataStructure.DoubleList.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.DoubleList
             * @static
             * @param {ubii.dataStructure.IDoubleList} message DoubleList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.elements.length; ++i)
                        writer.double(message.elements[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified DoubleList message, length delimited. Does not implicitly {@link ubii.dataStructure.DoubleList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.DoubleList
             * @static
             * @param {ubii.dataStructure.IDoubleList} message DoubleList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DoubleList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.DoubleList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.DoubleList} DoubleList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.DoubleList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.elements.push(reader.double());
                        } else
                            message.elements.push(reader.double());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DoubleList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.DoubleList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.DoubleList} DoubleList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DoubleList message.
             * @function verify
             * @memberof ubii.dataStructure.DoubleList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DoubleList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i)
                        if (typeof message.elements[i] !== "number")
                            return "elements: number[] expected";
                }
                return null;
            };

            /**
             * Creates a DoubleList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.DoubleList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.DoubleList} DoubleList
             */
            DoubleList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.DoubleList)
                    return object;
                var message = new $root.ubii.dataStructure.DoubleList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.dataStructure.DoubleList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i)
                        message.elements[i] = Number(object.elements[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a DoubleList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.DoubleList
             * @static
             * @param {ubii.dataStructure.DoubleList} message DoubleList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DoubleList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = options.json && !isFinite(message.elements[j]) ? String(message.elements[j]) : message.elements[j];
                }
                return object;
            };

            /**
             * Converts this DoubleList to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.DoubleList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DoubleList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return DoubleList;
        })();

        dataStructure.FloatList = (function() {

            /**
             * Properties of a FloatList.
             * @memberof ubii.dataStructure
             * @interface IFloatList
             * @property {Array.<number>|null} [elements] FloatList elements
             */

            /**
             * Constructs a new FloatList.
             * @memberof ubii.dataStructure
             * @classdesc Represents a FloatList.
             * @implements IFloatList
             * @constructor
             * @param {ubii.dataStructure.IFloatList=} [properties] Properties to set
             */
            function FloatList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FloatList elements.
             * @member {Array.<number>} elements
             * @memberof ubii.dataStructure.FloatList
             * @instance
             */
            FloatList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new FloatList instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.FloatList
             * @static
             * @param {ubii.dataStructure.IFloatList=} [properties] Properties to set
             * @returns {ubii.dataStructure.FloatList} FloatList instance
             */
            FloatList.create = function create(properties) {
                return new FloatList(properties);
            };

            /**
             * Encodes the specified FloatList message. Does not implicitly {@link ubii.dataStructure.FloatList.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.FloatList
             * @static
             * @param {ubii.dataStructure.IFloatList} message FloatList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.elements.length; ++i)
                        writer.float(message.elements[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified FloatList message, length delimited. Does not implicitly {@link ubii.dataStructure.FloatList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.FloatList
             * @static
             * @param {ubii.dataStructure.IFloatList} message FloatList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FloatList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.FloatList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.FloatList} FloatList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.FloatList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.elements.push(reader.float());
                        } else
                            message.elements.push(reader.float());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FloatList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.FloatList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.FloatList} FloatList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FloatList message.
             * @function verify
             * @memberof ubii.dataStructure.FloatList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FloatList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i)
                        if (typeof message.elements[i] !== "number")
                            return "elements: number[] expected";
                }
                return null;
            };

            /**
             * Creates a FloatList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.FloatList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.FloatList} FloatList
             */
            FloatList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.FloatList)
                    return object;
                var message = new $root.ubii.dataStructure.FloatList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.dataStructure.FloatList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i)
                        message.elements[i] = Number(object.elements[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a FloatList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.FloatList
             * @static
             * @param {ubii.dataStructure.FloatList} message FloatList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FloatList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = options.json && !isFinite(message.elements[j]) ? String(message.elements[j]) : message.elements[j];
                }
                return object;
            };

            /**
             * Converts this FloatList to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.FloatList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FloatList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return FloatList;
        })();

        dataStructure.BoolList = (function() {

            /**
             * Properties of a BoolList.
             * @memberof ubii.dataStructure
             * @interface IBoolList
             * @property {Array.<boolean>|null} [elements] BoolList elements
             */

            /**
             * Constructs a new BoolList.
             * @memberof ubii.dataStructure
             * @classdesc Represents a BoolList.
             * @implements IBoolList
             * @constructor
             * @param {ubii.dataStructure.IBoolList=} [properties] Properties to set
             */
            function BoolList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BoolList elements.
             * @member {Array.<boolean>} elements
             * @memberof ubii.dataStructure.BoolList
             * @instance
             */
            BoolList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new BoolList instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.BoolList
             * @static
             * @param {ubii.dataStructure.IBoolList=} [properties] Properties to set
             * @returns {ubii.dataStructure.BoolList} BoolList instance
             */
            BoolList.create = function create(properties) {
                return new BoolList(properties);
            };

            /**
             * Encodes the specified BoolList message. Does not implicitly {@link ubii.dataStructure.BoolList.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.BoolList
             * @static
             * @param {ubii.dataStructure.IBoolList} message BoolList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.elements.length; ++i)
                        writer.bool(message.elements[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified BoolList message, length delimited. Does not implicitly {@link ubii.dataStructure.BoolList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.BoolList
             * @static
             * @param {ubii.dataStructure.IBoolList} message BoolList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BoolList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.BoolList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.BoolList} BoolList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.BoolList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.elements.push(reader.bool());
                        } else
                            message.elements.push(reader.bool());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BoolList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.BoolList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.BoolList} BoolList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BoolList message.
             * @function verify
             * @memberof ubii.dataStructure.BoolList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BoolList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i)
                        if (typeof message.elements[i] !== "boolean")
                            return "elements: boolean[] expected";
                }
                return null;
            };

            /**
             * Creates a BoolList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.BoolList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.BoolList} BoolList
             */
            BoolList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.BoolList)
                    return object;
                var message = new $root.ubii.dataStructure.BoolList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.dataStructure.BoolList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i)
                        message.elements[i] = Boolean(object.elements[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a BoolList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.BoolList
             * @static
             * @param {ubii.dataStructure.BoolList} message BoolList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BoolList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = message.elements[j];
                }
                return object;
            };

            /**
             * Converts this BoolList to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.BoolList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BoolList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return BoolList;
        })();

        dataStructure.Int32List = (function() {

            /**
             * Properties of an Int32List.
             * @memberof ubii.dataStructure
             * @interface IInt32List
             * @property {Array.<number>|null} [elements] Int32List elements
             */

            /**
             * Constructs a new Int32List.
             * @memberof ubii.dataStructure
             * @classdesc Represents an Int32List.
             * @implements IInt32List
             * @constructor
             * @param {ubii.dataStructure.IInt32List=} [properties] Properties to set
             */
            function Int32List(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int32List elements.
             * @member {Array.<number>} elements
             * @memberof ubii.dataStructure.Int32List
             * @instance
             */
            Int32List.prototype.elements = $util.emptyArray;

            /**
             * Creates a new Int32List instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Int32List
             * @static
             * @param {ubii.dataStructure.IInt32List=} [properties] Properties to set
             * @returns {ubii.dataStructure.Int32List} Int32List instance
             */
            Int32List.create = function create(properties) {
                return new Int32List(properties);
            };

            /**
             * Encodes the specified Int32List message. Does not implicitly {@link ubii.dataStructure.Int32List.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Int32List
             * @static
             * @param {ubii.dataStructure.IInt32List} message Int32List message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32List.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.elements.length; ++i)
                        writer.int32(message.elements[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified Int32List message, length delimited. Does not implicitly {@link ubii.dataStructure.Int32List.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Int32List
             * @static
             * @param {ubii.dataStructure.IInt32List} message Int32List message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32List.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int32List message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Int32List
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Int32List} Int32List
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32List.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Int32List();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.elements.push(reader.int32());
                        } else
                            message.elements.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Int32List message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Int32List
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Int32List} Int32List
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32List.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int32List message.
             * @function verify
             * @memberof ubii.dataStructure.Int32List
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int32List.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i)
                        if (!$util.isInteger(message.elements[i]))
                            return "elements: integer[] expected";
                }
                return null;
            };

            /**
             * Creates an Int32List message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Int32List
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Int32List} Int32List
             */
            Int32List.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Int32List)
                    return object;
                var message = new $root.ubii.dataStructure.Int32List();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.dataStructure.Int32List.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i)
                        message.elements[i] = object.elements[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from an Int32List message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Int32List
             * @static
             * @param {ubii.dataStructure.Int32List} message Int32List
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int32List.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = message.elements[j];
                }
                return object;
            };

            /**
             * Converts this Int32List to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Int32List
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int32List.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Int32List;
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

        dataStructure.MouseEvent = (function() {

            /**
             * Properties of a MouseEvent.
             * @memberof ubii.dataStructure
             * @interface IMouseEvent
             * @property {ubii.dataStructure.ButtonEventType|null} [type] MouseEvent type
             * @property {number|null} [button] MouseEvent button
             */

            /**
             * Constructs a new MouseEvent.
             * @memberof ubii.dataStructure
             * @classdesc Represents a MouseEvent.
             * @implements IMouseEvent
             * @constructor
             * @param {ubii.dataStructure.IMouseEvent=} [properties] Properties to set
             */
            function MouseEvent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MouseEvent type.
             * @member {ubii.dataStructure.ButtonEventType} type
             * @memberof ubii.dataStructure.MouseEvent
             * @instance
             */
            MouseEvent.prototype.type = 0;

            /**
             * MouseEvent button.
             * @member {number} button
             * @memberof ubii.dataStructure.MouseEvent
             * @instance
             */
            MouseEvent.prototype.button = 0;

            /**
             * Creates a new MouseEvent instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.MouseEvent
             * @static
             * @param {ubii.dataStructure.IMouseEvent=} [properties] Properties to set
             * @returns {ubii.dataStructure.MouseEvent} MouseEvent instance
             */
            MouseEvent.create = function create(properties) {
                return new MouseEvent(properties);
            };

            /**
             * Encodes the specified MouseEvent message. Does not implicitly {@link ubii.dataStructure.MouseEvent.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.MouseEvent
             * @static
             * @param {ubii.dataStructure.IMouseEvent} message MouseEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MouseEvent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.button != null && message.hasOwnProperty("button"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.button);
                return writer;
            };

            /**
             * Encodes the specified MouseEvent message, length delimited. Does not implicitly {@link ubii.dataStructure.MouseEvent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.MouseEvent
             * @static
             * @param {ubii.dataStructure.IMouseEvent} message MouseEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MouseEvent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MouseEvent message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.MouseEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.MouseEvent} MouseEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MouseEvent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.MouseEvent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        message.button = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MouseEvent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.MouseEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.MouseEvent} MouseEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MouseEvent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MouseEvent message.
             * @function verify
             * @memberof ubii.dataStructure.MouseEvent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MouseEvent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.button != null && message.hasOwnProperty("button"))
                    if (!$util.isInteger(message.button))
                        return "button: integer expected";
                return null;
            };

            /**
             * Creates a MouseEvent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.MouseEvent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.MouseEvent} MouseEvent
             */
            MouseEvent.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.MouseEvent)
                    return object;
                var message = new $root.ubii.dataStructure.MouseEvent();
                switch (object.type) {
                case "UP":
                case 0:
                    message.type = 0;
                    break;
                case "DOWN":
                case 1:
                    message.type = 1;
                    break;
                }
                if (object.button != null)
                    message.button = object.button | 0;
                return message;
            };

            /**
             * Creates a plain object from a MouseEvent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.MouseEvent
             * @static
             * @param {ubii.dataStructure.MouseEvent} message MouseEvent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MouseEvent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = options.enums === String ? "UP" : 0;
                    object.button = 0;
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.ubii.dataStructure.ButtonEventType[message.type] : message.type;
                if (message.button != null && message.hasOwnProperty("button"))
                    object.button = message.button;
                return object;
            };

            /**
             * Converts this MouseEvent to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.MouseEvent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MouseEvent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MouseEvent;
        })();

        dataStructure.MyoEvent = (function() {

            /**
             * Properties of a MyoEvent.
             * @memberof ubii.dataStructure
             * @interface IMyoEvent
             * @property {ubii.dataStructure.IVector8|null} [emg] MyoEvent emg
             * @property {ubii.dataStructure.IQuaternion|null} [orientation] MyoEvent orientation
             * @property {ubii.dataStructure.IVector3|null} [gyroscope] MyoEvent gyroscope
             * @property {ubii.dataStructure.IVector3|null} [accelerometer] MyoEvent accelerometer
             * @property {ubii.dataStructure.HandGestureType|null} [gesture] MyoEvent gesture
             */

            /**
             * Constructs a new MyoEvent.
             * @memberof ubii.dataStructure
             * @classdesc Represents a MyoEvent.
             * @implements IMyoEvent
             * @constructor
             * @param {ubii.dataStructure.IMyoEvent=} [properties] Properties to set
             */
            function MyoEvent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MyoEvent emg.
             * @member {ubii.dataStructure.IVector8|null|undefined} emg
             * @memberof ubii.dataStructure.MyoEvent
             * @instance
             */
            MyoEvent.prototype.emg = null;

            /**
             * MyoEvent orientation.
             * @member {ubii.dataStructure.IQuaternion|null|undefined} orientation
             * @memberof ubii.dataStructure.MyoEvent
             * @instance
             */
            MyoEvent.prototype.orientation = null;

            /**
             * MyoEvent gyroscope.
             * @member {ubii.dataStructure.IVector3|null|undefined} gyroscope
             * @memberof ubii.dataStructure.MyoEvent
             * @instance
             */
            MyoEvent.prototype.gyroscope = null;

            /**
             * MyoEvent accelerometer.
             * @member {ubii.dataStructure.IVector3|null|undefined} accelerometer
             * @memberof ubii.dataStructure.MyoEvent
             * @instance
             */
            MyoEvent.prototype.accelerometer = null;

            /**
             * MyoEvent gesture.
             * @member {ubii.dataStructure.HandGestureType} gesture
             * @memberof ubii.dataStructure.MyoEvent
             * @instance
             */
            MyoEvent.prototype.gesture = 0;

            /**
             * Creates a new MyoEvent instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.MyoEvent
             * @static
             * @param {ubii.dataStructure.IMyoEvent=} [properties] Properties to set
             * @returns {ubii.dataStructure.MyoEvent} MyoEvent instance
             */
            MyoEvent.create = function create(properties) {
                return new MyoEvent(properties);
            };

            /**
             * Encodes the specified MyoEvent message. Does not implicitly {@link ubii.dataStructure.MyoEvent.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.MyoEvent
             * @static
             * @param {ubii.dataStructure.IMyoEvent} message MyoEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MyoEvent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.emg != null && message.hasOwnProperty("emg"))
                    $root.ubii.dataStructure.Vector8.encode(message.emg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.orientation != null && message.hasOwnProperty("orientation"))
                    $root.ubii.dataStructure.Quaternion.encode(message.orientation, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.gyroscope != null && message.hasOwnProperty("gyroscope"))
                    $root.ubii.dataStructure.Vector3.encode(message.gyroscope, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.accelerometer != null && message.hasOwnProperty("accelerometer"))
                    $root.ubii.dataStructure.Vector3.encode(message.accelerometer, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.gesture != null && message.hasOwnProperty("gesture"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.gesture);
                return writer;
            };

            /**
             * Encodes the specified MyoEvent message, length delimited. Does not implicitly {@link ubii.dataStructure.MyoEvent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.MyoEvent
             * @static
             * @param {ubii.dataStructure.IMyoEvent} message MyoEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MyoEvent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MyoEvent message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.MyoEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.MyoEvent} MyoEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MyoEvent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.MyoEvent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.emg = $root.ubii.dataStructure.Vector8.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.orientation = $root.ubii.dataStructure.Quaternion.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.gyroscope = $root.ubii.dataStructure.Vector3.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.accelerometer = $root.ubii.dataStructure.Vector3.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.gesture = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MyoEvent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.MyoEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.MyoEvent} MyoEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MyoEvent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MyoEvent message.
             * @function verify
             * @memberof ubii.dataStructure.MyoEvent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MyoEvent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.emg != null && message.hasOwnProperty("emg")) {
                    var error = $root.ubii.dataStructure.Vector8.verify(message.emg);
                    if (error)
                        return "emg." + error;
                }
                if (message.orientation != null && message.hasOwnProperty("orientation")) {
                    var error = $root.ubii.dataStructure.Quaternion.verify(message.orientation);
                    if (error)
                        return "orientation." + error;
                }
                if (message.gyroscope != null && message.hasOwnProperty("gyroscope")) {
                    var error = $root.ubii.dataStructure.Vector3.verify(message.gyroscope);
                    if (error)
                        return "gyroscope." + error;
                }
                if (message.accelerometer != null && message.hasOwnProperty("accelerometer")) {
                    var error = $root.ubii.dataStructure.Vector3.verify(message.accelerometer);
                    if (error)
                        return "accelerometer." + error;
                }
                if (message.gesture != null && message.hasOwnProperty("gesture"))
                    switch (message.gesture) {
                    default:
                        return "gesture: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
                return null;
            };

            /**
             * Creates a MyoEvent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.MyoEvent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.MyoEvent} MyoEvent
             */
            MyoEvent.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.MyoEvent)
                    return object;
                var message = new $root.ubii.dataStructure.MyoEvent();
                if (object.emg != null) {
                    if (typeof object.emg !== "object")
                        throw TypeError(".ubii.dataStructure.MyoEvent.emg: object expected");
                    message.emg = $root.ubii.dataStructure.Vector8.fromObject(object.emg);
                }
                if (object.orientation != null) {
                    if (typeof object.orientation !== "object")
                        throw TypeError(".ubii.dataStructure.MyoEvent.orientation: object expected");
                    message.orientation = $root.ubii.dataStructure.Quaternion.fromObject(object.orientation);
                }
                if (object.gyroscope != null) {
                    if (typeof object.gyroscope !== "object")
                        throw TypeError(".ubii.dataStructure.MyoEvent.gyroscope: object expected");
                    message.gyroscope = $root.ubii.dataStructure.Vector3.fromObject(object.gyroscope);
                }
                if (object.accelerometer != null) {
                    if (typeof object.accelerometer !== "object")
                        throw TypeError(".ubii.dataStructure.MyoEvent.accelerometer: object expected");
                    message.accelerometer = $root.ubii.dataStructure.Vector3.fromObject(object.accelerometer);
                }
                switch (object.gesture) {
                case "REST":
                case 0:
                    message.gesture = 0;
                    break;
                case "FINGERS_SPREAD":
                case 1:
                    message.gesture = 1;
                    break;
                case "WAVE_IN":
                case 2:
                    message.gesture = 2;
                    break;
                case "WAVE_OUT":
                case 3:
                    message.gesture = 3;
                    break;
                case "FIST":
                case 4:
                    message.gesture = 4;
                    break;
                case "DOUBLE_TAP":
                case 5:
                    message.gesture = 5;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a MyoEvent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.MyoEvent
             * @static
             * @param {ubii.dataStructure.MyoEvent} message MyoEvent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MyoEvent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.emg = null;
                    object.orientation = null;
                    object.gyroscope = null;
                    object.accelerometer = null;
                    object.gesture = options.enums === String ? "REST" : 0;
                }
                if (message.emg != null && message.hasOwnProperty("emg"))
                    object.emg = $root.ubii.dataStructure.Vector8.toObject(message.emg, options);
                if (message.orientation != null && message.hasOwnProperty("orientation"))
                    object.orientation = $root.ubii.dataStructure.Quaternion.toObject(message.orientation, options);
                if (message.gyroscope != null && message.hasOwnProperty("gyroscope"))
                    object.gyroscope = $root.ubii.dataStructure.Vector3.toObject(message.gyroscope, options);
                if (message.accelerometer != null && message.hasOwnProperty("accelerometer"))
                    object.accelerometer = $root.ubii.dataStructure.Vector3.toObject(message.accelerometer, options);
                if (message.gesture != null && message.hasOwnProperty("gesture"))
                    object.gesture = options.enums === String ? $root.ubii.dataStructure.HandGestureType[message.gesture] : message.gesture;
                return object;
            };

            /**
             * Converts this MyoEvent to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.MyoEvent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MyoEvent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MyoEvent;
        })();

        dataStructure.Object2D = (function() {

            /**
             * Properties of an Object2D.
             * @memberof ubii.dataStructure
             * @interface IObject2D
             * @property {string|null} [id] Object2D id
             * @property {ubii.dataStructure.IPose2D|null} [pose] Object2D pose
             * @property {ubii.dataStructure.IVector2|null} [size] Object2D size
             * @property {string|null} [userDataJson] Object2D userDataJson
             */

            /**
             * Constructs a new Object2D.
             * @memberof ubii.dataStructure
             * @classdesc Represents an Object2D.
             * @implements IObject2D
             * @constructor
             * @param {ubii.dataStructure.IObject2D=} [properties] Properties to set
             */
            function Object2D(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Object2D id.
             * @member {string} id
             * @memberof ubii.dataStructure.Object2D
             * @instance
             */
            Object2D.prototype.id = "";

            /**
             * Object2D pose.
             * @member {ubii.dataStructure.IPose2D|null|undefined} pose
             * @memberof ubii.dataStructure.Object2D
             * @instance
             */
            Object2D.prototype.pose = null;

            /**
             * Object2D size.
             * @member {ubii.dataStructure.IVector2|null|undefined} size
             * @memberof ubii.dataStructure.Object2D
             * @instance
             */
            Object2D.prototype.size = null;

            /**
             * Object2D userDataJson.
             * @member {string} userDataJson
             * @memberof ubii.dataStructure.Object2D
             * @instance
             */
            Object2D.prototype.userDataJson = "";

            /**
             * Creates a new Object2D instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Object2D
             * @static
             * @param {ubii.dataStructure.IObject2D=} [properties] Properties to set
             * @returns {ubii.dataStructure.Object2D} Object2D instance
             */
            Object2D.create = function create(properties) {
                return new Object2D(properties);
            };

            /**
             * Encodes the specified Object2D message. Does not implicitly {@link ubii.dataStructure.Object2D.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Object2D
             * @static
             * @param {ubii.dataStructure.IObject2D} message Object2D message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Object2D.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.pose != null && message.hasOwnProperty("pose"))
                    $root.ubii.dataStructure.Pose2D.encode(message.pose, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.size != null && message.hasOwnProperty("size"))
                    $root.ubii.dataStructure.Vector2.encode(message.size, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.userDataJson != null && message.hasOwnProperty("userDataJson"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.userDataJson);
                return writer;
            };

            /**
             * Encodes the specified Object2D message, length delimited. Does not implicitly {@link ubii.dataStructure.Object2D.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Object2D
             * @static
             * @param {ubii.dataStructure.IObject2D} message Object2D message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Object2D.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Object2D message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Object2D
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Object2D} Object2D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Object2D.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Object2D();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.pose = $root.ubii.dataStructure.Pose2D.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.size = $root.ubii.dataStructure.Vector2.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.userDataJson = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Object2D message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Object2D
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Object2D} Object2D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Object2D.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Object2D message.
             * @function verify
             * @memberof ubii.dataStructure.Object2D
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Object2D.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.pose != null && message.hasOwnProperty("pose")) {
                    var error = $root.ubii.dataStructure.Pose2D.verify(message.pose);
                    if (error)
                        return "pose." + error;
                }
                if (message.size != null && message.hasOwnProperty("size")) {
                    var error = $root.ubii.dataStructure.Vector2.verify(message.size);
                    if (error)
                        return "size." + error;
                }
                if (message.userDataJson != null && message.hasOwnProperty("userDataJson"))
                    if (!$util.isString(message.userDataJson))
                        return "userDataJson: string expected";
                return null;
            };

            /**
             * Creates an Object2D message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Object2D
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Object2D} Object2D
             */
            Object2D.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Object2D)
                    return object;
                var message = new $root.ubii.dataStructure.Object2D();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.pose != null) {
                    if (typeof object.pose !== "object")
                        throw TypeError(".ubii.dataStructure.Object2D.pose: object expected");
                    message.pose = $root.ubii.dataStructure.Pose2D.fromObject(object.pose);
                }
                if (object.size != null) {
                    if (typeof object.size !== "object")
                        throw TypeError(".ubii.dataStructure.Object2D.size: object expected");
                    message.size = $root.ubii.dataStructure.Vector2.fromObject(object.size);
                }
                if (object.userDataJson != null)
                    message.userDataJson = String(object.userDataJson);
                return message;
            };

            /**
             * Creates a plain object from an Object2D message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Object2D
             * @static
             * @param {ubii.dataStructure.Object2D} message Object2D
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Object2D.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.pose = null;
                    object.size = null;
                    object.userDataJson = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.pose != null && message.hasOwnProperty("pose"))
                    object.pose = $root.ubii.dataStructure.Pose2D.toObject(message.pose, options);
                if (message.size != null && message.hasOwnProperty("size"))
                    object.size = $root.ubii.dataStructure.Vector2.toObject(message.size, options);
                if (message.userDataJson != null && message.hasOwnProperty("userDataJson"))
                    object.userDataJson = message.userDataJson;
                return object;
            };

            /**
             * Converts this Object2D to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Object2D
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Object2D.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Object2D;
        })();

        dataStructure.Object2DList = (function() {

            /**
             * Properties of an Object2DList.
             * @memberof ubii.dataStructure
             * @interface IObject2DList
             * @property {Array.<ubii.dataStructure.IObject2D>|null} [elements] Object2DList elements
             */

            /**
             * Constructs a new Object2DList.
             * @memberof ubii.dataStructure
             * @classdesc Represents an Object2DList.
             * @implements IObject2DList
             * @constructor
             * @param {ubii.dataStructure.IObject2DList=} [properties] Properties to set
             */
            function Object2DList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Object2DList elements.
             * @member {Array.<ubii.dataStructure.IObject2D>} elements
             * @memberof ubii.dataStructure.Object2DList
             * @instance
             */
            Object2DList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new Object2DList instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Object2DList
             * @static
             * @param {ubii.dataStructure.IObject2DList=} [properties] Properties to set
             * @returns {ubii.dataStructure.Object2DList} Object2DList instance
             */
            Object2DList.create = function create(properties) {
                return new Object2DList(properties);
            };

            /**
             * Encodes the specified Object2DList message. Does not implicitly {@link ubii.dataStructure.Object2DList.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Object2DList
             * @static
             * @param {ubii.dataStructure.IObject2DList} message Object2DList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Object2DList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.dataStructure.Object2D.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Object2DList message, length delimited. Does not implicitly {@link ubii.dataStructure.Object2DList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Object2DList
             * @static
             * @param {ubii.dataStructure.IObject2DList} message Object2DList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Object2DList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Object2DList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Object2DList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Object2DList} Object2DList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Object2DList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Object2DList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.dataStructure.Object2D.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Object2DList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Object2DList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Object2DList} Object2DList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Object2DList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Object2DList message.
             * @function verify
             * @memberof ubii.dataStructure.Object2DList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Object2DList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.dataStructure.Object2D.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an Object2DList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Object2DList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Object2DList} Object2DList
             */
            Object2DList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Object2DList)
                    return object;
                var message = new $root.ubii.dataStructure.Object2DList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.dataStructure.Object2DList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.dataStructure.Object2DList.elements: object expected");
                        message.elements[i] = $root.ubii.dataStructure.Object2D.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an Object2DList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Object2DList
             * @static
             * @param {ubii.dataStructure.Object2DList} message Object2DList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Object2DList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.dataStructure.Object2D.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this Object2DList to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Object2DList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Object2DList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Object2DList;
        })();

        dataStructure.Object3D = (function() {

            /**
             * Properties of an Object3D.
             * @memberof ubii.dataStructure
             * @interface IObject3D
             * @property {string|null} [id] Object3D id
             * @property {ubii.dataStructure.IPose3D|null} [pose] Object3D pose
             * @property {ubii.dataStructure.IVector3|null} [size] Object3D size
             * @property {string|null} [userDataJson] Object3D userDataJson
             */

            /**
             * Constructs a new Object3D.
             * @memberof ubii.dataStructure
             * @classdesc Represents an Object3D.
             * @implements IObject3D
             * @constructor
             * @param {ubii.dataStructure.IObject3D=} [properties] Properties to set
             */
            function Object3D(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Object3D id.
             * @member {string} id
             * @memberof ubii.dataStructure.Object3D
             * @instance
             */
            Object3D.prototype.id = "";

            /**
             * Object3D pose.
             * @member {ubii.dataStructure.IPose3D|null|undefined} pose
             * @memberof ubii.dataStructure.Object3D
             * @instance
             */
            Object3D.prototype.pose = null;

            /**
             * Object3D size.
             * @member {ubii.dataStructure.IVector3|null|undefined} size
             * @memberof ubii.dataStructure.Object3D
             * @instance
             */
            Object3D.prototype.size = null;

            /**
             * Object3D userDataJson.
             * @member {string} userDataJson
             * @memberof ubii.dataStructure.Object3D
             * @instance
             */
            Object3D.prototype.userDataJson = "";

            /**
             * Creates a new Object3D instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Object3D
             * @static
             * @param {ubii.dataStructure.IObject3D=} [properties] Properties to set
             * @returns {ubii.dataStructure.Object3D} Object3D instance
             */
            Object3D.create = function create(properties) {
                return new Object3D(properties);
            };

            /**
             * Encodes the specified Object3D message. Does not implicitly {@link ubii.dataStructure.Object3D.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Object3D
             * @static
             * @param {ubii.dataStructure.IObject3D} message Object3D message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Object3D.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.pose != null && message.hasOwnProperty("pose"))
                    $root.ubii.dataStructure.Pose3D.encode(message.pose, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.size != null && message.hasOwnProperty("size"))
                    $root.ubii.dataStructure.Vector3.encode(message.size, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.userDataJson != null && message.hasOwnProperty("userDataJson"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.userDataJson);
                return writer;
            };

            /**
             * Encodes the specified Object3D message, length delimited. Does not implicitly {@link ubii.dataStructure.Object3D.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Object3D
             * @static
             * @param {ubii.dataStructure.IObject3D} message Object3D message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Object3D.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Object3D message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Object3D
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Object3D} Object3D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Object3D.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Object3D();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.string();
                        break;
                    case 2:
                        message.pose = $root.ubii.dataStructure.Pose3D.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.size = $root.ubii.dataStructure.Vector3.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.userDataJson = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Object3D message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Object3D
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Object3D} Object3D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Object3D.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Object3D message.
             * @function verify
             * @memberof ubii.dataStructure.Object3D
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Object3D.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.pose != null && message.hasOwnProperty("pose")) {
                    var error = $root.ubii.dataStructure.Pose3D.verify(message.pose);
                    if (error)
                        return "pose." + error;
                }
                if (message.size != null && message.hasOwnProperty("size")) {
                    var error = $root.ubii.dataStructure.Vector3.verify(message.size);
                    if (error)
                        return "size." + error;
                }
                if (message.userDataJson != null && message.hasOwnProperty("userDataJson"))
                    if (!$util.isString(message.userDataJson))
                        return "userDataJson: string expected";
                return null;
            };

            /**
             * Creates an Object3D message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Object3D
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Object3D} Object3D
             */
            Object3D.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Object3D)
                    return object;
                var message = new $root.ubii.dataStructure.Object3D();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.pose != null) {
                    if (typeof object.pose !== "object")
                        throw TypeError(".ubii.dataStructure.Object3D.pose: object expected");
                    message.pose = $root.ubii.dataStructure.Pose3D.fromObject(object.pose);
                }
                if (object.size != null) {
                    if (typeof object.size !== "object")
                        throw TypeError(".ubii.dataStructure.Object3D.size: object expected");
                    message.size = $root.ubii.dataStructure.Vector3.fromObject(object.size);
                }
                if (object.userDataJson != null)
                    message.userDataJson = String(object.userDataJson);
                return message;
            };

            /**
             * Creates a plain object from an Object3D message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Object3D
             * @static
             * @param {ubii.dataStructure.Object3D} message Object3D
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Object3D.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.pose = null;
                    object.size = null;
                    object.userDataJson = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.pose != null && message.hasOwnProperty("pose"))
                    object.pose = $root.ubii.dataStructure.Pose3D.toObject(message.pose, options);
                if (message.size != null && message.hasOwnProperty("size"))
                    object.size = $root.ubii.dataStructure.Vector3.toObject(message.size, options);
                if (message.userDataJson != null && message.hasOwnProperty("userDataJson"))
                    object.userDataJson = message.userDataJson;
                return object;
            };

            /**
             * Converts this Object3D to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Object3D
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Object3D.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Object3D;
        })();

        dataStructure.Object3DList = (function() {

            /**
             * Properties of an Object3DList.
             * @memberof ubii.dataStructure
             * @interface IObject3DList
             * @property {Array.<ubii.dataStructure.IObject3D>|null} [elements] Object3DList elements
             */

            /**
             * Constructs a new Object3DList.
             * @memberof ubii.dataStructure
             * @classdesc Represents an Object3DList.
             * @implements IObject3DList
             * @constructor
             * @param {ubii.dataStructure.IObject3DList=} [properties] Properties to set
             */
            function Object3DList(properties) {
                this.elements = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Object3DList elements.
             * @member {Array.<ubii.dataStructure.IObject3D>} elements
             * @memberof ubii.dataStructure.Object3DList
             * @instance
             */
            Object3DList.prototype.elements = $util.emptyArray;

            /**
             * Creates a new Object3DList instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Object3DList
             * @static
             * @param {ubii.dataStructure.IObject3DList=} [properties] Properties to set
             * @returns {ubii.dataStructure.Object3DList} Object3DList instance
             */
            Object3DList.create = function create(properties) {
                return new Object3DList(properties);
            };

            /**
             * Encodes the specified Object3DList message. Does not implicitly {@link ubii.dataStructure.Object3DList.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Object3DList
             * @static
             * @param {ubii.dataStructure.IObject3DList} message Object3DList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Object3DList.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.elements != null && message.elements.length)
                    for (var i = 0; i < message.elements.length; ++i)
                        $root.ubii.dataStructure.Object3D.encode(message.elements[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Object3DList message, length delimited. Does not implicitly {@link ubii.dataStructure.Object3DList.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Object3DList
             * @static
             * @param {ubii.dataStructure.IObject3DList} message Object3DList message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Object3DList.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Object3DList message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Object3DList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Object3DList} Object3DList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Object3DList.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Object3DList();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.elements && message.elements.length))
                            message.elements = [];
                        message.elements.push($root.ubii.dataStructure.Object3D.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Object3DList message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Object3DList
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Object3DList} Object3DList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Object3DList.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Object3DList message.
             * @function verify
             * @memberof ubii.dataStructure.Object3DList
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Object3DList.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.elements != null && message.hasOwnProperty("elements")) {
                    if (!Array.isArray(message.elements))
                        return "elements: array expected";
                    for (var i = 0; i < message.elements.length; ++i) {
                        var error = $root.ubii.dataStructure.Object3D.verify(message.elements[i]);
                        if (error)
                            return "elements." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an Object3DList message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Object3DList
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Object3DList} Object3DList
             */
            Object3DList.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Object3DList)
                    return object;
                var message = new $root.ubii.dataStructure.Object3DList();
                if (object.elements) {
                    if (!Array.isArray(object.elements))
                        throw TypeError(".ubii.dataStructure.Object3DList.elements: array expected");
                    message.elements = [];
                    for (var i = 0; i < object.elements.length; ++i) {
                        if (typeof object.elements[i] !== "object")
                            throw TypeError(".ubii.dataStructure.Object3DList.elements: object expected");
                        message.elements[i] = $root.ubii.dataStructure.Object3D.fromObject(object.elements[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an Object3DList message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Object3DList
             * @static
             * @param {ubii.dataStructure.Object3DList} message Object3DList
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Object3DList.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.elements = [];
                if (message.elements && message.elements.length) {
                    object.elements = [];
                    for (var j = 0; j < message.elements.length; ++j)
                        object.elements[j] = $root.ubii.dataStructure.Object3D.toObject(message.elements[j], options);
                }
                return object;
            };

            /**
             * Converts this Object3DList to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Object3DList
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Object3DList.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Object3DList;
        })();

        dataStructure.Pose2D = (function() {

            /**
             * Properties of a Pose2D.
             * @memberof ubii.dataStructure
             * @interface IPose2D
             * @property {ubii.dataStructure.IVector2|null} [position] Pose2D position
             * @property {ubii.dataStructure.IVector2|null} [direction] Pose2D direction
             * @property {number|null} [angle] Pose2D angle
             */

            /**
             * Constructs a new Pose2D.
             * @memberof ubii.dataStructure
             * @classdesc Represents a Pose2D.
             * @implements IPose2D
             * @constructor
             * @param {ubii.dataStructure.IPose2D=} [properties] Properties to set
             */
            function Pose2D(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Pose2D position.
             * @member {ubii.dataStructure.IVector2|null|undefined} position
             * @memberof ubii.dataStructure.Pose2D
             * @instance
             */
            Pose2D.prototype.position = null;

            /**
             * Pose2D direction.
             * @member {ubii.dataStructure.IVector2|null|undefined} direction
             * @memberof ubii.dataStructure.Pose2D
             * @instance
             */
            Pose2D.prototype.direction = null;

            /**
             * Pose2D angle.
             * @member {number} angle
             * @memberof ubii.dataStructure.Pose2D
             * @instance
             */
            Pose2D.prototype.angle = 0;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * Pose2D orientation.
             * @member {"direction"|"angle"|undefined} orientation
             * @memberof ubii.dataStructure.Pose2D
             * @instance
             */
            Object.defineProperty(Pose2D.prototype, "orientation", {
                get: $util.oneOfGetter($oneOfFields = ["direction", "angle"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Pose2D instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Pose2D
             * @static
             * @param {ubii.dataStructure.IPose2D=} [properties] Properties to set
             * @returns {ubii.dataStructure.Pose2D} Pose2D instance
             */
            Pose2D.create = function create(properties) {
                return new Pose2D(properties);
            };

            /**
             * Encodes the specified Pose2D message. Does not implicitly {@link ubii.dataStructure.Pose2D.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Pose2D
             * @static
             * @param {ubii.dataStructure.IPose2D} message Pose2D message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pose2D.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.position != null && message.hasOwnProperty("position"))
                    $root.ubii.dataStructure.Vector2.encode(message.position, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.direction != null && message.hasOwnProperty("direction"))
                    $root.ubii.dataStructure.Vector2.encode(message.direction, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.angle != null && message.hasOwnProperty("angle"))
                    writer.uint32(/* id 3, wireType 5 =*/29).float(message.angle);
                return writer;
            };

            /**
             * Encodes the specified Pose2D message, length delimited. Does not implicitly {@link ubii.dataStructure.Pose2D.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Pose2D
             * @static
             * @param {ubii.dataStructure.IPose2D} message Pose2D message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pose2D.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Pose2D message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Pose2D
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Pose2D} Pose2D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pose2D.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Pose2D();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.position = $root.ubii.dataStructure.Vector2.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.direction = $root.ubii.dataStructure.Vector2.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.angle = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Pose2D message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Pose2D
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Pose2D} Pose2D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pose2D.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Pose2D message.
             * @function verify
             * @memberof ubii.dataStructure.Pose2D
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Pose2D.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.position != null && message.hasOwnProperty("position")) {
                    var error = $root.ubii.dataStructure.Vector2.verify(message.position);
                    if (error)
                        return "position." + error;
                }
                if (message.direction != null && message.hasOwnProperty("direction")) {
                    properties.orientation = 1;
                    {
                        var error = $root.ubii.dataStructure.Vector2.verify(message.direction);
                        if (error)
                            return "direction." + error;
                    }
                }
                if (message.angle != null && message.hasOwnProperty("angle")) {
                    if (properties.orientation === 1)
                        return "orientation: multiple values";
                    properties.orientation = 1;
                    if (typeof message.angle !== "number")
                        return "angle: number expected";
                }
                return null;
            };

            /**
             * Creates a Pose2D message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Pose2D
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Pose2D} Pose2D
             */
            Pose2D.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Pose2D)
                    return object;
                var message = new $root.ubii.dataStructure.Pose2D();
                if (object.position != null) {
                    if (typeof object.position !== "object")
                        throw TypeError(".ubii.dataStructure.Pose2D.position: object expected");
                    message.position = $root.ubii.dataStructure.Vector2.fromObject(object.position);
                }
                if (object.direction != null) {
                    if (typeof object.direction !== "object")
                        throw TypeError(".ubii.dataStructure.Pose2D.direction: object expected");
                    message.direction = $root.ubii.dataStructure.Vector2.fromObject(object.direction);
                }
                if (object.angle != null)
                    message.angle = Number(object.angle);
                return message;
            };

            /**
             * Creates a plain object from a Pose2D message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Pose2D
             * @static
             * @param {ubii.dataStructure.Pose2D} message Pose2D
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Pose2D.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.position = null;
                if (message.position != null && message.hasOwnProperty("position"))
                    object.position = $root.ubii.dataStructure.Vector2.toObject(message.position, options);
                if (message.direction != null && message.hasOwnProperty("direction")) {
                    object.direction = $root.ubii.dataStructure.Vector2.toObject(message.direction, options);
                    if (options.oneofs)
                        object.orientation = "direction";
                }
                if (message.angle != null && message.hasOwnProperty("angle")) {
                    object.angle = options.json && !isFinite(message.angle) ? String(message.angle) : message.angle;
                    if (options.oneofs)
                        object.orientation = "angle";
                }
                return object;
            };

            /**
             * Converts this Pose2D to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Pose2D
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Pose2D.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Pose2D;
        })();

        dataStructure.Pose3D = (function() {

            /**
             * Properties of a Pose3D.
             * @memberof ubii.dataStructure
             * @interface IPose3D
             * @property {ubii.dataStructure.IVector3|null} [position] Pose3D position
             * @property {ubii.dataStructure.IQuaternion|null} [quaternion] Pose3D quaternion
             * @property {ubii.dataStructure.IVector3|null} [euler] Pose3D euler
             */

            /**
             * Constructs a new Pose3D.
             * @memberof ubii.dataStructure
             * @classdesc Represents a Pose3D.
             * @implements IPose3D
             * @constructor
             * @param {ubii.dataStructure.IPose3D=} [properties] Properties to set
             */
            function Pose3D(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Pose3D position.
             * @member {ubii.dataStructure.IVector3|null|undefined} position
             * @memberof ubii.dataStructure.Pose3D
             * @instance
             */
            Pose3D.prototype.position = null;

            /**
             * Pose3D quaternion.
             * @member {ubii.dataStructure.IQuaternion|null|undefined} quaternion
             * @memberof ubii.dataStructure.Pose3D
             * @instance
             */
            Pose3D.prototype.quaternion = null;

            /**
             * Pose3D euler.
             * @member {ubii.dataStructure.IVector3|null|undefined} euler
             * @memberof ubii.dataStructure.Pose3D
             * @instance
             */
            Pose3D.prototype.euler = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * Pose3D orientation.
             * @member {"quaternion"|"euler"|undefined} orientation
             * @memberof ubii.dataStructure.Pose3D
             * @instance
             */
            Object.defineProperty(Pose3D.prototype, "orientation", {
                get: $util.oneOfGetter($oneOfFields = ["quaternion", "euler"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Pose3D instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Pose3D
             * @static
             * @param {ubii.dataStructure.IPose3D=} [properties] Properties to set
             * @returns {ubii.dataStructure.Pose3D} Pose3D instance
             */
            Pose3D.create = function create(properties) {
                return new Pose3D(properties);
            };

            /**
             * Encodes the specified Pose3D message. Does not implicitly {@link ubii.dataStructure.Pose3D.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Pose3D
             * @static
             * @param {ubii.dataStructure.IPose3D} message Pose3D message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pose3D.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.position != null && message.hasOwnProperty("position"))
                    $root.ubii.dataStructure.Vector3.encode(message.position, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.quaternion != null && message.hasOwnProperty("quaternion"))
                    $root.ubii.dataStructure.Quaternion.encode(message.quaternion, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.euler != null && message.hasOwnProperty("euler"))
                    $root.ubii.dataStructure.Vector3.encode(message.euler, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Pose3D message, length delimited. Does not implicitly {@link ubii.dataStructure.Pose3D.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Pose3D
             * @static
             * @param {ubii.dataStructure.IPose3D} message Pose3D message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Pose3D.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Pose3D message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Pose3D
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Pose3D} Pose3D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pose3D.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Pose3D();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.position = $root.ubii.dataStructure.Vector3.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.quaternion = $root.ubii.dataStructure.Quaternion.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.euler = $root.ubii.dataStructure.Vector3.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Pose3D message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Pose3D
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Pose3D} Pose3D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Pose3D.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Pose3D message.
             * @function verify
             * @memberof ubii.dataStructure.Pose3D
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Pose3D.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.position != null && message.hasOwnProperty("position")) {
                    var error = $root.ubii.dataStructure.Vector3.verify(message.position);
                    if (error)
                        return "position." + error;
                }
                if (message.quaternion != null && message.hasOwnProperty("quaternion")) {
                    properties.orientation = 1;
                    {
                        var error = $root.ubii.dataStructure.Quaternion.verify(message.quaternion);
                        if (error)
                            return "quaternion." + error;
                    }
                }
                if (message.euler != null && message.hasOwnProperty("euler")) {
                    if (properties.orientation === 1)
                        return "orientation: multiple values";
                    properties.orientation = 1;
                    {
                        var error = $root.ubii.dataStructure.Vector3.verify(message.euler);
                        if (error)
                            return "euler." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Pose3D message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Pose3D
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Pose3D} Pose3D
             */
            Pose3D.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Pose3D)
                    return object;
                var message = new $root.ubii.dataStructure.Pose3D();
                if (object.position != null) {
                    if (typeof object.position !== "object")
                        throw TypeError(".ubii.dataStructure.Pose3D.position: object expected");
                    message.position = $root.ubii.dataStructure.Vector3.fromObject(object.position);
                }
                if (object.quaternion != null) {
                    if (typeof object.quaternion !== "object")
                        throw TypeError(".ubii.dataStructure.Pose3D.quaternion: object expected");
                    message.quaternion = $root.ubii.dataStructure.Quaternion.fromObject(object.quaternion);
                }
                if (object.euler != null) {
                    if (typeof object.euler !== "object")
                        throw TypeError(".ubii.dataStructure.Pose3D.euler: object expected");
                    message.euler = $root.ubii.dataStructure.Vector3.fromObject(object.euler);
                }
                return message;
            };

            /**
             * Creates a plain object from a Pose3D message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Pose3D
             * @static
             * @param {ubii.dataStructure.Pose3D} message Pose3D
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Pose3D.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.position = null;
                if (message.position != null && message.hasOwnProperty("position"))
                    object.position = $root.ubii.dataStructure.Vector3.toObject(message.position, options);
                if (message.quaternion != null && message.hasOwnProperty("quaternion")) {
                    object.quaternion = $root.ubii.dataStructure.Quaternion.toObject(message.quaternion, options);
                    if (options.oneofs)
                        object.orientation = "quaternion";
                }
                if (message.euler != null && message.hasOwnProperty("euler")) {
                    object.euler = $root.ubii.dataStructure.Vector3.toObject(message.euler, options);
                    if (options.oneofs)
                        object.orientation = "euler";
                }
                return object;
            };

            /**
             * Converts this Pose3D to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Pose3D
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Pose3D.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Pose3D;
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

        dataStructure.TouchEvent = (function() {

            /**
             * Properties of a TouchEvent.
             * @memberof ubii.dataStructure
             * @interface ITouchEvent
             * @property {ubii.dataStructure.ButtonEventType|null} [type] TouchEvent type
             * @property {ubii.dataStructure.IVector2|null} [position] TouchEvent position
             */

            /**
             * Constructs a new TouchEvent.
             * @memberof ubii.dataStructure
             * @classdesc Represents a TouchEvent.
             * @implements ITouchEvent
             * @constructor
             * @param {ubii.dataStructure.ITouchEvent=} [properties] Properties to set
             */
            function TouchEvent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TouchEvent type.
             * @member {ubii.dataStructure.ButtonEventType} type
             * @memberof ubii.dataStructure.TouchEvent
             * @instance
             */
            TouchEvent.prototype.type = 0;

            /**
             * TouchEvent position.
             * @member {ubii.dataStructure.IVector2|null|undefined} position
             * @memberof ubii.dataStructure.TouchEvent
             * @instance
             */
            TouchEvent.prototype.position = null;

            /**
             * Creates a new TouchEvent instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.TouchEvent
             * @static
             * @param {ubii.dataStructure.ITouchEvent=} [properties] Properties to set
             * @returns {ubii.dataStructure.TouchEvent} TouchEvent instance
             */
            TouchEvent.create = function create(properties) {
                return new TouchEvent(properties);
            };

            /**
             * Encodes the specified TouchEvent message. Does not implicitly {@link ubii.dataStructure.TouchEvent.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.TouchEvent
             * @static
             * @param {ubii.dataStructure.ITouchEvent} message TouchEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TouchEvent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.position != null && message.hasOwnProperty("position"))
                    $root.ubii.dataStructure.Vector2.encode(message.position, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TouchEvent message, length delimited. Does not implicitly {@link ubii.dataStructure.TouchEvent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.TouchEvent
             * @static
             * @param {ubii.dataStructure.ITouchEvent} message TouchEvent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TouchEvent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TouchEvent message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.TouchEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.TouchEvent} TouchEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TouchEvent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.TouchEvent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        message.position = $root.ubii.dataStructure.Vector2.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TouchEvent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.TouchEvent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.TouchEvent} TouchEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TouchEvent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TouchEvent message.
             * @function verify
             * @memberof ubii.dataStructure.TouchEvent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TouchEvent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                if (message.position != null && message.hasOwnProperty("position")) {
                    var error = $root.ubii.dataStructure.Vector2.verify(message.position);
                    if (error)
                        return "position." + error;
                }
                return null;
            };

            /**
             * Creates a TouchEvent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.TouchEvent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.TouchEvent} TouchEvent
             */
            TouchEvent.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.TouchEvent)
                    return object;
                var message = new $root.ubii.dataStructure.TouchEvent();
                switch (object.type) {
                case "UP":
                case 0:
                    message.type = 0;
                    break;
                case "DOWN":
                case 1:
                    message.type = 1;
                    break;
                }
                if (object.position != null) {
                    if (typeof object.position !== "object")
                        throw TypeError(".ubii.dataStructure.TouchEvent.position: object expected");
                    message.position = $root.ubii.dataStructure.Vector2.fromObject(object.position);
                }
                return message;
            };

            /**
             * Creates a plain object from a TouchEvent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.TouchEvent
             * @static
             * @param {ubii.dataStructure.TouchEvent} message TouchEvent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TouchEvent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = options.enums === String ? "UP" : 0;
                    object.position = null;
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.ubii.dataStructure.ButtonEventType[message.type] : message.type;
                if (message.position != null && message.hasOwnProperty("position"))
                    object.position = $root.ubii.dataStructure.Vector2.toObject(message.position, options);
                return object;
            };

            /**
             * Converts this TouchEvent to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.TouchEvent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TouchEvent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TouchEvent;
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

        dataStructure.Vector8 = (function() {

            /**
             * Properties of a Vector8.
             * @memberof ubii.dataStructure
             * @interface IVector8
             * @property {number|null} [v0] Vector8 v0
             * @property {number|null} [v1] Vector8 v1
             * @property {number|null} [v2] Vector8 v2
             * @property {number|null} [v3] Vector8 v3
             * @property {number|null} [v4] Vector8 v4
             * @property {number|null} [v5] Vector8 v5
             * @property {number|null} [v6] Vector8 v6
             * @property {number|null} [v7] Vector8 v7
             */

            /**
             * Constructs a new Vector8.
             * @memberof ubii.dataStructure
             * @classdesc Represents a Vector8.
             * @implements IVector8
             * @constructor
             * @param {ubii.dataStructure.IVector8=} [properties] Properties to set
             */
            function Vector8(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Vector8 v0.
             * @member {number} v0
             * @memberof ubii.dataStructure.Vector8
             * @instance
             */
            Vector8.prototype.v0 = 0;

            /**
             * Vector8 v1.
             * @member {number} v1
             * @memberof ubii.dataStructure.Vector8
             * @instance
             */
            Vector8.prototype.v1 = 0;

            /**
             * Vector8 v2.
             * @member {number} v2
             * @memberof ubii.dataStructure.Vector8
             * @instance
             */
            Vector8.prototype.v2 = 0;

            /**
             * Vector8 v3.
             * @member {number} v3
             * @memberof ubii.dataStructure.Vector8
             * @instance
             */
            Vector8.prototype.v3 = 0;

            /**
             * Vector8 v4.
             * @member {number} v4
             * @memberof ubii.dataStructure.Vector8
             * @instance
             */
            Vector8.prototype.v4 = 0;

            /**
             * Vector8 v5.
             * @member {number} v5
             * @memberof ubii.dataStructure.Vector8
             * @instance
             */
            Vector8.prototype.v5 = 0;

            /**
             * Vector8 v6.
             * @member {number} v6
             * @memberof ubii.dataStructure.Vector8
             * @instance
             */
            Vector8.prototype.v6 = 0;

            /**
             * Vector8 v7.
             * @member {number} v7
             * @memberof ubii.dataStructure.Vector8
             * @instance
             */
            Vector8.prototype.v7 = 0;

            /**
             * Creates a new Vector8 instance using the specified properties.
             * @function create
             * @memberof ubii.dataStructure.Vector8
             * @static
             * @param {ubii.dataStructure.IVector8=} [properties] Properties to set
             * @returns {ubii.dataStructure.Vector8} Vector8 instance
             */
            Vector8.create = function create(properties) {
                return new Vector8(properties);
            };

            /**
             * Encodes the specified Vector8 message. Does not implicitly {@link ubii.dataStructure.Vector8.verify|verify} messages.
             * @function encode
             * @memberof ubii.dataStructure.Vector8
             * @static
             * @param {ubii.dataStructure.IVector8} message Vector8 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Vector8.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.v0 != null && message.hasOwnProperty("v0"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.v0);
                if (message.v1 != null && message.hasOwnProperty("v1"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.v1);
                if (message.v2 != null && message.hasOwnProperty("v2"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.v2);
                if (message.v3 != null && message.hasOwnProperty("v3"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.v3);
                if (message.v4 != null && message.hasOwnProperty("v4"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.v4);
                if (message.v5 != null && message.hasOwnProperty("v5"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.v5);
                if (message.v6 != null && message.hasOwnProperty("v6"))
                    writer.uint32(/* id 7, wireType 1 =*/57).double(message.v6);
                if (message.v7 != null && message.hasOwnProperty("v7"))
                    writer.uint32(/* id 8, wireType 1 =*/65).double(message.v7);
                return writer;
            };

            /**
             * Encodes the specified Vector8 message, length delimited. Does not implicitly {@link ubii.dataStructure.Vector8.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ubii.dataStructure.Vector8
             * @static
             * @param {ubii.dataStructure.IVector8} message Vector8 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Vector8.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Vector8 message from the specified reader or buffer.
             * @function decode
             * @memberof ubii.dataStructure.Vector8
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ubii.dataStructure.Vector8} Vector8
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Vector8.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ubii.dataStructure.Vector8();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.v0 = reader.double();
                        break;
                    case 2:
                        message.v1 = reader.double();
                        break;
                    case 3:
                        message.v2 = reader.double();
                        break;
                    case 4:
                        message.v3 = reader.double();
                        break;
                    case 5:
                        message.v4 = reader.double();
                        break;
                    case 6:
                        message.v5 = reader.double();
                        break;
                    case 7:
                        message.v6 = reader.double();
                        break;
                    case 8:
                        message.v7 = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Vector8 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ubii.dataStructure.Vector8
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ubii.dataStructure.Vector8} Vector8
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Vector8.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Vector8 message.
             * @function verify
             * @memberof ubii.dataStructure.Vector8
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Vector8.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.v0 != null && message.hasOwnProperty("v0"))
                    if (typeof message.v0 !== "number")
                        return "v0: number expected";
                if (message.v1 != null && message.hasOwnProperty("v1"))
                    if (typeof message.v1 !== "number")
                        return "v1: number expected";
                if (message.v2 != null && message.hasOwnProperty("v2"))
                    if (typeof message.v2 !== "number")
                        return "v2: number expected";
                if (message.v3 != null && message.hasOwnProperty("v3"))
                    if (typeof message.v3 !== "number")
                        return "v3: number expected";
                if (message.v4 != null && message.hasOwnProperty("v4"))
                    if (typeof message.v4 !== "number")
                        return "v4: number expected";
                if (message.v5 != null && message.hasOwnProperty("v5"))
                    if (typeof message.v5 !== "number")
                        return "v5: number expected";
                if (message.v6 != null && message.hasOwnProperty("v6"))
                    if (typeof message.v6 !== "number")
                        return "v6: number expected";
                if (message.v7 != null && message.hasOwnProperty("v7"))
                    if (typeof message.v7 !== "number")
                        return "v7: number expected";
                return null;
            };

            /**
             * Creates a Vector8 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ubii.dataStructure.Vector8
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ubii.dataStructure.Vector8} Vector8
             */
            Vector8.fromObject = function fromObject(object) {
                if (object instanceof $root.ubii.dataStructure.Vector8)
                    return object;
                var message = new $root.ubii.dataStructure.Vector8();
                if (object.v0 != null)
                    message.v0 = Number(object.v0);
                if (object.v1 != null)
                    message.v1 = Number(object.v1);
                if (object.v2 != null)
                    message.v2 = Number(object.v2);
                if (object.v3 != null)
                    message.v3 = Number(object.v3);
                if (object.v4 != null)
                    message.v4 = Number(object.v4);
                if (object.v5 != null)
                    message.v5 = Number(object.v5);
                if (object.v6 != null)
                    message.v6 = Number(object.v6);
                if (object.v7 != null)
                    message.v7 = Number(object.v7);
                return message;
            };

            /**
             * Creates a plain object from a Vector8 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ubii.dataStructure.Vector8
             * @static
             * @param {ubii.dataStructure.Vector8} message Vector8
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Vector8.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.v0 = 0;
                    object.v1 = 0;
                    object.v2 = 0;
                    object.v3 = 0;
                    object.v4 = 0;
                    object.v5 = 0;
                    object.v6 = 0;
                    object.v7 = 0;
                }
                if (message.v0 != null && message.hasOwnProperty("v0"))
                    object.v0 = options.json && !isFinite(message.v0) ? String(message.v0) : message.v0;
                if (message.v1 != null && message.hasOwnProperty("v1"))
                    object.v1 = options.json && !isFinite(message.v1) ? String(message.v1) : message.v1;
                if (message.v2 != null && message.hasOwnProperty("v2"))
                    object.v2 = options.json && !isFinite(message.v2) ? String(message.v2) : message.v2;
                if (message.v3 != null && message.hasOwnProperty("v3"))
                    object.v3 = options.json && !isFinite(message.v3) ? String(message.v3) : message.v3;
                if (message.v4 != null && message.hasOwnProperty("v4"))
                    object.v4 = options.json && !isFinite(message.v4) ? String(message.v4) : message.v4;
                if (message.v5 != null && message.hasOwnProperty("v5"))
                    object.v5 = options.json && !isFinite(message.v5) ? String(message.v5) : message.v5;
                if (message.v6 != null && message.hasOwnProperty("v6"))
                    object.v6 = options.json && !isFinite(message.v6) ? String(message.v6) : message.v6;
                if (message.v7 != null && message.hasOwnProperty("v7"))
                    object.v7 = options.json && !isFinite(message.v7) ? String(message.v7) : message.v7;
                return object;
            };

            /**
             * Converts this Vector8 to JSON.
             * @function toJSON
             * @memberof ubii.dataStructure.Vector8
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Vector8.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Vector8;
        })();

        return dataStructure;
    })();

    return ubii;
})();

module.exports = $root;
