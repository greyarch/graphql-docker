import shared from "./shared";

export default `
  type Service {
    ${shared}
    Spec: ServiceSpec
    Endpoint: ServiceEndpoint
  }
  type ServiceSpec {
    Name: String,
    Labels: JSON
    Mode: ServiceMode
    TaskTemplate: ServiceTaskTemplate
    UpdateConfig: ServiceSpecRollbackUpdateConfig
    RollbackConfig: ServiceSpecRollbackUpdateConfig
    EndpointSpec: ServiceEndpointSpec
  }
  type ServiceTaskTemplate {
    ContainerSpec: ServiceContainerSpec
    Resources: ServiceResources
    RestartPolicy: ServiceTaskTemplateRestartPolicy
    Placement: ServicePlacement
    ForceUpdate: Int
    Runtime: String
  }
  type ServiceContainerSpec {
    Image: String,
    Args: [String],
    DNSConfig: JSON,
    Isolation: String
  }
  type ServiceResources {
    Limits: JSON,
    Reservations: JSON
  }
  type ServiceTaskTemplateRestartPolicy {
    Condition: String
    MaxAttempts: Int
  }
  type ServicePlacement {
    Platforms: [ ServicePlacementPlatform ]
  }
  type ServicePlacementPlatform { Architecture: String, OS: String }
  type ServiceMode { Replicated: ServiceModeReplicated }
  type ServiceModeReplicated { Replicas: Int }
  type ServiceEndpoint {
    Spec: ServiceEndpointSpec
    Ports: [ServiceEndpointPort]
    VirtualIPs: [ServiceEndpointVirtualIP]
  }
  type ServiceEndpointSpec {
    Mode: String
    Ports: [ServiceEndpointPort]
  }
  type ServiceEndpointPort {
    Protocol: String
    TargetPort: Int
    PublishedPort: Int
  }
  type ServiceEndpointVirtualIP {
    NetworkID: String
    Addr: String
  }
  type ServiceSpecRollbackUpdateConfig {
    Parallelism: Int
    Delay: Int
    FailureAction: String
    Monitor: Int
    MaxFailureRatio: Float
  }
`;
