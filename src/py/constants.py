import dataclasses
from dataclasses import dataclass
from warnings import warn
import json
from importlib.resources import read_text as _read_text_resource
import proto

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

        def __iter__(self):
            yield from dataclasses.asdict(self)

        def items(self):
            yield from dataclasses.asdict(self).items()

    SERVICES: Services = Services()
    INFO_TOPICS: InfoTopics = InfoTopics()

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

    ERROR: str = 'ubii.general.Error'
    SUCCESS: str = 'ubii.general.Success'
    SERVER: str = 'ubii.servers.Server'
    CLIENT: str = 'ubii.clients.Client'
    CLIENT_LIST: str = 'ubii.clients.ClientList'
    DEVICE: str = 'ubii.devices.Device'
    DEVICE_LIST: str = 'ubii.devices.DeviceList'
    COMPONENT: str = 'ubii.devices.Component'
    COMPONENT_LIST: str = 'ubii.devices.ComponentList'
    TOPIC_MUX: str = 'ubii.devices.TopicMux'
    TOPIC_MUX_LIST: str = 'ubii.devices.TopicMuxList'
    TOPIC_DEMUX: str = 'ubii.devices.TopicDemux'
    TOPIC_DEMUX_LIST: str = 'ubii.devices.TopicDemuxList'
    SERVICE: str = 'ubii.services.Service'
    SERVICE_LIST: str = 'ubii.services.ServiceList'
    SERVICE_REQUEST: str = 'ubii.services.ServiceRequest'
    SERVICE_REPLY: str = 'ubii.services.ServiceReply'
    SERVICE_REUEST_TOPIC_SUBSCRIPTION: str = 'ubii.services.request.TopicSubscription'
    SESSION: str = 'ubii.sessions.Session'
    SESSION_LIST: str = 'ubii.sessions.SessionList'
    SESSION_IO_MAPPING: str = 'ubii.sessions.IOMapping'
    PM: str = 'ubii.processing.ProcessingModule'
    PM_LIST: str = 'ubii.processing.ProcessingModuleList'
    PM_MODULE_IO: str = 'ubii.processing.ModuleIO'
    PM_PROCESSING_MODE: str = 'ubii.processing.ProcessingMode'
    TOPIC_DATA: str = 'ubii.topicData.TopicData'
    TOPIC_DATA_RECORD: str = 'ubii.topicData.TopicDataRecord'
    TOPIC_DATA_RECORD_LIST: str = 'ubii.topicData.TopicDataRecordList'
    TOPIC_DATA_TIMESTAMP: str = 'ubii.topicData.Timestamp'
    DATASTRUCTURE_BOOL_LIST: str = 'ubii.dataStructure.BoolList'
    DATASTRUCTURE_INT32_LIST: str = 'ubii.dataStructure.Int32List'
    DATASTRUCTURE_STRING_LIST: str = 'ubii.dataStructure.StringList'
    DATASTRUCTURE_FLOAT_LIST: str = 'ubii.dataStructure.FloatList'
    DATASTRUCTURE_DOUBLE_LIST: str = 'ubii.dataStructure.DoubleList'
    DATASTRUCTURE_COLOR: str = 'ubii.dataStructure.Color'
    DATASTRUCTURE_IMAGE: str = 'ubii.dataStructure.Image2D'
    DATASTRUCTURE_IMAGE_LIST: str = 'ubii.dataStructure.Image2DList'
    DATASTRUCTURE_KEY_EVENT: str = 'ubii.dataStructure.KeyEvent'
    DATASTRUCTURE_MATRIX_3X2: str = 'ubii.dataStructure.Matrix3x2'
    DATASTRUCTURE_MATRIX_4X4: str = 'ubii.dataStructure.Matrix4x4'
    DATASTRUCTURE_MOUSE_EVENT: str = 'ubii.dataStructure.MouseEvent'
    DATASTRUCTURE_OBJECT2D: str = 'ubii.dataStructure.Object2D'
    DATASTRUCTURE_OBJECT2D_LIST: str = 'ubii.dataStructure.Object2DList'
    DATASTRUCTURE_OBJECT3D: str = 'ubii.dataStructure.Object3D'
    DATASTRUCTURE_OBJECT3D_LIST: str = 'ubii.dataStructure.Object3DList'
    DATASTRUCTURE_POSE2D: str = 'ubii.dataStructure.Pose2D'
    DATASTRUCTURE_POSE3D: str = 'ubii.dataStructure.Pose3D'
    DATASTRUCTURE_QUATERNION: str = 'ubii.dataStructure.Quaternion'
    DATASTRUCTURE_TOUCH_EVENT: str = 'ubii.dataStructure.TouchEvent'
    DATASTRUCTURE_VECTOR2: str = 'ubii.dataStructure.Vector2'
    DATASTRUCTURE_VECTOR3: str = 'ubii.dataStructure.Vector3'
    DATASTRUCTURE_VECTOR4: str = 'ubii.dataStructure.Vector4'
    DATASTRUCTURE_VECTOR8: str = 'ubii.dataStructure.Vector8'

    def __iter__(self):
        yield from dataclasses.asdict(self)

    def items(self):
        yield from dataclasses.asdict(self).items()


MSG_TYPES = _MsgTypes()


def _diff_dicts(compare, expected, **kwargs):
    import json
    left = json.dumps(compare, indent=2, sort_keys=True)
    right = json.dumps(expected, indent=2, sort_keys=True)

    import difflib
    diff = difflib.unified_diff(left.splitlines(True), right.splitlines(True), **kwargs)
    return list(diff)


def _check_constants():
    """
    Loads 'constants.json' (additional file in the ubi-msg-formats python package) and checks the values of
    constants defined in the .json file vs. constants defined in this module.

    Issues a warning if there are mismatches.
    """
    __constants__ = json.loads(_read_text_resource(proto, "constants.json"))
    __current__ = {k: dataclasses.asdict(v)
                   for k, v in globals().items() if dataclasses.is_dataclass(v) and not isinstance(v, type)}

    diff = _diff_dicts(compare=__current__, expected=__constants__, fromfile=__name__, tofile=str(proto))
    if diff:
        warn(f"Constants mismatch: \n{diff}")


_check_constants()
