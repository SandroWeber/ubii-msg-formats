const {topicSeparator, deviceIdPrefix, msgTypeSeparator, valueTypeSeparator} = require('./constants.js');

let extractDeviceIdentifier = function(msg){
    if(!msg.includes(deviceIdPrefix)){
        return '';
    }
    let fields = msg.toString().split(deviceIdPrefix);
    return fields[fields.length - 1 ];
}

let extractMessageType = function(msg){
    if(!msg.includes(msgTypeSeparator)){
        return '';
    }
    let fields = msg.toString().split(msgTypeSeparator);
    return fields[0];
}

let removeMessageType = function(msg){
    if(!msg.includes(msgTypeSeparator)){
        return '';
    }
   
    return msg.toString().split(msgTypeSeparator).pop();
}

module.exports = {
    'msgTypeSeparator': msgTypeSeparator,
    'topicSeparator': topicSeparator,
    'valueTypeSeparator': valueTypeSeparator,
    'deviceIdPrefix': deviceIdPrefix,
    'extractDeviceIdentifier': extractDeviceIdentifier,
    'extractMessageType': extractMessageType,
    'removeMessageType': removeMessageType,
}