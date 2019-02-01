import test from 'ava';
import {
    ServiceRequestTranslator,
} from '../../../src/js/index';

(function () {

    // helepers:

    let getComparisonObjectOne = () => {
        return {
            clientRegistration: {
                name: 'clientName',
                namespace: 'app'
            }
        };
    };

    let getMessageOne = (context) => {
        return context.translator.createMessageFromPayload({
            clientRegistration: {
                name: 'clientName',
                namespace: 'app'
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