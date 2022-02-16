import sys
import setuptools
try:
    from importlib import metadata
except ImportError: # for Python<3.8
    import importlib_metadata as metadata

# disable file finder of setuptools_scm, maybe change MANIFEST.in sometime
try:
    import setuptools_scm.integration
    setuptools_scm.integration.find_files = lambda _: []
except ImportError:
    pass

build_proto_name = 'build_py_proto'
build_cmds = [c for c in metadata.entry_points()['distutils.commands']
              if c.name == build_proto_name]

if not build_cmds:
    print(f"No distutils command with name {build_proto_name} found."
          f" Did you install the `ubii-msg-compiler` package?")
    sys.exit(1)
else:
    build_cmds = list(set(build_cmds))
    assert len(build_cmds) == 1
    build_py = build_cmds[0].load()

setuptools.setup(
    cmdclass={
        'build_py': build_py,
        build_proto_name: build_py,
    }
)
