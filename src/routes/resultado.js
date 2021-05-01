var express = require('express');
var router = express.Router();
const telaResultado = require('../Controller/resultado');

/* GET home page. */
router.get('/', telaResultado.principal);

router.post('/', telaResultado.pedidoAtual);

module.exports = router;
