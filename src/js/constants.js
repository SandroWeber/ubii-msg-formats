const MSG_TYPES = {
  SERVICE_REQUEST: 'ubii.service.ServiceRequest',
  SERVICE_REPLY: 'ubii.service.ServiceReply',
  TOPIC_DATA: 'ubii.topicData.TopicData'
};

const DEFAULT_TOPICS = {
  SERVICES: {
    CLIENT_REGISTRATION: '/services/client_registration',
    DEVICE_REGISTRATION: '/services/device_registration',
    TOPIC_SUBSCRIPTION: '/services/topic_subscription'
  }
};

module.exports = {
  MSG_TYPES: MSG_TYPES,
  DEFAULT_TOPICS: DEFAULT_TOPICS
};
