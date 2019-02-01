import test from 'ava';
import {
    ServiceReplyTranslator,
} from '../../../src/js/index';

(function () {

    // helpers:

    let getComparisonObjectOne = () => {
        return {
            clientSpecification: {
                name: 'awesomeDeviceName',
                namespace: 'app',
                identifier: 'uuid',
                topicDataHost: 'localhost',
                topicDataPortZmq: '8667',
                topicDataPortWs: '8668',
            }
        };
    };

    let getMessageOne = (context) => {
        return context.translator.createMessageFromPayload({
            clientSpecification: {
                name: 'awesomeDeviceName',
                namespace: 'app',
                identifier: 'uuid',
                topicDataHost: 'localhost',
                topicDataPortZmq: '8667',
                topicDataPortWs: '8668',
            }
        });
    };

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

        console.info(comparisonObject);
        t.deepEqual(JSON.stringify(messageTwo) , JSON.stringify(comparisonObject));
    });
})();