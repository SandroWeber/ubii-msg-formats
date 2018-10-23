import test from 'ava';
import {
    UbiiMessageTranslator,
} from '../../src/js/index';

(function () {

    // helper:

    let getExamplePayload = (context) => {
        return {
                topicDataMessage: {
                    messageType: 'ubii',
                    deviceIdentifier: 'superDevice',
                    topicDataRecord: [{
                            topic: 'awesomeTopic',
                            number: 30
                        },
                        {
                            topic: 'awesomeTopic2',
                            vector3: {
                                x: 2,
                                y: 2,
                                z: 2
                            }
                        }
                    ]
                }
            };
    }

    let getTopicDataUbiiMessage = (context) => {
        return context.translator.createMessageFromPayload(
            etExamplePayload()
            );
    }

    // test cases:

    test.beforeEach(t => {
        t.context.translator = new UbiiMessageTranslator();
    });

    test('create basic message', t => {

        t.notThrows(() => {
            let message = t.context.translator.createMessageFromPayload(
                {
                    rawBuffer: 'awesome cargo content',
                    why: 'why?'
                });
        });
    });

    test('create buffer from message', t => {
        let message = getTopicDataUbiiMessage(t.context);

        t.notThrows(() => {
            t.context.translator.createBufferFromMessage(message);
        });
    });


    test('create buffer from payload', t => {
        t.notThrows(() => {
            t.context.translator.createBufferFromPayload(getExamplePayload());
            }
        );
    });


    test('create message from buffer', t => {
        let message = getTopicDataUbiiMessage(t.context);

        t.notThrows(() => {
            let buffer = t.context.translator.createBufferFromMessage(message);

            message = t.context.translator.createMessageFromBuffer(buffer);
        });
    });

    test('oneof submessage field', t => {
        let messageOne = getTopicDataUbiiMessage(t.context);
        let buffer = t.context.translator.createBufferFromMessage(messageOne);
        let messageTwo = t.context.translator.createMessageFromBuffer(buffer);

        // oneof specifier field
        t.is(messageTwo.submessage, 'topicDataMessage');
        t.is(messageTwo.registrationMessage, null);

        // data field
        t.not(messageTwo.topicDataMessage, null);

    });
})();