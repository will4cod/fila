const express = require('express');
const router = express.Router();
const pedido = require('../Controller/pedido');
const pedidos = require('../model/dados');

router.get('/controle', pedido.controle);

router.get('/adicionar', pedido.adicionar);

router.get('/consulta/todos', pedido.consultaTodos);

router.get('/consulta/:id', pedido.consultaPedido);

router.get('/busca', pedido.busca);

router.get('/resultado', pedido.pedidoAtual);


module.exports = router;