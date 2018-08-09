exports.validateTopic = function(topic){
    // topic is an array
    if(!Array.isArray(topic)){
        throw new Error('Topic is not valid: Topic is no array. '+topic);
    }

    // topic is an array of strings
    let i, il;
    il = topic.length;
    for(i = 0; i < il; i++){
        if (!(typeof topic[i] === 'string' || topic[i] instanceof String)){
            throw new Error('Topic is not valid: Not all elements of the topic array are strings. '+topic+' at index '+i+': '+topic[i]);
        }
    }
}