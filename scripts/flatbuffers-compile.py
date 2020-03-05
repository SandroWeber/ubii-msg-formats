#!/usr/bin/python

import sys
import argparse
import os
import platform
import subprocess

from distutils.spawn import find_executable

# Find the Protocol Compiler.
flatc_local = os.path.join(os.path.dirname(__file__), '../external/bin/flatc')
flatc_local_windows = os.path.join(
    os.path.dirname(__file__), '../external/bin/flatc.exe')
if os.path.isfile(flatc_local):
    flatc = flatc_local
elif os.path.isfile(flatc_local_windows):
    flatc = flatc_local_windows
elif 'FLATC' in os.environ and os.path.exists(os.environ['FLATC']):
    flatc = os.environ['FLATC']
else:
    flatc = find_executable("flatc")


def generateInits(pathToOutput):

    dirn = []
    start = True

    while len(dirn) != 0 or start:
        if start:
            p = pathToOutput
        else:
            p = dirn.pop(0)

        for (dirpath, dirnames, filenames) in os.walk(p):
            dirn.extend([p+"/"+x for x in dirnames])
            filename = dirpath+'/__init__.py'
            # print(filename)
            os.makedirs(os.path.dirname(filename), exist_ok=True)
            if start != True:
                with open(filename, "w") as f:
                    pass
            break

        start = False


def getAllSourceFilesFBS(rootDirectory):

    dirn = []
    files = []
    start = True

    while len(dirn) != 0 or start:
        if start:
            p = rootDirectory
        else:
            p = dirn.pop(0)

        start = False
        for (dirpath, dirnames, filenames) in os.walk(p):
            dirn.extend([p+"/"+x for x in dirnames])
            #destdir.extend([po+"/"+x for x in dirnames])
            files.extend(p+"/"+x for x in filenames)
            break

    return files


def compileFBS(sourceFile, outputPath, includePath, targetLanguage, require=True):
    """Invokes the Protocol Compiler to generate a language specific from the given
    .fbs file.  Does nothing if the output already exists and is newer than
    the input."""

    if not require and not os.path.exists(sourceFile):
        return

    #print('path to output: '+outputPath)

    if not os.path.exists(sourceFile):
        sys.stderr.write("Can't find required file: %s\n" % sourceFile)
        sys.exit(-1)

    if flatc is None:
        sys.stderr.write(
            "flatc is not installed nor found in /external/bin.  Please compile it "
            "or install the binary package.\n")
        sys.exit(-1)

    flatc_command = [flatc, "--" + targetLanguage,
                     "-I", includePath, "-o", outputPath]
    # if targetLanguage == "js":
    #    flatc_command.append("--es6-js-export")
    flatc_command.append(sourceFile)
    # print(flatc_command)
    if subprocess.call(flatc_command) != 0:
        sys.exit(-1)


def compileAllFBS(outputPath='./../dist/flatbuffers/py', sourceRoot='./../src/flatbuffers', includePath='./../src/flatbuffers', targetLanguage='python'):
    fileList = getAllSourceFilesFBS(sourceRoot)
    # print(fileList)
    os.makedirs(outputPath, exist_ok=True)

    """ if targetLanguage == 'js':
        ### build js library
        pathToOutputLibrary = 'library=protobuf_library,binary:' + outputPath
        flatc_command = [ flatc, "-I"+includePath, "-I.", "--"+targetLanguage+"_out="+pathToOutputLibrary ]
        for i in fileList:
            flatc_command.append(i)
        print(flatc_command)
        if subprocess.call(flatc_command) != 0:
            sys.exit(-1)

        # prepare output path for individual file compilation
        outputPath = 'import_style=commonjs,binary:' + outputPath """

    for f in fileList:
        compileFBS(f, outputPath, includePath, targetLanguage, False)

    return outputPath


def chosen_option(args):
    file_directory = os.path.dirname(__file__)
    fbs_src_directory = os.path.join(file_directory, '../src/flatbuffers')
    include_directory = fbs_src_directory

    destination_root = '../dist/flatbuffers'
    if args.lang == 'py' or args.lang == 'python':
        p = compileAllFBS(os.path.join(file_directory, destination_root+'/py'),
                          fbs_src_directory, include_directory, 'python')
        generateInits(p)
    elif args.lang == 'j' or args.lang == 'java':
        compileAllFBS(os.path.join(file_directory, destination_root +
                                   '/java'), fbs_src_directory, include_directory, 'java')
    elif args.lang == 'js' or args.lang == 'javascript':
        compileAllFBS(os.path.join(file_directory, destination_root +
                                   '/js'), fbs_src_directory, include_directory, 'js')
    elif args.lang == 'cs' or args.lang == 'csharp':
        compileAllFBS(os.path.join(file_directory, destination_root+'/cs'),
                      fbs_src_directory, include_directory, 'csharp')
    elif args.lang == 'cpp' or args.lang == 'cplusplus':
        compileAllFBS(os.path.join(file_directory, destination_root +
                                   '/cpp'), fbs_src_directory, include_directory, 'cpp')
    elif args.lang == 'all':
        # python
        p = compileAllFBS(os.path.join(file_directory, destination_root+'/py'),
                          fbs_src_directory, include_directory, 'python')
        generateInits(p)
        # java
        compileAllFBS(os.path.join(file_directory, destination_root +
                                   '/java'), fbs_src_directory, include_directory, 'java')
        # javascript
        compileAllFBS(os.path.join(file_directory, destination_root +
                                   '/js'), fbs_src_directory, include_directory, 'js')
        # C#
        compileAllFBS(os.path.join(file_directory, destination_root +
                                   '/cs'), fbs_src_directory, include_directory, 'csharp')
        # C++
        compileAllFBS(os.path.join(file_directory, destination_root +
                                   '/cpp'), fbs_src_directory, include_directory, 'cpp')


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--lang', type=str, default='all',
                        help='Supported options: [cpp] cplusplus, [py] python, [j] java, [js] javascript, [cs] csharp, [all] all')

    args = parser.parse_args()
    sys.stdout.write(str(chosen_option(args)))


if __name__ == "__main__":
    main()
