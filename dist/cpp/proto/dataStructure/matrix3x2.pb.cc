// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/dataStructure/matrix3x2.proto

#include "proto/dataStructure/matrix3x2.pb.h"

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
namespace ubii {
namespace dataStructure {
class Matrix3x2DefaultTypeInternal {
 public:
  ::PROTOBUF_NAMESPACE_ID::internal::ExplicitlyConstructed<Matrix3x2> _instance;
} _Matrix3x2_default_instance_;
}  // namespace dataStructure
}  // namespace ubii
static void InitDefaultsscc_info_Matrix3x2_proto_2fdataStructure_2fmatrix3x2_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::ubii::dataStructure::_Matrix3x2_default_instance_;
    new (ptr) ::ubii::dataStructure::Matrix3x2();
    ::PROTOBUF_NAMESPACE_ID::internal::OnShutdownDestroyMessage(ptr);
  }
  ::ubii::dataStructure::Matrix3x2::InitAsDefaultInstance();
}

::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<0> scc_info_Matrix3x2_proto_2fdataStructure_2fmatrix3x2_2eproto =
    {{ATOMIC_VAR_INIT(::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase::kUninitialized), 0, 0, InitDefaultsscc_info_Matrix3x2_proto_2fdataStructure_2fmatrix3x2_2eproto}, {}};

static ::PROTOBUF_NAMESPACE_ID::Metadata file_level_metadata_proto_2fdataStructure_2fmatrix3x2_2eproto[1];
static constexpr ::PROTOBUF_NAMESPACE_ID::EnumDescriptor const** file_level_enum_descriptors_proto_2fdataStructure_2fmatrix3x2_2eproto = nullptr;
static constexpr ::PROTOBUF_NAMESPACE_ID::ServiceDescriptor const** file_level_service_descriptors_proto_2fdataStructure_2fmatrix3x2_2eproto = nullptr;

const ::PROTOBUF_NAMESPACE_ID::uint32 TableStruct_proto_2fdataStructure_2fmatrix3x2_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::ubii::dataStructure::Matrix3x2, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::ubii::dataStructure::Matrix3x2, m00_),
  PROTOBUF_FIELD_OFFSET(::ubii::dataStructure::Matrix3x2, m01_),
  PROTOBUF_FIELD_OFFSET(::ubii::dataStructure::Matrix3x2, m10_),
  PROTOBUF_FIELD_OFFSET(::ubii::dataStructure::Matrix3x2, m11_),
  PROTOBUF_FIELD_OFFSET(::ubii::dataStructure::Matrix3x2, m20_),
  PROTOBUF_FIELD_OFFSET(::ubii::dataStructure::Matrix3x2, m21_),
};
static const ::PROTOBUF_NAMESPACE_ID::internal::MigrationSchema schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::ubii::dataStructure::Matrix3x2)},
};

static ::PROTOBUF_NAMESPACE_ID::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::ubii::dataStructure::_Matrix3x2_default_instance_),
};

const char descriptor_table_protodef_proto_2fdataStructure_2fmatrix3x2_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) =
  "\n#proto/dataStructure/matrix3x2.proto\022\022u"
  "bii.dataStructure\"Y\n\tMatrix3x2\022\013\n\003m00\030\001 "
  "\001(\001\022\013\n\003m01\030\002 \001(\001\022\013\n\003m10\030\003 \001(\001\022\013\n\003m11\030\004 \001"
  "(\001\022\013\n\003m20\030\005 \001(\001\022\013\n\003m21\030\006 \001(\001b\006proto3"
  ;
static const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable*const descriptor_table_proto_2fdataStructure_2fmatrix3x2_2eproto_deps[1] = {
};
static ::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase*const descriptor_table_proto_2fdataStructure_2fmatrix3x2_2eproto_sccs[1] = {
  &scc_info_Matrix3x2_proto_2fdataStructure_2fmatrix3x2_2eproto.base,
};
static ::PROTOBUF_NAMESPACE_ID::internal::once_flag descriptor_table_proto_2fdataStructure_2fmatrix3x2_2eproto_once;
static bool descriptor_table_proto_2fdataStructure_2fmatrix3x2_2eproto_initialized = false;
const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_proto_2fdataStructure_2fmatrix3x2_2eproto = {
  &descriptor_table_proto_2fdataStructure_2fmatrix3x2_2eproto_initialized, descriptor_table_protodef_proto_2fdataStructure_2fmatrix3x2_2eproto, "proto/dataStructure/matrix3x2.proto", 156,
  &descriptor_table_proto_2fdataStructure_2fmatrix3x2_2eproto_once, descriptor_table_proto_2fdataStructure_2fmatrix3x2_2eproto_sccs, descriptor_table_proto_2fdataStructure_2fmatrix3x2_2eproto_deps, 1, 0,
  schemas, file_default_instances, TableStruct_proto_2fdataStructure_2fmatrix3x2_2eproto::offsets,
  file_level_metadata_proto_2fdataStructure_2fmatrix3x2_2eproto, 1, file_level_enum_descriptors_proto_2fdataStructure_2fmatrix3x2_2eproto, file_level_service_descriptors_proto_2fdataStructure_2fmatrix3x2_2eproto,
};

