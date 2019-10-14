// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: proto/sessions/session.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Ubii.Sessions {

  /// <summary>Holder for reflection information generated from proto/sessions/session.proto</summary>
  public static partial class SessionReflection {

    #region Descriptor
    /// <summary>File descriptor for proto/sessions/session.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static SessionReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Chxwcm90by9zZXNzaW9ucy9zZXNzaW9uLnByb3RvEg11YmlpLnNlc3Npb25z",
            "GiRwcm90by9pbnRlcmFjdGlvbnMvaW50ZXJhY3Rpb24ucHJvdG8aHnByb3Rv",
            "L3Nlc3Npb25zL2lvTWFwcGluZy5wcm90byLBAgoHU2Vzc2lvbhIKCgJpZBgB",
            "IAEoCRIMCgRuYW1lGAIgASgJEjQKDGludGVyYWN0aW9ucxgDIAMoCzIeLnVi",
            "aWkuaW50ZXJhY3Rpb25zLkludGVyYWN0aW9uEi0KC2lvX21hcHBpbmdzGAQg",
            "AygLMhgudWJpaS5zZXNzaW9ucy5JT01hcHBpbmcSDAoEdGFncxgFIAMoCRIT",
            "CgtkZXNjcmlwdGlvbhgGIAEoCRIPCgdhdXRob3JzGAcgAygJEjgKDHByb2Nl",
            "c3NfbW9kZRgIIAEoDjIiLnViaWkuc2Vzc2lvbnMuU2Vzc2lvbi5Qcm9jZXNz",
            "TW9kZSJJCgtQcm9jZXNzTW9kZRIWChJDWUNMRV9JTlRFUkFDVElPTlMQABIi",
            "Ch5JTkRJVklEVUFMX1BST0NFU1NfRlJFUVVFTkNJRVMQASI3CgtTZXNzaW9u",
            "TGlzdBIoCghlbGVtZW50cxgBIAMoCzIWLnViaWkuc2Vzc2lvbnMuU2Vzc2lv",
            "bmIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Ubii.Interactions.InteractionReflection.Descriptor, global::Ubii.Sessions.IoMappingReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Ubii.Sessions.Session), global::Ubii.Sessions.Session.Parser, new[]{ "Id", "Name", "Interactions", "IoMappings", "Tags", "Description", "Authors", "ProcessMode" }, null, new[]{ typeof(global::Ubii.Sessions.Session.Types.ProcessMode) }, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Ubii.Sessions.SessionList), global::Ubii.Sessions.SessionList.Parser, new[]{ "Elements" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class Session : pb::IMessage<Session> {
    private static readonly pb::MessageParser<Session> _parser = new pb::MessageParser<Session>(() => new Session());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<Session> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Ubii.Sessions.SessionReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Session() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Session(Session other) : this() {
      id_ = other.id_;
      name_ = other.name_;
      interactions_ = other.interactions_.Clone();
      ioMappings_ = other.ioMappings_.Clone();
      tags_ = other.tags_.Clone();
      description_ = other.description_;
      authors_ = other.authors_.Clone();
      processMode_ = other.processMode_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Session Clone() {
      return new Session(this);
    }

    /// <summary>Field number for the "id" field.</summary>
    public const int IdFieldNumber = 1;
    private string id_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Id {
      get { return id_; }
      set {
        id_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "name" field.</summary>
    public const int NameFieldNumber = 2;
    private string name_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Name {
      get { return name_; }
      set {
        name_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "interactions" field.</summary>
    public const int InteractionsFieldNumber = 3;
    private static readonly pb::FieldCodec<global::Ubii.Interactions.Interaction> _repeated_interactions_codec
        = pb::FieldCodec.ForMessage(26, global::Ubii.Interactions.Interaction.Parser);
    private readonly pbc::RepeatedField<global::Ubii.Interactions.Interaction> interactions_ = new pbc::RepeatedField<global::Ubii.Interactions.Interaction>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Ubii.Interactions.Interaction> Interactions {
      get { return interactions_; }
    }

    /// <summary>Field number for the "io_mappings" field.</summary>
    public const int IoMappingsFieldNumber = 4;
    private static readonly pb::FieldCodec<global::Ubii.Sessions.IOMapping> _repeated_ioMappings_codec
        = pb::FieldCodec.ForMessage(34, global::Ubii.Sessions.IOMapping.Parser);
    private readonly pbc::RepeatedField<global::Ubii.Sessions.IOMapping> ioMappings_ = new pbc::RepeatedField<global::Ubii.Sessions.IOMapping>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Ubii.Sessions.IOMapping> IoMappings {
      get { return ioMappings_; }
    }

    /// <summary>Field number for the "tags" field.</summary>
    public const int TagsFieldNumber = 5;
    private static readonly pb::FieldCodec<string> _repeated_tags_codec
        = pb::FieldCodec.ForString(42);
    private readonly pbc::RepeatedField<string> tags_ = new pbc::RepeatedField<string>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<string> Tags {
      get { return tags_; }
    }

    /// <summary>Field number for the "description" field.</summary>
    public const int DescriptionFieldNumber = 6;
    private string description_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Description {
      get { return description_; }
      set {
        description_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "authors" field.</summary>
    public const int AuthorsFieldNumber = 7;
    private static readonly pb::FieldCodec<string> _repeated_authors_codec
        = pb::FieldCodec.ForString(58);
    private readonly pbc::RepeatedField<string> authors_ = new pbc::RepeatedField<string>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<string> Authors {
      get { return authors_; }
    }

    /// <summary>Field number for the "process_mode" field.</summary>
    public const int ProcessModeFieldNumber = 8;
    private global::Ubii.Sessions.Session.Types.ProcessMode processMode_ = 0;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Ubii.Sessions.Session.Types.ProcessMode ProcessMode {
      get { return processMode_; }
      set {
        processMode_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as Session);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(Session other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Id != other.Id) return false;
      if (Name != other.Name) return false;
      if(!interactions_.Equals(other.interactions_)) return false;
      if(!ioMappings_.Equals(other.ioMappings_)) return false;
      if(!tags_.Equals(other.tags_)) return false;
      if (Description != other.Description) return false;
      if(!authors_.Equals(other.authors_)) return false;
      if (ProcessMode != other.ProcessMode) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Id.Length != 0) hash ^= Id.GetHashCode();
      if (Name.Length != 0) hash ^= Name.GetHashCode();
      hash ^= interactions_.GetHashCode();
      hash ^= ioMappings_.GetHashCode();
      hash ^= tags_.GetHashCode();
      if (Description.Length != 0) hash ^= Description.GetHashCode();
      hash ^= authors_.GetHashCode();
      if (ProcessMode != 0) hash ^= ProcessMode.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      if (Id.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(Id);
      }
      if (Name.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(Name);
      }
      interactions_.WriteTo(output, _repeated_interactions_codec);
      ioMappings_.WriteTo(output, _repeated_ioMappings_codec);
      tags_.WriteTo(output, _repeated_tags_codec);
      if (Description.Length != 0) {
        output.WriteRawTag(50);
        output.WriteString(Description);
      }
      authors_.WriteTo(output, _repeated_authors_codec);
      if (ProcessMode != 0) {
        output.WriteRawTag(64);
        output.WriteEnum((int) ProcessMode);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Id.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Id);
      }
      if (Name.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Name);
      }
      size += interactions_.CalculateSize(_repeated_interactions_codec);
      size += ioMappings_.CalculateSize(_repeated_ioMappings_codec);
      size += tags_.CalculateSize(_repeated_tags_codec);
      if (Description.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Description);
      }
      size += authors_.CalculateSize(_repeated_authors_codec);
      if (ProcessMode != 0) {
        size += 1 + pb::CodedOutputStream.ComputeEnumSize((int) ProcessMode);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(Session other) {
      if (other == null) {
        return;
      }
      if (other.Id.Length != 0) {
        Id = other.Id;
      }
      if (other.Name.Length != 0) {
        Name = other.Name;
      }
      interactions_.Add(other.interactions_);
      ioMappings_.Add(other.ioMappings_);
      tags_.Add(other.tags_);
      if (other.Description.Length != 0) {
        Description = other.Description;
      }
      authors_.Add(other.authors_);
      if (other.ProcessMode != 0) {
        ProcessMode = other.ProcessMode;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            Id = input.ReadString();
            break;
          }
          case 18: {
            Name = input.ReadString();
            break;
          }
          case 26: {
            interactions_.AddEntriesFrom(input, _repeated_interactions_codec);
            break;
          }
          case 34: {
            ioMappings_.AddEntriesFrom(input, _repeated_ioMappings_codec);
            break;
          }
          case 42: {
            tags_.AddEntriesFrom(input, _repeated_tags_codec);
            break;
          }
          case 50: {
            Description = input.ReadString();
            break;
          }
          case 58: {
            authors_.AddEntriesFrom(input, _repeated_authors_codec);
            break;
          }
          case 64: {
            processMode_ = (global::Ubii.Sessions.Session.Types.ProcessMode) input.ReadEnum();
            break;
          }
        }
      }
    }

    #region Nested types
    /// <summary>Container for nested types declared in the Session message type.</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static partial class Types {
      public enum ProcessMode {
        [pbr::OriginalName("CYCLE_INTERACTIONS")] CycleInteractions = 0,
        [pbr::OriginalName("INDIVIDUAL_PROCESS_FREQUENCIES")] IndividualProcessFrequencies = 1,
      }

    }
    #endregion

  }

  public sealed partial class SessionList : pb::IMessage<SessionList> {
    private static readonly pb::MessageParser<SessionList> _parser = new pb::MessageParser<SessionList>(() => new SessionList());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<SessionList> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Ubii.Sessions.SessionReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public SessionList() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public SessionList(SessionList other) : this() {
      elements_ = other.elements_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public SessionList Clone() {
      return new SessionList(this);
    }

    /// <summary>Field number for the "elements" field.</summary>
    public const int ElementsFieldNumber = 1;
    private static readonly pb::FieldCodec<global::Ubii.Sessions.Session> _repeated_elements_codec
        = pb::FieldCodec.ForMessage(10, global::Ubii.Sessions.Session.Parser);
    private readonly pbc::RepeatedField<global::Ubii.Sessions.Session> elements_ = new pbc::RepeatedField<global::Ubii.Sessions.Session>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Ubii.Sessions.Session> Elements {
      get { return elements_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as SessionList);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(SessionList other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if(!elements_.Equals(other.elements_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      hash ^= elements_.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      elements_.WriteTo(output, _repeated_elements_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      size += elements_.CalculateSize(_repeated_elements_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(SessionList other) {
      if (other == null) {
        return;
      }
      elements_.Add(other.elements_);
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            elements_.AddEntriesFrom(input, _repeated_elements_codec);
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
