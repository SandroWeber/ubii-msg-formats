import dataclasses
from dataclasses import dataclass
from warnings import warn


@dataclass(frozen=True)
class _DefaultTopics:
    """
    This is a nested dataclass that contains all defined constants for Ubi Interact Default
    Topics. When loading the module, the same constants are dynamically loaded from the
    constants.json file of the installed ubii-msg-formats package which supplies the `proto` module.
    If there is a mismatch between constants defined in this class and constants loaded from
    `constants.json` the module will not load and give an error message.

    The dataclass is frozen, so you are not allowed to change the constants.
    It also implements the iterable interface, thus calling `iter` on the class (e.g. implicitly
    when using it in a loop) will work correctly.
    It also implements an `items` method, which is just a wrapper to call dataclasses.asdict(cls).items()
    """

    @dataclass(frozen=True)
    class Services:
        SERVER_CONFIG: str = '/services/server_configuration'
        CLIENT_REGISTRATION: str = '/services/client/registration'
        CLIENT_DEREGISTRATION: str = '/services/client/deregistration'
        CLIENT_GET_LIST: str = '/services/client/get_list'
        DEVICE_REGISTRATION: str = '/services/device/registration'
        DEVICE_DEREGISTRATION: str = '/services/device/deregistration'
        DEVICE_GET: str = '/services/device/get'
        DEVICE_GET_LIST: str = '/services/device/get_list'
        LATENCY_CLIENTS_LIST: str = '/services/latency_clients_list'
        PM_DATABASE_SAVE: str = '/services/processing_module/database/save'
        PM_DATABASE_DELETE: str = '/services/processing_module/database/delete'
        PM_DATABASE_GET: str = '/services/processing_module/database/get'
        PM_DATABASE_GET_LIST: str = '/services/processing_module/database/get_list'
        PM_DATABASE_ONLINE_GET_LIST: str = '/services/processing_module/database/online/get_list'
        PM_DATABASE_LOCAL_GET_LIST: str = '/services/processing_module/database/local/get_list'
        PM_RUNTIME_ADD: str = '/services/processing_module/runtime/add'
        PM_RUNTIME_REMOVE: str = '/services/processing_module/runtime/remove'
        PM_RUNTIME_GET: str = '/services/processing_module/runtime/get'
        PM_RUNTIME_GET_LIST: str = '/services/processing_module/runtime/get_list'
        SESSION_DATABASE_SAVE: str = '/services/session/database/save'
        SESSION_DATABASE_DELETE: str = '/services/session/database/delete'
        SESSION_DATABASE_GET: str = '/services/session/database/get'
        SESSION_DATABASE_GET_LIST: str = '/services/session/database/get_list'
        SESSION_DATABASE_ONLINE_GET_LIST: str = '/services/session/database/online/get_list'
        SESSION_DATABASE_LOCAL_GET_LIST: str = '/services/session/database/local/get_list'
        SESSION_RUNTIME_ADD: str = '/services/session/runtime/add'
        SESSION_RUNTIME_REMOVE: str = '/services/session/runtime/remove'
        SESSION_RUNTIME_GET: str = '/services/session/runtime/get'
        SESSION_RUNTIME_GET_LIST: str = '/services/session/runtime/get_list'
        SESSION_RUNTIME_START: str = '/services/session/runtime/start'
        SESSION_RUNTIME_STOP: str = '/services/session/runtime/stop'
        SESSION_RUNTIME_UPDATE: str = '/services/session/runtime/update'
        TOPIC_DEMUX_DATABASE_SAVE: str = '/services/device/topic_demux/database/save'
        TOPIC_DEMUX_DATABASE_DELETE: str = '/services/device/topic_demux/database/delete'
        TOPIC_DEMUX_DATABASE_GET: str = '/services/device/topic_demux/database/get'
        TOPIC_DEMUX_DATABASE_GET_LIST: str = '/services/device/topic_demux/database/get_list'
        TOPIC_DEMUX_RUNTIME_GET: str = '/services/device/topic_demux/runtime/get'
        TOPIC_DEMUX_RUNTIME_GET_LIST: str = '/services/device/topic_demux/runtime/get_list'
        TOPIC_MUX_DATABASE_SAVE: str = '/services/device/topic_mux/database/save'
        TOPIC_MUX_DATABASE_DELETE: str = '/services/device/topic_mux/database/delete'
        TOPIC_MUX_DATABASE_GET: str = '/services/device/topic_mux/database/get'
        TOPIC_MUX_DATABASE_GET_LIST: str = '/services/device/topic_mux/database/get_list'
        TOPIC_MUX_RUNTIME_GET: str = '/services/device/topic_mux/runtime/get'
        TOPIC_MUX_RUNTIME_GET_LIST: str = '/services/device/topic_mux/runtime/get_list'
        SERVICE_LIST: str = '/services/service_list'
        TOPIC_LIST: str = '/services/topic_list'
        TOPIC_SUBSCRIPTION: str = '/services/topic_subscription'

        def __iter__(self):
            yield from dataclasses.asdict(self)

        def items(self):
            yield from dataclasses.asdict(self).items()

    @dataclass(frozen=True)
    class InfoTopics:
        REGEX_ALL_INFOS: str = '/info/*'
        REGEX_PM_INFOS: str = '/info/processing_module/*'
        NEW_PM: str = '/info/processing_module/new'
        DELETE_PM: str = '/info/processing_module/delete'
        CHANGE_PM: str = '/info/processing_module/change'
        PROCESSED_PM: str = '/info/processing_module/processed'
        REGEX_SESSION_INFOS: str = '/info/session/*'
        NEW_SESSION: str = '/info/session/new'
        DELETE_SESSION: str = '/info/session/delete'
        CHANGE_SESSION: str = '/info/session/change'
        START_SESSION: str = '/info/session/start'
        STOP_SESSION: str = '/info/session/stop'
        RUNNING_SESSION: str = '/info/session/running'
        START_PM: str = '/info/processing_module/start'

        def __iter__(self):
            yield from dataclasses.asdict(self)

        def items(self):
            yield from dataclasses.asdict(self).items()

        @property
        def regexes(self):
            return [self.REGEX_SESSION_INFOS, self.REGEX_PM_INFOS, self.REGEX_ALL_INFOS]

    SERVICES: Services = Services()
    INFO_TOPICS: InfoTopics = InfoTopics()

    def __post_init__(self):
        if isinstance(self.SERVICES, dict):
            object.__setattr__(self, 'SERVICES', self.Services(**self.SERVICES))

        if isinstance(self.INFO_TOPICS, dict):
            object.__setattr__(self, 'INFO_TOPICS', self.Services(**self.SERVICES))

    def __iter__(self):
        yield from dataclasses.asdict(self)

    def items(self):
        yield from dataclasses.asdict(self).items()