// Force running AddDescriptors() at dynamic initialization time.
static bool dynamic_init_dummy_proto_2fdataStructure_2fmatrix3x2_2eproto = (  ::PROTOBUF_NAMESPACE_ID::internal::AddDescriptors(&descriptor_table_proto_2fdataStructure_2fmatrix3x2_2eproto), true);
namespace ubii {
namespace dataStructure {

// ===================================================================

void Matrix3x2::InitAsDefaultInstance() {
}
class Matrix3x2::_Internal {
 public:
};

Matrix3x2::Matrix3x2()
  : ::PROTOBUF_NAMESPACE_ID::Message(), _internal_metadata_(nullptr) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:ubii.dataStructure.Matrix3x2)
}
Matrix3x2::Matrix3x2(const Matrix3x2& from)
  : ::PROTOBUF_NAMESPACE_ID::Message(),
      _internal_metadata_(nullptr) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::memcpy(&m00_, &from.m00_,
    static_cast<size_t>(reinterpret_cast<char*>(&m21_) -
    reinterpret_cast<char*>(&m00_)) + sizeof(m21_));
  // @@protoc_insertion_point(copy_constructor:ubii.dataStructure.Matrix3x2)
}

void Matrix3x2::SharedCtor() {
  ::memset(&m00_, 0, static_cast<size_t>(
      reinterpret_cast<char*>(&m21_) -
      reinterpret_cast<char*>(&m00_)) + sizeof(m21_));
}

Matrix3x2::~Matrix3x2() {
  // @@protoc_insertion_point(destructor:ubii.dataStructure.Matrix3x2)
  SharedDtor();
}

void Matrix3x2::SharedDtor() {
}

void Matrix3x2::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const Matrix3x2& Matrix3x2::default_instance() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&::scc_info_Matrix3x2_proto_2fdataStructure_2fmatrix3x2_2eproto.base);
  return *internal_default_instance();
}


void Matrix3x2::Clear() {
// @@protoc_insertion_point(message_clear_start:ubii.dataStructure.Matrix3x2)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  ::memset(&m00_, 0, static_cast<size_t>(
      reinterpret_cast<char*>(&m21_) -
      reinterpret_cast<char*>(&m00_)) + sizeof(m21_));
  _internal_metadata_.Clear();
}

const char* Matrix3x2::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    CHK_(ptr);
    switch (tag >> 3) {
      // double m00 = 1;
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 9)) {
          m00_ = ::PROTOBUF_NAMESPACE_ID::internal::UnalignedLoad<double>(ptr);
          ptr += sizeof(double);
        } else goto handle_unusual;
        continue;
      // double m01 = 2;
      case 2:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 17)) {
          m01_ = ::PROTOBUF_NAMESPACE_ID::internal::UnalignedLoad<double>(ptr);
          ptr += sizeof(double);
        } else goto handle_unusual;
        continue;
      // double m10 = 3;
      case 3:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 25)) {
          m10_ = ::PROTOBUF_NAMESPACE_ID::internal::UnalignedLoad<double>(ptr);
          ptr += sizeof(double);
        } else goto handle_unusual;
        continue;
      // double m11 = 4;
      case 4:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 33)) {
          m11_ = ::PROTOBUF_NAMESPACE_ID::internal::UnalignedLoad<double>(ptr);
          ptr += sizeof(double);
        } else goto handle_unusual;
        continue;
      // double m20 = 5;
      case 5:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 41)) {
          m20_ = ::PROTOBUF_NAMESPACE_ID::internal::UnalignedLoad<double>(ptr);
          ptr += sizeof(double);
        } else goto handle_unusual;
        continue;
      // double m21 = 6;
      case 6:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 49)) {
          m21_ = ::PROTOBUF_NAMESPACE_ID::internal::UnalignedLoad<double>(ptr);
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

::PROTOBUF_NAMESPACE_ID::uint8* Matrix3x2::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:ubii.dataStructure.Matrix3x2)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // double m00 = 1;
  if (!(this->m00() <= 0 && this->m00() >= 0)) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteDoubleToArray(1, this->_internal_m00(), target);
  }

  // double m01 = 2;
  if (!(this->m01() <= 0 && this->m01() >= 0)) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteDoubleToArray(2, this->_internal_m01(), target);
  }

  // double m10 = 3;
  if (!(this->m10() <= 0 && this->m10() >= 0)) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteDoubleToArray(3, this->_internal_m10(), target);
  }

  // double m11 = 4;
  if (!(this->m11() <= 0 && this->m11() >= 0)) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteDoubleToArray(4, this->_internal_m11(), target);
  }

  // double m20 = 5;
  if (!(this->m20() <= 0 && this->m20() >= 0)) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteDoubleToArray(5, this->_internal_m20(), target);
  }

  // double m21 = 6;
  if (!(this->m21() <= 0 && this->m21() >= 0)) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteDoubleToArray(6, this->_internal_m21(), target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields(), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:ubii.dataStructure.Matrix3x2)
  return target;
}

