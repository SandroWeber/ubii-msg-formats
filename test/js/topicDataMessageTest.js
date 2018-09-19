import test from 'ava';
import {
    TopicDataMessageTranslator,
    UbiiMessageTranslator,
} from '../../src/js/index';

(function () {

    let createRepeatedPublishTopicDataSnapshotOne = () => {
        let translator = new TopicDataMessageTranslator();

        let repeatedPublishTopicData = [];
        repeatedPublishTopicData.push({
            topic: 'awesomeTopic',
            number: 30
        });
        repeatedPublishTopicData.push({
            topic: 'awesomeTopic2',
            vector3: {
                x: 2,
                y: 2,
                z: 2
            }
        });

        return repeatedPublishTopicData;
    }

    let createTopicDatMessageSnapshotOne = () => {
        let translator = new TopicDataMessageTranslator();

        return translator.createMessageFromPayload(
            translator.createPayload({
                deviceIdentifier: 'superDevice', 
                publishTopicData: [
                    {
                        topic: 'awesomeTopic',
                       // data: 'number',
                        number: 30
                    },
                    {
                        topic: 'awesomeTopic2',
                       // data: 'vector3',
                        vector3: {
                            x: 2,
                            y: 2,
                            z: 2
                        }
                    }
                ]
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
        t.deepEqual(result.publishTopicData[0].data, 'number');
        t.deepEqual(result.publishTopicData[0].number, repeatedPublishTopicData[0].number);
        t.deepEqual(result.publishTopicData[1].topic, repeatedPublishTopicData[1].topic);
        t.deepEqual(result.publishTopicData[1].data, 'vector3');
        t.deepEqual(result.publishTopicData[1].vector3.x, repeatedPublishTopicData[1].vector3.x);
        t.deepEqual(result.publishTopicData[1].vector3.y, repeatedPublishTopicData[1].vector3.y);
        t.deepEqual(result.publishTopicData[1].vector3.z, repeatedPublishTopicData[1].vector3.z);

        result = translator.createPayloadFromMessage(result);
        //console.log('basicTopicDataMessage: after toObject: ' + result.topic);
    
    });

   
})();