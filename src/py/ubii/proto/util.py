"""
Utility features to format protobuf messages and implement protobuf wrapper classes with custom behaviour.

Attributes:
    __imported_types__ (dict): module level dictionary caching imported types
"""

import collections
import functools
import importlib
import json
import logging
import re
from abc import ABCMeta
from typing import Dict

import google.protobuf.json_format
import google.protobuf.message
import proto.message

log = logging.getLogger(__name__)
__imported_types__ = {}

import_name = collections.namedtuple('import_name', ['package', 'type'])


def get_import_name(message_type: str):
    """
    The .proto files declare a package name 'ubii', but this is not reflected in the python package.
    Instead the package is named ubii.proto, to not clash with different packages in the ubii namespace.
    The python files are generated from updated proto files, to produce the correct directory structure.
    The directory structure determines python package names see
    https://developers.google.com/protocol-buffers/docs/reference/python-generated#package

    Args:
        message_type (str): string describing the data type

    """

    if not message_type.startswith('ubii.'):
        raise ValueError(f"{message_type} does not seem to be a special ubi-interact message type.")

    from . import __proto_module__
    package, typ = message_type.replace(
        'ubii', __proto_module__
    ).rsplit('.', maxsplit=1)

    return import_name(package=package, type=typ)


def import_type(message_type: str, reimport=False):
    """
    See the documentation of the ubii-msg-compiler at https://github.com/saggitar/ubii-msg-compiler
    for more information about updating the .proto files to generate a different package structure.

    Args:
        message_type (str): string describing the data type
        reimport (bool): If true force reimport of type

    """

    def _import(name: str) -> proto.Message:
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
    Close to ``re.sub(r'{\s+', '{', message.strip())``

    Returns:
        str: cleaned string
    """
    cleaned = message.strip()
    formatted = re.sub(r'{\s+', '{', cleaned)
    formatted = re.sub(r'\s', '', formatted)
    return formatted


def patch_wrapper_class_repr():
    def patch(__repr__):
        @functools.wraps(__repr__)
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

    proto.Message.__repr__ = patch(proto.Message.__repr__)


class ProtoEncoder(json.JSONEncoder):
    """
    Custom encoder to convert Protobuf Messages and Proto-Plus Messages to valid json.
    """

    #: dictionary of default arguments passed to the :meth:`proto.message.Message.to_dict` or
    #: :func:`google.protobuf.json_format.MessageToDict` calls which are used to convert the message object.
    format_options: Dict[str, bool] = {
        "use_integers_for_enums": True,
        "including_default_value_fields": True,
        "preserving_proto_field_name": False,
    }

    def default(self, o):
        """
        returns a serializable object for ``o``, or calls the base implementation (to raise a ``TypeError``).

        Args:
            o (object): (hopefully) serializable object, e.g. Protobuf message

        Returns:
            dict: Dictionary representation of message using :meth:`proto.message.Message.to_dict` or
            :func:`google.protobuf.json_format.MessageToDict`

        Raises:
            TypeError: If object is not serializable as Protobuf Message of by :meth:`json.JSONEncoder.default`

        """
        if isinstance(o, proto.Message):
            return type(o).to_dict(o, **self.format_options)

        if isinstance(o, google.protobuf.message.Message):
            return google.protobuf.json_format.MessageToDict(o, **self.format_options)

        return json.JSONEncoder.default(self, o)


class ProtoMeta(ABCMeta, proto.message.MessageMeta):
    """
    This metaclass is used to inherit from :doc:`plus:index` wrapper classes

    Example:
        Make sure you import and set :mod:`ubii.proto.__protobuf__` in every module
        which defines new :class:`~proto.message.Message` types::

            import ubii.proto as ub
            __protobuf__ = ub.__protobuf__

            class Fancy(ub.Component, metaclass=ub.ProtoMeta):
                @property
                def some_thing_amazing(self)
                    return "Wow"

    """

    def __new__(mcs, name, bases, attrs):
        message_bases = [b for b in bases if isinstance(b, proto.message.MessageMeta)]
        if len(message_bases) != 1:
            raise NotImplemented(f"Can't subclass with {len(message_bases)} Message parent classes")

        parent: proto.message.MessageMeta = message_bases[0]
        cls = super().__new__(mcs, name, bases, {**attrs, **parent.meta.fields})
        cls.meta._pb = parent.pb()
        return cls


__all__ = (
    "get_import_name",
    "import_type",
    "ProtoMeta",
    "ProtoEncoder",
    "patch_wrapper_class_repr"
)
