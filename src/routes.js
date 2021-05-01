const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');

const routes = express.Router();

//users routes
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.put('/users/:user_id', UserController.update);
//address routes
routes.post('/users/:user_id/addresses', AddressController.store);
routes.get('/users/:user_id/addresses', AddressController.index);
routes.put('/users/:user_id/:address_id/addresses', AddressController.update);
//Techs routes
routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs', TechController.delete);

//report routes
routes.get('/report', ReportController.show);


module.exports = routes;