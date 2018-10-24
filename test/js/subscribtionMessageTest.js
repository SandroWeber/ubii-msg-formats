import test from 'ava';
import {
    UbiiMessageTranslator,
} from '../../src/js';

(function () {

    // helper:

    let getComparisonObjectSubscribtionUnsubscribtion = () => {
        return {
            subscribtionMessage: {
                deviceIdentifier: 'superDevice',
                subscribtionRecords: [{
                        topic: 'topic->subtopic'
                    },
                    {
                        topic: 'topic2->subtopic2'
                    }
                ],
                unsubscribtionRecords: [{
                    topic: 'topic3->subtopic3',
                }]
            }
        };
    };

    let getMessageBasic = (context) => {
        return context.translator.createMessageFromPayload(
            {
                subscribtionMessage: {
                    deviceIdentifier: 'superDevice'
                }
            });
    }

    let getMessageSubscribtionOnly = (context) => {
        return context.translator.createMessageFromPayload(
            {
                subscribtionMessage: {
                    deviceIdentifier: 'superDevice',
                    subscribtionRecords: [{
                        topic: 'topic->subtopic'
                    }]
                }
            });
    }

    let getMessageUnsubscribtionOnly = (context) => {
        return context.translator.createMessageFromPayload(
            {
                subscribtionMessage: {
                    deviceIdentifier: 'superDevice',
                    unsubscribtionRecords: [{
                        topic: 'topic->subtopic'
                    }]
                }
            });
    }

    let getMessageSubscribtionUnsubscribtion = (context) => {
        return context.translator.createMessageFromPayload(
            {
                subscribtionMessage: {
                    deviceIdentifier: 'superDevice',
                    subscribtionRecords: [{
                            topic: 'topic->subtopic',
                        },
                        {
                            topic: 'topic2->subtopic2',
                        }
                    ],
                    unsubscribtionRecords: [{
                        topic: 'topic3->subtopic3'
                    }]
                }
            });
    }

    // test cases:

    test.beforeEach(t => {
        t.context.translator = new UbiiMessageTranslator();
    });

    test('create basic message', t => {
        let message;

        t.notThrows(() => {
            message = getMessageBasic(t.context);
        });

        t.snapshot(message);
    });

    test('create message with subscribtion only', t => {
        let message;

        t.notThrows(() => {
            message = getMessageSubscribtionOnly(t.context);
        });

        t.snapshot(message);
    });

    test('create message with unsubscribtion only', t => {
        let message;

        t.notThrows(() => {
            message = getMessageUnsubscribtionOnly(t.context);
        });

        t.snapshot(message);
    });

    test('create message with subscribtion and unsubscribtion', t => {
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

        t.true(JSON.stringify(messageTwo) === JSON.stringify(comparisonObject));
    });
})();