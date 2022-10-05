#!/usr/bin/env python3
import ubii.proto as ub


def test_inheritance(module_protobuf):
    global __protobuf__

    if module_protobuf:
        __protobuf__ = module_protobuf

    class CustomSession(ub.Session, metaclass=ub.ProtoMeta):
        pass

    class WeirdProcessing(ub.ProcessingModule, metaclass=ub.ProtoMeta):
        pass

    inherited = CustomSession(name="Test")
    basic = ub.Session(name="Test")

    assert type(inherited).serialize(inherited) == type(basic).serialize(basic)  # always seems to work

    msg = f"Test with {'correct __protobuf__' if module_protobuf else 'no __protobuf__'} returned: \n"
    try:
        inherited.processing_modules = [WeirdProcessing()]
    except TypeError as e:
        print(msg + str(e))
    else:
        print(msg + "No error.")


test_inheritance(None)  # Type Error!
print('\n')
test_inheritance(ub.__protobuf__)  # works when __protobuf__ is set!
