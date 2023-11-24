import { ApolloServer } from "@apollo/server";
import { resolvers } from "./resolvers.js";
import { readFile } from 'node:fs/promises';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';

const PORT = 9000;

const app = express();

const typeDefs = await readFile('./server/schema.graphql', 'utf8');

const apolloServer = new ApolloServer({ typeDefs, resolvers });
await apolloServer.start();
app.use('/graphql', cors(), express.json(), expressMiddleware(apolloServer));

app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
});