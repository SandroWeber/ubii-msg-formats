#!/usr/bin/env python

"""
https://github.com/protocolbuffers/protobuf/issues/1491
Googles own python plugin implementation for protoc does not compile files with relative imports, like
e.g. https://github.com/danielgtaylor/python-betterproto which also generates prettier python code.
The problem is, that the implementation from betterproto only works when all sources are compiled
simultaneously (all proto files as arguments to `protoc` invocation, otherwise files might be
overwritten.
This would break the support for build tools like cmake / make and so on, so it's not possible to implement it
this way in the official plugin.

"""
import operator
import pprint
import shutil
import sys
import os
import argparse
import subprocess
from enum import auto, Flag
from functools import reduce, wraps
from itertools import chain
from pathlib import Path
import logging
from distutils.spawn import find_executable
from typing import List, Iterable, Callable
from warnings import warn

log = logging.getLogger(__name__)

if not sys.warnoptions:
    os.environ["PYTHONWARNINGS"] = "ignore"  # ignore warnings from subprocesses but print them

__mypy__ = False
__betterproto__ = False
__protoc__ = None
__output_dir__: Path = None

try:
    import mypy
    import mypy_protobuf
    __mypy__ = True
except ImportError:
    message = f"No working `mypy` found in $PYTHONPATH. If you want to generate stub files, " \
              f"make sure `mypy` and `mypy-protobuf` are installed for the python executable {sys.executable}."
    warn(message)

try:
    import betterproto
    __betterproto__ = True
except ImportError:
    message = f"No working `betterproto` found in $PYTHONPATH. If you want to generate optional python files, " \
              f"make sure `betterproto[compiler]` is installed for the python executable {sys.executable}."
    warn(message)


def get_protoc() -> Path:
    """
    Finds protoc executable from path or environment variable
    """
    global __protoc__
    if __protoc__:
        return __protoc__

    environment = os.environ.get('PROTOC')
    if environment and os.path.exists(environment):
        protoc = Path(environment)
        assert protoc.exists(), f"{protoc.resolve()} does not exist, can't use protoc from PROTOC environment variable."
        assert protoc.is_file(), f"{protoc.resolve()} is not a file, can't use protoc from PROTOC environment variable."
        log.info(f"Using protoc from PROTOC environment variable {protoc.resolve()}.")
    else:
        protoc = find_executable("protoc")
        if protoc:
            log.info(f"Found {protoc}")
        else:
            log.debug(f"$PATH = {os.environ['PATH']}")
            log.error(f"protoc is not installed nor found in $PATH."
                      " Please compile it or install the binary package.")
            sys.exit(3)

    __protoc__ = Path(protoc)
    return __protoc__


def set_output_dir(path: Path):
    global __output_dir__
    path.mkdir(parents=True, exist_ok=True)
    __output_dir__ = path

def get_output_dir() -> Path:
    assert __output_dir__, "No output dir. Calling get_output_dir before set_output_dir?"
    return __output_dir__


def call_protoc(*sources: Path, require=True, dry_run=False, includes: List[os.PathLike] = None, **proto_args):
    """Invokes the Protocol Compiler."""

    missing_sources = [s for s in sources if not s.exists()]
    if any(missing_sources):
        if require:
            sys.stderr.write(f"Can't find required file[s]: {', '.join(os.fspath(s) for s in sources)}")
            sys.exit(3)
        else:
            return

    protoc_command: List[str] = [os.fspath(get_protoc())]  # protoc executable
    protoc_command += [f"-I{os.fspath(include)}" for include in includes]  # includes
    protoc_command += [f'--{k}={v}' for k, v in proto_args.items()]  # protoc arguments
    protoc_command += [os.fspath(s) for s in sources]  # .proto files

    command = " ".join(str(c) for c in protoc_command)
    log.debug(command)
    result = 0
    if not dry_run:
        result = subprocess.call(protoc_command)
    if result != 0:
        sys.exit(result)


def make_path(fun):
    @wraps(fun)
    def wrapped(self, *args, **kwargs):
        output = fun(self, *args, **kwargs)
        if output and isinstance(output, Path):
            output.mkdir(parents=True, exist_ok=True)
        return output
    return wrapped


