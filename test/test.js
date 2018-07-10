import test from 'ava';
import {
    TopicDataMessageTranslator
} from '../src/index';

(function () {

    test('basicProtobufTest', t => {
        let protoMessage = new TopicDataMessageTranslator();
        let result;

        let message = protoMessage.createMessageFromPayload(protoMessage.createPayload({
            topic: 'awesomeTopic',
            value: '30',
            deviceIdentifier: 'superDevice',
        }));

        console.log('current message: ' + message);

        result = protoMessage.createBufferFromMessage(message);
        console.log('buffer: ' + result.toString());
        result = protoMessage.createMessageFromBuffer(result);
        console.log('after buffer message: ' + result);
        result = protoMessage.createPayloadFromMessage(result);
        console.log('after toObject: ' + result.topic);
        t.is('hello', 'hello');


    });

})();