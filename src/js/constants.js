const MSG_TYPES = {
  ERROR: 'ubii.general.Error',
  SUCCESS: 'ubii.general.Success',
  SERVICE_REQUEST: 'ubii.services.ServiceRequest',
  SERVICE_REPLY: 'ubii.services.ServiceReply',
  TOPIC_DATA: 'ubii.topicData.TopicData'
};

const DEFAULT_TOPICS = {
  SERVICES: {
    CLIENT_REGISTRATION: '/services/client_registration',
    DEVICE_REGISTRATION: '/services/device_registration',
    TOPIC_SUBSCRIPTION: '/services/topic_subscription',
    SERVER_CONFIG: '/services/server_configuration'
  }
};

module.exports = {
  MSG_TYPES: MSG_TYPES,
  DEFAULT_TOPICS: DEFAULT_TOPICS
};
