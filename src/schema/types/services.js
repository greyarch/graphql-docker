export default `
  type Service {
    ID: String!,
    Version: ServiceVersion,
    CreatedAt: String,
    UpdatedAt: String,
    Spec: ServiceSpec
    Endpoint: ServiceEndpoint
  }
  type ServiceVersion { Index: Int! }
  type ServiceSpec {
    Name: String,
    Labels: [String]
    TaskTemplate: ServiceTaskTemplate
    Mode: ServiceMode
    EndpointSpec: ServiceEndpointSpec
  }
  type ServiceTaskTemplate {
    ContainerSpec: ServiceContainerSpec
    Resources: ServiceResources
    Placement: ServicePlacement
    ForceUpdate: Int
    Runtime: String
  }
  type ServiceContainerSpec {
    Image: String,
    Args: [String],
    DNSConfig: ServiceDNSConfig,
    Isolation: String
  }
  type ServiceDNSConfig { _: String }
  type ServiceResources {
    Limits: ServiceResourceLimits,
    Reservations: ServiceResourceReservations
  }
  type ServiceResourceLimits { _: String }
  type ServiceResourceReservations { _: String }
  type ServicePlacement {
    Platforms: [ ServicePlacementPlatform ]
  }
  type ServicePlacementPlatform { Architecture: String, OS: String }
  type ServiceMode { Replicated: ServiceModeReplicated }
  type ServiceModeReplicated { Replicas: Int }
  type ServiceEndpointSpec { Mode: String }
  type ServiceEndpoint { Spec: Empty }

  type Empty { _: String }
`;
