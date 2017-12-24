import docker from '../docker';

const fixLabels = node => {
  node.Spec.Labels = Object.entries(node.Spec.Labels).map(
    ([key, value]) => `${key}=${value}`,
  );
  return node;
};

export default {
  Query: {
    nodes: () => docker.listNodes().then(nodes => nodes.map(fixLabels)),
  },
};
