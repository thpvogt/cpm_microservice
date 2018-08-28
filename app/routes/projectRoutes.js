const DUMMY_INPUT = require('../data/project');
const generateProject = require('../services/cpmService');

module.exports = function(app, db) {
  app.post('/project', (req, res) => {
    const aux = generateProject(DUMMY_INPUT);
    res.send('Hello')
  });
};