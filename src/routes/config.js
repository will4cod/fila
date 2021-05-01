const express = require('express');
const router = express.Router();
const controller = require('../controller/config');

//Settings page
router.get('/', controller.configuracao);

//Chage password page
router.get('/senha', controller.password);

//Setting Guiches
router.get('/guiche', controller.guiche);

module.exports = router