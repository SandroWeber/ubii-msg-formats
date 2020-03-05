// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

namespace ubii.dataStructures
{

using global::System;
using global::FlatBuffers;

public struct MyoEvent : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static MyoEvent GetRootAsMyoEvent(ByteBuffer _bb) { return GetRootAsMyoEvent(_bb, new MyoEvent()); }
  public static MyoEvent GetRootAsMyoEvent(ByteBuffer _bb, MyoEvent obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __p.bb_pos = _i; __p.bb = _bb; }
  public MyoEvent __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public Vector8? Emg { get { int o = __p.__offset(4); return o != 0 ? (Vector8?)(new Vector8()).__assign(o + __p.bb_pos, __p.bb) : null; } }
  public Quaternion? Orientation { get { int o = __p.__offset(6); return o != 0 ? (Quaternion?)(new Quaternion()).__assign(o + __p.bb_pos, __p.bb) : null; } }
  public Vector3? Gyroscope { get { int o = __p.__offset(8); return o != 0 ? (Vector3?)(new Vector3()).__assign(o + __p.bb_pos, __p.bb) : null; } }
  public Vector3? Accelerometer { get { int o = __p.__offset(10); return o != 0 ? (Vector3?)(new Vector3()).__assign(o + __p.bb_pos, __p.bb) : null; } }
  public HandGestureType Gesture { get { int o = __p.__offset(12); return o != 0 ? (HandGestureType)__p.bb.GetSbyte(o + __p.bb_pos) : HandGestureType.REST; } }

  public static void StartMyoEvent(FlatBufferBuilder builder) { builder.StartObject(5); }
  public static void AddEmg(FlatBufferBuilder builder, Offset<Vector8> emgOffset) { builder.AddStruct(0, emgOffset.Value, 0); }
  public static void AddOrientation(FlatBufferBuilder builder, Offset<Quaternion> orientationOffset) { builder.AddStruct(1, orientationOffset.Value, 0); }
  public static void AddGyroscope(FlatBufferBuilder builder, Offset<Vector3> gyroscopeOffset) { builder.AddStruct(2, gyroscopeOffset.Value, 0); }
  public static void AddAccelerometer(FlatBufferBuilder builder, Offset<Vector3> accelerometerOffset) { builder.AddStruct(3, accelerometerOffset.Value, 0); }
  public static void AddGesture(FlatBufferBuilder builder, HandGestureType gesture) { builder.AddSbyte(4, (sbyte)gesture, 0); }
  public static Offset<MyoEvent> EndMyoEvent(FlatBufferBuilder builder) {
    int o = builder.EndObject();
    return new Offset<MyoEvent>(o);
  }
  public static void FinishMyoEventBuffer(FlatBufferBuilder builder, Offset<MyoEvent> offset) { builder.Finish(offset.Value); }
  public static void FinishSizePrefixedMyoEventBuffer(FlatBufferBuilder builder, Offset<MyoEvent> offset) { builder.FinishSizePrefixed(offset.Value); }
};


}