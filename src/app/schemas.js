const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    email: ID!
    name: String
  }

  type Query {
    users: [User]
    user(email: ID!): User
  }

  input UserInput {
    email: String!
    name: String
  }

  type Mutation {
    createUser(data: UserInput!): User
    updateUser(email: ID!, data: UserInput!): Boolean
    deleteUser(email: ID!): Boolean
  }
`;

export default typeDefs;
