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
    Mode: JSON
    TaskTemplate: JSON
    UpdateConfig: JSON
    RollbackConfig: JSON
    EndpointSpec: JSON
  }
  type ServiceEndpoint {
    Spec: JSON
    Ports: [JSON]
    VirtualIPs: [JSON]
  }
`;
