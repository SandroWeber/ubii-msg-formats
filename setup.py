import os

import setuptools
from distutils import file_util, dir_util
from pathlib import Path
from setuptools.command.sdist import sdist as sdist_orig
from itertools import chain

NAME = "ubii-msg-formats"
CONSTANTS_FILE = Path("dist/constants.json")
PROTO_DIR = Path("dist/py/proto")
UTIL_DIR = Path("src/py")
PACKAGE_DIR = Path(f"build/{NAME}")


def generate_recursive_inits(dir):
    for initfile in dir.glob('**/__init__.py'):
        modules = (p.stem for p in initfile.parent.glob('*.py') if not p.stem.startswith('_'))
        packages = (p.stem for p in initfile.parent.glob('*') if not p.stem.startswith('_') and
                    p.is_dir())
        with initfile.open('w') as f:
            f.write('\n'.join(f"from .{s} import *" for s in chain(modules, packages)))


class sdist(sdist_orig):
    def run(self):
        assert PROTO_DIR.exists(), f"Python Code expected in {PROTO_DIR.resolve()} but directory is missing!"
        
        generate_recursive_inits(PROTO_DIR)
        try:
            file_util.copy_file(os.fspath(CONSTANTS_FILE), os.fspath(PROTO_DIR))
            dir_util.copy_tree(os.fspath(PROTO_DIR), os.fspath(PACKAGE_DIR / 'proto'))
            dir_util.copy_tree(os.fspath(UTIL_DIR), os.fspath(PACKAGE_DIR / 'util'))
        except OSError:
            raise

        super().run()


with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setuptools.setup(
    name=NAME,
    version="0.1.0",
    author="Maximilian Schmidt",
    author_email="ga97lul@in.tum.de",
    description="Python Package for Ubi Interact Protocol Buffers",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/SandroWeber/ubii-msg-formats.git",
    # classifiers=[
    #     "Programming Language :: Python :: 3",
    #     "License :: OSI Approved :: MIT License",
    #     "Operating System :: OS Independent",
    # ],
    package_dir={"": str(PACKAGE_DIR.parent)},
    packages=setuptools.find_packages(where=str(PACKAGE_DIR.parent)),
    package_data={'': ['constants.json']},
    python_requires=">=3.6",
    cmdclass={'sdist': sdist},
    install_requires=['protobuf >= 3.16.0']
)