class CompileOption(Flag):
    """
    Describes available compile options
    """
    PYTHON = auto()
    JAVA = auto()
    JAVASCRIPT = auto()
    JSLIBRARY = auto()
    JSINDIVIDUAL = auto()
    CSHARP = auto()
    CPP = auto()
    PYTHON_BETTER_PROTO = auto()
    MYPY = auto()
    ALL = PYTHON | JAVA | JAVASCRIPT | CSHARP | CPP | MYPY | PYTHON_BETTER_PROTO

    @property
    def protoc_plugin_name(self):
        if self == CompileOption.PYTHON: return 'python'
        if self == CompileOption.JAVA: return 'java'
        if self & (CompileOption.JAVASCRIPT | CompileOption.JSLIBRARY | CompileOption.JSINDIVIDUAL): return 'js'
        if self == CompileOption.CSHARP: return 'csharp'
        if self == CompileOption.CPP: return 'cpp'
        if self == CompileOption.PYTHON_BETTER_PROTO: return 'python_betterproto'
        if self == CompileOption.MYPY: return 'mypy'

    @property
    def arguments(self) -> List:
        """
        Arguments that can be used to tigger this compilation
        """

        arguments = []
        if (self & CompileOption.ALL) == CompileOption.ALL: arguments += ['all']
        if (self & CompileOption.PYTHON) == CompileOption.PYTHON: arguments += ['py']
        if (self & CompileOption.JAVA) == CompileOption.JAVA: arguments += ['java']
        if (self & CompileOption.JAVASCRIPT) == CompileOption.JAVASCRIPT: arguments += ['js']
        if (self & CompileOption.CSHARP) == CompileOption.CSHARP: arguments += ['cs']
        if (self & CompileOption.CPP) == CompileOption: arguments += ['cpp']
        # s(ome options only work when the module constants are set
        if (self & CompileOption.MYPY) == CompileOption.MYPY: arguments += ['mypy'] if __mypy__ else []
        if (self & CompileOption.PYTHON_BETTER_PROTO) == CompileOption.PYTHON_BETTER_PROTO: arguments += ['better'] if __betterproto__ else []
        # other options have no associated arguments
        return arguments

    @staticmethod
    def from_str(value) -> 'CompileOption':
        matching = reduce(operator.and_, [o for o in CompileOption if value in o.arguments])

        if matching & CompileOption.JAVASCRIPT:
            # replace javascript with individual and library flags
            matching &= ~CompileOption.JAVASCRIPT
            matching |= CompileOption.JSINDIVIDUAL | CompileOption.JSLIBRARY

        if matching:
            return matching

        raise ValueError(f"{value} is no valid option.")

    @staticmethod
    def from_flags(flags: 'CompileOption') -> List['CompileOption']:
        """
        Return all options which are not combinations of other options
        Like normal integer flags, individual flags are all powers of 2,
        see https://docs.python.org/3/library/enum.html#flag
        combined flags are not, so we test that with `o.value & (o.value - 1)`
        """
        return [o for o in CompileOption if o & flags and not o.value & (o.value - 1)]

    @property
    @make_path
    def output_dir(self):
        output = get_output_dir()
        if self == CompileOption.PYTHON: return output / "py/ubii"
        if self == CompileOption.JAVA: return output / "java"
        if self == CompileOption.JAVASCRIPT: return output / "js"
        if self == CompileOption.JSLIBRARY: return f'library=protobuf_library,binary:{CompileOption.JAVASCRIPT.output_dir}'
        if self == CompileOption.JSINDIVIDUAL: return f'import_style=commonjs,binary:{CompileOption.JAVASCRIPT.output_dir}'
        if self == CompileOption.CSHARP: return output / "cs"
        if self == CompileOption.CPP: return output / "cpp"
        if self == CompileOption.PYTHON_BETTER_PROTO: return CompileOption.PYTHON.output_dir / "better_proto"
        if self == CompileOption.MYPY: return CompileOption.PYTHON.output_dir
        # output dirs only make sense for individual options. not combined ones.

    def __str__(self):
        return self.name.lower() if self.name else repr(self)


def generate_protos(option: CompileOption,
                    includes: Iterable[Path],
                    proto_files: Iterable[Path],
                    **kwargs):
    protoc_args = {
        f'{option.protoc_plugin_name}_out': option.output_dir,
        'includes': includes
    }
    protoc_args.update(kwargs)
    call_protoc(*proto_files, **protoc_args)


def run(args):
    log.debug(f"Running compile for {args.flags}")
    options = CompileOption.from_flags(args.flags)

    for option in options:
        generate_protos(includes=args.includes,
                        option=option,
                        proto_files=args.found_files,
                        dry_run=args.dry_run,
                        require=bool(args.file_inputs))

    log.info(f"Compiled proto files for option[s] {', '.join(str(o) for o in options)}")


