import test from 'ava';

const { ProtobufUtils, MSG_TYPES } = require('../../../src/js/index'); // ../../../../src/js/index

/* run tests */

test.beforeEach(t => {
  t.context.msgType = MSG_TYPES.ERROR;
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

test('newMessage() - defined format, pass well defined data', t => {
  /*let data = {
        title: 'Test Title',
        message: 'test-message',
        stack: 'test stack 1:2'
    };*/
  let data = {
    title: 'Test Title',
    message: 'test-message',
    stack: 'test stack 1:2'
  };
  let msg = ProtobufUtils.newMessage(t.context.msgType, data);
  t.true(typeof msg === 'object');
  t.is(msg.title, data.title);
  t.is(msg.message, data.message);
  t.is(msg.stack, data.stack);
});

test('newMessage() - defined format, pass undefined data', t => {
  let msg = ProtobufUtils.newMessage(t.context.msgType, undefined);
  t.true(typeof msg === 'object');
  t.is(msg.title, '');
  t.is(msg.message, '');
  t.is(msg.stack, '');
});

test('newMessage() - undefined format', t => {
  let msg = ProtobufUtils.newMessage(t.context.msgTypeUndefined);
  t.true(typeof msg === 'undefined');
});
