import GraphQLJSON from "graphql-type-json";
const { GraphQLDateTime } = require("graphql-iso-date");
import docker from "../docker";

const createStacks = services =>
  services.reduce((stacks, srv) => {
    const labels = srv.Spec.Labels;
    const stackName = labels["com.docker.stack.namespace"];

    if (!stacks[stackName]) {
      stacks[stackName] = {
        Name: stackName,
        Services: [srv]
      };
    } else {
      stacks[stackName].Services.push(srv);
    }

    return stacks;
  }, {});

export default {
  JSON: GraphQLJSON,
  DateTime: GraphQLDateTime,
  Query: {
    nodes: () => docker.listNodes(),
    services: () => docker.listServices(),
    tasks: () => docker.listTasks(),
    stacks: () => {
      return docker
        .listServices()
        .then(createStacks)
        .then(Object.values);
    }
  }
};
