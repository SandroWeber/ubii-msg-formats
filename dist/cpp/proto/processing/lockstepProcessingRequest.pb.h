// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/processing/lockstepProcessingRequest.proto

#ifndef GOOGLE_PROTOBUF_INCLUDED_proto_2fprocessing_2flockstepProcessingRequest_2eproto
#define GOOGLE_PROTOBUF_INCLUDED_proto_2fprocessing_2flockstepProcessingRequest_2eproto

#include <limits>
#include <string>

#include <google/protobuf/port_def.inc>
#if PROTOBUF_VERSION < 3011000
#error This file was generated by a newer version of protoc which is
#error incompatible with your Protocol Buffer headers. Please update
#error your headers.
#endif
#if 3011001 < PROTOBUF_MIN_PROTOC_VERSION
#error This file was generated by an older version of protoc which is
#error incompatible with your Protocol Buffer headers. Please
#error regenerate this file with a newer version of protoc.
#endif

#include <google/protobuf/port_undef.inc>
#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/arena.h>
#include <google/protobuf/arenastring.h>
#include <google/protobuf/generated_message_table_driven.h>
#include <google/protobuf/generated_message_util.h>
#include <google/protobuf/inlined_string_field.h>
#include <google/protobuf/metadata.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/message.h>
#include <google/protobuf/repeated_field.h>  // IWYU pragma: export
#include <google/protobuf/extension_set.h>  // IWYU pragma: export
#include <google/protobuf/unknown_field_set.h>
#include "proto/topicData/topicDataRecord/topicDataRecord.pb.h"
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_proto_2fprocessing_2flockstepProcessingRequest_2eproto
PROTOBUF_NAMESPACE_OPEN
namespace internal {
class AnyMetadata;
}  // namespace internal
PROTOBUF_NAMESPACE_CLOSE

