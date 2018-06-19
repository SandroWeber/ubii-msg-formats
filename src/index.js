const {topicSeparator, deviceIdPrefix, msgTypeSeparator, valueTypeSeparator} = require('./constants.js');

let getDeviceIdentifier = function(msg){
    if(!msg.includes(deviceIdPrefix)){
        return '';
    }
    let fields = msg.split(deviceIdPrefix);
    return fields[fields.length - 1 ];
}

let getMessageType = function(msg){
    if(!msg.includes(msgTypeSeparator)){
        return '';
    }
    let fields = msg.split(msgTypeSeparator);
    return fields[0];
}

let removeMessageType = function(msg){
    if(!msg.includes(msgTypeSeparator)){
        return '';
    }
   
    return msg.split(msgTypeSeparator).pop();
}

module.exports = {
    'msgTypeSeparator': msgTypeSeparator,
    'topicSeparator': topicSeparator,
    'valueTypeSeparator': valueTypeSeparator,
    'deviceIdPrefix': deviceIdPrefix,
    'getDeviceIdentifier': getDeviceIdentifier,
    'getMessageType': getMessageType,
    'removeMessageType': removeMessageType,
}