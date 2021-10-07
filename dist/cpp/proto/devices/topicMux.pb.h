// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/devices/topicMux.proto

#ifndef GOOGLE_PROTOBUF_INCLUDED_proto_2fdevices_2ftopicMux_2eproto
#define GOOGLE_PROTOBUF_INCLUDED_proto_2fdevices_2ftopicMux_2eproto

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
#define PROTOBUF_INTERNAL_EXPORT_proto_2fdevices_2ftopicMux_2eproto
PROTOBUF_NAMESPACE_OPEN
namespace internal {
class AnyMetadata;
}  // namespace internal
PROTOBUF_NAMESPACE_CLOSE

// Internal implementation detail -- do not use these members.
struct TableStruct_proto_2fdevices_2ftopicMux_2eproto {
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
extern const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_proto_2fdevices_2ftopicMux_2eproto;
namespace ubii {
namespace devices {
class TopicMux;
class TopicMuxDefaultTypeInternal;
extern TopicMuxDefaultTypeInternal _TopicMux_default_instance_;
class TopicMuxList;
class TopicMuxListDefaultTypeInternal;
extern TopicMuxListDefaultTypeInternal _TopicMuxList_default_instance_;
}  // namespace devices
}  // namespace ubii
PROTOBUF_NAMESPACE_OPEN
template<> ::ubii::devices::TopicMux* Arena::CreateMaybeMessage<::ubii::devices::TopicMux>(Arena*);
template<> ::ubii::devices::TopicMuxList* Arena::CreateMaybeMessage<::ubii::devices::TopicMuxList>(Arena*);
PROTOBUF_NAMESPACE_CLOSE
namespace ubii {
namespace devices {

// ===================================================================

class TopicMux :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:ubii.devices.TopicMux) */ {
 public:
  TopicMux();
  virtual ~TopicMux();

  TopicMux(const TopicMux& from);
  TopicMux(TopicMux&& from) noexcept
    : TopicMux() {
    *this = ::std::move(from);
  }

