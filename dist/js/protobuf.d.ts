import * as $protobuf from "protobufjs";
/** Namespace ubii. */
export namespace ubii {

    /** Namespace clients. */
    namespace clients {

        /** Properties of a Client. */
        interface IClient {

            /** Client id */
            id?: (string|null);

            /** Client name */
            name?: (string|null);

            /** Client devices */
            devices?: (ubii.devices.IDevice[]|null);

            /** Client tags */
            tags?: (string[]|null);

            /** Client description */
            description?: (string|null);

            /** Client processingModules */
            processingModules?: (ubii.processing.IProcessingModule[]|null);

            /** Client isDedicatedProcessingNode */
            isDedicatedProcessingNode?: (boolean|null);

            /** Client hostIp */
            hostIp?: (string|null);

            /** Client metadataJson */
            metadataJson?: (string|null);

            /** Client state */
            state?: (ubii.clients.Client.State|null);

            /** Client latency */
            latency?: (number|null);
        }

        /** Represents a Client. */
        class Client implements IClient {

            /**
             * Constructs a new Client.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.clients.IClient);

            /** Client id. */
            public id: string;

            /** Client name. */
            public name: string;

            /** Client devices. */
            public devices: ubii.devices.IDevice[];

            /** Client tags. */
            public tags: string[];

            /** Client description. */
            public description: string;

            /** Client processingModules. */
            public processingModules: ubii.processing.IProcessingModule[];

            /** Client isDedicatedProcessingNode. */
            public isDedicatedProcessingNode: boolean;

            /** Client hostIp. */
            public hostIp: string;

            /** Client metadataJson. */
            public metadataJson: string;

            /** Client state. */
            public state: ubii.clients.Client.State;

            /** Client latency. */
            public latency: number;

            /**
             * Creates a new Client instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Client instance
             */
            public static create(properties?: ubii.clients.IClient): ubii.clients.Client;

            /**
             * Encodes the specified Client message. Does not implicitly {@link ubii.clients.Client.verify|verify} messages.
             * @param message Client message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.clients.IClient, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Client message, length delimited. Does not implicitly {@link ubii.clients.Client.verify|verify} messages.
             * @param message Client message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.clients.IClient, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Client message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Client
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.clients.Client;

            /**
             * Decodes a Client message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Client
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.clients.Client;

            /**
             * Verifies a Client message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Client message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Client
             */
            public static fromObject(object: { [k: string]: any }): ubii.clients.Client;

            /**
             * Creates a plain object from a Client message. Also converts values to other types if specified.
             * @param message Client
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.clients.Client, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Client to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Client {

            /** State enum. */
            enum State {
                ACTIVE = 0,
                INACTIVE = 1,
                UNAVAILABLE = 2
            }
        }

        /** Properties of a ClientList. */
        interface IClientList {

            /** ClientList elements */
            elements?: (ubii.clients.IClient[]|null);
        }

        /** Represents a ClientList. */
        class ClientList implements IClientList {

            /**
             * Constructs a new ClientList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.clients.IClientList);

            /** ClientList elements. */
            public elements: ubii.clients.IClient[];

            /**
             * Creates a new ClientList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientList instance
             */
            public static create(properties?: ubii.clients.IClientList): ubii.clients.ClientList;

            /**
             * Encodes the specified ClientList message. Does not implicitly {@link ubii.clients.ClientList.verify|verify} messages.
             * @param message ClientList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.clients.IClientList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientList message, length delimited. Does not implicitly {@link ubii.clients.ClientList.verify|verify} messages.
             * @param message ClientList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.clients.IClientList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.clients.ClientList;

            /**
             * Decodes a ClientList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.clients.ClientList;

            /**
             * Verifies a ClientList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientList
             */
            public static fromObject(object: { [k: string]: any }): ubii.clients.ClientList;

            /**
             * Creates a plain object from a ClientList message. Also converts values to other types if specified.
             * @param message ClientList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.clients.ClientList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace conditions. */
    namespace conditions {

        /** Properties of a NotifyCondition. */
        interface INotifyCondition {

            /** NotifyCondition id */
            id?: (string|null);

            /** NotifyCondition name */
            name?: (string|null);

            /** NotifyCondition evaluationFunctionStringified */
            evaluationFunctionStringified?: (string|null);

            /** NotifyCondition clientProfilePub */
            clientProfilePub?: (ubii.clients.IClient|null);

            /** NotifyCondition clientProfileSub */
            clientProfileSub?: (ubii.clients.IClient|null);
        }

        /** Represents a NotifyCondition. */
        class NotifyCondition implements INotifyCondition {

            /**
             * Constructs a new NotifyCondition.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.conditions.INotifyCondition);

            /** NotifyCondition id. */
            public id: string;

            /** NotifyCondition name. */
            public name: string;

            /** NotifyCondition evaluationFunctionStringified. */
            public evaluationFunctionStringified: string;

            /** NotifyCondition clientProfilePub. */
            public clientProfilePub?: (ubii.clients.IClient|null);

            /** NotifyCondition clientProfileSub. */
            public clientProfileSub?: (ubii.clients.IClient|null);

            /**
             * Creates a new NotifyCondition instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NotifyCondition instance
             */
            public static create(properties?: ubii.conditions.INotifyCondition): ubii.conditions.NotifyCondition;

            /**
             * Encodes the specified NotifyCondition message. Does not implicitly {@link ubii.conditions.NotifyCondition.verify|verify} messages.
             * @param message NotifyCondition message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.conditions.INotifyCondition, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NotifyCondition message, length delimited. Does not implicitly {@link ubii.conditions.NotifyCondition.verify|verify} messages.
             * @param message NotifyCondition message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.conditions.INotifyCondition, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NotifyCondition message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NotifyCondition
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.conditions.NotifyCondition;

            /**
             * Decodes a NotifyCondition message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NotifyCondition
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.conditions.NotifyCondition;

            /**
             * Verifies a NotifyCondition message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NotifyCondition message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NotifyCondition
             */
            public static fromObject(object: { [k: string]: any }): ubii.conditions.NotifyCondition;

            /**
             * Creates a plain object from a NotifyCondition message. Also converts values to other types if specified.
             * @param message NotifyCondition
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.conditions.NotifyCondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NotifyCondition to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace dataStructure. */
    namespace dataStructure {

        /** ButtonEventType enum. */
        enum ButtonEventType {
            UP = 0,
            DOWN = 1
        }

        /** Properties of a Color. */
        interface IColor {

            /** Color r */
            r?: (number|null);

            /** Color g */
            g?: (number|null);

            /** Color b */
            b?: (number|null);

            /** Color a */
            a?: (number|null);
        }

        /** Represents a Color. */
        class Color implements IColor {

            /**
             * Constructs a new Color.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IColor);

            /** Color r. */
            public r: number;

            /** Color g. */
            public g: number;

            /** Color b. */
            public b: number;

            /** Color a. */
            public a: number;

            /**
             * Creates a new Color instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Color instance
             */
            public static create(properties?: ubii.dataStructure.IColor): ubii.dataStructure.Color;

            /**
             * Encodes the specified Color message. Does not implicitly {@link ubii.dataStructure.Color.verify|verify} messages.
             * @param message Color message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IColor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Color message, length delimited. Does not implicitly {@link ubii.dataStructure.Color.verify|verify} messages.
             * @param message Color message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IColor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Color message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Color
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.Color;

            /**
             * Decodes a Color message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Color
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.Color;

            /**
             * Verifies a Color message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Color message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Color
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.Color;

            /**
             * Creates a plain object from a Color message. Also converts values to other types if specified.
             * @param message Color
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.Color, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Color to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** HandGestureType enum. */
        enum HandGestureType {
            REST = 0,
            FINGERS_SPREAD = 1,
            WAVE_IN = 2,
            WAVE_OUT = 3,
            FIST = 4,
            DOUBLE_TAP = 5
        }

        /** Properties of an Image2D. */
        interface IImage2D {

            /** Image2D width */
            width?: (number|null);

            /** Image2D height */
            height?: (number|null);

            /** Image2D dataFormat */
            dataFormat?: (ubii.dataStructure.Image2D.DataFormat|null);

            /** Image2D data */
            data?: (Uint8Array|null);
        }

        /** Represents an Image2D. */
        class Image2D implements IImage2D {

            /**
             * Constructs a new Image2D.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IImage2D);

            /** Image2D width. */
            public width: number;

            /** Image2D height. */
            public height: number;

            /** Image2D dataFormat. */
            public dataFormat: ubii.dataStructure.Image2D.DataFormat;

            /** Image2D data. */
            public data: Uint8Array;

            /**
             * Creates a new Image2D instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Image2D instance
             */
            public static create(properties?: ubii.dataStructure.IImage2D): ubii.dataStructure.Image2D;

            /**
             * Encodes the specified Image2D message. Does not implicitly {@link ubii.dataStructure.Image2D.verify|verify} messages.
             * @param message Image2D message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IImage2D, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Image2D message, length delimited. Does not implicitly {@link ubii.dataStructure.Image2D.verify|verify} messages.
             * @param message Image2D message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IImage2D, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Image2D message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Image2D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.Image2D;

            /**
             * Decodes an Image2D message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Image2D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.Image2D;

            /**
             * Verifies an Image2D message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Image2D message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Image2D
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.Image2D;

            /**
             * Creates a plain object from an Image2D message. Also converts values to other types if specified.
             * @param message Image2D
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.Image2D, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Image2D to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Image2D {

            /** DataFormat enum. */
            enum DataFormat {
                GRAY8 = 0,
                RGB8 = 1,
                RGBA8 = 2
            }
        }

        /** Properties of an Image2DList. */
        interface IImage2DList {

            /** Image2DList elements */
            elements?: (ubii.dataStructure.IImage2D[]|null);
        }

        /** Represents an Image2DList. */
        class Image2DList implements IImage2DList {

            /**
             * Constructs a new Image2DList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IImage2DList);

            /** Image2DList elements. */
            public elements: ubii.dataStructure.IImage2D[];

            /**
             * Creates a new Image2DList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Image2DList instance
             */
            public static create(properties?: ubii.dataStructure.IImage2DList): ubii.dataStructure.Image2DList;

            /**
             * Encodes the specified Image2DList message. Does not implicitly {@link ubii.dataStructure.Image2DList.verify|verify} messages.
             * @param message Image2DList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IImage2DList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Image2DList message, length delimited. Does not implicitly {@link ubii.dataStructure.Image2DList.verify|verify} messages.
             * @param message Image2DList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IImage2DList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Image2DList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Image2DList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.Image2DList;

            /**
             * Decodes an Image2DList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Image2DList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.Image2DList;

            /**
             * Verifies an Image2DList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Image2DList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Image2DList
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.Image2DList;

            /**
             * Creates a plain object from an Image2DList message. Also converts values to other types if specified.
             * @param message Image2DList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.Image2DList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Image2DList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a KeyEvent. */
        interface IKeyEvent {

            /** KeyEvent type */
            type?: (ubii.dataStructure.ButtonEventType|null);

            /** KeyEvent key */
            key?: (string|null);
        }

        /** Represents a KeyEvent. */
        class KeyEvent implements IKeyEvent {

            /**
             * Constructs a new KeyEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IKeyEvent);

            /** KeyEvent type. */
            public type: ubii.dataStructure.ButtonEventType;

            /** KeyEvent key. */
            public key: string;

            /**
             * Creates a new KeyEvent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KeyEvent instance
             */
            public static create(properties?: ubii.dataStructure.IKeyEvent): ubii.dataStructure.KeyEvent;

            /**
             * Encodes the specified KeyEvent message. Does not implicitly {@link ubii.dataStructure.KeyEvent.verify|verify} messages.
             * @param message KeyEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IKeyEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KeyEvent message, length delimited. Does not implicitly {@link ubii.dataStructure.KeyEvent.verify|verify} messages.
             * @param message KeyEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IKeyEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KeyEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KeyEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.KeyEvent;

            /**
             * Decodes a KeyEvent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KeyEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.KeyEvent;

            /**
             * Verifies a KeyEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KeyEvent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KeyEvent
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.KeyEvent;

            /**
             * Creates a plain object from a KeyEvent message. Also converts values to other types if specified.
             * @param message KeyEvent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.KeyEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KeyEvent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StringList. */
        interface IStringList {

            /** StringList elements */
            elements?: (string[]|null);
        }

        /** Represents a StringList. */
        class StringList implements IStringList {

            /**
             * Constructs a new StringList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IStringList);

            /** StringList elements. */
            public elements: string[];

            /**
             * Creates a new StringList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringList instance
             */
            public static create(properties?: ubii.dataStructure.IStringList): ubii.dataStructure.StringList;

            /**
             * Encodes the specified StringList message. Does not implicitly {@link ubii.dataStructure.StringList.verify|verify} messages.
             * @param message StringList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IStringList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringList message, length delimited. Does not implicitly {@link ubii.dataStructure.StringList.verify|verify} messages.
             * @param message StringList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IStringList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.StringList;

            /**
             * Decodes a StringList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.StringList;

            /**
             * Verifies a StringList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringList
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.StringList;

            /**
             * Creates a plain object from a StringList message. Also converts values to other types if specified.
             * @param message StringList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.StringList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DoubleList. */
        interface IDoubleList {

            /** DoubleList elements */
            elements?: (number[]|null);
        }

        /** Represents a DoubleList. */
        class DoubleList implements IDoubleList {

            /**
             * Constructs a new DoubleList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IDoubleList);

            /** DoubleList elements. */
            public elements: number[];

            /**
             * Creates a new DoubleList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleList instance
             */
            public static create(properties?: ubii.dataStructure.IDoubleList): ubii.dataStructure.DoubleList;

            /**
             * Encodes the specified DoubleList message. Does not implicitly {@link ubii.dataStructure.DoubleList.verify|verify} messages.
             * @param message DoubleList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IDoubleList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleList message, length delimited. Does not implicitly {@link ubii.dataStructure.DoubleList.verify|verify} messages.
             * @param message DoubleList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IDoubleList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.DoubleList;

            /**
             * Decodes a DoubleList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.DoubleList;

            /**
             * Verifies a DoubleList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleList
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.DoubleList;

            /**
             * Creates a plain object from a DoubleList message. Also converts values to other types if specified.
             * @param message DoubleList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.DoubleList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FloatList. */
        interface IFloatList {

            /** FloatList elements */
            elements?: (number[]|null);
        }

        /** Represents a FloatList. */
        class FloatList implements IFloatList {

            /**
             * Constructs a new FloatList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IFloatList);

            /** FloatList elements. */
            public elements: number[];

            /**
             * Creates a new FloatList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatList instance
             */
            public static create(properties?: ubii.dataStructure.IFloatList): ubii.dataStructure.FloatList;

            /**
             * Encodes the specified FloatList message. Does not implicitly {@link ubii.dataStructure.FloatList.verify|verify} messages.
             * @param message FloatList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IFloatList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatList message, length delimited. Does not implicitly {@link ubii.dataStructure.FloatList.verify|verify} messages.
             * @param message FloatList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IFloatList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.FloatList;

            /**
             * Decodes a FloatList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.FloatList;

            /**
             * Verifies a FloatList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatList
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.FloatList;

            /**
             * Creates a plain object from a FloatList message. Also converts values to other types if specified.
             * @param message FloatList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.FloatList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BoolList. */
        interface IBoolList {

            /** BoolList elements */
            elements?: (boolean[]|null);
        }

        /** Represents a BoolList. */
        class BoolList implements IBoolList {

            /**
             * Constructs a new BoolList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IBoolList);

            /** BoolList elements. */
            public elements: boolean[];

            /**
             * Creates a new BoolList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolList instance
             */
            public static create(properties?: ubii.dataStructure.IBoolList): ubii.dataStructure.BoolList;

            /**
             * Encodes the specified BoolList message. Does not implicitly {@link ubii.dataStructure.BoolList.verify|verify} messages.
             * @param message BoolList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IBoolList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolList message, length delimited. Does not implicitly {@link ubii.dataStructure.BoolList.verify|verify} messages.
             * @param message BoolList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IBoolList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.BoolList;

            /**
             * Decodes a BoolList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.BoolList;

            /**
             * Verifies a BoolList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolList
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.BoolList;

            /**
             * Creates a plain object from a BoolList message. Also converts values to other types if specified.
             * @param message BoolList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.BoolList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int32List. */
        interface IInt32List {

            /** Int32List elements */
            elements?: (number[]|null);
        }

        /** Represents an Int32List. */
        class Int32List implements IInt32List {

            /**
             * Constructs a new Int32List.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IInt32List);

            /** Int32List elements. */
            public elements: number[];

            /**
             * Creates a new Int32List instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32List instance
             */
            public static create(properties?: ubii.dataStructure.IInt32List): ubii.dataStructure.Int32List;

            /**
             * Encodes the specified Int32List message. Does not implicitly {@link ubii.dataStructure.Int32List.verify|verify} messages.
             * @param message Int32List message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IInt32List, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32List message, length delimited. Does not implicitly {@link ubii.dataStructure.Int32List.verify|verify} messages.
             * @param message Int32List message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IInt32List, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32List message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32List
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.Int32List;

            /**
             * Decodes an Int32List message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32List
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.Int32List;

            /**
             * Verifies an Int32List message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32List message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32List
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.Int32List;

            /**
             * Creates a plain object from an Int32List message. Also converts values to other types if specified.
             * @param message Int32List
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.Int32List, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32List to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Matrix3x2. */
        interface IMatrix3x2 {

            /** Matrix3x2 m00 */
            m00?: (number|null);

            /** Matrix3x2 m01 */
            m01?: (number|null);

            /** Matrix3x2 m10 */
            m10?: (number|null);

            /** Matrix3x2 m11 */
            m11?: (number|null);

            /** Matrix3x2 m20 */
            m20?: (number|null);

            /** Matrix3x2 m21 */
            m21?: (number|null);
        }

