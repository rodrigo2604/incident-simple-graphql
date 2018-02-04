const {
  incidents,
  equimpent,
  solutions,
 } = require('../data');

const getIncidents = () => incidents;

const getEquipment = ({ incidentId }) => equimpent.filter(entity => entity.incidentId === incidentId);

const getSolution = ({ incidentId, equipmentId }) => solutions.filter(solution => solution.incidentId === incidentId && solution.equipmentId === equipmentId)[0];

module.exports = {
  getIncidents,
  getEquipment,
  getSolution,
}
