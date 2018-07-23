# ubii-msg-formats

Ubii message formats module.

- This project is managed as [Jira instance of the FAR group at the Technical Unitversity of Munich (TUM)](https://jira.far.in.tum.de/).

## Table of Contents

- [Protobuf](#Protobuf)
- [Command Line Interfaces (CLIs)](#CLIs)
- [Testing](#Testing)

## Protobuf

The messages are based on google's Protobuf.

See the [Protobuf Documentation](https://developers.google.com/protocol-buffers/) and the used [protobuf.js Github repository of a JS implementaion](https://github.com/dcodeIO/ProtoBuf.js/) for more details.

### Protobuf Usage

#### Required and Validation

According to Protocol Buffers documentation, the required field rule is not recommended:

>Required Is Forever You should be very careful about marking fields as required. If at some point you wish to stop writing or sending a required field, it will be problematic to change the field to an optional field – old readers will consider messages without this field to be incomplete and may reject or drop them unintentionally. You should consider writing application-specific custom validation routines for your buffers instead. Some engineers at Google have come to the conclusion that using required does more harm than good; they prefer to use only optional and repeated. However, this view is not universal. --[Protobuf Documentation](https://developers.google.com/protocol-buffers/docs/proto)

Therefore, we switch to our own validation methods, which are automatically applied when creating the payloads and should be applied before working with the messages.

#### OneOf

The use of oneofs in JS is very poorly documented. Therefore we have collected some snippets how you can use them in JS (and how they are used in this project).
If you have some improvements, please update the appropriate code snippets and update this section.

- Specify Oneofs as documented in the protobuf documentation. Example:

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

### Loading Proto Files

- In order to support synchronous loading of the Proto files, the Proto files must be written in JSON format (JSON descriptors). JSON files can then be imported by a require statement. More details about Proto files in JSON format can be found in the [protobufjs repository](https://github.com/dcodeIO/ProtoBuf.js/#using-json-descriptors).

## CLIs

### Tests

- Run ``npm test`` to process all standard tests. See the [Testing section](Testing) for more details on tests.

## Testing

- This module uses the [AVA](https://github.com/avajs/ava) test runner.
- You can add new tests to the test folder. Entry point for the test runner is test.js within the test folder. See the [AVA Documentation](https://github.com/avajs/ava#contents) for more details on how to create new test cases for AVA.
