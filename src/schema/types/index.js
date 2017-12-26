import { mergeSchemas } from 'graphql-tools';
import nodes from './nodes';
import services from './services';

const query = `
  type Query { nodes: [Node], services: [Service] }
`;

export default [query, nodes, services].join('');
