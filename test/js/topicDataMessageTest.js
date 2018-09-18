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
            translator.createPayload({
                deviceIdentifier: 'superDevice', 
                publishTopicData: createRepeatedPublishTopicDataSnapshotOne()
            })
        );
    }

    test('topicDataMessage - Basics', t => {
        let translator = new TopicDataMessageTranslator();
        let message = createTopicDatMessageSnapshotOne();
        let repeatedPublishTopicData = createRepeatedPublishTopicDataSnapshotOne();

        let result = translator.createBufferFromMessage(message);
        //console.log('basicTopicDataMessage: buffer: ' + result.toString());

        result = translator.createMessageFromBuffer(result);
        //console.log('basicTopicDataMessage: after buffer message: ' + result.publishTopicData);

        t.is(result.publishTopicData.length, repeatedPublishTopicData.length);

        t.deepEqual(result.publishTopicData[0].topic, repeatedPublishTopicData[0].topic);
        t.deepEqual(result.publishTopicData[0].data, repeatedPublishTopicData[0].data);
        t.deepEqual(result.publishTopicData[1].topic, repeatedPublishTopicData[1].topic);
        t.deepEqual(result.publishTopicData[1].data, repeatedPublishTopicData[1].data);

        result = translator.createPayloadFromMessage(result);
        //console.log('basicTopicDataMessage: after toObject: ' + result.topic);
    
    });

   
})();