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

let extractTopic = function(msg){
    if(!msg.includes(msgTypeSeparator)){
        return '';
    }
    let fields = msg.toString().split(msgTypeSeparator);

    if(!fields[1].includes(valueTypeSeparator)){
        return '';
    }
    fields = fields[1].toString().split(valueTypeSeparator);
    return fields[0];
}
let extractValue = function(msg){
    if(!msg.includes(valueTypeSeparator)){
        return '';
    }
    let fields = msg.toString().split(valueTypeSeparator);

    if(!fields[1].includes(deviceIdPrefix)){
        return '';
    }
    fields = fields[1].toString().split(deviceIdPrefix);
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
    'extractTopic': extractTopic,
    'extractMessageType': extractMessageType,
    'extractValue': extractValue,
    'removeMessageType': removeMessageType,
}