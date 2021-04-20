const express = require('express')
const router = express.Router()
const controller = require('../controllers/index')
const { ensureAuthenticated } = require('../config/auth')

//Welcome page
router.get('/', controller.index_welcome)

//Dashboard
router.get('/dashboard', ensureAuthenticated, controller.index_dashboard)

module.exports = router