// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/dataStructure/vector3.proto

#include "proto/dataStructure/vector3.pb.h"

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
extern PROTOBUF_INTERNAL_EXPORT_proto_2fdataStructure_2fvector3_2eproto ::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<0> scc_info_Vector3_proto_2fdataStructure_2fvector3_2eproto;
namespace ubii {
namespace dataStructure {
class Vector3DefaultTypeInternal {
 public:
  ::PROTOBUF_NAMESPACE_ID::internal::ExplicitlyConstructed<Vector3> _instance;
} _Vector3_default_instance_;
class Vector3ListDefaultTypeInternal {
 public:
  ::PROTOBUF_NAMESPACE_ID::internal::ExplicitlyConstructed<Vector3List> _instance;
} _Vector3List_default_instance_;
}  // namespace dataStructure
}  // namespace ubii
static void InitDefaultsscc_info_Vector3_proto_2fdataStructure_2fvector3_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::ubii::dataStructure::_Vector3_default_instance_;
    new (ptr) ::ubii::dataStructure::Vector3();
    ::PROTOBUF_NAMESPACE_ID::internal::OnShutdownDestroyMessage(ptr);
  }
  ::ubii::dataStructure::Vector3::InitAsDefaultInstance();
}

::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<0> scc_info_Vector3_proto_2fdataStructure_2fvector3_2eproto =
    {{ATOMIC_VAR_INIT(::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase::kUninitialized), 0, 0, InitDefaultsscc_info_Vector3_proto_2fdataStructure_2fvector3_2eproto}, {}};

static void InitDefaultsscc_info_Vector3List_proto_2fdataStructure_2fvector3_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::ubii::dataStructure::_Vector3List_default_instance_;
    new (ptr) ::ubii::dataStructure::Vector3List();
    ::PROTOBUF_NAMESPACE_ID::internal::OnShutdownDestroyMessage(ptr);
  }
  ::ubii::dataStructure::Vector3List::InitAsDefaultInstance();
}

::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<1> scc_info_Vector3List_proto_2fdataStructure_2fvector3_2eproto =
    {{ATOMIC_VAR_INIT(::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase::kUninitialized), 1, 0, InitDefaultsscc_info_Vector3List_proto_2fdataStructure_2fvector3_2eproto}, {
      &scc_info_Vector3_proto_2fdataStructure_2fvector3_2eproto.base,}};

static ::PROTOBUF_NAMESPACE_ID::Metadata file_level_metadata_proto_2fdataStructure_2fvector3_2eproto[2];
static constexpr ::PROTOBUF_NAMESPACE_ID::EnumDescriptor const** file_level_enum_descriptors_proto_2fdataStructure_2fvector3_2eproto = nullptr;
static constexpr ::PROTOBUF_NAMESPACE_ID::ServiceDescriptor const** file_level_service_descriptors_proto_2fdataStructure_2fvector3_2eproto = nullptr;

const ::PROTOBUF_NAMESPACE_ID::uint32 TableStruct_proto_2fdataStructure_2fvector3_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::ubii::dataStructure::Vector3, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::ubii::dataStructure::Vector3, x_),
  PROTOBUF_FIELD_OFFSET(::ubii::dataStructure::Vector3, y_),
  PROTOBUF_FIELD_OFFSET(::ubii::dataStructure::Vector3, z_),
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::ubii::dataStructure::Vector3List, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::ubii::dataStructure::Vector3List, elements_),
};
static const ::PROTOBUF_NAMESPACE_ID::internal::MigrationSchema schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::ubii::dataStructure::Vector3)},
  { 8, -1, sizeof(::ubii::dataStructure::Vector3List)},
};

static ::PROTOBUF_NAMESPACE_ID::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::ubii::dataStructure::_Vector3_default_instance_),
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::ubii::dataStructure::_Vector3List_default_instance_),
};

const char descriptor_table_protodef_proto_2fdataStructure_2fvector3_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) =
  "\n!proto/dataStructure/vector3.proto\022\022ubi"
  "i.dataStructure\"*\n\007Vector3\022\t\n\001x\030\001 \001(\001\022\t\n"
  "\001y\030\002 \001(\001\022\t\n\001z\030\003 \001(\001\"<\n\013Vector3List\022-\n\010el"
  "ements\030\001 \003(\0132\033.ubii.dataStructure.Vector"
  "3b\006proto3"
  ;
