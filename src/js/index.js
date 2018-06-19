const {topicSeparator, deviceIdPrefix} = require('./constants.js');

let getDeviceIdentifier = function(msg){
    if(!msg.includes(deviceIdPrefix)){
        return '';
    }
    let fields = msg.split(deviceIdPrefix);
    return fields[fields.length - 1 ];
}

module.exports = {
    'topicSeparator': topicSeparator,
    'deviceIdPrefix': deviceIdPrefix,
    'getDeviceIdentifier': getDeviceIdentifier,
}