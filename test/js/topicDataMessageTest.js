import test from 'ava';
import {
    UbiiMessageTranslator,
} from '../../src/js';

(function () {

    // helper:

    let getComparisonObjectOne = () => {
        return  {
            messageType: 'ubii',
            topicDataMessage: {
                deviceIdentifier: 'superDevice', 
                publishTopicData: [
                    {
                        topic: 'awesomeTopic',
                        data: 'number',
                        number: 30
                    },
                    {
                        topic: 'awesomeTopic2',
                        data: 'vector3',
                        vector3: {
                            x: 2000.1,
                            y: 100.0,
                            z: 567.000678
                        }
                    }
                ]
            }
        };
    };

    let getStringifiedComparisonObjectOne = () => {
        return  {
            messageType: 'ubii',
            topicDataMessage: {
                deviceIdentifier: 'superDevice', 
                publishTopicData: [
                    {
                        topic: 'awesomeTopic',
                        number: 30
                    },
                    {
                        topic: 'awesomeTopic2',
                        vector3: {
                            x: 2000.1,
                            y: 100.0,
                            z: 567.000678
                        }
                    }
                ]
            }
        };
    };

    let getMessageOne = (context) => {
        return context.translator.createMessageFromPayload(
            context.translator.createPayload({
            topicDataMessage: {
                deviceIdentifier: 'superDevice', 
                publishTopicData: [
                    {
                        topic: 'awesomeTopic',
                        number: 30
                    },
                    {
                        topic: 'awesomeTopic2',
                        vector3: {
                            x: 2000.1,
                            y: 100.0,
                            z: 567.000678
                        }
                    }
                ]
            }
        }));
    }

    // tests:

    test.beforeEach(t => {
        t.context.translator = new UbiiMessageTranslator();
    });

    test('create basic', t => {
        t.notThrows(() =>{
            getMessageOne(t.context);
        });
    });

    test('structure', t => {
        let messageOne = getMessageOne(t.context);
        let comparisonObject = getComparisonObjectOne();
        let stringifiedComparisonObject = getStringifiedComparisonObjectOne();
        let buffer = t.context.translator.createBufferFromMessage(messageOne);
        let messageTwo = t.context.translator.createMessageFromBuffer(buffer);

        t.snapshot(messageTwo);

        // stringified
        t.true(JSON.stringify(messageTwo) === JSON.stringify(stringifiedComparisonObject));

        // oneofs
        t.is(messageTwo.topicDataMessage.publishTopicData.length, comparisonObject.topicDataMessage.publishTopicData.length);

        t.is(messageTwo.topicDataMessage.publishTopicData[0].topic, comparisonObject.topicDataMessage.publishTopicData[0].topic);
        t.is(messageTwo.topicDataMessage.publishTopicData[0].data, 'number');
        t.is(messageTwo.topicDataMessage.publishTopicData[0].number, comparisonObject.topicDataMessage.publishTopicData[0].number);

        t.is(messageTwo.topicDataMessage.publishTopicData[1].topic, comparisonObject.topicDataMessage.publishTopicData[1].topic);
        t.is(messageTwo.topicDataMessage.publishTopicData[1].data, 'vector3');
        t.is(messageTwo.topicDataMessage.publishTopicData[1].vector3.x, comparisonObject.topicDataMessage.publishTopicData[1].vector3.x);
        t.is(messageTwo.topicDataMessage.publishTopicData[1].vector3.y, comparisonObject.topicDataMessage.publishTopicData[1].vector3.y);
        t.is(messageTwo.topicDataMessage.publishTopicData[1].vector3.z, comparisonObject.topicDataMessage.publishTopicData[1].vector3.z);

        // as object
        let payload = t.context.translator.createPayloadFromMessage(messageTwo);
        t.true(JSON.stringify(payload) === JSON.stringify(stringifiedComparisonObject));
    });

})();