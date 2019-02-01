import test from 'ava';
import {
    ServiceReplyTranslator,
} from '../../../src/js/index';

(function () {

    // helepers:

    let getComparisonObjectOne = () => {
        return {
            success: {
                title: 'success title',
                message: 'success message'
            }
        };
    };

    let getMessageOne = (context) => {
        return context.translator.createMessageFromPayload({
            success: {
                title: 'success title',
                message: 'success message'
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