const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../config/auth')
const controller = require('../controllers/pedidos')


//Pedidos add page
router.get('/add', ensureAuthenticated, controller.pedidos_add)

//Pedidos controller page
router.get('/controle', ensureAuthenticated, controller.pedidos_controle)

module.exports = router