import { mergeSchemas } from 'graphql-tools';

import nodes from './nodes';
import services from './services';
import tasks from './tasks';

const common = `
  scalar JSON
  scalar DateTime
  type Version { Index: Int! }
`;

const query = `
  type Query { nodes: [Node], services: [Service], tasks: [Task] }
`;

export default [common, query, nodes, services, tasks].join('\n');
