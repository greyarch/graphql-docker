import sharedTypes from './shared';

export default `
  type Node {
    ${sharedTypes}
    Spec: NodeSpec
    Description: NodeDescription
    Status: NodeStatus
    ManagerStatus: NodeManagerStatus
  }
  type NodeVersion { Index: Int! }
  type NodeSpec { Labels: JSON, Role: String, Availability: String }
  type NodeStatus { State: String, Addr: String }
  type NodeDescription {
    Hostname: String,
    Platform: NodeDescPlatform,
    Resources: NodeDescResources,
    Engine: NodeDescEngine,
    TLSInfo: NodeDescTLSInfo,
  }
  type NodeDescPlatform { Architecture: String, OS: String }
  type NodeDescResources { NanoCPUs: Float, MemoryBytes: Float }
  type NodeDescEngine { EngineVersion: String, Plugins: [ NodeDescEnginePlugin ] }
  type NodeDescEnginePlugin { Type: String, Name: String }
  type NodeDescTLSInfo { TrustRoot: String, CertIssuerSubject: String, CertIssuerPublicKey: String }
  type NodeManagerStatus { Leader: Boolean, Reachability: String, Addr: String }
`;