        /** Represents a Matrix3x2. */
        class Matrix3x2 implements IMatrix3x2 {

            /**
             * Constructs a new Matrix3x2.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IMatrix3x2);

            /** Matrix3x2 m00. */
            public m00: number;

            /** Matrix3x2 m01. */
            public m01: number;

            /** Matrix3x2 m10. */
            public m10: number;

            /** Matrix3x2 m11. */
            public m11: number;

            /** Matrix3x2 m20. */
            public m20: number;

            /** Matrix3x2 m21. */
            public m21: number;

            /**
             * Creates a new Matrix3x2 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Matrix3x2 instance
             */
            public static create(properties?: ubii.dataStructure.IMatrix3x2): ubii.dataStructure.Matrix3x2;

            /**
             * Encodes the specified Matrix3x2 message. Does not implicitly {@link ubii.dataStructure.Matrix3x2.verify|verify} messages.
             * @param message Matrix3x2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IMatrix3x2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Matrix3x2 message, length delimited. Does not implicitly {@link ubii.dataStructure.Matrix3x2.verify|verify} messages.
             * @param message Matrix3x2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IMatrix3x2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Matrix3x2 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Matrix3x2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.Matrix3x2;

            /**
             * Decodes a Matrix3x2 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Matrix3x2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.Matrix3x2;

            /**
             * Verifies a Matrix3x2 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Matrix3x2 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Matrix3x2
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.Matrix3x2;

            /**
             * Creates a plain object from a Matrix3x2 message. Also converts values to other types if specified.
             * @param message Matrix3x2
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.Matrix3x2, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Matrix3x2 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Matrix4x4. */
        interface IMatrix4x4 {

            /** Matrix4x4 m00 */
            m00?: (number|null);

            /** Matrix4x4 m01 */
            m01?: (number|null);

            /** Matrix4x4 m02 */
            m02?: (number|null);

            /** Matrix4x4 m03 */
            m03?: (number|null);

            /** Matrix4x4 m10 */
            m10?: (number|null);

            /** Matrix4x4 m11 */
            m11?: (number|null);

            /** Matrix4x4 m12 */
            m12?: (number|null);

            /** Matrix4x4 m13 */
            m13?: (number|null);

            /** Matrix4x4 m20 */
            m20?: (number|null);

            /** Matrix4x4 m21 */
            m21?: (number|null);

            /** Matrix4x4 m22 */
            m22?: (number|null);

            /** Matrix4x4 m23 */
            m23?: (number|null);

            /** Matrix4x4 m30 */
            m30?: (number|null);

            /** Matrix4x4 m31 */
            m31?: (number|null);

            /** Matrix4x4 m32 */
            m32?: (number|null);

            /** Matrix4x4 m33 */
            m33?: (number|null);
        }

        /** Represents a Matrix4x4. */
        class Matrix4x4 implements IMatrix4x4 {

            /**
             * Constructs a new Matrix4x4.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IMatrix4x4);

            /** Matrix4x4 m00. */
            public m00: number;

            /** Matrix4x4 m01. */
            public m01: number;

            /** Matrix4x4 m02. */
            public m02: number;

            /** Matrix4x4 m03. */
            public m03: number;

            /** Matrix4x4 m10. */
            public m10: number;

            /** Matrix4x4 m11. */
            public m11: number;

            /** Matrix4x4 m12. */
            public m12: number;

            /** Matrix4x4 m13. */
            public m13: number;

            /** Matrix4x4 m20. */
            public m20: number;

            /** Matrix4x4 m21. */
            public m21: number;

            /** Matrix4x4 m22. */
            public m22: number;

            /** Matrix4x4 m23. */
            public m23: number;

            /** Matrix4x4 m30. */
            public m30: number;

            /** Matrix4x4 m31. */
            public m31: number;

            /** Matrix4x4 m32. */
            public m32: number;

            /** Matrix4x4 m33. */
            public m33: number;

            /**
             * Creates a new Matrix4x4 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Matrix4x4 instance
             */
            public static create(properties?: ubii.dataStructure.IMatrix4x4): ubii.dataStructure.Matrix4x4;

            /**
             * Encodes the specified Matrix4x4 message. Does not implicitly {@link ubii.dataStructure.Matrix4x4.verify|verify} messages.
             * @param message Matrix4x4 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IMatrix4x4, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Matrix4x4 message, length delimited. Does not implicitly {@link ubii.dataStructure.Matrix4x4.verify|verify} messages.
             * @param message Matrix4x4 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IMatrix4x4, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Matrix4x4 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Matrix4x4
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.Matrix4x4;

            /**
             * Decodes a Matrix4x4 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Matrix4x4
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.Matrix4x4;

            /**
             * Verifies a Matrix4x4 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Matrix4x4 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Matrix4x4
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.Matrix4x4;

            /**
             * Creates a plain object from a Matrix4x4 message. Also converts values to other types if specified.
             * @param message Matrix4x4
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.Matrix4x4, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Matrix4x4 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MouseEvent. */
        interface IMouseEvent {

            /** MouseEvent type */
            type?: (ubii.dataStructure.ButtonEventType|null);

            /** MouseEvent button */
            button?: (number|null);
        }

        /** Represents a MouseEvent. */
        class MouseEvent implements IMouseEvent {

            /**
             * Constructs a new MouseEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IMouseEvent);

            /** MouseEvent type. */
            public type: ubii.dataStructure.ButtonEventType;

            /** MouseEvent button. */
            public button: number;

            /**
             * Creates a new MouseEvent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MouseEvent instance
             */
            public static create(properties?: ubii.dataStructure.IMouseEvent): ubii.dataStructure.MouseEvent;

            /**
             * Encodes the specified MouseEvent message. Does not implicitly {@link ubii.dataStructure.MouseEvent.verify|verify} messages.
             * @param message MouseEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IMouseEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MouseEvent message, length delimited. Does not implicitly {@link ubii.dataStructure.MouseEvent.verify|verify} messages.
             * @param message MouseEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IMouseEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MouseEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MouseEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.MouseEvent;

            /**
             * Decodes a MouseEvent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MouseEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.MouseEvent;

            /**
             * Verifies a MouseEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MouseEvent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MouseEvent
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.MouseEvent;

            /**
             * Creates a plain object from a MouseEvent message. Also converts values to other types if specified.
             * @param message MouseEvent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.MouseEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MouseEvent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MyoEvent. */
        interface IMyoEvent {

            /** MyoEvent emg */
            emg?: (ubii.dataStructure.IVector8|null);

            /** MyoEvent orientation */
            orientation?: (ubii.dataStructure.IQuaternion|null);

            /** MyoEvent gyroscope */
            gyroscope?: (ubii.dataStructure.IVector3|null);

            /** MyoEvent accelerometer */
            accelerometer?: (ubii.dataStructure.IVector3|null);

            /** MyoEvent gesture */
            gesture?: (ubii.dataStructure.HandGestureType|null);
        }

        /** Represents a MyoEvent. */
        class MyoEvent implements IMyoEvent {

            /**
             * Constructs a new MyoEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IMyoEvent);

            /** MyoEvent emg. */
            public emg?: (ubii.dataStructure.IVector8|null);

            /** MyoEvent orientation. */
            public orientation?: (ubii.dataStructure.IQuaternion|null);

            /** MyoEvent gyroscope. */
            public gyroscope?: (ubii.dataStructure.IVector3|null);

            /** MyoEvent accelerometer. */
            public accelerometer?: (ubii.dataStructure.IVector3|null);

            /** MyoEvent gesture. */
            public gesture: ubii.dataStructure.HandGestureType;

            /**
             * Creates a new MyoEvent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MyoEvent instance
             */
            public static create(properties?: ubii.dataStructure.IMyoEvent): ubii.dataStructure.MyoEvent;

            /**
             * Encodes the specified MyoEvent message. Does not implicitly {@link ubii.dataStructure.MyoEvent.verify|verify} messages.
             * @param message MyoEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IMyoEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MyoEvent message, length delimited. Does not implicitly {@link ubii.dataStructure.MyoEvent.verify|verify} messages.
             * @param message MyoEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IMyoEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MyoEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MyoEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.MyoEvent;

            /**
             * Decodes a MyoEvent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MyoEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.MyoEvent;

            /**
             * Verifies a MyoEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MyoEvent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MyoEvent
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.MyoEvent;

            /**
             * Creates a plain object from a MyoEvent message. Also converts values to other types if specified.
             * @param message MyoEvent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.MyoEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MyoEvent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Object2D. */
        interface IObject2D {

            /** Object2D id */
            id?: (string|null);

            /** Object2D pose */
            pose?: (ubii.dataStructure.IPose2D|null);

            /** Object2D size */
            size?: (ubii.dataStructure.IVector2|null);

            /** Object2D userDataJson */
            userDataJson?: (string|null);
        }

        /** Represents an Object2D. */
        class Object2D implements IObject2D {

            /**
             * Constructs a new Object2D.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IObject2D);

            /** Object2D id. */
            public id: string;

            /** Object2D pose. */
            public pose?: (ubii.dataStructure.IPose2D|null);

            /** Object2D size. */
            public size?: (ubii.dataStructure.IVector2|null);

            /** Object2D userDataJson. */
            public userDataJson: string;

            /**
             * Creates a new Object2D instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Object2D instance
             */
            public static create(properties?: ubii.dataStructure.IObject2D): ubii.dataStructure.Object2D;

            /**
             * Encodes the specified Object2D message. Does not implicitly {@link ubii.dataStructure.Object2D.verify|verify} messages.
             * @param message Object2D message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IObject2D, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Object2D message, length delimited. Does not implicitly {@link ubii.dataStructure.Object2D.verify|verify} messages.
             * @param message Object2D message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IObject2D, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Object2D message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Object2D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.Object2D;

            /**
             * Decodes an Object2D message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Object2D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.Object2D;

            /**
             * Verifies an Object2D message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Object2D message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Object2D
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.Object2D;

            /**
             * Creates a plain object from an Object2D message. Also converts values to other types if specified.
             * @param message Object2D
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.Object2D, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Object2D to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Object2DList. */
        interface IObject2DList {

            /** Object2DList elements */
            elements?: (ubii.dataStructure.IObject2D[]|null);
        }

        /** Represents an Object2DList. */
        class Object2DList implements IObject2DList {

            /**
             * Constructs a new Object2DList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IObject2DList);

            /** Object2DList elements. */
            public elements: ubii.dataStructure.IObject2D[];

            /**
             * Creates a new Object2DList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Object2DList instance
             */
            public static create(properties?: ubii.dataStructure.IObject2DList): ubii.dataStructure.Object2DList;

            /**
             * Encodes the specified Object2DList message. Does not implicitly {@link ubii.dataStructure.Object2DList.verify|verify} messages.
             * @param message Object2DList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IObject2DList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Object2DList message, length delimited. Does not implicitly {@link ubii.dataStructure.Object2DList.verify|verify} messages.
             * @param message Object2DList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IObject2DList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Object2DList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Object2DList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.Object2DList;

            /**
             * Decodes an Object2DList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Object2DList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.Object2DList;

            /**
             * Verifies an Object2DList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Object2DList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Object2DList
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.Object2DList;

            /**
             * Creates a plain object from an Object2DList message. Also converts values to other types if specified.
             * @param message Object2DList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.Object2DList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Object2DList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Object3D. */
        interface IObject3D {

            /** Object3D id */
            id?: (string|null);

            /** Object3D pose */
            pose?: (ubii.dataStructure.IPose3D|null);

            /** Object3D size */
            size?: (ubii.dataStructure.IVector3|null);

            /** Object3D userDataJson */
            userDataJson?: (string|null);
        }

        /** Represents an Object3D. */
        class Object3D implements IObject3D {

            /**
             * Constructs a new Object3D.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IObject3D);

            /** Object3D id. */
            public id: string;

            /** Object3D pose. */
            public pose?: (ubii.dataStructure.IPose3D|null);

            /** Object3D size. */
            public size?: (ubii.dataStructure.IVector3|null);

            /** Object3D userDataJson. */
            public userDataJson: string;

            /**
             * Creates a new Object3D instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Object3D instance
             */
            public static create(properties?: ubii.dataStructure.IObject3D): ubii.dataStructure.Object3D;

            /**
             * Encodes the specified Object3D message. Does not implicitly {@link ubii.dataStructure.Object3D.verify|verify} messages.
             * @param message Object3D message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IObject3D, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Object3D message, length delimited. Does not implicitly {@link ubii.dataStructure.Object3D.verify|verify} messages.
             * @param message Object3D message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IObject3D, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Object3D message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Object3D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.Object3D;

            /**
             * Decodes an Object3D message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Object3D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.Object3D;

            /**
             * Verifies an Object3D message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Object3D message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Object3D
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.Object3D;

            /**
             * Creates a plain object from an Object3D message. Also converts values to other types if specified.
             * @param message Object3D
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.Object3D, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Object3D to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Object3DList. */
        interface IObject3DList {

            /** Object3DList elements */
            elements?: (ubii.dataStructure.IObject3D[]|null);
        }

        /** Represents an Object3DList. */
        class Object3DList implements IObject3DList {

            /**
             * Constructs a new Object3DList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IObject3DList);

            /** Object3DList elements. */
            public elements: ubii.dataStructure.IObject3D[];

            /**
             * Creates a new Object3DList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Object3DList instance
             */
            public static create(properties?: ubii.dataStructure.IObject3DList): ubii.dataStructure.Object3DList;

            /**
             * Encodes the specified Object3DList message. Does not implicitly {@link ubii.dataStructure.Object3DList.verify|verify} messages.
             * @param message Object3DList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IObject3DList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Object3DList message, length delimited. Does not implicitly {@link ubii.dataStructure.Object3DList.verify|verify} messages.
             * @param message Object3DList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IObject3DList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Object3DList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Object3DList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.Object3DList;

            /**
             * Decodes an Object3DList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Object3DList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.Object3DList;

            /**
             * Verifies an Object3DList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Object3DList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Object3DList
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.Object3DList;

            /**
             * Creates a plain object from an Object3DList message. Also converts values to other types if specified.
             * @param message Object3DList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.Object3DList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Object3DList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Pose2D. */
        interface IPose2D {

            /** Pose2D position */
            position?: (ubii.dataStructure.IVector2|null);

            /** Pose2D direction */
            direction?: (ubii.dataStructure.IVector2|null);

            /** Pose2D angle */
            angle?: (number|null);
        }

        /** Represents a Pose2D. */
        class Pose2D implements IPose2D {

            /**
             * Constructs a new Pose2D.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IPose2D);

            /** Pose2D position. */
            public position?: (ubii.dataStructure.IVector2|null);

            /** Pose2D direction. */
            public direction?: (ubii.dataStructure.IVector2|null);

            /** Pose2D angle. */
            public angle?: (number|null);

            /** Pose2D orientation. */
            public orientation?: ("direction"|"angle");

            /**
             * Creates a new Pose2D instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Pose2D instance
             */
            public static create(properties?: ubii.dataStructure.IPose2D): ubii.dataStructure.Pose2D;

            /**
             * Encodes the specified Pose2D message. Does not implicitly {@link ubii.dataStructure.Pose2D.verify|verify} messages.
             * @param message Pose2D message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IPose2D, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Pose2D message, length delimited. Does not implicitly {@link ubii.dataStructure.Pose2D.verify|verify} messages.
             * @param message Pose2D message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IPose2D, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Pose2D message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Pose2D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.Pose2D;

            /**
             * Decodes a Pose2D message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Pose2D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.Pose2D;

            /**
             * Verifies a Pose2D message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Pose2D message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Pose2D
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.Pose2D;

            /**
             * Creates a plain object from a Pose2D message. Also converts values to other types if specified.
             * @param message Pose2D
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.Pose2D, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Pose2D to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Pose3D. */
        interface IPose3D {

            /** Pose3D position */
            position?: (ubii.dataStructure.IVector3|null);

            /** Pose3D quaternion */
            quaternion?: (ubii.dataStructure.IQuaternion|null);

            /** Pose3D euler */
            euler?: (ubii.dataStructure.IVector3|null);
        }

        /** Represents a Pose3D. */
        class Pose3D implements IPose3D {

            /**
             * Constructs a new Pose3D.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IPose3D);

            /** Pose3D position. */
            public position?: (ubii.dataStructure.IVector3|null);

            /** Pose3D quaternion. */
            public quaternion?: (ubii.dataStructure.IQuaternion|null);

            /** Pose3D euler. */
            public euler?: (ubii.dataStructure.IVector3|null);

            /** Pose3D orientation. */
            public orientation?: ("quaternion"|"euler");

            /**
             * Creates a new Pose3D instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Pose3D instance
             */
            public static create(properties?: ubii.dataStructure.IPose3D): ubii.dataStructure.Pose3D;

            /**
             * Encodes the specified Pose3D message. Does not implicitly {@link ubii.dataStructure.Pose3D.verify|verify} messages.
             * @param message Pose3D message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IPose3D, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Pose3D message, length delimited. Does not implicitly {@link ubii.dataStructure.Pose3D.verify|verify} messages.
             * @param message Pose3D message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IPose3D, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Pose3D message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Pose3D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.Pose3D;

            /**
             * Decodes a Pose3D message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Pose3D
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.Pose3D;

            /**
             * Verifies a Pose3D message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Pose3D message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Pose3D
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.Pose3D;

            /**
             * Creates a plain object from a Pose3D message. Also converts values to other types if specified.
             * @param message Pose3D
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.Pose3D, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Pose3D to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Quaternion. */
        interface IQuaternion {

            /** Quaternion x */
            x?: (number|null);

            /** Quaternion y */
            y?: (number|null);

            /** Quaternion z */
            z?: (number|null);

            /** Quaternion w */
            w?: (number|null);
        }

        /** Represents a Quaternion. */
        class Quaternion implements IQuaternion {

            /**
             * Constructs a new Quaternion.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IQuaternion);

            /** Quaternion x. */
            public x: number;

            /** Quaternion y. */
            public y: number;

