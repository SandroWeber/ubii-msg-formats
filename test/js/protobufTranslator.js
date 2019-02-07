import test from 'ava';

const ProtobufTranslator = require('../../src/js/protobufTranslator');

/* run tests */

test.beforeEach(t => {
    t.context.msgTypeUndefined = 'ubii.service.reply.SomethingUndefined';

    t.context.messages = [
        {
            type: 'ubii.service.reply.Error',
            validPayload: {
                title: 'title',
                message: 'message',
                stack: 'stack',
            }
        },
        {
            type: 'ubii.service.ServiceRequest',
            validPayload: {
                clientRegistration: {
                    name: 'clientName',
                    namespace: 'app'
                }
            }
        },
        {
            type: 'ubii.service.ServiceReply',
            validPayload: {
                clientSpecification: {
                    name: 'awesomeDeviceName',
                    namespace: 'app',
                    identifier: 'uuid',
                    topicDataHost: 'localhost',
                    topicDataPortZmq: '8667',
                    topicDataPortWs: '8668',
                }
            }
        },
        {
            type: 'ubii.topicData.TopicData',
            validPayload: {
                deviceIdentifier: 'deviceIdentifier',
                topicDataRecord: {
                    topic: 'topic',
                    vector3: {
                        x: 2000.1,
                        y: 100.0,
                        z: 567.000678
                    }
                }
            }
        }
    ]
});

test('constructor() - defined format', t => {
    let translator = new ProtobufTranslator(t.context.messages[0].type);
    t.true(typeof translator === 'object');
});

test('constructor() - undefined format', t => {
    t.throws(() => {
        let translator = new ProtobufTranslator(t.context.msgTypeUndefined);
    });
});

test('createBufferFromPayload() -> createPayloadFromBuffer()', t => {
    t.context.messages.forEach((msg) => {
        let translator = new ProtobufTranslator(msg.type);

        let buffer = translator.createBufferFromPayload(msg.validPayload);
        let payload = translator.createPayloadFromBuffer(buffer);

        t.deepEqual(payload, msg.validPayload);
    })
});