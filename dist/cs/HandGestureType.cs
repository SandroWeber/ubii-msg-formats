// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: proto/dataStructure/handGestureType.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Ubii.DataStructure {

  /// <summary>Holder for reflection information generated from proto/dataStructure/handGestureType.proto</summary>
  public static partial class HandGestureTypeReflection {

    #region Descriptor
    /// <summary>File descriptor for proto/dataStructure/handGestureType.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static HandGestureTypeReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Cilwcm90by9kYXRhU3RydWN0dXJlL2hhbmRHZXN0dXJlVHlwZS5wcm90bxIS",
            "dWJpaS5kYXRhU3RydWN0dXJlKmQKD0hhbmRHZXN0dXJlVHlwZRIICgRSRVNU",
            "EAASEgoORklOR0VSU19TUFJFQUQQARILCgdXQVZFX0lOEAISDAoIV0FWRV9P",
            "VVQQAxIICgRGSVNUEAQSDgoKRE9VQkxFX1RBUBAFYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(new[] {typeof(global::Ubii.DataStructure.HandGestureType), }, null, null));
    }
    #endregion

  }
  #region Enums
  public enum HandGestureType {
    [pbr::OriginalName("REST")] Rest = 0,
    [pbr::OriginalName("FINGERS_SPREAD")] FingersSpread = 1,
    [pbr::OriginalName("WAVE_IN")] WaveIn = 2,
    [pbr::OriginalName("WAVE_OUT")] WaveOut = 3,
    [pbr::OriginalName("FIST")] Fist = 4,
    [pbr::OriginalName("DOUBLE_TAP")] DoubleTap = 5,
  }

  #endregion

}

#endregion Designer generated code
