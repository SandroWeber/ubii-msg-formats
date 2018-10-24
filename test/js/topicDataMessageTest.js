import test from 'ava';
import {
    UbiiMessageTranslator,
} from '../../src/js';

(function () {

    // helper:

    let getMessageWithTopicDataRecords = (context, topicDataRecords) => {
        return context.translator.createMessageFromPayload(
            {
                topicDataMessage: {
                    deviceIdentifier: 'superDevice',
                    topicDataRecords: topicDataRecords
                }
            });
    }

    let getComparisonObjectWithTopicDataRecords = (topicDataRecords) => {
        return {
            topicDataMessage: {
                deviceIdentifier: 'superDevice',
                topicDataRecords: topicDataRecords
            }
        };
    };

    let generalDataStructureTestProcess = (test, rawTopicDataRecords) => {
        let topicDataRecords = JSON.parse(JSON.stringify(rawTopicDataRecords));
        delete topicDataRecords[0].type;
        let dataType = rawTopicDataRecords[0].type;
        let comparisonObject = getComparisonObjectWithTopicDataRecords(topicDataRecords);
        let rawComparisonObject = getComparisonObjectWithTopicDataRecords(rawTopicDataRecords);
        let messageOne = getMessageWithTopicDataRecords(test.context, topicDataRecords);
        let buffer = test.context.translator.createBufferFromMessage(messageOne);
        let messageTwo = test.context.translator.createMessageFromBuffer(buffer);

        // test snapshot
        test.snapshot(messageTwo);
        // test message fields
        test.true(checkTemplateKeys(rawComparisonObject, messageTwo));
        // test stringified message
        test.true(JSON.stringify(messageTwo) === JSON.stringify(comparisonObject));
        // test stringified object
        let payload = test.context.translator.createPayloadFromMessage(messageTwo);
        test.true(JSON.stringify(payload) === JSON.stringify(comparisonObject));
        // test topicDataRecords topic
        test.is(messageTwo.topicDataMessage.topicDataRecords[0].topic,
            comparisonObject.topicDataMessage.topicDataRecords[0].topic);
        // test oneof specifier
        test.is(messageTwo.topicDataMessage.topicDataRecords[0].type,
            dataType);
        // compare specific data type keys
        let keys = Object.keys(messageTwo.topicDataMessage.topicDataRecords[0][dataType]);
        for (let i = 0; i < keys.length; i++) {
            test.is(messageTwo.topicDataMessage.topicDataRecords[0][dataType][keys[i]],
                comparisonObject.topicDataMessage.topicDataRecords[0][dataType][keys[i]]);
        }

        return messageTwo;
    }

    let checkTemplateKeys = function (template, item) {
        // if both x and y are null or undefined and exactly the same
        if (template === item) {
            return true;
        }

        // if they are not strictly equal, they both need to be Objects or Arrays containining Objects
        if (!(template instanceof Object || template instanceof Array) ||
            !(item instanceof Object || item instanceof Array)) {
            return false;
        }

        for (var key in template) {
            if (!template.hasOwnProperty(key)) {
                continue;
            }

            if (item[key] === undefined) {
                return false;
            }

            // if they have the same strict value or identity then they are equal
            if (template[key] === item[key]) {
                continue;
            }

            // Numbers, Strings, Functions, Booleans must be strictly equal
            if (typeof (template[key]) !== "object") {
                return false;
            }

            // Objects and Arrays must be tested recursively
            if (!checkTemplateKeys(template[key], item[key])) {
                return false;
            }
        }
        // only test keys of the template entitiy

        return true;
    }

    // test cases:

    test.beforeEach(t => {
        t.context.translator = new UbiiMessageTranslator();
    });

    test('create basic', t => {
        t.notThrows(() => {
            getMessageWithTopicDataRecords(t.context,
                [{
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
                ]);
        });
    });

    test('basic structure', t => {
        let messageOne = getMessageWithTopicDataRecords(t.context,
            [{
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
            ]);
        let comparisonObject = getComparisonObjectWithTopicDataRecords(
            [{
                    topic: 'awesomeTopic',
                    type: 'number',
                    number: 30
                },
                {
                    topic: 'awesomeTopic2',
                    type: 'vector3',
                    vector3: {
                        x: 2000.1,
                        y: 100.0,
                        z: 567.000678
                    }
                }
            ]);
        let rawComparisonObject = getComparisonObjectWithTopicDataRecords(
            [{
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
            ]);
        let buffer = t.context.translator.createBufferFromMessage(messageOne);
        let messageTwo = t.context.translator.createMessageFromBuffer(buffer);

        t.snapshot(messageTwo);

        // stringified
        t.true(JSON.stringify(messageTwo) === JSON.stringify(rawComparisonObject));

        // oneofs
        t.is(messageTwo.topicDataMessage.topicDataRecords.length,
            comparisonObject.topicDataMessage.topicDataRecords.length);

        t.is(messageTwo.topicDataMessage.topicDataRecords[0].topic,
            comparisonObject.topicDataMessage.topicDataRecords[0].topic);
        t.is(messageTwo.topicDataMessage.topicDataRecords[0].type, 'number');
        t.is(messageTwo.topicDataMessage.topicDataRecords[0].number,
            comparisonObject.topicDataMessage.topicDataRecords[0].number);

        t.is(messageTwo.topicDataMessage.topicDataRecords[1].topic,
            comparisonObject.topicDataMessage.topicDataRecords[1].topic);
        t.is(messageTwo.topicDataMessage.topicDataRecords[1].type, 'vector3');
        t.is(messageTwo.topicDataMessage.topicDataRecords[1].vector3.x,
            comparisonObject.topicDataMessage.topicDataRecords[1].vector3.x);
        t.is(messageTwo.topicDataMessage.topicDataRecords[1].vector3.y,
            comparisonObject.topicDataMessage.topicDataRecords[1].vector3.y);
        t.is(messageTwo.topicDataMessage.topicDataRecords[1].vector3.z,
            comparisonObject.topicDataMessage.topicDataRecords[1].vector3.z);

        // as object
        let payload = t.context.translator.createPayloadFromMessage(messageTwo);
        t.true(JSON.stringify(payload) === JSON.stringify(rawComparisonObject));
    });

    test('number', t => {
        let rawTopicDataRecords = [{
            topic: 'awesomeTopic',
            type: 'number',
            number: 8098
        }];

        generalDataStructureTestProcess(t, rawTopicDataRecords);
    });

    test('boolean', t => {
        let rawTopicDataRecords = [{
            topic: 'awesomeTopic',
            type: 'boolean',
            boolean: false
        }];

        generalDataStructureTestProcess(t, rawTopicDataRecords);
    });

    test('string', t => {
        let rawTopicDataRecords = [{
            topic: 'awesomeTopic',
            type: 'string',
            string: 'I am a string.'
        }];

        generalDataStructureTestProcess(t, rawTopicDataRecords);
    });

    test('vector2', t => {
        let rawTopicDataRecords = [{
            topic: 'awesomeTopic',
            type: 'vector2',
            vector2: {
                x: 723974298.890,
                y: 8275786.809088
            }
        }];

        generalDataStructureTestProcess(t, rawTopicDataRecords);
    });

    test('vector3', t => {
        let rawTopicDataRecords = [{
            topic: 'awesomeTopic',
            type: 'vector3',
            vector3: {
                x: 723974298.890,
                y: 8275786.809088,
                z: 798789.0000008
            }
        }];

        generalDataStructureTestProcess(t, rawTopicDataRecords);
    });

    test('vector4', t => {
        let rawTopicDataRecords = [{
            topic: 'awesomeTopic',
            type: 'vector4',
            vector4: {
                x: 723974298.890,
                y: 8275786.809088,
                z: 798789.0000008,
                w: 76897908098.980808
            }
        }];

        generalDataStructureTestProcess(t, rawTopicDataRecords);
    });

    test('quaternion', t => {
        let rawTopicDataRecords = [{
            topic: 'awesomeColorTopic',
            type: 'quaternion',
            quaternion: {
                x: 723974298.890,
                y: 8275786.809088,
                z: 798789.0000008,
                w: 76897908098.980808
            }
        }];

        generalDataStructureTestProcess(t, rawTopicDataRecords);
    });

    test('matrix3x2', t => {
        let rawTopicDataRecords = [{
            topic: 'awesomeTopic',
            type: 'matrix3x2',
            matrix3x2: {
                m00: 723974298.890,
                m01: 8275786.809088,

                m10: 1324.890,
                m11: 5473.809088,

                m20: 36735.890,
                m21: 3736753.36573,
            }
        }];

        generalDataStructureTestProcess(t, rawTopicDataRecords);
    });

    test('matrix4x4', t => {
        let rawTopicDataRecords = [{
            topic: 'awesomeTopic',
            type: 'matrix4x4',
            matrix4x4: {
                m00: 723974298.890,
                m01: 8275786.809088,
                m02: 723974298.890,
                m03: 8275786.809088,

                m10: 56765.5673,
                m11: 98679.689689,
                m12: 689667.890,
                m13: 46746.809047588,

                m20: 4675.890,
                m21: 82755674786.8096088,
                m22: 7235467974298.845690,
                m23: 82754567786.8094567088,

                m30: 46746577645.890,
                m31: 82754657786.809476088,
                m32: 4567.890,
                m33: 47467.809047688,
            }
        }];

        generalDataStructureTestProcess(t, rawTopicDataRecords);
    });

    test('color', t => {
        let rawTopicDataRecords = [{
            topic: 'awesomeColorTopic',
            type: 'color',
            color: {
                r: 1.0,
                g: 0.5,
                b: 0.5,
                a: 0.5,
            }
        }];

        generalDataStructureTestProcess(t, rawTopicDataRecords);
    });

})();