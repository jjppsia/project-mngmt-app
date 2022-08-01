require('dotenv').config();
require('colors');
const cors = require('cors');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDb = require('./config/db');
const port = process.env.PORT || 5000;

const app = express();
// Connect to database
connectDb();
// Use cors
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(port, console.log(`Server running of port ${port}`));
