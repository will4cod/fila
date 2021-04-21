const express = require('express');
const router = express.Router();
const pedido = require('../Controller/pedido');

router.get('/controle', pedido.controle);

router.get('/adicionar', pedido.adicionar);

router.get('/painel', pedido.painel);

module.exports = router;