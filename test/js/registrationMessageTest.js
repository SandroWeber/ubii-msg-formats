import test from 'ava';
import {
    UbiiMessageTranslator,
} from '../../src/js/index';

(function () {
    test('registrationmessage - Basics', t => {
        let translator = new UbiiMessageTranslator();

        let message = translator.createMessageFromPayload(translator.createPayload({
            registrationMessage: {
                deviceIdentifier: 'uniqueId',
                deviceType: 0
            }
        }));

        let result = translator.createBufferFromMessage(message);
        result = translator.createMessageFromBuffer(result);

        t.is(result.topicDataMessage, null);
        t.not(result.registrationMessage, null);

        t.is(result.registrationMessage.deviceType, 0);
    });

})();