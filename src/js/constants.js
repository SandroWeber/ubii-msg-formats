const MSG_TYPES = {
  ERROR: 'ubii.general.Error',
  SUCCESS: 'ubii.general.Success',
  SERVICE_REQUEST: 'ubii.services.ServiceRequest',
  SERVICE_REPLY: 'ubii.services.ServiceReply',
  SESSION: 'ubii.sessions.Session',
  TOPIC_DATA: 'ubii.topicData.TopicData'
};

const DEFAULT_TOPICS = {
  SERVICES: {
    CLIENT_REGISTRATION: '/services/client_registration',
    DEVICE_REGISTRATION: '/services/device_registration',
    SERVER_CONFIG: '/services/server_configuration',
    SESSION_REGISTRATION: '/services/session/registration',
    SESSION_START: '/services/session/start',
    SESSION_STOP: '/services/session/stop',
    TOPIC_LIST: '/services/topic_list',
    TOPIC_SUBSCRIPTION: '/services/topic_subscription',
  }
};

module.exports = {
  MSG_TYPES: MSG_TYPES,
  DEFAULT_TOPICS: DEFAULT_TOPICS
};
