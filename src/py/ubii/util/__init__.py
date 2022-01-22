from collections import namedtuple

import importlib
import logging

try:
    from importlib.metadata import version, PackageNotFoundError
except ImportError:  # for Python<3.8
    from importlib_metadata import version, PackageNotFoundError

from proto import Message as ProtoPlusMessage

import ubii.proto
from .constants import MSG_TYPES

try:
    __version__ = version("ubii-msg-formats")
except PackageNotFoundError:
    __version__ = None

log = logging.getLogger(__name__)
__imported_types__ = {}

import_name = namedtuple('import_name', ['package', 'type'])


def get_import_name(message_type: str):
    """
    The .proto files declare a package name 'ubii', but this is not reflected in the python package.
    Instead the package is named ubii.proto, to not clash with different packages in the ubii namespace.
    The python files are generated from updated proto files, to produce the correct directory structure.
    The directory structure determines python package names see
    https://developers.google.com/protocol-buffers/docs/reference/python-generated#package

    :param message_type: string describing the data type
    """

    if not message_type.startswith('ubii.'):
        raise ValueError(f"{message_type} does not seem to be a special ubi-interact message type.")

    package, typ = message_type.replace(
        MSG_TYPES.proto_package, ubii.proto.__proto_module__
    ).rsplit('.', maxsplit=1)

    return import_name(package=package, type=typ)


def import_type(message_type: str, reimport=False):
    """
    See the documentation of the ubii-msg-compiler at https://github.com/saggitar/ubii-msg-compiler
    for more information about updating the .proto files to generate a different package structure.

    :param message_type: string describing the data type
    :param reimport: If true force reimport of type
    """

    def _import(name: str) -> ProtoPlusMessage:
        package, type_ = get_import_name(name)
        package = importlib.import_module(package)
        type_ = getattr(package, type_, None)

        if type_ is None:
            raise ValueError(f"{name} could not be imported.")
        return type_

    if message_type not in __imported_types__ or reimport:
        __imported_types__[message_type] = _import(message_type)

    return __imported_types__[message_type]
