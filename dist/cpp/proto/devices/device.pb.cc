// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: proto/devices/device.proto

#include "proto/devices/device.pb.h"

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
extern PROTOBUF_INTERNAL_EXPORT_proto_2fdevices_2fcomponent_2eproto ::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<0> scc_info_Component_proto_2fdevices_2fcomponent_2eproto;
extern PROTOBUF_INTERNAL_EXPORT_proto_2fdevices_2fdevice_2eproto ::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<1> scc_info_Device_proto_2fdevices_2fdevice_2eproto;
namespace ubii {
namespace devices {
class DeviceDefaultTypeInternal {
 public:
  ::PROTOBUF_NAMESPACE_ID::internal::ExplicitlyConstructed<Device> _instance;
} _Device_default_instance_;
class DeviceListDefaultTypeInternal {
 public:
  ::PROTOBUF_NAMESPACE_ID::internal::ExplicitlyConstructed<DeviceList> _instance;
} _DeviceList_default_instance_;
}  // namespace devices
}  // namespace ubii
static void InitDefaultsscc_info_Device_proto_2fdevices_2fdevice_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::ubii::devices::_Device_default_instance_;
    new (ptr) ::ubii::devices::Device();
    ::PROTOBUF_NAMESPACE_ID::internal::OnShutdownDestroyMessage(ptr);
  }
  ::ubii::devices::Device::InitAsDefaultInstance();
}

::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<1> scc_info_Device_proto_2fdevices_2fdevice_2eproto =
    {{ATOMIC_VAR_INIT(::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase::kUninitialized), 1, 0, InitDefaultsscc_info_Device_proto_2fdevices_2fdevice_2eproto}, {
      &scc_info_Component_proto_2fdevices_2fcomponent_2eproto.base,}};

static void InitDefaultsscc_info_DeviceList_proto_2fdevices_2fdevice_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::ubii::devices::_DeviceList_default_instance_;
    new (ptr) ::ubii::devices::DeviceList();
    ::PROTOBUF_NAMESPACE_ID::internal::OnShutdownDestroyMessage(ptr);
  }
  ::ubii::devices::DeviceList::InitAsDefaultInstance();
}

::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<1> scc_info_DeviceList_proto_2fdevices_2fdevice_2eproto =
    {{ATOMIC_VAR_INIT(::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase::kUninitialized), 1, 0, InitDefaultsscc_info_DeviceList_proto_2fdevices_2fdevice_2eproto}, {
      &scc_info_Device_proto_2fdevices_2fdevice_2eproto.base,}};

static ::PROTOBUF_NAMESPACE_ID::Metadata file_level_metadata_proto_2fdevices_2fdevice_2eproto[2];
static const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor* file_level_enum_descriptors_proto_2fdevices_2fdevice_2eproto[1];
static constexpr ::PROTOBUF_NAMESPACE_ID::ServiceDescriptor const** file_level_service_descriptors_proto_2fdevices_2fdevice_2eproto = nullptr;

const ::PROTOBUF_NAMESPACE_ID::uint32 TableStruct_proto_2fdevices_2fdevice_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::ubii::devices::Device, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::ubii::devices::Device, id_),
  PROTOBUF_FIELD_OFFSET(::ubii::devices::Device, name_),
  PROTOBUF_FIELD_OFFSET(::ubii::devices::Device, device_type_),
  PROTOBUF_FIELD_OFFSET(::ubii::devices::Device, components_),
  PROTOBUF_FIELD_OFFSET(::ubii::devices::Device, client_id_),
  PROTOBUF_FIELD_OFFSET(::ubii::devices::Device, tags_),
  PROTOBUF_FIELD_OFFSET(::ubii::devices::Device, description_),
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::ubii::devices::DeviceList, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::ubii::devices::DeviceList, elements_),
};
static const ::PROTOBUF_NAMESPACE_ID::internal::MigrationSchema schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::ubii::devices::Device)},
  { 12, -1, sizeof(::ubii::devices::DeviceList)},
};

