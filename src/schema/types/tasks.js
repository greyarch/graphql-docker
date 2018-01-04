import shared from './shared';

export default `
  type Task {
    ${shared}
    Labels: JSON
    Spec: JSON
    ServiceID: String
    Slot: Int
    NodeID: String
    Status: TaskStatus
    DesiredState: String
    NetworksAttachments: [TaskNetworksAttachment]
  }
  type TaskStatus {
    Timestamp: DateTime
    State: String
    Message: String
    ContainerStatus: TaskContainerStatus
    PortStatus: JSON
  }
  type TaskContainerStatus {
    ContainerID: String
    PID: Int
  }
  type TaskNetworksAttachment {
    Network: JSON
    Addresses: [String]
  }
`;
