const express = require('express');
const router = express.Router();
const consulta = require('../Controller/consulta');
//rota para pagina principal apos logar 

router.get('/', consulta.entrada);

router.get('/pedidos/andamento', consulta.pedidosAndamento);

module.exports = router;
