var express = require('express');
var router = express.Router();
const telaLogin = require('../Controller/login');

/* GET home page. */
router.get('/', telaLogin.principal);

router.post('/', telaLogin.principal)

module.exports = router;
