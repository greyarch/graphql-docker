import { mergeSchemas } from 'graphql-tools';
import nodes from './nodes';

const query = `
  type Query { nodes: [Node] }
`;

export default [query, nodes].join('');
