const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const router = require('./app/routes');

const app = express();

const port = 8000;

app.use(bodyParser.json({ extended: true }));
MongoClient.connect(
  'mongodb://localhost:27017',
  (err, database) => {
    // if (err) console.log(err);
    const db = database.db('cpm-api');
    router(app, db);

    app.listen(port, () => {
      // console.log(`We are live on ${port}`);
    });
  },
);
