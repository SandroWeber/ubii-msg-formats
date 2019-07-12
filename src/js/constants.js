const MSG_TYPES = {
  ERROR: 'ubii.general.Error',
  SUCCESS: 'ubii.general.Success',
  CLIENT: 'ubii.clients.Client',
  DEVICE: 'ubii.devices.Device',
  TOPIC_MUX: 'ubii.devices.TopicMux',
  TOPIC_MUX_LIST: 'ubii.devices.TopicMuxList',
  TOPIC_DEMUX: 'ubii.devices.TopicDemux',
  TOPIC_DEMUX_LIST: 'ubii.devices.TopicDemuxList',
  INTERACTION: 'ubii.interactions.Interaction',
  SERVICE_REQUEST: 'ubii.services.ServiceRequest',
  SERVICE_REPLY: 'ubii.services.ServiceReply',
  SESSION: 'ubii.sessions.Session',
  TOPIC_DATA: 'ubii.topicData.TopicData'
};

const DEFAULT_TOPICS = {
  SERVICES: {
    CLIENT_REGISTRATION: '/services/client/registration',
    CLIENT_DEREGISTRATION: '/services/client/deregistration',
    CLIENT_GET_LIST: '/services/client/get_list',
    DEVICE_REGISTRATION: '/services/device/registration',
    DEVICE_GET_LIST: '/services/device/get_list',
    /* interactions */
    INTERACTION_REGISTRATION: '/services/interaction/registration',
    INTERACTION_DATABASE_GET: '/services/interaction/database/get',
    INTERACTION_DATABASE_GET_LIST: '/services/interaction/database/get_list',
    INTERACTION_REPLACE: '/services/interaction/replace',
    INTERACTION_DELETE: '/services/interaction/delete',
    SERVER_CONFIG: '/services/server_configuration',
    /* session */
    SESSION_REGISTRATION: '/services/session/registration',
    SESSION_RUNTIME_GET: '/services/session/runtime/get',
    SESSION_RUNTIME_GET_LIST: '/services/session/runtime/get_list',
    SESSION_DATABASE_GET: '/services/session/database/get',
    SESSION_DATABASE_GET_LIST: '/services/session/database/get_list',
    SESSION_REPLACE: '/services/session/replace',
    SESSION_DELETE: '/services/session/delete',
    SESSION_START: '/services/session/start',
    SESSION_STOP: '/services/session/stop',
    /* topic demultiplexer device */
    TOPIC_DEMUX_DATABASE_ADD: '/services/device/topic_demux/database/add',
    TOPIC_DEMUX_DATABASE_DELETE: '/services/device/topic_demux/database/delete',
    TOPIC_DEMUX_DATABASE_GET: '/services/device/topic_demux/database/get',
    TOPIC_DEMUX_DATABASE_GET_LIST: '/services/device/topic_demux/database/get_list',
    TOPIC_DEMUX_DATABASE_REPLACE: '/services/device/topic_demux/database/replace',
    TOPIC_DEMUX_RUNTIME_GET: '/services/device/topic_demux/runtime/get',
    TOPIC_DEMUX_RUNTIME_GET_LIST: '/services/device/topic_demux/runtime/get_list',
    TOPIC_DEMUX_RUNTIME_START: '/services/device/topic_demux/runtime/start',
    TOPIC_DEMUX_RUNTIME_STOP: '/services/device/topic_demux/runtime/stop',
    /* topic multiplexer device */
    TOPIC_MUX_DATABASE_ADD: '/services/device/topic_mux/database/add',
    TOPIC_MUX_DATABASE_DELETE: '/services/device/topic_mux/database/delete',
    TOPIC_MUX_DATABASE_GET: '/services/device/topic_mux/database/get',
    TOPIC_MUX_DATABASE_GET_LIST: '/services/device/topic_mux/database/get_list',
    TOPIC_MUX_DATABASE_REPLACE: '/services/device/topic_mux/database/replace',
    TOPIC_MUX_RUNTIME_GET: '/services/device/topic_mux/runtime/get',
    TOPIC_MUX_RUNTIME_GET_LIST: '/services/device/topic_mux/runtime/get_list',
    TOPIC_MUX_RUNTIME_START: '/services/device/topic_mux/runtime/start',
    TOPIC_MUX_RUNTIME_STOP: '/services/device/topic_mux/runtime/stop',
    /* topics */
    TOPIC_LIST: '/services/topic_list',
    TOPIC_SUBSCRIPTION: '/services/topic_subscription',
  }
};

module.exports = {
  MSG_TYPES: MSG_TYPES,
  DEFAULT_TOPICS: DEFAULT_TOPICS
};
