const path = require('path');
const generateProject = require('../services/cpmService');
const generateGraph = require('../services/graphService');

module.exports = (app) => {
  app.post('/project', (req, res) => {
    const aux = generateProject(req.body);
    const graph = generateGraph(aux);
    // res.send(graph);
    res.sendFile(path.join(__dirname, '../data/diagram.png'));
  });
};
