// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/services/service.proto

#ifndef GOOGLE_PROTOBUF_INCLUDED_proto_2fservices_2fservice_2eproto
#define GOOGLE_PROTOBUF_INCLUDED_proto_2fservices_2fservice_2eproto

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
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_proto_2fservices_2fservice_2eproto
PROTOBUF_NAMESPACE_OPEN
namespace internal {
class AnyMetadata;
}  // namespace internal
PROTOBUF_NAMESPACE_CLOSE

// Internal implementation detail -- do not use these members.
struct TableStruct_proto_2fservices_2fservice_2eproto {
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTableField entries[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::AuxillaryParseTableField aux[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTable schema[2]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::FieldMetadata field_metadata[];
  static const ::PROTOBUF_NAMESPACE_ID::internal::SerializationTable serialization_table[];
  static const ::PROTOBUF_NAMESPACE_ID::uint32 offsets[];
};
extern const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_proto_2fservices_2fservice_2eproto;
namespace ubii {
namespace services {
class Service;
class ServiceDefaultTypeInternal;
extern ServiceDefaultTypeInternal _Service_default_instance_;
class ServiceList;
class ServiceListDefaultTypeInternal;
extern ServiceListDefaultTypeInternal _ServiceList_default_instance_;
}  // namespace services
}  // namespace ubii
PROTOBUF_NAMESPACE_OPEN
template<> ::ubii::services::Service* Arena::CreateMaybeMessage<::ubii::services::Service>(Arena*);
template<> ::ubii::services::ServiceList* Arena::CreateMaybeMessage<::ubii::services::ServiceList>(Arena*);
PROTOBUF_NAMESPACE_CLOSE
namespace ubii {
namespace services {

// ===================================================================

class Service :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:ubii.services.Service) */ {
 public:
  Service();
  virtual ~Service();

  Service(const Service& from);
  Service(Service&& from) noexcept
    : Service() {
    *this = ::std::move(from);
  }

  inline Service& operator=(const Service& from) {
    CopyFrom(from);
    return *this;
  }
  inline Service& operator=(Service&& from) noexcept {
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
  static const Service& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const Service* internal_default_instance() {
    return reinterpret_cast<const Service*>(
               &_Service_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  friend void swap(Service& a, Service& b) {
    a.Swap(&b);
  }
  inline void Swap(Service* other) {
    if (other == this) return;
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline Service* New() const final {
    return CreateMaybeMessage<Service>(nullptr);
  }

  Service* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<Service>(arena);
  }
  void CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void CopyFrom(const Service& from);
  void MergeFrom(const Service& from);
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
  void InternalSwap(Service* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "ubii.services.Service";
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
    ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(&::descriptor_table_proto_2fservices_2fservice_2eproto);
    return ::descriptor_table_proto_2fservices_2fservice_2eproto.file_level_metadata[kIndexInFileMessages];
  }

  public:

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  enum : int {
    kTagsFieldNumber = 4,
    kTopicFieldNumber = 1,
    kRequestMessageFormatFieldNumber = 2,
    kResponseMessageFormatFieldNumber = 3,
    kDescriptionFieldNumber = 5,
  };
  // repeated string tags = 4;
  int tags_size() const;
  private:
  int _internal_tags_size() const;
  public:
  void clear_tags();
  const std::string& tags(int index) const;
  std::string* mutable_tags(int index);
  void set_tags(int index, const std::string& value);
  void set_tags(int index, std::string&& value);
  void set_tags(int index, const char* value);
  void set_tags(int index, const char* value, size_t size);
  std::string* add_tags();
  void add_tags(const std::string& value);
  void add_tags(std::string&& value);
  void add_tags(const char* value);
  void add_tags(const char* value, size_t size);
  const ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField<std::string>& tags() const;
  ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField<std::string>* mutable_tags();
  private:
  const std::string& _internal_tags(int index) const;
  std::string* _internal_add_tags();
  public:

  // string topic = 1;
  void clear_topic();
  const std::string& topic() const;
  void set_topic(const std::string& value);
  void set_topic(std::string&& value);
  void set_topic(const char* value);
  void set_topic(const char* value, size_t size);
  std::string* mutable_topic();
  std::string* release_topic();
  void set_allocated_topic(std::string* topic);
  private:
  const std::string& _internal_topic() const;
  void _internal_set_topic(const std::string& value);
  std::string* _internal_mutable_topic();
  public:

  // string request_message_format = 2;
  void clear_request_message_format();
  const std::string& request_message_format() const;
  void set_request_message_format(const std::string& value);
  void set_request_message_format(std::string&& value);
  void set_request_message_format(const char* value);
  void set_request_message_format(const char* value, size_t size);
  std::string* mutable_request_message_format();
  std::string* release_request_message_format();
  void set_allocated_request_message_format(std::string* request_message_format);
  private:
  const std::string& _internal_request_message_format() const;
  void _internal_set_request_message_format(const std::string& value);
  std::string* _internal_mutable_request_message_format();
  public:

  // string response_message_format = 3;
  void clear_response_message_format();
  const std::string& response_message_format() const;
  void set_response_message_format(const std::string& value);
  void set_response_message_format(std::string&& value);
  void set_response_message_format(const char* value);
  void set_response_message_format(const char* value, size_t size);
  std::string* mutable_response_message_format();
  std::string* release_response_message_format();
  void set_allocated_response_message_format(std::string* response_message_format);
  private:
  const std::string& _internal_response_message_format() const;
  void _internal_set_response_message_format(const std::string& value);
  std::string* _internal_mutable_response_message_format();
  public:

  // string description = 5;
  void clear_description();
  const std::string& description() const;
  void set_description(const std::string& value);
  void set_description(std::string&& value);
  void set_description(const char* value);
  void set_description(const char* value, size_t size);
  std::string* mutable_description();
  std::string* release_description();
  void set_allocated_description(std::string* description);
  private:
  const std::string& _internal_description() const;
  void _internal_set_description(const std::string& value);
  std::string* _internal_mutable_description();
  public:

  // @@protoc_insertion_point(class_scope:ubii.services.Service)
 private:
  class _Internal;

  ::PROTOBUF_NAMESPACE_ID::internal::InternalMetadataWithArena _internal_metadata_;
  ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField<std::string> tags_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr topic_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr request_message_format_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr response_message_format_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr description_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_proto_2fservices_2fservice_2eproto;
};
// -------------------------------------------------------------------

class ServiceList :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:ubii.services.ServiceList) */ {
 public:
  ServiceList();
  virtual ~ServiceList();

  ServiceList(const ServiceList& from);
  ServiceList(ServiceList&& from) noexcept
    : ServiceList() {
    *this = ::std::move(from);
  }

  inline ServiceList& operator=(const ServiceList& from) {
    CopyFrom(from);
    return *this;
  }
  inline ServiceList& operator=(ServiceList&& from) noexcept {
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
  static const ServiceList& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const ServiceList* internal_default_instance() {
    return reinterpret_cast<const ServiceList*>(
               &_ServiceList_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    1;

  friend void swap(ServiceList& a, ServiceList& b) {
    a.Swap(&b);
  }
  inline void Swap(ServiceList* other) {
    if (other == this) return;
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline ServiceList* New() const final {
    return CreateMaybeMessage<ServiceList>(nullptr);
  }

  ServiceList* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<ServiceList>(arena);
  }
  void CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void CopyFrom(const ServiceList& from);
  void MergeFrom(const ServiceList& from);
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
  void InternalSwap(ServiceList* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "ubii.services.ServiceList";
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
    ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(&::descriptor_table_proto_2fservices_2fservice_2eproto);
    return ::descriptor_table_proto_2fservices_2fservice_2eproto.file_level_metadata[kIndexInFileMessages];
  }

  public:

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  enum : int {
    kElementsFieldNumber = 1,
  };
  // repeated .ubii.services.Service elements = 1;
  int elements_size() const;
  private:
  int _internal_elements_size() const;
  public:
  void clear_elements();
  ::ubii::services::Service* mutable_elements(int index);
  ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField< ::ubii::services::Service >*
      mutable_elements();
  private:
  const ::ubii::services::Service& _internal_elements(int index) const;
  ::ubii::services::Service* _internal_add_elements();
  public:
  const ::ubii::services::Service& elements(int index) const;
  ::ubii::services::Service* add_elements();
  const ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField< ::ubii::services::Service >&
      elements() const;

  // @@protoc_insertion_point(class_scope:ubii.services.ServiceList)
 private:
  class _Internal;

  ::PROTOBUF_NAMESPACE_ID::internal::InternalMetadataWithArena _internal_metadata_;
  ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField< ::ubii::services::Service > elements_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_proto_2fservices_2fservice_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// Service

// string topic = 1;
inline void Service::clear_topic() {
  topic_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline const std::string& Service::topic() const {
  // @@protoc_insertion_point(field_get:ubii.services.Service.topic)
  return _internal_topic();
}
inline void Service::set_topic(const std::string& value) {
  _internal_set_topic(value);
  // @@protoc_insertion_point(field_set:ubii.services.Service.topic)
}
inline std::string* Service::mutable_topic() {
  // @@protoc_insertion_point(field_mutable:ubii.services.Service.topic)
  return _internal_mutable_topic();
}
inline const std::string& Service::_internal_topic() const {
  return topic_.GetNoArena();
}
inline void Service::_internal_set_topic(const std::string& value) {
  
  topic_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), value);
}
inline void Service::set_topic(std::string&& value) {
  
  topic_.SetNoArena(
    &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:ubii.services.Service.topic)
}
inline void Service::set_topic(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  topic_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.services.Service.topic)
}
inline void Service::set_topic(const char* value, size_t size) {
  
  topic_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.services.Service.topic)
}
inline std::string* Service::_internal_mutable_topic() {
  
  return topic_.MutableNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline std::string* Service::release_topic() {
  // @@protoc_insertion_point(field_release:ubii.services.Service.topic)
  
  return topic_.ReleaseNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline void Service::set_allocated_topic(std::string* topic) {
  if (topic != nullptr) {
    
  } else {
    
  }
  topic_.SetAllocatedNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), topic);
  // @@protoc_insertion_point(field_set_allocated:ubii.services.Service.topic)
}

// string request_message_format = 2;
inline void Service::clear_request_message_format() {
  request_message_format_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline const std::string& Service::request_message_format() const {
  // @@protoc_insertion_point(field_get:ubii.services.Service.request_message_format)
  return _internal_request_message_format();
}
inline void Service::set_request_message_format(const std::string& value) {
  _internal_set_request_message_format(value);
  // @@protoc_insertion_point(field_set:ubii.services.Service.request_message_format)
}
inline std::string* Service::mutable_request_message_format() {
  // @@protoc_insertion_point(field_mutable:ubii.services.Service.request_message_format)
  return _internal_mutable_request_message_format();
}
inline const std::string& Service::_internal_request_message_format() const {
  return request_message_format_.GetNoArena();
}
inline void Service::_internal_set_request_message_format(const std::string& value) {
  
  request_message_format_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), value);
}
inline void Service::set_request_message_format(std::string&& value) {
  
  request_message_format_.SetNoArena(
    &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:ubii.services.Service.request_message_format)
}
inline void Service::set_request_message_format(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  request_message_format_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.services.Service.request_message_format)
}
inline void Service::set_request_message_format(const char* value, size_t size) {
  
  request_message_format_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.services.Service.request_message_format)
}
inline std::string* Service::_internal_mutable_request_message_format() {
  
  return request_message_format_.MutableNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline std::string* Service::release_request_message_format() {
  // @@protoc_insertion_point(field_release:ubii.services.Service.request_message_format)
  
  return request_message_format_.ReleaseNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline void Service::set_allocated_request_message_format(std::string* request_message_format) {
  if (request_message_format != nullptr) {
    
  } else {
    
  }
  request_message_format_.SetAllocatedNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), request_message_format);
  // @@protoc_insertion_point(field_set_allocated:ubii.services.Service.request_message_format)
}

// string response_message_format = 3;
inline void Service::clear_response_message_format() {
  response_message_format_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline const std::string& Service::response_message_format() const {
  // @@protoc_insertion_point(field_get:ubii.services.Service.response_message_format)
  return _internal_response_message_format();
}
inline void Service::set_response_message_format(const std::string& value) {
  _internal_set_response_message_format(value);
  // @@protoc_insertion_point(field_set:ubii.services.Service.response_message_format)
}
inline std::string* Service::mutable_response_message_format() {
  // @@protoc_insertion_point(field_mutable:ubii.services.Service.response_message_format)
  return _internal_mutable_response_message_format();
}
inline const std::string& Service::_internal_response_message_format() const {
  return response_message_format_.GetNoArena();
}
inline void Service::_internal_set_response_message_format(const std::string& value) {
  
  response_message_format_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), value);
}
inline void Service::set_response_message_format(std::string&& value) {
  
  response_message_format_.SetNoArena(
    &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:ubii.services.Service.response_message_format)
}
inline void Service::set_response_message_format(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  response_message_format_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.services.Service.response_message_format)
}
inline void Service::set_response_message_format(const char* value, size_t size) {
  
  response_message_format_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.services.Service.response_message_format)
}
inline std::string* Service::_internal_mutable_response_message_format() {
  
  return response_message_format_.MutableNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline std::string* Service::release_response_message_format() {
  // @@protoc_insertion_point(field_release:ubii.services.Service.response_message_format)
  
  return response_message_format_.ReleaseNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline void Service::set_allocated_response_message_format(std::string* response_message_format) {
  if (response_message_format != nullptr) {
    
  } else {
    
  }
  response_message_format_.SetAllocatedNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), response_message_format);
  // @@protoc_insertion_point(field_set_allocated:ubii.services.Service.response_message_format)
}