size_t Matrix3x2::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:ubii.dataStructure.Matrix3x2)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // double m00 = 1;
  if (!(this->m00() <= 0 && this->m00() >= 0)) {
    total_size += 1 + 8;
  }

  // double m01 = 2;
  if (!(this->m01() <= 0 && this->m01() >= 0)) {
    total_size += 1 + 8;
  }

  // double m10 = 3;
  if (!(this->m10() <= 0 && this->m10() >= 0)) {
    total_size += 1 + 8;
  }

  // double m11 = 4;
  if (!(this->m11() <= 0 && this->m11() >= 0)) {
    total_size += 1 + 8;
  }

  // double m20 = 5;
  if (!(this->m20() <= 0 && this->m20() >= 0)) {
    total_size += 1 + 8;
  }

  // double m21 = 6;
  if (!(this->m21() <= 0 && this->m21() >= 0)) {
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

void Matrix3x2::MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:ubii.dataStructure.Matrix3x2)
  GOOGLE_DCHECK_NE(&from, this);
  const Matrix3x2* source =
      ::PROTOBUF_NAMESPACE_ID::DynamicCastToGenerated<Matrix3x2>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:ubii.dataStructure.Matrix3x2)
    ::PROTOBUF_NAMESPACE_ID::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:ubii.dataStructure.Matrix3x2)
    MergeFrom(*source);
  }
}

void Matrix3x2::MergeFrom(const Matrix3x2& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:ubii.dataStructure.Matrix3x2)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (!(from.m00() <= 0 && from.m00() >= 0)) {
    _internal_set_m00(from._internal_m00());
  }
  if (!(from.m01() <= 0 && from.m01() >= 0)) {
    _internal_set_m01(from._internal_m01());
  }
  if (!(from.m10() <= 0 && from.m10() >= 0)) {
    _internal_set_m10(from._internal_m10());
  }
  if (!(from.m11() <= 0 && from.m11() >= 0)) {
    _internal_set_m11(from._internal_m11());
  }
  if (!(from.m20() <= 0 && from.m20() >= 0)) {
    _internal_set_m20(from._internal_m20());
  }
  if (!(from.m21() <= 0 && from.m21() >= 0)) {
    _internal_set_m21(from._internal_m21());
  }
}

void Matrix3x2::CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:ubii.dataStructure.Matrix3x2)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void Matrix3x2::CopyFrom(const Matrix3x2& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:ubii.dataStructure.Matrix3x2)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool Matrix3x2::IsInitialized() const {
  return true;
}

void Matrix3x2::InternalSwap(Matrix3x2* other) {
  using std::swap;
  _internal_metadata_.Swap(&other->_internal_metadata_);
  swap(m00_, other->m00_);
  swap(m01_, other->m01_);
  swap(m10_, other->m10_);
  swap(m11_, other->m11_);
  swap(m20_, other->m20_);
  swap(m21_, other->m21_);
}

::PROTOBUF_NAMESPACE_ID::Metadata Matrix3x2::GetMetadata() const {
  return GetMetadataStatic();
}


// @@protoc_insertion_point(namespace_scope)
}  // namespace dataStructure
}  // namespace ubii
PROTOBUF_NAMESPACE_OPEN
template<> PROTOBUF_NOINLINE ::ubii::dataStructure::Matrix3x2* Arena::CreateMaybeMessage< ::ubii::dataStructure::Matrix3x2 >(Arena* arena) {
  return Arena::CreateInternal< ::ubii::dataStructure::Matrix3x2 >(arena);
}
PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>
