var express = require('express');
var router = express.Router();
const telaPainel = require('../Controller/painel');

/* GET home page. */
router.get('/', telaPainel.principal);

module.exports = router;
