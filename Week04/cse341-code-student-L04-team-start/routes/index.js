const routes = require('express').Router();
const temple = require('./temple');

routes.use('/temples', temple);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'http://localhost:8080/',
    };
    res.send(docData);
  })
);

module.exports = routes;
