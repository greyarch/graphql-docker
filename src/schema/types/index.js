import { mergeSchemas } from 'graphql-tools';

import nodes from './nodes';
import services from './services';

const common = `
  scalar JSON
  scalar DateTime
`;

const query = `
  type Query { nodes: [Node], services: [Service] }
`;

export default [common, query, nodes, services].join('\n');
