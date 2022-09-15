const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const app = express()
dotenv.config()

const { connectDB } = require('./db');
const graphqlSchema = require('./graphql/schema/index')
const graphqlResolvers = require('./graphql/resolvers/index')

connectDB()
app.use(bodyParser.json())

app.use('/api', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true
}))

app.listen(process.env.PORT, () => {
    console.log(`App is runing on port ${process.env.PORT}`)
})

