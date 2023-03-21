// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/dataStructure/buttonEventType.proto

package ubii.dataStructure;

public final class ButtonEventTypeOuterClass {
  private ButtonEventTypeOuterClass() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  /**
   * Protobuf enum {@code ubii.dataStructure.ButtonEventType}
   */
  public enum ButtonEventType
      implements com.google.protobuf.ProtocolMessageEnum {
    /**
     * <code>UP = 0;</code>
     */
    UP(0),
    /**
     * <code>DOWN = 1;</code>
     */
    DOWN(1),
    UNRECOGNIZED(-1),
    ;

    /**
     * <code>UP = 0;</code>
     */
    public static final int UP_VALUE = 0;
    /**
     * <code>DOWN = 1;</code>
     */
    public static final int DOWN_VALUE = 1;


    public final int getNumber() {
      if (this == UNRECOGNIZED) {
        throw new java.lang.IllegalArgumentException(
            "Can't get the number of an unknown enum value.");
      }
      return value;
    }

    /**
     * @param value The numeric wire value of the corresponding enum entry.
     * @return The enum associated with the given numeric wire value.
     * @deprecated Use {@link #forNumber(int)} instead.
     */
    @java.lang.Deprecated
    public static ButtonEventType valueOf(int value) {
      return forNumber(value);
    }

    /**
     * @param value The numeric wire value of the corresponding enum entry.
     * @return The enum associated with the given numeric wire value.
     */
    public static ButtonEventType forNumber(int value) {
      switch (value) {
        case 0: return UP;
        case 1: return DOWN;
        default: return null;
      }
    }

    public static com.google.protobuf.Internal.EnumLiteMap<ButtonEventType>
        internalGetValueMap() {
      return internalValueMap;
    }
    private static final com.google.protobuf.Internal.EnumLiteMap<
        ButtonEventType> internalValueMap =
          new com.google.protobuf.Internal.EnumLiteMap<ButtonEventType>() {
            public ButtonEventType findValueByNumber(int number) {
              return ButtonEventType.forNumber(number);
            }
          };

    public final com.google.protobuf.Descriptors.EnumValueDescriptor
        getValueDescriptor() {
      if (this == UNRECOGNIZED) {
        throw new java.lang.IllegalStateException(
            "Can't get the descriptor of an unrecognized enum value.");
      }
      return getDescriptor().getValues().get(ordinal());
    }
    public final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptorForType() {
      return getDescriptor();
    }
    public static final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptor() {
      return ubii.dataStructure.ButtonEventTypeOuterClass.getDescriptor().getEnumTypes().get(0);
    }

    private static final ButtonEventType[] VALUES = values();

    public static ButtonEventType valueOf(
        com.google.protobuf.Descriptors.EnumValueDescriptor desc) {
      if (desc.getType() != getDescriptor()) {
        throw new java.lang.IllegalArgumentException(
          "EnumValueDescriptor is not for this type.");
      }
      if (desc.getIndex() == -1) {
        return UNRECOGNIZED;
      }
      return VALUES[desc.getIndex()];
    }

    private final int value;

    private ButtonEventType(int value) {
      this.value = value;
    }

    // @@protoc_insertion_point(enum_scope:ubii.dataStructure.ButtonEventType)
  }


  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n)proto/dataStructure/buttonEventType.pr" +
      "oto\022\022ubii.dataStructure*#\n\017ButtonEventTy" +
      "pe\022\006\n\002UP\020\000\022\010\n\004DOWN\020\001b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
