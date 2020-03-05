// automatically generated by the FlatBuffers compiler, do not modify

package ubii.devices;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class TopicDemux extends Table {
  public static TopicDemux getRootAsTopicDemux(ByteBuffer _bb) { return getRootAsTopicDemux(_bb, new TopicDemux()); }
  public static TopicDemux getRootAsTopicDemux(ByteBuffer _bb, TopicDemux obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; vtable_start = bb_pos - bb.getInt(bb_pos); vtable_size = bb.getShort(vtable_start); }
  public TopicDemux __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public String id() { int o = __offset(4); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer idAsByteBuffer() { return __vector_as_bytebuffer(4, 1); }
  public ByteBuffer idInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 4, 1); }
  public String name() { int o = __offset(6); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer nameAsByteBuffer() { return __vector_as_bytebuffer(6, 1); }
  public ByteBuffer nameInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 6, 1); }
  public String dataType() { int o = __offset(8); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer dataTypeAsByteBuffer() { return __vector_as_bytebuffer(8, 1); }
  public ByteBuffer dataTypeInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 8, 1); }
  public String outputTopicFormat() { int o = __offset(10); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer outputTopicFormatAsByteBuffer() { return __vector_as_bytebuffer(10, 1); }
  public ByteBuffer outputTopicFormatInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 10, 1); }

  public static int createTopicDemux(FlatBufferBuilder builder,
      int idOffset,
      int nameOffset,
      int data_typeOffset,
      int output_topic_formatOffset) {
    builder.startObject(4);
    TopicDemux.addOutputTopicFormat(builder, output_topic_formatOffset);
    TopicDemux.addDataType(builder, data_typeOffset);
    TopicDemux.addName(builder, nameOffset);
    TopicDemux.addId(builder, idOffset);
    return TopicDemux.endTopicDemux(builder);
  }

  public static void startTopicDemux(FlatBufferBuilder builder) { builder.startObject(4); }
  public static void addId(FlatBufferBuilder builder, int idOffset) { builder.addOffset(0, idOffset, 0); }
  public static void addName(FlatBufferBuilder builder, int nameOffset) { builder.addOffset(1, nameOffset, 0); }
  public static void addDataType(FlatBufferBuilder builder, int dataTypeOffset) { builder.addOffset(2, dataTypeOffset, 0); }
  public static void addOutputTopicFormat(FlatBufferBuilder builder, int outputTopicFormatOffset) { builder.addOffset(3, outputTopicFormatOffset, 0); }
  public static int endTopicDemux(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishTopicDemuxBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
  public static void finishSizePrefixedTopicDemuxBuffer(FlatBufferBuilder builder, int offset) { builder.finishSizePrefixed(offset); }
}