static ::PROTOBUF_NAMESPACE_ID::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::ubii::devices::_Device_default_instance_),
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::ubii::devices::_DeviceList_default_instance_),
};

const char descriptor_table_protodef_proto_2fdevices_2fdevice_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) =
  "\n\032proto/devices/device.proto\022\014ubii.devic"
  "es\032\035proto/devices/component.proto\"\347\001\n\006De"
  "vice\022\n\n\002id\030\001 \001(\t\022\014\n\004name\030\002 \001(\t\0224\n\013device"
  "_type\030\003 \001(\0162\037.ubii.devices.Device.Device"
  "Type\022+\n\ncomponents\030\004 \003(\0132\027.ubii.devices."
  "Component\022\021\n\tclient_id\030\005 \001(\t\022\014\n\004tags\030\006 \003"
  "(\t\022\023\n\013description\030\007 \001(\t\"*\n\nDeviceType\022\017\n"
  "\013PARTICIPANT\020\000\022\013\n\007WATCHER\020\001\"4\n\nDeviceLis"
  "t\022&\n\010elements\030\001 \003(\0132\024.ubii.devices.Devic"
  "eb\006proto3"
  ;
static const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable*const descriptor_table_proto_2fdevices_2fdevice_2eproto_deps[1] = {
  &::descriptor_table_proto_2fdevices_2fcomponent_2eproto,
};
static ::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase*const descriptor_table_proto_2fdevices_2fdevice_2eproto_sccs[2] = {
  &scc_info_Device_proto_2fdevices_2fdevice_2eproto.base,
  &scc_info_DeviceList_proto_2fdevices_2fdevice_2eproto.base,
};
static ::PROTOBUF_NAMESPACE_ID::internal::once_flag descriptor_table_proto_2fdevices_2fdevice_2eproto_once;
static bool descriptor_table_proto_2fdevices_2fdevice_2eproto_initialized = false;
const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_proto_2fdevices_2fdevice_2eproto = {
  &descriptor_table_proto_2fdevices_2fdevice_2eproto_initialized, descriptor_table_protodef_proto_2fdevices_2fdevice_2eproto, "proto/devices/device.proto", 369,
  &descriptor_table_proto_2fdevices_2fdevice_2eproto_once, descriptor_table_proto_2fdevices_2fdevice_2eproto_sccs, descriptor_table_proto_2fdevices_2fdevice_2eproto_deps, 2, 1,
  schemas, file_default_instances, TableStruct_proto_2fdevices_2fdevice_2eproto::offsets,
  file_level_metadata_proto_2fdevices_2fdevice_2eproto, 2, file_level_enum_descriptors_proto_2fdevices_2fdevice_2eproto, file_level_service_descriptors_proto_2fdevices_2fdevice_2eproto,
};

// Force running AddDescriptors() at dynamic initialization time.
static bool dynamic_init_dummy_proto_2fdevices_2fdevice_2eproto = (  ::PROTOBUF_NAMESPACE_ID::internal::AddDescriptors(&descriptor_table_proto_2fdevices_2fdevice_2eproto), true);
namespace ubii {
namespace devices {
const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor* Device_DeviceType_descriptor() {
  ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(&descriptor_table_proto_2fdevices_2fdevice_2eproto);
  return file_level_enum_descriptors_proto_2fdevices_2fdevice_2eproto[0];
}
bool Device_DeviceType_IsValid(int value) {
  switch (value) {
    case 0:
    case 1:
      return true;
    default:
      return false;
  }
}

#if (__cplusplus < 201703) && (!defined(_MSC_VER) || _MSC_VER >= 1900)
constexpr Device_DeviceType Device::PARTICIPANT;
constexpr Device_DeviceType Device::WATCHER;
constexpr Device_DeviceType Device::DeviceType_MIN;
constexpr Device_DeviceType Device::DeviceType_MAX;
constexpr int Device::DeviceType_ARRAYSIZE;
#endif  // (__cplusplus < 201703) && (!defined(_MSC_VER) || _MSC_VER >= 1900)

// ===================================================================

void Device::InitAsDefaultInstance() {
}
class Device::_Internal {
 public:
};

void Device::clear_components() {
  components_.Clear();
}
Device::Device()
  : ::PROTOBUF_NAMESPACE_ID::Message(), _internal_metadata_(nullptr) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:ubii.devices.Device)
}
Device::Device(const Device& from)
  : ::PROTOBUF_NAMESPACE_ID::Message(),
      _internal_metadata_(nullptr),
      components_(from.components_),
      tags_(from.tags_) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  id_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_id().empty()) {
    id_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.id_);
  }
  name_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_name().empty()) {
    name_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.name_);
  }
  client_id_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_client_id().empty()) {
    client_id_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.client_id_);
  }
  description_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_description().empty()) {
    description_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.description_);
  }
  device_type_ = from.device_type_;
  // @@protoc_insertion_point(copy_constructor:ubii.devices.Device)
}

