const express = require('express');
const router = express.Router();
const telaBusca = require('../Controller/busca-pedido');

/* GET home page. */
router.get('/', telaBusca.principal);

module.exports = router;