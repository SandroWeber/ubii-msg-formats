import test from 'ava';
import {
    UbiiMessageTranslator,
} from '../../src/js';

(function () {

    let getComparisonObject = () => {
        return {
            messageType: 'ubii',
            registrationMessage: {
                deviceIdentifier: 'superDevice',
                deviceType: 'PARTICIPANT'
            }
        };
    };

    let getMessageBasic = () => {
        let translator = new UbiiMessageTranslator();

        return translator.createMessageFromPayload(
            translator.createPayload({
                registrationMessage: {
                    deviceIdentifier: 'superDevice',
                    deviceType: 0
                }
            }));
    }

    // test cases:

    test.beforeEach(t => {
        t.context.translator = new UbiiMessageTranslator();
    });

    test('create basic', t => {
        t.notThrows(() => {
            getMessageBasic(t.context);
        });
    });

    test('structure', t => {
        let messageOne = getMessageBasic(t.context);
        let comparisonObject = getComparisonObject();
        let buffer = t.context.translator.createBufferFromMessage(messageOne);
        let messageTwo = t.context.translator.createMessageFromBuffer(buffer);
        let object = t.context.translator.createPayloadFromMessage(buffer);

        t.snapshot(messageTwo);

        t.true(JSON.stringify(messageTwo) === JSON.stringify(comparisonObject));
    });
})();