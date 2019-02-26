import test from 'ava';

const {ProtobufTranslator, MSG_TYPES, DEFAULT_TOPICS} = require('../../src/js/index');

/* run tests */

test.beforeEach(t => {
  t.context.msgTypeUndefined = 'ubii.service.reply.SomethingUndefined';

  t.context.messages = [
    {
      type: MSG_TYPES.ERROR,
      validPayload: {
        title: 'title',
        message: 'message',
        stack: 'stack',
      }
    },
    {
      type: MSG_TYPES.SERVICE_REQUEST,
      validPayload: {
        topic: DEFAULT_TOPICS.SERVICES.CLIENT_REGISTRATION,
        client: {
          id: 'clientID',
          name: 'client name'
        }
      }
    },
    {
      type: MSG_TYPES.SERVICE_REPLY,
      validPayload: {
        client: {
          name: 'awesomeDeviceName',
          id: 'uuid'
        }
      }
    },
    {
      type: MSG_TYPES.TOPIC_DATA,
      validPayload: {
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

test('createBufferFromMessage() -> createMessageFromBuffer()', t => {
  t.context.messages.forEach((msg) => {
    let translator = new ProtobufTranslator(msg.type);
    let message = translator.createMessageFromPayload(msg.validPayload);

    console.info('### createBufferFromMessage');

    let buffer = undefined;
    t.notThrows(() => {
      buffer = translator.createBufferFromMessage(message);
    });
    let decodedMessage = undefined;
    t.notThrows(() => {
      decodedMessage = translator.createMessageFromBuffer(buffer);
    });

    t.deepEqual(JSON.stringify(decodedMessage), JSON.stringify(message));
  })
});

test('createBufferFromPayload() -> createPayloadFromBuffer()', t => {
  t.context.messages.forEach((msg) => {
    let translator = new ProtobufTranslator(msg.type);

    console.info('### createBufferFromPayload');
    t.notThrows(() => {
      let buffer = translator.createBufferFromPayload(msg.validPayload);
      let payload = translator.createPayloadFromBuffer(buffer);
      console.info(payload.type);

      t.deepEqual(payload, msg.validPayload);
    });
  })
});