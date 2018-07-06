# ubii-msg-formats

Ubii message formats module.

- This project is managed as [OpenProject instance of the FAR group at the Technical Unitversity of Munich (TUM)](OpenProject.far.in.tum.de).

## Table of Contents

- [Loading Proto Files](Loading Proto Files)
- [Command Line Interfaces (CLIs)](CLIs)
- [Testing](Testing)

### Loading Proto Files

- In order to support synchronous loading of the Proto files, the Proto files must be written in JSON format (JSON descriptors). JSON files can then be imported by a require statement. More details about Proto files in JSON format can be found in the [protobufjs repository](https://github.com/dcodeIO/ProtoBuf.js/#using-json-descriptors).

### CLIs

#### Tests

- Run ``npm test`` to process all standard tests. See the [Testing section](Testing) for more details on tests.

### Testing

- This module uses the [AVA](https://github.com/avajs/ava) test runner.
- You can add new tests to the test folder. Entry point for the test runner is test.js within the test folder. See the [AVA Documentation](https://github.com/avajs/ava#contents) for more details on how to create new test cases for AVA.
- Run the tests with ```npm test```