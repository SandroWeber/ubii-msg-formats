var protobuf = require("protobufjs");

const {topicSeparator, deviceIdPrefix, msgTypeSeparator, valueSeparator} = require('./constants.js');

let extractDeviceIdentifier = function(msg){
    //ToDo: validate msg
    
    if(!msg.includes(deviceIdPrefix)){
        return '';
    }
    let fields = msg.toString().split(deviceIdPrefix);
    return fields[fields.length - 1 ];
}

let extractMessageType = function(msg){
    //ToDo: validate msg

    if(!msg.includes(msgTypeSeparator)){
        return '';
    }
    let fields = msg.toString().split(msgTypeSeparator);
    return fields[0];
}

let extractTopic = function(msg){
    //ToDo: validate msg

    let tempMsg;
    let fields;
    if(msg.includes(msgTypeSeparator)){
        fields = msg.toString().split(msgTypeSeparator);
        tempMsg = fields[1];
    }else{
        tempMsg = msg;
    }

    if(!tempMsg.includes(valueSeparator)){
        return '';
    }
    fields = tempMsg.toString().split(valueSeparator);
    return fields[0];
}
let extractValue = function(msg){
    //ToDo: validate msg

    if(!msg.includes(valueSeparator)){
        return '';
    }
    let fields = msg.toString().split(valueSeparator);
    

    if(!fields[1].includes(deviceIdPrefix)){
        return '';
    }
    fields = fields[1].toString().split(deviceIdPrefix);
    return fields[0];
}

let removeMessageType = function(msg){
    //ToDo: validate msg

    if(!msg.includes(msgTypeSeparator)){
        return '';
    }
   
    return msg.toString().split(msgTypeSeparator).pop();
}

module.exports = {
    'msgTypeSeparator': msgTypeSeparator,
    'topicSeparator': topicSeparator,
    'valueSeparator': valueSeparator,
    'deviceIdPrefix': deviceIdPrefix,
    'extractDeviceIdentifier': extractDeviceIdentifier,
    'extractTopic': extractTopic,
    'extractMessageType': extractMessageType,
    'extractValue': extractValue,
    'removeMessageType': removeMessageType,
}

// validation

// Validate complete structure parts

// Validate complete structure 

// Validate each property