            /** Quaternion z. */
            public z: number;

            /** Quaternion w. */
            public w: number;

            /**
             * Creates a new Quaternion instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Quaternion instance
             */
            public static create(properties?: ubii.dataStructure.IQuaternion): ubii.dataStructure.Quaternion;

            /**
             * Encodes the specified Quaternion message. Does not implicitly {@link ubii.dataStructure.Quaternion.verify|verify} messages.
             * @param message Quaternion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IQuaternion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Quaternion message, length delimited. Does not implicitly {@link ubii.dataStructure.Quaternion.verify|verify} messages.
             * @param message Quaternion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IQuaternion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Quaternion message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Quaternion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.Quaternion;

            /**
             * Decodes a Quaternion message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Quaternion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.Quaternion;

            /**
             * Verifies a Quaternion message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Quaternion message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Quaternion
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.Quaternion;

            /**
             * Creates a plain object from a Quaternion message. Also converts values to other types if specified.
             * @param message Quaternion
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.Quaternion, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Quaternion to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QuaternionList. */
        interface IQuaternionList {

            /** QuaternionList elements */
            elements?: (ubii.dataStructure.IQuaternion[]|null);
        }

        /** Represents a QuaternionList. */
        class QuaternionList implements IQuaternionList {

            /**
             * Constructs a new QuaternionList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IQuaternionList);

            /** QuaternionList elements. */
            public elements: ubii.dataStructure.IQuaternion[];

            /**
             * Creates a new QuaternionList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns QuaternionList instance
             */
            public static create(properties?: ubii.dataStructure.IQuaternionList): ubii.dataStructure.QuaternionList;

            /**
             * Encodes the specified QuaternionList message. Does not implicitly {@link ubii.dataStructure.QuaternionList.verify|verify} messages.
             * @param message QuaternionList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IQuaternionList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QuaternionList message, length delimited. Does not implicitly {@link ubii.dataStructure.QuaternionList.verify|verify} messages.
             * @param message QuaternionList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IQuaternionList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QuaternionList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QuaternionList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.QuaternionList;

            /**
             * Decodes a QuaternionList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QuaternionList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.QuaternionList;

            /**
             * Verifies a QuaternionList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QuaternionList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QuaternionList
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.QuaternionList;

            /**
             * Creates a plain object from a QuaternionList message. Also converts values to other types if specified.
             * @param message QuaternionList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.QuaternionList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QuaternionList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TouchEvent. */
        interface ITouchEvent {

            /** TouchEvent type */
            type?: (ubii.dataStructure.TouchEvent.TouchEventType|null);

            /** TouchEvent position */
            position?: (ubii.dataStructure.IVector2|null);

            /** TouchEvent id */
            id?: (string|null);

            /** TouchEvent force */
            force?: (number|null);
        }

        /** Represents a TouchEvent. */
        class TouchEvent implements ITouchEvent {

            /**
             * Constructs a new TouchEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.ITouchEvent);

            /** TouchEvent type. */
            public type: ubii.dataStructure.TouchEvent.TouchEventType;

            /** TouchEvent position. */
            public position?: (ubii.dataStructure.IVector2|null);

            /** TouchEvent id. */
            public id: string;

            /** TouchEvent force. */
            public force: number;

            /**
             * Creates a new TouchEvent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TouchEvent instance
             */
            public static create(properties?: ubii.dataStructure.ITouchEvent): ubii.dataStructure.TouchEvent;

            /**
             * Encodes the specified TouchEvent message. Does not implicitly {@link ubii.dataStructure.TouchEvent.verify|verify} messages.
             * @param message TouchEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.ITouchEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TouchEvent message, length delimited. Does not implicitly {@link ubii.dataStructure.TouchEvent.verify|verify} messages.
             * @param message TouchEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.ITouchEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TouchEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TouchEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.TouchEvent;

            /**
             * Decodes a TouchEvent message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TouchEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.TouchEvent;

            /**
             * Verifies a TouchEvent message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TouchEvent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TouchEvent
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.TouchEvent;

            /**
             * Creates a plain object from a TouchEvent message. Also converts values to other types if specified.
             * @param message TouchEvent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.TouchEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TouchEvent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace TouchEvent {

            /** TouchEventType enum. */
            enum TouchEventType {
                TOUCH_START = 0,
                TOUCH_MOVE = 1,
                TOUCH_END = 2
            }
        }

        /** Properties of a TouchEventList. */
        interface ITouchEventList {

            /** TouchEventList elements */
            elements?: (ubii.dataStructure.ITouchEvent[]|null);
        }

        /** Represents a TouchEventList. */
        class TouchEventList implements ITouchEventList {

            /**
             * Constructs a new TouchEventList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.ITouchEventList);

            /** TouchEventList elements. */
            public elements: ubii.dataStructure.ITouchEvent[];

            /**
             * Creates a new TouchEventList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TouchEventList instance
             */
            public static create(properties?: ubii.dataStructure.ITouchEventList): ubii.dataStructure.TouchEventList;

            /**
             * Encodes the specified TouchEventList message. Does not implicitly {@link ubii.dataStructure.TouchEventList.verify|verify} messages.
             * @param message TouchEventList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.ITouchEventList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TouchEventList message, length delimited. Does not implicitly {@link ubii.dataStructure.TouchEventList.verify|verify} messages.
             * @param message TouchEventList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.ITouchEventList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TouchEventList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TouchEventList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.TouchEventList;

            /**
             * Decodes a TouchEventList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TouchEventList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.TouchEventList;

            /**
             * Verifies a TouchEventList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TouchEventList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TouchEventList
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.TouchEventList;

            /**
             * Creates a plain object from a TouchEventList message. Also converts values to other types if specified.
             * @param message TouchEventList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.TouchEventList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TouchEventList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Vector2. */
        interface IVector2 {

            /** Vector2 x */
            x?: (number|null);

            /** Vector2 y */
            y?: (number|null);
        }

        /** Represents a Vector2. */
        class Vector2 implements IVector2 {

            /**
             * Constructs a new Vector2.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IVector2);

            /** Vector2 x. */
            public x: number;

            /** Vector2 y. */
            public y: number;

            /**
             * Creates a new Vector2 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Vector2 instance
             */
            public static create(properties?: ubii.dataStructure.IVector2): ubii.dataStructure.Vector2;

            /**
             * Encodes the specified Vector2 message. Does not implicitly {@link ubii.dataStructure.Vector2.verify|verify} messages.
             * @param message Vector2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IVector2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Vector2 message, length delimited. Does not implicitly {@link ubii.dataStructure.Vector2.verify|verify} messages.
             * @param message Vector2 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IVector2, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Vector2 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Vector2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.Vector2;

            /**
             * Decodes a Vector2 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Vector2
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.Vector2;

            /**
             * Verifies a Vector2 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Vector2 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Vector2
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.Vector2;

            /**
             * Creates a plain object from a Vector2 message. Also converts values to other types if specified.
             * @param message Vector2
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.Vector2, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Vector2 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Vector2List. */
        interface IVector2List {

            /** Vector2List elements */
            elements?: (ubii.dataStructure.IVector2[]|null);
        }

        /** Represents a Vector2List. */
        class Vector2List implements IVector2List {

            /**
             * Constructs a new Vector2List.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IVector2List);

            /** Vector2List elements. */
            public elements: ubii.dataStructure.IVector2[];

            /**
             * Creates a new Vector2List instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Vector2List instance
             */
            public static create(properties?: ubii.dataStructure.IVector2List): ubii.dataStructure.Vector2List;

            /**
             * Encodes the specified Vector2List message. Does not implicitly {@link ubii.dataStructure.Vector2List.verify|verify} messages.
             * @param message Vector2List message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IVector2List, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Vector2List message, length delimited. Does not implicitly {@link ubii.dataStructure.Vector2List.verify|verify} messages.
             * @param message Vector2List message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IVector2List, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Vector2List message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Vector2List
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.Vector2List;

            /**
             * Decodes a Vector2List message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Vector2List
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.Vector2List;

            /**
             * Verifies a Vector2List message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Vector2List message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Vector2List
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.Vector2List;

            /**
             * Creates a plain object from a Vector2List message. Also converts values to other types if specified.
             * @param message Vector2List
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.Vector2List, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Vector2List to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Vector3. */
        interface IVector3 {

            /** Vector3 x */
            x?: (number|null);

            /** Vector3 y */
            y?: (number|null);

            /** Vector3 z */
            z?: (number|null);
        }

        /** Represents a Vector3. */
        class Vector3 implements IVector3 {

            /**
             * Constructs a new Vector3.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IVector3);

            /** Vector3 x. */
            public x: number;

            /** Vector3 y. */
            public y: number;

            /** Vector3 z. */
            public z: number;

            /**
             * Creates a new Vector3 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Vector3 instance
             */
            public static create(properties?: ubii.dataStructure.IVector3): ubii.dataStructure.Vector3;

            /**
             * Encodes the specified Vector3 message. Does not implicitly {@link ubii.dataStructure.Vector3.verify|verify} messages.
             * @param message Vector3 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IVector3, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Vector3 message, length delimited. Does not implicitly {@link ubii.dataStructure.Vector3.verify|verify} messages.
             * @param message Vector3 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IVector3, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Vector3 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Vector3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.Vector3;

            /**
             * Decodes a Vector3 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Vector3
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.Vector3;

            /**
             * Verifies a Vector3 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Vector3 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Vector3
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.Vector3;

            /**
             * Creates a plain object from a Vector3 message. Also converts values to other types if specified.
             * @param message Vector3
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.Vector3, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Vector3 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Vector3List. */
        interface IVector3List {

            /** Vector3List elements */
            elements?: (ubii.dataStructure.IVector3[]|null);
        }

        /** Represents a Vector3List. */
        class Vector3List implements IVector3List {

            /**
             * Constructs a new Vector3List.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IVector3List);

            /** Vector3List elements. */
            public elements: ubii.dataStructure.IVector3[];

            /**
             * Creates a new Vector3List instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Vector3List instance
             */
            public static create(properties?: ubii.dataStructure.IVector3List): ubii.dataStructure.Vector3List;

            /**
             * Encodes the specified Vector3List message. Does not implicitly {@link ubii.dataStructure.Vector3List.verify|verify} messages.
             * @param message Vector3List message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IVector3List, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Vector3List message, length delimited. Does not implicitly {@link ubii.dataStructure.Vector3List.verify|verify} messages.
             * @param message Vector3List message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IVector3List, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Vector3List message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Vector3List
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.Vector3List;

            /**
             * Decodes a Vector3List message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Vector3List
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.Vector3List;

            /**
             * Verifies a Vector3List message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Vector3List message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Vector3List
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.Vector3List;

            /**
             * Creates a plain object from a Vector3List message. Also converts values to other types if specified.
             * @param message Vector3List
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.Vector3List, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Vector3List to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Vector4. */
        interface IVector4 {

            /** Vector4 x */
            x?: (number|null);

            /** Vector4 y */
            y?: (number|null);

            /** Vector4 z */
            z?: (number|null);

            /** Vector4 w */
            w?: (number|null);
        }

        /** Represents a Vector4. */
        class Vector4 implements IVector4 {

            /**
             * Constructs a new Vector4.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IVector4);

            /** Vector4 x. */
            public x: number;

            /** Vector4 y. */
            public y: number;

            /** Vector4 z. */
            public z: number;

            /** Vector4 w. */
            public w: number;

            /**
             * Creates a new Vector4 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Vector4 instance
             */
            public static create(properties?: ubii.dataStructure.IVector4): ubii.dataStructure.Vector4;

            /**
             * Encodes the specified Vector4 message. Does not implicitly {@link ubii.dataStructure.Vector4.verify|verify} messages.
             * @param message Vector4 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IVector4, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Vector4 message, length delimited. Does not implicitly {@link ubii.dataStructure.Vector4.verify|verify} messages.
             * @param message Vector4 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IVector4, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Vector4 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Vector4
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.Vector4;

            /**
             * Decodes a Vector4 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Vector4
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.Vector4;

            /**
             * Verifies a Vector4 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Vector4 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Vector4
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.Vector4;

            /**
             * Creates a plain object from a Vector4 message. Also converts values to other types if specified.
             * @param message Vector4
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.Vector4, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Vector4 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Vector4List. */
        interface IVector4List {

            /** Vector4List elements */
            elements?: (ubii.dataStructure.IVector4[]|null);
        }

        /** Represents a Vector4List. */
        class Vector4List implements IVector4List {

            /**
             * Constructs a new Vector4List.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IVector4List);

            /** Vector4List elements. */
            public elements: ubii.dataStructure.IVector4[];

            /**
             * Creates a new Vector4List instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Vector4List instance
             */
            public static create(properties?: ubii.dataStructure.IVector4List): ubii.dataStructure.Vector4List;

            /**
             * Encodes the specified Vector4List message. Does not implicitly {@link ubii.dataStructure.Vector4List.verify|verify} messages.
             * @param message Vector4List message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IVector4List, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Vector4List message, length delimited. Does not implicitly {@link ubii.dataStructure.Vector4List.verify|verify} messages.
             * @param message Vector4List message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IVector4List, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Vector4List message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Vector4List
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.Vector4List;

            /**
             * Decodes a Vector4List message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Vector4List
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.Vector4List;

            /**
             * Verifies a Vector4List message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Vector4List message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Vector4List
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.Vector4List;

            /**
             * Creates a plain object from a Vector4List message. Also converts values to other types if specified.
             * @param message Vector4List
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.Vector4List, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Vector4List to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Vector8. */
        interface IVector8 {

            /** Vector8 v0 */
            v0?: (number|null);

            /** Vector8 v1 */
            v1?: (number|null);

            /** Vector8 v2 */
            v2?: (number|null);

            /** Vector8 v3 */
            v3?: (number|null);

            /** Vector8 v4 */
            v4?: (number|null);

            /** Vector8 v5 */
            v5?: (number|null);

            /** Vector8 v6 */
            v6?: (number|null);

            /** Vector8 v7 */
            v7?: (number|null);
        }

        /** Represents a Vector8. */
        class Vector8 implements IVector8 {

            /**
             * Constructs a new Vector8.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IVector8);

            /** Vector8 v0. */
            public v0: number;

            /** Vector8 v1. */
            public v1: number;

            /** Vector8 v2. */
            public v2: number;

            /** Vector8 v3. */
            public v3: number;

            /** Vector8 v4. */
            public v4: number;

            /** Vector8 v5. */
            public v5: number;

            /** Vector8 v6. */
            public v6: number;

            /** Vector8 v7. */
            public v7: number;

            /**
             * Creates a new Vector8 instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Vector8 instance
             */
            public static create(properties?: ubii.dataStructure.IVector8): ubii.dataStructure.Vector8;

            /**
             * Encodes the specified Vector8 message. Does not implicitly {@link ubii.dataStructure.Vector8.verify|verify} messages.
             * @param message Vector8 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IVector8, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Vector8 message, length delimited. Does not implicitly {@link ubii.dataStructure.Vector8.verify|verify} messages.
             * @param message Vector8 message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IVector8, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Vector8 message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Vector8
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.Vector8;

            /**
             * Decodes a Vector8 message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Vector8
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.Vector8;

            /**
             * Verifies a Vector8 message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Vector8 message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Vector8
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.Vector8;

            /**
             * Creates a plain object from a Vector8 message. Also converts values to other types if specified.
             * @param message Vector8
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.Vector8, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Vector8 to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Vector8List. */
        interface IVector8List {

            /** Vector8List elements */
            elements?: (ubii.dataStructure.IVector8[]|null);
        }

        /** Represents a Vector8List. */
        class Vector8List implements IVector8List {

            /**
             * Constructs a new Vector8List.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.dataStructure.IVector8List);

            /** Vector8List elements. */
            public elements: ubii.dataStructure.IVector8[];

            /**
             * Creates a new Vector8List instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Vector8List instance
             */
            public static create(properties?: ubii.dataStructure.IVector8List): ubii.dataStructure.Vector8List;

            /**
             * Encodes the specified Vector8List message. Does not implicitly {@link ubii.dataStructure.Vector8List.verify|verify} messages.
             * @param message Vector8List message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.dataStructure.IVector8List, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Vector8List message, length delimited. Does not implicitly {@link ubii.dataStructure.Vector8List.verify|verify} messages.
             * @param message Vector8List message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.dataStructure.IVector8List, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Vector8List message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Vector8List
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.dataStructure.Vector8List;

            /**
             * Decodes a Vector8List message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Vector8List
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.dataStructure.Vector8List;

            /**
             * Verifies a Vector8List message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Vector8List message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Vector8List
             */
            public static fromObject(object: { [k: string]: any }): ubii.dataStructure.Vector8List;

            /**
             * Creates a plain object from a Vector8List message. Also converts values to other types if specified.
             * @param message Vector8List
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.dataStructure.Vector8List, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Vector8List to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace devices. */
    namespace devices {

        /** Properties of a Component. */
        interface IComponent {

            /** Component topic */
            topic?: (string|null);

            /** Component messageFormat */
            messageFormat?: (string|null);

            /** Component ioType */
            ioType?: (ubii.devices.Component.IOType|null);

            /** Component deviceId */
            deviceId?: (string|null);

            /** Component tags */
            tags?: (string[]|null);

            /** Component description */
            description?: (string|null);

            /** Component id */
            id?: (string|null);

            /** Component name */
            name?: (string|null);

            /** Component notifyConditionIds */
            notifyConditionIds?: (string[]|null);
        }

        /** Represents a Component. */
        class Component implements IComponent {

            /**
             * Constructs a new Component.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.devices.IComponent);

            /** Component topic. */
            public topic: string;

            /** Component messageFormat. */
            public messageFormat: string;

            /** Component ioType. */
            public ioType: ubii.devices.Component.IOType;

            /** Component deviceId. */
            public deviceId: string;

            /** Component tags. */
            public tags: string[];

            /** Component description. */
            public description: string;

            /** Component id. */
            public id: string;

