import test from 'ava';
import {
    TopicDataMessageTranslator,
    UbiiMessageTranslator,
} from '../../src/js/index';

(function () {

    let createTopicDataUbiiMessageOne = () => {
        let translator = new UbiiMessageTranslator();

        return translator.createMessageFromPayload(
            translator.createPayload({
            topicDataMessage: {
                deviceIdentifier: 'superDevice', 
                publishTopicData: [
                    {
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
        }));
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

        let message = createTopicDataUbiiMessageOne();

        let result = translator.createBufferFromMessage(message);
        result = translator.createMessageFromBuffer(result);

        t.not(result.topicDataMessage, null);
        t.is(result.registrationMessage, null);
    }); 
})();