// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

namespace ubii.services
{

using global::System;
using global::FlatBuffers;

public struct ServiceReply : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static ServiceReply GetRootAsServiceReply(ByteBuffer _bb) { return GetRootAsServiceReply(_bb, new ServiceReply()); }
  public static ServiceReply GetRootAsServiceReply(ByteBuffer _bb, ServiceReply obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __p.bb_pos = _i; __p.bb = _bb; }
  public ServiceReply __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public ServiceData? Reply { get { int o = __p.__offset(4); return o != 0 ? (ServiceData?)(new ServiceData()).__assign(__p.__indirect(o + __p.bb_pos), __p.bb) : null; } }

  public static Offset<ServiceReply> CreateServiceReply(FlatBufferBuilder builder,
      Offset<ServiceData> replyOffset = default(Offset<ServiceData>)) {
    builder.StartObject(1);
    ServiceReply.AddReply(builder, replyOffset);
    return ServiceReply.EndServiceReply(builder);
  }

  public static void StartServiceReply(FlatBufferBuilder builder) { builder.StartObject(1); }
  public static void AddReply(FlatBufferBuilder builder, Offset<ServiceData> replyOffset) { builder.AddOffset(0, replyOffset.Value, 0); }
  public static Offset<ServiceReply> EndServiceReply(FlatBufferBuilder builder) {
    int o = builder.EndObject();
    return new Offset<ServiceReply>(o);
  }
  public static void FinishServiceReplyBuffer(FlatBufferBuilder builder, Offset<ServiceReply> offset) { builder.Finish(offset.Value); }
  public static void FinishSizePrefixedServiceReplyBuffer(FlatBufferBuilder builder, Offset<ServiceReply> offset) { builder.FinishSizePrefixed(offset.Value); }
};


}