import test from 'ava';
import {
    UbiiMessageTranslator,
} from '../../src/js';

(function () {

    let createMessageSnapshotOne = () => {
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

    let createMessageOne = () => {
        let translator = new UbiiMessageTranslator();

        return translator.createMessageFromPayload(
            translator.createPayload({
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

    test('create basic', t => {
        t.notThrows(() =>{
            createMessageOne();
        });
    });

    test('structure', t => {
        let translator = new UbiiMessageTranslator();
        let message = createMessageOne();
        let snapshot = createMessageSnapshotOne();

        
        let buffer = translator.createBufferFromMessage(message);

        let result = translator.createMessageFromBuffer(buffer);
        //console.log('basicTopicDataMessage: after buffer message: ' + result.publishTopicData);

        t.is(result.topicDataMessage.publishTopicData.length, snapshot.topicDataMessage.publishTopicData.length);
        t.is(result.messageType, snapshot.messageType);
        t.is(result.topicDataMessage.publishTopicData[0].topic, snapshot.topicDataMessage.publishTopicData[0].topic);
        t.is(result.topicDataMessage.publishTopicData[0].data, 'number');
        t.is(result.topicDataMessage.publishTopicData[0].number, snapshot.topicDataMessage.publishTopicData[0].number);
        t.is(result.topicDataMessage.publishTopicData[1].topic, snapshot.topicDataMessage.publishTopicData[1].topic);
        t.is(result.topicDataMessage.publishTopicData[1].data, 'vector3');
        t.is(result.topicDataMessage.publishTopicData[1].vector3.x, snapshot.topicDataMessage.publishTopicData[1].vector3.x);
        t.is(result.topicDataMessage.publishTopicData[1].vector3.y, snapshot.topicDataMessage.publishTopicData[1].vector3.y);
        t.is(result.topicDataMessage.publishTopicData[1].vector3.z, snapshot.topicDataMessage.publishTopicData[1].vector3.z);

        result = translator.createPayloadFromMessage(result);
        t.is(result.topicDataMessage.publishTopicData.length, snapshot.topicDataMessage.publishTopicData.length);
        t.is(result.messageType, snapshot.messageType);
        t.is(result.topicDataMessage.publishTopicData[0].topic, snapshot.topicDataMessage.publishTopicData[0].topic);
        t.is(result.topicDataMessage.publishTopicData[0].number, snapshot.topicDataMessage.publishTopicData[0].number);
        t.is(result.topicDataMessage.publishTopicData[1].topic, snapshot.topicDataMessage.publishTopicData[1].topic);
        t.is(result.topicDataMessage.publishTopicData[1].vector3.x, snapshot.topicDataMessage.publishTopicData[1].vector3.x);
        t.is(result.topicDataMessage.publishTopicData[1].vector3.y, snapshot.topicDataMessage.publishTopicData[1].vector3.y);
        t.is(result.topicDataMessage.publishTopicData[1].vector3.z, snapshot.topicDataMessage.publishTopicData[1].vector3.z);

    
    });

    test('valid buffer and JSON', t => {
        let translator = new UbiiMessageTranslator();
        let message = createMessageOne();
        let snapshot = createMessageSnapshotOne();

        
        let buffer = translator.createBufferFromMessage(message);
        //console.log('basicTopicDataMessage: buffer: ' + result.toString());
        buffer = JSON.stringify(buffer, null, 4);
        buffer = JSON.parse(buffer, (k, v) => {
            if (
              v !== null            &&
              typeof v === 'object' && 
              'type' in v           &&
              v.type === 'Buffer'   &&
              'data' in v           &&
              Array.isArray(v.data)) {
              return new Buffer(v.data);
            }
            return v;
          });

        let result = translator.createMessageFromBuffer(buffer);
        //console.log('basicTopicDataMessage: after buffer message: ' + result.publishTopicData);

    
    });

   
})();