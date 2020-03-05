// automatically generated by the FlatBuffers compiler, do not modify

package ubii.devices;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class Device extends Table {
  public static Device getRootAsDevice(ByteBuffer _bb) { return getRootAsDevice(_bb, new Device()); }
  public static Device getRootAsDevice(ByteBuffer _bb, Device obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; vtable_start = bb_pos - bb.getInt(bb_pos); vtable_size = bb.getShort(vtable_start); }
  public Device __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public String id() { int o = __offset(4); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer idAsByteBuffer() { return __vector_as_bytebuffer(4, 1); }
  public ByteBuffer idInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 4, 1); }
  public String name() { int o = __offset(6); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer nameAsByteBuffer() { return __vector_as_bytebuffer(6, 1); }
  public ByteBuffer nameInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 6, 1); }
  public String tags(int j) { int o = __offset(8); return o != 0 ? __string(__vector(o) + j * 4) : null; }
  public int tagsLength() { int o = __offset(8); return o != 0 ? __vector_len(o) : 0; }
  public String description() { int o = __offset(10); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer descriptionAsByteBuffer() { return __vector_as_bytebuffer(10, 1); }
  public ByteBuffer descriptionInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 10, 1); }
  public String clientId() { int o = __offset(12); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer clientIdAsByteBuffer() { return __vector_as_bytebuffer(12, 1); }
  public ByteBuffer clientIdInByteBuffer(ByteBuffer _bb) { return __vector_in_bytebuffer(_bb, 12, 1); }
  public byte deviceType() { int o = __offset(14); return o != 0 ? bb.get(o + bb_pos) : 0; }
  public Component components(int j) { return components(new Component(), j); }
  public Component components(Component obj, int j) { int o = __offset(16); return o != 0 ? obj.__assign(__indirect(__vector(o) + j * 4), bb) : null; }
  public int componentsLength() { int o = __offset(16); return o != 0 ? __vector_len(o) : 0; }

  public static int createDevice(FlatBufferBuilder builder,
      int idOffset,
      int nameOffset,
      int tagsOffset,
      int descriptionOffset,
      int client_idOffset,
      byte device_type,
      int componentsOffset) {
    builder.startObject(7);
    Device.addComponents(builder, componentsOffset);
    Device.addClientId(builder, client_idOffset);
    Device.addDescription(builder, descriptionOffset);
    Device.addTags(builder, tagsOffset);
    Device.addName(builder, nameOffset);
    Device.addId(builder, idOffset);
    Device.addDeviceType(builder, device_type);
    return Device.endDevice(builder);
  }

  public static void startDevice(FlatBufferBuilder builder) { builder.startObject(7); }
  public static void addId(FlatBufferBuilder builder, int idOffset) { builder.addOffset(0, idOffset, 0); }
  public static void addName(FlatBufferBuilder builder, int nameOffset) { builder.addOffset(1, nameOffset, 0); }
  public static void addTags(FlatBufferBuilder builder, int tagsOffset) { builder.addOffset(2, tagsOffset, 0); }
  public static int createTagsVector(FlatBufferBuilder builder, int[] data) { builder.startVector(4, data.length, 4); for (int i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]); return builder.endVector(); }
  public static void startTagsVector(FlatBufferBuilder builder, int numElems) { builder.startVector(4, numElems, 4); }
  public static void addDescription(FlatBufferBuilder builder, int descriptionOffset) { builder.addOffset(3, descriptionOffset, 0); }
  public static void addClientId(FlatBufferBuilder builder, int clientIdOffset) { builder.addOffset(4, clientIdOffset, 0); }
  public static void addDeviceType(FlatBufferBuilder builder, byte deviceType) { builder.addByte(5, deviceType, 0); }
  public static void addComponents(FlatBufferBuilder builder, int componentsOffset) { builder.addOffset(6, componentsOffset, 0); }
  public static int createComponentsVector(FlatBufferBuilder builder, int[] data) { builder.startVector(4, data.length, 4); for (int i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]); return builder.endVector(); }
  public static void startComponentsVector(FlatBufferBuilder builder, int numElems) { builder.startVector(4, numElems, 4); }
  public static int endDevice(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishDeviceBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
  public static void finishSizePrefixedDeviceBuffer(FlatBufferBuilder builder, int offset) { builder.finishSizePrefixed(offset); }
}
