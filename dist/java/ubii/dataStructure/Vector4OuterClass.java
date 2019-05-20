// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/topicData/topicDataRecord/dataStructure/vector4.proto

package ubii.dataStructure;

public final class Vector4OuterClass {
  private Vector4OuterClass() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  public interface Vector4OrBuilder extends
      // @@protoc_insertion_point(interface_extends:ubii.dataStructure.Vector4)
      com.google.protobuf.MessageOrBuilder {

    /**
     * <code>double x = 1;</code>
     */
    double getX();

    /**
     * <code>double y = 2;</code>
     */
    double getY();

    /**
     * <code>double z = 3;</code>
     */
    double getZ();

    /**
     * <code>double w = 4;</code>
     */
    double getW();
  }
  /**
   * Protobuf type {@code ubii.dataStructure.Vector4}
   */
  public  static final class Vector4 extends
      com.google.protobuf.GeneratedMessageV3 implements
      // @@protoc_insertion_point(message_implements:ubii.dataStructure.Vector4)
      Vector4OrBuilder {
  private static final long serialVersionUID = 0L;
    // Use Vector4.newBuilder() to construct.
    private Vector4(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
      super(builder);
    }
    private Vector4() {
      x_ = 0D;
      y_ = 0D;
      z_ = 0D;
      w_ = 0D;
    }

    @java.lang.Override
    public final com.google.protobuf.UnknownFieldSet
    getUnknownFields() {
      return this.unknownFields;
    }
    private Vector4(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      this();
      if (extensionRegistry == null) {
        throw new java.lang.NullPointerException();
      }
      int mutable_bitField0_ = 0;
      com.google.protobuf.UnknownFieldSet.Builder unknownFields =
          com.google.protobuf.UnknownFieldSet.newBuilder();
      try {
        boolean done = false;
        while (!done) {
          int tag = input.readTag();
          switch (tag) {
            case 0:
              done = true;
              break;
            case 9: {

              x_ = input.readDouble();
              break;
            }
            case 17: {

              y_ = input.readDouble();
              break;
            }
            case 25: {

              z_ = input.readDouble();
              break;
            }
            case 33: {

              w_ = input.readDouble();
              break;
            }
            default: {
              if (!parseUnknownFieldProto3(
                  input, unknownFields, extensionRegistry, tag)) {
                done = true;
              }
              break;
            }
          }
        }
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.setUnfinishedMessage(this);
      } catch (java.io.IOException e) {
        throw new com.google.protobuf.InvalidProtocolBufferException(
            e).setUnfinishedMessage(this);
      } finally {
        this.unknownFields = unknownFields.build();
        makeExtensionsImmutable();
      }
    }
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return ubii.dataStructure.Vector4OuterClass.internal_static_ubii_dataStructure_Vector4_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return ubii.dataStructure.Vector4OuterClass.internal_static_ubii_dataStructure_Vector4_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              ubii.dataStructure.Vector4OuterClass.Vector4.class, ubii.dataStructure.Vector4OuterClass.Vector4.Builder.class);
    }

    public static final int X_FIELD_NUMBER = 1;
    private double x_;
    /**
     * <code>double x = 1;</code>
     */
    public double getX() {
      return x_;
    }

    public static final int Y_FIELD_NUMBER = 2;
    private double y_;
    /**
     * <code>double y = 2;</code>
     */
    public double getY() {
      return y_;
    }

    public static final int Z_FIELD_NUMBER = 3;
    private double z_;
    /**
     * <code>double z = 3;</code>
     */
    public double getZ() {
      return z_;
    }

    public static final int W_FIELD_NUMBER = 4;
    private double w_;
    /**
     * <code>double w = 4;</code>
     */
    public double getW() {
      return w_;
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
      if (x_ != 0D) {
        output.writeDouble(1, x_);
      }
      if (y_ != 0D) {
        output.writeDouble(2, y_);
      }
      if (z_ != 0D) {
        output.writeDouble(3, z_);
      }
      if (w_ != 0D) {
        output.writeDouble(4, w_);
      }
      unknownFields.writeTo(output);
    }

    @java.lang.Override
    public int getSerializedSize() {
      int size = memoizedSize;
      if (size != -1) return size;

      size = 0;
      if (x_ != 0D) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(1, x_);
      }
      if (y_ != 0D) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(2, y_);
      }
      if (z_ != 0D) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(3, z_);
      }
      if (w_ != 0D) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(4, w_);
      }
      size += unknownFields.getSerializedSize();
      memoizedSize = size;
      return size;
    }

    @java.lang.Override
    public boolean equals(final java.lang.Object obj) {
      if (obj == this) {
       return true;
      }
      if (!(obj instanceof ubii.dataStructure.Vector4OuterClass.Vector4)) {
        return super.equals(obj);
      }
      ubii.dataStructure.Vector4OuterClass.Vector4 other = (ubii.dataStructure.Vector4OuterClass.Vector4) obj;

      boolean result = true;
      result = result && (
          java.lang.Double.doubleToLongBits(getX())
          == java.lang.Double.doubleToLongBits(
              other.getX()));
      result = result && (
          java.lang.Double.doubleToLongBits(getY())
          == java.lang.Double.doubleToLongBits(
              other.getY()));
      result = result && (
          java.lang.Double.doubleToLongBits(getZ())
          == java.lang.Double.doubleToLongBits(
              other.getZ()));
      result = result && (
          java.lang.Double.doubleToLongBits(getW())
          == java.lang.Double.doubleToLongBits(
              other.getW()));
      result = result && unknownFields.equals(other.unknownFields);
      return result;
    }

    @java.lang.Override
    public int hashCode() {
      if (memoizedHashCode != 0) {
        return memoizedHashCode;
      }
      int hash = 41;
      hash = (19 * hash) + getDescriptor().hashCode();
      hash = (37 * hash) + X_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getX()));
      hash = (37 * hash) + Y_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getY()));
      hash = (37 * hash) + Z_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getZ()));
      hash = (37 * hash) + W_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getW()));
      hash = (29 * hash) + unknownFields.hashCode();
      memoizedHashCode = hash;
      return hash;
    }

    public static ubii.dataStructure.Vector4OuterClass.Vector4 parseFrom(
        java.nio.ByteBuffer data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static ubii.dataStructure.Vector4OuterClass.Vector4 parseFrom(
        java.nio.ByteBuffer data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static ubii.dataStructure.Vector4OuterClass.Vector4 parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static ubii.dataStructure.Vector4OuterClass.Vector4 parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static ubii.dataStructure.Vector4OuterClass.Vector4 parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static ubii.dataStructure.Vector4OuterClass.Vector4 parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static ubii.dataStructure.Vector4OuterClass.Vector4 parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static ubii.dataStructure.Vector4OuterClass.Vector4 parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }
    public static ubii.dataStructure.Vector4OuterClass.Vector4 parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input);
    }
    public static ubii.dataStructure.Vector4OuterClass.Vector4 parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
    }
    public static ubii.dataStructure.Vector4OuterClass.Vector4 parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static ubii.dataStructure.Vector4OuterClass.Vector4 parseFrom(
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
    public static Builder newBuilder(ubii.dataStructure.Vector4OuterClass.Vector4 prototype) {
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
     * Protobuf type {@code ubii.dataStructure.Vector4}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
        // @@protoc_insertion_point(builder_implements:ubii.dataStructure.Vector4)
        ubii.dataStructure.Vector4OuterClass.Vector4OrBuilder {
      public static final com.google.protobuf.Descriptors.Descriptor
          getDescriptor() {
        return ubii.dataStructure.Vector4OuterClass.internal_static_ubii_dataStructure_Vector4_descriptor;
      }

      @java.lang.Override
      protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
          internalGetFieldAccessorTable() {
        return ubii.dataStructure.Vector4OuterClass.internal_static_ubii_dataStructure_Vector4_fieldAccessorTable
            .ensureFieldAccessorsInitialized(
                ubii.dataStructure.Vector4OuterClass.Vector4.class, ubii.dataStructure.Vector4OuterClass.Vector4.Builder.class);
      }

      // Construct using ubii.dataStructure.Vector4OuterClass.Vector4.newBuilder()
      private Builder() {
        maybeForceBuilderInitialization();
      }

      private Builder(
          com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
        super(parent);
        maybeForceBuilderInitialization();
      }
      private void maybeForceBuilderInitialization() {
        if (com.google.protobuf.GeneratedMessageV3
                .alwaysUseFieldBuilders) {
        }
      }
      @java.lang.Override
      public Builder clear() {
        super.clear();
        x_ = 0D;

        y_ = 0D;

        z_ = 0D;

        w_ = 0D;

        return this;
      }

      @java.lang.Override
      public com.google.protobuf.Descriptors.Descriptor
          getDescriptorForType() {
        return ubii.dataStructure.Vector4OuterClass.internal_static_ubii_dataStructure_Vector4_descriptor;
      }

      @java.lang.Override
      public ubii.dataStructure.Vector4OuterClass.Vector4 getDefaultInstanceForType() {
        return ubii.dataStructure.Vector4OuterClass.Vector4.getDefaultInstance();
      }

      @java.lang.Override
      public ubii.dataStructure.Vector4OuterClass.Vector4 build() {
        ubii.dataStructure.Vector4OuterClass.Vector4 result = buildPartial();
        if (!result.isInitialized()) {
          throw newUninitializedMessageException(result);
        }
        return result;
      }

      @java.lang.Override
      public ubii.dataStructure.Vector4OuterClass.Vector4 buildPartial() {
        ubii.dataStructure.Vector4OuterClass.Vector4 result = new ubii.dataStructure.Vector4OuterClass.Vector4(this);
        result.x_ = x_;
        result.y_ = y_;
        result.z_ = z_;
        result.w_ = w_;
        onBuilt();
        return result;
      }

      @java.lang.Override
      public Builder clone() {
        return (Builder) super.clone();
      }
      @java.lang.Override
      public Builder setField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          java.lang.Object value) {
        return (Builder) super.setField(field, value);
      }
      @java.lang.Override
      public Builder clearField(
          com.google.protobuf.Descriptors.FieldDescriptor field) {
        return (Builder) super.clearField(field);
      }
      @java.lang.Override
      public Builder clearOneof(
          com.google.protobuf.Descriptors.OneofDescriptor oneof) {
        return (Builder) super.clearOneof(oneof);
      }
      @java.lang.Override
      public Builder setRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          int index, java.lang.Object value) {
        return (Builder) super.setRepeatedField(field, index, value);
      }
      @java.lang.Override
      public Builder addRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          java.lang.Object value) {
        return (Builder) super.addRepeatedField(field, value);
      }
      @java.lang.Override
      public Builder mergeFrom(com.google.protobuf.Message other) {
        if (other instanceof ubii.dataStructure.Vector4OuterClass.Vector4) {
          return mergeFrom((ubii.dataStructure.Vector4OuterClass.Vector4)other);
        } else {
          super.mergeFrom(other);
          return this;
        }
      }

      public Builder mergeFrom(ubii.dataStructure.Vector4OuterClass.Vector4 other) {
        if (other == ubii.dataStructure.Vector4OuterClass.Vector4.getDefaultInstance()) return this;
        if (other.getX() != 0D) {
          setX(other.getX());
        }
        if (other.getY() != 0D) {
          setY(other.getY());
        }
        if (other.getZ() != 0D) {
          setZ(other.getZ());
        }
        if (other.getW() != 0D) {
          setW(other.getW());
        }
        this.mergeUnknownFields(other.unknownFields);
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
        ubii.dataStructure.Vector4OuterClass.Vector4 parsedMessage = null;
        try {
          parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
        } catch (com.google.protobuf.InvalidProtocolBufferException e) {
          parsedMessage = (ubii.dataStructure.Vector4OuterClass.Vector4) e.getUnfinishedMessage();
          throw e.unwrapIOException();
        } finally {
          if (parsedMessage != null) {
            mergeFrom(parsedMessage);
          }
        }
        return this;
      }

      private double x_ ;
      /**
       * <code>double x = 1;</code>
       */
      public double getX() {
        return x_;
      }
      /**
       * <code>double x = 1;</code>
       */
      public Builder setX(double value) {
        
        x_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>double x = 1;</code>
       */
      public Builder clearX() {
        
        x_ = 0D;
        onChanged();
        return this;
      }

      private double y_ ;
      /**
       * <code>double y = 2;</code>
       */
      public double getY() {
        return y_;
      }
      /**
       * <code>double y = 2;</code>
       */
      public Builder setY(double value) {
        
        y_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>double y = 2;</code>
       */
      public Builder clearY() {
        
        y_ = 0D;
        onChanged();
        return this;
      }

      private double z_ ;
      /**
       * <code>double z = 3;</code>
       */
      public double getZ() {
        return z_;
      }
      /**
       * <code>double z = 3;</code>
       */
      public Builder setZ(double value) {
        
        z_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>double z = 3;</code>
       */
      public Builder clearZ() {
        
        z_ = 0D;
        onChanged();
        return this;
      }

      private double w_ ;
      /**
       * <code>double w = 4;</code>
       */
      public double getW() {
        return w_;
      }
      /**
       * <code>double w = 4;</code>
       */
      public Builder setW(double value) {
        
        w_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>double w = 4;</code>
       */
      public Builder clearW() {
        
        w_ = 0D;
        onChanged();
        return this;
      }
      @java.lang.Override
      public final Builder setUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return super.setUnknownFieldsProto3(unknownFields);
      }

      @java.lang.Override
      public final Builder mergeUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return super.mergeUnknownFields(unknownFields);
      }


      // @@protoc_insertion_point(builder_scope:ubii.dataStructure.Vector4)
    }

    // @@protoc_insertion_point(class_scope:ubii.dataStructure.Vector4)
    private static final ubii.dataStructure.Vector4OuterClass.Vector4 DEFAULT_INSTANCE;
    static {
      DEFAULT_INSTANCE = new ubii.dataStructure.Vector4OuterClass.Vector4();
    }

    public static ubii.dataStructure.Vector4OuterClass.Vector4 getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static final com.google.protobuf.Parser<Vector4>
        PARSER = new com.google.protobuf.AbstractParser<Vector4>() {
      @java.lang.Override
      public Vector4 parsePartialFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws com.google.protobuf.InvalidProtocolBufferException {
        return new Vector4(input, extensionRegistry);
      }
    };

    public static com.google.protobuf.Parser<Vector4> parser() {
      return PARSER;
    }

    @java.lang.Override
    public com.google.protobuf.Parser<Vector4> getParserForType() {
      return PARSER;
    }

    @java.lang.Override
    public ubii.dataStructure.Vector4OuterClass.Vector4 getDefaultInstanceForType() {
      return DEFAULT_INSTANCE;
    }

  }

  private static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ubii_dataStructure_Vector4_descriptor;
  private static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ubii_dataStructure_Vector4_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n;proto/topicData/topicDataRecord/dataSt" +
      "ructure/vector4.proto\022\022ubii.dataStructur" +
      "e\"5\n\007Vector4\022\t\n\001x\030\001 \001(\001\022\t\n\001y\030\002 \001(\001\022\t\n\001z\030" +
      "\003 \001(\001\022\t\n\001w\030\004 \001(\001b\006proto3"
    };
    com.google.protobuf.Descriptors.FileDescriptor.InternalDescriptorAssigner assigner =
        new com.google.protobuf.Descriptors.FileDescriptor.    InternalDescriptorAssigner() {
          public com.google.protobuf.ExtensionRegistry assignDescriptors(
              com.google.protobuf.Descriptors.FileDescriptor root) {
            descriptor = root;
            return null;
          }
        };
    com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        }, assigner);
    internal_static_ubii_dataStructure_Vector4_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_ubii_dataStructure_Vector4_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ubii_dataStructure_Vector4_descriptor,
        new java.lang.String[] { "X", "Y", "Z", "W", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}