// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/general/success.proto

#include "proto/general/success.pb.h"

#include <algorithm>

#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/extension_set.h>
#include <google/protobuf/wire_format_lite.h>
#include <google/protobuf/descriptor.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/reflection_ops.h>
#include <google/protobuf/wire_format.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
extern PROTOBUF_INTERNAL_EXPORT_proto_2fgeneral_2fsuccess_2eproto ::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<0> scc_info_Success_proto_2fgeneral_2fsuccess_2eproto;
namespace ubii {
namespace general {
class SuccessDefaultTypeInternal {
 public:
  ::PROTOBUF_NAMESPACE_ID::internal::ExplicitlyConstructed<Success> _instance;
} _Success_default_instance_;
class SuccessListDefaultTypeInternal {
 public:
  ::PROTOBUF_NAMESPACE_ID::internal::ExplicitlyConstructed<SuccessList> _instance;
} _SuccessList_default_instance_;
}  // namespace general
}  // namespace ubii
static void InitDefaultsscc_info_Success_proto_2fgeneral_2fsuccess_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::ubii::general::_Success_default_instance_;
    new (ptr) ::ubii::general::Success();
    ::PROTOBUF_NAMESPACE_ID::internal::OnShutdownDestroyMessage(ptr);
  }
  ::ubii::general::Success::InitAsDefaultInstance();
}

::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<0> scc_info_Success_proto_2fgeneral_2fsuccess_2eproto =
    {{ATOMIC_VAR_INIT(::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase::kUninitialized), 0, 0, InitDefaultsscc_info_Success_proto_2fgeneral_2fsuccess_2eproto}, {}};

static void InitDefaultsscc_info_SuccessList_proto_2fgeneral_2fsuccess_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::ubii::general::_SuccessList_default_instance_;
    new (ptr) ::ubii::general::SuccessList();
    ::PROTOBUF_NAMESPACE_ID::internal::OnShutdownDestroyMessage(ptr);
  }
  ::ubii::general::SuccessList::InitAsDefaultInstance();
}

::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<1> scc_info_SuccessList_proto_2fgeneral_2fsuccess_2eproto =
    {{ATOMIC_VAR_INIT(::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase::kUninitialized), 1, 0, InitDefaultsscc_info_SuccessList_proto_2fgeneral_2fsuccess_2eproto}, {
      &scc_info_Success_proto_2fgeneral_2fsuccess_2eproto.base,}};

static ::PROTOBUF_NAMESPACE_ID::Metadata file_level_metadata_proto_2fgeneral_2fsuccess_2eproto[2];
static constexpr ::PROTOBUF_NAMESPACE_ID::EnumDescriptor const** file_level_enum_descriptors_proto_2fgeneral_2fsuccess_2eproto = nullptr;
static constexpr ::PROTOBUF_NAMESPACE_ID::ServiceDescriptor const** file_level_service_descriptors_proto_2fgeneral_2fsuccess_2eproto = nullptr;

const ::PROTOBUF_NAMESPACE_ID::uint32 TableStruct_proto_2fgeneral_2fsuccess_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::ubii::general::Success, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::ubii::general::Success, title_),
  PROTOBUF_FIELD_OFFSET(::ubii::general::Success, message_),
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::ubii::general::SuccessList, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::ubii::general::SuccessList, elements_),
};
static const ::PROTOBUF_NAMESPACE_ID::internal::MigrationSchema schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::ubii::general::Success)},
  { 7, -1, sizeof(::ubii::general::SuccessList)},
};

static ::PROTOBUF_NAMESPACE_ID::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::ubii::general::_Success_default_instance_),
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::ubii::general::_SuccessList_default_instance_),
};

const char descriptor_table_protodef_proto_2fgeneral_2fsuccess_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) =
  "\n\033proto/general/success.proto\022\014ubii.gene"
  "ral\")\n\007Success\022\r\n\005title\030\001 \001(\t\022\017\n\007message"
  "\030\002 \001(\t\"6\n\013SuccessList\022\'\n\010elements\030\001 \003(\0132"
  "\025.ubii.general.Successb\006proto3"
  ;
static const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable*const descriptor_table_proto_2fgeneral_2fsuccess_2eproto_deps[1] = {
};
static ::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase*const descriptor_table_proto_2fgeneral_2fsuccess_2eproto_sccs[2] = {
  &scc_info_Success_proto_2fgeneral_2fsuccess_2eproto.base,
  &scc_info_SuccessList_proto_2fgeneral_2fsuccess_2eproto.base,
};
static ::PROTOBUF_NAMESPACE_ID::internal::once_flag descriptor_table_proto_2fgeneral_2fsuccess_2eproto_once;
static bool descriptor_table_proto_2fgeneral_2fsuccess_2eproto_initialized = false;
const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_proto_2fgeneral_2fsuccess_2eproto = {
  &descriptor_table_proto_2fgeneral_2fsuccess_2eproto_initialized, descriptor_table_protodef_proto_2fgeneral_2fsuccess_2eproto, "proto/general/success.proto", 150,
  &descriptor_table_proto_2fgeneral_2fsuccess_2eproto_once, descriptor_table_proto_2fgeneral_2fsuccess_2eproto_sccs, descriptor_table_proto_2fgeneral_2fsuccess_2eproto_deps, 2, 0,
  schemas, file_default_instances, TableStruct_proto_2fgeneral_2fsuccess_2eproto::offsets,
  file_level_metadata_proto_2fgeneral_2fsuccess_2eproto, 2, file_level_enum_descriptors_proto_2fgeneral_2fsuccess_2eproto, file_level_service_descriptors_proto_2fgeneral_2fsuccess_2eproto,
};

