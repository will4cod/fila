const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../config/auth')
const controller = require('../controllers/configuracao')

//Settings page
router.get('/config', ensureAuthenticated, controller.configuracao)

//Chage password page
router.get('/password', ensureAuthenticated, controller.password)

//Setting Guiches
router.get('/guiches', ensureAuthenticated, controller.guiches)

module.exports = router