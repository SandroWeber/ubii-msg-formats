// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/dataStructure/image.proto

#ifndef GOOGLE_PROTOBUF_INCLUDED_proto_2fdataStructure_2fimage_2eproto
#define GOOGLE_PROTOBUF_INCLUDED_proto_2fdataStructure_2fimage_2eproto

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
#include <google/protobuf/generated_enum_reflection.h>
#include <google/protobuf/unknown_field_set.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_proto_2fdataStructure_2fimage_2eproto
PROTOBUF_NAMESPACE_OPEN
namespace internal {
class AnyMetadata;
}  // namespace internal
PROTOBUF_NAMESPACE_CLOSE

// Internal implementation detail -- do not use these members.
struct TableStruct_proto_2fdataStructure_2fimage_2eproto {
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
extern const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_proto_2fdataStructure_2fimage_2eproto;
namespace ubii {
namespace dataStructure {
class Image2D;
class Image2DDefaultTypeInternal;
extern Image2DDefaultTypeInternal _Image2D_default_instance_;
class Image2DList;
class Image2DListDefaultTypeInternal;
extern Image2DListDefaultTypeInternal _Image2DList_default_instance_;
}  // namespace dataStructure
}  // namespace ubii
PROTOBUF_NAMESPACE_OPEN
template<> ::ubii::dataStructure::Image2D* Arena::CreateMaybeMessage<::ubii::dataStructure::Image2D>(Arena*);
template<> ::ubii::dataStructure::Image2DList* Arena::CreateMaybeMessage<::ubii::dataStructure::Image2DList>(Arena*);
PROTOBUF_NAMESPACE_CLOSE
namespace ubii {
namespace dataStructure {

enum Image2D_DataFormat : int {
  Image2D_DataFormat_GRAY8 = 0,
  Image2D_DataFormat_RGB8 = 1,
  Image2D_DataFormat_RGBA8 = 2,
  Image2D_DataFormat_Image2D_DataFormat_INT_MIN_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::PROTOBUF_NAMESPACE_ID::int32>::min(),
  Image2D_DataFormat_Image2D_DataFormat_INT_MAX_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::PROTOBUF_NAMESPACE_ID::int32>::max()
};
bool Image2D_DataFormat_IsValid(int value);
constexpr Image2D_DataFormat Image2D_DataFormat_DataFormat_MIN = Image2D_DataFormat_GRAY8;
constexpr Image2D_DataFormat Image2D_DataFormat_DataFormat_MAX = Image2D_DataFormat_RGBA8;
constexpr int Image2D_DataFormat_DataFormat_ARRAYSIZE = Image2D_DataFormat_DataFormat_MAX + 1;

const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor* Image2D_DataFormat_descriptor();
template<typename T>
inline const std::string& Image2D_DataFormat_Name(T enum_t_value) {
  static_assert(::std::is_same<T, Image2D_DataFormat>::value ||
    ::std::is_integral<T>::value,
    "Incorrect type passed to function Image2D_DataFormat_Name.");
  return ::PROTOBUF_NAMESPACE_ID::internal::NameOfEnum(
    Image2D_DataFormat_descriptor(), enum_t_value);
}
inline bool Image2D_DataFormat_Parse(
    const std::string& name, Image2D_DataFormat* value) {
  return ::PROTOBUF_NAMESPACE_ID::internal::ParseNamedEnum<Image2D_DataFormat>(
    Image2D_DataFormat_descriptor(), name, value);
}
// ===================================================================

class Image2D :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:ubii.dataStructure.Image2D) */ {
 public:
  Image2D();
  virtual ~Image2D();

  Image2D(const Image2D& from);
  Image2D(Image2D&& from) noexcept
    : Image2D() {
    *this = ::std::move(from);
  }

