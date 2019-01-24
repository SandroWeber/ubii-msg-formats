#!/usr/bin/python

import sys, argparse
import os
import platform
import subprocess

from distutils.spawn import find_executable

# Find the Protocol Compiler.
if 'PROTOC' in os.environ and os.path.exists(os.environ['PROTOC']):
    protoc = os.environ['PROTOC']
else:
    protoc = find_executable("protoc")

def generateInits(pathToOutput):
   
    dirn = []
    start = True

    while len(dirn) != 0 or start:
        if start: p = pathToOutput 
        else: p = dirn.pop(0)
        
       
        for (dirpath, dirnames, filenames) in os.walk(p):
            dirn.extend([p+"/"+x for x in dirnames])
            filename = dirpath+'/__init__.py'
            #print(filename)
            os.makedirs(os.path.dirname(filename), exist_ok=True)
            if start != True:
                with open(filename, "w") as f:
                    pass
            break

        start = False
    
def getAllProtos(pathToProtos):

    dirn = []
    files = []
    start = True

    while len(dirn) != 0 or start:
        if start: p = pathToProtos 
        else: p = dirn.pop(0)

        start = False
        for (dirpath, dirnames, filenames) in os.walk(p):
            dirn.extend([p+"/"+x for x in dirnames])
            #destdir.extend([po+"/"+x for x in dirnames])
            files.extend(p+"/"+x for x in filenames)
            break
        
    return files

def generate_proto(source, pathToOutput, pathToProtos, includePath ,protocArg,require = True):
    """Invokes the Protocol Compiler to generate a _pb2.py from the given
    .proto file.  Does nothing if the output already exists and is newer than
    the input."""

    if not require and not os.path.exists(source):
        return

    #print('path to protos: '+pathToProtos)
    #print('path to output: '+pathToOutput)

    if not os.path.exists(source):
        sys.stderr.write("Can't find required file: %s\n" % source)
        sys.exit(-1)

    if protoc is None:
        sys.stderr.write(
            "protoc is not installed nor found in ../src.  Please compile it "
            "or install the binary package.\n")
        sys.exit(-1)

    protoc_command = [ protoc, "-I"+includePath, "-I.", "--"+protocArg+"_out="+pathToOutput, source ]
    print(protoc_command)
    if subprocess.call(protoc_command) != 0:
        sys.exit(-1)

def generateProtos(pathToOutput = './../dist/py', pathToProtos='./../src/proto', includePath='./../src' , protoc_arg='python'):
    re = getAllProtos(pathToProtos)
    #print(re)
    os.makedirs(pathToOutput, exist_ok=True)

    if protoc_arg == 'js':
        pathToOutput = 'import_style=commonjs,binary:' + pathToOutput

    for i in re:
        generate_proto(i,pathToOutput,pathToProtos,includePath,protoc_arg,False)

    return pathToOutput


def choosed_option(args):

    if args.opt == 'py' or args.opt == 'python':
        p = generateProtos()
        generateInits(p)
    elif args.opt == 'j' or args.opt == 'java':
        generateProtos('./../dist/java','./../src/proto','./../src','java')
    elif args.opt == 'js' or args.opt == 'javascript':
        generateProtos('./../dist/js','./../src/proto','./../src','js')


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--opt', type=str, default='python',
                        help='Supported options: [py] python, [j] java, [js] javascript')

    args = parser.parse_args()
    sys.stdout.write(str(choosed_option(args)))


if __name__ == "__main__":
    main()
