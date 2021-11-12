import importlib
from importlib.util import find_spec
from itertools import chain
from pathlib import Path


def __getattr__(name):
    submodule_paths = chain.from_iterable(Path(p).glob("*.py") for p in find_spec(__name__).submodule_search_locations or ())
    submodules = (importlib.import_module(f".{p.stem}", package=__name__)
                  for p in submodule_paths
                  if not p.name.startswith('_'))

    with_name = [m for m in submodules if hasattr(m, name)]
    if not with_name:
        raise AttributeError(f"{__name__} has no attribute {name}")

    if len(with_name) > 1:
        raise AttributeError(f"{__name__} has no attribute {name}, but submodules {', '.join(m.__name__ for m in with_name)}")

    return getattr(with_name[0], name)