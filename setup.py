import sys
import setuptools
from importlib import metadata

build_proto_name = 'build_py_proto'
build_cmds = [c for c in metadata.entry_points()['distutils.commands']
              if c.name == build_proto_name]

if not build_cmds:
    print(f"No distutils command with name {build_proto_name} found."
          f" Did you install the `ubii-msg-compiler` package?")
    sys.exit(1)
else:
    assert len(build_cmds) == 1
    build_py = build_cmds[0].load()

setuptools.setup(
    cmdclass={
        'build_py': build_py
    }
)
