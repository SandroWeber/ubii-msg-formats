// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/dataStructure/pose3d.proto

#ifndef GOOGLE_PROTOBUF_INCLUDED_proto_2fdataStructure_2fpose3d_2eproto
#define GOOGLE_PROTOBUF_INCLUDED_proto_2fdataStructure_2fpose3d_2eproto

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
#include "proto/dataStructure/vector3.pb.h"
#include "proto/dataStructure/quaternion.pb.h"
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_proto_2fdataStructure_2fpose3d_2eproto
PROTOBUF_NAMESPACE_OPEN
namespace internal {
class AnyMetadata;
}  // namespace internal
PROTOBUF_NAMESPACE_CLOSE

// Internal implementation detail -- do not use these members.
struct TableStruct_proto_2fdataStructure_2fpose3d_2eproto {
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
extern const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_proto_2fdataStructure_2fpose3d_2eproto;
namespace ubii {
namespace dataStructure {
class Pose3D;
class Pose3DDefaultTypeInternal;
extern Pose3DDefaultTypeInternal _Pose3D_default_instance_;
}  // namespace dataStructure
}  // namespace ubii
PROTOBUF_NAMESPACE_OPEN
template<> ::ubii::dataStructure::Pose3D* Arena::CreateMaybeMessage<::ubii::dataStructure::Pose3D>(Arena*);
PROTOBUF_NAMESPACE_CLOSE
namespace ubii {
namespace dataStructure {

// ===================================================================

class Pose3D :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:ubii.dataStructure.Pose3D) */ {
 public:
  Pose3D();
  virtual ~Pose3D();

  Pose3D(const Pose3D& from);
  Pose3D(Pose3D&& from) noexcept
    : Pose3D() {
    *this = ::std::move(from);
  }

