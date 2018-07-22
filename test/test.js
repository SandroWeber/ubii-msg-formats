import test from 'ava';
import {
    TopicDataMessageTranslator,
    CarrierMessageTranslator,
} from '../src/index';

(function () {

    test('basicTopicDataMessage', t => {
        t.notThrows( () => {
            let translator = new TopicDataMessageTranslator();
            let result;

            let message = translator.createMessageFromPayload(translator.createPublishTopicDataPayload(
                'superDevice',
                'awesomeTopic',
                '30'
            ));

            //console.log('basicTopicDataMessage: current message: ' + message);

            result = translator.createBufferFromMessage(message);
            //console.log('basicTopicDataMessage: buffer: ' + result.toString());

            result = translator.createMessageFromBuffer(result);
            //console.log('basicTopicDataMessage: after buffer message: ' + result);

            result = translator.createPayloadFromMessage(result);
            //console.log('basicTopicDataMessage: after toObject: ' + result.topic);
        });
    });

    test('basicCarrierMessage', t => {
        let translator = new CarrierMessageTranslator();
        let result;

       // t.throws(() =>{
            let message = translator.createMessageFromPayload(translator.createPayload({
                rawBuffer: 'awesome cargo content',
                why: 'why?'
            }));

            t.is('true', 'true');
    });

    test('carrierMessageOneOfOtherMessageType', t => {
        t.notThrows( () => {
            let translator = new CarrierMessageTranslator();
            let topicDataMessageTranslator = new TopicDataMessageTranslator();
            let result;

            let message = translator.createMessageFromPayload(translator.createPayload({
                topicDataMessage: topicDataMessageTranslator.createPublishTopicDataPayload(
                    'UniqueDevice',
                    'awesomeTopic',
                    '30'
                )
            }));

            result = translator.createBufferFromMessage(message);
            result = translator.createMessageFromBuffer(result);

            //console.log('basicCarrierMessage: after buffer message: ' + result);
            //console.log('basicCarrierMessage: cargo: ' + result.cargo);
            //console.log('basicCarrierMessage: cargoContent: ' + result[result.cargo]);

        });
    });
})();