  inline TopicMux& operator=(const TopicMux& from) {
    CopyFrom(from);
    return *this;
  }
  inline TopicMux& operator=(TopicMux&& from) noexcept {
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
  static const TopicMux& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const TopicMux* internal_default_instance() {
    return reinterpret_cast<const TopicMux*>(
               &_TopicMux_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  friend void swap(TopicMux& a, TopicMux& b) {
    a.Swap(&b);
  }
  inline void Swap(TopicMux* other) {
    if (other == this) return;
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline TopicMux* New() const final {
    return CreateMaybeMessage<TopicMux>(nullptr);
  }

  TopicMux* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<TopicMux>(arena);
  }
  void CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void CopyFrom(const TopicMux& from);
  void MergeFrom(const TopicMux& from);
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
  void InternalSwap(TopicMux* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "ubii.devices.TopicMux";
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
    ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(&::descriptor_table_proto_2fdevices_2ftopicMux_2eproto);
    return ::descriptor_table_proto_2fdevices_2ftopicMux_2eproto.file_level_metadata[kIndexInFileMessages];
  }

  public:

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  enum : int {
    kIdFieldNumber = 1,
    kNameFieldNumber = 2,
    kDataTypeFieldNumber = 3,
    kTopicSelectorFieldNumber = 4,
    kIdentityMatchPatternFieldNumber = 5,
  };
  // string id = 1;
  void clear_id();
  const std::string& id() const;
  void set_id(const std::string& value);
  void set_id(std::string&& value);
  void set_id(const char* value);
  void set_id(const char* value, size_t size);
  std::string* mutable_id();
  std::string* release_id();
  void set_allocated_id(std::string* id);
  private:
  const std::string& _internal_id() const;
  void _internal_set_id(const std::string& value);
  std::string* _internal_mutable_id();
  public:

  // string name = 2;
  void clear_name();
  const std::string& name() const;
  void set_name(const std::string& value);
  void set_name(std::string&& value);
  void set_name(const char* value);
  void set_name(const char* value, size_t size);
  std::string* mutable_name();
  std::string* release_name();
  void set_allocated_name(std::string* name);
  private:
  const std::string& _internal_name() const;
  void _internal_set_name(const std::string& value);
  std::string* _internal_mutable_name();
  public:

  // string data_type = 3;
  void clear_data_type();
  const std::string& data_type() const;
  void set_data_type(const std::string& value);
  void set_data_type(std::string&& value);
  void set_data_type(const char* value);
  void set_data_type(const char* value, size_t size);
  std::string* mutable_data_type();
  std::string* release_data_type();
  void set_allocated_data_type(std::string* data_type);
  private:
  const std::string& _internal_data_type() const;
  void _internal_set_data_type(const std::string& value);
  std::string* _internal_mutable_data_type();
  public:

  // string topic_selector = 4;
  void clear_topic_selector();
  const std::string& topic_selector() const;
  void set_topic_selector(const std::string& value);
  void set_topic_selector(std::string&& value);
  void set_topic_selector(const char* value);
  void set_topic_selector(const char* value, size_t size);
  std::string* mutable_topic_selector();
  std::string* release_topic_selector();
  void set_allocated_topic_selector(std::string* topic_selector);
  private:
  const std::string& _internal_topic_selector() const;
  void _internal_set_topic_selector(const std::string& value);
  std::string* _internal_mutable_topic_selector();
  public:

  // string identity_match_pattern = 5;
  void clear_identity_match_pattern();
  const std::string& identity_match_pattern() const;
  void set_identity_match_pattern(const std::string& value);
  void set_identity_match_pattern(std::string&& value);
  void set_identity_match_pattern(const char* value);
  void set_identity_match_pattern(const char* value, size_t size);
  std::string* mutable_identity_match_pattern();
  std::string* release_identity_match_pattern();
  void set_allocated_identity_match_pattern(std::string* identity_match_pattern);
  private:
  const std::string& _internal_identity_match_pattern() const;
  void _internal_set_identity_match_pattern(const std::string& value);
  std::string* _internal_mutable_identity_match_pattern();
  public:

  // @@protoc_insertion_point(class_scope:ubii.devices.TopicMux)
 private:
  class _Internal;

  ::PROTOBUF_NAMESPACE_ID::internal::InternalMetadataWithArena _internal_metadata_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr id_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr name_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr data_type_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr topic_selector_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr identity_match_pattern_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_proto_2fdevices_2ftopicMux_2eproto;
};
// -------------------------------------------------------------------

class TopicMuxList :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:ubii.devices.TopicMuxList) */ {
 public:
  TopicMuxList();
  virtual ~TopicMuxList();

  TopicMuxList(const TopicMuxList& from);
  TopicMuxList(TopicMuxList&& from) noexcept
    : TopicMuxList() {
    *this = ::std::move(from);
  }

  inline TopicMuxList& operator=(const TopicMuxList& from) {
    CopyFrom(from);
    return *this;
  }
  inline TopicMuxList& operator=(TopicMuxList&& from) noexcept {
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
  static const TopicMuxList& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const TopicMuxList* internal_default_instance() {
    return reinterpret_cast<const TopicMuxList*>(
               &_TopicMuxList_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    1;

  friend void swap(TopicMuxList& a, TopicMuxList& b) {
    a.Swap(&b);
  }
  inline void Swap(TopicMuxList* other) {
    if (other == this) return;
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline TopicMuxList* New() const final {
    return CreateMaybeMessage<TopicMuxList>(nullptr);
  }

  TopicMuxList* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<TopicMuxList>(arena);
  }
  void CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void CopyFrom(const TopicMuxList& from);
  void MergeFrom(const TopicMuxList& from);
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
  void InternalSwap(TopicMuxList* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "ubii.devices.TopicMuxList";
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
    ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(&::descriptor_table_proto_2fdevices_2ftopicMux_2eproto);
    return ::descriptor_table_proto_2fdevices_2ftopicMux_2eproto.file_level_metadata[kIndexInFileMessages];
  }

  public:

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  enum : int {
    kElementsFieldNumber = 1,
  };
  // repeated .ubii.devices.TopicMux elements = 1;
  int elements_size() const;
  private:
  int _internal_elements_size() const;
  public:
  void clear_elements();
  ::ubii::devices::TopicMux* mutable_elements(int index);
  ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField< ::ubii::devices::TopicMux >*
      mutable_elements();
  private:
  const ::ubii::devices::TopicMux& _internal_elements(int index) const;
  ::ubii::devices::TopicMux* _internal_add_elements();
  public:
  const ::ubii::devices::TopicMux& elements(int index) const;
  ::ubii::devices::TopicMux* add_elements();
  const ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField< ::ubii::devices::TopicMux >&
      elements() const;

  // @@protoc_insertion_point(class_scope:ubii.devices.TopicMuxList)
 private:
  class _Internal;

  ::PROTOBUF_NAMESPACE_ID::internal::InternalMetadataWithArena _internal_metadata_;
  ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField< ::ubii::devices::TopicMux > elements_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_proto_2fdevices_2ftopicMux_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// TopicMux

// string id = 1;
inline void TopicMux::clear_id() {
  id_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline const std::string& TopicMux::id() const {
  // @@protoc_insertion_point(field_get:ubii.devices.TopicMux.id)
  return _internal_id();
}
inline void TopicMux::set_id(const std::string& value) {
  _internal_set_id(value);
  // @@protoc_insertion_point(field_set:ubii.devices.TopicMux.id)
}
inline std::string* TopicMux::mutable_id() {
  // @@protoc_insertion_point(field_mutable:ubii.devices.TopicMux.id)
  return _internal_mutable_id();
}
inline const std::string& TopicMux::_internal_id() const {
  return id_.GetNoArena();
}
inline void TopicMux::_internal_set_id(const std::string& value) {
  
  id_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), value);
}
inline void TopicMux::set_id(std::string&& value) {
  
  id_.SetNoArena(
    &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:ubii.devices.TopicMux.id)
}
inline void TopicMux::set_id(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  id_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.devices.TopicMux.id)
}
inline void TopicMux::set_id(const char* value, size_t size) {
  
  id_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.devices.TopicMux.id)
}
inline std::string* TopicMux::_internal_mutable_id() {
  
  return id_.MutableNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline std::string* TopicMux::release_id() {
  // @@protoc_insertion_point(field_release:ubii.devices.TopicMux.id)
  
  return id_.ReleaseNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline void TopicMux::set_allocated_id(std::string* id) {
  if (id != nullptr) {
    
  } else {
    
  }
  id_.SetAllocatedNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), id);
  // @@protoc_insertion_point(field_set_allocated:ubii.devices.TopicMux.id)
}

// string name = 2;
inline void TopicMux::clear_name() {
  name_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline const std::string& TopicMux::name() const {
  // @@protoc_insertion_point(field_get:ubii.devices.TopicMux.name)
  return _internal_name();
}
inline void TopicMux::set_name(const std::string& value) {
  _internal_set_name(value);
  // @@protoc_insertion_point(field_set:ubii.devices.TopicMux.name)
}
inline std::string* TopicMux::mutable_name() {
  // @@protoc_insertion_point(field_mutable:ubii.devices.TopicMux.name)
  return _internal_mutable_name();
}
inline const std::string& TopicMux::_internal_name() const {
  return name_.GetNoArena();
}
inline void TopicMux::_internal_set_name(const std::string& value) {
  
  name_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), value);
}
inline void TopicMux::set_name(std::string&& value) {
  
  name_.SetNoArena(
    &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:ubii.devices.TopicMux.name)
}
inline void TopicMux::set_name(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  name_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.devices.TopicMux.name)
}
inline void TopicMux::set_name(const char* value, size_t size) {
  
  name_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.devices.TopicMux.name)
}
inline std::string* TopicMux::_internal_mutable_name() {
  
  return name_.MutableNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline std::string* TopicMux::release_name() {
  // @@protoc_insertion_point(field_release:ubii.devices.TopicMux.name)
  
  return name_.ReleaseNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline void TopicMux::set_allocated_name(std::string* name) {
  if (name != nullptr) {
    
  } else {
    
  }
  name_.SetAllocatedNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), name);
  // @@protoc_insertion_point(field_set_allocated:ubii.devices.TopicMux.name)
}

// string data_type = 3;
inline void TopicMux::clear_data_type() {
  data_type_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline const std::string& TopicMux::data_type() const {
  // @@protoc_insertion_point(field_get:ubii.devices.TopicMux.data_type)
  return _internal_data_type();
}
inline void TopicMux::set_data_type(const std::string& value) {
  _internal_set_data_type(value);
  // @@protoc_insertion_point(field_set:ubii.devices.TopicMux.data_type)
}
inline std::string* TopicMux::mutable_data_type() {
  // @@protoc_insertion_point(field_mutable:ubii.devices.TopicMux.data_type)
  return _internal_mutable_data_type();
}
inline const std::string& TopicMux::_internal_data_type() const {
  return data_type_.GetNoArena();
}
inline void TopicMux::_internal_set_data_type(const std::string& value) {
  
  data_type_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), value);
}
inline void TopicMux::set_data_type(std::string&& value) {
  
  data_type_.SetNoArena(
    &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:ubii.devices.TopicMux.data_type)
}
inline void TopicMux::set_data_type(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  data_type_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.devices.TopicMux.data_type)
}
inline void TopicMux::set_data_type(const char* value, size_t size) {
  
  data_type_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.devices.TopicMux.data_type)
}
inline std::string* TopicMux::_internal_mutable_data_type() {
  
  return data_type_.MutableNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline std::string* TopicMux::release_data_type() {
  // @@protoc_insertion_point(field_release:ubii.devices.TopicMux.data_type)
  
  return data_type_.ReleaseNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline void TopicMux::set_allocated_data_type(std::string* data_type) {
  if (data_type != nullptr) {
    
  } else {
    
  }
  data_type_.SetAllocatedNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), data_type);
  // @@protoc_insertion_point(field_set_allocated:ubii.devices.TopicMux.data_type)
}