  inline Image2D& operator=(const Image2D& from) {
    CopyFrom(from);
    return *this;
  }
  inline Image2D& operator=(Image2D&& from) noexcept {
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
  static const Image2D& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const Image2D* internal_default_instance() {
    return reinterpret_cast<const Image2D*>(
               &_Image2D_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  friend void swap(Image2D& a, Image2D& b) {
    a.Swap(&b);
  }
  inline void Swap(Image2D* other) {
    if (other == this) return;
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline Image2D* New() const final {
    return CreateMaybeMessage<Image2D>(nullptr);
  }

  Image2D* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<Image2D>(arena);
  }
  void CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void CopyFrom(const Image2D& from);
  void MergeFrom(const Image2D& from);
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
  void InternalSwap(Image2D* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "ubii.dataStructure.Image2D";
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
    ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(&::descriptor_table_proto_2fdataStructure_2fimage_2eproto);
    return ::descriptor_table_proto_2fdataStructure_2fimage_2eproto.file_level_metadata[kIndexInFileMessages];
  }

  public:

  // nested types ----------------------------------------------------

  typedef Image2D_DataFormat DataFormat;
  static constexpr DataFormat GRAY8 =
    Image2D_DataFormat_GRAY8;
  static constexpr DataFormat RGB8 =
    Image2D_DataFormat_RGB8;
  static constexpr DataFormat RGBA8 =
    Image2D_DataFormat_RGBA8;
  static inline bool DataFormat_IsValid(int value) {
    return Image2D_DataFormat_IsValid(value);
  }
  static constexpr DataFormat DataFormat_MIN =
    Image2D_DataFormat_DataFormat_MIN;
  static constexpr DataFormat DataFormat_MAX =
    Image2D_DataFormat_DataFormat_MAX;
  static constexpr int DataFormat_ARRAYSIZE =
    Image2D_DataFormat_DataFormat_ARRAYSIZE;
  static inline const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor*
  DataFormat_descriptor() {
    return Image2D_DataFormat_descriptor();
  }
  template<typename T>
  static inline const std::string& DataFormat_Name(T enum_t_value) {
    static_assert(::std::is_same<T, DataFormat>::value ||
      ::std::is_integral<T>::value,
      "Incorrect type passed to function DataFormat_Name.");
    return Image2D_DataFormat_Name(enum_t_value);
  }
  static inline bool DataFormat_Parse(const std::string& name,
      DataFormat* value) {
    return Image2D_DataFormat_Parse(name, value);
  }

  // accessors -------------------------------------------------------

  enum : int {
    kDataFieldNumber = 4,
    kWidthFieldNumber = 1,
    kHeightFieldNumber = 2,
    kDataFormatFieldNumber = 3,
  };
  // bytes data = 4;
  void clear_data();
  const std::string& data() const;
  void set_data(const std::string& value);
  void set_data(std::string&& value);
  void set_data(const char* value);
  void set_data(const void* value, size_t size);
  std::string* mutable_data();
  std::string* release_data();
  void set_allocated_data(std::string* data);
  private:
  const std::string& _internal_data() const;
  void _internal_set_data(const std::string& value);
  std::string* _internal_mutable_data();
  public:

  // int32 width = 1;
  void clear_width();
  ::PROTOBUF_NAMESPACE_ID::int32 width() const;
  void set_width(::PROTOBUF_NAMESPACE_ID::int32 value);
  private:
  ::PROTOBUF_NAMESPACE_ID::int32 _internal_width() const;
  void _internal_set_width(::PROTOBUF_NAMESPACE_ID::int32 value);
  public:

  // int32 height = 2;
  void clear_height();
  ::PROTOBUF_NAMESPACE_ID::int32 height() const;
  void set_height(::PROTOBUF_NAMESPACE_ID::int32 value);
  private:
  ::PROTOBUF_NAMESPACE_ID::int32 _internal_height() const;
  void _internal_set_height(::PROTOBUF_NAMESPACE_ID::int32 value);
  public:

  // .ubii.dataStructure.Image2D.DataFormat data_format = 3;
  void clear_data_format();
  ::ubii::dataStructure::Image2D_DataFormat data_format() const;
  void set_data_format(::ubii::dataStructure::Image2D_DataFormat value);
  private:
  ::ubii::dataStructure::Image2D_DataFormat _internal_data_format() const;
  void _internal_set_data_format(::ubii::dataStructure::Image2D_DataFormat value);
  public:

  // @@protoc_insertion_point(class_scope:ubii.dataStructure.Image2D)
 private:
  class _Internal;

  ::PROTOBUF_NAMESPACE_ID::internal::InternalMetadataWithArena _internal_metadata_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr data_;
  ::PROTOBUF_NAMESPACE_ID::int32 width_;
  ::PROTOBUF_NAMESPACE_ID::int32 height_;
  int data_format_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_proto_2fdataStructure_2fimage_2eproto;
};
// -------------------------------------------------------------------

class Image2DList :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:ubii.dataStructure.Image2DList) */ {
 public:
  Image2DList();
  virtual ~Image2DList();

  Image2DList(const Image2DList& from);
  Image2DList(Image2DList&& from) noexcept
    : Image2DList() {
    *this = ::std::move(from);
  }

  inline Image2DList& operator=(const Image2DList& from) {
    CopyFrom(from);
    return *this;
  }
  inline Image2DList& operator=(Image2DList&& from) noexcept {
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
  static const Image2DList& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const Image2DList* internal_default_instance() {
    return reinterpret_cast<const Image2DList*>(
               &_Image2DList_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    1;

  friend void swap(Image2DList& a, Image2DList& b) {
    a.Swap(&b);
  }
  inline void Swap(Image2DList* other) {
    if (other == this) return;
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline Image2DList* New() const final {
    return CreateMaybeMessage<Image2DList>(nullptr);
  }

  Image2DList* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<Image2DList>(arena);
  }
  void CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void CopyFrom(const Image2DList& from);
  void MergeFrom(const Image2DList& from);
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
  void InternalSwap(Image2DList* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "ubii.dataStructure.Image2DList";
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
    ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(&::descriptor_table_proto_2fdataStructure_2fimage_2eproto);
    return ::descriptor_table_proto_2fdataStructure_2fimage_2eproto.file_level_metadata[kIndexInFileMessages];
  }

  public:

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  enum : int {
    kElementsFieldNumber = 1,
  };
  // repeated .ubii.dataStructure.Image2D elements = 1;
  int elements_size() const;
  private:
  int _internal_elements_size() const;
  public:
  void clear_elements();
  ::ubii::dataStructure::Image2D* mutable_elements(int index);
  ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField< ::ubii::dataStructure::Image2D >*
      mutable_elements();
  private:
  const ::ubii::dataStructure::Image2D& _internal_elements(int index) const;
  ::ubii::dataStructure::Image2D* _internal_add_elements();
  public:
  const ::ubii::dataStructure::Image2D& elements(int index) const;
  ::ubii::dataStructure::Image2D* add_elements();
  const ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField< ::ubii::dataStructure::Image2D >&
      elements() const;

  // @@protoc_insertion_point(class_scope:ubii.dataStructure.Image2DList)
 private:
  class _Internal;

  ::PROTOBUF_NAMESPACE_ID::internal::InternalMetadataWithArena _internal_metadata_;
  ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField< ::ubii::dataStructure::Image2D > elements_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_proto_2fdataStructure_2fimage_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// Image2D

// int32 width = 1;
inline void Image2D::clear_width() {
  width_ = 0;
}
inline ::PROTOBUF_NAMESPACE_ID::int32 Image2D::_internal_width() const {
  return width_;
}
inline ::PROTOBUF_NAMESPACE_ID::int32 Image2D::width() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Image2D.width)
  return _internal_width();
}
inline void Image2D::_internal_set_width(::PROTOBUF_NAMESPACE_ID::int32 value) {
  
  width_ = value;
}
inline void Image2D::set_width(::PROTOBUF_NAMESPACE_ID::int32 value) {
  _internal_set_width(value);
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Image2D.width)
}

// int32 height = 2;
inline void Image2D::clear_height() {
  height_ = 0;
}
inline ::PROTOBUF_NAMESPACE_ID::int32 Image2D::_internal_height() const {
  return height_;
}
inline ::PROTOBUF_NAMESPACE_ID::int32 Image2D::height() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Image2D.height)
  return _internal_height();
}
inline void Image2D::_internal_set_height(::PROTOBUF_NAMESPACE_ID::int32 value) {
  
  height_ = value;
}
inline void Image2D::set_height(::PROTOBUF_NAMESPACE_ID::int32 value) {
  _internal_set_height(value);
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Image2D.height)
}

// .ubii.dataStructure.Image2D.DataFormat data_format = 3;
inline void Image2D::clear_data_format() {
  data_format_ = 0;
}
inline ::ubii::dataStructure::Image2D_DataFormat Image2D::_internal_data_format() const {
  return static_cast< ::ubii::dataStructure::Image2D_DataFormat >(data_format_);
}
inline ::ubii::dataStructure::Image2D_DataFormat Image2D::data_format() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Image2D.data_format)
  return _internal_data_format();
}
inline void Image2D::_internal_set_data_format(::ubii::dataStructure::Image2D_DataFormat value) {
  
  data_format_ = value;
}
inline void Image2D::set_data_format(::ubii::dataStructure::Image2D_DataFormat value) {
  _internal_set_data_format(value);
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Image2D.data_format)
}

