const express = require('express');
const router = express.Router();
const atende = require('../Controller/atendente');

//rota para pagina principal apos logar 

router.get('/', atende.dashboard);

module.exports = router;
