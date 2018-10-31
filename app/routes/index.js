const projectRoutes = require('./projectRoutes');

module.exports = (app, db) => {
  projectRoutes(app, db);
};
