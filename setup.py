import setuptools
import shutil
from pathlib import Path
from setuptools.command.sdist import sdist as sdist_orig

CONSTANTS_FILE = Path(f"{__file__}").parent / 'dist/constants.json'
SOURCE_DIR = Path("dist/py/proto")

class sdist(sdist_orig):
    def run(self):
        assert CONSTANTS_FILE.exists(), f"{CONSTANTS_FILE.resolve()} is missing, can't build python package!"
        assert SOURCE_DIR.exists(), f"Python Code expected in {SOURCE_DIR.resolve()} but directory is missing!"
        try:
            shutil.copy(CONSTANTS_FILE, SOURCE_DIR)
            print(f"copying {CONSTANTS_FILE.name} -> {(SOURCE_DIR / CONSTANTS_FILE.name).resolve()}")
        except OSError:
            raise

        super().run()


with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setuptools.setup(
    name="ubii-msg-formats",
    version="0.0.1",
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
    package_dir={"": str(SOURCE_DIR.parent)},
    packages=setuptools.find_packages(where=str(SOURCE_DIR.parent)),
    package_data={'': ['constants.json']},
    python_requires=">=3.6",
    cmdclass={'sdist': sdist,},
    install_requires=['protobuf >= 3.16.0']
)