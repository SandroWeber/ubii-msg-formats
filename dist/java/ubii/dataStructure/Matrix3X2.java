// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/dataStructure/matrix3x2.proto

package ubii.dataStructure;

public final class Matrix3X2 {
  private Matrix3X2() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  public interface Matrix3x2OrBuilder extends
      // @@protoc_insertion_point(interface_extends:ubii.dataStructure.Matrix3x2)
      com.google.protobuf.MessageOrBuilder {

    /**
     * <code>double m00 = 1;</code>
     * @return The m00.
     */
    double getM00();

    /**
     * <code>double m01 = 2;</code>
     * @return The m01.
     */
    double getM01();

    /**
     * <code>double m10 = 3;</code>
     * @return The m10.
     */
    double getM10();

    /**
     * <code>double m11 = 4;</code>
     * @return The m11.
     */
    double getM11();

    /**
     * <code>double m20 = 5;</code>
     * @return The m20.
     */
    double getM20();

    /**
     * <code>double m21 = 6;</code>
     * @return The m21.
     */
    double getM21();
  }
  /**
   * Protobuf type {@code ubii.dataStructure.Matrix3x2}
   */
  public static final class Matrix3x2 extends
      com.google.protobuf.GeneratedMessageV3 implements
      // @@protoc_insertion_point(message_implements:ubii.dataStructure.Matrix3x2)
      Matrix3x2OrBuilder {
  private static final long serialVersionUID = 0L;
    // Use Matrix3x2.newBuilder() to construct.
    private Matrix3x2(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
      super(builder);
    }
    private Matrix3x2() {
    }

    @java.lang.Override
    @SuppressWarnings({"unused"})
    protected java.lang.Object newInstance(
        UnusedPrivateParameter unused) {
      return new Matrix3x2();
    }

    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return ubii.dataStructure.Matrix3X2.internal_static_ubii_dataStructure_Matrix3x2_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return ubii.dataStructure.Matrix3X2.internal_static_ubii_dataStructure_Matrix3x2_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              ubii.dataStructure.Matrix3X2.Matrix3x2.class, ubii.dataStructure.Matrix3X2.Matrix3x2.Builder.class);
    }

    public static final int M00_FIELD_NUMBER = 1;
    private double m00_ = 0D;
    /**
     * <code>double m00 = 1;</code>
     * @return The m00.
     */
    @java.lang.Override
    public double getM00() {
      return m00_;
    }

    public static final int M01_FIELD_NUMBER = 2;
    private double m01_ = 0D;
    /**
     * <code>double m01 = 2;</code>
     * @return The m01.
     */
    @java.lang.Override
    public double getM01() {
      return m01_;
    }

    public static final int M10_FIELD_NUMBER = 3;
    private double m10_ = 0D;
    /**
     * <code>double m10 = 3;</code>
     * @return The m10.
     */
    @java.lang.Override
    public double getM10() {
      return m10_;
    }

    public static final int M11_FIELD_NUMBER = 4;
    private double m11_ = 0D;
    /**
     * <code>double m11 = 4;</code>
     * @return The m11.
     */
    @java.lang.Override
    public double getM11() {
      return m11_;
    }

    public static final int M20_FIELD_NUMBER = 5;
    private double m20_ = 0D;
    /**
     * <code>double m20 = 5;</code>
     * @return The m20.
     */
    @java.lang.Override
    public double getM20() {
      return m20_;
    }

    public static final int M21_FIELD_NUMBER = 6;
    private double m21_ = 0D;
    /**
     * <code>double m21 = 6;</code>
     * @return The m21.
     */
    @java.lang.Override
    public double getM21() {
      return m21_;
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
      if (java.lang.Double.doubleToRawLongBits(m00_) != 0) {
        output.writeDouble(1, m00_);
      }
      if (java.lang.Double.doubleToRawLongBits(m01_) != 0) {
        output.writeDouble(2, m01_);
      }
      if (java.lang.Double.doubleToRawLongBits(m10_) != 0) {
        output.writeDouble(3, m10_);
      }
      if (java.lang.Double.doubleToRawLongBits(m11_) != 0) {
        output.writeDouble(4, m11_);
      }
      if (java.lang.Double.doubleToRawLongBits(m20_) != 0) {
        output.writeDouble(5, m20_);
      }
      if (java.lang.Double.doubleToRawLongBits(m21_) != 0) {
        output.writeDouble(6, m21_);
      }
      getUnknownFields().writeTo(output);
    }

    @java.lang.Override
    public int getSerializedSize() {
      int size = memoizedSize;
      if (size != -1) return size;

      size = 0;
      if (java.lang.Double.doubleToRawLongBits(m00_) != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(1, m00_);
      }
      if (java.lang.Double.doubleToRawLongBits(m01_) != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(2, m01_);
      }
      if (java.lang.Double.doubleToRawLongBits(m10_) != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(3, m10_);
      }
      if (java.lang.Double.doubleToRawLongBits(m11_) != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(4, m11_);
      }
      if (java.lang.Double.doubleToRawLongBits(m20_) != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(5, m20_);
      }
      if (java.lang.Double.doubleToRawLongBits(m21_) != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(6, m21_);
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
      if (!(obj instanceof ubii.dataStructure.Matrix3X2.Matrix3x2)) {
        return super.equals(obj);
      }
      ubii.dataStructure.Matrix3X2.Matrix3x2 other = (ubii.dataStructure.Matrix3X2.Matrix3x2) obj;

      if (java.lang.Double.doubleToLongBits(getM00())
          != java.lang.Double.doubleToLongBits(
              other.getM00())) return false;
      if (java.lang.Double.doubleToLongBits(getM01())
          != java.lang.Double.doubleToLongBits(
              other.getM01())) return false;
      if (java.lang.Double.doubleToLongBits(getM10())
          != java.lang.Double.doubleToLongBits(
              other.getM10())) return false;
      if (java.lang.Double.doubleToLongBits(getM11())
          != java.lang.Double.doubleToLongBits(
              other.getM11())) return false;
      if (java.lang.Double.doubleToLongBits(getM20())
          != java.lang.Double.doubleToLongBits(
              other.getM20())) return false;
      if (java.lang.Double.doubleToLongBits(getM21())
          != java.lang.Double.doubleToLongBits(
              other.getM21())) return false;
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
      hash = (37 * hash) + M00_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getM00()));
      hash = (37 * hash) + M01_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getM01()));
      hash = (37 * hash) + M10_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getM10()));
      hash = (37 * hash) + M11_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getM11()));
      hash = (37 * hash) + M20_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getM20()));
      hash = (37 * hash) + M21_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getM21()));
      hash = (29 * hash) + getUnknownFields().hashCode();
      memoizedHashCode = hash;
      return hash;
    }

    public static ubii.dataStructure.Matrix3X2.Matrix3x2 parseFrom(
        java.nio.ByteBuffer data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static ubii.dataStructure.Matrix3X2.Matrix3x2 parseFrom(
        java.nio.ByteBuffer data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static ubii.dataStructure.Matrix3X2.Matrix3x2 parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static ubii.dataStructure.Matrix3X2.Matrix3x2 parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static ubii.dataStructure.Matrix3X2.Matrix3x2 parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static ubii.dataStructure.Matrix3X2.Matrix3x2 parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static ubii.dataStructure.Matrix3X2.Matrix3x2 parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static ubii.dataStructure.Matrix3X2.Matrix3x2 parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }
    public static ubii.dataStructure.Matrix3X2.Matrix3x2 parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input);
    }
    public static ubii.dataStructure.Matrix3X2.Matrix3x2 parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
    }
    public static ubii.dataStructure.Matrix3X2.Matrix3x2 parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static ubii.dataStructure.Matrix3X2.Matrix3x2 parseFrom(
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
    public static Builder newBuilder(ubii.dataStructure.Matrix3X2.Matrix3x2 prototype) {
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
     * Protobuf type {@code ubii.dataStructure.Matrix3x2}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
        // @@protoc_insertion_point(builder_implements:ubii.dataStructure.Matrix3x2)
        ubii.dataStructure.Matrix3X2.Matrix3x2OrBuilder {
      public static final com.google.protobuf.Descriptors.Descriptor
          getDescriptor() {
        return ubii.dataStructure.Matrix3X2.internal_static_ubii_dataStructure_Matrix3x2_descriptor;
      }

      @java.lang.Override
      protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
          internalGetFieldAccessorTable() {
        return ubii.dataStructure.Matrix3X2.internal_static_ubii_dataStructure_Matrix3x2_fieldAccessorTable
            .ensureFieldAccessorsInitialized(
                ubii.dataStructure.Matrix3X2.Matrix3x2.class, ubii.dataStructure.Matrix3X2.Matrix3x2.Builder.class);
      }

      // Construct using ubii.dataStructure.Matrix3X2.Matrix3x2.newBuilder()
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
        m00_ = 0D;
        m01_ = 0D;
        m10_ = 0D;
        m11_ = 0D;
        m20_ = 0D;
        m21_ = 0D;
        return this;
      }

      @java.lang.Override
      public com.google.protobuf.Descriptors.Descriptor
          getDescriptorForType() {
        return ubii.dataStructure.Matrix3X2.internal_static_ubii_dataStructure_Matrix3x2_descriptor;
      }

      @java.lang.Override
      public ubii.dataStructure.Matrix3X2.Matrix3x2 getDefaultInstanceForType() {
        return ubii.dataStructure.Matrix3X2.Matrix3x2.getDefaultInstance();
      }

      @java.lang.Override
      public ubii.dataStructure.Matrix3X2.Matrix3x2 build() {
        ubii.dataStructure.Matrix3X2.Matrix3x2 result = buildPartial();
        if (!result.isInitialized()) {
          throw newUninitializedMessageException(result);
        }
        return result;
      }

      @java.lang.Override
      public ubii.dataStructure.Matrix3X2.Matrix3x2 buildPartial() {
        ubii.dataStructure.Matrix3X2.Matrix3x2 result = new ubii.dataStructure.Matrix3X2.Matrix3x2(this);
        if (bitField0_ != 0) { buildPartial0(result); }
        onBuilt();
        return result;
      }

      private void buildPartial0(ubii.dataStructure.Matrix3X2.Matrix3x2 result) {
        int from_bitField0_ = bitField0_;
        if (((from_bitField0_ & 0x00000001) != 0)) {
          result.m00_ = m00_;
        }
        if (((from_bitField0_ & 0x00000002) != 0)) {
          result.m01_ = m01_;
        }
        if (((from_bitField0_ & 0x00000004) != 0)) {
          result.m10_ = m10_;
        }
        if (((from_bitField0_ & 0x00000008) != 0)) {
          result.m11_ = m11_;
        }
        if (((from_bitField0_ & 0x00000010) != 0)) {
          result.m20_ = m20_;
        }
        if (((from_bitField0_ & 0x00000020) != 0)) {
          result.m21_ = m21_;
        }
      }

      @java.lang.Override
      public Builder mergeFrom(com.google.protobuf.Message other) {
        if (other instanceof ubii.dataStructure.Matrix3X2.Matrix3x2) {
          return mergeFrom((ubii.dataStructure.Matrix3X2.Matrix3x2)other);
        } else {
          super.mergeFrom(other);
          return this;
        }
      }

      public Builder mergeFrom(ubii.dataStructure.Matrix3X2.Matrix3x2 other) {
        if (other == ubii.dataStructure.Matrix3X2.Matrix3x2.getDefaultInstance()) return this;
        if (other.getM00() != 0D) {
          setM00(other.getM00());
        }
        if (other.getM01() != 0D) {
          setM01(other.getM01());
        }
        if (other.getM10() != 0D) {
          setM10(other.getM10());
        }
        if (other.getM11() != 0D) {
          setM11(other.getM11());
        }
        if (other.getM20() != 0D) {
          setM20(other.getM20());
        }
        if (other.getM21() != 0D) {
          setM21(other.getM21());
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
                m00_ = input.readDouble();
                bitField0_ |= 0x00000001;
                break;
              } // case 9
              case 17: {
                m01_ = input.readDouble();
                bitField0_ |= 0x00000002;
                break;
              } // case 17
              case 25: {
                m10_ = input.readDouble();
                bitField0_ |= 0x00000004;
                break;
              } // case 25
              case 33: {
                m11_ = input.readDouble();
                bitField0_ |= 0x00000008;
                break;
              } // case 33
              case 41: {
                m20_ = input.readDouble();
                bitField0_ |= 0x00000010;
                break;
              } // case 41
              case 49: {
                m21_ = input.readDouble();
                bitField0_ |= 0x00000020;
                break;
              } // case 49
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

      private double m00_ ;
      /**
       * <code>double m00 = 1;</code>
       * @return The m00.
       */
      @java.lang.Override
      public double getM00() {
        return m00_;
      }
      /**
       * <code>double m00 = 1;</code>
       * @param value The m00 to set.
       * @return This builder for chaining.
       */
      public Builder setM00(double value) {

        m00_ = value;
        bitField0_ |= 0x00000001;
        onChanged();
        return this;
      }
      /**
       * <code>double m00 = 1;</code>
       * @return This builder for chaining.
       */
      public Builder clearM00() {
        bitField0_ = (bitField0_ & ~0x00000001);
        m00_ = 0D;
        onChanged();
        return this;
      }

      private double m01_ ;
      /**
       * <code>double m01 = 2;</code>
       * @return The m01.
       */
      @java.lang.Override
      public double getM01() {
        return m01_;
      }
      /**
       * <code>double m01 = 2;</code>
       * @param value The m01 to set.
       * @return This builder for chaining.
       */
      public Builder setM01(double value) {

        m01_ = value;
        bitField0_ |= 0x00000002;
        onChanged();
        return this;
      }
      /**
       * <code>double m01 = 2;</code>
       * @return This builder for chaining.
       */
      public Builder clearM01() {
        bitField0_ = (bitField0_ & ~0x00000002);
        m01_ = 0D;
        onChanged();
        return this;
      }

      private double m10_ ;
      /**
       * <code>double m10 = 3;</code>
       * @return The m10.
       */
      @java.lang.Override
      public double getM10() {
        return m10_;
      }
      /**
       * <code>double m10 = 3;</code>
       * @param value The m10 to set.
       * @return This builder for chaining.
       */
      public Builder setM10(double value) {

        m10_ = value;
        bitField0_ |= 0x00000004;
        onChanged();
        return this;
      }
      /**
       * <code>double m10 = 3;</code>
       * @return This builder for chaining.
       */
      public Builder clearM10() {
        bitField0_ = (bitField0_ & ~0x00000004);
        m10_ = 0D;
        onChanged();
        return this;
      }

      private double m11_ ;
      /**
       * <code>double m11 = 4;</code>
       * @return The m11.
       */
      @java.lang.Override
      public double getM11() {
        return m11_;
      }
      /**
       * <code>double m11 = 4;</code>
       * @param value The m11 to set.
       * @return This builder for chaining.
       */
      public Builder setM11(double value) {

        m11_ = value;
        bitField0_ |= 0x00000008;
        onChanged();
        return this;
      }
      /**
       * <code>double m11 = 4;</code>
       * @return This builder for chaining.
       */
      public Builder clearM11() {
        bitField0_ = (bitField0_ & ~0x00000008);
        m11_ = 0D;
        onChanged();
        return this;
      }

      private double m20_ ;
      /**
       * <code>double m20 = 5;</code>
       * @return The m20.
       */
      @java.lang.Override
      public double getM20() {
        return m20_;
      }
      /**
       * <code>double m20 = 5;</code>
       * @param value The m20 to set.
       * @return This builder for chaining.
       */
      public Builder setM20(double value) {

        m20_ = value;
        bitField0_ |= 0x00000010;
        onChanged();
        return this;
      }
      /**
       * <code>double m20 = 5;</code>
       * @return This builder for chaining.
       */
      public Builder clearM20() {
        bitField0_ = (bitField0_ & ~0x00000010);
        m20_ = 0D;
        onChanged();
        return this;
      }

      private double m21_ ;
      /**
       * <code>double m21 = 6;</code>
       * @return The m21.
       */
      @java.lang.Override
      public double getM21() {
        return m21_;
      }
      /**
       * <code>double m21 = 6;</code>
       * @param value The m21 to set.
       * @return This builder for chaining.
       */
      public Builder setM21(double value) {

        m21_ = value;
        bitField0_ |= 0x00000020;
        onChanged();
        return this;
      }
      /**
       * <code>double m21 = 6;</code>
       * @return This builder for chaining.
       */
      public Builder clearM21() {
        bitField0_ = (bitField0_ & ~0x00000020);
        m21_ = 0D;
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


      // @@protoc_insertion_point(builder_scope:ubii.dataStructure.Matrix3x2)
    }

    // @@protoc_insertion_point(class_scope:ubii.dataStructure.Matrix3x2)
    private static final ubii.dataStructure.Matrix3X2.Matrix3x2 DEFAULT_INSTANCE;
    static {
      DEFAULT_INSTANCE = new ubii.dataStructure.Matrix3X2.Matrix3x2();
    }

    public static ubii.dataStructure.Matrix3X2.Matrix3x2 getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static final com.google.protobuf.Parser<Matrix3x2>
        PARSER = new com.google.protobuf.AbstractParser<Matrix3x2>() {
      @java.lang.Override
      public Matrix3x2 parsePartialFrom(
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

    public static com.google.protobuf.Parser<Matrix3x2> parser() {
      return PARSER;
    }

    @java.lang.Override
    public com.google.protobuf.Parser<Matrix3x2> getParserForType() {
      return PARSER;
    }

    @java.lang.Override
    public ubii.dataStructure.Matrix3X2.Matrix3x2 getDefaultInstanceForType() {
      return DEFAULT_INSTANCE;
    }

  }

  private static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ubii_dataStructure_Matrix3x2_descriptor;
  private static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ubii_dataStructure_Matrix3x2_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n#proto/dataStructure/matrix3x2.proto\022\022u" +
      "bii.dataStructure\"Y\n\tMatrix3x2\022\013\n\003m00\030\001 " +
      "\001(\001\022\013\n\003m01\030\002 \001(\001\022\013\n\003m10\030\003 \001(\001\022\013\n\003m11\030\004 \001" +
      "(\001\022\013\n\003m20\030\005 \001(\001\022\013\n\003m21\030\006 \001(\001b\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        });
    internal_static_ubii_dataStructure_Matrix3x2_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_ubii_dataStructure_Matrix3x2_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ubii_dataStructure_Matrix3x2_descriptor,
        new java.lang.String[] { "M00", "M01", "M10", "M11", "M20", "M21", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