            /** Component name. */
            public name: string;

            /** Component notifyConditionIds. */
            public notifyConditionIds: string[];

            /**
             * Creates a new Component instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Component instance
             */
            public static create(properties?: ubii.devices.IComponent): ubii.devices.Component;

            /**
             * Encodes the specified Component message. Does not implicitly {@link ubii.devices.Component.verify|verify} messages.
             * @param message Component message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.devices.IComponent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Component message, length delimited. Does not implicitly {@link ubii.devices.Component.verify|verify} messages.
             * @param message Component message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.devices.IComponent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Component message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Component
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.devices.Component;

            /**
             * Decodes a Component message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Component
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.devices.Component;

            /**
             * Verifies a Component message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Component message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Component
             */
            public static fromObject(object: { [k: string]: any }): ubii.devices.Component;

            /**
             * Creates a plain object from a Component message. Also converts values to other types if specified.
             * @param message Component
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.devices.Component, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Component to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Component {

            /** IOType enum. */
            enum IOType {
                PUBLISHER = 0,
                SUBSCRIBER = 1
            }
        }

        /** Properties of a ComponentList. */
        interface IComponentList {

            /** ComponentList elements */
            elements?: (ubii.devices.IComponent[]|null);
        }

        /** Represents a ComponentList. */
        class ComponentList implements IComponentList {

            /**
             * Constructs a new ComponentList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.devices.IComponentList);

            /** ComponentList elements. */
            public elements: ubii.devices.IComponent[];

            /**
             * Creates a new ComponentList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ComponentList instance
             */
            public static create(properties?: ubii.devices.IComponentList): ubii.devices.ComponentList;

            /**
             * Encodes the specified ComponentList message. Does not implicitly {@link ubii.devices.ComponentList.verify|verify} messages.
             * @param message ComponentList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.devices.IComponentList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ComponentList message, length delimited. Does not implicitly {@link ubii.devices.ComponentList.verify|verify} messages.
             * @param message ComponentList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.devices.IComponentList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ComponentList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ComponentList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.devices.ComponentList;

            /**
             * Decodes a ComponentList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ComponentList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.devices.ComponentList;

            /**
             * Verifies a ComponentList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ComponentList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ComponentList
             */
            public static fromObject(object: { [k: string]: any }): ubii.devices.ComponentList;

            /**
             * Creates a plain object from a ComponentList message. Also converts values to other types if specified.
             * @param message ComponentList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.devices.ComponentList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ComponentList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Device. */
        interface IDevice {

            /** Device id */
            id?: (string|null);

            /** Device name */
            name?: (string|null);

            /** Device deviceType */
            deviceType?: (ubii.devices.Device.DeviceType|null);

            /** Device components */
            components?: (ubii.devices.IComponent[]|null);

            /** Device clientId */
            clientId?: (string|null);

            /** Device tags */
            tags?: (string[]|null);

            /** Device description */
            description?: (string|null);
        }

        /** Represents a Device. */
        class Device implements IDevice {

            /**
             * Constructs a new Device.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.devices.IDevice);

            /** Device id. */
            public id: string;

            /** Device name. */
            public name: string;

            /** Device deviceType. */
            public deviceType: ubii.devices.Device.DeviceType;

            /** Device components. */
            public components: ubii.devices.IComponent[];

            /** Device clientId. */
            public clientId: string;

            /** Device tags. */
            public tags: string[];

            /** Device description. */
            public description: string;

            /**
             * Creates a new Device instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Device instance
             */
            public static create(properties?: ubii.devices.IDevice): ubii.devices.Device;

            /**
             * Encodes the specified Device message. Does not implicitly {@link ubii.devices.Device.verify|verify} messages.
             * @param message Device message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.devices.IDevice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Device message, length delimited. Does not implicitly {@link ubii.devices.Device.verify|verify} messages.
             * @param message Device message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.devices.IDevice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Device message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Device
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.devices.Device;

            /**
             * Decodes a Device message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Device
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.devices.Device;

            /**
             * Verifies a Device message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Device message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Device
             */
            public static fromObject(object: { [k: string]: any }): ubii.devices.Device;

            /**
             * Creates a plain object from a Device message. Also converts values to other types if specified.
             * @param message Device
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.devices.Device, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Device to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Device {

            /** DeviceType enum. */
            enum DeviceType {
                PARTICIPANT = 0,
                WATCHER = 1
            }
        }

        /** Properties of a DeviceList. */
        interface IDeviceList {

            /** DeviceList elements */
            elements?: (ubii.devices.IDevice[]|null);
        }

        /** Represents a DeviceList. */
        class DeviceList implements IDeviceList {

            /**
             * Constructs a new DeviceList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.devices.IDeviceList);

            /** DeviceList elements. */
            public elements: ubii.devices.IDevice[];

            /**
             * Creates a new DeviceList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeviceList instance
             */
            public static create(properties?: ubii.devices.IDeviceList): ubii.devices.DeviceList;

            /**
             * Encodes the specified DeviceList message. Does not implicitly {@link ubii.devices.DeviceList.verify|verify} messages.
             * @param message DeviceList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.devices.IDeviceList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeviceList message, length delimited. Does not implicitly {@link ubii.devices.DeviceList.verify|verify} messages.
             * @param message DeviceList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.devices.IDeviceList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeviceList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeviceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.devices.DeviceList;

            /**
             * Decodes a DeviceList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeviceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.devices.DeviceList;

            /**
             * Verifies a DeviceList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeviceList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeviceList
             */
            public static fromObject(object: { [k: string]: any }): ubii.devices.DeviceList;

            /**
             * Creates a plain object from a DeviceList message. Also converts values to other types if specified.
             * @param message DeviceList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.devices.DeviceList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeviceList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TopicDemux. */
        interface ITopicDemux {

            /** TopicDemux id */
            id?: (string|null);

            /** TopicDemux name */
            name?: (string|null);

            /** TopicDemux dataType */
            dataType?: (string|null);

            /** TopicDemux outputTopicFormat */
            outputTopicFormat?: (string|null);
        }

        /** Represents a TopicDemux. */
        class TopicDemux implements ITopicDemux {

            /**
             * Constructs a new TopicDemux.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.devices.ITopicDemux);

            /** TopicDemux id. */
            public id: string;

            /** TopicDemux name. */
            public name: string;

            /** TopicDemux dataType. */
            public dataType: string;

            /** TopicDemux outputTopicFormat. */
            public outputTopicFormat: string;

            /**
             * Creates a new TopicDemux instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TopicDemux instance
             */
            public static create(properties?: ubii.devices.ITopicDemux): ubii.devices.TopicDemux;

            /**
             * Encodes the specified TopicDemux message. Does not implicitly {@link ubii.devices.TopicDemux.verify|verify} messages.
             * @param message TopicDemux message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.devices.ITopicDemux, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TopicDemux message, length delimited. Does not implicitly {@link ubii.devices.TopicDemux.verify|verify} messages.
             * @param message TopicDemux message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.devices.ITopicDemux, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TopicDemux message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TopicDemux
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.devices.TopicDemux;

            /**
             * Decodes a TopicDemux message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TopicDemux
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.devices.TopicDemux;

            /**
             * Verifies a TopicDemux message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TopicDemux message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TopicDemux
             */
            public static fromObject(object: { [k: string]: any }): ubii.devices.TopicDemux;

            /**
             * Creates a plain object from a TopicDemux message. Also converts values to other types if specified.
             * @param message TopicDemux
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.devices.TopicDemux, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TopicDemux to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TopicDemuxList. */
        interface ITopicDemuxList {

            /** TopicDemuxList elements */
            elements?: (ubii.devices.ITopicDemux[]|null);
        }

        /** Represents a TopicDemuxList. */
        class TopicDemuxList implements ITopicDemuxList {

            /**
             * Constructs a new TopicDemuxList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.devices.ITopicDemuxList);

            /** TopicDemuxList elements. */
            public elements: ubii.devices.ITopicDemux[];

            /**
             * Creates a new TopicDemuxList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TopicDemuxList instance
             */
            public static create(properties?: ubii.devices.ITopicDemuxList): ubii.devices.TopicDemuxList;

            /**
             * Encodes the specified TopicDemuxList message. Does not implicitly {@link ubii.devices.TopicDemuxList.verify|verify} messages.
             * @param message TopicDemuxList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.devices.ITopicDemuxList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TopicDemuxList message, length delimited. Does not implicitly {@link ubii.devices.TopicDemuxList.verify|verify} messages.
             * @param message TopicDemuxList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.devices.ITopicDemuxList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TopicDemuxList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TopicDemuxList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.devices.TopicDemuxList;

            /**
             * Decodes a TopicDemuxList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TopicDemuxList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.devices.TopicDemuxList;

            /**
             * Verifies a TopicDemuxList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TopicDemuxList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TopicDemuxList
             */
            public static fromObject(object: { [k: string]: any }): ubii.devices.TopicDemuxList;

            /**
             * Creates a plain object from a TopicDemuxList message. Also converts values to other types if specified.
             * @param message TopicDemuxList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.devices.TopicDemuxList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TopicDemuxList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TopicMux. */
        interface ITopicMux {

            /** TopicMux id */
            id?: (string|null);

            /** TopicMux name */
            name?: (string|null);

            /** TopicMux dataType */
            dataType?: (string|null);

            /** TopicMux topicSelector */
            topicSelector?: (string|null);

            /** TopicMux identityMatchPattern */
            identityMatchPattern?: (string|null);
        }

        /** Represents a TopicMux. */
        class TopicMux implements ITopicMux {

            /**
             * Constructs a new TopicMux.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.devices.ITopicMux);

            /** TopicMux id. */
            public id: string;

            /** TopicMux name. */
            public name: string;

            /** TopicMux dataType. */
            public dataType: string;

            /** TopicMux topicSelector. */
            public topicSelector: string;

            /** TopicMux identityMatchPattern. */
            public identityMatchPattern: string;

            /**
             * Creates a new TopicMux instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TopicMux instance
             */
            public static create(properties?: ubii.devices.ITopicMux): ubii.devices.TopicMux;

            /**
             * Encodes the specified TopicMux message. Does not implicitly {@link ubii.devices.TopicMux.verify|verify} messages.
             * @param message TopicMux message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.devices.ITopicMux, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TopicMux message, length delimited. Does not implicitly {@link ubii.devices.TopicMux.verify|verify} messages.
             * @param message TopicMux message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.devices.ITopicMux, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TopicMux message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TopicMux
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.devices.TopicMux;

            /**
             * Decodes a TopicMux message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TopicMux
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.devices.TopicMux;

            /**
             * Verifies a TopicMux message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TopicMux message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TopicMux
             */
            public static fromObject(object: { [k: string]: any }): ubii.devices.TopicMux;

            /**
             * Creates a plain object from a TopicMux message. Also converts values to other types if specified.
             * @param message TopicMux
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.devices.TopicMux, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TopicMux to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TopicMuxList. */
        interface ITopicMuxList {

            /** TopicMuxList elements */
            elements?: (ubii.devices.ITopicMux[]|null);
        }

        /** Represents a TopicMuxList. */
        class TopicMuxList implements ITopicMuxList {

            /**
             * Constructs a new TopicMuxList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.devices.ITopicMuxList);

            /** TopicMuxList elements. */
            public elements: ubii.devices.ITopicMux[];

            /**
             * Creates a new TopicMuxList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TopicMuxList instance
             */
            public static create(properties?: ubii.devices.ITopicMuxList): ubii.devices.TopicMuxList;

            /**
             * Encodes the specified TopicMuxList message. Does not implicitly {@link ubii.devices.TopicMuxList.verify|verify} messages.
             * @param message TopicMuxList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.devices.ITopicMuxList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TopicMuxList message, length delimited. Does not implicitly {@link ubii.devices.TopicMuxList.verify|verify} messages.
             * @param message TopicMuxList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.devices.ITopicMuxList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TopicMuxList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TopicMuxList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.devices.TopicMuxList;

            /**
             * Decodes a TopicMuxList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TopicMuxList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.devices.TopicMuxList;

            /**
             * Verifies a TopicMuxList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TopicMuxList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TopicMuxList
             */
            public static fromObject(object: { [k: string]: any }): ubii.devices.TopicMuxList;

            /**
             * Creates a plain object from a TopicMuxList message. Also converts values to other types if specified.
             * @param message TopicMuxList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.devices.TopicMuxList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TopicMuxList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace general. */
    namespace general {

        /** Properties of an Error. */
        interface IError {

            /** Error title */
            title?: (string|null);

            /** Error message */
            message?: (string|null);

            /** Error stack */
            stack?: (string|null);
        }

        /** Represents an Error. */
        class Error implements IError {

            /**
             * Constructs a new Error.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.general.IError);

            /** Error title. */
            public title: string;

            /** Error message. */
            public message: string;

            /** Error stack. */
            public stack: string;

            /**
             * Creates a new Error instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Error instance
             */
            public static create(properties?: ubii.general.IError): ubii.general.Error;

            /**
             * Encodes the specified Error message. Does not implicitly {@link ubii.general.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.general.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link ubii.general.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.general.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.general.Error;

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.general.Error;

            /**
             * Verifies an Error message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Error
             */
            public static fromObject(object: { [k: string]: any }): ubii.general.Error;

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @param message Error
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.general.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Error to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ErrorList. */
        interface IErrorList {

            /** ErrorList elements */
            elements?: (ubii.general.IError[]|null);
        }

        /** Represents an ErrorList. */
        class ErrorList implements IErrorList {

            /**
             * Constructs a new ErrorList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.general.IErrorList);

            /** ErrorList elements. */
            public elements: ubii.general.IError[];

            /**
             * Creates a new ErrorList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ErrorList instance
             */
            public static create(properties?: ubii.general.IErrorList): ubii.general.ErrorList;

            /**
             * Encodes the specified ErrorList message. Does not implicitly {@link ubii.general.ErrorList.verify|verify} messages.
             * @param message ErrorList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.general.IErrorList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ErrorList message, length delimited. Does not implicitly {@link ubii.general.ErrorList.verify|verify} messages.
             * @param message ErrorList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.general.IErrorList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ErrorList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ErrorList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.general.ErrorList;

            /**
             * Decodes an ErrorList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ErrorList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.general.ErrorList;

            /**
             * Verifies an ErrorList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ErrorList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ErrorList
             */
            public static fromObject(object: { [k: string]: any }): ubii.general.ErrorList;

            /**
             * Creates a plain object from an ErrorList message. Also converts values to other types if specified.
             * @param message ErrorList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.general.ErrorList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ErrorList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Success. */
        interface ISuccess {

            /** Success title */
            title?: (string|null);

            /** Success message */
            message?: (string|null);
        }

        /** Represents a Success. */
        class Success implements ISuccess {

            /**
             * Constructs a new Success.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.general.ISuccess);

            /** Success title. */
            public title: string;

            /** Success message. */
            public message: string;

            /**
             * Creates a new Success instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Success instance
             */
            public static create(properties?: ubii.general.ISuccess): ubii.general.Success;

            /**
             * Encodes the specified Success message. Does not implicitly {@link ubii.general.Success.verify|verify} messages.
             * @param message Success message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.general.ISuccess, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Success message, length delimited. Does not implicitly {@link ubii.general.Success.verify|verify} messages.
             * @param message Success message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.general.ISuccess, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Success message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Success
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.general.Success;

            /**
             * Decodes a Success message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Success
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.general.Success;

            /**
             * Verifies a Success message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Success message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Success
             */
            public static fromObject(object: { [k: string]: any }): ubii.general.Success;

            /**
             * Creates a plain object from a Success message. Also converts values to other types if specified.
             * @param message Success
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.general.Success, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Success to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SuccessList. */
        interface ISuccessList {

            /** SuccessList elements */
            elements?: (ubii.general.ISuccess[]|null);
        }

        /** Represents a SuccessList. */
        class SuccessList implements ISuccessList {

            /**
             * Constructs a new SuccessList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.general.ISuccessList);

            /** SuccessList elements. */
            public elements: ubii.general.ISuccess[];

            /**
             * Creates a new SuccessList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SuccessList instance
             */
            public static create(properties?: ubii.general.ISuccessList): ubii.general.SuccessList;

            /**
             * Encodes the specified SuccessList message. Does not implicitly {@link ubii.general.SuccessList.verify|verify} messages.
             * @param message SuccessList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.general.ISuccessList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SuccessList message, length delimited. Does not implicitly {@link ubii.general.SuccessList.verify|verify} messages.
             * @param message SuccessList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.general.ISuccessList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SuccessList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SuccessList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.general.SuccessList;

            /**
             * Decodes a SuccessList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SuccessList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.general.SuccessList;

            /**
             * Verifies a SuccessList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SuccessList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SuccessList
             */
            public static fromObject(object: { [k: string]: any }): ubii.general.SuccessList;

            /**
             * Creates a plain object from a SuccessList message. Also converts values to other types if specified.
             * @param message SuccessList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.general.SuccessList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SuccessList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace processing. */
    namespace processing {

        /** Properties of a LockstepProcessingRequest. */
        interface ILockstepProcessingRequest {

            /** LockstepProcessingRequest processingModuleIds */
            processingModuleIds?: (string[]|null);

            /** LockstepProcessingRequest records */
            records?: (ubii.topicData.ITopicDataRecord[]|null);

            /** LockstepProcessingRequest deltaTimeMs */
            deltaTimeMs?: (number|null);
        }

        /** Represents a LockstepProcessingRequest. */
        class LockstepProcessingRequest implements ILockstepProcessingRequest {

            /**
             * Constructs a new LockstepProcessingRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.processing.ILockstepProcessingRequest);

            /** LockstepProcessingRequest processingModuleIds. */
            public processingModuleIds: string[];

            /** LockstepProcessingRequest records. */
            public records: ubii.topicData.ITopicDataRecord[];

            /** LockstepProcessingRequest deltaTimeMs. */
            public deltaTimeMs: number;