// repeated string tags = 4;
inline int Service::_internal_tags_size() const {
  return tags_.size();
}
inline int Service::tags_size() const {
  return _internal_tags_size();
}
inline void Service::clear_tags() {
  tags_.Clear();
}
inline std::string* Service::add_tags() {
  // @@protoc_insertion_point(field_add_mutable:ubii.services.Service.tags)
  return _internal_add_tags();
}
inline const std::string& Service::_internal_tags(int index) const {
  return tags_.Get(index);
}
inline const std::string& Service::tags(int index) const {
  // @@protoc_insertion_point(field_get:ubii.services.Service.tags)
  return _internal_tags(index);
}
inline std::string* Service::mutable_tags(int index) {
  // @@protoc_insertion_point(field_mutable:ubii.services.Service.tags)
  return tags_.Mutable(index);
}
inline void Service::set_tags(int index, const std::string& value) {
  // @@protoc_insertion_point(field_set:ubii.services.Service.tags)
  tags_.Mutable(index)->assign(value);
}
inline void Service::set_tags(int index, std::string&& value) {
  // @@protoc_insertion_point(field_set:ubii.services.Service.tags)
  tags_.Mutable(index)->assign(std::move(value));
}
inline void Service::set_tags(int index, const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  tags_.Mutable(index)->assign(value);
  // @@protoc_insertion_point(field_set_char:ubii.services.Service.tags)
}
inline void Service::set_tags(int index, const char* value, size_t size) {
  tags_.Mutable(index)->assign(
    reinterpret_cast<const char*>(value), size);
  // @@protoc_insertion_point(field_set_pointer:ubii.services.Service.tags)
}
inline std::string* Service::_internal_add_tags() {
  return tags_.Add();
}
inline void Service::add_tags(const std::string& value) {
  tags_.Add()->assign(value);
  // @@protoc_insertion_point(field_add:ubii.services.Service.tags)
}
inline void Service::add_tags(std::string&& value) {
  tags_.Add(std::move(value));
  // @@protoc_insertion_point(field_add:ubii.services.Service.tags)
}
inline void Service::add_tags(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  tags_.Add()->assign(value);
  // @@protoc_insertion_point(field_add_char:ubii.services.Service.tags)
}
inline void Service::add_tags(const char* value, size_t size) {
  tags_.Add()->assign(reinterpret_cast<const char*>(value), size);
  // @@protoc_insertion_point(field_add_pointer:ubii.services.Service.tags)
}
inline const ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField<std::string>&
Service::tags() const {
  // @@protoc_insertion_point(field_list:ubii.services.Service.tags)
  return tags_;
}
inline ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField<std::string>*
Service::mutable_tags() {
  // @@protoc_insertion_point(field_mutable_list:ubii.services.Service.tags)
  return &tags_;
}

