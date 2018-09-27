# ubii-msg-formats

Hi. This is the repository for Ubii message formats. This repository contains everything about **what** ubii nodes and devices say to each other. If you are interested in how they speak to each other, visit the [ubii-msg-transport repository](https://gitlab.lrz.de/IN-FAR/Ubi-Interact/ubii-msg-transport).

This project is managed as [Jira instance of the FAR group at the Technical Unitversity of Munich (TUM)](https://jira.far.in.tum.de/).

## Table of Contents

1. [Command Line Interfaces (CLIs)](#clis)
1. [Message Types](#message-types)
1. [Protobuf](#protobuf)
1. [Topics](#topics)
1. [Testing](#testing)
1. [Tips](#tips)

## CLIs 

### Tests

Run ``npm test`` to process all standard tests. See the [Testing section](#testing) for more details on tests.


## Ubii Message

> **Note:** The messages are based on google's Protobuf. Check out the [Protobuf](#protobuf) section below for more information on how to handle these types of messages. You can find some more information on the proto files itself describing the structure of the messages as well as sections on how to work with proto messages in relevant envrionments such as nodeJS.

The `ubiiMessage` is the first order message of the ubii system. All ubii related messages sent over the network must be wrapped in an ubii message. A `ubiiMessage` has a submessage that contains further data that should be processed.

The proto file of the `ubiiMessage` imports all submessages. Thus the proto or a translator instance of the `ubiiMessage` can encode and decode all `ubiiMessages`.
Check out the [oneof section](#oneof) below for how you can get the specified submessage by accessing the `oneof` properties.

### Submessages

All valid submessages can be content of the `oneof submessage` block of a `ubiiMessage` instance. The present submessage inherently defines the purpose of the `ubiiMessage`, since every `ubiiMessage` has one submessage.

#### Registration Message

`registrationMessage` instances are submessages related to the registration of devices and their corresponding clients. You can attach a `registrationMessage` as submessage to register a device at a ubii node.

#### Topic Data Message

`topicDataMessage` instances are submessages related to the topic data. The `topicDataMessage` can have repeated entries of the `publishTopicData` proto structure. The structure contains a topic-data-pair.

You can attach a `topicDataMessage` as submessage and send it to a master node in order to publish repeated topic-data-pairs in form of a `publishTopicData` structure to a master node. In return, master nodes will send `ubiiMessages` with `topicDataMessage` as submessage to devices in order to inform them about changes of their subscribed topics.

#### Subscribtion Message

`subscribtionMessage` instances are related to subscribing to a topic from the topic data and unsubscribing a topic from the topic data. The `subscribtionMessage` can have repeated `subscribeTopicData` and `unsubscribeTopicData` entries. The `subscribeTopicData` proto structure describes a topic a device wants to subscribe to. The `unsubscribeTopicData` proto structure describes a topic a device wants to unsubscribe.

## Topics

Topics are strings. The actual format is specified in the topicData project.

## Protobuf

The messages are based on google's Protobuf. The following section contains some topics that are super relevant for this project.

See the [Protobuf Documentation](https://developers.google.com/protocol-buffers/) and the used [protobuf.js Github repository of a JS implementaion](https://github.com/dcodeIO/ProtoBuf.js/) for more details.

### Loading Proto Files

The proto files can be loaded synchronously or asynchronously. The asynchronous method should be prefered. However it is only available in a nodeJS environment.

### Proto Files

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

### Usage of Proto Files in JS

This repository provides `messageTranslator` classes. These classes provide all relevant functionalities to work with the proto messages.

- The main aspect is on a validated translating between the three proto message states: buffer <-> message <-> payload
- Payloads can be created with specific `createPayload` methods provided by the translator classes or directly by plain JS objects reflecting the structure of the proto classes.

## Testing

This module uses the [AVA](https://github.com/avajs/ava) test runner.

You can add new tests to the test folder. Entry point for the test runner is test.js within the test folder. See the [AVA Documentation](https://github.com/avajs/ava#contents) for more details on how to create new test cases for AVA.

## Tips

There are extensions availabe for Visual Studio Code that support Proto3 files (Sytntax highlighting, syntax validation, ...). Just search for *ext:proto* in the marketplace.