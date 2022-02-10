Getting started
===============

Installation
------------

-  required: python >= 3.7
-  install from PyPi via ``pip install ubii-message-formats`` or check out source and install locally
-  for a local install, the ``[compiler]`` extra installs cli tools to re-build the protobuf wrapper types

Proto Plus
----------
:doc:`Google's protobuf API <proto:index>` does not really behave like
native python code and makes it hard to write idiomatic code. The :mod:`ubii.proto` module
uses :doc:`Google's proto-plus package <plus:index>` to create wrapper classes that can be
used like normal python objects.

Since types defined in :mod:`ubii.proto` are :py:class:`proto-plus Messages <proto.message.Message>`
i.e. *wrappers* around :py:class:`normal protobuf Messages <google.protobuf.message.Message>`, :mod:`ubii.proto` provides
a way to extend their behaviour by inheriting from existing :mod:`ubii.proto` wrapper types.

To do this, one has to use the custom :py:class:`ubii.proto.util.ProtoMeta` metaclass.

.. code-block:: python

   import ubii.proto as ub

   __protobuf__ = ub.__protobuf__

   class CustomComponent(ub.Component, metaclass=ub.ProtoMeta):
       def __init__(mapping, *, some_argument, **kwargs):
           super().__init__(mapping, **kwargs)
           self._arg = some_argument

       def fancy_method(self):
           return self._arg

The above code defines a class ``CustomComponent`` which acts like a wrapper around a
``Component`` protobuf message (since it inherits from :py:class:`ubii.proto.Component`)

.. note::
   When you define a new :py:class:`proto-plus message <proto.message.Message>`
   a new protbuf descriptor will be built under the hood, unless you define a
   ``__protobuf__`` attribute in the module. **Setting the ``__protobuf__``
   attribute of the module to the :obj:`ubii.proto.__protobuf__` attribute
   tells the metaclass mechanism where to look for existing message descriptors
   (see :py:mod:`google.protobuf.descriptor_pool`).** This behaviour is not
   very well documented in the ``proto-plus`` module (currently only in source
   code), and is a likely source of bugs.  Not setting the ``__protobuf__``
   attribute will produce wrappers that serialize and deserialize the messages
   equivalently, but can't be used interchangeably in your code. See below for
   an example::


      >>> import ubii.proto as ub
      >>> class CustomComponent(ub.Component, metaclass=ub.ProtoMeta): pass
      ...
      >>>
      >>> ub.ComponentList = [CustomComponent

   

Ubii Messages
-------------
