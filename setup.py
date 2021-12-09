import contextlib
import sys
from pathlib import Path
from warnings import warn
import json

import setuptools
from importlib import metadata

build_proto_name = 'build_py_proto'
build_cmds = [c for c in metadata.entry_points()['distutils.commands']
              if c.name == build_proto_name]

if not build_cmds:
    warn(f"No distutils command with name {build_proto_name} found. Did you install the [compiler] extra?")
    sys.exit(1)
else:
    assert len(build_cmds) == 1
    build_py_proto = build_cmds[0].load()


@contextlib.contextmanager
def mock_constants_json(json_file):
    """
    The constants.json is not included in the python package, and we don't want to maintain a copy.
    Therefore, we change to contents of this file for the duration of the setup.
    If you come up with a better solution, feel free to change that.
    """
    json_file = Path(json_file)

    with json_file.open() as packaged_json:
        orig = json.load(packaged_json)

    with (json_file.parent / orig['contents']).open() as source_json:
        temp = json.load(source_json)

    with json_file.open('w') as packaged_json:
        json.dump(temp, packaged_json, indent=2)

    yield
    with json_file.open('w') as packaged_json:
        json.dump(orig, packaged_json, indent=2)


class build_py(build_py_proto):
    def run(self):
        with mock_constants_json('./src/py/ubii/util/constants.json'):
            super().run()


setuptools.setup(
    cmdclass={
        'build_py': build_py,
        build_proto_name: build_py,
    }
)
