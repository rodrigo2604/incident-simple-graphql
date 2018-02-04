const Schema = `
  type Query {
    incidents: [Incident]
    equipment(incidentId: Int!): [Equipment]
    solution(incidentId: Int!, equipmentId: Int!): Solution
  },

  type Incident {
    id: Int!
    name: String
    priority: Int
  },

  type Solution {
    id: Int!
    equipmentId: Int
    incidentId: Int
    description: String
    contact: String
    manual: String
  },

  type Equipment {
    id: Int!
    name: String,
    description: String
  }
`;

module.exports = Schema;