            /**
             * Creates a new LockstepProcessingRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LockstepProcessingRequest instance
             */
            public static create(properties?: ubii.processing.ILockstepProcessingRequest): ubii.processing.LockstepProcessingRequest;

            /**
             * Encodes the specified LockstepProcessingRequest message. Does not implicitly {@link ubii.processing.LockstepProcessingRequest.verify|verify} messages.
             * @param message LockstepProcessingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.processing.ILockstepProcessingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LockstepProcessingRequest message, length delimited. Does not implicitly {@link ubii.processing.LockstepProcessingRequest.verify|verify} messages.
             * @param message LockstepProcessingRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.processing.ILockstepProcessingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LockstepProcessingRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LockstepProcessingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.processing.LockstepProcessingRequest;

            /**
             * Decodes a LockstepProcessingRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LockstepProcessingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.processing.LockstepProcessingRequest;

            /**
             * Verifies a LockstepProcessingRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LockstepProcessingRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LockstepProcessingRequest
             */
            public static fromObject(object: { [k: string]: any }): ubii.processing.LockstepProcessingRequest;

            /**
             * Creates a plain object from a LockstepProcessingRequest message. Also converts values to other types if specified.
             * @param message LockstepProcessingRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.processing.LockstepProcessingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LockstepProcessingRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LockstepProcessingReply. */
        interface ILockstepProcessingReply {

            /** LockstepProcessingReply processingModuleIds */
            processingModuleIds?: (string[]|null);

            /** LockstepProcessingReply records */
            records?: (ubii.topicData.ITopicDataRecord[]|null);
        }

        /** Represents a LockstepProcessingReply. */
        class LockstepProcessingReply implements ILockstepProcessingReply {

            /**
             * Constructs a new LockstepProcessingReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.processing.ILockstepProcessingReply);

            /** LockstepProcessingReply processingModuleIds. */
            public processingModuleIds: string[];

            /** LockstepProcessingReply records. */
            public records: ubii.topicData.ITopicDataRecord[];

            /**
             * Creates a new LockstepProcessingReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LockstepProcessingReply instance
             */
            public static create(properties?: ubii.processing.ILockstepProcessingReply): ubii.processing.LockstepProcessingReply;

            /**
             * Encodes the specified LockstepProcessingReply message. Does not implicitly {@link ubii.processing.LockstepProcessingReply.verify|verify} messages.
             * @param message LockstepProcessingReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.processing.ILockstepProcessingReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LockstepProcessingReply message, length delimited. Does not implicitly {@link ubii.processing.LockstepProcessingReply.verify|verify} messages.
             * @param message LockstepProcessingReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.processing.ILockstepProcessingReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LockstepProcessingReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LockstepProcessingReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.processing.LockstepProcessingReply;

            /**
             * Decodes a LockstepProcessingReply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LockstepProcessingReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.processing.LockstepProcessingReply;

            /**
             * Verifies a LockstepProcessingReply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LockstepProcessingReply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LockstepProcessingReply
             */
            public static fromObject(object: { [k: string]: any }): ubii.processing.LockstepProcessingReply;

            /**
             * Creates a plain object from a LockstepProcessingReply message. Also converts values to other types if specified.
             * @param message LockstepProcessingReply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.processing.LockstepProcessingReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LockstepProcessingReply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProcessingMode. */
        interface IProcessingMode {

            /** ProcessingMode frequency */
            frequency?: (ubii.processing.ProcessingMode.IFrequency|null);

            /** ProcessingMode lockstep */
            lockstep?: (ubii.processing.ProcessingMode.ILockstep|null);

            /** ProcessingMode triggerOnInput */
            triggerOnInput?: (ubii.processing.ProcessingMode.ITriggerOnInput|null);

            /** ProcessingMode free */
            free?: (ubii.processing.ProcessingMode.IFree|null);
        }

        /** Represents a ProcessingMode. */
        class ProcessingMode implements IProcessingMode {

            /**
             * Constructs a new ProcessingMode.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.processing.IProcessingMode);

            /** ProcessingMode frequency. */
            public frequency?: (ubii.processing.ProcessingMode.IFrequency|null);

            /** ProcessingMode lockstep. */
            public lockstep?: (ubii.processing.ProcessingMode.ILockstep|null);

            /** ProcessingMode triggerOnInput. */
            public triggerOnInput?: (ubii.processing.ProcessingMode.ITriggerOnInput|null);

            /** ProcessingMode free. */
            public free?: (ubii.processing.ProcessingMode.IFree|null);

            /** ProcessingMode mode. */
            public mode?: ("frequency"|"lockstep"|"triggerOnInput"|"free");

            /**
             * Creates a new ProcessingMode instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessingMode instance
             */
            public static create(properties?: ubii.processing.IProcessingMode): ubii.processing.ProcessingMode;

            /**
             * Encodes the specified ProcessingMode message. Does not implicitly {@link ubii.processing.ProcessingMode.verify|verify} messages.
             * @param message ProcessingMode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.processing.IProcessingMode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessingMode message, length delimited. Does not implicitly {@link ubii.processing.ProcessingMode.verify|verify} messages.
             * @param message ProcessingMode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.processing.IProcessingMode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessingMode message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessingMode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.processing.ProcessingMode;

            /**
             * Decodes a ProcessingMode message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessingMode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.processing.ProcessingMode;

            /**
             * Verifies a ProcessingMode message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProcessingMode message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProcessingMode
             */
            public static fromObject(object: { [k: string]: any }): ubii.processing.ProcessingMode;

            /**
             * Creates a plain object from a ProcessingMode message. Also converts values to other types if specified.
             * @param message ProcessingMode
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.processing.ProcessingMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProcessingMode to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ProcessingMode {

            /** Properties of a Frequency. */
            interface IFrequency {

                /** Frequency hertz */
                hertz?: (number|null);
            }

            /** Represents a Frequency. */
            class Frequency implements IFrequency {

                /**
                 * Constructs a new Frequency.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ubii.processing.ProcessingMode.IFrequency);

                /** Frequency hertz. */
                public hertz: number;

                /**
                 * Creates a new Frequency instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Frequency instance
                 */
                public static create(properties?: ubii.processing.ProcessingMode.IFrequency): ubii.processing.ProcessingMode.Frequency;

                /**
                 * Encodes the specified Frequency message. Does not implicitly {@link ubii.processing.ProcessingMode.Frequency.verify|verify} messages.
                 * @param message Frequency message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ubii.processing.ProcessingMode.IFrequency, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Frequency message, length delimited. Does not implicitly {@link ubii.processing.ProcessingMode.Frequency.verify|verify} messages.
                 * @param message Frequency message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ubii.processing.ProcessingMode.IFrequency, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Frequency message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Frequency
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.processing.ProcessingMode.Frequency;

                /**
                 * Decodes a Frequency message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Frequency
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.processing.ProcessingMode.Frequency;

                /**
                 * Verifies a Frequency message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Frequency message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Frequency
                 */
                public static fromObject(object: { [k: string]: any }): ubii.processing.ProcessingMode.Frequency;

                /**
                 * Creates a plain object from a Frequency message. Also converts values to other types if specified.
                 * @param message Frequency
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ubii.processing.ProcessingMode.Frequency, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Frequency to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Lockstep. */
            interface ILockstep {

                /** Lockstep processRequestEndpoint */
                processRequestEndpoint?: (string|null);
            }

            /** Represents a Lockstep. */
            class Lockstep implements ILockstep {

                /**
                 * Constructs a new Lockstep.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ubii.processing.ProcessingMode.ILockstep);

                /** Lockstep processRequestEndpoint. */
                public processRequestEndpoint: string;

                /**
                 * Creates a new Lockstep instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Lockstep instance
                 */
                public static create(properties?: ubii.processing.ProcessingMode.ILockstep): ubii.processing.ProcessingMode.Lockstep;

                /**
                 * Encodes the specified Lockstep message. Does not implicitly {@link ubii.processing.ProcessingMode.Lockstep.verify|verify} messages.
                 * @param message Lockstep message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ubii.processing.ProcessingMode.ILockstep, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Lockstep message, length delimited. Does not implicitly {@link ubii.processing.ProcessingMode.Lockstep.verify|verify} messages.
                 * @param message Lockstep message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ubii.processing.ProcessingMode.ILockstep, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Lockstep message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Lockstep
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.processing.ProcessingMode.Lockstep;

                /**
                 * Decodes a Lockstep message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Lockstep
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.processing.ProcessingMode.Lockstep;

                /**
                 * Verifies a Lockstep message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Lockstep message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Lockstep
                 */
                public static fromObject(object: { [k: string]: any }): ubii.processing.ProcessingMode.Lockstep;

                /**
                 * Creates a plain object from a Lockstep message. Also converts values to other types if specified.
                 * @param message Lockstep
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ubii.processing.ProcessingMode.Lockstep, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Lockstep to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TriggerOnInput. */
            interface ITriggerOnInput {

                /** TriggerOnInput minDelayMs */
                minDelayMs?: (number|null);

                /** TriggerOnInput allInputsNeedUpdate */
                allInputsNeedUpdate?: (boolean|null);
            }

            /** Represents a TriggerOnInput. */
            class TriggerOnInput implements ITriggerOnInput {

                /**
                 * Constructs a new TriggerOnInput.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ubii.processing.ProcessingMode.ITriggerOnInput);

                /** TriggerOnInput minDelayMs. */
                public minDelayMs: number;

                /** TriggerOnInput allInputsNeedUpdate. */
                public allInputsNeedUpdate: boolean;

                /**
                 * Creates a new TriggerOnInput instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TriggerOnInput instance
                 */
                public static create(properties?: ubii.processing.ProcessingMode.ITriggerOnInput): ubii.processing.ProcessingMode.TriggerOnInput;

                /**
                 * Encodes the specified TriggerOnInput message. Does not implicitly {@link ubii.processing.ProcessingMode.TriggerOnInput.verify|verify} messages.
                 * @param message TriggerOnInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ubii.processing.ProcessingMode.ITriggerOnInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TriggerOnInput message, length delimited. Does not implicitly {@link ubii.processing.ProcessingMode.TriggerOnInput.verify|verify} messages.
                 * @param message TriggerOnInput message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ubii.processing.ProcessingMode.ITriggerOnInput, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TriggerOnInput message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TriggerOnInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.processing.ProcessingMode.TriggerOnInput;

                /**
                 * Decodes a TriggerOnInput message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TriggerOnInput
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.processing.ProcessingMode.TriggerOnInput;

                /**
                 * Verifies a TriggerOnInput message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TriggerOnInput message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TriggerOnInput
                 */
                public static fromObject(object: { [k: string]: any }): ubii.processing.ProcessingMode.TriggerOnInput;

                /**
                 * Creates a plain object from a TriggerOnInput message. Also converts values to other types if specified.
                 * @param message TriggerOnInput
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ubii.processing.ProcessingMode.TriggerOnInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TriggerOnInput to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Free. */
            interface IFree {
            }

            /** Represents a Free. */
            class Free implements IFree {

                /**
                 * Constructs a new Free.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ubii.processing.ProcessingMode.IFree);

                /**
                 * Creates a new Free instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Free instance
                 */
                public static create(properties?: ubii.processing.ProcessingMode.IFree): ubii.processing.ProcessingMode.Free;

                /**
                 * Encodes the specified Free message. Does not implicitly {@link ubii.processing.ProcessingMode.Free.verify|verify} messages.
                 * @param message Free message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ubii.processing.ProcessingMode.IFree, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Free message, length delimited. Does not implicitly {@link ubii.processing.ProcessingMode.Free.verify|verify} messages.
                 * @param message Free message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ubii.processing.ProcessingMode.IFree, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Free message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Free
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.processing.ProcessingMode.Free;

                /**
                 * Decodes a Free message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Free
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.processing.ProcessingMode.Free;

                /**
                 * Verifies a Free message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Free message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Free
                 */
                public static fromObject(object: { [k: string]: any }): ubii.processing.ProcessingMode.Free;

                /**
                 * Creates a plain object from a Free message. Also converts values to other types if specified.
                 * @param message Free
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ubii.processing.ProcessingMode.Free, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Free to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a ModuleIO. */
        interface IModuleIO {

            /** ModuleIO internalName */
            internalName?: (string|null);

            /** ModuleIO messageFormat */
            messageFormat?: (string|null);

            /** ModuleIO isRecordList */
            isRecordList?: (boolean|null);
        }

        /** Represents a ModuleIO. */
        class ModuleIO implements IModuleIO {

            /**
             * Constructs a new ModuleIO.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.processing.IModuleIO);

            /** ModuleIO internalName. */
            public internalName: string;

            /** ModuleIO messageFormat. */
            public messageFormat: string;

            /** ModuleIO isRecordList. */
            public isRecordList: boolean;

            /**
             * Creates a new ModuleIO instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ModuleIO instance
             */
            public static create(properties?: ubii.processing.IModuleIO): ubii.processing.ModuleIO;

            /**
             * Encodes the specified ModuleIO message. Does not implicitly {@link ubii.processing.ModuleIO.verify|verify} messages.
             * @param message ModuleIO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.processing.IModuleIO, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ModuleIO message, length delimited. Does not implicitly {@link ubii.processing.ModuleIO.verify|verify} messages.
             * @param message ModuleIO message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.processing.IModuleIO, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ModuleIO message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ModuleIO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.processing.ModuleIO;

            /**
             * Decodes a ModuleIO message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ModuleIO
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.processing.ModuleIO;

            /**
             * Verifies a ModuleIO message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ModuleIO message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ModuleIO
             */
            public static fromObject(object: { [k: string]: any }): ubii.processing.ModuleIO;

            /**
             * Creates a plain object from a ModuleIO message. Also converts values to other types if specified.
             * @param message ModuleIO
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.processing.ModuleIO, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ModuleIO to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ProcessingModule. */
        interface IProcessingModule {

            /** ProcessingModule id */
            id?: (string|null);

            /** ProcessingModule name */
            name?: (string|null);

            /** ProcessingModule authors */
            authors?: (string[]|null);

            /** ProcessingModule tags */
            tags?: (string[]|null);

            /** ProcessingModule description */
            description?: (string|null);

            /** ProcessingModule nodeId */
            nodeId?: (string|null);

            /** ProcessingModule sessionId */
            sessionId?: (string|null);

            /** ProcessingModule status */
            status?: (ubii.processing.ProcessingModule.Status|null);

            /** ProcessingModule processingMode */
            processingMode?: (ubii.processing.IProcessingMode|null);

            /** ProcessingModule inputs */
            inputs?: (ubii.processing.IModuleIO[]|null);

            /** ProcessingModule outputs */
            outputs?: (ubii.processing.IModuleIO[]|null);

            /** ProcessingModule language */
            language?: (ubii.processing.ProcessingModule.Language|null);

            /** ProcessingModule onProcessingStringified */
            onProcessingStringified?: (string|null);

            /** ProcessingModule onCreatedStringified */
            onCreatedStringified?: (string|null);

            /** ProcessingModule onHaltedStringified */
            onHaltedStringified?: (string|null);

            /** ProcessingModule onDestroyedStringified */
            onDestroyedStringified?: (string|null);
        }

        /** Represents a ProcessingModule. */
        class ProcessingModule implements IProcessingModule {

            /**
             * Constructs a new ProcessingModule.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.processing.IProcessingModule);

            /** ProcessingModule id. */
            public id: string;

            /** ProcessingModule name. */
            public name: string;

            /** ProcessingModule authors. */
            public authors: string[];

            /** ProcessingModule tags. */
            public tags: string[];

            /** ProcessingModule description. */
            public description: string;

            /** ProcessingModule nodeId. */
            public nodeId: string;

            /** ProcessingModule sessionId. */
            public sessionId: string;

            /** ProcessingModule status. */
            public status: ubii.processing.ProcessingModule.Status;

            /** ProcessingModule processingMode. */
            public processingMode?: (ubii.processing.IProcessingMode|null);

            /** ProcessingModule inputs. */
            public inputs: ubii.processing.IModuleIO[];

            /** ProcessingModule outputs. */
            public outputs: ubii.processing.IModuleIO[];

            /** ProcessingModule language. */
            public language: ubii.processing.ProcessingModule.Language;

            /** ProcessingModule onProcessingStringified. */
            public onProcessingStringified: string;

            /** ProcessingModule onCreatedStringified. */
            public onCreatedStringified: string;

            /** ProcessingModule onHaltedStringified. */
            public onHaltedStringified: string;

            /** ProcessingModule onDestroyedStringified. */
            public onDestroyedStringified: string;

            /**
             * Creates a new ProcessingModule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessingModule instance
             */
            public static create(properties?: ubii.processing.IProcessingModule): ubii.processing.ProcessingModule;

            /**
             * Encodes the specified ProcessingModule message. Does not implicitly {@link ubii.processing.ProcessingModule.verify|verify} messages.
             * @param message ProcessingModule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.processing.IProcessingModule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessingModule message, length delimited. Does not implicitly {@link ubii.processing.ProcessingModule.verify|verify} messages.
             * @param message ProcessingModule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.processing.IProcessingModule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessingModule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessingModule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.processing.ProcessingModule;

            /**
             * Decodes a ProcessingModule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessingModule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.processing.ProcessingModule;

            /**
             * Verifies a ProcessingModule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProcessingModule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProcessingModule
             */
            public static fromObject(object: { [k: string]: any }): ubii.processing.ProcessingModule;

            /**
             * Creates a plain object from a ProcessingModule message. Also converts values to other types if specified.
             * @param message ProcessingModule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.processing.ProcessingModule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProcessingModule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ProcessingModule {

            /** Status enum. */
            enum Status {
                INITIALIZED = 0,
                CREATED = 1,
                PROCESSING = 2,
                HALTED = 3,
                DESTROYED = 4
            }

            /** Language enum. */
            enum Language {
                CPP = 0,
                PY = 1,
                JS = 2,
                CS = 3,
                JAVA = 4
            }
        }

