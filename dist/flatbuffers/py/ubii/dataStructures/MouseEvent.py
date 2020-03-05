# automatically generated by the FlatBuffers compiler, do not modify

# namespace: dataStructures

import flatbuffers

class MouseEvent(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsMouseEvent(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = MouseEvent()
        x.Init(buf, n + offset)
        return x

    # MouseEvent
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # MouseEvent
    def Type(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

    # MouseEvent
    def Button(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 0

def MouseEventStart(builder): builder.StartObject(2)
def MouseEventAddType(builder, type): builder.PrependInt8Slot(0, type, 0)
def MouseEventAddButton(builder, button): builder.PrependInt8Slot(1, button, 0)
def MouseEventEnd(builder): return builder.EndObject()