void Device::SharedCtor() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&scc_info_Device_proto_2fdevices_2fdevice_2eproto.base);
  id_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  name_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  client_id_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  description_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  device_type_ = 0;
}

Device::~Device() {
  // @@protoc_insertion_point(destructor:ubii.devices.Device)
  SharedDtor();
}

void Device::SharedDtor() {
  id_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  name_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  client_id_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  description_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}

void Device::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const Device& Device::default_instance() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&::scc_info_Device_proto_2fdevices_2fdevice_2eproto.base);
  return *internal_default_instance();
}


void Device::Clear() {
// @@protoc_insertion_point(message_clear_start:ubii.devices.Device)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  components_.Clear();
  tags_.Clear();
  id_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  name_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  client_id_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  description_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  device_type_ = 0;
  _internal_metadata_.Clear();
}

const char* Device::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    CHK_(ptr);
    switch (tag >> 3) {
      // string id = 1;
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 10)) {
          auto str = _internal_mutable_id();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "ubii.devices.Device.id"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // string name = 2;
      case 2:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 18)) {
          auto str = _internal_mutable_name();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "ubii.devices.Device.name"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // .ubii.devices.Device.DeviceType device_type = 3;
      case 3:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 24)) {
          ::PROTOBUF_NAMESPACE_ID::uint64 val = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint(&ptr);
          CHK_(ptr);
          _internal_set_device_type(static_cast<::ubii::devices::Device_DeviceType>(val));
        } else goto handle_unusual;
        continue;
      // repeated .ubii.devices.Component components = 4;
      case 4:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 34)) {
          ptr -= 1;
          do {
            ptr += 1;
            ptr = ctx->ParseMessage(_internal_add_components(), ptr);
            CHK_(ptr);
            if (!ctx->DataAvailable(ptr)) break;
          } while (::PROTOBUF_NAMESPACE_ID::internal::ExpectTag<34>(ptr));
        } else goto handle_unusual;
        continue;
      // string client_id = 5;
      case 5:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 42)) {
          auto str = _internal_mutable_client_id();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "ubii.devices.Device.client_id"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // repeated string tags = 6;
      case 6:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 50)) {
          ptr -= 1;
          do {
            ptr += 1;
            auto str = _internal_add_tags();
            ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
            CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "ubii.devices.Device.tags"));
            CHK_(ptr);
            if (!ctx->DataAvailable(ptr)) break;
          } while (::PROTOBUF_NAMESPACE_ID::internal::ExpectTag<50>(ptr));
        } else goto handle_unusual;
        continue;
      // string description = 7;
      case 7:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 58)) {
          auto str = _internal_mutable_description();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "ubii.devices.Device.description"));
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

