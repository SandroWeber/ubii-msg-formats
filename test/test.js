import test from 'ava';
import {
    TopicDataMessageTranslator,
    CarrierMessageTranslator,
} from '../src/index';

(function () {

    test('basicTopicDataMessage', t => {
        let translator = new TopicDataMessageTranslator();
        let result;

        let message = translator.createMessageFromPayload(translator.createPayload({
            topic: 'awesomeTopic',
            value: '30',
            deviceIdentifier: 'superDevice',
        }));

        console.log('basicTopicDataMessage: current message: ' + message);

        result = translator.createBufferFromMessage(message);
        console.log('basicTopicDataMessage: buffer: ' + result.toString());

        result = translator.createMessageFromBuffer(result);
        console.log('basicTopicDataMessage: after buffer message: ' + result);

        result = translator.createPayloadFromMessage(result);
        console.log('basicTopicDataMessage: after toObject: ' + result.topic);

        t.is('true', 'true');
    });

    test('basicCarrierMessage', t => {
        let translator = new CarrierMessageTranslator();
        let result;

        let message = translator.createMessageFromPayload(translator.createPayload({
            contentType: 'awesomeTopic',
            content: 'awesome content',
        }));

        console.log('basicCarrierMessage: current message: ' + message);

        result = translator.createBufferFromMessage(message);
        console.log('basicCarrierMessage: buffer: ' + result.toString());

        result = translator.createMessageFromBuffer(result);
        console.log('basicCarrierMessage: after buffer message: ' + result);

        result = translator.createPayloadFromMessage(result);

        console.log('basicCarrierMessage: after toObject: ' + result.content);

        t.is('true', 'true');
    });

})();