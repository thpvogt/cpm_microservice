const DUMMY_INPUT = require('../data/project');
const generateProject = require('../services/cpmService');
const generateGraph = require('../services/graphService');

module.exports = (app) => {
  app.post('/project', (req, res) => {
    const aux = generateProject(DUMMY_INPUT);
    const graph = generateGraph(aux);
    res.send(graph);
  });
};
