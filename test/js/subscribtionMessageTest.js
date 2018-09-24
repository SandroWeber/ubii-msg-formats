import test from 'ava';
import {
    UbiiMessageTranslator,
} from '../../src/js';

(function () {

    let createMessageSnapshotOne = () => {
        return  {
            messageType: 'ubii',
            topicDataMessage: {
                deviceIdentifier: 'superDevice', 
                publishTopicData: [
                    {
                        topic: 'awesomeTopic',
                        data: 'number',
                        number: 30
                    },
                    {
                        topic: 'awesomeTopic2',
                        data: 'vector3',
                        vector3: {
                            x: 2,
                            y: 2,
                            z: 2
                        }
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
                            topic: 'topic->subtopic'
                        }
                    ],
                    unsubscribeTopicData: [
                        {
                            topic: 'topic2->subtopic2'
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
})();