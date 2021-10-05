# ubii-msg-formats

Hi. This is the repository for Ubii message formats. It contains everything about **what** ubii nodes and devices say to each other.
If you are interested in how they communicate with each other, please see
- https://zeromq.org/, https://zguide.zeromq.org/docs/chapter3/#The-REQ-to-REP-Combination, https://zguide.zeromq.org/docs/chapter3/#The-DEALER-to-ROUTER-Combination
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods, https://developer.mozilla.org/en-US/docs/Web/API/WebSocket

## Table of Contents

- [ubii-msg-formats](#ubii-msg-formats)
    - [Table of Contents](#table-of-contents)
    - [Compilation](#compilation)
    - [CLIs](#clis)
    - [Ubii Messages](#ubii-messages)
        - [TopicData](#topicdata)
        - [ServiceRequest](#servicerequest)
        - [ServiceReply](#servicereply)
    - [Protobuf](#protobuf)
        - [Loading Proto Files](#loading-proto-files)
        - [Proto Files](#proto-files)
            - [Required and Validation](#required-and-validation)
            - [OneOf](#oneof)
        - [Usage of Proto Files in JS](#usage-of-proto-files-in-js)
    - [Testing](#testing)
    - [Tips](#tips)

## Compilation

- required: python >=3.5 (optionally with `mypy` and `mypy-protobuf` installed - see [Python Static Typing](#python-typing))
- required: 'protoc' compiler =3.11.1. If compiler is not installed/available in system path, get the release matching your OS from https://github.com/protocolbuffers/protobuf/releases and copy the executable (/bin/protoc) to ubii-msg-formats/external/bin.
- run 'node scripts/full-compile.js' to compile all parts (if python3 executable not automatically found path needs to be edited manually in script)
- to compile just specific parts:
    - run 'python scripts/compile.py --opt [language]' where [language] is one of py/python, j/java, js/javascript, cs/csharp, all
    - run 'node scripts/generate-protobuf-static.js'


## Contribution

- don't commit /dist for feature branches. you can test compilation, just don't commit the compiled files. You may want to use $GIT_DIR/info/exclude functionality to avoid unintentional commits.

## CLIs 

- Run `npm test` to process all standard tests.
- If snapshot assertions fail you can run `npm run-script update-snapshots` to process all standard tests and update all snapshots if the changes are intentional.

## Python Typing

The python code in the `ubii-msg-formats` module includes [python stub files](https://mypy.readthedocs.io/en/stable/stubs.html)
which can be interpreted by e.g. _PyCharm_ or _mypy_. If you want to build the python package yourself, you will need to choose a
python executable whith working [`mypy`](https://github.com/python/mypy/) and [`mypy-protobuf`](https://github.com/dropbox/mypy-protobuf)
when you are running `scripts/proto-compile.py`.

> **Attention!** The node.js entry script `scripts/full-compile.js` defines the python executable 
> which it will use. You need to change this to the right executable when you don't install `mypy`
> and `mypy-protobuf` globally in your `$PATH`!

## Ubii Messages

> **Note:** The messages are based on google's Protobuf. Check out the [Protobuf](#protobuf) section below for more information on how to handle these types of messages.
> You can find some more information on the proto files itself describing the structure of the messages as well as sections on how to work with proto messages in relevant envrionments such as nodeJS.

There are three first order messages:

- `topicData`
- `serviceRequest`
- `serviceReply`

All ubii related sub messages sent over the network are wrapped up in one of the first order messages. A first order message has submessages that contains further data that should be processed. Typically this is sepcified by a `type` oneof field.

> Check out the [oneof section](#oneof) below for how you can get the specified submessage by accessing the `oneof` properties.

The proto file of the first order messages imports all submessages. Thus the proto instance or a translator instance of a first order message can encode and decode all related message buffers.

### TopicData

This message is used to communicate topic data from the client to the server and from the server to the client. It is used in a router-dealer / websocket communication pattern context.

Beside general information this message contains a topic data pair. The `TopicData` can contain the following data structures:
https://github.com/SandroWeber/ubii-msg-formats/blob/develop/src/proto/topicData/topicDataRecord/topicDataRecord.proto

You can send a `TopicData` message to a master node in order to publish topic data pairs to a master node.
In return, master nodes will send `TopicData` messages to registered devices to inform them about changes of their subscribed topics.

### ServiceRequest

This message is used to formulate service request. It is sent from the client to the server. The message is used in a request-reply / HTTP(S) request communication pattern context.

The `ServiceRequest` can have the following submessages specifing the type of the reply:
https://github.com/SandroWeber/ubii-msg-formats/blob/develop/src/proto/services/serviceRequest.proto

### ServiceReply

This message is used by the server to formulate service replies to previous service requests from clients. The message is used in a request-reply / HTTP(S) request communication pattern context.

The `ServiceReply` can have the following submessages specifing the type of the reply:
https://github.com/SandroWeber/ubii-msg-formats/blob/develop/src/proto/services/serviceReply.proto

## Protobuf

The messages are based on google's Protobuf. The following section contains some topics that are super relevant for this project.

See the [Protobuf Documentation](https://developers.google.com/protocol-buffers/) and the used [protobuf.js Github repository of a JS implementaion](https://github.com/dcodeIO/ProtoBuf.js/) for more details.

### Loading Proto Files

The proto files can be loaded synchronously or asynchronously. The asynchronous method should be prefered. However it is only available in a nodeJS environment.

### Proto Files

#### Required and Validation

According to Protocol Buffers documentation, the required field rule is not recommended:

>Required Is Forever You should be very careful about marking fields as required. If at some point you wish to stop writing or sending a required field, it will be problematic to change the field to an optional field – old readers will consider messages without this field to be incomplete and may reject or drop them unintentionally. You should consider writing application-specific custom validation routines for your buffers instead. Some engineers at Google have come to the conclusion that using required does more harm than good; they prefer to use only optional and repeated. However, this view is not universal. --[Protobuf Documentation](https://developers.google.com/protocol-buffers/docs/proto)

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

- You can then acces the currently set oneof type at runtime via `message['oneof specifier']`. Example:

```js
let currentOneofType = message.avatar;
```

> The `message['oneof specifier']` is a property of the proto `Message` prototype. It is not visible if the message is converted to a plain js object or `toString()` is used to convert it to a string.

- You can then access the explicit value via `message[message['oneof specifier']]`. Example:

```js
let currentOneofValue = message[message.avatar];
```

### Usage of Proto Files in JS

This repository provides `messageTranslator` classes. These classes provide all relevant functionalities to work with the proto messages.

- The main aspect is on a validated translating between the three proto message states: buffer <-> message <-> payload

## Flatbuffers

https://google.github.io/flatbuffers/index.html

### Compilation

Release version used to compile schema files: v1.11.0

## Testing

This module uses the [AVA](https://github.com/avajs/ava) test runner.

You can add new tests to the test folder. Entry point for the test runner is test.js within the test folder. See the [AVA Documentation](https://github.com/avajs/ava#contents) for more details on how to create new test cases for AVA.

## Tips

There are extensions availabe for Visual Studio Code that support Proto3 files (Sytntax highlighting, syntax validation, ...). Just search for *ext:proto* in the marketplace.
