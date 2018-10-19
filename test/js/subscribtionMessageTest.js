import test from 'ava';
import {
    UbiiMessageTranslator,
} from '../../src/js';

(function () {

    // helper:

    let getComparisonObjectSubscribeUnsubscribe = () => {
        return {
            messageType: 'ubii',
            subscribtionMessage: {
                deviceIdentifier: 'superDevice',
                subscribeTopic: [{
                        topic: 'topic->subtopic'
                    },
                    {
                        topic: 'topic2->subtopic2'
                    }
                ],
                unsubscribeTopic: [{
                    topic: 'topic3->subtopic3',
                }]
            }
        };
    };

    let getMessageBasic = (context) => {
        return context.translator.createMessageFromPayload(
            context.translator.createPayload({
                subscribtionMessage: {
                    deviceIdentifier: 'superDevice'
                }
            }));
    }

    let getMessageSubscribeOnly = (context) => {
        return context.translator.createMessageFromPayload(
            context.translator.createPayload({
                subscribtionMessage: {
                    deviceIdentifier: 'superDevice',
                    subscribeTopic: [{
                        topic: 'topic->subtopic'
                    }]
                }
            }));
    }

    let getMessageUnsubscribeOnly = (context) => {
        return context.translator.createMessageFromPayload(
            context.translator.createPayload({
                subscribtionMessage: {
                    deviceIdentifier: 'superDevice',
                    unsubscribeTopic: [{
                        topic: 'topic->subtopic'
                    }]
                }
            }));
    }

    let getMessageSubscribeUnsubscribe = (context) => {
        return context.translator.createMessageFromPayload(
            context.translator.createPayload({
                subscribtionMessage: {
                    deviceIdentifier: 'superDevice',
                    subscribeTopic: [{
                            topic: 'topic->subtopic',
                        },
                        {
                            topic: 'topic2->subtopic2',
                        }
                    ],
                    unsubscribeTopic: [{
                        topic: 'topic3->subtopic3'
                    }]
                }
            }));
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

    test('create message with subscribe and unsubscribe', t => {
        let message;

        t.notThrows(() => {
            message = getMessageSubscribeUnsubscribe(t.context);
        });

        t.snapshot(message);
    });

    test('structure', t => {
        let messageOne = getMessageSubscribeUnsubscribe(t.context);
        let comparisonObject = getComparisonObjectSubscribeUnsubscribe();
        let buffer = t.context.translator.createBufferFromMessage(messageOne);
        let messageTwo = t.context.translator.createMessageFromBuffer(buffer);

        t.snapshot(messageTwo);

        t.true(JSON.stringify(messageTwo) === JSON.stringify(comparisonObject));
    });
})();