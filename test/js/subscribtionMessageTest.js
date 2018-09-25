import test from 'ava';
import {
    UbiiMessageTranslator,
} from '../../src/js';

(function () {

    let createMessageSnapshotSubscribeUnsubscribe = () => {
        return  {
            messageType: 'ubii',
            subscribtionMessage: {
                deviceIdentifier: 'superDevice', 
                subscribeTopicData: [
                    {
                        topic: 'topic->subtopic',
                    },
                    {
                        topic: 'topic2->subtopic2',
                    }
                ],
                unsubscribeTopicData: [
                    {
                        topic: 'topic3->subtopic3',
                    }
                ]
            }
        };
    };

    let createMessageBasic = () => {
        let translator = new UbiiMessageTranslator();

        return translator.createMessageFromPayload(
            translator.createPayload({
            subscribtionMessage: {
                deviceIdentifier: 'superDevice'
            }
        }));
    }

    let createMessageSubscribeOnly = () => {
        let translator = new UbiiMessageTranslator();

        return translator.createMessageFromPayload(
            translator.createPayload({
                subscribtionMessage: {
                    deviceIdentifier: 'superDevice',
                    subscribeTopicData: [
                        {
                            topic: 'topic->subtopic'
                        }
                    ]
                }
        }));
    }

    let createMessageUnsubscribeOnly = () => {
        let translator = new UbiiMessageTranslator();

        return translator.createMessageFromPayload(
            translator.createPayload({
                subscribtionMessage: {
                    deviceIdentifier: 'superDevice',
                    unsubscribeTopicData: [
                        {
                            topic: 'topic->subtopic'
                        }
                    ]
                }
        }));
    }

    let createMessageSubscribeUnsubscribe = () => {
        let translator = new UbiiMessageTranslator();

        return translator.createMessageFromPayload(
            translator.createPayload({
                subscribtionMessage: {
                    deviceIdentifier: 'superDevice',
                    subscribeTopicData: [
                        {
                            topic: 'topic->subtopic',
                        },
                        {
                            topic: 'topic2->subtopic2',
                        }
                    ],
                    unsubscribeTopicData: [
                        {
                            topic: 'topic3->subtopic3'
                        }
                    ]
                }
        }));
    }

    test('create basic', t => {
        t.notThrows(() =>{
            createMessageBasic();
        });
    });

    test('create subscribe only', t => {
        t.notThrows(() =>{
            createMessageSubscribeOnly();
        });
    });

    test('create unsubscribe only', t => {
        t.notThrows(() =>{
            createMessageUnsubscribeOnly();
        });
    });

    test('create subscribe and unsubscribe', t => {
        t.notThrows(() =>{
            createMessageSubscribeUnsubscribe();
        });
    });

   // test('structure', t => {
      /*  let translator = new UbiiMessageTranslator();
        let message = createMessageSubscribeUnsubscribe();
        let snapshot = createMessageSnapshotSubscribeUnsubscribe();

        let result = translator.createBufferFromMessage(message);
        //console.log('basicTopicDataMessage: buffer: ' + result.toString());

        result = translator.createMessageFromBuffer(result);
        //console.log('basicTopicDataMessage: after buffer message: ' + result.publishTopicData);

       t.is(result.messageType, snapshot.messageType);*/
    //});
})();