::PROTOBUF_NAMESPACE_ID::uint8* Device::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:ubii.devices.Device)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // string id = 1;
  if (this->id().size() > 0) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_id().data(), static_cast<int>(this->_internal_id().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "ubii.devices.Device.id");
    target = stream->WriteStringMaybeAliased(
        1, this->_internal_id(), target);
  }

  // string name = 2;
  if (this->name().size() > 0) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_name().data(), static_cast<int>(this->_internal_name().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "ubii.devices.Device.name");
    target = stream->WriteStringMaybeAliased(
        2, this->_internal_name(), target);
  }

  // .ubii.devices.Device.DeviceType device_type = 3;
  if (this->device_type() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteEnumToArray(
      3, this->_internal_device_type(), target);
  }

  // repeated .ubii.devices.Component components = 4;
  for (unsigned int i = 0,
      n = static_cast<unsigned int>(this->_internal_components_size()); i < n; i++) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::
      InternalWriteMessage(4, this->_internal_components(i), target, stream);
  }

  // string client_id = 5;
  if (this->client_id().size() > 0) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_client_id().data(), static_cast<int>(this->_internal_client_id().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "ubii.devices.Device.client_id");
    target = stream->WriteStringMaybeAliased(
        5, this->_internal_client_id(), target);
  }

  // repeated string tags = 6;
  for (int i = 0, n = this->_internal_tags_size(); i < n; i++) {
    const auto& s = this->_internal_tags(i);
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      s.data(), static_cast<int>(s.length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "ubii.devices.Device.tags");
    target = stream->WriteString(6, s, target);
  }

  // string description = 7;
  if (this->description().size() > 0) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_description().data(), static_cast<int>(this->_internal_description().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "ubii.devices.Device.description");
    target = stream->WriteStringMaybeAliased(
        7, this->_internal_description(), target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields(), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:ubii.devices.Device)
  return target;
}

size_t Device::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:ubii.devices.Device)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // repeated .ubii.devices.Component components = 4;
  total_size += 1UL * this->_internal_components_size();
  for (const auto& msg : this->components_) {
    total_size +=
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::MessageSize(msg);
  }

  // repeated string tags = 6;
  total_size += 1 *
      ::PROTOBUF_NAMESPACE_ID::internal::FromIntSize(tags_.size());
  for (int i = 0, n = tags_.size(); i < n; i++) {
    total_size += ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
      tags_.Get(i));
  }

  // string id = 1;
  if (this->id().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_id());
  }

  // string name = 2;
  if (this->name().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_name());
  }

  // string client_id = 5;
  if (this->client_id().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_client_id());
  }

  // string description = 7;
  if (this->description().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_description());
  }

  // .ubii.devices.Device.DeviceType device_type = 3;
  if (this->device_type() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::EnumSize(this->_internal_device_type());
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void Device::MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:ubii.devices.Device)
  GOOGLE_DCHECK_NE(&from, this);
  const Device* source =
      ::PROTOBUF_NAMESPACE_ID::DynamicCastToGenerated<Device>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:ubii.devices.Device)
    ::PROTOBUF_NAMESPACE_ID::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:ubii.devices.Device)
    MergeFrom(*source);
  }
}

void Device::MergeFrom(const Device& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:ubii.devices.Device)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  components_.MergeFrom(from.components_);
  tags_.MergeFrom(from.tags_);
  if (from.id().size() > 0) {

    id_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.id_);
  }
  if (from.name().size() > 0) {

    name_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.name_);
  }
  if (from.client_id().size() > 0) {

    client_id_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.client_id_);
  }
  if (from.description().size() > 0) {

    description_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.description_);
  }
  if (from.device_type() != 0) {
    _internal_set_device_type(from._internal_device_type());
  }
}

void Device::CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:ubii.devices.Device)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void Device::CopyFrom(const Device& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:ubii.devices.Device)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool Device::IsInitialized() const {
  return true;
}

void Device::InternalSwap(Device* other) {
  using std::swap;
  _internal_metadata_.Swap(&other->_internal_metadata_);
  components_.InternalSwap(&other->components_);
  tags_.InternalSwap(&other->tags_);
  id_.Swap(&other->id_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
    GetArenaNoVirtual());
  name_.Swap(&other->name_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
    GetArenaNoVirtual());
  client_id_.Swap(&other->client_id_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
    GetArenaNoVirtual());
  description_.Swap(&other->description_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
    GetArenaNoVirtual());
  swap(device_type_, other->device_type_);
}

