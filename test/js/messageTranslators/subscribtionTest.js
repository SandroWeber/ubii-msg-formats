import test from 'ava';
import {
    ServiceRequestTranslator,
} from '../../../src/js/index';

(function () {

    // helper:

    let getComparisonObjectSubscribtionUnsubscribtion = () => {
        return {
            subscribtion: {
                deviceIdentifier: '1111-1111-1111-1111',
                subscribeTopics: [
                    'topic->subtopic',
                    'topic2->subtopic2'
                ],
                unsubscribeTopics: [
                    'topic3->subtopic3'
                ]
            }
        };
    };

    let getMessageBasic = (context) => {
        return context.translator.createMessageFromPayload(
            {
                subscribtion: {
                    deviceIdentifier: '1111-1111-1111-1111',
                }
            });
    }

    let getMessageSubscribeOnly = (context) => {
        return context.translator.createMessageFromPayload(
            {
                subscribtion: {
                    deviceIdentifier: '1111-1111-1111-1111',
                    subscribeTopics: [
                        'topic->subtopic',
                        'topic2->subtopic2'
                    ]
                }
            });
    }

    let getMessageUnsubscribeOnly = (context) => {
        return context.translator.createMessageFromPayload(
            {
                subscribtion: {
                    deviceIdentifier: '1111-1111-1111-1111',
                    unsubscribeTopics: [
                        'topic3->subtopic3'
                    ]
                }
            });
    }

    let getMessageSubscribtionUnsubscribtion = (context) => {
        return context.translator.createMessageFromPayload(
            {
            subscribtion: {
                deviceIdentifier: '1111-1111-1111-1111',
                subscribeTopics: [
                    'topic->subtopic',
                    'topic2->subtopic2'
                ],
                unsubscribeTopics: [
                    'topic3->subtopic3'
                ]}
            });
    }

    // test cases:

    test.beforeEach(t => {
        t.context.translator = new ServiceRequestTranslator();
    });

    test('create basic message', t => {
        let message;

        t.notThrows(() => {
            message = getMessageBasic(t.context);
        });

        t.snapshot(message);
    });

    test('create message with subscribe only', t => {
        let message;

        t.notThrows(() => {
            message = getMessageSubscribeOnly(t.context);
        });

        t.snapshot(message);
    });

    test('create message with unsubscribe only', t => {
        let message;

        t.notThrows(() => {
            message = getMessageUnsubscribeOnly(t.context);
        });

        t.snapshot(message);
    });

    test('create message', t => {
        let message;

        t.notThrows(() => {
            message = getMessageSubscribtionUnsubscribtion(t.context);
        });

        t.snapshot(message);
    });

    test('structure', t => {
        let messageOne = getMessageSubscribtionUnsubscribtion(t.context);
        let comparisonObject = getComparisonObjectSubscribtionUnsubscribtion();
        let buffer = t.context.translator.createBufferFromMessage(messageOne);
        let messageTwo = t.context.translator.createMessageFromBuffer(buffer);

        t.snapshot(messageTwo);

        t.deepEqual(JSON.stringify(messageTwo) , JSON.stringify(comparisonObject));
    });
})();