// automatically generated by the FlatBuffers compiler, do not modify


#ifndef FLATBUFFERS_GENERATED_OBJECT2D_UBII_DATASTRUCTURES_H_
#define FLATBUFFERS_GENERATED_OBJECT2D_UBII_DATASTRUCTURES_H_

#include "flatbuffers/flatbuffers.h"

#include "pose2d_generated.h"
#include "vector2_generated.h"

namespace ubii {
namespace dataStructures {

struct Object2D;

struct Object2D FLATBUFFERS_FINAL_CLASS : private flatbuffers::Table {
  enum FlatBuffersVTableOffset FLATBUFFERS_VTABLE_UNDERLYING_TYPE {
    VT_ID = 4,
    VT_NAME = 6,
    VT_POSE = 8,
    VT_SIZE = 10,
    VT_USER_DATA_JSON = 12
  };
  const flatbuffers::String *id() const {
    return GetPointer<const flatbuffers::String *>(VT_ID);
  }
  const flatbuffers::String *name() const {
    return GetPointer<const flatbuffers::String *>(VT_NAME);
  }
  const Pose2D *pose() const {
    return GetPointer<const Pose2D *>(VT_POSE);
  }
  const Vector2 *size() const {
    return GetStruct<const Vector2 *>(VT_SIZE);
  }
  const flatbuffers::String *user_data_json() const {
    return GetPointer<const flatbuffers::String *>(VT_USER_DATA_JSON);
  }
  bool Verify(flatbuffers::Verifier &verifier) const {
    return VerifyTableStart(verifier) &&
           VerifyOffset(verifier, VT_ID) &&
           verifier.VerifyString(id()) &&
           VerifyOffset(verifier, VT_NAME) &&
           verifier.VerifyString(name()) &&
           VerifyOffset(verifier, VT_POSE) &&
           verifier.VerifyTable(pose()) &&
           VerifyField<Vector2>(verifier, VT_SIZE) &&
           VerifyOffset(verifier, VT_USER_DATA_JSON) &&
           verifier.VerifyString(user_data_json()) &&
           verifier.EndTable();
  }
};

struct Object2DBuilder {
  flatbuffers::FlatBufferBuilder &fbb_;
  flatbuffers::uoffset_t start_;
  void add_id(flatbuffers::Offset<flatbuffers::String> id) {
    fbb_.AddOffset(Object2D::VT_ID, id);
  }
  void add_name(flatbuffers::Offset<flatbuffers::String> name) {
    fbb_.AddOffset(Object2D::VT_NAME, name);
  }
  void add_pose(flatbuffers::Offset<Pose2D> pose) {
    fbb_.AddOffset(Object2D::VT_POSE, pose);
  }
  void add_size(const Vector2 *size) {
    fbb_.AddStruct(Object2D::VT_SIZE, size);
  }
  void add_user_data_json(flatbuffers::Offset<flatbuffers::String> user_data_json) {
    fbb_.AddOffset(Object2D::VT_USER_DATA_JSON, user_data_json);
  }
  explicit Object2DBuilder(flatbuffers::FlatBufferBuilder &_fbb)
        : fbb_(_fbb) {
    start_ = fbb_.StartTable();
  }
  Object2DBuilder &operator=(const Object2DBuilder &);
  flatbuffers::Offset<Object2D> Finish() {
    const auto end = fbb_.EndTable(start_);
    auto o = flatbuffers::Offset<Object2D>(end);
    return o;
  }
};

inline flatbuffers::Offset<Object2D> CreateObject2D(
    flatbuffers::FlatBufferBuilder &_fbb,
    flatbuffers::Offset<flatbuffers::String> id = 0,
    flatbuffers::Offset<flatbuffers::String> name = 0,
    flatbuffers::Offset<Pose2D> pose = 0,
    const Vector2 *size = 0,
    flatbuffers::Offset<flatbuffers::String> user_data_json = 0) {
  Object2DBuilder builder_(_fbb);
  builder_.add_user_data_json(user_data_json);
  builder_.add_size(size);
  builder_.add_pose(pose);
  builder_.add_name(name);
  builder_.add_id(id);
  return builder_.Finish();
}

inline flatbuffers::Offset<Object2D> CreateObject2DDirect(
    flatbuffers::FlatBufferBuilder &_fbb,
    const char *id = nullptr,
    const char *name = nullptr,
    flatbuffers::Offset<Pose2D> pose = 0,
    const Vector2 *size = 0,
    const char *user_data_json = nullptr) {
  auto id__ = id ? _fbb.CreateString(id) : 0;
  auto name__ = name ? _fbb.CreateString(name) : 0;
  auto user_data_json__ = user_data_json ? _fbb.CreateString(user_data_json) : 0;
  return ubii::dataStructures::CreateObject2D(
      _fbb,
      id__,
      name__,
      pose,
      size,
      user_data_json__);
}

inline const ubii::dataStructures::Object2D *GetObject2D(const void *buf) {
  return flatbuffers::GetRoot<ubii::dataStructures::Object2D>(buf);
}

inline const ubii::dataStructures::Object2D *GetSizePrefixedObject2D(const void *buf) {
  return flatbuffers::GetSizePrefixedRoot<ubii::dataStructures::Object2D>(buf);
}

inline bool VerifyObject2DBuffer(
    flatbuffers::Verifier &verifier) {
  return verifier.VerifyBuffer<ubii::dataStructures::Object2D>(nullptr);
}

inline bool VerifySizePrefixedObject2DBuffer(
    flatbuffers::Verifier &verifier) {
  return verifier.VerifySizePrefixedBuffer<ubii::dataStructures::Object2D>(nullptr);
}

inline void FinishObject2DBuffer(
    flatbuffers::FlatBufferBuilder &fbb,
    flatbuffers::Offset<ubii::dataStructures::Object2D> root) {
  fbb.Finish(root);
}

inline void FinishSizePrefixedObject2DBuffer(
    flatbuffers::FlatBufferBuilder &fbb,
    flatbuffers::Offset<ubii::dataStructures::Object2D> root) {
  fbb.FinishSizePrefixed(root);
}

}  // namespace dataStructures
}  // namespace ubii

#endif  // FLATBUFFERS_GENERATED_OBJECT2D_UBII_DATASTRUCTURES_H_