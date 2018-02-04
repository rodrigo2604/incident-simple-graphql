const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

const mySchema = require('./src/schemas');
const {
  getIncidents,
  getEquipment,
  getSolution,
} = require('./src/resolvers')

// GraphQL schema
const schema = buildSchema(mySchema);

const rootValue = {
  incidents: getIncidents,
  equipment: getEquipment,
  solution: getSolution,
};

// Create an express server and a GraphQL endpoint
const app = express();
app.use('/graphql', express_graphql({
  schema,
  rootValue,
  graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
