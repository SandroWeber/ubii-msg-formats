# automatically generated by the FlatBuffers compiler, do not modify

# namespace: dataStructures

import flatbuffers

class Vector8(object):
    __slots__ = ['_tab']

    # Vector8
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # Vector8
    def V0(self): return self._tab.Get(flatbuffers.number_types.Float32Flags, self._tab.Pos + flatbuffers.number_types.UOffsetTFlags.py_type(0))
    # Vector8
    def V1(self): return self._tab.Get(flatbuffers.number_types.Float32Flags, self._tab.Pos + flatbuffers.number_types.UOffsetTFlags.py_type(4))
    # Vector8
    def V2(self): return self._tab.Get(flatbuffers.number_types.Float32Flags, self._tab.Pos + flatbuffers.number_types.UOffsetTFlags.py_type(8))
    # Vector8
    def V3(self): return self._tab.Get(flatbuffers.number_types.Float32Flags, self._tab.Pos + flatbuffers.number_types.UOffsetTFlags.py_type(12))
    # Vector8
    def V4(self): return self._tab.Get(flatbuffers.number_types.Float32Flags, self._tab.Pos + flatbuffers.number_types.UOffsetTFlags.py_type(16))
    # Vector8
    def V5(self): return self._tab.Get(flatbuffers.number_types.Float32Flags, self._tab.Pos + flatbuffers.number_types.UOffsetTFlags.py_type(20))
    # Vector8
    def V6(self): return self._tab.Get(flatbuffers.number_types.Float32Flags, self._tab.Pos + flatbuffers.number_types.UOffsetTFlags.py_type(24))
    # Vector8
    def V7(self): return self._tab.Get(flatbuffers.number_types.Float32Flags, self._tab.Pos + flatbuffers.number_types.UOffsetTFlags.py_type(28))

def CreateVector8(builder, v0, v1, v2, v3, v4, v5, v6, v7):
    builder.Prep(4, 32)
    builder.PrependFloat32(v7)
    builder.PrependFloat32(v6)
    builder.PrependFloat32(v5)
    builder.PrependFloat32(v4)
    builder.PrependFloat32(v3)
    builder.PrependFloat32(v2)
    builder.PrependFloat32(v1)
    builder.PrependFloat32(v0)
    return builder.Offset()