// string description = 5;
inline void Service::clear_description() {
  description_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline const std::string& Service::description() const {
  // @@protoc_insertion_point(field_get:ubii.services.Service.description)
  return _internal_description();
}
inline void Service::set_description(const std::string& value) {
  _internal_set_description(value);
  // @@protoc_insertion_point(field_set:ubii.services.Service.description)
}
inline std::string* Service::mutable_description() {
  // @@protoc_insertion_point(field_mutable:ubii.services.Service.description)
  return _internal_mutable_description();
}
inline const std::string& Service::_internal_description() const {
  return description_.GetNoArena();
}
inline void Service::_internal_set_description(const std::string& value) {
  
  description_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), value);
}
inline void Service::set_description(std::string&& value) {
  
  description_.SetNoArena(
    &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:ubii.services.Service.description)
}
inline void Service::set_description(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  description_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.services.Service.description)
}
inline void Service::set_description(const char* value, size_t size) {
  
  description_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.services.Service.description)
}
inline std::string* Service::_internal_mutable_description() {
  
  return description_.MutableNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline std::string* Service::release_description() {
  // @@protoc_insertion_point(field_release:ubii.services.Service.description)
  
  return description_.ReleaseNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline void Service::set_allocated_description(std::string* description) {
  if (description != nullptr) {
    
  } else {
    
  }
  description_.SetAllocatedNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), description);
  // @@protoc_insertion_point(field_set_allocated:ubii.services.Service.description)
}

