import test from 'ava';
import {
    ServiceReplyTranslator,
} from '../../../src/js/index';

(function () {

    // helper:

    let getExamplePayload = (context) => {
        return {
            error: {
                title: 'error title',
                message: 'error message'
                }
            };
    }

    let getSimpleMessage = (context) => {
        return context.translator.createMessageFromPayload(
            getExamplePayload()
            );
    }

    // test cases:

    test.beforeEach(t => {
        t.context.translator = new ServiceReplyTranslator();
    });

    test('create basic message', t => {
        t.notThrows(() => {
            let message = t.context.translator.createMessageFromPayload({});
        });
    });

    test('create buffer from message', t => {
        let message = getSimpleMessage(t.context);

        t.notThrows(() => {
            t.context.translator.createBufferFromMessage(message);
        });
    });


    test('create buffer from payload', t => {
        t.notThrows(() => {
            t.context.translator.createBufferFromPayload(getExamplePayload());
        });
    });


    test('create message from buffer', t => {
        let message = getSimpleMessage(t.context);

        t.notThrows(() => {
            let buffer = t.context.translator.createBufferFromMessage(message);

            message = t.context.translator.createMessageFromBuffer(buffer);
        });
    });

    test('oneof type field', t => {
        let messageOne = getSimpleMessage(t.context);
        let buffer = t.context.translator.createBufferFromMessage(messageOne);
        let messageTwo = t.context.translator.createMessageFromBuffer(buffer);

        // oneof specifier field
        t.is(messageTwo.type, 'error');
        t.is(messageTwo.success, null);
        t.not(messageTwo.error, null);
    });
})();