// Internal implementation detail -- do not use these members.
struct TableStruct_proto_2fprocessing_2flockstepProcessingRequest_2eproto {
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTableField entries[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::AuxillaryParseTableField aux[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTable schema[1]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::FieldMetadata field_metadata[];
  static const ::PROTOBUF_NAMESPACE_ID::internal::SerializationTable serialization_table[];
  static const ::PROTOBUF_NAMESPACE_ID::uint32 offsets[];
};
extern const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_proto_2fprocessing_2flockstepProcessingRequest_2eproto;
namespace ubii {
namespace processing {
class LockstepProcessingRequest;
class LockstepProcessingRequestDefaultTypeInternal;
extern LockstepProcessingRequestDefaultTypeInternal _LockstepProcessingRequest_default_instance_;
}  // namespace processing
}  // namespace ubii
PROTOBUF_NAMESPACE_OPEN
template<> ::ubii::processing::LockstepProcessingRequest* Arena::CreateMaybeMessage<::ubii::processing::LockstepProcessingRequest>(Arena*);
PROTOBUF_NAMESPACE_CLOSE
namespace ubii {
namespace processing {

// ===================================================================

class LockstepProcessingRequest :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:ubii.processing.LockstepProcessingRequest) */ {
 public:
  LockstepProcessingRequest();
  virtual ~LockstepProcessingRequest();

  LockstepProcessingRequest(const LockstepProcessingRequest& from);
  LockstepProcessingRequest(LockstepProcessingRequest&& from) noexcept
    : LockstepProcessingRequest() {
    *this = ::std::move(from);
  }

  inline LockstepProcessingRequest& operator=(const LockstepProcessingRequest& from) {
    CopyFrom(from);
    return *this;
  }
  inline LockstepProcessingRequest& operator=(LockstepProcessingRequest&& from) noexcept {
    if (GetArenaNoVirtual() == from.GetArenaNoVirtual()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }

  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* descriptor() {
    return GetDescriptor();
  }
  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* GetDescriptor() {
    return GetMetadataStatic().descriptor;
  }
  static const ::PROTOBUF_NAMESPACE_ID::Reflection* GetReflection() {
    return GetMetadataStatic().reflection;
  }
  static const LockstepProcessingRequest& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const LockstepProcessingRequest* internal_default_instance() {
    return reinterpret_cast<const LockstepProcessingRequest*>(
               &_LockstepProcessingRequest_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  friend void swap(LockstepProcessingRequest& a, LockstepProcessingRequest& b) {
    a.Swap(&b);
  }
  inline void Swap(LockstepProcessingRequest* other) {
    if (other == this) return;
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline LockstepProcessingRequest* New() const final {
    return CreateMaybeMessage<LockstepProcessingRequest>(nullptr);
  }

  LockstepProcessingRequest* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<LockstepProcessingRequest>(arena);
  }
  void CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void CopyFrom(const LockstepProcessingRequest& from);
  void MergeFrom(const LockstepProcessingRequest& from);
  PROTOBUF_ATTRIBUTE_REINITIALIZES void Clear() final;
  bool IsInitialized() const final;

  size_t ByteSizeLong() const final;
  const char* _InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) final;
  ::PROTOBUF_NAMESPACE_ID::uint8* _InternalSerialize(
      ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const final;
  int GetCachedSize() const final { return _cached_size_.Get(); }

  private:
  inline void SharedCtor();
  inline void SharedDtor();
  void SetCachedSize(int size) const final;
  void InternalSwap(LockstepProcessingRequest* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "ubii.processing.LockstepProcessingRequest";
  }
  private:
  inline ::PROTOBUF_NAMESPACE_ID::Arena* GetArenaNoVirtual() const {
    return nullptr;
  }
  inline void* MaybeArenaPtr() const {
    return nullptr;
  }
  public:

  ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadata() const final;
  private:
  static ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadataStatic() {
    ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(&::descriptor_table_proto_2fprocessing_2flockstepProcessingRequest_2eproto);
    return ::descriptor_table_proto_2fprocessing_2flockstepProcessingRequest_2eproto.file_level_metadata[kIndexInFileMessages];
  }

  public:

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  enum : int {
    kRecordsFieldNumber = 1,
  };
  // .ubii.topicData.TopicDataRecordList records = 1;
  bool has_records() const;
  private:
  bool _internal_has_records() const;
  public:
  void clear_records();
  const ::ubii::topicData::TopicDataRecordList& records() const;
  ::ubii::topicData::TopicDataRecordList* release_records();
  ::ubii::topicData::TopicDataRecordList* mutable_records();
  void set_allocated_records(::ubii::topicData::TopicDataRecordList* records);
  private:
  const ::ubii::topicData::TopicDataRecordList& _internal_records() const;
  ::ubii::topicData::TopicDataRecordList* _internal_mutable_records();
  public:

  // @@protoc_insertion_point(class_scope:ubii.processing.LockstepProcessingRequest)
 private:
  class _Internal;

  ::PROTOBUF_NAMESPACE_ID::internal::InternalMetadataWithArena _internal_metadata_;
  ::ubii::topicData::TopicDataRecordList* records_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_proto_2fprocessing_2flockstepProcessingRequest_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// LockstepProcessingRequest

// .ubii.topicData.TopicDataRecordList records = 1;
inline bool LockstepProcessingRequest::_internal_has_records() const {
  return this != internal_default_instance() && records_ != nullptr;
}
inline bool LockstepProcessingRequest::has_records() const {
  return _internal_has_records();
}
inline const ::ubii::topicData::TopicDataRecordList& LockstepProcessingRequest::_internal_records() const {
  const ::ubii::topicData::TopicDataRecordList* p = records_;
  return p != nullptr ? *p : *reinterpret_cast<const ::ubii::topicData::TopicDataRecordList*>(
      &::ubii::topicData::_TopicDataRecordList_default_instance_);
}
inline const ::ubii::topicData::TopicDataRecordList& LockstepProcessingRequest::records() const {
  // @@protoc_insertion_point(field_get:ubii.processing.LockstepProcessingRequest.records)
  return _internal_records();
}
inline ::ubii::topicData::TopicDataRecordList* LockstepProcessingRequest::release_records() {
  // @@protoc_insertion_point(field_release:ubii.processing.LockstepProcessingRequest.records)
  
  ::ubii::topicData::TopicDataRecordList* temp = records_;
  records_ = nullptr;
  return temp;
}
inline ::ubii::topicData::TopicDataRecordList* LockstepProcessingRequest::_internal_mutable_records() {
  
  if (records_ == nullptr) {
    auto* p = CreateMaybeMessage<::ubii::topicData::TopicDataRecordList>(GetArenaNoVirtual());
    records_ = p;
  }
  return records_;
}
inline ::ubii::topicData::TopicDataRecordList* LockstepProcessingRequest::mutable_records() {
  // @@protoc_insertion_point(field_mutable:ubii.processing.LockstepProcessingRequest.records)
  return _internal_mutable_records();
}
inline void LockstepProcessingRequest::set_allocated_records(::ubii::topicData::TopicDataRecordList* records) {
  ::PROTOBUF_NAMESPACE_ID::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == nullptr) {
    delete reinterpret_cast< ::PROTOBUF_NAMESPACE_ID::MessageLite*>(records_);
  }
  if (records) {
    ::PROTOBUF_NAMESPACE_ID::Arena* submessage_arena = nullptr;
    if (message_arena != submessage_arena) {
      records = ::PROTOBUF_NAMESPACE_ID::internal::GetOwnedMessage(
          message_arena, records, submessage_arena);
    }
    
  } else {
    
  }
  records_ = records;
  // @@protoc_insertion_point(field_set_allocated:ubii.processing.LockstepProcessingRequest.records)
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)

}  // namespace processing
}  // namespace ubii

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // GOOGLE_PROTOBUF_INCLUDED_GOOGLE_PROTOBUF_INCLUDED_proto_2fprocessing_2flockstepProcessingRequest_2eproto