// string topic_selector = 4;
inline void TopicMux::clear_topic_selector() {
  topic_selector_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline const std::string& TopicMux::topic_selector() const {
  // @@protoc_insertion_point(field_get:ubii.devices.TopicMux.topic_selector)
  return _internal_topic_selector();
}
inline void TopicMux::set_topic_selector(const std::string& value) {
  _internal_set_topic_selector(value);
  // @@protoc_insertion_point(field_set:ubii.devices.TopicMux.topic_selector)
}
inline std::string* TopicMux::mutable_topic_selector() {
  // @@protoc_insertion_point(field_mutable:ubii.devices.TopicMux.topic_selector)
  return _internal_mutable_topic_selector();
}
inline const std::string& TopicMux::_internal_topic_selector() const {
  return topic_selector_.GetNoArena();
}
inline void TopicMux::_internal_set_topic_selector(const std::string& value) {
  
  topic_selector_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), value);
}
inline void TopicMux::set_topic_selector(std::string&& value) {
  
  topic_selector_.SetNoArena(
    &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:ubii.devices.TopicMux.topic_selector)
}
inline void TopicMux::set_topic_selector(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  topic_selector_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.devices.TopicMux.topic_selector)
}
inline void TopicMux::set_topic_selector(const char* value, size_t size) {
  
  topic_selector_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.devices.TopicMux.topic_selector)
}
inline std::string* TopicMux::_internal_mutable_topic_selector() {
  
  return topic_selector_.MutableNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline std::string* TopicMux::release_topic_selector() {
  // @@protoc_insertion_point(field_release:ubii.devices.TopicMux.topic_selector)
  
  return topic_selector_.ReleaseNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline void TopicMux::set_allocated_topic_selector(std::string* topic_selector) {
  if (topic_selector != nullptr) {
    
  } else {
    
  }
  topic_selector_.SetAllocatedNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), topic_selector);
  // @@protoc_insertion_point(field_set_allocated:ubii.devices.TopicMux.topic_selector)
}

