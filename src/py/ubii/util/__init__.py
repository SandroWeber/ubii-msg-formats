import importlib
import logging
from importlib.metadata import version, PackageNotFoundError

import ubii.proto
from proto import Message as ProtoPlusMessage
from .constants import MSG_TYPES

try:
    __version__ = version("ubii-msg-formats")
except PackageNotFoundError:
    __version__ = None

log = logging.getLogger(__name__)
__imported_types__ = {}


def import_type(message_type: str, reimport=False):
    """
    The .proto files declare a package name 'ubii', but this is not reflected in the python package.
    Instead the package is named ubii.proto, to not clash with different packages in the ubii namespace.
    The python files are generated from updated proto files, to produce the correct directory structure.
    The directory structure determines python package names see
    https://developers.google.com/protocol-buffers/docs/reference/python-generated#package

    See the documentation of the ubii-msg-compiler at https://github.com/saggitar/ubii-msg-compiler
    for more information about updating the .proto files to generate a different package structure.

    :param message_type: string describing the data type
    :param reimport: If true force reimport of type
    """

    def _import(name: str) -> ProtoPlusMessage:
        if not name.startswith('ubii.'):
            raise ValueError(f"{name} does not seem to be a special ubi-interact message type.")

        package, type_ = name.replace(MSG_TYPES.proto_package, ubii.proto.__proto_module__).rsplit('.', maxsplit=1)
        package = importlib.import_module(package)
        type_ = getattr(package, type_, None)

        if type_ is None:
            raise ValueError(f"{name} could not be imported.")
        return type_

    if message_type not in __imported_types__ or reimport:
        __imported_types__[message_type] = _import(message_type)

    return __imported_types__[message_type]