        /** Properties of a ProcessingModuleList. */
        interface IProcessingModuleList {

            /** ProcessingModuleList elements */
            elements?: (ubii.processing.IProcessingModule[]|null);
        }

        /** Represents a ProcessingModuleList. */
        class ProcessingModuleList implements IProcessingModuleList {

            /**
             * Constructs a new ProcessingModuleList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.processing.IProcessingModuleList);

            /** ProcessingModuleList elements. */
            public elements: ubii.processing.IProcessingModule[];

            /**
             * Creates a new ProcessingModuleList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessingModuleList instance
             */
            public static create(properties?: ubii.processing.IProcessingModuleList): ubii.processing.ProcessingModuleList;

            /**
             * Encodes the specified ProcessingModuleList message. Does not implicitly {@link ubii.processing.ProcessingModuleList.verify|verify} messages.
             * @param message ProcessingModuleList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.processing.IProcessingModuleList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessingModuleList message, length delimited. Does not implicitly {@link ubii.processing.ProcessingModuleList.verify|verify} messages.
             * @param message ProcessingModuleList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.processing.IProcessingModuleList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessingModuleList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessingModuleList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.processing.ProcessingModuleList;

            /**
             * Decodes a ProcessingModuleList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessingModuleList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.processing.ProcessingModuleList;

            /**
             * Verifies a ProcessingModuleList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProcessingModuleList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProcessingModuleList
             */
            public static fromObject(object: { [k: string]: any }): ubii.processing.ProcessingModuleList;

            /**
             * Creates a plain object from a ProcessingModuleList message. Also converts values to other types if specified.
             * @param message ProcessingModuleList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.processing.ProcessingModuleList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProcessingModuleList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace servers. */
    namespace servers {

        /** Properties of a Server. */
        interface IServer {

            /** Server id */
            id?: (string|null);

            /** Server name */
            name?: (string|null);

            /** Server ipEthernet */
            ipEthernet?: (string|null);

            /** Server ipWlan */
            ipWlan?: (string|null);

            /** Server portServiceZmq */
            portServiceZmq?: (string|null);

            /** Server portServiceRest */
            portServiceRest?: (string|null);

            /** Server portTopicDataZmq */
            portTopicDataZmq?: (string|null);

            /** Server portTopicDataWs */
            portTopicDataWs?: (string|null);

            /** Server constantsJson */
            constantsJson?: (string|null);

            /** Server externalAddressServiceZmq */
            externalAddressServiceZmq?: (string|null);

            /** Server externalAddressServiceHttpJson */
            externalAddressServiceHttpJson?: (string|null);

            /** Server externalAddressServiceHttpBinary */
            externalAddressServiceHttpBinary?: (string|null);

            /** Server externalAddressTopicDataZmq */
            externalAddressTopicDataZmq?: (string|null);

            /** Server externalAddressTopicDataWs */
            externalAddressTopicDataWs?: (string|null);
        }

        /** Represents a Server. */
        class Server implements IServer {

            /**
             * Constructs a new Server.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.servers.IServer);

            /** Server id. */
            public id: string;

            /** Server name. */
            public name: string;

            /** Server ipEthernet. */
            public ipEthernet: string;

            /** Server ipWlan. */
            public ipWlan: string;

            /** Server portServiceZmq. */
            public portServiceZmq: string;

            /** Server portServiceRest. */
            public portServiceRest: string;

            /** Server portTopicDataZmq. */
            public portTopicDataZmq: string;

            /** Server portTopicDataWs. */
            public portTopicDataWs: string;

            /** Server constantsJson. */
            public constantsJson: string;

            /** Server externalAddressServiceZmq. */
            public externalAddressServiceZmq: string;

            /** Server externalAddressServiceHttpJson. */
            public externalAddressServiceHttpJson: string;

            /** Server externalAddressServiceHttpBinary. */
            public externalAddressServiceHttpBinary: string;

            /** Server externalAddressTopicDataZmq. */
            public externalAddressTopicDataZmq: string;

            /** Server externalAddressTopicDataWs. */
            public externalAddressTopicDataWs: string;

            /**
             * Creates a new Server instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Server instance
             */
            public static create(properties?: ubii.servers.IServer): ubii.servers.Server;

            /**
             * Encodes the specified Server message. Does not implicitly {@link ubii.servers.Server.verify|verify} messages.
             * @param message Server message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.servers.IServer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Server message, length delimited. Does not implicitly {@link ubii.servers.Server.verify|verify} messages.
             * @param message Server message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.servers.IServer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Server message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Server
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.servers.Server;

            /**
             * Decodes a Server message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Server
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.servers.Server;

            /**
             * Verifies a Server message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Server message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Server
             */
            public static fromObject(object: { [k: string]: any }): ubii.servers.Server;

            /**
             * Creates a plain object from a Server message. Also converts values to other types if specified.
             * @param message Server
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.servers.Server, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Server to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace services. */
    namespace services {

        /** Namespace request. */
        namespace request {

            /** Properties of a TopicSubscription. */
            interface ITopicSubscription {

                /** TopicSubscription clientId */
                clientId?: (string|null);

                /** TopicSubscription subscribeTopics */
                subscribeTopics?: (string[]|null);

                /** TopicSubscription unsubscribeTopics */
                unsubscribeTopics?: (string[]|null);

                /** TopicSubscription subscribeTopicRegexp */
                subscribeTopicRegexp?: (string[]|null);

                /** TopicSubscription unsubscribeTopicRegexp */
                unsubscribeTopicRegexp?: (string[]|null);

                /** TopicSubscription subscribeComponents */
                subscribeComponents?: (ubii.devices.IComponent[]|null);

                /** TopicSubscription unsubscribeComponents */
                unsubscribeComponents?: (ubii.devices.IComponent[]|null);
            }

            /** Represents a TopicSubscription. */
            class TopicSubscription implements ITopicSubscription {

                /**
                 * Constructs a new TopicSubscription.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ubii.services.request.ITopicSubscription);

                /** TopicSubscription clientId. */
                public clientId: string;

                /** TopicSubscription subscribeTopics. */
                public subscribeTopics: string[];

                /** TopicSubscription unsubscribeTopics. */
                public unsubscribeTopics: string[];

                /** TopicSubscription subscribeTopicRegexp. */
                public subscribeTopicRegexp: string[];

                /** TopicSubscription unsubscribeTopicRegexp. */
                public unsubscribeTopicRegexp: string[];

                /** TopicSubscription subscribeComponents. */
                public subscribeComponents: ubii.devices.IComponent[];

                /** TopicSubscription unsubscribeComponents. */
                public unsubscribeComponents: ubii.devices.IComponent[];

                /**
                 * Creates a new TopicSubscription instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TopicSubscription instance
                 */
                public static create(properties?: ubii.services.request.ITopicSubscription): ubii.services.request.TopicSubscription;

                /**
                 * Encodes the specified TopicSubscription message. Does not implicitly {@link ubii.services.request.TopicSubscription.verify|verify} messages.
                 * @param message TopicSubscription message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ubii.services.request.ITopicSubscription, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TopicSubscription message, length delimited. Does not implicitly {@link ubii.services.request.TopicSubscription.verify|verify} messages.
                 * @param message TopicSubscription message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ubii.services.request.ITopicSubscription, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TopicSubscription message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TopicSubscription
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.services.request.TopicSubscription;

                /**
                 * Decodes a TopicSubscription message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TopicSubscription
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.services.request.TopicSubscription;

                /**
                 * Verifies a TopicSubscription message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TopicSubscription message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TopicSubscription
                 */
                public static fromObject(object: { [k: string]: any }): ubii.services.request.TopicSubscription;

                /**
                 * Creates a plain object from a TopicSubscription message. Also converts values to other types if specified.
                 * @param message TopicSubscription
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ubii.services.request.TopicSubscription, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TopicSubscription to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Service. */
        interface IService {

            /** Service topic */
            topic?: (string|null);

            /** Service requestMessageFormat */
            requestMessageFormat?: (string|null);

            /** Service responseMessageFormat */
            responseMessageFormat?: (string|null);

            /** Service tags */
            tags?: (string[]|null);

            /** Service description */
            description?: (string|null);
        }

        /** Represents a Service. */
        class Service implements IService {

            /**
             * Constructs a new Service.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.services.IService);

            /** Service topic. */
            public topic: string;

            /** Service requestMessageFormat. */
            public requestMessageFormat: string;

            /** Service responseMessageFormat. */
            public responseMessageFormat: string;

            /** Service tags. */
            public tags: string[];

            /** Service description. */
            public description: string;

            /**
             * Creates a new Service instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Service instance
             */
            public static create(properties?: ubii.services.IService): ubii.services.Service;

            /**
             * Encodes the specified Service message. Does not implicitly {@link ubii.services.Service.verify|verify} messages.
             * @param message Service message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.services.IService, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Service message, length delimited. Does not implicitly {@link ubii.services.Service.verify|verify} messages.
             * @param message Service message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.services.IService, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Service message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Service
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.services.Service;

            /**
             * Decodes a Service message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Service
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.services.Service;

            /**
             * Verifies a Service message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Service message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Service
             */
            public static fromObject(object: { [k: string]: any }): ubii.services.Service;

            /**
             * Creates a plain object from a Service message. Also converts values to other types if specified.
             * @param message Service
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.services.Service, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Service to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceList. */
        interface IServiceList {

            /** ServiceList elements */
            elements?: (ubii.services.IService[]|null);
        }

        /** Represents a ServiceList. */
        class ServiceList implements IServiceList {

            /**
             * Constructs a new ServiceList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.services.IServiceList);

            /** ServiceList elements. */
            public elements: ubii.services.IService[];

            /**
             * Creates a new ServiceList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceList instance
             */
            public static create(properties?: ubii.services.IServiceList): ubii.services.ServiceList;

            /**
             * Encodes the specified ServiceList message. Does not implicitly {@link ubii.services.ServiceList.verify|verify} messages.
             * @param message ServiceList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.services.IServiceList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceList message, length delimited. Does not implicitly {@link ubii.services.ServiceList.verify|verify} messages.
             * @param message ServiceList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.services.IServiceList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.services.ServiceList;

            /**
             * Decodes a ServiceList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.services.ServiceList;

            /**
             * Verifies a ServiceList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceList
             */
            public static fromObject(object: { [k: string]: any }): ubii.services.ServiceList;

            /**
             * Creates a plain object from a ServiceList message. Also converts values to other types if specified.
             * @param message ServiceList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.services.ServiceList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceReply. */
        interface IServiceReply {

            /** ServiceReply success */
            success?: (ubii.general.ISuccess|null);

            /** ServiceReply error */
            error?: (ubii.general.IError|null);

            /** ServiceReply client */
            client?: (ubii.clients.IClient|null);

            /** ServiceReply device */
            device?: (ubii.devices.IDevice|null);

            /** ServiceReply server */
            server?: (ubii.servers.IServer|null);

            /** ServiceReply session */
            session?: (ubii.sessions.ISession|null);

            /** ServiceReply sessionList */
            sessionList?: (ubii.sessions.ISessionList|null);

            /** ServiceReply processingModule */
            processingModule?: (ubii.processing.IProcessingModule|null);

            /** ServiceReply processingModuleList */
            processingModuleList?: (ubii.processing.IProcessingModuleList|null);

            /** ServiceReply stringList */
            stringList?: (ubii.dataStructure.IStringList|null);

            /** ServiceReply topicMux */
            topicMux?: (ubii.devices.ITopicMux|null);

            /** ServiceReply topicMuxList */
            topicMuxList?: (ubii.devices.ITopicMuxList|null);

            /** ServiceReply topicDemux */
            topicDemux?: (ubii.devices.ITopicDemux|null);

            /** ServiceReply topicDemuxList */
            topicDemuxList?: (ubii.devices.ITopicDemuxList|null);

            /** ServiceReply clientList */
            clientList?: (ubii.clients.IClientList|null);

            /** ServiceReply deviceList */
            deviceList?: (ubii.devices.IDeviceList|null);

            /** ServiceReply service */
            service?: (ubii.services.IService|null);

            /** ServiceReply serviceList */
            serviceList?: (ubii.services.IServiceList|null);

            /** ServiceReply lockstepProcessingReply */
            lockstepProcessingReply?: (ubii.processing.ILockstepProcessingReply|null);

            /** ServiceReply component */
            component?: (ubii.devices.IComponent|null);

            /** ServiceReply componentList */
            componentList?: (ubii.devices.IComponentList|null);

            /** ServiceReply notifyCondition */
            notifyCondition?: (ubii.conditions.INotifyCondition|null);
        }

        /** Represents a ServiceReply. */
        class ServiceReply implements IServiceReply {

            /**
             * Constructs a new ServiceReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.services.IServiceReply);

            /** ServiceReply success. */
            public success?: (ubii.general.ISuccess|null);

            /** ServiceReply error. */
            public error?: (ubii.general.IError|null);

            /** ServiceReply client. */
            public client?: (ubii.clients.IClient|null);

            /** ServiceReply device. */
            public device?: (ubii.devices.IDevice|null);

            /** ServiceReply server. */
            public server?: (ubii.servers.IServer|null);

            /** ServiceReply session. */
            public session?: (ubii.sessions.ISession|null);

            /** ServiceReply sessionList. */
            public sessionList?: (ubii.sessions.ISessionList|null);

            /** ServiceReply processingModule. */
            public processingModule?: (ubii.processing.IProcessingModule|null);

            /** ServiceReply processingModuleList. */
            public processingModuleList?: (ubii.processing.IProcessingModuleList|null);

            /** ServiceReply stringList. */
            public stringList?: (ubii.dataStructure.IStringList|null);

            /** ServiceReply topicMux. */
            public topicMux?: (ubii.devices.ITopicMux|null);

            /** ServiceReply topicMuxList. */
            public topicMuxList?: (ubii.devices.ITopicMuxList|null);

            /** ServiceReply topicDemux. */
            public topicDemux?: (ubii.devices.ITopicDemux|null);

            /** ServiceReply topicDemuxList. */
            public topicDemuxList?: (ubii.devices.ITopicDemuxList|null);

            /** ServiceReply clientList. */
            public clientList?: (ubii.clients.IClientList|null);

            /** ServiceReply deviceList. */
            public deviceList?: (ubii.devices.IDeviceList|null);

            /** ServiceReply service. */
            public service?: (ubii.services.IService|null);

            /** ServiceReply serviceList. */
            public serviceList?: (ubii.services.IServiceList|null);

            /** ServiceReply lockstepProcessingReply. */
            public lockstepProcessingReply?: (ubii.processing.ILockstepProcessingReply|null);

            /** ServiceReply component. */
            public component?: (ubii.devices.IComponent|null);

            /** ServiceReply componentList. */
            public componentList?: (ubii.devices.IComponentList|null);

            /** ServiceReply notifyCondition. */
            public notifyCondition?: (ubii.conditions.INotifyCondition|null);

            /** ServiceReply type. */
            public type?: ("success"|"error"|"client"|"device"|"server"|"session"|"sessionList"|"processingModule"|"processingModuleList"|"stringList"|"topicMux"|"topicMuxList"|"topicDemux"|"topicDemuxList"|"clientList"|"deviceList"|"service"|"serviceList"|"lockstepProcessingReply"|"component"|"componentList"|"notifyCondition");

            /**
             * Creates a new ServiceReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceReply instance
             */
            public static create(properties?: ubii.services.IServiceReply): ubii.services.ServiceReply;

            /**
             * Encodes the specified ServiceReply message. Does not implicitly {@link ubii.services.ServiceReply.verify|verify} messages.
             * @param message ServiceReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.services.IServiceReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceReply message, length delimited. Does not implicitly {@link ubii.services.ServiceReply.verify|verify} messages.
             * @param message ServiceReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.services.IServiceReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.services.ServiceReply;

            /**
             * Decodes a ServiceReply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.services.ServiceReply;

            /**
             * Verifies a ServiceReply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceReply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceReply
             */
            public static fromObject(object: { [k: string]: any }): ubii.services.ServiceReply;

            /**
             * Creates a plain object from a ServiceReply message. Also converts values to other types if specified.
             * @param message ServiceReply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.services.ServiceReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceReply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceRequest. */
        interface IServiceRequest {

            /** ServiceRequest topic */
            topic?: (string|null);

            /** ServiceRequest client */
            client?: (ubii.clients.IClient|null);

            /** ServiceRequest device */
            device?: (ubii.devices.IDevice|null);

            /** ServiceRequest topicSubscription */
            topicSubscription?: (ubii.services.request.ITopicSubscription|null);

            /** ServiceRequest session */
            session?: (ubii.sessions.ISession|null);

            /** ServiceRequest sessionList */
            sessionList?: (ubii.sessions.ISessionList|null);

            /** ServiceRequest processingModule */
            processingModule?: (ubii.processing.IProcessingModule|null);

            /** ServiceRequest processingModuleList */
            processingModuleList?: (ubii.processing.IProcessingModuleList|null);

            /** ServiceRequest topicMux */
            topicMux?: (ubii.devices.ITopicMux|null);

            /** ServiceRequest topicMuxList */
            topicMuxList?: (ubii.devices.ITopicMuxList|null);

            /** ServiceRequest topicDemux */
            topicDemux?: (ubii.devices.ITopicDemux|null);

            /** ServiceRequest topicDemuxList */
            topicDemuxList?: (ubii.devices.ITopicDemuxList|null);

            /** ServiceRequest clientList */
            clientList?: (ubii.clients.IClientList|null);

            /** ServiceRequest deviceList */
            deviceList?: (ubii.devices.IDeviceList|null);

            /** ServiceRequest lockstepProcessingRequest */
            lockstepProcessingRequest?: (ubii.processing.ILockstepProcessingRequest|null);

            /** ServiceRequest component */
            component?: (ubii.devices.IComponent|null);

            /** ServiceRequest componentList */
            componentList?: (ubii.devices.IComponentList|null);

