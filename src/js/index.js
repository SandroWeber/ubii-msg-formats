const TopicDataTranslator = require('./messageTranslator/topicDataTranslator');
const ServiceRequestTranslator = require('./messageTranslator/serviceRequestTranslator');
const ServiceReplyTranslator = require('./messageTranslator/serviceReplyTranslator');

module.exports = {
    TopicDataTranslator: TopicDataTranslator,
    ServiceRequestTranslator: ServiceRequestTranslator,
    ServiceReplyTranslator: ServiceReplyTranslator,
};