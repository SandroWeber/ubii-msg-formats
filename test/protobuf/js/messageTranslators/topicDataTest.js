import test from 'ava';
import {
    TopicDataTranslator,
} from '../../../src/js/index';

(function () {

    // helper:

    let getSimpleMessage = (context, topic, type, value) => {
        let payload = {
            deviceIdentifier: 'superDevice',
            topicDataRecord:{
                topic: topic,
            }
        };
        payload.topicDataRecord[type] = value;

        return context.translator.createMessageFromPayload(payload);
    }

    let getComparisonObject = (topic, type, value) => {
        let object = {
            deviceIdentifier: 'superDevice',
            topicDataRecord:{
                topic: topic,
            }
        };
        object.topicDataRecord[type] = value;

        return object;
    };

    let getRawComparisonObject = (topic, type, value) => {
        let object = {
            deviceIdentifier: 'superDevice',
            topicDataRecord:{
                topic: topic,
                type: type
            }
        };
        object.topicDataRecord[type] = value;

        return object;
    };

    let generalDataStructureTestProcess = (test, topic, type, value) => {
        let comparisonObject = getComparisonObject(topic, type, value);
        let rawComparisonObject = getRawComparisonObject(topic, type, value);
        let messageOne = getSimpleMessage(test.context, topic, type, value);
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
        // test topic
        test.is(messageTwo.topicDataRecord.topic,
            comparisonObject.topicDataRecord.topic);
        // test oneof specifier
        test.is(messageTwo.topicDataRecord.type,
            type);
        // compare specific data type keys
        let keys = Object.keys(messageTwo.topicDataRecord[type]);
        for (let i = 0; i < keys.length; i++) {
            test.is(messageTwo.topicDataRecord[type][keys[i]],
                comparisonObject.topicDataRecord[type][keys[i]]);
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
        t.context.translator = new TopicDataTranslator();
    });

    test('create basic', t => {
        t.notThrows(() => {
            getSimpleMessage(t.context, 'awesomeTopic', 'number', 30);
        });
    });

    test('basic structure', t => {
        let messageOne = getSimpleMessage(t.context,
            'awesomeTopic2',
            'vector3',
            {
                x: 2000.1,
                y: 100.0,
                z: 567.000678
            });
        let comparisonObject = getRawComparisonObject(
            'awesomeTopic2',
            'vector3',
            {
                x: 2000.1,
                y: 100.0,
                z: 567.000678
            });
        let rawComparisonObject = getComparisonObject(
            'awesomeTopic2',
            'vector3',
            {
                x: 2000.1,
                y: 100.0,
                z: 567.000678
            });
        let buffer = t.context.translator.createBufferFromMessage(messageOne);
        let messageTwo = t.context.translator.createMessageFromBuffer(buffer);

        t.snapshot(messageTwo);

        // stringified
        t.true(JSON.stringify(messageTwo) === JSON.stringify(rawComparisonObject));

        // oneofs
        t.is(messageTwo.topicDataRecord.length,
            comparisonObject.topicDataRecord.length);

        t.is(messageTwo.topicDataRecord.topic,
            comparisonObject.topicDataRecord.topic);
        t.is(messageTwo.topicDataRecord.type, 'vector3');
        t.is(messageTwo.topicDataRecord.vector3.x,
            comparisonObject.topicDataRecord.vector3.x);
        t.is(messageTwo.topicDataRecord.vector3.y,
            comparisonObject.topicDataRecord.vector3.y);
        t.is(messageTwo.topicDataRecord.vector3.z,
            comparisonObject.topicDataRecord.vector3.z);

        // as object
        let payload = t.context.translator.createPayloadFromMessage(messageTwo);
        t.true(JSON.stringify(payload) === JSON.stringify(rawComparisonObject));
    });

    test('number', t => {
        generalDataStructureTestProcess(t, 'awesomeTopic', 'number', 8098);
    });

    test('boolean', t => {
        generalDataStructureTestProcess(t, 'awesomeTopic', 'boolean', false);
    });

    test('string', t => {
        generalDataStructureTestProcess(t, 'awesomeTopic', 'string', 'I am a string');
    });

    test('vector2', t => {
        generalDataStructureTestProcess(t, 'awesomeTopic', 'vector2', {
            x: 723974298.890,
            y: 8275786.809088
        });
    });

    test('vector3', t => {
        generalDataStructureTestProcess(t, 'awesomeTopic', 'vector3', {
            x: 723974298.890,
            y: 8275786.809088,
            z: 798789.0000008
        });
    });

    test('vector4', t => {
        generalDataStructureTestProcess(t, 'awesomeTopic', 'vector4', {
            x: 723974298.890,
            y: 8275786.809088,
            z: 798789.0000008,
            w: 76897908098.980808
        });
    });

    test('quaternion', t => {
        generalDataStructureTestProcess(t, 'awesomeTopic', 'quaternion', {
            x: 723974298.890,
            y: 8275786.809088,
            z: 798789.0000008,
            w: 76897908098.980808
        });
    });

    test('matrix3x2', t => {
        generalDataStructureTestProcess(t, 'awesomeTopic', 'matrix3x2', {
            m00: 723974298.890,
            m01: 8275786.809088,

            m10: 1324.890,
            m11: 5473.809088,

            m20: 36735.890,
            m21: 3736753.36573,
        });
    });

    test('matrix4x4', t => {
        generalDataStructureTestProcess(t, 'awesomeTopic', 'matrix4x4', {
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
        });
    });

    test('color', t => {
        generalDataStructureTestProcess(t, 'awesomeTopic', 'color', {
            r: 1.0,
            g: 0.5,
            b: 0.5,
            a: 0.5,
        });
    });
})();