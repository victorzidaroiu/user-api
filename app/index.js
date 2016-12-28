import express from 'express';
import graphqlHTTP from 'express-graphql';
import dotenv from 'dotenv';
import schema from './graphql';

dotenv.config({ silent: true });
const app = express();
const graphqlEndpoint = '/graphql';

app.use(graphqlEndpoint, graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(process.env.PORT);

console.log(`Server started on port ${process.env.PORT}`);
console.log(`GraphQL endpoint: ${graphqlEndpoint}`);