  inline Pose3D& operator=(const Pose3D& from) {
    CopyFrom(from);
    return *this;
  }
  inline Pose3D& operator=(Pose3D&& from) noexcept {
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
  static const Pose3D& default_instance();

  enum OrientationCase {
    kQuaternion = 2,
    kEuler = 3,
    ORIENTATION_NOT_SET = 0,
  };

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const Pose3D* internal_default_instance() {
    return reinterpret_cast<const Pose3D*>(
               &_Pose3D_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  friend void swap(Pose3D& a, Pose3D& b) {
    a.Swap(&b);
  }
  inline void Swap(Pose3D* other) {
    if (other == this) return;
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline Pose3D* New() const final {
    return CreateMaybeMessage<Pose3D>(nullptr);
  }

  Pose3D* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<Pose3D>(arena);
  }
  void CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void CopyFrom(const Pose3D& from);
  void MergeFrom(const Pose3D& from);
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
  void InternalSwap(Pose3D* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "ubii.dataStructure.Pose3D";
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
    ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(&::descriptor_table_proto_2fdataStructure_2fpose3d_2eproto);
    return ::descriptor_table_proto_2fdataStructure_2fpose3d_2eproto.file_level_metadata[kIndexInFileMessages];
  }

  public:

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  enum : int {
    kPositionFieldNumber = 1,
    kQuaternionFieldNumber = 2,
    kEulerFieldNumber = 3,
  };
  // .ubii.dataStructure.Vector3 position = 1;
  bool has_position() const;
  private:
  bool _internal_has_position() const;
  public:
  void clear_position();
  const ::ubii::dataStructure::Vector3& position() const;
  ::ubii::dataStructure::Vector3* release_position();
  ::ubii::dataStructure::Vector3* mutable_position();
  void set_allocated_position(::ubii::dataStructure::Vector3* position);
  private:
  const ::ubii::dataStructure::Vector3& _internal_position() const;
  ::ubii::dataStructure::Vector3* _internal_mutable_position();
  public:

  // .ubii.dataStructure.Quaternion quaternion = 2;
  bool has_quaternion() const;
  private:
  bool _internal_has_quaternion() const;
  public:
  void clear_quaternion();
  const ::ubii::dataStructure::Quaternion& quaternion() const;
  ::ubii::dataStructure::Quaternion* release_quaternion();
  ::ubii::dataStructure::Quaternion* mutable_quaternion();
  void set_allocated_quaternion(::ubii::dataStructure::Quaternion* quaternion);
  private:
  const ::ubii::dataStructure::Quaternion& _internal_quaternion() const;
  ::ubii::dataStructure::Quaternion* _internal_mutable_quaternion();
  public:

  // .ubii.dataStructure.Vector3 euler = 3;
  bool has_euler() const;
  private:
  bool _internal_has_euler() const;
  public:
  void clear_euler();
  const ::ubii::dataStructure::Vector3& euler() const;
  ::ubii::dataStructure::Vector3* release_euler();
  ::ubii::dataStructure::Vector3* mutable_euler();
  void set_allocated_euler(::ubii::dataStructure::Vector3* euler);
  private:
  const ::ubii::dataStructure::Vector3& _internal_euler() const;
  ::ubii::dataStructure::Vector3* _internal_mutable_euler();
  public:

  void clear_orientation();
  OrientationCase orientation_case() const;
  // @@protoc_insertion_point(class_scope:ubii.dataStructure.Pose3D)
 private:
  class _Internal;
  void set_has_quaternion();
  void set_has_euler();

  inline bool has_orientation() const;
  inline void clear_has_orientation();

  ::PROTOBUF_NAMESPACE_ID::internal::InternalMetadataWithArena _internal_metadata_;
  ::ubii::dataStructure::Vector3* position_;
  union OrientationUnion {
    OrientationUnion() {}
    ::ubii::dataStructure::Quaternion* quaternion_;
    ::ubii::dataStructure::Vector3* euler_;
  } orientation_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  ::PROTOBUF_NAMESPACE_ID::uint32 _oneof_case_[1];

  friend struct ::TableStruct_proto_2fdataStructure_2fpose3d_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// Pose3D

// .ubii.dataStructure.Vector3 position = 1;
inline bool Pose3D::_internal_has_position() const {
  return this != internal_default_instance() && position_ != nullptr;
}
inline bool Pose3D::has_position() const {
  return _internal_has_position();
}
inline const ::ubii::dataStructure::Vector3& Pose3D::_internal_position() const {
  const ::ubii::dataStructure::Vector3* p = position_;
  return p != nullptr ? *p : *reinterpret_cast<const ::ubii::dataStructure::Vector3*>(
      &::ubii::dataStructure::_Vector3_default_instance_);
}
inline const ::ubii::dataStructure::Vector3& Pose3D::position() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Pose3D.position)
  return _internal_position();
}
inline ::ubii::dataStructure::Vector3* Pose3D::release_position() {
  // @@protoc_insertion_point(field_release:ubii.dataStructure.Pose3D.position)
  
  ::ubii::dataStructure::Vector3* temp = position_;
  position_ = nullptr;
  return temp;
}
inline ::ubii::dataStructure::Vector3* Pose3D::_internal_mutable_position() {
  
  if (position_ == nullptr) {
    auto* p = CreateMaybeMessage<::ubii::dataStructure::Vector3>(GetArenaNoVirtual());
    position_ = p;
  }
  return position_;
}
inline ::ubii::dataStructure::Vector3* Pose3D::mutable_position() {
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.Pose3D.position)
  return _internal_mutable_position();
}
inline void Pose3D::set_allocated_position(::ubii::dataStructure::Vector3* position) {
  ::PROTOBUF_NAMESPACE_ID::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == nullptr) {
    delete reinterpret_cast< ::PROTOBUF_NAMESPACE_ID::MessageLite*>(position_);
  }
  if (position) {
    ::PROTOBUF_NAMESPACE_ID::Arena* submessage_arena = nullptr;
    if (message_arena != submessage_arena) {
      position = ::PROTOBUF_NAMESPACE_ID::internal::GetOwnedMessage(
          message_arena, position, submessage_arena);
    }
    
  } else {
    
  }
  position_ = position;
  // @@protoc_insertion_point(field_set_allocated:ubii.dataStructure.Pose3D.position)
}

// .ubii.dataStructure.Quaternion quaternion = 2;
inline bool Pose3D::_internal_has_quaternion() const {
  return orientation_case() == kQuaternion;
}
inline bool Pose3D::has_quaternion() const {
  return _internal_has_quaternion();
}
inline void Pose3D::set_has_quaternion() {
  _oneof_case_[0] = kQuaternion;
}
inline ::ubii::dataStructure::Quaternion* Pose3D::release_quaternion() {
  // @@protoc_insertion_point(field_release:ubii.dataStructure.Pose3D.quaternion)
  if (_internal_has_quaternion()) {
    clear_has_orientation();
      ::ubii::dataStructure::Quaternion* temp = orientation_.quaternion_;
    orientation_.quaternion_ = nullptr;
    return temp;
  } else {
    return nullptr;
  }
}
inline const ::ubii::dataStructure::Quaternion& Pose3D::_internal_quaternion() const {
  return _internal_has_quaternion()
      ? *orientation_.quaternion_
      : *reinterpret_cast< ::ubii::dataStructure::Quaternion*>(&::ubii::dataStructure::_Quaternion_default_instance_);
}
inline const ::ubii::dataStructure::Quaternion& Pose3D::quaternion() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Pose3D.quaternion)
  return _internal_quaternion();
}
inline ::ubii::dataStructure::Quaternion* Pose3D::_internal_mutable_quaternion() {
  if (!_internal_has_quaternion()) {
    clear_orientation();
    set_has_quaternion();
    orientation_.quaternion_ = CreateMaybeMessage< ::ubii::dataStructure::Quaternion >(
        GetArenaNoVirtual());
  }
  return orientation_.quaternion_;
}
inline ::ubii::dataStructure::Quaternion* Pose3D::mutable_quaternion() {
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.Pose3D.quaternion)
  return _internal_mutable_quaternion();
}

