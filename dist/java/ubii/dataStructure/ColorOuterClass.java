// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/dataStructure/color.proto

package ubii.dataStructure;

public final class ColorOuterClass {
  private ColorOuterClass() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  public interface ColorOrBuilder extends
      // @@protoc_insertion_point(interface_extends:ubii.dataStructure.Color)
      com.google.protobuf.MessageOrBuilder {

    /**
     * <code>double r = 1;</code>
     * @return The r.
     */
    double getR();

    /**
     * <code>double g = 2;</code>
     * @return The g.
     */
    double getG();

    /**
     * <code>double b = 3;</code>
     * @return The b.
     */
    double getB();

    /**
     * <code>double a = 4;</code>
     * @return The a.
     */
    double getA();
  }
  /**
   * Protobuf type {@code ubii.dataStructure.Color}
   */
  public static final class Color extends
      com.google.protobuf.GeneratedMessageV3 implements
      // @@protoc_insertion_point(message_implements:ubii.dataStructure.Color)
      ColorOrBuilder {
  private static final long serialVersionUID = 0L;
    // Use Color.newBuilder() to construct.
    private Color(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
      super(builder);
    }
    private Color() {
    }

    @java.lang.Override
    @SuppressWarnings({"unused"})
    protected java.lang.Object newInstance(
        UnusedPrivateParameter unused) {
      return new Color();
    }

    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return ubii.dataStructure.ColorOuterClass.internal_static_ubii_dataStructure_Color_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return ubii.dataStructure.ColorOuterClass.internal_static_ubii_dataStructure_Color_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              ubii.dataStructure.ColorOuterClass.Color.class, ubii.dataStructure.ColorOuterClass.Color.Builder.class);
    }

    public static final int R_FIELD_NUMBER = 1;
    private double r_ = 0D;
    /**
     * <code>double r = 1;</code>
     * @return The r.
     */
    @java.lang.Override
    public double getR() {
      return r_;
    }

    public static final int G_FIELD_NUMBER = 2;
    private double g_ = 0D;
    /**
     * <code>double g = 2;</code>
     * @return The g.
     */
    @java.lang.Override
    public double getG() {
      return g_;
    }

    public static final int B_FIELD_NUMBER = 3;
    private double b_ = 0D;
    /**
     * <code>double b = 3;</code>
     * @return The b.
     */
    @java.lang.Override
    public double getB() {
      return b_;
    }

    public static final int A_FIELD_NUMBER = 4;
    private double a_ = 0D;
    /**
     * <code>double a = 4;</code>
     * @return The a.
     */
    @java.lang.Override
    public double getA() {
      return a_;
    }

    private byte memoizedIsInitialized = -1;
    @java.lang.Override
    public final boolean isInitialized() {
      byte isInitialized = memoizedIsInitialized;
      if (isInitialized == 1) return true;
      if (isInitialized == 0) return false;

      memoizedIsInitialized = 1;
      return true;
    }

    @java.lang.Override
    public void writeTo(com.google.protobuf.CodedOutputStream output)
                        throws java.io.IOException {
      if (java.lang.Double.doubleToRawLongBits(r_) != 0) {
        output.writeDouble(1, r_);
      }
      if (java.lang.Double.doubleToRawLongBits(g_) != 0) {
        output.writeDouble(2, g_);
      }
      if (java.lang.Double.doubleToRawLongBits(b_) != 0) {
        output.writeDouble(3, b_);
      }
      if (java.lang.Double.doubleToRawLongBits(a_) != 0) {
        output.writeDouble(4, a_);
      }
      getUnknownFields().writeTo(output);
    }

    @java.lang.Override
    public int getSerializedSize() {
      int size = memoizedSize;
      if (size != -1) return size;

      size = 0;
      if (java.lang.Double.doubleToRawLongBits(r_) != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(1, r_);
      }
      if (java.lang.Double.doubleToRawLongBits(g_) != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(2, g_);
      }
      if (java.lang.Double.doubleToRawLongBits(b_) != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(3, b_);
      }
      if (java.lang.Double.doubleToRawLongBits(a_) != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(4, a_);
      }
      size += getUnknownFields().getSerializedSize();
      memoizedSize = size;
      return size;
    }

    @java.lang.Override
    public boolean equals(final java.lang.Object obj) {
      if (obj == this) {
       return true;
      }
      if (!(obj instanceof ubii.dataStructure.ColorOuterClass.Color)) {
        return super.equals(obj);
      }
      ubii.dataStructure.ColorOuterClass.Color other = (ubii.dataStructure.ColorOuterClass.Color) obj;

      if (java.lang.Double.doubleToLongBits(getR())
          != java.lang.Double.doubleToLongBits(
              other.getR())) return false;
      if (java.lang.Double.doubleToLongBits(getG())
          != java.lang.Double.doubleToLongBits(
              other.getG())) return false;
      if (java.lang.Double.doubleToLongBits(getB())
          != java.lang.Double.doubleToLongBits(
              other.getB())) return false;
      if (java.lang.Double.doubleToLongBits(getA())
          != java.lang.Double.doubleToLongBits(
              other.getA())) return false;
      if (!getUnknownFields().equals(other.getUnknownFields())) return false;
      return true;
    }

    @java.lang.Override
    public int hashCode() {
      if (memoizedHashCode != 0) {
        return memoizedHashCode;
      }
      int hash = 41;
      hash = (19 * hash) + getDescriptor().hashCode();
      hash = (37 * hash) + R_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getR()));
      hash = (37 * hash) + G_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getG()));
      hash = (37 * hash) + B_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getB()));
      hash = (37 * hash) + A_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getA()));
      hash = (29 * hash) + getUnknownFields().hashCode();
      memoizedHashCode = hash;
      return hash;
    }

    public static ubii.dataStructure.ColorOuterClass.Color parseFrom(
        java.nio.ByteBuffer data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static ubii.dataStructure.ColorOuterClass.Color parseFrom(
        java.nio.ByteBuffer data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static ubii.dataStructure.ColorOuterClass.Color parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static ubii.dataStructure.ColorOuterClass.Color parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static ubii.dataStructure.ColorOuterClass.Color parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static ubii.dataStructure.ColorOuterClass.Color parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static ubii.dataStructure.ColorOuterClass.Color parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static ubii.dataStructure.ColorOuterClass.Color parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }
    public static ubii.dataStructure.ColorOuterClass.Color parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input);
    }
    public static ubii.dataStructure.ColorOuterClass.Color parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
    }
    public static ubii.dataStructure.ColorOuterClass.Color parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static ubii.dataStructure.ColorOuterClass.Color parseFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }

    @java.lang.Override
    public Builder newBuilderForType() { return newBuilder(); }
    public static Builder newBuilder() {
      return DEFAULT_INSTANCE.toBuilder();
    }
    public static Builder newBuilder(ubii.dataStructure.ColorOuterClass.Color prototype) {
      return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
    }
    @java.lang.Override
    public Builder toBuilder() {
      return this == DEFAULT_INSTANCE
          ? new Builder() : new Builder().mergeFrom(this);
    }

    @java.lang.Override
    protected Builder newBuilderForType(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      Builder builder = new Builder(parent);
      return builder;
    }
    /**
     * Protobuf type {@code ubii.dataStructure.Color}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
        // @@protoc_insertion_point(builder_implements:ubii.dataStructure.Color)
        ubii.dataStructure.ColorOuterClass.ColorOrBuilder {
      public static final com.google.protobuf.Descriptors.Descriptor
          getDescriptor() {
        return ubii.dataStructure.ColorOuterClass.internal_static_ubii_dataStructure_Color_descriptor;
      }

      @java.lang.Override
      protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
          internalGetFieldAccessorTable() {
        return ubii.dataStructure.ColorOuterClass.internal_static_ubii_dataStructure_Color_fieldAccessorTable
            .ensureFieldAccessorsInitialized(
                ubii.dataStructure.ColorOuterClass.Color.class, ubii.dataStructure.ColorOuterClass.Color.Builder.class);
      }

      // Construct using ubii.dataStructure.ColorOuterClass.Color.newBuilder()
      private Builder() {

      }

      private Builder(
          com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
        super(parent);

      }
      @java.lang.Override
      public Builder clear() {
        super.clear();
        bitField0_ = 0;
        r_ = 0D;
        g_ = 0D;
        b_ = 0D;
        a_ = 0D;
        return this;
      }

      @java.lang.Override
      public com.google.protobuf.Descriptors.Descriptor
          getDescriptorForType() {
        return ubii.dataStructure.ColorOuterClass.internal_static_ubii_dataStructure_Color_descriptor;
      }

      @java.lang.Override
      public ubii.dataStructure.ColorOuterClass.Color getDefaultInstanceForType() {
        return ubii.dataStructure.ColorOuterClass.Color.getDefaultInstance();
      }

      @java.lang.Override
      public ubii.dataStructure.ColorOuterClass.Color build() {
        ubii.dataStructure.ColorOuterClass.Color result = buildPartial();
        if (!result.isInitialized()) {
          throw newUninitializedMessageException(result);
        }
        return result;
      }

      @java.lang.Override
      public ubii.dataStructure.ColorOuterClass.Color buildPartial() {
        ubii.dataStructure.ColorOuterClass.Color result = new ubii.dataStructure.ColorOuterClass.Color(this);
        if (bitField0_ != 0) { buildPartial0(result); }
        onBuilt();
        return result;
      }

      private void buildPartial0(ubii.dataStructure.ColorOuterClass.Color result) {
        int from_bitField0_ = bitField0_;
        if (((from_bitField0_ & 0x00000001) != 0)) {
          result.r_ = r_;
        }
        if (((from_bitField0_ & 0x00000002) != 0)) {
          result.g_ = g_;
        }
        if (((from_bitField0_ & 0x00000004) != 0)) {
          result.b_ = b_;
        }
        if (((from_bitField0_ & 0x00000008) != 0)) {
          result.a_ = a_;
        }
      }

      @java.lang.Override
      public Builder mergeFrom(com.google.protobuf.Message other) {
        if (other instanceof ubii.dataStructure.ColorOuterClass.Color) {
          return mergeFrom((ubii.dataStructure.ColorOuterClass.Color)other);
        } else {
          super.mergeFrom(other);
          return this;
        }
      }

      public Builder mergeFrom(ubii.dataStructure.ColorOuterClass.Color other) {
        if (other == ubii.dataStructure.ColorOuterClass.Color.getDefaultInstance()) return this;
        if (other.getR() != 0D) {
          setR(other.getR());
        }
        if (other.getG() != 0D) {
          setG(other.getG());
        }
        if (other.getB() != 0D) {
          setB(other.getB());
        }
        if (other.getA() != 0D) {
          setA(other.getA());
        }
        this.mergeUnknownFields(other.getUnknownFields());
        onChanged();
        return this;
      }

      @java.lang.Override
      public final boolean isInitialized() {
        return true;
      }

      @java.lang.Override
      public Builder mergeFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws java.io.IOException {
        if (extensionRegistry == null) {
          throw new java.lang.NullPointerException();
        }
        try {
          boolean done = false;
          while (!done) {
            int tag = input.readTag();
            switch (tag) {
              case 0:
                done = true;
                break;
              case 9: {
                r_ = input.readDouble();
                bitField0_ |= 0x00000001;
                break;
              } // case 9
              case 17: {
                g_ = input.readDouble();
                bitField0_ |= 0x00000002;
                break;
              } // case 17
              case 25: {
                b_ = input.readDouble();
                bitField0_ |= 0x00000004;
                break;
              } // case 25
              case 33: {
                a_ = input.readDouble();
                bitField0_ |= 0x00000008;
                break;
              } // case 33
              default: {
                if (!super.parseUnknownField(input, extensionRegistry, tag)) {
                  done = true; // was an endgroup tag
                }
                break;
              } // default:
            } // switch (tag)
          } // while (!done)
        } catch (com.google.protobuf.InvalidProtocolBufferException e) {
          throw e.unwrapIOException();
        } finally {
          onChanged();
        } // finally
        return this;
      }
      private int bitField0_;

      private double r_ ;
      /**
       * <code>double r = 1;</code>
       * @return The r.
       */
      @java.lang.Override
      public double getR() {
        return r_;
      }
      /**
       * <code>double r = 1;</code>
       * @param value The r to set.
       * @return This builder for chaining.
       */
      public Builder setR(double value) {

        r_ = value;
        bitField0_ |= 0x00000001;
        onChanged();
        return this;
      }
      /**
       * <code>double r = 1;</code>
       * @return This builder for chaining.
       */
      public Builder clearR() {
        bitField0_ = (bitField0_ & ~0x00000001);
        r_ = 0D;
        onChanged();
        return this;
      }

      private double g_ ;
      /**
       * <code>double g = 2;</code>
       * @return The g.
       */
      @java.lang.Override
      public double getG() {
        return g_;
      }
      /**
       * <code>double g = 2;</code>
       * @param value The g to set.
       * @return This builder for chaining.
       */
      public Builder setG(double value) {

        g_ = value;
        bitField0_ |= 0x00000002;
        onChanged();
        return this;
      }
      /**
       * <code>double g = 2;</code>
       * @return This builder for chaining.
       */
      public Builder clearG() {
        bitField0_ = (bitField0_ & ~0x00000002);
        g_ = 0D;
        onChanged();
        return this;
      }

      private double b_ ;
      /**
       * <code>double b = 3;</code>
       * @return The b.
       */
      @java.lang.Override
      public double getB() {
        return b_;
      }
      /**
       * <code>double b = 3;</code>
       * @param value The b to set.
       * @return This builder for chaining.
       */
      public Builder setB(double value) {

        b_ = value;
        bitField0_ |= 0x00000004;
        onChanged();
        return this;
      }
      /**
       * <code>double b = 3;</code>
       * @return This builder for chaining.
       */
      public Builder clearB() {
        bitField0_ = (bitField0_ & ~0x00000004);
        b_ = 0D;
        onChanged();
        return this;
      }

      private double a_ ;
      /**
       * <code>double a = 4;</code>
       * @return The a.
       */
      @java.lang.Override
      public double getA() {
        return a_;
      }
      /**
       * <code>double a = 4;</code>
       * @param value The a to set.
       * @return This builder for chaining.
       */
      public Builder setA(double value) {

        a_ = value;
        bitField0_ |= 0x00000008;
        onChanged();
        return this;
      }
      /**
       * <code>double a = 4;</code>
       * @return This builder for chaining.
       */
      public Builder clearA() {
        bitField0_ = (bitField0_ & ~0x00000008);
        a_ = 0D;
        onChanged();
        return this;
      }
      @java.lang.Override
      public final Builder setUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return super.setUnknownFields(unknownFields);
      }

      @java.lang.Override
      public final Builder mergeUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return super.mergeUnknownFields(unknownFields);
      }


      // @@protoc_insertion_point(builder_scope:ubii.dataStructure.Color)
    }

    // @@protoc_insertion_point(class_scope:ubii.dataStructure.Color)
    private static final ubii.dataStructure.ColorOuterClass.Color DEFAULT_INSTANCE;
    static {
      DEFAULT_INSTANCE = new ubii.dataStructure.ColorOuterClass.Color();
    }

    public static ubii.dataStructure.ColorOuterClass.Color getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static final com.google.protobuf.Parser<Color>
        PARSER = new com.google.protobuf.AbstractParser<Color>() {
      @java.lang.Override
      public Color parsePartialFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws com.google.protobuf.InvalidProtocolBufferException {
        Builder builder = newBuilder();
        try {
          builder.mergeFrom(input, extensionRegistry);
        } catch (com.google.protobuf.InvalidProtocolBufferException e) {
          throw e.setUnfinishedMessage(builder.buildPartial());
        } catch (com.google.protobuf.UninitializedMessageException e) {
          throw e.asInvalidProtocolBufferException().setUnfinishedMessage(builder.buildPartial());
        } catch (java.io.IOException e) {
          throw new com.google.protobuf.InvalidProtocolBufferException(e)
              .setUnfinishedMessage(builder.buildPartial());
        }
        return builder.buildPartial();
      }
    };

    public static com.google.protobuf.Parser<Color> parser() {
      return PARSER;
    }

    @java.lang.Override
    public com.google.protobuf.Parser<Color> getParserForType() {
      return PARSER;
    }

    @java.lang.Override
    public ubii.dataStructure.ColorOuterClass.Color getDefaultInstanceForType() {
      return DEFAULT_INSTANCE;
    }

  }

  private static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ubii_dataStructure_Color_descriptor;
  private static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ubii_dataStructure_Color_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\037proto/dataStructure/color.proto\022\022ubii." +
      "dataStructure\"3\n\005Color\022\t\n\001r\030\001 \001(\001\022\t\n\001g\030\002" +
      " \001(\001\022\t\n\001b\030\003 \001(\001\022\t\n\001a\030\004 \001(\001b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
    internal_static_ubii_dataStructure_Color_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_ubii_dataStructure_Color_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ubii_dataStructure_Color_descriptor,
        new java.lang.String[] { "R", "G", "B", "A", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
