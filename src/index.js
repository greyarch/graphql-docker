import { microGraphiql, microGraphql } from 'apollo-server-micro';
import micro, { send } from 'micro';
import { get, post, router } from 'microrouter';
import schema from './schema';

const graphqlHandler = microGraphql({ schema });
const graphiqlHandler = microGraphiql({ endpointURL: '/graphql' });

module.exports = router(
  get('/graphql', graphqlHandler),
  post('/graphql', graphqlHandler),
  get('/', graphiqlHandler),
  (req, res) => send(res, 404, 'not found'),
);
