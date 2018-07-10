import test from 'ava';
import {
    TopicDataBlockMessage
} from '../src/index';

(function () {

    test('basicProtobufTest', t => {
        let protoMessage = new TopicDataBlockMessage();
        let result;

        protoMessage.setMessageFromPayload(protoMessage.createPayload({
            topic: 'awesomeTopic',
            value: '30',
            deviceIdentifier: 'superDevice',
        }));

        console.log('current message: ' + protoMessage.message);

        result = protoMessage.createBufferFromMessage(protoMessage.message);
        console.log('buffer: ' + result.toString());
        result = protoMessage.createMessageFromBuffer(result);
        console.log('after buffer message: ' + result);
        result = protoMessage.createPayloadFromMessage(result);
        console.log('after toObject: ' + result.topic);
        t.is('hello', 'hello');


    });

})();