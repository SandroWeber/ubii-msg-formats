import test from 'ava';
import {extractDeviceIdentifier, topicSeparator, valueSeparator} from '../src/index';

(function(){

	test('extractDeviceIdentifier', t => {
        let testString = `player1${topicSeparator}left${topicSeparator}arm${valueSeparator}0@kinect1`;
        t.is(extractDeviceIdentifier(testString), 'kinect1');
    
        testString = `player1${topicSeparator}left${topicSeparator}arm${valueSeparator}0@56463653:kinect1`;
        t.is(extractDeviceIdentifier(testString), '56463653:kinect1');

        testString = `player1${topicSeparator}left${topicSeparator}arm${valueSeparator}0@whitespace@56463653:kinect1`;
        t.is(extractDeviceIdentifier(testString), '56463653:kinect1');

        testString = `player1${topicSeparator}left${topicSeparator}arm${valueSeparator}0`;
        t.is(extractDeviceIdentifier(testString), '');
    });
    
})();