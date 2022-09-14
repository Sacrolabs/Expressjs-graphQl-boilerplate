const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const { buildSchema } = require('graphql');

const app = express()
dotenv.config()

const { connectDB } = require('./db');
const User = require('./models/User');

connectDB()
app.use(bodyParser.json())

app.use('/graphql', graphqlHTTP({
    schema: buildSchema(`
        type User {
            _id: ID!
            name: String!
            email: String!
        }

        input UserInput {
            name: String!
            email: String!
        }

        type RootQuery {
            users: [User!]!
        }

        type RootMutation {
            createUser(userInput: UserInput): User
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
        users: () => {
            return User.find()
            .then(users =>{
                return users.map(user=>{
                    return {...user._doc };
                });
            })
        },
        createUser: (args) => {
            const user = new User({
                name: args.userInput.name,
                email: args.userInput.email
            });
            return user
            .save()
            .then(result => {
                console.log(result);
                return { ...result._doc };
            }).catch(err => {
                console.log(err)
                return err
            });
        }
    },
    graphiql: true
}))

app.listen(process.env.PORT, () => {
    console.log(`App is runing on port ${process.env.PORT}`)
})

