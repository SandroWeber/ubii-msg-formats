import test from 'ava';
import {getDeviceIdentifier} from './../src/js/index.js';

(function(){

	test('getDeviceIdentifier', t => {
        let testString = 'player1:left:arm@kinect1';
        t.is(getDeviceIdentifier(testString), 'kinect1');
    
        testString = 'player1:left:arm@56463653:kinect1';
        t.is(getDeviceIdentifier(testString), '56463653:kinect1');

        testString = 'player1:left:arm@whitespace@56463653:kinect1';
        t.is(getDeviceIdentifier(testString), '56463653:kinect1');

        testString = 'player1:left:arm';
        t.is(getDeviceIdentifier(testString), '');
    });
    
})();