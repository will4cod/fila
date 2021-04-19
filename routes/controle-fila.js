var express = require('express');
var router = express.Router();
const telaControle = require('../Controller/controle-fila');

/* GET home page. */
router.get('/', telaControle.principal);

module.exports = router;
