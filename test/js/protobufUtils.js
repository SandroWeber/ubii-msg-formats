import test from 'ava';
import ProtobufUtils from '../../src/js/protobufUtils';

/* run tests */

test.beforeEach(t => {
    t.context.utils = ProtobufUtils;
});

test('getMessage()', t => {
    let utils = t.context.utils;

    let messageType = 'ubii.service.reply.Error';
    t.is(utils.getMessage(messageType) !== undefined);
});