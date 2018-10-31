const path = require('path');
const { ObjectID } = require('mongodb');
const generateProject = require('../services/cpmService');
const graphService = require('../services/graphService');

module.exports = (app, db) => {
  app.post('/project', (req, res) => {
    const newProject = generateProject(req.body);
    db.collection('projects').insert(newProject);
    res.send('Success');
  });
  app.patch('/projects/:id', (req, res) => {
    res.send('Success');
  });
  app.get('/projects', (req, res) => {
    db.collection('projects')
      .find({})
      .project({ name: true })
      .toArray((err, result) => {
        if (err) throw err;
        res.send(result);
      });
  });
  app.get('/projects/parse_csv', (req, res) => {
    const newProject = generateProject(req.body);
    const graph = graphService.generateGraph(newProject.nodes);
  });
  app.get('/projects/:id', (req, res) => {
    db.collection('projects').findOne({ _id: ObjectID(req.params.id) }, (err, document) => {
      res.send(document);
    });
  });
  app.get('/projects/:id/digraph', (req, res) => {
    db.collection('projects').findOne({ _id: ObjectID(req.params.id) }, (err, document) => {
      const graph = graphService.generateGraph(document.nodes);
      res.send(graph);
    });
  });
  app.get('/projects/:id/graph_image', (req, res) => {
    console.log('send image');
    res.sendFile(path.join(__dirname, '../data/diagram.png'));
  });
};
