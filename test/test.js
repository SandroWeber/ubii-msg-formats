import test from 'ava';
import {getDeviceIdentifier, topicSeparator, valueSeparator} from '../src/index';

(function(){

	test('getDeviceIdentifier', t => {
        let testString = `player1${topicSeparator}left${topicSeparator}arm${valueSeparator}0@kinect1`;
        t.is(getDeviceIdentifier(testString), 'kinect1');
    
        testString = `player1${topicSeparator}left${topicSeparator}arm${valueSeparator}0@56463653:kinect1`;
        t.is(getDeviceIdentifier(testString), '56463653:kinect1');

        testString = `player1${topicSeparator}left${topicSeparator}arm${valueSeparator}0@whitespace@56463653:kinect1`;
        t.is(getDeviceIdentifier(testString), '56463653:kinect1');

        testString = `player1${topicSeparator}left${topicSeparator}arm${valueSeparator}0`;
        t.is(getDeviceIdentifier(testString), '');
    });
    
})();