DEFAULT_TOPICS = _DefaultTopics()


@dataclass(frozen=True)
class _MsgTypes:
    """
    This is a dataclass that contains all defined constants for Ubi Interact Message Types.
    These can be used as paths for imports relative to the `proto` module, see `ProtoTranslators`.

    When loading the module, the same constants are dynamically loaded from the
    constants.json file of the installed ubii-msg-formats package which supplies the `proto` module.
    If there is a mismatch between constants defined in this class and constants loaded from
    `constants.json` the module will not load and give an error message.

    The dataclass is frozen, so you are not allowed to change the constants.
    It also implements the iterable interface, thus calling `iter` on the class (e.g. implicitly
    when using it in a loop) will work correctly.
    It also implements an `items` method, which is just a wrapper to call dataclasses.asdict(cls).items()
    """
    proto_package = 'ubii'

    ERROR: str = proto_package + '.general.Error'
    SUCCESS: str = proto_package + '.general.Success'
    SERVER: str = proto_package + '.servers.Server'
    CLIENT: str = proto_package + '.clients.Client'
    CLIENT_LIST: str = proto_package + '.clients.ClientList'
    DEVICE: str = proto_package + '.devices.Device'
    DEVICE_LIST: str = proto_package + '.devices.DeviceList'
    COMPONENT: str = proto_package + '.devices.Component'
    COMPONENT_LIST: str = proto_package + '.devices.ComponentList'
    TOPIC_MUX: str = proto_package + '.devices.TopicMux'
    TOPIC_MUX_LIST: str = proto_package + '.devices.TopicMuxList'
    TOPIC_DEMUX: str = proto_package + '.devices.TopicDemux'
    TOPIC_DEMUX_LIST: str = proto_package + '.devices.TopicDemuxList'
    SERVICE: str = proto_package + '.services.Service'
    SERVICE_LIST: str = proto_package + '.services.ServiceList'
    SERVICE_REQUEST: str = proto_package + '.services.ServiceRequest'
    SERVICE_REPLY: str = proto_package + '.services.ServiceReply'
    SERVICE_REUEST_TOPIC_SUBSCRIPTION: str = proto_package + '.services.request.TopicSubscription'
    SESSION: str = proto_package + '.sessions.Session'
    SESSION_LIST: str = proto_package + '.sessions.SessionList'
    SESSION_IO_MAPPING: str = proto_package + '.sessions.IOMapping'
    PM: str = proto_package + '.processing.ProcessingModule'
    PM_LIST: str = proto_package + '.processing.ProcessingModuleList'
    PM_MODULE_IO: str = proto_package + '.processing.ModuleIO'
    PM_PROCESSING_MODE: str = proto_package + '.processing.ProcessingMode'
    TOPIC_DATA: str = proto_package + '.topicData.TopicData'
    TOPIC_DATA_RECORD: str = proto_package + '.topicData.TopicDataRecord'
    TOPIC_DATA_RECORD_LIST: str = proto_package + '.topicData.TopicDataRecordList'
    TOPIC_DATA_TIMESTAMP: str = proto_package + '.topicData.Timestamp'
    DATASTRUCTURE_BOOL: str = "bool"
    DATASTRUCTURE_INT32: str = "int32"
    DATASTRUCTURE_STRING: str = "string"
    DATASTRUCTURE_FLOAT: str = "float"
    DATASTRUCTURE_DOUBLE: str = "double"
    DATASTRUCTURE_BOOL_LIST: str = proto_package + '.dataStructure.BoolList'
    DATASTRUCTURE_INT32_LIST: str = proto_package + '.dataStructure.Int32List'
    DATASTRUCTURE_STRING_LIST: str = proto_package + '.dataStructure.StringList'
    DATASTRUCTURE_FLOAT_LIST: str = proto_package + '.dataStructure.FloatList'
    DATASTRUCTURE_DOUBLE_LIST: str = proto_package + '.dataStructure.DoubleList'
    DATASTRUCTURE_COLOR: str = proto_package + '.dataStructure.Color'
    DATASTRUCTURE_IMAGE: str = proto_package + '.dataStructure.Image2D'
    DATASTRUCTURE_IMAGE_LIST: str = proto_package + '.dataStructure.Image2DList'
    DATASTRUCTURE_KEY_EVENT: str = proto_package + '.dataStructure.KeyEvent'
    DATASTRUCTURE_MATRIX_3X2: str = proto_package + '.dataStructure.Matrix3x2'
    DATASTRUCTURE_MATRIX_4X4: str = proto_package + '.dataStructure.Matrix4x4'
    DATASTRUCTURE_MOUSE_EVENT: str = proto_package + '.dataStructure.MouseEvent'
    DATASTRUCTURE_OBJECT2D: str = proto_package + '.dataStructure.Object2D'
    DATASTRUCTURE_OBJECT2D_LIST: str = proto_package + '.dataStructure.Object2DList'
    DATASTRUCTURE_OBJECT3D: str = proto_package + '.dataStructure.Object3D'
    DATASTRUCTURE_OBJECT3D_LIST: str = proto_package + '.dataStructure.Object3DList'
    DATASTRUCTURE_POSE2D: str = proto_package + '.dataStructure.Pose2D'
    DATASTRUCTURE_POSE3D: str = proto_package + '.dataStructure.Pose3D'
    DATASTRUCTURE_QUATERNION: str = proto_package + '.dataStructure.Quaternion'
    DATASTRUCTURE_TOUCH_EVENT: str = proto_package + '.dataStructure.TouchEvent'
    DATASTRUCTURE_VECTOR2: str = proto_package + '.dataStructure.Vector2'
    DATASTRUCTURE_VECTOR3: str = proto_package + '.dataStructure.Vector3'
    DATASTRUCTURE_VECTOR4: str = proto_package + '.dataStructure.Vector4'
    DATASTRUCTURE_VECTOR8: str = proto_package + '.dataStructure.Vector8'

    def __iter__(self):
        yield from dataclasses.asdict(self)

    def items(self):
        yield from dataclasses.asdict(self).items()


