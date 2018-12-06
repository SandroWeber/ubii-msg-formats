import test from 'ava';
import {
    ServiceReplyTranslator,
} from '../../src/js';

(function () {

    // helepers:

    let getComparisonObjectOne = () => {
        return {
            clientSpecification: {
                name: 'awesomeDeviceName',
                namespace: 'app',
                identifier: 'uuid',
                targetHost: 'localhost',
                targetPort: '8667',
            }
        };
    };

    let getMessageOne = (context) => {
        return context.translator.createMessageFromPayload({
            clientSpecification: {
                name: 'awesomeDeviceName',
                namespace: 'app',
                identifier: 'uuid',
                targetHost: 'localhost',
                targetPort: '8667',
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