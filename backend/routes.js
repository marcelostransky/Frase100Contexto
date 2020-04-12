const express = require('express');
const authenticated = require('./middleware/authenticated');

const MensagemController = require('./src/controller/MensagemContrller');
const UsuarioController = require('./src/controller/UsuarioController');
const SessionController = require('./src/controller/SessionController');

const routes = express.Router();

routes.get('/mensagens',MensagemController.index);
routes.get('/usuario',UsuarioController.index);

routes.post('/usuario', UsuarioController.create);
routes.post('/logar', SessionController.create);


module.exports = routes;