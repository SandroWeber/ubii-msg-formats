# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
import datetime
import os
import warnings

import proto.message
import sys

sys.path.insert(0, os.path.abspath('.'))
sys.path.insert(0, os.path.abspath('../../src'))

try:
    import importlib.metadata as importlib_metadata
except ImportError:
    import importlib_metadata

metadata = importlib_metadata.metadata('ubii-message-formats')

# -- Project information -----------------------------------------------------

project = 'ubii-msg-formats'
copyright = f'{datetime.datetime.now().year}, {metadata["Author"]}'
author = 'Maximilian Schmidt'
url = metadata['Home-Page']
# The full version, including alpha/beta/rc tags
release = metadata['version']

# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    'sphinx.ext.autodoc',
    'sphinxcontrib.napoleon',
    'sphinx.ext.intersphinx',
    'sphinxcontrib.programoutput',
    'sphinx.ext.viewcode',
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = []

# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = 'alabaster'

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']

html_css_files = [
    'css/custom.css'
]

html_sidebars = {
    '**': [
        'about.html',
        'navigation.html',
        'relations.html',
        'searchbox.html',
    ]
}

html_theme_options = {
    'description': metadata['Summary'],
    'logo': 'logo.png',
    'github_user': 'saggitar',
    'github_repo': project,
    'page_width': '75%'
}

autodoc_default_options = {
    'member-order': 'bysource',
    'members': True,
    'no-undoc-members': True,
    'show-inheritance': True,
    'no-imported-members': True,
}

autodoc_inherit_docstrings = False
napoleon_include_special_with_doc = True
napoleon_include_init_with_doc = True
napoleon_include_private_with_doc = False
napoleon_use_rtype = False
napoleon_custom_sections = [('OneOfs', 'Note')]
napoleon_use_ivar = False

# default_role = 'any'

intersphinx_mapping = {
    'python': ('https://docs.python.org/3', None),
    'plus': ('https://proto-plus-python.readthedocs.io/en/latest', None),
    'proto': ('https://googleapis.dev/python/protobuf/latest/', None)
}

# patch some errors in proto plus package
from pkg_resources import parse_version

proto_plus_version = parse_version(importlib_metadata.version('proto-plus'))
if parse_version('1.19.9') < proto_plus_version < parse_version('1.20.2'):
    warnings.warn(
        f"Bug in proto.message.MessageMeta.__dir__ in your proto-plus version {proto_plus_version}."
        f"Resolved in 1.20.2, see https://github.com/googleapis/proto-plus-python/issues/296"
    )

    orig_dir = proto.message.MessageMeta.__dir__


    def patched_dir(self):
        if not hasattr(self, '_meta'):
            return object.__dir__(self)
        else:
            return orig_dir(self)


    proto.message.MessageMeta.__dir__ = patched_dir