// -------------------------------------------------------------------

// ServiceList

// repeated .ubii.services.Service elements = 1;
inline int ServiceList::_internal_elements_size() const {
  return elements_.size();
}
inline int ServiceList::elements_size() const {
  return _internal_elements_size();
}
inline void ServiceList::clear_elements() {
  elements_.Clear();
}
inline ::ubii::services::Service* ServiceList::mutable_elements(int index) {
  // @@protoc_insertion_point(field_mutable:ubii.services.ServiceList.elements)
  return elements_.Mutable(index);
}
inline ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField< ::ubii::services::Service >*
ServiceList::mutable_elements() {
  // @@protoc_insertion_point(field_mutable_list:ubii.services.ServiceList.elements)
  return &elements_;
}
inline const ::ubii::services::Service& ServiceList::_internal_elements(int index) const {
  return elements_.Get(index);
}
inline const ::ubii::services::Service& ServiceList::elements(int index) const {
  // @@protoc_insertion_point(field_get:ubii.services.ServiceList.elements)
  return _internal_elements(index);
}
inline ::ubii::services::Service* ServiceList::_internal_add_elements() {
  return elements_.Add();
}
inline ::ubii::services::Service* ServiceList::add_elements() {
  // @@protoc_insertion_point(field_add:ubii.services.ServiceList.elements)
  return _internal_add_elements();
}
inline const ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField< ::ubii::services::Service >&
ServiceList::elements() const {
  // @@protoc_insertion_point(field_list:ubii.services.ServiceList.elements)
  return elements_;
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__
// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)

}  // namespace services
}  // namespace ubii

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // GOOGLE_PROTOBUF_INCLUDED_GOOGLE_PROTOBUF_INCLUDED_proto_2fservices_2fservice_2eproto
