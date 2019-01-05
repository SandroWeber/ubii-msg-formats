from distutils import util
import glob
import os
import pkg_resources
import re
import subprocess
import sys
import sysconfig
import platform

# We must use setuptools, not distutils, because we need to use the
# namespace_packages option for the "google" package.
from setuptools import setup, find_packages

from distutils.command.build_py import build_py as _build_py
from distutils.command.clean import clean as _clean
from distutils.spawn import find_executable



# Find the Protocol Compiler.
if 'PROTOC' in os.environ and os.path.exists(os.environ['PROTOC']):
  protoc = os.environ['PROTOC']
elif os.path.exists("../src/protoc"):
  protoc = "../src/protoc"
elif os.path.exists("../src/protoc.exe"):
  protoc = "../src/protoc.exe"
elif os.path.exists("../vsprojects/Debug/protoc.exe"):
  protoc = "../vsprojects/Debug/protoc.exe"
elif os.path.exists("../vsprojects/Release/protoc.exe"):
  protoc = "../vsprojects/Release/protoc.exe"
else:
  protoc = find_executable("protoc")

pathToProtos = './src/proto'
pathToOutput = './build/lib'

def getAllProtos():

    dirn = []
    files = []
    #destdir = []
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

def generate_proto(source, require = True):
    """Invokes the Protocol Compiler to generate a _pb2.py from the given
    .proto file.  Does nothing if the output already exists and is newer than
    the input."""

    if not require and not os.path.exists(source):
        return

    output = source.replace(".proto", "_pb2.py")
    #.replace("../src/", "")

    if (not os.path.exists(output) or
        (os.path.exists(source) and
        os.path.getmtime(source) > os.path.getmtime(output))):
        print("Generating %s..." % output)

        if not os.path.exists(source):
            sys.stderr.write("Can't find required file: %s\n" % source)
            sys.exit(-1)

        if protoc is None:
            sys.stderr.write(
                "protoc is not installed nor found in ../src.  Please compile it "
                "or install the binary package.\n")
            sys.exit(-1)

        protoc_command = [ protoc, "-I"+pathToProtos, "-I.", "--python_out="+pathToOutput, source ]
        if subprocess.call(protoc_command) != 0:
            sys.exit(-1)

def generateProtos():
    re = getAllProtos()
    
    os.makedirs(pathToOutput, exist_ok=True)

    for i in re:
        generate_proto(i,False)

class clean(_clean):
    def run(self):
        # Delete generated files in the code tree.
        for (dirpath, dirnames, filenames) in os.walk("."):
            for filename in filenames:
                filepath = os.path.join(dirpath, filename)
                if filepath.endswith("_pb2.py") or filepath.endswith(".pyc") or \
                filepath.endswith(".so") or filepath.endswith(".o"):
                    os.remove(filepath)
        # _clean is an old-style class, so super() doesn't work.
        _clean.run(self)

class build_py(_build_py):
    def run(self):
    # Generate necessary .proto file if it doesn't exist.
        generateProtos()

        # _build_py is an old-style class, so super() doesn't work.
        _build_py.run(self)

if __name__ == '__main__':

    generateProtos()
    # Keep this list of dependencies in sync with tox.ini.
    install_requires = ['six>=1.9', 'setuptools']
    if sys.version_info <= (2,7):
        install_requires.append('ordereddict')
        install_requires.append('unittest2')

    setup(
      name='ubii_msg_formats',
      version=1.0,
      description='Protocols for ubii',
      download_url='https://gitlab.lrz.de/IN-FAR/Ubi-Interact/ubii-msg-formats.git',
      long_description="This protocols are used for the communication in the server-client infrastructure for the Ubi-Interact Framework.",
      url='https://gitlab.lrz.de/IN-FAR/Ubi-Interact',
      maintainer='ga94hib',
      maintainer_email='ga94hib@mytum.de',
      license='3-Clause BSD License',
      classifiers=[
        "Programming Language :: Python",
        "Programming Language :: Python :: 2",
        "Programming Language :: Python :: 2.7",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.3",
        "Programming Language :: Python :: 3.4",
        "Programming Language :: Python :: 3.5",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        ],
      #namespace_packages=['ubiinteract'],
      packages=find_packages(
      #    exclude=[
      #        'import_test_package',
      #    ],
      ),
      #test_suite='google.protobuf.internal',
      cmdclass={
          'clean': clean,
          'build_py': build_py,
      },
      install_requires=install_requires,
  )
    

