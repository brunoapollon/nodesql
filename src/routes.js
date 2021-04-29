const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');

const routes = express.Router();

//users routes
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

//address routes
routes.post('/users/:user_id/addresses', AddressController.store);
routes.get('/users/:user_id/addresses', AddressController.index);

module.exports = routes;