// bytes data = 4;
inline void Image2D::clear_data() {
  data_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline const std::string& Image2D::data() const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Image2D.data)
  return _internal_data();
}
inline void Image2D::set_data(const std::string& value) {
  _internal_set_data(value);
  // @@protoc_insertion_point(field_set:ubii.dataStructure.Image2D.data)
}
inline std::string* Image2D::mutable_data() {
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.Image2D.data)
  return _internal_mutable_data();
}
inline const std::string& Image2D::_internal_data() const {
  return data_.GetNoArena();
}
inline void Image2D::_internal_set_data(const std::string& value) {
  
  data_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), value);
}
inline void Image2D::set_data(std::string&& value) {
  
  data_.SetNoArena(
    &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:ubii.dataStructure.Image2D.data)
}
inline void Image2D::set_data(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  data_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:ubii.dataStructure.Image2D.data)
}
inline void Image2D::set_data(const void* value, size_t size) {
  
  data_.SetNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:ubii.dataStructure.Image2D.data)
}
inline std::string* Image2D::_internal_mutable_data() {
  
  return data_.MutableNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline std::string* Image2D::release_data() {
  // @@protoc_insertion_point(field_release:ubii.dataStructure.Image2D.data)
  
  return data_.ReleaseNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}
inline void Image2D::set_allocated_data(std::string* data) {
  if (data != nullptr) {
    
  } else {
    
  }
  data_.SetAllocatedNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), data);
  // @@protoc_insertion_point(field_set_allocated:ubii.dataStructure.Image2D.data)
}

