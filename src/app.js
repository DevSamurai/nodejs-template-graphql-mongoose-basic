import "./database";

import { ApolloServer } from "apollo-server";

import typeDefs from "./app/schemas";
import resolvers from "./app/resolvers";

module.exports = new ApolloServer({ typeDefs, resolvers });
