import test from 'ava';

const ProtobufUtils = require('../../src/js/protobufUtils');

/* run tests */

test.beforeEach(t => {
    t.context.msgType = 'ubii.service.reply.Error';
    t.context.msgTypeUndefined = 'ubii.service.reply.SomethingUndefined';
});

test('getMessageOfType() - defined format', t => {
    let protobuf = ProtobufUtils.getMessageOfType(t.context.msgType);
    t.true(typeof protobuf === 'function');
});

test('getMessageOfType() - undefined format', t => {
    let protobuf = ProtobufUtils.getMessageOfType(t.context.msgTypeUndefined);
    t.true(typeof protobuf === 'undefined');
});

test('newMessage() - defined format', t => {
    let msg = ProtobufUtils.newMessage(t.context.msgType);
    t.true(typeof msg === 'object');
});

test('newMessage() - defined format, pass data', t => {
    /*let data = {
        title: 'Test Title',
        message: 'test-message',
        stack: 'test stack 1:2'
    };*/
    let data = ['Test Title', 'test-message', 'test stack 1:2'];
    let msg = ProtobufUtils.newMessage(t.context.msgType, data);
    t.true(typeof msg === 'object');
    t.is(msg.getTitle(), data[0]);
    t.is(msg.getMessage(), data[1]);
    t.is(msg.getStack(), data[2]);
});

test('newMessage() - undefined format', t => {
    let msg = ProtobufUtils.newMessage(t.context.msgTypeUndefined);
    t.true(typeof msg === 'undefined');
});

test('serialize()', t => {
    let msg = ProtobufUtils.newMessage(t.context.msgType);
    msg.setTitle('error title');

    let buffer = ProtobufUtils.serialize(msg);
    t.true(buffer.length > 0);
});

test('deserialize()', t => {
    let title = 'error title';
    let message = 'error message';
    let stack = 'error stack';

    let msg = ProtobufUtils.newMessage(t.context.msgType);
    msg.setTitle(title);
    msg.setMessage(message);
    msg.setStack(stack);

    let buffer = ProtobufUtils.serialize(msg);

    let msg_reconstructed = ProtobufUtils.deserialize(buffer, t.context.msgType);

    t.is(msg_reconstructed.getTitle(), title);
    t.is(msg_reconstructed.getMessage(), message);
    t.is(msg_reconstructed.getStack(), stack);
});