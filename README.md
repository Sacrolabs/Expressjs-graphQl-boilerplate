After Cloning the boilerplate
run npm i

server.js is main file 
to run the project => nodemon server.js in development

there are three folder [db , graphql , models]

folder db contains the code for database connection.
to change the database connection edit the connection uri in (.env)

folder graphql contains two more folder one is resolver and another is schema.
graphql works on these two.

folder model contains files for new table model
for creating the new table (in the form of mongoose.schema)

After creating the model we have to define the model in the (graphql => schema)
model in the graphql schema is define in the form type and the inputType

then in resolvers we define logic of return types.