// .ubii.dataStructure.Vector3 euler = 3;
inline bool Pose3D::_internal_has_euler() const {
  return orientation_case() == kEuler;
}
inline bool Pose3D::has_euler() const {
  return _internal_has_euler();
}
inline void Pose3D::set_has_euler() {
  _oneof_case_[0] = kEuler;
}
inline ::ubii::dataStructure::Vector3* Pose3D::release_euler() {
  // @@protoc_insertion_point(field_release:ubii.dataStructure.Pose3D.euler)
  if (_internal_has_euler()) {
    clear_has_orientation();
      ::ubii::dataStructure::Vector3* temp = orientation_.euler_;
    orientation_.euler_ = nullptr;
    return temp;
  } else {
    return nullptr;
  }
}
inline const ::ubii::dataStructure::Vector3& Pose3D::_internal_euler() const {
  return _internal_has_euler()
      ? *orientation_.euler_
      : *reinterpret_cast< ::ubii::dataStructure::Vector3*>(&::ubii::dataStructure::_Vector3_default_instance_);
}
inline const ::ubii::dataStructure::Vector3& Pose3D::euler() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Pose3D.euler)
  return _internal_euler();
}
inline ::ubii::dataStructure::Vector3* Pose3D::_internal_mutable_euler() {
  if (!_internal_has_euler()) {
    clear_orientation();
    set_has_euler();
    orientation_.euler_ = CreateMaybeMessage< ::ubii::dataStructure::Vector3 >(
        GetArenaNoVirtual());
  }
  return orientation_.euler_;
}
inline ::ubii::dataStructure::Vector3* Pose3D::mutable_euler() {
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.Pose3D.euler)
  return _internal_mutable_euler();
}

inline bool Pose3D::has_orientation() const {
  return orientation_case() != ORIENTATION_NOT_SET;
}
inline void Pose3D::clear_has_orientation() {
  _oneof_case_[0] = ORIENTATION_NOT_SET;
}
inline Pose3D::OrientationCase Pose3D::orientation_case() const {
  return Pose3D::OrientationCase(_oneof_case_[0]);
}
#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)

}  // namespace dataStructure
}  // namespace ubii

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // GOOGLE_PROTOBUF_INCLUDED_GOOGLE_PROTOBUF_INCLUDED_proto_2fdataStructure_2fpose3d_2eproto
