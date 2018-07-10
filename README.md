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

## CLIs

### Tests

- Run ``npm test`` to process all standard tests. See the [Testing section](Testing) for more details on tests.

## Testing

- This module uses the [AVA](https://github.com/avajs/ava) test runner.
- You can add new tests to the test folder. Entry point for the test runner is test.js within the test folder. See the [AVA Documentation](https://github.com/avajs/ava#contents) for more details on how to create new test cases for AVA.