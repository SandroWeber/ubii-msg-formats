import test from 'ava';
import {
    TopicDataMessageTranslator,
    UbiiMessageTranslator,
} from '../../src/js/index';

(function () {

    let createRepeatedPublishTopicDataSnapshotOne = () => {
        let translator = new TopicDataMessageTranslator();

        let repeatedPublishTopicData = [];
        repeatedPublishTopicData.push({
            topic: 'awesomeTopic',
            number: 30
        });
        repeatedPublishTopicData.push({
            topic: 'awesomeTopic2',
            vector3: {
                x: 2,
                y: 2,
                z: 2
            }
        });

        return repeatedPublishTopicData;
    }

    let createTopicDatMessageSnapshotOne = () => {
        let translator = new TopicDataMessageTranslator();

        return translator.createMessageFromPayload(
            translator.createPayload({
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
            })
        );
    }

    test('ubiiMessage - Basics', t => {
        let translator = new UbiiMessageTranslator();

        t.notThrows(() =>{
            let message = translator.createMessageFromPayload(translator.createPayload({
                rawBuffer: 'awesome cargo content',
                why: 'why?'
            }));
        });

    });

    test('ubiiMessage - OneOfOtherMessageType', t => {
        let translator = new UbiiMessageTranslator();

        let message = translator.createMessageFromPayload(translator.createPayload({
            topicDataMessage: createTopicDatMessageSnapshotOne()
        }));

        let result = translator.createBufferFromMessage(message);
        result = translator.createMessageFromBuffer(result);

        t.not(result.topicDataMessage, null);
        t.is(result.registrationMessage, null);
    }); 
})();