// -------------------------------------------------------------------

// Image2DList

// repeated .ubii.dataStructure.Image2D elements = 1;
inline int Image2DList::_internal_elements_size() const {
  return elements_.size();
}
inline int Image2DList::elements_size() const {
  return _internal_elements_size();
}
inline void Image2DList::clear_elements() {
  elements_.Clear();
}
inline ::ubii::dataStructure::Image2D* Image2DList::mutable_elements(int index) {
  // @@protoc_insertion_point(field_mutable:ubii.dataStructure.Image2DList.elements)
  return elements_.Mutable(index);
}
inline ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField< ::ubii::dataStructure::Image2D >*
Image2DList::mutable_elements() {
  // @@protoc_insertion_point(field_mutable_list:ubii.dataStructure.Image2DList.elements)
  return &elements_;
}
inline const ::ubii::dataStructure::Image2D& Image2DList::_internal_elements(int index) const {
  return elements_.Get(index);
}
inline const ::ubii::dataStructure::Image2D& Image2DList::elements(int index) const {
  // @@protoc_insertion_point(field_get:ubii.dataStructure.Image2DList.elements)
  return _internal_elements(index);
}
inline ::ubii::dataStructure::Image2D* Image2DList::_internal_add_elements() {
  return elements_.Add();
}
inline ::ubii::dataStructure::Image2D* Image2DList::add_elements() {
  // @@protoc_insertion_point(field_add:ubii.dataStructure.Image2DList.elements)
  return _internal_add_elements();
}
inline const ::PROTOBUF_NAMESPACE_ID::RepeatedPtrField< ::ubii::dataStructure::Image2D >&
Image2DList::elements() const {
  // @@protoc_insertion_point(field_list:ubii.dataStructure.Image2DList.elements)
  return elements_;
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__
// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)

}  // namespace dataStructure
}  // namespace ubii

PROTOBUF_NAMESPACE_OPEN

template <> struct is_proto_enum< ::ubii::dataStructure::Image2D_DataFormat> : ::std::true_type {};
template <>
inline const EnumDescriptor* GetEnumDescriptor< ::ubii::dataStructure::Image2D_DataFormat>() {
  return ::ubii::dataStructure::Image2D_DataFormat_descriptor();
}

PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // GOOGLE_PROTOBUF_INCLUDED_GOOGLE_PROTOBUF_INCLUDED_proto_2fdataStructure_2fimage_2eproto
