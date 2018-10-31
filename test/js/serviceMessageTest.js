import test from 'ava';
import {
    UbiiMessageTranslator,
} from '../../src/js';

(function () {

    // helepers:

    let getComparisonObjectOne = () => {
        return {
            serviceMessage: {
                clientUuidRequest: {}
            }
        };
    };

    let getMessageOne = (context) => {
        return context.translator.createMessageFromPayload(
            {
                serviceMessage: {
                    clientUuidRequest: {}
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

        t.true(messageTwo.serviceMessage !== undefined);
        t.true(messageTwo.serviceMessage.clientUuidRequest !== undefined);
    });
})();