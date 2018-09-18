const TopicDataMessageTranslator = require('./messageTranslator/topicDataMessageTranslator');
const SubscribtionMessageTranslator = require('./messageTranslator/subscribtionMessageTranslator');
const RegistrationMessageTranslator = require('./messageTranslator/registrationMessageTranslator');
const UbiiMessageTranslator = require('./messageTranslator/ubiiMessageTranslator');
const ErrorMessageTranslator = require('./messageTranslator/errorMessageTranslator');

module.exports =  {
    TopicDataMessageTranslator: TopicDataMessageTranslator,
    SubscribtionMessageTranslator: SubscribtionMessageTranslator,
    RegistrationMessageTranslator: RegistrationMessageTranslator,
    UbiiMessageTranslator: UbiiMessageTranslator,
    ErrorMessageTranslator: ErrorMessageTranslator,
};