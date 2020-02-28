import test from 'ava';
import {
    ServiceReplyTranslator,
} from '../../../src/js/index';

(function () {

    // helepers:

    let getComparisonObjectOne = () => {
        return {
            error: {
                title: 'error title',
                message: 'error message',
                stack: 'error stack'
            }
        };
    };

    let getMessageOne = (context) => {
        return context.translator.createMessageFromPayload({
            error: {
                title: 'error title',
                message: 'error message',
                stack: 'error stack'
                }
            });
    }

    // test cases:

    test.beforeEach(t => {
        t.context.translator = new ServiceReplyTranslator();
    });

    test('create basic', t => {
        t.notThrows(() => {
            getMessageOne(t.context);
        });
    });

    test('structure', t => {
        let messageOne = getMessageOne(t.context);
        let comparisonObject = getComparisonObjectOne();
        let buffer = t.context.translator.createBufferFromMessage(messageOne);
        let messageTwo = t.context.translator.createMessageFromBuffer(buffer);

        t.snapshot(messageTwo);

        t.deepEqual(JSON.stringify(messageTwo) , JSON.stringify(comparisonObject));
    });
})();