#!/usr/bin/python
import sys, argparse
import os
import subprocess
from pathlib import Path
import logging
from distutils.spawn import find_executable

log = logging.getLogger(__name__)
protoc = None


def find_protoc():
    global protoc
    # Find the Protocol Compiler.
    local_bin = Path(__file__).parent / "../external/bin/"
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
        log.info(f"Using protoc from PROTOC environment variable {protoc.resolve()}.")
    else:
        protoc = find_executable("protoc")
        if protoc:
            log.info(f"Found {protoc}")
        else:
            log.error("protoc is not installed nor found in /external/bin."
                      " Please compile it or install the binary package.")
            sys.exit(3)

def generateInits(pathToOutput):
    for p in Path(pathToOutput).glob("**/"):
        initpath = p / '__init__.py'
        initpath.touch()
    log.info("Generated __init__.py files for python package")

def generate_proto(source, pathToOutput, includePath, protocArg, require=True):
    """Invokes the Protocol Compiler to generate a _pb2.py from the given
    .proto file.  Does nothing if the output already exists and is newer than
    the input."""

    if not require and not os.path.exists(source):
        return

    if not os.path.exists(source):
        sys.stderr.write(f"Can't find required file: {source}")
        sys.exit(3)

    protoc_command = [protoc, f"-I{includePath}", "-I.", f"--{protocArg}_out={pathToOutput}", source]
    log.debug(" ".join(str(c) for c in protoc_command))

    result = subprocess.call(protoc_command)
    if result != 0:
        sys.exit(result)


def generateProtos(pathToOutput = './../dist/py', pathToProtos='./../src/proto', includePath='./../src' , protoc_arg='python'):
    protolist = list(Path(pathToProtos).glob("**/*.proto"))
    os.makedirs(pathToOutput, exist_ok=True)

    if protoc_arg == 'js':
        ### build js library
        pathToOutputLibrary = 'library=protobuf_library,binary:' + pathToOutput
        protoc_command = [protoc, f"-I{includePath}", "-I.", f"--{protoc_arg}_out={pathToOutputLibrary}"] + protolist

        log.debug(" ".join(str(c) for c in protoc_command))
        result = subprocess.call(protoc_command)
        if result != 0:
            sys.exit(result)

        # prepare output path for individual file compilation
        pathToOutput = 'import_style=commonjs,binary:' + pathToOutput

    for p in protolist:
        generate_proto(p, pathToOutput, includePath, protoc_arg, False)

    log.info("Compiled for " + protoc_arg)
    return Path(pathToOutput)

def chosen_option(args):
    file_directory = Path(__file__).parent
    proto_dir_name = "proto"
    src_directory = file_directory / '../src'
    proto_src_directory = src_directory / proto_dir_name

    if args.opt == 'py' or args.opt == 'python':
        outdir = generateProtos(os.path.join(file_directory, '../dist/py'), proto_src_directory, src_directory, 'python')
        generateInits(outdir / proto_dir_name)
    elif args.opt == 'j' or args.opt == 'java':
        generateProtos(os.path.join(file_directory, '../dist/java'), proto_src_directory, src_directory, 'java')
    elif args.opt == 'js' or args.opt == 'javascript':
        generateProtos(os.path.join(file_directory, '../dist/js'), proto_src_directory, src_directory, 'js')
    elif args.opt == 'cs' or args.opt == 'csharp':
        generateProtos(os.path.join(file_directory, '../dist/cs'), proto_src_directory, src_directory, 'csharp')
    elif args.opt == 'cpp' or args.opt == 'cplusplus':
        generateProtos(os.path.join(file_directory, '../dist/cpp'), proto_src_directory, src_directory, 'cpp')
    elif args.opt == 'all':
        # python
        outdir = generateProtos(os.path.join(file_directory, '../dist/py'), proto_src_directory, src_directory, 'python')
        generateInits(outdir / proto_dir_name)
        # java
        generateProtos(os.path.join(file_directory, '../dist/java'), proto_src_directory, src_directory, 'java')
        # javascript
        generateProtos(os.path.join(file_directory, '../dist/js'), proto_src_directory, src_directory, 'js')
        # C#
        generateProtos(os.path.join(file_directory, '../dist/cs'), proto_src_directory, src_directory, 'csharp')
        # C++
        generateProtos(os.path.join(file_directory, '../dist/cpp'), proto_src_directory, src_directory, 'cpp')

    log.info(f"Compiled proto files for option {args.opt}")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--opt', type=str, default='all',
                        help='Supported options: [py] python, [j] java, [js] javascript, [cs] csharp, [all] all')
    
    parser.add_argument('--verbose', '-v', action='count', default=0)
    args = parser.parse_args()
    logging.basicConfig(stream=sys.stdout, level=logging.ERROR - 10 * args.verbose, format="%(message)s")
    find_protoc()
    chosen_option(args)


if __name__ == "__main__":
    main()
