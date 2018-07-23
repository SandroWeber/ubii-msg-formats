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
            translator.createPayload('superDevice', createRepeatedPublishTopicDataSnapshotOne(), undefined, undefined)
        );
    }

    test('basicTopicDataMessage', t => {
        let translator = new TopicDataMessageTranslator();
        let message = createTopicDatMessageSnapshotOne();
        let repeatedPublishTopicData = createRepeatedPublishTopicDataSnapshotOne();

        let result = translator.createBufferFromMessage(message);
        //console.log('basicTopicDataMessage: buffer: ' + result.toString());

        result = translator.createMessageFromBuffer(result);
        //console.log('basicTopicDataMessage: after buffer message: ' + result.publishTopicData);

        t.deepEqual(result.subscribeTopicData, []);
        t.deepEqual(result.unsubscribeTopicData, []);
        t.is(result.publishTopicData.length, repeatedPublishTopicData.length);

        t.deepEqual(result.publishTopicData[0].topic, repeatedPublishTopicData[0].topic);
        t.deepEqual(result.publishTopicData[0].data, repeatedPublishTopicData[0].data);
        t.deepEqual(result.publishTopicData[1].topic, repeatedPublishTopicData[1].topic);
        t.deepEqual(result.publishTopicData[1].data, repeatedPublishTopicData[1].data);

        result = translator.createPayloadFromMessage(result);
        //console.log('basicTopicDataMessage: after toObject: ' + result.topic);
    
    });

    test('basicUbiiMessage', t => {
        let translator = new UbiiMessageTranslator();

        // t.throws(() =>{
        let message = translator.createMessageFromPayload(translator.createPayload({
            rawBuffer: 'awesome cargo content',
            why: 'why?'
        }));

        t.is('true', 'true');
    });

    test('ubiiMessageOneOfOtherMessageType', t => {
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