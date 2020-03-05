# automatically generated by the FlatBuffers compiler, do not modify

# namespace: dataStructures

import flatbuffers

class Pose3D(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsPose3D(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = Pose3D()
        x.Init(buf, n + offset)
        return x

    # Pose3D
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # Pose3D
    def Position(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            x = o + self._tab.Pos
            from .Vector3 import Vector3
            obj = Vector3()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

    # Pose3D
    def Orientation(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            x = self._tab.Indirect(o + self._tab.Pos)
            from .Orientation3D import Orientation3D
            obj = Orientation3D()
            obj.Init(self._tab.Bytes, x)
            return obj
        return None

def Pose3DStart(builder): builder.StartObject(2)
def Pose3DAddPosition(builder, position): builder.PrependStructSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(position), 0)
def Pose3DAddOrientation(builder, orientation): builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(orientation), 0)
def Pose3DEnd(builder): return builder.EndObject()