// string identity_match_pattern = 5;
inline void TopicMux::clear_identity_match_pattern() {
  identity_match_pattern_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline const std::string& TopicMux::identity_match_pattern() const {
  // @@protoc_insertion_point(field_get:ubii.devices.TopicMux.identity_match_pattern)
  return _internal_identity_match_pattern();
}
inline void TopicMux::set_identity_match_pattern(const std::string& value) {
  _internal_set_identity_match_pattern(value);
  // @@protoc_insertion_point(field_set:ubii.devices.TopicMux.identity_match_pattern)
}
inline std::string* TopicMux::mutable_identity_match_pattern() {
  // @@protoc_insertion_point(field_mutable:ubii.devices.TopicMux.identity_match_pattern)
  return _internal_mutable_identity_match_pattern();
}
inline const std::string& TopicMux::_internal_identity_match_pattern() const {
  return identity_match_pattern_.GetNoArena();
}
inline void TopicMux::_internal_set_identity_match_pattern(const std::string& value) {
  
  identity_match_pattern_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), value);
}
inline void TopicMux::set_identity_match_pattern(std::string&& value) {
  
  identity_match_pattern_.SetNoArena(
    &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:ubii.devices.TopicMux.identity_match_pattern)
}
inline void TopicMux::set_identity_match_pattern(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  identity_match_pattern_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.devices.TopicMux.identity_match_pattern)
}
inline void TopicMux::set_identity_match_pattern(const char* value, size_t size) {
  
  identity_match_pattern_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.devices.TopicMux.identity_match_pattern)
}
inline std::string* TopicMux::_internal_mutable_identity_match_pattern() {
  
  return identity_match_pattern_.MutableNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline std::string* TopicMux::release_identity_match_pattern() {
  // @@protoc_insertion_point(field_release:ubii.devices.TopicMux.identity_match_pattern)
  
  return identity_match_pattern_.ReleaseNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline void TopicMux::set_allocated_identity_match_pattern(std::string* identity_match_pattern) {
  if (identity_match_pattern != nullptr) {
    
  } else {
    
  }
  identity_match_pattern_.SetAllocatedNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), identity_match_pattern);
  // @@protoc_insertion_point(field_set_allocated:ubii.devices.TopicMux.identity_match_pattern)
}

