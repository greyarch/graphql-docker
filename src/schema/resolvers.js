import docker from '../docker';

const fixLabels = node => {
  node.Spec.Labels = Object.entries(node.Spec.Labels).map(
    ([key, value]) => `${key}=${value}`,
  );
  return node;
};

const getDockerAttr = attr => docker[attr]().then(item => item.map(fixLabels));

export default {
  Query: {
    nodes: () => getDockerAttr('listNodes'),
    services: () => getDockerAttr('listServices'),
  },
};
