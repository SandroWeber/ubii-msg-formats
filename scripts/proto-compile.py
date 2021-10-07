#!/usr/bin/python
import sys
import os
import argparse
import subprocess
from enum import Enum
from itertools import chain
from pathlib import Path
import logging
from distutils.spawn import find_executable
from typing import List, Set
from warnings import warn

log = logging.getLogger(__name__)

if not sys.warnoptions:
    os.environ["PYTHONWARNINGS"] = "ignore"  # ignore warnings from subprocesses but print them


def update_path():
    if os.environ.get('VIRTUALENV'):
        return

    # add bin from python executable to PATH
    python = Path(sys.executable)
    bin_dir = os.fspath(python.parent)
    os.environ["PATH"] = os.pathsep.join([bin_dir] + os.environ.get("PATH", "").split(os.pathsep))


USING_MYPY = False
try:
    import mypy
    import mypy_protobuf
    USING_MYPY = True
except ImportError:
    message = f"No working `mypy` found in $PYTHONPATH. If you want to generate stub files, " \
              f"make sure `mypy` and `mypy-protobuf` are installed for the python executable {sys.executable}."
    warn(message)


class Options(Enum):
    PY = 'python'
    JAVA = 'java'
    JS = 'js'
    CS = 'csharp'
    CPP = 'cpp'

    @staticmethod
    def from_str(value) -> Set['Options']:
        if value in ['all']:
            return set(Options)
        elif value in ['py', 'python']:
            return {Options.PY}
        elif value in ['j', 'java']:
            return {Options.JAVA}
        elif value in ['js', 'javascript']:
            return {Options.JS}
        elif value in ['cs', 'csharp']:
            return {Options.CS}
        else:
            raise ValueError(f"{value} is no valid option.")


__protoc__ = None

def get_protoc() -> os.PathLike:
    global __protoc__
    if __protoc__:
        return __protoc__

    local_bin = Path(__file__).parent / '../external/bin'
    protoc_local = list(local_bin.glob("protoc*"))

    if protoc_local:
        if len(protoc_local) != 1:
            log.error(f"Multiple files named 'protoc' found in {local_bin.resolve()}: "
                      f"{', '.join(p.name for p in protoc_local)}")
            sys.exit(2)

        protoc = protoc_local[0]
        log.info(f"Using protoc {protoc.resolve()} from {local_bin.resolve()}.")
    elif 'PROTOC' in os.environ and os.path.exists(os.environ['PROTOC']):
        protoc = os.environ['PROTOC']
        log.info(f"Using protoc from PROTOC environment variable {protoc}.")
    else:
        protoc = find_executable("protoc")
        if protoc:
            log.info(f"Found {protoc}")
        else:
            log.error("protoc is not installed nor found in /external/bin."
                      " Please compile it or install the binary package.")
            sys.exit(3)

    __protoc__ = protoc
    return __protoc__

def generate_recursive_inits(package_path: Path):
    """
    Generate recursive init files with wildcard imports for a package.
    """
    for directory in [d for d in package_path.glob('**/') if d.is_dir()]:
        modules = (p.stem for p in directory.glob('*.py') if not p.stem.startswith('_'))
        packages = (p.stem for p in directory.glob('*') if not p.stem.startswith('_') and p.is_dir())
        with (directory / '__init__.py').open('w') as f:
            f.write('\n'.join(f"from .{s} import *" for s in chain(modules, packages)))

    log.info("Generated __init__.py files for python package")


def run_protoc(include, sources: List[Path], require=True, **kwargs):
    """Invokes the Protocol Compiler to generate a _pb2.py from the given
    .proto file.  Does nothing if the output already exists and is newer than
    the input.

    :param **kwargs: optional arguments passed to the protoc compiler
    """
    missing_sources = [s for s in sources if not s.exists()]
    if any(missing_sources):
        if require:
            sys.stderr.write(f"Can't find required file[s]: {', '.join(os.fspath(s) for s in sources)}")
            sys.exit(3)
        else:
            return

    protoc_command: List[str] = [os.fspath(get_protoc())]
    protoc_command += [f"-I{include}", "-I."]  # include includePath and current working dir
    protoc_command += [f'--{k}={v}' for k, v in kwargs.items()]
    protoc_command += [os.fspath(s) for s in sources]

    log.debug(" ".join(str(c) for c in protoc_command))
    result = subprocess.call(protoc_command)
    if result != 0:
        sys.exit(result)


def generate_protos(output_dir: Path, proto_sources: Path, include: Path, language: str):
    proto_files = list(proto_sources.glob("**/*.proto"))  # find all proto files in source dir (recursive)
    output_dir.mkdir(parents=True, exist_ok=True)
    protoc_args = {f'{language}_out': output_dir}

    if language == 'js':
        # build js library
        as_library = f'library=protobuf_library,binary:{output_dir}'
        run_protoc(include=include, sources=proto_files, js_out=as_library)
        # prepare output path for individual file compilation
        output_dir = f'import_style=commonjs,binary:{output_dir}'

    if language == 'python' and USING_MYPY:
        protoc_args['mypy_out'] = output_dir

    for p in proto_files:
        run_protoc(include=include, sources=[p], **protoc_args)

    log.info("Compiled for " + language)

def chosen_option(args):
    options: Set[Options] = args.opt

    file_directory = Path(__file__).parent
    src_directory = file_directory / '../src'
    dist_dir = file_directory / f'../dist'

    for option in options:
        generate_protos(output_dir=dist_dir / option.name.lower(),
                        proto_sources=src_directory / 'proto',
                        include=src_directory,
                        language=option.value)

    if Options.PY in options:
        generate_recursive_inits(dist_dir / 'py/proto')

    log.info(f"Compiled proto files for option[s] {' '.join(o.name for o in options)}")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--opt',
                        type=Options.from_str,
                        default='all',
                        help='Supported options: [py] python, [j] java, [js] javascript, [cs] csharp, [all] all')
    
    parser.add_argument('--verbose', '-v', action='count', default=0)
    args = parser.parse_args()
    logging.basicConfig(stream=sys.stdout, level=logging.ERROR - 10 * args.verbose, format="%(message)s")
    update_path()
    chosen_option(args)


if __name__ == "__main__":
    main()
