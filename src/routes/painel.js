const express = require('express');
const router = express.Router();
const pedido = require('../Controller/pedido');

router.get('/', pedido.painel);

module.exports = router;