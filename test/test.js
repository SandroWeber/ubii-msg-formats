import test from 'ava';
import {
    TopicDataMessageTranslator,
    CarrierMessageTranslator,
} from '../src/index';

(function () {

    test('basicTopicDataMessage', async t => {
        let translator = await TopicDataMessageTranslator.createMessageTranslator();
        let result;

        let message = translator.createMessageFromPayload(translator.createPayload({
            topic: 'awesomeTopic',
            value: '30',
            deviceIdentifier: 'superDevice',
        }));

        console.log('current message: ' + message);

        result = translator.createBufferFromMessage(message);
        console.log('buffer: ' + result.toString());
        result = translator.createMessageFromBuffer(result);
        console.log('after buffer message: ' + result);
        result = translator.createPayloadFromMessage(result);
        console.log('after toObject: ' + result.topic);
        t.is('true', 'true');
    });

    test('basicCarrierMessage', async t => {
        let translator = await CarrierMessageTranslator.createMessageTranslator();
        let result;

        let message = translator.createMessageFromPayload(translator.createPayload({
            contentType: 'awesomeTopic',
            content: 'awesome content',
        }));

        console.log('current message: ' + message);

        result = translator.createBufferFromMessage(message);
        console.log('buffer: ' + result.toString());
        result = translator.createMessageFromBuffer(result);
        console.log('after buffer message: ' + result);
        result = translator.createPayloadFromMessage(result);
        console.log('after toObject: ' + result.topic);
        t.is('true', 'true');
    });

})();