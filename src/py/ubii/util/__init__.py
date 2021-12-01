import importlib
import logging

from proto import Message as ProtoPlusMessage
from .constants import MSG_TYPES
import ubii.proto


log = logging.getLogger(__name__)
__imported_types__ = {}


def import_type(data_type: str, reimport=False):
    """
    The .proto files declare a package name 'ubii', but this is not reflected in the python package.
    Instead the package is named ubii.proto, to not clash with different packages in the ubii namespace.
    The python files are generated from updated proto files, to produce the correct directory structure.
    The directory structure determines python package names see
    https://developers.google.com/protocol-buffers/docs/reference/python-generated#package

    See the documentation of the ubii-msg-compiler at https://github.com/saggitar/ubii-msg-compiler
    for more information about updating the .proto files to generate a different package structure.

    :param datatype: Ubii data type, starting with "ubii."
    :param proto_type: Enumerator
    """
    def _make_wrapper_type(name: str) -> ProtoPlusMessage:
        log.debug(f"Type {name} is not a protobuf type. Trying google wrapper type {name.title()}Value.")
        from google.protobuf import wrappers_pb2 as wrappers
        wrapper = getattr(wrappers, f"{name.title()}Value", None)
        type_ = type(f"{name.title()}Value", (ProtoPlusMessage,), {})
        return type(type_.wrap(wrapper()))

    def _import(name: str) -> ProtoPlusMessage:
        package, type_ = name.replace(MSG_TYPES.proto_package, ubii.proto.__proto_module__).rsplit('.', maxsplit=1)
        package = importlib.import_module(package)
        return getattr(package, type_, None)

    def _check(type_):
        if type_ is None:
            raise ValueError(f"{data_type} could not be imported.")

        return type_

    if data_type not in __imported_types__ or reimport:
        __imported_types__[data_type] = _check(
            _make_wrapper_type(data_type)
            if not data_type.startswith('ubii.')
            else _import(data_type)
        )

    return __imported_types__[data_type]

