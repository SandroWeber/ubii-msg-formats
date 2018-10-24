import test from 'ava';
import {
    UbiiMessageTranslator,
} from '../../src/js';

(function () {

    // helepers:

    let getComparisonObjectOne = () => {
        return {
            errorMessage: {
                name: 'error',
                message: 'An error has occured.'
            }
        };
    };

    let getMessageOne = (context) => {
        return context.translator.createMessageFromPayload(
            {
                errorMessage: {
                    name: 'error',
                    message: 'An error has occured.'
                }
            });
    }

    // test cases:

    test.beforeEach(t => {
        t.context.translator = new UbiiMessageTranslator();
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

        t.true(JSON.stringify(messageTwo) === JSON.stringify(comparisonObject));
    });
})();