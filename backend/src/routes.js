const express = require('express');
const ongController = require('./controller/ongController');
const incidentsController = require('./controller/incidentsController');
const profileController = require('./controller/profileController');
const sessionController = require('./controller/sessionController');

const routes = express.Router();

routes.post('/session', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.post('/incidents', incidentsController.create);
routes.get('/incidents', incidentsController.index);
routes.delete('/incidents/:id', incidentsController.del);

routes.get('/profile', profileController.index);

module.exports = routes;