def post_process(args):
    """
    Some options require additonal post processing like generating better __init__.py files in the generated python modules
    """
    def generate_recursive_inits(package_path: Path):
        """
        Generate recursive init files with wildcard imports for a package.
        """
        for directory in [d for d in package_path.glob('**/') if d.is_dir()]:
            modules = (p.stem for p in directory.glob('*.py') if not p.stem.startswith('_'))
            packages = (p.stem for p in directory.glob('*') if not p.stem.startswith('_') and p.is_dir())
            with (directory / '__init__.py').open('w') as f:
                f.write('\n'.join(f"from .{s} import *" for s in chain(modules, packages)))

        log.info(f"Generated __init__.py files for python package {package_path}")

    if CompileOption.PYTHON & args.flags:
        # generate inits and copy additonal files to output dir
        generate_recursive_inits(CompileOption.PYTHON.output_dir)
        needed_files = ['constants.json']
        found = chain(*[dir.glob(pattern) for pattern in needed_files for dir in args.includes])
        for data_file in found:
            shutil.copy(src=data_file, dst=CompileOption.PYTHON.output_dir / 'proto')

    if CompileOption.PYTHON_BETTER_PROTO & args.flags:
        # generate top level init
        (CompileOption.PYTHON_BETTER_PROTO.output_dir / "__init__.py").touch(exist_ok=True)
        # for unknown reasons the better proto plugin generates an empty folder `ubii/services` in the working dir.
        folder = Path('./ubii/services')
        if folder.exists():
            try:
                folder.rmdir()
                folder.parent.rmdir()
            except IOError as e:
                warn(f"Error {e} when trying to remove unnecessary folder generated by {CompileOption.PYTHON_BETTER_PROTO}.")


def configure_compile_options(args):
    """ Generate flags from passed option"""
    if args.option is None:
        args.option = ['all']

    args.flags = reduce(operator.or_, [CompileOption.from_str(o) for o in args.option])

def configure_logging(args):
    """ Set logging verbosity """
    if args.dry_run:
        args.verbose = 3

    logging.basicConfig(stream=sys.stdout, level=logging.ERROR - 10 * args.verbose, format="%(message)s")

def configure_paths(args):
    """
    Update path from inputs and possibly virtualenv to find protoc and additional protoc plugins
    """
    set_output_dir(args.out)
    path = os.environ.get("PATH", "").split(os.pathsep)

    protoc = os.environ.get('PROTOC')
    if args.protoc and protoc:
        log.debug(f"PROTOC={protoc}, --protoc={args.protoc}")
        warn(f"Environment variable PROTOC is set, but --protoc is provided.")

    # append directory from --protoc argument to path
    if args.protoc and args.protoc.is_dir():
        path += [os.fspath(args.protoc)]

    # append working dir to path
    path += [os.getcwd()]

    # append directory including python variable to path if not in virtualenv (then this has already be done)
    if not os.environ.get('VIRTUALENV'):
        python = Path(sys.executable)
        path += [os.fspath(python.parent)]

    os.environ["PATH"] = os.pathsep.join(path)


def configure_inputs(args):
    """ Search for proto files and set args.includes and args.input_files according to args.inputs"""
    inputs: List[Path] = args.inputs
    args.file_inputs = [p for p in inputs if p.is_file()]
    args.includes = [p for p in inputs if p.is_dir()]
    args.found_files = chain(*[p.glob("**/*.proto") for p in args.includes],  # find all .proto files recursive
                             args.file_inputs)  # also include all inputs which are files

    args.found_files = list(args.found_files)  # we need a list to not exhaust the iterator


def initialize():
    parser = argparse.ArgumentParser()
    formatted = ', '.join("[{}] {}".format(o.arguments[0], o) for o in CompileOption if o.arguments)

    parser.add_argument('-o', dest='option', action='extend', nargs='+', choices=CompileOption.ALL.arguments,
                        help=f'Supported options: {formatted} (default)')
    parser.add_argument('--verbose', '-v', action='count', default=0,
                        help='pass multiple times to increase verbosity, e.g. -vvv')
    parser.add_argument('--output', type=Path, dest='out', default='./dist', metavar='out', help='output directory')
    parser.add_argument('--protoc', type=Path, dest='protoc', default='./external/bin', metavar='path',
                        help='Location of protoc binary')

    parser.add_argument('inputs', type=Path, action='extend', nargs='+',
                        help='Can be specified multiple times. If you use directories they will be searched for `.proto` files,'
                             ' and passed to `protoc` as includes')

    parser.add_argument('--dry-run', action='store_true', help="parse arguments and show resulting protoc calls.")

    args = parser.parse_args()
    configure_paths(args)
    configure_inputs(args)
    configure_compile_options(args)
    configure_logging(args)
    if args.dry_run:
        log.debug(pprint.pformat(vars(args)))
    return args

def main():
    args = initialize()
    run(args)
    post_process(args)


if __name__ == "__main__":
    main()
