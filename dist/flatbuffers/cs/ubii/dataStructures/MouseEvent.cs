// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

namespace ubii.dataStructures
{

using global::System;
using global::FlatBuffers;

public struct MouseEvent : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static MouseEvent GetRootAsMouseEvent(ByteBuffer _bb) { return GetRootAsMouseEvent(_bb, new MouseEvent()); }
  public static MouseEvent GetRootAsMouseEvent(ByteBuffer _bb, MouseEvent obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __p.bb_pos = _i; __p.bb = _bb; }
  public MouseEvent __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public ButtonEventType Type { get { int o = __p.__offset(4); return o != 0 ? (ButtonEventType)__p.bb.GetSbyte(o + __p.bb_pos) : ButtonEventType.UP; } }
  public sbyte Button { get { int o = __p.__offset(6); return o != 0 ? __p.bb.GetSbyte(o + __p.bb_pos) : (sbyte)0; } }

  public static Offset<MouseEvent> CreateMouseEvent(FlatBufferBuilder builder,
      ButtonEventType type = ButtonEventType.UP,
      sbyte button = 0) {
    builder.StartObject(2);
    MouseEvent.AddButton(builder, button);
    MouseEvent.AddType(builder, type);
    return MouseEvent.EndMouseEvent(builder);
  }

  public static void StartMouseEvent(FlatBufferBuilder builder) { builder.StartObject(2); }
  public static void AddType(FlatBufferBuilder builder, ButtonEventType type) { builder.AddSbyte(0, (sbyte)type, 0); }
  public static void AddButton(FlatBufferBuilder builder, sbyte button) { builder.AddSbyte(1, button, 0); }
  public static Offset<MouseEvent> EndMouseEvent(FlatBufferBuilder builder) {
    int o = builder.EndObject();
    return new Offset<MouseEvent>(o);
  }
  public static void FinishMouseEventBuffer(FlatBufferBuilder builder, Offset<MouseEvent> offset) { builder.Finish(offset.Value); }
  public static void FinishSizePrefixedMouseEventBuffer(FlatBufferBuilder builder, Offset<MouseEvent> offset) { builder.FinishSizePrefixed(offset.Value); }
};


}