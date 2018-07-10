# ubii-msg-formats

Ubii message formats module.

<<<<<<< HEAD
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
=======
- This project is managed as [OpenProject instance of the FAR group at the Technical Unitversity of Munich (TUM)](OpenProject.far.in.tum.de).

## Table of Contents

- [Loading Proto Files](#Loading Proto Files)
- [Command Line Interfaces (CLIs)](#CLIs)
- [Testing](#Testing)

## Loading Proto Files

- In order to support synchronous loading of the Proto files, the Proto files must be written in JSON format (JSON descriptors). JSON files can then be imported by a require statement. More details about Proto files in JSON format can be found in the [protobufjs repository](https://github.com/dcodeIO/ProtoBuf.js/#using-json-descriptors).

## CLIs

#### Tests
>>>>>>> e98d71f8b10f7969557cb1d1bdddb2e670236f2c

- Run ``npm test`` to process all standard tests. See the [Testing section](Testing) for more details on tests.

## Testing

- This module uses the [AVA](https://github.com/avajs/ava) test runner.
<<<<<<< HEAD
- You can add new tests to the test folder. Entry point for the test runner is test.js within the test folder. See the [AVA Documentation](https://github.com/avajs/ava#contents) for more details on how to create new test cases for AVA.
=======
- You can add new tests to the test folder. Entry point for the test runner is test.js within the test folder. See the [AVA Documentation](https://github.com/avajs/ava#contents) for more details on how to create new test cases for AVA.
- Run the tests with ```npm test```
>>>>>>> e98d71f8b10f7969557cb1d1bdddb2e670236f2c