            /** ServiceRequest notifyCondition */
            notifyCondition?: (ubii.conditions.INotifyCondition|null);
        }

        /** Represents a ServiceRequest. */
        class ServiceRequest implements IServiceRequest {

            /**
             * Constructs a new ServiceRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.services.IServiceRequest);

            /** ServiceRequest topic. */
            public topic: string;

            /** ServiceRequest client. */
            public client?: (ubii.clients.IClient|null);

            /** ServiceRequest device. */
            public device?: (ubii.devices.IDevice|null);

            /** ServiceRequest topicSubscription. */
            public topicSubscription?: (ubii.services.request.ITopicSubscription|null);

            /** ServiceRequest session. */
            public session?: (ubii.sessions.ISession|null);

            /** ServiceRequest sessionList. */
            public sessionList?: (ubii.sessions.ISessionList|null);

            /** ServiceRequest processingModule. */
            public processingModule?: (ubii.processing.IProcessingModule|null);

            /** ServiceRequest processingModuleList. */
            public processingModuleList?: (ubii.processing.IProcessingModuleList|null);

            /** ServiceRequest topicMux. */
            public topicMux?: (ubii.devices.ITopicMux|null);

            /** ServiceRequest topicMuxList. */
            public topicMuxList?: (ubii.devices.ITopicMuxList|null);

            /** ServiceRequest topicDemux. */
            public topicDemux?: (ubii.devices.ITopicDemux|null);

            /** ServiceRequest topicDemuxList. */
            public topicDemuxList?: (ubii.devices.ITopicDemuxList|null);

            /** ServiceRequest clientList. */
            public clientList?: (ubii.clients.IClientList|null);

            /** ServiceRequest deviceList. */
            public deviceList?: (ubii.devices.IDeviceList|null);

            /** ServiceRequest lockstepProcessingRequest. */
            public lockstepProcessingRequest?: (ubii.processing.ILockstepProcessingRequest|null);

            /** ServiceRequest component. */
            public component?: (ubii.devices.IComponent|null);

            /** ServiceRequest componentList. */
            public componentList?: (ubii.devices.IComponentList|null);

            /** ServiceRequest notifyCondition. */
            public notifyCondition?: (ubii.conditions.INotifyCondition|null);

            /** ServiceRequest type. */
            public type?: ("client"|"device"|"topicSubscription"|"session"|"sessionList"|"processingModule"|"processingModuleList"|"topicMux"|"topicMuxList"|"topicDemux"|"topicDemuxList"|"clientList"|"deviceList"|"lockstepProcessingRequest"|"component"|"componentList"|"notifyCondition");

            /**
             * Creates a new ServiceRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceRequest instance
             */
            public static create(properties?: ubii.services.IServiceRequest): ubii.services.ServiceRequest;

            /**
             * Encodes the specified ServiceRequest message. Does not implicitly {@link ubii.services.ServiceRequest.verify|verify} messages.
             * @param message ServiceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.services.IServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceRequest message, length delimited. Does not implicitly {@link ubii.services.ServiceRequest.verify|verify} messages.
             * @param message ServiceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.services.IServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.services.ServiceRequest;

            /**
             * Decodes a ServiceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.services.ServiceRequest;

            /**
             * Verifies a ServiceRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceRequest
             */
            public static fromObject(object: { [k: string]: any }): ubii.services.ServiceRequest;

            /**
             * Creates a plain object from a ServiceRequest message. Also converts values to other types if specified.
             * @param message ServiceRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.services.ServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace sessions. */
    namespace sessions {

        /** Properties of a TopicInputMapping. */
        interface ITopicInputMapping {

            /** TopicInputMapping inputName */
            inputName?: (string|null);

            /** TopicInputMapping topic */
            topic?: (string|null);

            /** TopicInputMapping topicMux */
            topicMux?: (ubii.devices.ITopicMux|null);
        }

        /** Represents a TopicInputMapping. */
        class TopicInputMapping implements ITopicInputMapping {

            /**
             * Constructs a new TopicInputMapping.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.sessions.ITopicInputMapping);

            /** TopicInputMapping inputName. */
            public inputName: string;

            /** TopicInputMapping topic. */
            public topic?: (string|null);

            /** TopicInputMapping topicMux. */
            public topicMux?: (ubii.devices.ITopicMux|null);

            /** TopicInputMapping topicSource. */
            public topicSource?: ("topic"|"topicMux");

            /**
             * Creates a new TopicInputMapping instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TopicInputMapping instance
             */
            public static create(properties?: ubii.sessions.ITopicInputMapping): ubii.sessions.TopicInputMapping;

            /**
             * Encodes the specified TopicInputMapping message. Does not implicitly {@link ubii.sessions.TopicInputMapping.verify|verify} messages.
             * @param message TopicInputMapping message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.sessions.ITopicInputMapping, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TopicInputMapping message, length delimited. Does not implicitly {@link ubii.sessions.TopicInputMapping.verify|verify} messages.
             * @param message TopicInputMapping message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.sessions.ITopicInputMapping, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TopicInputMapping message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TopicInputMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.sessions.TopicInputMapping;

            /**
             * Decodes a TopicInputMapping message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TopicInputMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.sessions.TopicInputMapping;

            /**
             * Verifies a TopicInputMapping message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TopicInputMapping message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TopicInputMapping
             */
            public static fromObject(object: { [k: string]: any }): ubii.sessions.TopicInputMapping;

            /**
             * Creates a plain object from a TopicInputMapping message. Also converts values to other types if specified.
             * @param message TopicInputMapping
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.sessions.TopicInputMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TopicInputMapping to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TopicInputMappingList. */
        interface ITopicInputMappingList {

            /** TopicInputMappingList elements */
            elements?: (ubii.sessions.ITopicInputMapping[]|null);
        }

        /** Represents a TopicInputMappingList. */
        class TopicInputMappingList implements ITopicInputMappingList {

            /**
             * Constructs a new TopicInputMappingList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.sessions.ITopicInputMappingList);

            /** TopicInputMappingList elements. */
            public elements: ubii.sessions.ITopicInputMapping[];

            /**
             * Creates a new TopicInputMappingList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TopicInputMappingList instance
             */
            public static create(properties?: ubii.sessions.ITopicInputMappingList): ubii.sessions.TopicInputMappingList;

            /**
             * Encodes the specified TopicInputMappingList message. Does not implicitly {@link ubii.sessions.TopicInputMappingList.verify|verify} messages.
             * @param message TopicInputMappingList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.sessions.ITopicInputMappingList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TopicInputMappingList message, length delimited. Does not implicitly {@link ubii.sessions.TopicInputMappingList.verify|verify} messages.
             * @param message TopicInputMappingList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.sessions.ITopicInputMappingList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TopicInputMappingList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TopicInputMappingList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.sessions.TopicInputMappingList;

            /**
             * Decodes a TopicInputMappingList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TopicInputMappingList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.sessions.TopicInputMappingList;

            /**
             * Verifies a TopicInputMappingList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TopicInputMappingList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TopicInputMappingList
             */
            public static fromObject(object: { [k: string]: any }): ubii.sessions.TopicInputMappingList;

            /**
             * Creates a plain object from a TopicInputMappingList message. Also converts values to other types if specified.
             * @param message TopicInputMappingList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.sessions.TopicInputMappingList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TopicInputMappingList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TopicOutputMapping. */
        interface ITopicOutputMapping {

            /** TopicOutputMapping outputName */
            outputName?: (string|null);

            /** TopicOutputMapping topic */
            topic?: (string|null);

            /** TopicOutputMapping topicDemux */
            topicDemux?: (ubii.devices.ITopicDemux|null);
        }

        /** Represents a TopicOutputMapping. */
        class TopicOutputMapping implements ITopicOutputMapping {

            /**
             * Constructs a new TopicOutputMapping.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.sessions.ITopicOutputMapping);

            /** TopicOutputMapping outputName. */
            public outputName: string;

            /** TopicOutputMapping topic. */
            public topic?: (string|null);

            /** TopicOutputMapping topicDemux. */
            public topicDemux?: (ubii.devices.ITopicDemux|null);

            /** TopicOutputMapping topicDestination. */
            public topicDestination?: ("topic"|"topicDemux");

            /**
             * Creates a new TopicOutputMapping instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TopicOutputMapping instance
             */
            public static create(properties?: ubii.sessions.ITopicOutputMapping): ubii.sessions.TopicOutputMapping;

            /**
             * Encodes the specified TopicOutputMapping message. Does not implicitly {@link ubii.sessions.TopicOutputMapping.verify|verify} messages.
             * @param message TopicOutputMapping message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.sessions.ITopicOutputMapping, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TopicOutputMapping message, length delimited. Does not implicitly {@link ubii.sessions.TopicOutputMapping.verify|verify} messages.
             * @param message TopicOutputMapping message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.sessions.ITopicOutputMapping, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TopicOutputMapping message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TopicOutputMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.sessions.TopicOutputMapping;

            /**
             * Decodes a TopicOutputMapping message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TopicOutputMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.sessions.TopicOutputMapping;

            /**
             * Verifies a TopicOutputMapping message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TopicOutputMapping message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TopicOutputMapping
             */
            public static fromObject(object: { [k: string]: any }): ubii.sessions.TopicOutputMapping;

            /**
             * Creates a plain object from a TopicOutputMapping message. Also converts values to other types if specified.
             * @param message TopicOutputMapping
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.sessions.TopicOutputMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TopicOutputMapping to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TopicOutputMappingList. */
        interface ITopicOutputMappingList {

            /** TopicOutputMappingList elements */
            elements?: (ubii.sessions.ITopicOutputMapping[]|null);
        }

        /** Represents a TopicOutputMappingList. */
        class TopicOutputMappingList implements ITopicOutputMappingList {

            /**
             * Constructs a new TopicOutputMappingList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.sessions.ITopicOutputMappingList);

            /** TopicOutputMappingList elements. */
            public elements: ubii.sessions.ITopicOutputMapping[];

            /**
             * Creates a new TopicOutputMappingList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TopicOutputMappingList instance
             */
            public static create(properties?: ubii.sessions.ITopicOutputMappingList): ubii.sessions.TopicOutputMappingList;

            /**
             * Encodes the specified TopicOutputMappingList message. Does not implicitly {@link ubii.sessions.TopicOutputMappingList.verify|verify} messages.
             * @param message TopicOutputMappingList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.sessions.ITopicOutputMappingList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TopicOutputMappingList message, length delimited. Does not implicitly {@link ubii.sessions.TopicOutputMappingList.verify|verify} messages.
             * @param message TopicOutputMappingList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.sessions.ITopicOutputMappingList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TopicOutputMappingList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TopicOutputMappingList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.sessions.TopicOutputMappingList;

            /**
             * Decodes a TopicOutputMappingList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TopicOutputMappingList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.sessions.TopicOutputMappingList;

            /**
             * Verifies a TopicOutputMappingList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TopicOutputMappingList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TopicOutputMappingList
             */
            public static fromObject(object: { [k: string]: any }): ubii.sessions.TopicOutputMappingList;

            /**
             * Creates a plain object from a TopicOutputMappingList message. Also converts values to other types if specified.
             * @param message TopicOutputMappingList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.sessions.TopicOutputMappingList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TopicOutputMappingList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a IOMapping. */
        interface IIOMapping {

            /** IOMapping processingModuleId */
            processingModuleId?: (string|null);

            /** IOMapping inputMappings */
            inputMappings?: (ubii.sessions.ITopicInputMapping[]|null);

            /** IOMapping outputMappings */
            outputMappings?: (ubii.sessions.ITopicOutputMapping[]|null);

            /** IOMapping processingModuleName */
            processingModuleName?: (string|null);
        }

        /** Represents a IOMapping. */
        class IOMapping implements IIOMapping {

            /**
             * Constructs a new IOMapping.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.sessions.IIOMapping);

            /** IOMapping processingModuleId. */
            public processingModuleId: string;

            /** IOMapping inputMappings. */
            public inputMappings: ubii.sessions.ITopicInputMapping[];

            /** IOMapping outputMappings. */
            public outputMappings: ubii.sessions.ITopicOutputMapping[];

            /** IOMapping processingModuleName. */
            public processingModuleName: string;

            /**
             * Creates a new IOMapping instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IOMapping instance
             */
            public static create(properties?: ubii.sessions.IIOMapping): ubii.sessions.IOMapping;

            /**
             * Encodes the specified IOMapping message. Does not implicitly {@link ubii.sessions.IOMapping.verify|verify} messages.
             * @param message IOMapping message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.sessions.IIOMapping, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IOMapping message, length delimited. Does not implicitly {@link ubii.sessions.IOMapping.verify|verify} messages.
             * @param message IOMapping message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.sessions.IIOMapping, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a IOMapping message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IOMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.sessions.IOMapping;

            /**
             * Decodes a IOMapping message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IOMapping
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.sessions.IOMapping;

            /**
             * Verifies a IOMapping message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a IOMapping message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IOMapping
             */
            public static fromObject(object: { [k: string]: any }): ubii.sessions.IOMapping;

            /**
             * Creates a plain object from a IOMapping message. Also converts values to other types if specified.
             * @param message IOMapping
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.sessions.IOMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IOMapping to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a IOMappingList. */
        interface IIOMappingList {

            /** IOMappingList elements */
            elements?: (ubii.sessions.IIOMapping[]|null);
        }

        /** Represents a IOMappingList. */
        class IOMappingList implements IIOMappingList {

            /**
             * Constructs a new IOMappingList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.sessions.IIOMappingList);

            /** IOMappingList elements. */
            public elements: ubii.sessions.IIOMapping[];

            /**
             * Creates a new IOMappingList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IOMappingList instance
             */
            public static create(properties?: ubii.sessions.IIOMappingList): ubii.sessions.IOMappingList;

            /**
             * Encodes the specified IOMappingList message. Does not implicitly {@link ubii.sessions.IOMappingList.verify|verify} messages.
             * @param message IOMappingList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.sessions.IIOMappingList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IOMappingList message, length delimited. Does not implicitly {@link ubii.sessions.IOMappingList.verify|verify} messages.
             * @param message IOMappingList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.sessions.IIOMappingList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a IOMappingList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IOMappingList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.sessions.IOMappingList;

            /**
             * Decodes a IOMappingList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IOMappingList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.sessions.IOMappingList;

            /**
             * Verifies a IOMappingList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a IOMappingList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IOMappingList
             */
            public static fromObject(object: { [k: string]: any }): ubii.sessions.IOMappingList;

            /**
             * Creates a plain object from a IOMappingList message. Also converts values to other types if specified.
             * @param message IOMappingList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.sessions.IOMappingList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IOMappingList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** SessionStatus enum. */
        enum SessionStatus {
            CREATED = 0,
            RUNNING = 1,
            PAUSED = 2,
            STOPPED = 3
        }

        /** Properties of a Session. */
        interface ISession {

            /** Session id */
            id?: (string|null);

            /** Session name */
            name?: (string|null);

            /** Session processingModules */
            processingModules?: (ubii.processing.IProcessingModule[]|null);

            /** Session ioMappings */
            ioMappings?: (ubii.sessions.IIOMapping[]|null);

            /** Session tags */
            tags?: (string[]|null);

            /** Session description */
            description?: (string|null);

            /** Session authors */
            authors?: (string[]|null);

            /** Session status */
            status?: (ubii.sessions.SessionStatus|null);

            /** Session editable */
            editable?: (boolean|null);
        }

        /** Represents a Session. */
        class Session implements ISession {

            /**
             * Constructs a new Session.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.sessions.ISession);

            /** Session id. */
            public id: string;

            /** Session name. */
            public name: string;

            /** Session processingModules. */
            public processingModules: ubii.processing.IProcessingModule[];

            /** Session ioMappings. */
            public ioMappings: ubii.sessions.IIOMapping[];

            /** Session tags. */
            public tags: string[];

            /** Session description. */
            public description: string;

            /** Session authors. */
            public authors: string[];

            /** Session status. */
            public status: ubii.sessions.SessionStatus;

            /** Session editable. */
            public editable: boolean;

            /**
             * Creates a new Session instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Session instance
             */
            public static create(properties?: ubii.sessions.ISession): ubii.sessions.Session;

            /**
             * Encodes the specified Session message. Does not implicitly {@link ubii.sessions.Session.verify|verify} messages.
             * @param message Session message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.sessions.ISession, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Session message, length delimited. Does not implicitly {@link ubii.sessions.Session.verify|verify} messages.
             * @param message Session message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.sessions.ISession, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Session message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Session
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.sessions.Session;

            /**
             * Decodes a Session message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Session
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.sessions.Session;

            /**
             * Verifies a Session message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Session message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Session
             */
            public static fromObject(object: { [k: string]: any }): ubii.sessions.Session;

            /**
             * Creates a plain object from a Session message. Also converts values to other types if specified.
             * @param message Session
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.sessions.Session, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Session to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SessionList. */
        interface ISessionList {

            /** SessionList elements */
            elements?: (ubii.sessions.ISession[]|null);
        }

        /** Represents a SessionList. */
        class SessionList implements ISessionList {

            /**
             * Constructs a new SessionList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.sessions.ISessionList);

            /** SessionList elements. */
            public elements: ubii.sessions.ISession[];

            /**
             * Creates a new SessionList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SessionList instance
             */
            public static create(properties?: ubii.sessions.ISessionList): ubii.sessions.SessionList;

            /**
             * Encodes the specified SessionList message. Does not implicitly {@link ubii.sessions.SessionList.verify|verify} messages.
             * @param message SessionList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.sessions.ISessionList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SessionList message, length delimited. Does not implicitly {@link ubii.sessions.SessionList.verify|verify} messages.
             * @param message SessionList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.sessions.ISessionList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SessionList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SessionList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.sessions.SessionList;

            /**
             * Decodes a SessionList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SessionList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.sessions.SessionList;

            /**
             * Verifies a SessionList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SessionList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SessionList
             */
            public static fromObject(object: { [k: string]: any }): ubii.sessions.SessionList;

