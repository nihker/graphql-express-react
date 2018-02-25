const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
    schema, // this is es6 and shortcut for schema: schema
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening port: 4000');
});