// Force running AddDescriptors() at dynamic initialization time.
static bool dynamic_init_dummy_proto_2fgeneral_2fsuccess_2eproto = (  ::PROTOBUF_NAMESPACE_ID::internal::AddDescriptors(&descriptor_table_proto_2fgeneral_2fsuccess_2eproto), true);
namespace ubii {
namespace general {

// ===================================================================

void Success::InitAsDefaultInstance() {
}
class Success::_Internal {
 public:
};

Success::Success()
  : ::PROTOBUF_NAMESPACE_ID::Message(), _internal_metadata_(nullptr) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:ubii.general.Success)
}
Success::Success(const Success& from)
  : ::PROTOBUF_NAMESPACE_ID::Message(),
      _internal_metadata_(nullptr) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  title_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_title().empty()) {
    title_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.title_);
  }
  message_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_message().empty()) {
    message_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.message_);
  }
  // @@protoc_insertion_point(copy_constructor:ubii.general.Success)
}

void Success::SharedCtor() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&scc_info_Success_proto_2fgeneral_2fsuccess_2eproto.base);
  title_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  message_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}

Success::~Success() {
  // @@protoc_insertion_point(destructor:ubii.general.Success)
  SharedDtor();
}

void Success::SharedDtor() {
  title_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  message_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}

void Success::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const Success& Success::default_instance() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&::scc_info_Success_proto_2fgeneral_2fsuccess_2eproto.base);
  return *internal_default_instance();
}


void Success::Clear() {
// @@protoc_insertion_point(message_clear_start:ubii.general.Success)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  title_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  message_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  _internal_metadata_.Clear();
}

const char* Success::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    CHK_(ptr);
    switch (tag >> 3) {
      // string title = 1;
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 10)) {
          auto str = _internal_mutable_title();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "ubii.general.Success.title"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // string message = 2;
      case 2:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 18)) {
          auto str = _internal_mutable_message();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "ubii.general.Success.message"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      default: {
      handle_unusual:
        if ((tag & 7) == 4 || tag == 0) {
          ctx->SetLastTag(tag);
          goto success;
        }
        ptr = UnknownFieldParse(tag, &_internal_metadata_, ptr, ctx);
        CHK_(ptr != nullptr);
        continue;
      }
    }  // switch
  }  // while
success:
  return ptr;
failure:
  ptr = nullptr;
  goto success;
#undef CHK_
}

::PROTOBUF_NAMESPACE_ID::uint8* Success::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:ubii.general.Success)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // string title = 1;
  if (this->title().size() > 0) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_title().data(), static_cast<int>(this->_internal_title().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "ubii.general.Success.title");
    target = stream->WriteStringMaybeAliased(
        1, this->_internal_title(), target);
  }

  // string message = 2;
  if (this->message().size() > 0) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_message().data(), static_cast<int>(this->_internal_message().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "ubii.general.Success.message");
    target = stream->WriteStringMaybeAliased(
        2, this->_internal_message(), target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields(), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:ubii.general.Success)
  return target;
}

size_t Success::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:ubii.general.Success)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // string title = 1;
  if (this->title().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_title());
  }

  // string message = 2;
  if (this->message().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_message());
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void Success::MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:ubii.general.Success)
  GOOGLE_DCHECK_NE(&from, this);
  const Success* source =
      ::PROTOBUF_NAMESPACE_ID::DynamicCastToGenerated<Success>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:ubii.general.Success)
    ::PROTOBUF_NAMESPACE_ID::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:ubii.general.Success)
    MergeFrom(*source);
  }
}

void Success::MergeFrom(const Success& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:ubii.general.Success)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (from.title().size() > 0) {

    title_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.title_);
  }
  if (from.message().size() > 0) {

    message_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.message_);
  }
}

void Success::CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:ubii.general.Success)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void Success::CopyFrom(const Success& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:ubii.general.Success)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool Success::IsInitialized() const {
  return true;
}

void Success::InternalSwap(Success* other) {
  using std::swap;
  _internal_metadata_.Swap(&other->_internal_metadata_);
  title_.Swap(&other->title_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
    GetArenaNoVirtual());
  message_.Swap(&other->message_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
    GetArenaNoVirtual());
}