            /**
             * Creates a plain object from a SessionList message. Also converts values to other types if specified.
             * @param message SessionList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.sessions.SessionList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SessionList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace topicData. */
    namespace topicData {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);

            /** Timestamp millis */
            millis?: (number|Long|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.topicData.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /** Timestamp millis. */
            public millis: (number|Long);

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: ubii.topicData.ITimestamp): ubii.topicData.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link ubii.topicData.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.topicData.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link ubii.topicData.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.topicData.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.topicData.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.topicData.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): ubii.topicData.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.topicData.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TopicData. */
        interface ITopicData {

            /** TopicData topicDataRecord */
            topicDataRecord?: (ubii.topicData.ITopicDataRecord|null);

            /** TopicData topicDataRecordList */
            topicDataRecordList?: (ubii.topicData.ITopicDataRecordList|null);

            /** TopicData error */
            error?: (ubii.general.IError|null);
        }

        /** Represents a TopicData. */
        class TopicData implements ITopicData {

            /**
             * Constructs a new TopicData.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.topicData.ITopicData);

            /** TopicData topicDataRecord. */
            public topicDataRecord?: (ubii.topicData.ITopicDataRecord|null);

            /** TopicData topicDataRecordList. */
            public topicDataRecordList?: (ubii.topicData.ITopicDataRecordList|null);

            /** TopicData error. */
            public error?: (ubii.general.IError|null);

            /** TopicData type. */
            public type?: ("topicDataRecord"|"topicDataRecordList"|"error");

            /**
             * Creates a new TopicData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TopicData instance
             */
            public static create(properties?: ubii.topicData.ITopicData): ubii.topicData.TopicData;

            /**
             * Encodes the specified TopicData message. Does not implicitly {@link ubii.topicData.TopicData.verify|verify} messages.
             * @param message TopicData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.topicData.ITopicData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TopicData message, length delimited. Does not implicitly {@link ubii.topicData.TopicData.verify|verify} messages.
             * @param message TopicData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.topicData.ITopicData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TopicData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TopicData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.topicData.TopicData;

            /**
             * Decodes a TopicData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TopicData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.topicData.TopicData;

            /**
             * Verifies a TopicData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TopicData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TopicData
             */
            public static fromObject(object: { [k: string]: any }): ubii.topicData.TopicData;

            /**
             * Creates a plain object from a TopicData message. Also converts values to other types if specified.
             * @param message TopicData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.topicData.TopicData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TopicData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TopicDataRecord. */
        interface ITopicDataRecord {

            /** TopicDataRecord topic */
            topic?: (string|null);

            /** TopicDataRecord timestamp */
            timestamp?: (ubii.topicData.ITimestamp|null);

            /** TopicDataRecord clientId */
            clientId?: (string|null);

            /** TopicDataRecord double */
            double?: (number|null);

            /** TopicDataRecord bool */
            bool?: (boolean|null);

            /** TopicDataRecord string */
            string?: (string|null);

            /** TopicDataRecord int32 */
            int32?: (number|null);

            /** TopicDataRecord float */
            float?: (number|null);

            /** TopicDataRecord vector2 */
            vector2?: (ubii.dataStructure.IVector2|null);

            /** TopicDataRecord vector2List */
            vector2List?: (ubii.dataStructure.IVector2List|null);

            /** TopicDataRecord vector3 */
            vector3?: (ubii.dataStructure.IVector3|null);

            /** TopicDataRecord vector3List */
            vector3List?: (ubii.dataStructure.IVector3List|null);

            /** TopicDataRecord vector4 */
            vector4?: (ubii.dataStructure.IVector4|null);

            /** TopicDataRecord vector4List */
            vector4List?: (ubii.dataStructure.IVector4List|null);

            /** TopicDataRecord quaternion */
            quaternion?: (ubii.dataStructure.IQuaternion|null);

            /** TopicDataRecord quaternionList */
            quaternionList?: (ubii.dataStructure.IQuaternion|null);

            /** TopicDataRecord matrix3x2 */
            matrix3x2?: (ubii.dataStructure.IMatrix3x2|null);

            /** TopicDataRecord matrix4x4 */
            matrix4x4?: (ubii.dataStructure.IMatrix4x4|null);

            /** TopicDataRecord color */
            color?: (ubii.dataStructure.IColor|null);

            /** TopicDataRecord touchEvent */
            touchEvent?: (ubii.dataStructure.ITouchEvent|null);

            /** TopicDataRecord touchEventList */
            touchEventList?: (ubii.dataStructure.ITouchEventList|null);

            /** TopicDataRecord keyEvent */
            keyEvent?: (ubii.dataStructure.IKeyEvent|null);

            /** TopicDataRecord mouseEvent */
            mouseEvent?: (ubii.dataStructure.IMouseEvent|null);

            /** TopicDataRecord myoEvent */
            myoEvent?: (ubii.dataStructure.IMyoEvent|null);

            /** TopicDataRecord pose2D */
            pose2D?: (ubii.dataStructure.IPose2D|null);

            /** TopicDataRecord pose3D */
            pose3D?: (ubii.dataStructure.IPose3D|null);

            /** TopicDataRecord object2D */
            object2D?: (ubii.dataStructure.IObject2D|null);

            /** TopicDataRecord object3D */
            object3D?: (ubii.dataStructure.IObject3D|null);

            /** TopicDataRecord object2DList */
            object2DList?: (ubii.dataStructure.IObject2DList|null);

            /** TopicDataRecord object3DList */
            object3DList?: (ubii.dataStructure.IObject3DList|null);

            /** TopicDataRecord int32List */
            int32List?: (ubii.dataStructure.IInt32List|null);

            /** TopicDataRecord floatList */
            floatList?: (ubii.dataStructure.IFloatList|null);

            /** TopicDataRecord doubleList */
            doubleList?: (ubii.dataStructure.IDoubleList|null);

            /** TopicDataRecord stringList */
            stringList?: (ubii.dataStructure.IStringList|null);

            /** TopicDataRecord boolList */
            boolList?: (ubii.dataStructure.IBoolList|null);

            /** TopicDataRecord image2D */
            image2D?: (ubii.dataStructure.IImage2D|null);

            /** TopicDataRecord image2DList */
            image2DList?: (ubii.dataStructure.IImage2DList|null);

            /** TopicDataRecord session */
            session?: (ubii.sessions.ISession|null);
        }

        /** Represents a TopicDataRecord. */
        class TopicDataRecord implements ITopicDataRecord {

            /**
             * Constructs a new TopicDataRecord.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.topicData.ITopicDataRecord);

            /** TopicDataRecord topic. */
            public topic: string;

            /** TopicDataRecord timestamp. */
            public timestamp?: (ubii.topicData.ITimestamp|null);

            /** TopicDataRecord clientId. */
            public clientId: string;

            /** TopicDataRecord double. */
            public double?: (number|null);

            /** TopicDataRecord bool. */
            public bool?: (boolean|null);

            /** TopicDataRecord string. */
            public string?: (string|null);

            /** TopicDataRecord int32. */
            public int32?: (number|null);

            /** TopicDataRecord float. */
            public float?: (number|null);

            /** TopicDataRecord vector2. */
            public vector2?: (ubii.dataStructure.IVector2|null);

            /** TopicDataRecord vector2List. */
            public vector2List?: (ubii.dataStructure.IVector2List|null);

            /** TopicDataRecord vector3. */
            public vector3?: (ubii.dataStructure.IVector3|null);

            /** TopicDataRecord vector3List. */
            public vector3List?: (ubii.dataStructure.IVector3List|null);

            /** TopicDataRecord vector4. */
            public vector4?: (ubii.dataStructure.IVector4|null);

            /** TopicDataRecord vector4List. */
            public vector4List?: (ubii.dataStructure.IVector4List|null);

            /** TopicDataRecord quaternion. */
            public quaternion?: (ubii.dataStructure.IQuaternion|null);

            /** TopicDataRecord quaternionList. */
            public quaternionList?: (ubii.dataStructure.IQuaternion|null);

            /** TopicDataRecord matrix3x2. */
            public matrix3x2?: (ubii.dataStructure.IMatrix3x2|null);

            /** TopicDataRecord matrix4x4. */
            public matrix4x4?: (ubii.dataStructure.IMatrix4x4|null);

            /** TopicDataRecord color. */
            public color?: (ubii.dataStructure.IColor|null);

            /** TopicDataRecord touchEvent. */
            public touchEvent?: (ubii.dataStructure.ITouchEvent|null);

            /** TopicDataRecord touchEventList. */
            public touchEventList?: (ubii.dataStructure.ITouchEventList|null);

            /** TopicDataRecord keyEvent. */
            public keyEvent?: (ubii.dataStructure.IKeyEvent|null);

            /** TopicDataRecord mouseEvent. */
            public mouseEvent?: (ubii.dataStructure.IMouseEvent|null);

            /** TopicDataRecord myoEvent. */
            public myoEvent?: (ubii.dataStructure.IMyoEvent|null);

            /** TopicDataRecord pose2D. */
            public pose2D?: (ubii.dataStructure.IPose2D|null);

            /** TopicDataRecord pose3D. */
            public pose3D?: (ubii.dataStructure.IPose3D|null);

            /** TopicDataRecord object2D. */
            public object2D?: (ubii.dataStructure.IObject2D|null);

            /** TopicDataRecord object3D. */
            public object3D?: (ubii.dataStructure.IObject3D|null);

            /** TopicDataRecord object2DList. */
            public object2DList?: (ubii.dataStructure.IObject2DList|null);

            /** TopicDataRecord object3DList. */
            public object3DList?: (ubii.dataStructure.IObject3DList|null);

            /** TopicDataRecord int32List. */
            public int32List?: (ubii.dataStructure.IInt32List|null);

            /** TopicDataRecord floatList. */
            public floatList?: (ubii.dataStructure.IFloatList|null);

            /** TopicDataRecord doubleList. */
            public doubleList?: (ubii.dataStructure.IDoubleList|null);

            /** TopicDataRecord stringList. */
            public stringList?: (ubii.dataStructure.IStringList|null);

            /** TopicDataRecord boolList. */
            public boolList?: (ubii.dataStructure.IBoolList|null);

            /** TopicDataRecord image2D. */
            public image2D?: (ubii.dataStructure.IImage2D|null);

            /** TopicDataRecord image2DList. */
            public image2DList?: (ubii.dataStructure.IImage2DList|null);

            /** TopicDataRecord session. */
            public session?: (ubii.sessions.ISession|null);

            /** TopicDataRecord type. */
            public type?: ("double"|"bool"|"string"|"int32"|"float"|"vector2"|"vector2List"|"vector3"|"vector3List"|"vector4"|"vector4List"|"quaternion"|"quaternionList"|"matrix3x2"|"matrix4x4"|"color"|"touchEvent"|"touchEventList"|"keyEvent"|"mouseEvent"|"myoEvent"|"pose2D"|"pose3D"|"object2D"|"object3D"|"object2DList"|"object3DList"|"int32List"|"floatList"|"doubleList"|"stringList"|"boolList"|"image2D"|"image2DList"|"session");

            /**
             * Creates a new TopicDataRecord instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TopicDataRecord instance
             */
            public static create(properties?: ubii.topicData.ITopicDataRecord): ubii.topicData.TopicDataRecord;

            /**
             * Encodes the specified TopicDataRecord message. Does not implicitly {@link ubii.topicData.TopicDataRecord.verify|verify} messages.
             * @param message TopicDataRecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.topicData.ITopicDataRecord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TopicDataRecord message, length delimited. Does not implicitly {@link ubii.topicData.TopicDataRecord.verify|verify} messages.
             * @param message TopicDataRecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.topicData.ITopicDataRecord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TopicDataRecord message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TopicDataRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.topicData.TopicDataRecord;

            /**
             * Decodes a TopicDataRecord message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TopicDataRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.topicData.TopicDataRecord;

            /**
             * Verifies a TopicDataRecord message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TopicDataRecord message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TopicDataRecord
             */
            public static fromObject(object: { [k: string]: any }): ubii.topicData.TopicDataRecord;

            /**
             * Creates a plain object from a TopicDataRecord message. Also converts values to other types if specified.
             * @param message TopicDataRecord
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.topicData.TopicDataRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TopicDataRecord to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TopicDataRecordList. */
        interface ITopicDataRecordList {

            /** TopicDataRecordList elements */
            elements?: (ubii.topicData.ITopicDataRecord[]|null);
        }

        /** Represents a TopicDataRecordList. */
        class TopicDataRecordList implements ITopicDataRecordList {

            /**
             * Constructs a new TopicDataRecordList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.topicData.ITopicDataRecordList);

            /** TopicDataRecordList elements. */
            public elements: ubii.topicData.ITopicDataRecord[];

            /**
             * Creates a new TopicDataRecordList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TopicDataRecordList instance
             */
            public static create(properties?: ubii.topicData.ITopicDataRecordList): ubii.topicData.TopicDataRecordList;

            /**
             * Encodes the specified TopicDataRecordList message. Does not implicitly {@link ubii.topicData.TopicDataRecordList.verify|verify} messages.
             * @param message TopicDataRecordList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.topicData.ITopicDataRecordList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TopicDataRecordList message, length delimited. Does not implicitly {@link ubii.topicData.TopicDataRecordList.verify|verify} messages.
             * @param message TopicDataRecordList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.topicData.ITopicDataRecordList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TopicDataRecordList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TopicDataRecordList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.topicData.TopicDataRecordList;

            /**
             * Decodes a TopicDataRecordList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TopicDataRecordList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.topicData.TopicDataRecordList;

            /**
             * Verifies a TopicDataRecordList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TopicDataRecordList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TopicDataRecordList
             */
            public static fromObject(object: { [k: string]: any }): ubii.topicData.TopicDataRecordList;

            /**
             * Creates a plain object from a TopicDataRecordList message. Also converts values to other types if specified.
             * @param message TopicDataRecordList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.topicData.TopicDataRecordList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TopicDataRecordList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TopicDataSource. */
        interface ITopicDataSource {

            /** TopicDataSource topic */
            topic?: (string|null);

            /** TopicDataSource regex */
            regex?: (string|null);

            /** TopicDataSource component */
            component?: (ubii.devices.IComponent|null);

            /** TopicDataSource staticRecord */
            staticRecord?: (ubii.topicData.ITopicDataRecord|null);
        }

        /** Represents a TopicDataSource. */
        class TopicDataSource implements ITopicDataSource {

            /**
             * Constructs a new TopicDataSource.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.topicData.ITopicDataSource);

            /** TopicDataSource topic. */
            public topic?: (string|null);

            /** TopicDataSource regex. */
            public regex?: (string|null);

            /** TopicDataSource component. */
            public component?: (ubii.devices.IComponent|null);

            /** TopicDataSource staticRecord. */
            public staticRecord?: (ubii.topicData.ITopicDataRecord|null);

            /** TopicDataSource type. */
            public type?: ("topic"|"regex"|"component"|"staticRecord");

            /**
             * Creates a new TopicDataSource instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TopicDataSource instance
             */
            public static create(properties?: ubii.topicData.ITopicDataSource): ubii.topicData.TopicDataSource;

            /**
             * Encodes the specified TopicDataSource message. Does not implicitly {@link ubii.topicData.TopicDataSource.verify|verify} messages.
             * @param message TopicDataSource message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.topicData.ITopicDataSource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TopicDataSource message, length delimited. Does not implicitly {@link ubii.topicData.TopicDataSource.verify|verify} messages.
             * @param message TopicDataSource message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.topicData.ITopicDataSource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TopicDataSource message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TopicDataSource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.topicData.TopicDataSource;

            /**
             * Decodes a TopicDataSource message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TopicDataSource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.topicData.TopicDataSource;

            /**
             * Verifies a TopicDataSource message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TopicDataSource message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TopicDataSource
             */
            public static fromObject(object: { [k: string]: any }): ubii.topicData.TopicDataSource;

            /**
             * Creates a plain object from a TopicDataSource message. Also converts values to other types if specified.
             * @param message TopicDataSource
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.topicData.TopicDataSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TopicDataSource to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TopicDataSourceList. */
        interface ITopicDataSourceList {

            /** TopicDataSourceList elements */
            elements?: (ubii.topicData.ITopicDataSource[]|null);
        }

        /** Represents a TopicDataSourceList. */
        class TopicDataSourceList implements ITopicDataSourceList {

            /**
             * Constructs a new TopicDataSourceList.
             * @param [properties] Properties to set
             */
            constructor(properties?: ubii.topicData.ITopicDataSourceList);

            /** TopicDataSourceList elements. */
            public elements: ubii.topicData.ITopicDataSource[];

            /**
             * Creates a new TopicDataSourceList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TopicDataSourceList instance
             */
            public static create(properties?: ubii.topicData.ITopicDataSourceList): ubii.topicData.TopicDataSourceList;

            /**
             * Encodes the specified TopicDataSourceList message. Does not implicitly {@link ubii.topicData.TopicDataSourceList.verify|verify} messages.
             * @param message TopicDataSourceList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: ubii.topicData.ITopicDataSourceList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TopicDataSourceList message, length delimited. Does not implicitly {@link ubii.topicData.TopicDataSourceList.verify|verify} messages.
             * @param message TopicDataSourceList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: ubii.topicData.ITopicDataSourceList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TopicDataSourceList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TopicDataSourceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ubii.topicData.TopicDataSourceList;

            /**
             * Decodes a TopicDataSourceList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TopicDataSourceList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ubii.topicData.TopicDataSourceList;

            /**
             * Verifies a TopicDataSourceList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TopicDataSourceList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TopicDataSourceList
             */
            public static fromObject(object: { [k: string]: any }): ubii.topicData.TopicDataSourceList;

            /**
             * Creates a plain object from a TopicDataSourceList message. Also converts values to other types if specified.
             * @param message TopicDataSourceList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: ubii.topicData.TopicDataSourceList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TopicDataSourceList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
