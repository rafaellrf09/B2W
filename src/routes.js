const { Router } = require('express');

const PlanetsController = require('./app/controllers/PlanetsController');

const routes = Router();

routes.get('/planets', PlanetsController.index);
routes.post('/planets', PlanetsController.store);

module.exports = routes;