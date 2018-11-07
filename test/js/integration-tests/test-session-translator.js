import test from 'ava';
import {
    SessionTranslator,
} from '../../src/js';

(function () {

    // helepers:

    let getComparisonObjectOne = () => {
        return {
            session: {
                name: 'session',
                interactions: [],
                interaction_topic_mappings: []
            }
        };
    };

    let getMessageOne = (context) => {
        return context.translator.createMessageFromPayload({
            clientRegistration: {
                displayName: 'clientName',
                namespace: 'app'
            }
        });
    }

    // test cases:

    test.beforeEach(t => {
        t.context.translator = new SessionTranslator();
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