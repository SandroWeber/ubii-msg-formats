import test from 'ava';
import { SessionTranslator } from '../../../src/js';

let IOType = Object.freeze({ INPUT: 0, OUTPUT: 1 });

/* run tests */

test.beforeEach(t => {
  t.context.translator = new SessionTranslator();

  t.context.validPayload = {
    name: 'session',
    interactions: [
      {
        name: 'interaction1',
        causes: [
          {
            name: 'cause1',
            callback: '(input, state) => { return true; }'
          }
        ],
        effects: [
          {
            name: 'effect1',
            callback: '(output, state) => { }'
          }
        ]
      }
    ],
    interactionTopicMappings: [
      {
        interactionIdentifier: 'interaction1',
        topic: 'topic1',
        ioType: IOType.INPUT,
        internalName: 'input1'
      }
    ]
  };

  t.context.invalidPayload = {
    name: 'session',
    interactionTopicMappings: [],
    invalidField: true
  };
});

test('create buffer from valid payload', t => {
  let payload, buffer;
  // valid payload
  payload = t.context.validPayload;
  buffer = t.context.translator.createBufferFromPayload(payload);

  t.is(buffer !== undefined, true);
});

test('encode buffer from valid payload, then decode buffer', t => {
  let payload, encodedMessage, decodedMessage, buffer;
  payload = t.context.validPayload;
  encodedMessage = t.context.translator.createMessageFromPayload(payload);
  buffer = t.context.translator.createBufferFromPayload(payload);
  decodedMessage = t.context.translator.createMessageFromBuffer(buffer);

  t.deepEqual(JSON.stringify(encodedMessage), JSON.stringify(decodedMessage));
});
