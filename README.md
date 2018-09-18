# ubii-msg-formats

Ubii message formats module.

- This project is managed as [Jira instance of the FAR group at the Technical Unitversity of Munich (TUM)](https://jira.far.in.tum.de/).

## Table of Contents

- [Command Line Interfaces (CLIs)](#clis)
- [Message Types](#message-types)
- [Protobuf](#protobuf)
- [Topics](#topics)
- [Testing](#testing)

## CLIs

### Tests

- Run ``npm test`` to process all standard tests. See the [Testing section](Testing) for more details on tests.


## Ubii Message

- The messages are based on google's Protobuf. Check out the [Protobuf](#protobuf) section below for more information.
- The `ubiiMessage` is the first order message of the ubii system. All ubii related messages sent over the network must be wrapped in an ubii message.
- A `ubiiMessage` has a submessage that contains further data that should be processed.
- The proto file of the `ubiiMessage` imports all submessages. Thus the proto or a translator instance of the `ubiiMessage` can encode and decode all `ubiiMessages`.
- You can check for the specified submessage by accessing the `oneof` specifier property of the message object and compare it with the specifiers of the possible `oneof` values: 
```js
switch(message.submessage)
    {
      case 'topicDataMessage':  // this is a specifier of the possible values of the oneof
        this.publish(
          message.submessage,   // Access the oneof specifier to get the specifier of the actual value
          message[message.submessage]   // Access the actual data of the oneof
          );
      break;

      //...
```

### Submessages

- All valid submessages can be content of the `oneof submessage` block of a `ubiiMessage` instance.
- The present submessage inherently defines the purpose of the `ubiiMessage`, since every `ubiiMessage` have one submessage.

#### Registration Message

- You can attach a `registrationMessage` as submessage to register a device at a ubii node.

#### Topic Data Message

- `topicDataMessage` instances are submessages related to the topic data.
- The `topicDataMessage` can have repeated entries of the `publishTopicData` proto structure. The structure contains a topic-data-pair.
- You can attach a `topicDataMessage` as submessage and sen dit to a master node in order to publish repeated topic-data-pairs in form of a `publishTopicData` structure to a master node.
- In return, master nodes will send `ubiiMessages` with `topicDataMessage` as submessage to devices in order to inform them about changes of their subscribed topics.

#### Subscribtion Message

- `subscribtionMessage` instances are related to subscribing to a topic from the topic data and unsubscribing a topic from the topic data.
- The `subscribtionMessage` can have repeated `subscribeTopicData` and `unsubscribeTopicData` entries. The `subscribeTopicData` proto structure describes a topic a device wants to subscribe to. The `unsubscribeTopicData` proto structure describes a topic a device wants to unsubscribe.

## Topics

Topics are strings. The actual format is specified in the topicData project.

## Protobuf

The messages are based on google's Protobuf.

See the [Protobuf Documentation](https://developers.google.com/protocol-buffers/) and the used [protobuf.js Github repository of a JS implementaion](https://github.com/dcodeIO/ProtoBuf.js/) for more details.

### Loading Proto Files

- In order to support synchronous loading of the Proto files, the Proto files must be written in JSON format (JSON descriptors). JSON files can then be imported by a require statement. More details about Proto files in JSON format can be found in the [protobufjs repository](https://github.com/dcodeIO/ProtoBuf.js/#using-json-descriptors).

### Protobuf Usage

#### Required and Validation

According to Protocol Buffers documentation, the required field rule is not recommended:

>Required Is Forever You should be very careful about marking fields as required. If at some point you wish to stop writing or sending a required field, it will be problematic to change the field to an optional field – old readers will consider messages without this field to be incomplete and may reject or drop them unintentionally. You should consider writing application-specific custom validation routines for your buffers instead. Some engineers at Google have come to the conclusion that using required does more harm than good; they prefer to use only optional and repeated. However, this view is not universal. --[Protobuf Documentation](https://developers.google.com/protocol-buffers/docs/proto)

Therefore, we switch to our own validation methods, which are automatically applied when creating the payloads and should be applied before working with the messages.

#### OneOf

The use of oneofs in JS is very poorly documented. Therefore we have collected some snippets how you can use them in JS (and how they are used in this project).
If you have some improvements, please update the appropriate code snippets and update this section.

- Specify `oneof` as documented in the protobuf documentation. Example:

```js
oneof avatar {
    string image_url = 1;
    bytes image_data = 2;
}
```

- You can then acces the currently set oneof type at runtime via `message['oneof name']`. Example:

```js
let currentOneofType = message.avatar;
```

- You can then access the explicit value via `message[message['oneof name']]`. Example:

```js
let currentOneofValue = message[message.avatar];
```

## Testing

- This module uses the [AVA](https://github.com/avajs/ava) test runner.
- You can add new tests to the test folder. Entry point for the test runner is test.js within the test folder. See the [AVA Documentation](https://github.com/avajs/ava#contents) for more details on how to create new test cases for AVA.