::PROTOBUF_NAMESPACE_ID::Metadata Success::GetMetadata() const {
  return GetMetadataStatic();
}


// ===================================================================

void SuccessList::InitAsDefaultInstance() {
}
class SuccessList::_Internal {
 public:
};

SuccessList::SuccessList()
  : ::PROTOBUF_NAMESPACE_ID::Message(), _internal_metadata_(nullptr) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:ubii.general.SuccessList)
}
SuccessList::SuccessList(const SuccessList& from)
  : ::PROTOBUF_NAMESPACE_ID::Message(),
      _internal_metadata_(nullptr),
      elements_(from.elements_) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  // @@protoc_insertion_point(copy_constructor:ubii.general.SuccessList)
}

void SuccessList::SharedCtor() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&scc_info_SuccessList_proto_2fgeneral_2fsuccess_2eproto.base);
}

SuccessList::~SuccessList() {
  // @@protoc_insertion_point(destructor:ubii.general.SuccessList)
  SharedDtor();
}

void SuccessList::SharedDtor() {
}

void SuccessList::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const SuccessList& SuccessList::default_instance() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&::scc_info_SuccessList_proto_2fgeneral_2fsuccess_2eproto.base);
  return *internal_default_instance();
}


void SuccessList::Clear() {
// @@protoc_insertion_point(message_clear_start:ubii.general.SuccessList)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  elements_.Clear();
  _internal_metadata_.Clear();
}

const char* SuccessList::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    CHK_(ptr);
    switch (tag >> 3) {
      // repeated .ubii.general.Success elements = 1;
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 10)) {
          ptr -= 1;
          do {
            ptr += 1;
            ptr = ctx->ParseMessage(_internal_add_elements(), ptr);
            CHK_(ptr);
            if (!ctx->DataAvailable(ptr)) break;
          } while (::PROTOBUF_NAMESPACE_ID::internal::ExpectTag<10>(ptr));
        } else goto handle_unusual;
        continue;
      default: {
      handle_unusual:
        if ((tag & 7) == 4 || tag == 0) {
          ctx->SetLastTag(tag);
          goto success;
        }
        ptr = UnknownFieldParse(tag, &_internal_metadata_, ptr, ctx);
        CHK_(ptr != nullptr);
        continue;
      }
    }  // switch
  }  // while
success:
  return ptr;
failure:
  ptr = nullptr;
  goto success;
#undef CHK_
}

::PROTOBUF_NAMESPACE_ID::uint8* SuccessList::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:ubii.general.SuccessList)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // repeated .ubii.general.Success elements = 1;
  for (unsigned int i = 0,
      n = static_cast<unsigned int>(this->_internal_elements_size()); i < n; i++) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::
      InternalWriteMessage(1, this->_internal_elements(i), target, stream);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields(), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:ubii.general.SuccessList)
  return target;
}

size_t SuccessList::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:ubii.general.SuccessList)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // repeated .ubii.general.Success elements = 1;
  total_size += 1UL * this->_internal_elements_size();
  for (const auto& msg : this->elements_) {
    total_size +=
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::MessageSize(msg);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void SuccessList::MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:ubii.general.SuccessList)
  GOOGLE_DCHECK_NE(&from, this);
  const SuccessList* source =
      ::PROTOBUF_NAMESPACE_ID::DynamicCastToGenerated<SuccessList>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:ubii.general.SuccessList)
    ::PROTOBUF_NAMESPACE_ID::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:ubii.general.SuccessList)
    MergeFrom(*source);
  }
}

void SuccessList::MergeFrom(const SuccessList& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:ubii.general.SuccessList)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  elements_.MergeFrom(from.elements_);
}

void SuccessList::CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:ubii.general.SuccessList)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void SuccessList::CopyFrom(const SuccessList& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:ubii.general.SuccessList)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool SuccessList::IsInitialized() const {
  return true;
}

void SuccessList::InternalSwap(SuccessList* other) {
  using std::swap;
  _internal_metadata_.Swap(&other->_internal_metadata_);
  elements_.InternalSwap(&other->elements_);
}

::PROTOBUF_NAMESPACE_ID::Metadata SuccessList::GetMetadata() const {
  return GetMetadataStatic();
}


// @@protoc_insertion_point(namespace_scope)
}  // namespace general
}  // namespace ubii
PROTOBUF_NAMESPACE_OPEN
template<> PROTOBUF_NOINLINE ::ubii::general::Success* Arena::CreateMaybeMessage< ::ubii::general::Success >(Arena* arena) {
  return Arena::CreateInternal< ::ubii::general::Success >(arena);
}
template<> PROTOBUF_NOINLINE ::ubii::general::SuccessList* Arena::CreateMaybeMessage< ::ubii::general::SuccessList >(Arena* arena) {
  return Arena::CreateInternal< ::ubii::general::SuccessList >(arena);
}
PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>
