const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type User {
    _id: ID!
    name: String!
    email: String!
    password: String!
}

type Post {
    _id: ID!
    event: String!
}

input UserInput {
    name: String!
    email: String!
    password: String!

}

input PostInput {
    event: String!
}

type RootQuery {
    users: [User!]!
}

type RootMutation {
    createUser(userInput: UserInput): User
    createPost(postInput: PostInput): Post
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);