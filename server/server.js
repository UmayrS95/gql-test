import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers.js";
import { readFile } from 'node:fs/promises';

const typeDefs = await readFile('./server/schema.graphql', 'utf8');

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, { listen: { port: 9000 } });
console.log(`Server running at ${url}`);