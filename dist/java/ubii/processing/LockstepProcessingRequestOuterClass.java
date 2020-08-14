// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/processing/lockstepProcessingRequest.proto

package ubii.processing;

public final class LockstepProcessingRequestOuterClass {
  private LockstepProcessingRequestOuterClass() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  public interface LockstepProcessingRequestOrBuilder extends
      // @@protoc_insertion_point(interface_extends:ubii.processing.LockstepProcessingRequest)
      com.google.protobuf.MessageOrBuilder {

    /**
     * <code>.ubii.topicData.TopicDataRecordList records = 1;</code>
     * @return Whether the records field is set.
     */
    boolean hasRecords();
    /**
     * <code>.ubii.topicData.TopicDataRecordList records = 1;</code>
     * @return The records.
     */
    ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordList getRecords();
    /**
     * <code>.ubii.topicData.TopicDataRecordList records = 1;</code>
     */
    ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordListOrBuilder getRecordsOrBuilder();
  }
  /**
   * Protobuf type {@code ubii.processing.LockstepProcessingRequest}
   */
  public  static final class LockstepProcessingRequest extends
      com.google.protobuf.GeneratedMessageV3 implements
      // @@protoc_insertion_point(message_implements:ubii.processing.LockstepProcessingRequest)
      LockstepProcessingRequestOrBuilder {
  private static final long serialVersionUID = 0L;
    // Use LockstepProcessingRequest.newBuilder() to construct.
    private LockstepProcessingRequest(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
      super(builder);
    }
    private LockstepProcessingRequest() {
    }

    @java.lang.Override
    @SuppressWarnings({"unused"})
    protected java.lang.Object newInstance(
        UnusedPrivateParameter unused) {
      return new LockstepProcessingRequest();
    }

    @java.lang.Override
    public final com.google.protobuf.UnknownFieldSet
    getUnknownFields() {
      return this.unknownFields;
    }
    private LockstepProcessingRequest(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      this();
      if (extensionRegistry == null) {
        throw new java.lang.NullPointerException();
      }
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
            case 10: {
              ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordList.Builder subBuilder = null;
              if (records_ != null) {
                subBuilder = records_.toBuilder();
              }
              records_ = input.readMessage(ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordList.parser(), extensionRegistry);
              if (subBuilder != null) {
                subBuilder.mergeFrom(records_);
                records_ = subBuilder.buildPartial();
              }

              break;
            }
            default: {
              if (!parseUnknownField(
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
      return ubii.processing.LockstepProcessingRequestOuterClass.internal_static_ubii_processing_LockstepProcessingRequest_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return ubii.processing.LockstepProcessingRequestOuterClass.internal_static_ubii_processing_LockstepProcessingRequest_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest.class, ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest.Builder.class);
    }

    public static final int RECORDS_FIELD_NUMBER = 1;
    private ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordList records_;
    /**
     * <code>.ubii.topicData.TopicDataRecordList records = 1;</code>
     * @return Whether the records field is set.
     */
    public boolean hasRecords() {
      return records_ != null;
    }
    /**
     * <code>.ubii.topicData.TopicDataRecordList records = 1;</code>
     * @return The records.
     */
    public ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordList getRecords() {
      return records_ == null ? ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordList.getDefaultInstance() : records_;
    }
    /**
     * <code>.ubii.topicData.TopicDataRecordList records = 1;</code>
     */
    public ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordListOrBuilder getRecordsOrBuilder() {
      return getRecords();
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
      if (records_ != null) {
        output.writeMessage(1, getRecords());
      }
      unknownFields.writeTo(output);
    }

    @java.lang.Override
    public int getSerializedSize() {
      int size = memoizedSize;
      if (size != -1) return size;

      size = 0;
      if (records_ != null) {
        size += com.google.protobuf.CodedOutputStream
          .computeMessageSize(1, getRecords());
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
      if (!(obj instanceof ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest)) {
        return super.equals(obj);
      }
      ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest other = (ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest) obj;

      if (hasRecords() != other.hasRecords()) return false;
      if (hasRecords()) {
        if (!getRecords()
            .equals(other.getRecords())) return false;
      }
      if (!unknownFields.equals(other.unknownFields)) return false;
      return true;
    }

    @java.lang.Override
    public int hashCode() {
      if (memoizedHashCode != 0) {
        return memoizedHashCode;
      }
      int hash = 41;
      hash = (19 * hash) + getDescriptor().hashCode();
      if (hasRecords()) {
        hash = (37 * hash) + RECORDS_FIELD_NUMBER;
        hash = (53 * hash) + getRecords().hashCode();
      }
      hash = (29 * hash) + unknownFields.hashCode();
      memoizedHashCode = hash;
      return hash;
    }

    public static ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest parseFrom(
        java.nio.ByteBuffer data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest parseFrom(
        java.nio.ByteBuffer data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }
    public static ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input);
    }
    public static ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
    }
    public static ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest parseFrom(
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
    public static Builder newBuilder(ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest prototype) {
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
     * Protobuf type {@code ubii.processing.LockstepProcessingRequest}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
        // @@protoc_insertion_point(builder_implements:ubii.processing.LockstepProcessingRequest)
        ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequestOrBuilder {
      public static final com.google.protobuf.Descriptors.Descriptor
          getDescriptor() {
        return ubii.processing.LockstepProcessingRequestOuterClass.internal_static_ubii_processing_LockstepProcessingRequest_descriptor;
      }

      @java.lang.Override
      protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
          internalGetFieldAccessorTable() {
        return ubii.processing.LockstepProcessingRequestOuterClass.internal_static_ubii_processing_LockstepProcessingRequest_fieldAccessorTable
            .ensureFieldAccessorsInitialized(
                ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest.class, ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest.Builder.class);
      }

      // Construct using ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest.newBuilder()
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
        if (recordsBuilder_ == null) {
          records_ = null;
        } else {
          records_ = null;
          recordsBuilder_ = null;
        }
        return this;
      }

      @java.lang.Override
      public com.google.protobuf.Descriptors.Descriptor
          getDescriptorForType() {
        return ubii.processing.LockstepProcessingRequestOuterClass.internal_static_ubii_processing_LockstepProcessingRequest_descriptor;
      }

      @java.lang.Override
      public ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest getDefaultInstanceForType() {
        return ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest.getDefaultInstance();
      }

      @java.lang.Override
      public ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest build() {
        ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest result = buildPartial();
        if (!result.isInitialized()) {
          throw newUninitializedMessageException(result);
        }
        return result;
      }

      @java.lang.Override
      public ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest buildPartial() {
        ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest result = new ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest(this);
        if (recordsBuilder_ == null) {
          result.records_ = records_;
        } else {
          result.records_ = recordsBuilder_.build();
        }
        onBuilt();
        return result;
      }

      @java.lang.Override
      public Builder clone() {
        return super.clone();
      }
      @java.lang.Override
      public Builder setField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          java.lang.Object value) {
        return super.setField(field, value);
      }
      @java.lang.Override
      public Builder clearField(
          com.google.protobuf.Descriptors.FieldDescriptor field) {
        return super.clearField(field);
      }
      @java.lang.Override
      public Builder clearOneof(
          com.google.protobuf.Descriptors.OneofDescriptor oneof) {
        return super.clearOneof(oneof);
      }
      @java.lang.Override
      public Builder setRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          int index, java.lang.Object value) {
        return super.setRepeatedField(field, index, value);
      }
      @java.lang.Override
      public Builder addRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          java.lang.Object value) {
        return super.addRepeatedField(field, value);
      }
      @java.lang.Override
      public Builder mergeFrom(com.google.protobuf.Message other) {
        if (other instanceof ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest) {
          return mergeFrom((ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest)other);
        } else {
          super.mergeFrom(other);
          return this;
        }
      }

      public Builder mergeFrom(ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest other) {
        if (other == ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest.getDefaultInstance()) return this;
        if (other.hasRecords()) {
          mergeRecords(other.getRecords());
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
        ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest parsedMessage = null;
        try {
          parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
        } catch (com.google.protobuf.InvalidProtocolBufferException e) {
          parsedMessage = (ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest) e.getUnfinishedMessage();
          throw e.unwrapIOException();
        } finally {
          if (parsedMessage != null) {
            mergeFrom(parsedMessage);
          }
        }
        return this;
      }

      private ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordList records_;
      private com.google.protobuf.SingleFieldBuilderV3<
          ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordList, ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordList.Builder, ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordListOrBuilder> recordsBuilder_;
      /**
       * <code>.ubii.topicData.TopicDataRecordList records = 1;</code>
       * @return Whether the records field is set.
       */
      public boolean hasRecords() {
        return recordsBuilder_ != null || records_ != null;
      }
      /**
       * <code>.ubii.topicData.TopicDataRecordList records = 1;</code>
       * @return The records.
       */
      public ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordList getRecords() {
        if (recordsBuilder_ == null) {
          return records_ == null ? ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordList.getDefaultInstance() : records_;
        } else {
          return recordsBuilder_.getMessage();
        }
      }
      /**
       * <code>.ubii.topicData.TopicDataRecordList records = 1;</code>
       */
      public Builder setRecords(ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordList value) {
        if (recordsBuilder_ == null) {
          if (value == null) {
            throw new NullPointerException();
          }
          records_ = value;
          onChanged();
        } else {
          recordsBuilder_.setMessage(value);
        }

        return this;
      }
      /**
       * <code>.ubii.topicData.TopicDataRecordList records = 1;</code>
       */
      public Builder setRecords(
          ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordList.Builder builderForValue) {
        if (recordsBuilder_ == null) {
          records_ = builderForValue.build();
          onChanged();
        } else {
          recordsBuilder_.setMessage(builderForValue.build());
        }

        return this;
      }
      /**
       * <code>.ubii.topicData.TopicDataRecordList records = 1;</code>
       */
      public Builder mergeRecords(ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordList value) {
        if (recordsBuilder_ == null) {
          if (records_ != null) {
            records_ =
              ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordList.newBuilder(records_).mergeFrom(value).buildPartial();
          } else {
            records_ = value;
          }
          onChanged();
        } else {
          recordsBuilder_.mergeFrom(value);
        }

        return this;
      }
      /**
       * <code>.ubii.topicData.TopicDataRecordList records = 1;</code>
       */
      public Builder clearRecords() {
        if (recordsBuilder_ == null) {
          records_ = null;
          onChanged();
        } else {
          records_ = null;
          recordsBuilder_ = null;
        }

        return this;
      }
      /**
       * <code>.ubii.topicData.TopicDataRecordList records = 1;</code>
       */
      public ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordList.Builder getRecordsBuilder() {
        
        onChanged();
        return getRecordsFieldBuilder().getBuilder();
      }
      /**
       * <code>.ubii.topicData.TopicDataRecordList records = 1;</code>
       */
      public ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordListOrBuilder getRecordsOrBuilder() {
        if (recordsBuilder_ != null) {
          return recordsBuilder_.getMessageOrBuilder();
        } else {
          return records_ == null ?
              ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordList.getDefaultInstance() : records_;
        }
      }
      /**
       * <code>.ubii.topicData.TopicDataRecordList records = 1;</code>
       */
      private com.google.protobuf.SingleFieldBuilderV3<
          ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordList, ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordList.Builder, ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordListOrBuilder> 
          getRecordsFieldBuilder() {
        if (recordsBuilder_ == null) {
          recordsBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
              ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordList, ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordList.Builder, ubii.topicData.TopicDataRecordOuterClass.TopicDataRecordListOrBuilder>(
                  getRecords(),
                  getParentForChildren(),
                  isClean());
          records_ = null;
        }
        return recordsBuilder_;
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


      // @@protoc_insertion_point(builder_scope:ubii.processing.LockstepProcessingRequest)
    }

    // @@protoc_insertion_point(class_scope:ubii.processing.LockstepProcessingRequest)
    private static final ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest DEFAULT_INSTANCE;
    static {
      DEFAULT_INSTANCE = new ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest();
    }

    public static ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static final com.google.protobuf.Parser<LockstepProcessingRequest>
        PARSER = new com.google.protobuf.AbstractParser<LockstepProcessingRequest>() {
      @java.lang.Override
      public LockstepProcessingRequest parsePartialFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws com.google.protobuf.InvalidProtocolBufferException {
        return new LockstepProcessingRequest(input, extensionRegistry);
      }
    };

    public static com.google.protobuf.Parser<LockstepProcessingRequest> parser() {
      return PARSER;
    }

    @java.lang.Override
    public com.google.protobuf.Parser<LockstepProcessingRequest> getParserForType() {
      return PARSER;
    }

    @java.lang.Override
    public ubii.processing.LockstepProcessingRequestOuterClass.LockstepProcessingRequest getDefaultInstanceForType() {
      return DEFAULT_INSTANCE;
    }

  }

  private static final com.google.protobuf.Descriptors.Descriptor
    internal_static_ubii_processing_LockstepProcessingRequest_descriptor;
  private static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_ubii_processing_LockstepProcessingRequest_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n0proto/processing/lockstepProcessingReq" +
      "uest.proto\022\017ubii.processing\0325proto/topic" +
      "Data/topicDataRecord/topicDataRecord.pro" +
      "to\"Q\n\031LockstepProcessingRequest\0224\n\007recor" +
      "ds\030\001 \001(\0132#.ubii.topicData.TopicDataRecor" +
      "dListb\006proto3"
    };
    descriptor = com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          ubii.topicData.TopicDataRecordOuterClass.getDescriptor(),
        });
    internal_static_ubii_processing_LockstepProcessingRequest_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_ubii_processing_LockstepProcessingRequest_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_ubii_processing_LockstepProcessingRequest_descriptor,
        new java.lang.String[] { "Records", });
    ubii.topicData.TopicDataRecordOuterClass.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
