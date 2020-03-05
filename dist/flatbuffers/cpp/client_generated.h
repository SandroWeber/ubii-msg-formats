// automatically generated by the FlatBuffers compiler, do not modify


#ifndef FLATBUFFERS_GENERATED_CLIENT_UBII_CLIENTS_H_
#define FLATBUFFERS_GENERATED_CLIENT_UBII_CLIENTS_H_

#include "flatbuffers/flatbuffers.h"

namespace ubii {
namespace clients {

struct Client;

struct Client FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum FlatBuffersVTableOffset FLATBUFFERS_VTABLE_UNDERLYING_TYPE {
    VT_ID = 4,
    VT_NAME = 6,
    VT_TAGS = 8,
    VT_DESCRIPTION = 10,
    VT_DEVICES = 12
  };
  const flatbuffers::String *id() const {
    return GetPointer<const flatbuffers::String *>(VT_ID);
  }
  const flatbuffers::String *name() const {
    return GetPointer<const flatbuffers::String *>(VT_NAME);
  }
  const flatbuffers::Vector<flatbuffers::Offset<flatbuffers::String>> *tags() const {
    return GetPointer<const flatbuffers::Vector<flatbuffers::Offset<flatbuffers::String>> *>(VT_TAGS);
  }
  const flatbuffers::String *description() const {
    return GetPointer<const flatbuffers::String *>(VT_DESCRIPTION);
  }
  const flatbuffers::Vector<flatbuffers::Offset<flatbuffers::String>> *devices() const {
    return GetPointer<const flatbuffers::Vector<flatbuffers::Offset<flatbuffers::String>> *>(VT_DEVICES);
  }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyOffset(verifier, VT_ID) &&
           verifier.VerifyString(id()) &&
           VerifyOffset(verifier, VT_NAME) &&
           verifier.VerifyString(name()) &&
           VerifyOffset(verifier, VT_TAGS) &&
           verifier.VerifyVector(tags()) &&
           verifier.VerifyVectorOfStrings(tags()) &&
           VerifyOffset(verifier, VT_DESCRIPTION) &&
           verifier.VerifyString(description()) &&
           VerifyOffset(verifier, VT_DEVICES) &&
           verifier.VerifyVector(devices()) &&
           verifier.VerifyVectorOfStrings(devices()) &&
           verifier.EndTable();
  }
};

struct ClientBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_id(flatbuffers::Offset<flatbuffers::String> id) {
    fbb_.AddOffset(Client::VT_ID, id);
  }
  void add_name(flatbuffers::Offset<flatbuffers::String> name) {
    fbb_.AddOffset(Client::VT_NAME, name);
  }
  void add_tags(flatbuffers::Offset<flatbuffers::Vector<flatbuffers::Offset<flatbuffers::String>>> tags) {
    fbb_.AddOffset(Client::VT_TAGS, tags);
  }
  void add_description(flatbuffers::Offset<flatbuffers::String> description) {
    fbb_.AddOffset(Client::VT_DESCRIPTION, description);
  }
  void add_devices(flatbuffers::Offset<flatbuffers::Vector<flatbuffers::Offset<flatbuffers::String>>> devices) {
    fbb_.AddOffset(Client::VT_DEVICES, devices);
  }
  explicit ClientBuilder(flatbuffers::FlatBufferBuilder &_fbb)
        : fbb_(_fbb) {
    start_ = fbb_.StartTable();
  }
  ClientBuilder &operator=(const ClientBuilder &);
  flatbuffers::Offset<Client> Finish() {
    const auto end = fbb_.EndTable(start_);
    auto o = flatbuffers::Offset<Client>(end);
    return o;
  }
};

inline flatbuffers::Offset<Client> CreateClient(
    flatbuffers::FlatBufferBuilder &_fbb,
    flatbuffers::Offset<flatbuffers::String> id = 0,
    flatbuffers::Offset<flatbuffers::String> name = 0,
    flatbuffers::Offset<flatbuffers::Vector<flatbuffers::Offset<flatbuffers::String>>> tags = 0,
    flatbuffers::Offset<flatbuffers::String> description = 0,
    flatbuffers::Offset<flatbuffers::Vector<flatbuffers::Offset<flatbuffers::String>>> devices = 0) {
  ClientBuilder builder_(_fbb);
  builder_.add_devices(devices);
  builder_.add_description(description);
  builder_.add_tags(tags);
  builder_.add_name(name);
  builder_.add_id(id);
  return builder_.Finish();
}

inline flatbuffers::Offset<Client> CreateClientDirect(
    flatbuffers::FlatBufferBuilder &_fbb,
    const char *id = nullptr,
    const char *name = nullptr,
    const std::vector<flatbuffers::Offset<flatbuffers::String>> *tags = nullptr,
    const char *description = nullptr,
    const std::vector<flatbuffers::Offset<flatbuffers::String>> *devices = nullptr) {
  auto id__ = id ? _fbb.CreateString(id) : 0;
  auto name__ = name ? _fbb.CreateString(name) : 0;
  auto tags__ = tags ? _fbb.CreateVector<flatbuffers::Offset<flatbuffers::String>>(*tags) : 0;
  auto description__ = description ? _fbb.CreateString(description) : 0;
  auto devices__ = devices ? _fbb.CreateVector<flatbuffers::Offset<flatbuffers::String>>(*devices) : 0;
  return ubii::clients::CreateClient(
      _fbb,
      id__,
      name__,
      tags__,
      description__,
      devices__);
}

inline const ubii::clients::Client *GetClient(const void *buf) {
  return flatbuffers::GetRoot<ubii::clients::Client>(buf);
}

inline const ubii::clients::Client *GetSizePrefixedClient(const void *buf) {
  return flatbuffers::GetSizePrefixedRoot<ubii::clients::Client>(buf);
}

inline bool VerifyClientBuffer(
    flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<ubii::clients::Client>(nullptr);
}

inline bool VerifySizePrefixedClientBuffer(
    flatbuffers::Verifier &verifier) {
  return verifier.VerifySizePrefixedBuffer<ubii::clients::Client>(nullptr);
}

inline void FinishClientBuffer(
    flatbuffers::FlatBufferBuilder &fbb,
    flatbuffers::Offset<ubii::clients::Client> root) {
  fbb.Finish(root);
}

inline void FinishSizePrefixedClientBuffer(
    flatbuffers::FlatBufferBuilder &fbb,
    flatbuffers::Offset<ubii::clients::Client> root) {
  fbb.FinishSizePrefixed(root);
}

}  // namespace clients
}  // namespace ubii

#endif  // FLATBUFFERS_GENERATED_CLIENT_UBII_CLIENTS_H_