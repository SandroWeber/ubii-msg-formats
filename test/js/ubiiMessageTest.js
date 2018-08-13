import test from 'ava';
import {
    TopicDataMessageTranslator,
    UbiiMessageTranslator,
} from '../../src/js/index';

(function () {

    let createRepeatedPublishTopicDataSnapshotOne = () => {
        let translator = new TopicDataMessageTranslator();

        let repeatedPublishTopicData = [];
        repeatedPublishTopicData.push(translator.createPublishTopicDataPayload(
            'awesomeTopic',
            '30'
        ));
        repeatedPublishTopicData.push(translator.createPublishTopicDataPayload(
            'awesomeTopic2',
            '302'
        ));

        return repeatedPublishTopicData;
    }

    let createTopicDatMessageSnapshotOne = () => {
        let translator = new TopicDataMessageTranslator();

        return translator.createMessageFromPayload(
            translator.createPayload('superDevice', createRepeatedPublishTopicDataSnapshotOne())
        );
    }

    test('ubiiMessage - Basics', t => {
        let translator = new UbiiMessageTranslator();

        // t.throws(() =>{
        let message = translator.createMessageFromPayload(translator.createPayload({
            rawBuffer: 'awesome cargo content',
            why: 'why?'
        }));

        t.is('true', 'true');
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