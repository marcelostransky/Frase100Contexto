const express = require('express');

const MensagemController = require('./src/controller/MensagemContrller');

const routes = express.Router();

routes.get('/mensagens',MensagemController.index);


module.exports = routes;