import test from 'ava';
import {
    SessionTranslator,
} from '../../../src/js';


/* run tests */

test.beforeEach(t => {
    t.context.translator = new SessionTranslator();
});

test('create message', t => {
    let sessionMsg = {
        Session: {
            name: 'session',
            interactions: [],
            interaction_topic_mappings: []
        }
    };
    /*let sessionMsg = {
     name: 'session',
     interactions: [],
     interaction_topic_mappings: []
     };*/

    let protoMsg = t.context.translator.createMessageFromPayload(sessionMsg);
    console.info(protoMsg);
});