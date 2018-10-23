import test from 'ava';
import {
    UbiiMessageTranslator,
} from '../../src/js';

(function () {

    let getComparisonObjectOne = () => {
        return {
            registrationMessage: {
                deviceIdentifier: 'superDevice',
                deviceType: 'PARTICIPANT'
            }
        };
    };

    let getMessageOne = (context) => {
        return context.translator.createMessageFromPayload(
            {
                registrationMessage: {
                    deviceIdentifier: 'superDevice',
                    deviceType: 0
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
        let object = t.context.translator.createPayloadFromMessage(buffer);

        t.snapshot(messageTwo);

        t.true(JSON.stringify(messageTwo) === JSON.stringify(comparisonObject));
    });
})();