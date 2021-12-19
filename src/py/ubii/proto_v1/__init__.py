from importlib.metadata import version, PackageNotFoundError

try:
    __version__ = version("ubii-msg-formats")
except PackageNotFoundError:
    __version__ = None
