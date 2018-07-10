import test from 'ava';
import {
    extractDeviceIdentifier,
    extractTopic,
    extractValue,
    topicSeparator,
    valueSeparator,
    deviceIdPrefix
} from '../src/legacy/extraction.js';

(function () {


    // Legacy implementation tests
    test('extractDeviceIdentifier', t => {
        let testString = `player1${topicSeparator}left${topicSeparator}arm${valueSeparator}0${deviceIdPrefix}kinect1`;
        t.is(extractDeviceIdentifier(testString), 'kinect1');

        testString = `player1${topicSeparator}left${topicSeparator}arm${valueSeparator}0${deviceIdPrefix}56463653:kinect1`;
        t.is(extractDeviceIdentifier(testString), '56463653:kinect1');

        testString = `player1${topicSeparator}left${topicSeparator}arm${valueSeparator}0${deviceIdPrefix}whitespace${deviceIdPrefix}56463653:kinect1`;
        t.is(extractDeviceIdentifier(testString), '56463653:kinect1');

        testString = `player1${topicSeparator}left${topicSeparator}arm${valueSeparator}0`;
        t.is(extractDeviceIdentifier(testString), '');
    });

    test('extractValue', t => {
        let testString = `player1${topicSeparator}left${topicSeparator}arm${valueSeparator}0${deviceIdPrefix}kinect1`;
        t.is(extractValue(testString), '0');

        testString = `player1${topicSeparator}left${topicSeparator}arm${valueSeparator}1${deviceIdPrefix}56463653:kinect1`;
        t.is(extractValue(testString), '1');

        testString = `player1${topicSeparator}left${topicSeparator}arm${valueSeparator}2${deviceIdPrefix}whitespace${deviceIdPrefix}56463653:kinect1`;
        t.is(extractValue(testString), '2');

        testString = `player1${topicSeparator}left${topicSeparator}arm${valueSeparator}0`;
        t.is(extractValue(testString), '');

        testString = `player1${topicSeparator}left${topicSeparator}arm${deviceIdPrefix}56463653:kinect1`;
        t.is(extractValue(testString), '');
    });

    test('extractTopic', t => {
        let testString = `player1${topicSeparator}left${topicSeparator}arm${valueSeparator}0${deviceIdPrefix}kinect1`;
        t.is(extractTopic(testString), `player1${topicSeparator}left${topicSeparator}arm`);

        testString = `player1${topicSeparator}left${topicSeparator}arm${valueSeparator}1${deviceIdPrefix}56463653_kinect1`;
        t.is(extractTopic(testString), `player1${topicSeparator}left${topicSeparator}arm`);

        testString = `player1${topicSeparator}left${topicSeparator}arm${valueSeparator}2${deviceIdPrefix}whitespace${deviceIdPrefix}56463653_kinect1`;
        t.is(extractTopic(testString), `player1${topicSeparator}left${topicSeparator}arm`);

        testString = `player1${topicSeparator}left${topicSeparator}arm${valueSeparator}0`;
        t.is(extractTopic(testString), `player1${topicSeparator}left${topicSeparator}arm`);

        testString = `player1${topicSeparator}left${topicSeparator}arm${deviceIdPrefix}56463653_kinect1`;
        t.is(extractTopic(testString), '');
    });

})();