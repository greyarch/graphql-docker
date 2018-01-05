import { mergeSchemas } from "graphql-tools";

import nodes from "./nodes";
import services from "./services";
import tasks from "./tasks";
import stacks from "./stacks";

const common = `
  scalar JSON
  scalar DateTime
  type Version { Index: Int! }
`;

const query = `
  type Query {
    nodes: [Node]
    services: [Service]
    tasks: [Task]
    stacks: [Stack]
  }
`;

export default [common, query, nodes, services, tasks, stacks].join("\n");
