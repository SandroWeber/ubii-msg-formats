Getting started
===============

Installation
------------

-   required: python >= 3.7
-   install from PyPi via ``pip install ubii-message-formats`` or check out source and install locally
-   for a local install, the ``[compiler]`` extra installs cli tools to re-build the protobuf wrapper types

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

..  code-block:: python

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

..  note::
    When you define a new :class:`proto-plus message <proto.message.Message>`
    a new protbuf descriptor will be built under the hood, unless you define a
    ``__protobuf__`` attribute in the module. Setting the ``__protobuf__``
    attribute of the module to the :attr:`ubii.proto.__protobuf__` attribute
    tells the metaclass mechanism where to look for existing message descriptors
    (see :mod:`google.protobuf.descriptor_pool`). This behaviour is not
    very well documented in the ``proto-plus`` module (currently only in source
    code), and is a likely source of bugs.  Not setting the ``__protobuf__``
    attribute will produce wrappers that serialize and deserialize the messages
    equivalently, but can't be used interchangeably in your code.

    ..  literalinclude:: examples/inheritance.py
        :caption: ./examples/inheritance.py

    Here you can see an example how setting ``__protobuf__`` affects the correct
    inheritance of nested messages. When ``__protobuf__`` is not set, the nested
    :class:`~ubii.proto.ProcessingModule` inside the custom
    :class:`~ubii.proto.Session` that is created in the example, will not be of the same
    message type as the one in the base class (although it would work exactly the same).
    Note the typical error message in such cases:

    .. command-output:: python ./examples/inheritance.py

    *Remember to always set __protobuf__ when inheriting from wrapper classes!*


Ubii Messages
-------------
The purpose of the messages is explained in the `README`_.
Important messages if you are just getting started with the
*Ubi-Interact* project include:

-   :class:`Services <ubii.proto.Service>`: (in a distributed setup typically the *master node* advertises them
    in a :class:`~ubii.proto.ServiceList`). Services represent endpoints for communication with the *master node*.
    Depending on the implementation of the *master node* and your client, this communication can happen via different
    protocols (e.g. HTTP requests to a REST backend).

-   :class:`~ubii.proto.ServiceRequest` and :class:`~ubii.proto.ServiceReply` messages exchanged during
    service call request-reply communication.
    Refer to `the wiki <https://github.com/SandroWeber/ubi-interact/wiki/Requests>`_, for more information about service
    requests -- e.g. which fields in the :class:`~ubii.proto.ServiceRequest` message are required to be present for
    which kind of request and related default topics for the :attr:`~ubii.proto.ServiceRequest.topic` field.
    When sending messages to the REST backend, the message payload needs to be JSON encoded e.g. with the
    :class:`ubii.proto.util.ProtoEncoder`.

-   :class:`~ubii.proto.Server`: this message contains information about the *master node*, mainly URLs for the
    different communication backends and the used "constants" (see below).

-   :class:`~ubii.proto.Constants`: Each *master node* advertises aliases for used service topics and message
    formats as part of its :class:`ubii.proto.Server` specification, so that the client can be implemented
    agnostic of the actual values. The combination of the
    :attr:`ubii.proto.Constants.DEFAULT_TOPICS.SERVICES <ubii.proto.Constants.DefaultTopics.SERVICES>` and
    the URL of the preferred service backend can then be used to send requests to the *master node*.

-   :class:`ubii.proto.TopicData`: In addition to the request-reply communication, the *master node* acts as a message
    broker to provide a publish-subscribe communication. In addition to any ad-hoc topics, some information is published
    in the :attr:`ubii.proto.Constants.DEFAULT_TOPICS.INFO_TOPICS <ubii.proto.Constants.DefaultTopics.INFO_TOPICS>`,
    to notify subscribed clients of events such as started or stopped :class:`Sessions <ubii.proto.Session>`.

A typical life-cycle of a *client node* would be to

-   request the *master node* specification by publishing the respective :class:`~ubii.proto.ServiceRequest` in the
    :attr:`~ubii.proto.Constants.DefaultTopics.Services.SERVER_CONFIG` topic. This is the only interaction with
    the master node that has to rely on client side information about the service endpoint URL. Refer to
    `the wiki <https://github.com/SandroWeber/ubi-interact/wiki/Requests>`_ for information about possible default
    values.

-   Use the :class:`~ubii.proto.Constants` (currently only supplied as JSON for backwards compatibility, see
    :attr:`ubii.proto.Server.constants_json`) to make requests and subscribe to relevant info topics. E.g.
    :attr:`register <ubii.proto.Constants.DefaultTopics.Services.CLIENT_REGISTRATION>` the *client node*,
    or get the :attr:`list of available services <ubii.proto.Constants.DefaultTopics.Services.SERVICE_LIST>`.

.. include:: links