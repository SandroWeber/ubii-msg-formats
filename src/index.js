const {topicSeparator, deviceIdPrefix, msgTypeSeparator, valueTypeSeparator} = require('./constants.js');

let getDeviceIdentifier = function(msg){
    if(!msg.includes(deviceIdPrefix)){
        return '';
    }
    let fields = msg.split(deviceIdPrefix);
    return fields[fields.length - 1 ];
}

module.exports = {
    'msgTypeSeparator': msgTypeSeparator,
    'topicSeparator': topicSeparator,
    'valueTypeSeparator': valueTypeSeparator,
    'deviceIdPrefix': deviceIdPrefix,
    'getDeviceIdentifier': getDeviceIdentifier,
}