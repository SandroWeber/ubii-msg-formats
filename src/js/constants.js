const MSG_TYPES = {
  ERROR: 'ubii.general.Error',
  SUCCESS: 'ubii.general.Success',
  CLIENT: 'ubii.clients.Client',
  DEVICE: 'ubii.devices.Device',
  INTERACTION: 'ubii.interactions.Interaction',
  SERVICE_REQUEST: 'ubii.services.ServiceRequest',
  SERVICE_REPLY: 'ubii.services.ServiceReply',
  SESSION: 'ubii.sessions.Session',
  TOPIC_DATA: 'ubii.topicData.TopicData'
};

const DEFAULT_TOPICS = {
  SERVICES: {
    CLIENT_REGISTRATION: '/services/client_registration',
    CLIENT_GET_LIST: '/services/client/get_list',
    DEVICE_REGISTRATION: '/services/device_registration',
    DEVICE_GET_LIST: '/services/device/get_list',
    INTERACTION_REGISTRATION: '/services/interaction/registration',
    INTERACTION_RUNTIME_GET: '/services/interaction/runtime/get',
    INTERACTION_RUNTIME_GET_LIST: '/services/interaction/runtime/get_list',
    INTERACTION_DATABASE_GET: '/services/interaction/database/get',
    INTERACTION_DATABASE_GET_LIST: '/services/interaction/database/get_list',
    INTERACTION_REPLACE: '/services/interaction/replace',
    INTERACTION_DELETE: '/services/interaction/delete',
    SERVER_CONFIG: '/services/server_configuration',
    SESSION_REGISTRATION: '/services/session/registration',
    SESSION_RUNTIME_GET: '/services/session/runtime/get',
    SESSION_RUNTIME_GET_LIST: '/services/session/runtime/get_list',
    SESSION_DATABASE_GET: '/services/session/database/get',
    SESSION_DATABASE_GET_LIST: '/services/session/database/get_list',
    SESSION_REPLACE: '/services/session/replace',
    SESSION_DELETE: '/services/session/delete',
    SESSION_START: '/services/session/start',
    SESSION_STOP: '/services/session/stop',
    TOPIC_DEMUX_REGISTRATION: '/services/device/demux_registration',
    TOPIC_MUX_REGISTRATION: '/services/device/mux_registration',
    TOPIC_LIST: '/services/topic_list',
    TOPIC_SUBSCRIPTION: '/services/topic_subscription',
  }
};

module.exports = {
  MSG_TYPES: MSG_TYPES,
  DEFAULT_TOPICS: DEFAULT_TOPICS
};
