import importlib
import json
import difflib
import logging

log = logging.getLogger(__name__)

def diff_dicts(compare, expected, **kwargs):
    """
    Show diff of dictionaries for better error messages.
    """
    left = json.dumps(compare, indent=2, sort_keys=True)
    right = json.dumps(expected, indent=2, sort_keys=True)
    diff = difflib.unified_diff(left.splitlines(True), right.splitlines(True), **kwargs)
    return list(diff)


def import_type(data_type):
    """
    The .proto files declare a package name 'ubii', but this is not reflected in the python package.
    Instead the package is named ubii.proto, to not clash with different packages in the ubii namespace.
    The python files are generated from updated proto files, to produce the correct directory structure.
    The directory structure determines python package names see
    https://developers.google.com/protocol-buffers/docs/reference/python-generated#package

    See the documentation of the ubii-msg-compiler at https://github.com/saggitar/ubii-msg-compiler
    for more information about updating the .proto files to generate a different package structure.

    :param datatype: Ubii data type, starting with "ubii."
    """

    if not data_type.startswith('ubii.'):
        log.debug(f"Type {data_type} is not a protobuf type. Trying google wrapper type {data_type.title()}Value.")
        from google.protobuf import wrappers_pb2 as wrappers
        type_ = getattr(wrappers, f'{data_type.title()}Value', None)
    else:
        package, type_ = data_type.replace('ubii.', 'ubii.proto.').rsplit('.', maxsplit=1)
        package = importlib.import_module(package)
        type_ = getattr(package, type_, None)

    return type_
