import test from 'ava';
import {
    UbiiMessageTranslator,
} from '../../src/js';

(function () {

    let createMessageSnapshotSubscribeUnsubscribe = () => {
        return  {
            messageType: 'ubii',
            registrationMessage: {
                deviceIdentifier: 'superDevice', 
                deviceType: 0
            }
        };
    };

    let createMessageBasic = () => {
        let translator = new UbiiMessageTranslator();

        return translator.createMessageFromPayload(
            translator.createPayload({
            registrationMessage: {
                deviceIdentifier: 'superDevice',
                deviceType: 0
            }
        }));
    }

    test('create basic', t => {
        t.notThrows(() =>{
            createMessageBasic();
        });
    });


    test('structure', t => {
      /*  let translator = new UbiiMessageTranslator();
        let message = createMessageSubscribeUnsubscribe();
        let snapshot = createMessageSnapshotSubscribeUnsubscribe();

        let result = translator.createBufferFromMessage(message);
        //console.log('basicTopicDataMessage: buffer: ' + result.toString());

        result = translator.createMessageFromBuffer(result);
        //console.log('basicTopicDataMessage: after buffer message: ' + result.publishTopicData);

       t.is(result.messageType, snapshot.messageType);*/
    });
})();