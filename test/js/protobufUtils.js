import test from 'ava';

const ProtobufUtils = require('../../src/js/protobufUtils');

/* run tests */

test.beforeEach(t => {
    t.context.msgType = 'ubii.service.reply.Error';
    t.context.msgTypeUndefined = 'ubii.service.reply.SomethingUndefined';
});

test('getProtobuf() - defined format', t => {
    let protobuf = ProtobufUtils.getProtobuf(t.context.msgType);
    t.true(typeof protobuf === 'function');
});

test('getProtobuf() - undefined format', t => {
    let protobuf = ProtobufUtils.getProtobuf(t.context.msgTypeUndefined);
    t.true(typeof protobuf === 'undefined');
});

test('getMessage() - defined format', t => {
    let msg = ProtobufUtils.getMessage(t.context.msgType);
    t.true(typeof msg === 'object');
});

test('getMessage() - undefined format', t => {
    let msg = ProtobufUtils.getMessage(t.context.msgTypeUndefined);
    t.true(typeof msg === 'undefined');
});

test('serialize()', t => {
    let msg = ProtobufUtils.getMessage(t.context.msgType);
    msg.setTitle('error title');

    let buffer = ProtobufUtils.serialize(msg);
    t.true(buffer.length > 0);
});

test('deserialize()', t => {
    let title = 'error title';
    let message = 'error message';
    let stack = 'error stack';

    let msg = ProtobufUtils.getMessage(t.context.msgType);
    msg.setTitle(title);
    msg.setMessage(message);
    msg.setStack(stack);

    let buffer = ProtobufUtils.serialize(msg);

    let msg_reconstructed = ProtobufUtils.deserialize(buffer, t.context.msgType);

    t.is(msg_reconstructed.getTitle(), title);
    t.is(msg_reconstructed.getMessage(), message);
    t.is(msg_reconstructed.getStack(), stack);
});