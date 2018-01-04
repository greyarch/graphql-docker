import GraphQLJSON from 'graphql-type-json';
const { GraphQLDateTime } = require('graphql-iso-date');
import docker from '../docker';

export default {
  JSON: GraphQLJSON,
  DateTime: GraphQLDateTime,
  Query: {
    nodes: () => docker.listNodes(),
    services: () => docker.listServices(),
  },
};
