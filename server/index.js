require('dotenv').config();
require('colors');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { graphql } = require('graphql');
const schema = require('./schema/schema');
const connectDb = require('./config/db');
const port = process.env.PORT || 3000;

const app = express();

// Connect to database
connectDb();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log(`Server running of port ${port}`));
