import shared from './shared';

export default `
  type Service {
    ${shared}
    Spec: ServiceSpec
    Endpoint: ServiceEndpoint
  }
  type ServiceSpec {
    Name: String,
    Labels: JSON
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
    DNSConfig: JSON,
    Isolation: String
  }
  type ServiceResources {
    Limits: JSON,
    Reservations: JSON
  }
  type ServicePlacement {
    Platforms: [ ServicePlacementPlatform ]
  }
  type ServicePlacementPlatform { Architecture: String, OS: String }
  type ServiceMode { Replicated: ServiceModeReplicated }
  type ServiceModeReplicated { Replicas: Int }
  type ServiceEndpointSpec { Mode: String }
  type ServiceEndpoint { Spec: JSON }
`;
