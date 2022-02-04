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
import sys

sys.path.insert(0, os.path.abspath('.'))
sys.path.insert(0, os.path.abspath('../../src'))

try:
    import importlib.metadata as importlib_metadata
except ImportError:
    import importlib_metadata

metadata = importlib_metadata.metadata('ubii-message-formats')

# -- Project information -----------------------------------------------------

project = metadata['Name']
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
    'github_repo': 'ubii-node-python',
    'page_width': '75%'
}

# autodoc_preserve_defaults = True
# autodoc_typehints = 'description'
# autodoc_typehints_description_target = 'documented'
# autodoc_class_signature = 'separated'
# autodoc_class_signature = 'mixed'

intersphinx_mapping = {'python': ('https://docs.python.org/3', None)}