MSG_TYPES = _MsgTypes()


def check_constants(dict_data: dict):
    """
    compares a dictionary vs. constants defined in this module.
    should be used to validate that this module is up to date by comparing it against the `constants` retrieved
    from the master node.

    Issues a warning containing a dictionary diff if there are mismatches.

    :param dict_data: dictionary (should contain the same values as combined in this module)
    :return: True if valid, false if mismatch
    """

    def diff_dicts(compare, expected, **kwargs):
        """
        Show diff of dictionaries for better error messages.
        """
        import json
        import difflib
        left = json.dumps(compare, indent=2, sort_keys=True)
        right = json.dumps(expected, indent=2, sort_keys=True)
        return difflib.unified_diff(left.splitlines(True), right.splitlines(True), **kwargs)

    current = {k: dataclasses.asdict(v)
               for k, v in globals().items() if dataclasses.is_dataclass(v) and not isinstance(v, type)}

    diff = list(diff_dicts(compare=current, expected=dict_data, fromfile=__name__, tofile='constants.json'))
    if diff:
        from . import __version__
        warning = "Constants in constants.py and constants.json don't match:\n{}".format('\n'.join(diff))
        if __version__:
            warning += f"\n You are using version {__version__} of ubii-msg-formats, is this the most recent version?"
        warn(warning)

    return not bool(diff)
