import test from 'ava';
import {IoMessage} from '../src/index';

(function(){

    test('extractDeviceIdentifier', t => {
        let protoMessage = new IoMessage();
        let result;
        
        protoMessage.setMessageFromPayload(protoMessage.createPayload({
            topic: 'awesomeTopic',
            value: '30',
            deviceIdentifier: 'superDevice',
        }));

        console.log('current message: '+protoMessage.message);

        result = protoMessage.createBufferFromMessage(protoMessage.message);
        console.log('buffer: '+result.toString());
        result = protoMessage.createMessageFromBuffer(result);
        console.log('after buffer message: '+result);
        result = protoMessage.createPayloadFromMessage(result);
        console.log('after toObject: '+result.topic);
        t.is('hello', 'hello');
        
        
    });
    
})();