static const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable*const descriptor_table_proto_2fdataStructure_2fvector3_2eproto_deps[1] = {
};
static ::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase*const descriptor_table_proto_2fdataStructure_2fvector3_2eproto_sccs[2] = {
  &scc_info_Vector3_proto_2fdataStructure_2fvector3_2eproto.base,
  &scc_info_Vector3List_proto_2fdataStructure_2fvector3_2eproto.base,
};
static ::PROTOBUF_NAMESPACE_ID::internal::once_flag descriptor_table_proto_2fdataStructure_2fvector3_2eproto_once;
static bool descriptor_table_proto_2fdataStructure_2fvector3_2eproto_initialized = false;
const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_proto_2fdataStructure_2fvector3_2eproto = {
  &descriptor_table_proto_2fdataStructure_2fvector3_2eproto_initialized, descriptor_table_protodef_proto_2fdataStructure_2fvector3_2eproto, "proto/dataStructure/vector3.proto", 169,
  &descriptor_table_proto_2fdataStructure_2fvector3_2eproto_once, descriptor_table_proto_2fdataStructure_2fvector3_2eproto_sccs, descriptor_table_proto_2fdataStructure_2fvector3_2eproto_deps, 2, 0,
  schemas, file_default_instances, TableStruct_proto_2fdataStructure_2fvector3_2eproto::offsets,
  file_level_metadata_proto_2fdataStructure_2fvector3_2eproto, 2, file_level_enum_descriptors_proto_2fdataStructure_2fvector3_2eproto, file_level_service_descriptors_proto_2fdataStructure_2fvector3_2eproto,
};

// Force running AddDescriptors() at dynamic initialization time.
static bool dynamic_init_dummy_proto_2fdataStructure_2fvector3_2eproto = (  ::PROTOBUF_NAMESPACE_ID::internal::AddDescriptors(&descriptor_table_proto_2fdataStructure_2fvector3_2eproto), true);
namespace ubii {
namespace dataStructure {

// ===================================================================

void Vector3::InitAsDefaultInstance() {
}
class Vector3::_Internal {
 public:
};

Vector3::Vector3()
  : ::PROTOBUF_NAMESPACE_ID::Message(), _internal_metadata_(nullptr) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:ubii.dataStructure.Vector3)
}
Vector3::Vector3(const Vector3& from)
  : ::PROTOBUF_NAMESPACE_ID::Message(),
      _internal_metadata_(nullptr) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::memcpy(&x_, &from.x_,
    static_cast<size_t>(reinterpret_cast<char*>(&z_) -
    reinterpret_cast<char*>(&x_)) + sizeof(z_));
  // @@protoc_insertion_point(copy_constructor:ubii.dataStructure.Vector3)
}

void Vector3::SharedCtor() {
  ::memset(&x_, 0, static_cast<size_t>(
      reinterpret_cast<char*>(&z_) -
      reinterpret_cast<char*>(&x_)) + sizeof(z_));
}

Vector3::~Vector3() {
  // @@protoc_insertion_point(destructor:ubii.dataStructure.Vector3)
  SharedDtor();
}

void Vector3::SharedDtor() {
}

void Vector3::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const Vector3& Vector3::default_instance() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&::scc_info_Vector3_proto_2fdataStructure_2fvector3_2eproto.base);
  return *internal_default_instance();
}


void Vector3::Clear() {
// @@protoc_insertion_point(message_clear_start:ubii.dataStructure.Vector3)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  ::memset(&x_, 0, static_cast<size_t>(
      reinterpret_cast<char*>(&z_) -
      reinterpret_cast<char*>(&x_)) + sizeof(z_));
  _internal_metadata_.Clear();
}

const char* Vector3::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    CHK_(ptr);
    switch (tag >> 3) {
      // double x = 1;
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 9)) {
          x_ = ::PROTOBUF_NAMESPACE_ID::internal::UnalignedLoad<double>(ptr);
          ptr += sizeof(double);
        } else goto handle_unusual;
        continue;
      // double y = 2;
      case 2:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 17)) {
          y_ = ::PROTOBUF_NAMESPACE_ID::internal::UnalignedLoad<double>(ptr);
          ptr += sizeof(double);
        } else goto handle_unusual;
        continue;
      // double z = 3;
      case 3:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 25)) {
          z_ = ::PROTOBUF_NAMESPACE_ID::internal::UnalignedLoad<double>(ptr);
          ptr += sizeof(double);
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

::PROTOBUF_NAMESPACE_ID::uint8* Vector3::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:ubii.dataStructure.Vector3)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // double x = 1;
  if (!(this->x() <= 0 && this->x() >= 0)) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteDoubleToArray(1, this->_internal_x(), target);
  }

  // double y = 2;
  if (!(this->y() <= 0 && this->y() >= 0)) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteDoubleToArray(2, this->_internal_y(), target);
  }

  // double z = 3;
  if (!(this->z() <= 0 && this->z() >= 0)) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteDoubleToArray(3, this->_internal_z(), target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields(), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:ubii.dataStructure.Vector3)
  return target;
}

size_t Vector3::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:ubii.dataStructure.Vector3)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // double x = 1;
  if (!(this->x() <= 0 && this->x() >= 0)) {
    total_size += 1 + 8;
  }

  // double y = 2;
  if (!(this->y() <= 0 && this->y() >= 0)) {
    total_size += 1 + 8;
  }

  // double z = 3;
  if (!(this->z() <= 0 && this->z() >= 0)) {
    total_size += 1 + 8;
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void Vector3::MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:ubii.dataStructure.Vector3)
  GOOGLE_DCHECK_NE(&from, this);
  const Vector3* source =
      ::PROTOBUF_NAMESPACE_ID::DynamicCastToGenerated<Vector3>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:ubii.dataStructure.Vector3)
    ::PROTOBUF_NAMESPACE_ID::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:ubii.dataStructure.Vector3)
    MergeFrom(*source);
  }
}

