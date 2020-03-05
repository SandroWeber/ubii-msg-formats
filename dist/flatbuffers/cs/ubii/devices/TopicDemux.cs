// <auto-generated>
//  automatically generated by the FlatBuffers compiler, do not modify
// </auto-generated>

namespace ubii.devices
{

using global::System;
using global::FlatBuffers;

public struct TopicDemux : IFlatbufferObject
{
  private Table __p;
  public ByteBuffer ByteBuffer { get { return __p.bb; } }
  public static TopicDemux GetRootAsTopicDemux(ByteBuffer _bb) { return GetRootAsTopicDemux(_bb, new TopicDemux()); }
  public static TopicDemux GetRootAsTopicDemux(ByteBuffer _bb, TopicDemux obj) { return (obj.__assign(_bb.GetInt(_bb.Position) + _bb.Position, _bb)); }
  public void __init(int _i, ByteBuffer _bb) { __p.bb_pos = _i; __p.bb = _bb; }
  public TopicDemux __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public string Id { get { int o = __p.__offset(4); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetIdBytes() { return __p.__vector_as_span(4); }
#else
  public ArraySegment<byte>? GetIdBytes() { return __p.__vector_as_arraysegment(4); }
#endif
  public byte[] GetIdArray() { return __p.__vector_as_array<byte>(4); }
  public string Name { get { int o = __p.__offset(6); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetNameBytes() { return __p.__vector_as_span(6); }
#else
  public ArraySegment<byte>? GetNameBytes() { return __p.__vector_as_arraysegment(6); }
#endif
  public byte[] GetNameArray() { return __p.__vector_as_array<byte>(6); }
  public string DataType { get { int o = __p.__offset(8); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetDataTypeBytes() { return __p.__vector_as_span(8); }
#else
  public ArraySegment<byte>? GetDataTypeBytes() { return __p.__vector_as_arraysegment(8); }
#endif
  public byte[] GetDataTypeArray() { return __p.__vector_as_array<byte>(8); }
  public string OutputTopicFormat { get { int o = __p.__offset(10); return o != 0 ? __p.__string(o + __p.bb_pos) : null; } }
#if ENABLE_SPAN_T
  public Span<byte> GetOutputTopicFormatBytes() { return __p.__vector_as_span(10); }
#else
  public ArraySegment<byte>? GetOutputTopicFormatBytes() { return __p.__vector_as_arraysegment(10); }
#endif
  public byte[] GetOutputTopicFormatArray() { return __p.__vector_as_array<byte>(10); }

  public static Offset<TopicDemux> CreateTopicDemux(FlatBufferBuilder builder,
      StringOffset idOffset = default(StringOffset),
      StringOffset nameOffset = default(StringOffset),
      StringOffset data_typeOffset = default(StringOffset),
      StringOffset output_topic_formatOffset = default(StringOffset)) {
    builder.StartObject(4);
    TopicDemux.AddOutputTopicFormat(builder, output_topic_formatOffset);
    TopicDemux.AddDataType(builder, data_typeOffset);
    TopicDemux.AddName(builder, nameOffset);
    TopicDemux.AddId(builder, idOffset);
    return TopicDemux.EndTopicDemux(builder);
  }

  public static void StartTopicDemux(FlatBufferBuilder builder) { builder.StartObject(4); }
  public static void AddId(FlatBufferBuilder builder, StringOffset idOffset) { builder.AddOffset(0, idOffset.Value, 0); }
  public static void AddName(FlatBufferBuilder builder, StringOffset nameOffset) { builder.AddOffset(1, nameOffset.Value, 0); }
  public static void AddDataType(FlatBufferBuilder builder, StringOffset dataTypeOffset) { builder.AddOffset(2, dataTypeOffset.Value, 0); }
  public static void AddOutputTopicFormat(FlatBufferBuilder builder, StringOffset outputTopicFormatOffset) { builder.AddOffset(3, outputTopicFormatOffset.Value, 0); }
  public static Offset<TopicDemux> EndTopicDemux(FlatBufferBuilder builder) {
    int o = builder.EndObject();
    return new Offset<TopicDemux>(o);
  }
  public static void FinishTopicDemuxBuffer(FlatBufferBuilder builder, Offset<TopicDemux> offset) { builder.Finish(offset.Value); }
  public static void FinishSizePrefixedTopicDemuxBuffer(FlatBufferBuilder builder, Offset<TopicDemux> offset) { builder.FinishSizePrefixed(offset.Value); }
};


}