const express = require('express');
const router = express.Router();
const index = require('../Controller/index');

/* GET home page. */
router.get('/', index.principal);

router.get('/home', index.dashboard);

module.exports = router;