::PROTOBUF_NAMESPACE_ID::Metadata Device::GetMetadata() const {
  return GetMetadataStatic();
}


// ===================================================================

void DeviceList::InitAsDefaultInstance() {
}
class DeviceList::_Internal {
 public:
};

DeviceList::DeviceList()
  : ::PROTOBUF_NAMESPACE_ID::Message(), _internal_metadata_(nullptr) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:ubii.devices.DeviceList)
}
DeviceList::DeviceList(const DeviceList& from)
  : ::PROTOBUF_NAMESPACE_ID::Message(),
      _internal_metadata_(nullptr),
      elements_(from.elements_) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  // @@protoc_insertion_point(copy_constructor:ubii.devices.DeviceList)
}

void DeviceList::SharedCtor() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&scc_info_DeviceList_proto_2fdevices_2fdevice_2eproto.base);
}

DeviceList::~DeviceList() {
  // @@protoc_insertion_point(destructor:ubii.devices.DeviceList)
  SharedDtor();
}

void DeviceList::SharedDtor() {
}

void DeviceList::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const DeviceList& DeviceList::default_instance() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&::scc_info_DeviceList_proto_2fdevices_2fdevice_2eproto.base);
  return *internal_default_instance();
}


void DeviceList::Clear() {
// @@protoc_insertion_point(message_clear_start:ubii.devices.DeviceList)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  elements_.Clear();
  _internal_metadata_.Clear();
}

const char* DeviceList::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    CHK_(ptr);
    switch (tag >> 3) {
      // repeated .ubii.devices.Device elements = 1;
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

::PROTOBUF_NAMESPACE_ID::uint8* DeviceList::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:ubii.devices.DeviceList)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // repeated .ubii.devices.Device elements = 1;
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
  // @@protoc_insertion_point(serialize_to_array_end:ubii.devices.DeviceList)
  return target;
}

size_t DeviceList::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:ubii.devices.DeviceList)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // repeated .ubii.devices.Device elements = 1;
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

void DeviceList::MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:ubii.devices.DeviceList)
  GOOGLE_DCHECK_NE(&from, this);
  const DeviceList* source =
      ::PROTOBUF_NAMESPACE_ID::DynamicCastToGenerated<DeviceList>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:ubii.devices.DeviceList)
    ::PROTOBUF_NAMESPACE_ID::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:ubii.devices.DeviceList)
    MergeFrom(*source);
  }
}

void DeviceList::MergeFrom(const DeviceList& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:ubii.devices.DeviceList)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  elements_.MergeFrom(from.elements_);
}

void DeviceList::CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:ubii.devices.DeviceList)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void DeviceList::CopyFrom(const DeviceList& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:ubii.devices.DeviceList)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool DeviceList::IsInitialized() const {
  return true;
}

void DeviceList::InternalSwap(DeviceList* other) {
  using std::swap;
  _internal_metadata_.Swap(&other->_internal_metadata_);
  elements_.InternalSwap(&other->elements_);
}

::PROTOBUF_NAMESPACE_ID::Metadata DeviceList::GetMetadata() const {
  return GetMetadataStatic();
}


// @@protoc_insertion_point(namespace_scope)
}  // namespace devices
}  // namespace ubii
PROTOBUF_NAMESPACE_OPEN
template<> PROTOBUF_NOINLINE ::ubii::devices::Device* Arena::CreateMaybeMessage< ::ubii::devices::Device >(Arena* arena) {
  return Arena::CreateInternal< ::ubii::devices::Device >(arena);
}
template<> PROTOBUF_NOINLINE ::ubii::devices::DeviceList* Arena::CreateMaybeMessage< ::ubii::devices::DeviceList >(Arena* arena) {
  return Arena::CreateInternal< ::ubii::devices::DeviceList >(arena);
}
PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>
