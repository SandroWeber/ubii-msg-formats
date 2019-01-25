import test from 'ava';
import TranslatorsProvider from '../../src/js/protobufUtils';

/* run tests */

test.beforeEach(t => {
    t.context.provider = TranslatorsProvider;
});

test('create buffer from valid payload', t => {
    t.is(t.context.provider !== undefined);
};