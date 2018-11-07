import test from 'ava';
import {
    ServiceRequestTranslator,
} from '../../src/js';

(function () {

    // helepers:

    let getComparisonObjectOne = () => {
        return {
            deviceRegistration: {
                correspondingClientId: 'someClientId',
                displayName: 'clientName',
                deviceType: 'PARTICIPANT'
            }
        };
    };

    let getMessageOne = (context) => {
        return context.translator.createMessageFromPayload({
            deviceRegistration: {
                correspondingClientId: 'someClientId',
                displayName: 'clientName',
                deviceType: 1
            }
        });
    }

    // test cases:

    test.beforeEach(t => {
        t.context.translator = new ServiceRequestTranslator();
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