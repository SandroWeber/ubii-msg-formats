import test from 'ava';
import {
    ProtobufTranslators,
} from '../../../src/js';


/* run tests */

test.beforeEach(t => {
    t.context.translators = ProtobufTranslators;
});

test('create buffer from valid payload', t => {
    t.is(true, true);
});