// -------------------------------------------------------------------

// TopicMuxList

// repeated .ubii.devices.TopicMux elements = 1;
inline int TopicMuxList::_internal_elements_size() const {
  return elements_.size();
}
inline int TopicMuxList::elements_size() const {
  return _internal_elements_size();
}
inline void TopicMuxList::clear_elements() {
  elements_.Clear();
}
inline ::ubii::devices::TopicMux* TopicMuxList::mutable_elements(int index) {
  // @@protoc_insertion_point(field_mutable:ubii.devices.TopicMuxList.elements)
  return elements_.Mutable(index);
}
inline ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField< ::ubii::devices::TopicMux >*
TopicMuxList::mutable_elements() {
  // @@protoc_insertion_point(field_mutable_list:ubii.devices.TopicMuxList.elements)
  return &elements_;
}
inline const ::ubii::devices::TopicMux& TopicMuxList::_internal_elements(int index) const {
  return elements_.Get(index);
}
inline const ::ubii::devices::TopicMux& TopicMuxList::elements(int index) const {
  // @@protoc_insertion_point(field_get:ubii.devices.TopicMuxList.elements)
  return _internal_elements(index);
}
inline ::ubii::devices::TopicMux* TopicMuxList::_internal_add_elements() {
  return elements_.Add();
}
inline ::ubii::devices::TopicMux* TopicMuxList::add_elements() {
  // @@protoc_insertion_point(field_add:ubii.devices.TopicMuxList.elements)
  return _internal_add_elements();
}
inline const ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField< ::ubii::devices::TopicMux >&
TopicMuxList::elements() const {
  // @@protoc_insertion_point(field_list:ubii.devices.TopicMuxList.elements)
  return elements_;
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__
// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)

}  // namespace devices
}  // namespace ubii

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // GOOGLE_PROTOBUF_INCLUDED_GOOGLE_PROTOBUF_INCLUDED_proto_2fdevices_2ftopicMux_2eproto