void Vector3::MergeFrom(const Vector3& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:ubii.dataStructure.Vector3)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (!(from.x() <= 0 && from.x() >= 0)) {
    _internal_set_x(from._internal_x());
  }
  if (!(from.y() <= 0 && from.y() >= 0)) {
    _internal_set_y(from._internal_y());
  }
  if (!(from.z() <= 0 && from.z() >= 0)) {
    _internal_set_z(from._internal_z());
  }
}

void Vector3::CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:ubii.dataStructure.Vector3)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void Vector3::CopyFrom(const Vector3& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:ubii.dataStructure.Vector3)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool Vector3::IsInitialized() const {
  return true;
}

void Vector3::InternalSwap(Vector3* other) {
  using std::swap;
  _internal_metadata_.Swap(&other->_internal_metadata_);
  swap(x_, other->x_);
  swap(y_, other->y_);
  swap(z_, other->z_);
}

::PROTOBUF_NAMESPACE_ID::Metadata Vector3::GetMetadata() const {
  return GetMetadataStatic();
}


// ===================================================================

void Vector3List::InitAsDefaultInstance() {
}
class Vector3List::_Internal {
 public:
};

Vector3List::Vector3List()
  : ::PROTOBUF_NAMESPACE_ID::Message(), _internal_metadata_(nullptr) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:ubii.dataStructure.Vector3List)
}
Vector3List::Vector3List(const Vector3List& from)
  : ::PROTOBUF_NAMESPACE_ID::Message(),
      _internal_metadata_(nullptr),
      elements_(from.elements_) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  // @@protoc_insertion_point(copy_constructor:ubii.dataStructure.Vector3List)
}

void Vector3List::SharedCtor() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&scc_info_Vector3List_proto_2fdataStructure_2fvector3_2eproto.base);
}

Vector3List::~Vector3List() {
  // @@protoc_insertion_point(destructor:ubii.dataStructure.Vector3List)
  SharedDtor();
}

void Vector3List::SharedDtor() {
}

void Vector3List::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const Vector3List& Vector3List::default_instance() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&::scc_info_Vector3List_proto_2fdataStructure_2fvector3_2eproto.base);
  return *internal_default_instance();
}


void Vector3List::Clear() {
// @@protoc_insertion_point(message_clear_start:ubii.dataStructure.Vector3List)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  elements_.Clear();
  _internal_metadata_.Clear();
}

const char* Vector3List::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    CHK_(ptr);
    switch (tag >> 3) {
      // repeated .ubii.dataStructure.Vector3 elements = 1;
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

::PROTOBUF_NAMESPACE_ID::uint8* Vector3List::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:ubii.dataStructure.Vector3List)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // repeated .ubii.dataStructure.Vector3 elements = 1;
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
  // @@protoc_insertion_point(serialize_to_array_end:ubii.dataStructure.Vector3List)
  return target;
}

size_t Vector3List::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:ubii.dataStructure.Vector3List)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // repeated .ubii.dataStructure.Vector3 elements = 1;
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

void Vector3List::MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:ubii.dataStructure.Vector3List)
  GOOGLE_DCHECK_NE(&from, this);
  const Vector3List* source =
      ::PROTOBUF_NAMESPACE_ID::DynamicCastToGenerated<Vector3List>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:ubii.dataStructure.Vector3List)
    ::PROTOBUF_NAMESPACE_ID::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:ubii.dataStructure.Vector3List)
    MergeFrom(*source);
  }
}

void Vector3List::MergeFrom(const Vector3List& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:ubii.dataStructure.Vector3List)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  elements_.MergeFrom(from.elements_);
}

void Vector3List::CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:ubii.dataStructure.Vector3List)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void Vector3List::CopyFrom(const Vector3List& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:ubii.dataStructure.Vector3List)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool Vector3List::IsInitialized() const {
  return true;
}

void Vector3List::InternalSwap(Vector3List* other) {
  using std::swap;
  _internal_metadata_.Swap(&other->_internal_metadata_);
  elements_.InternalSwap(&other->elements_);
}

::PROTOBUF_NAMESPACE_ID::Metadata Vector3List::GetMetadata() const {
  return GetMetadataStatic();
}


// @@protoc_insertion_point(namespace_scope)
}  // namespace dataStructure
}  // namespace ubii
PROTOBUF_NAMESPACE_OPEN
template<> PROTOBUF_NOINLINE ::ubii::dataStructure::Vector3* Arena::CreateMaybeMessage< ::ubii::dataStructure::Vector3 >(Arena* arena) {
  return Arena::CreateInternal< ::ubii::dataStructure::Vector3 >(arena);
}
template<> PROTOBUF_NOINLINE ::ubii::dataStructure::Vector3List* Arena::CreateMaybeMessage< ::ubii::dataStructure::Vector3List >(Arena* arena) {
  return Arena::CreateInternal< ::ubii::dataStructure::Vector3List >(arena);
}
PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>
