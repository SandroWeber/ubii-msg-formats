import importlib
import logging
import re
from collections import namedtuple
from functools import wraps

import ubii.proto
from proto import Message as ProtoPlusMessage

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
        'ubii', ubii.proto.__proto_module__
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


def clean_json(message: str):
    """
    Format json strings (like representations of proto messages) in a nice way.

    :param message:
    """
    cleaned = message.strip()
    formatted = re.sub(r'{\s+', '{', cleaned)
    formatted = re.sub(r'\s', '', formatted)
    return formatted


def patch_wrapper_class_repr():
    def patch(__repr__):
        @wraps(__repr__)
        def wrapped(self):
            type_ = self.__class__
            pb_type_descr = type_.pb().DESCRIPTOR
            vars_ = {name: getattr(self, name) for name in pb_type_descr.fields_by_name}

            def short_repr(value, max_len=50):
                orig = clean_json(str(value))
                if len(orig) < max_len:
                    return orig
                else:
                    return '...'

            formatted = {name: short_repr(value) for name, value in vars_.items() if value}
            return f"{type_.__name__}({formatted})"

            # return f"{name}({clean_json(old_repr)})"

        return wrapped

    ProtoPlusMessage.__repr__ = patch(ProtoPlusMessage.__repr__)
