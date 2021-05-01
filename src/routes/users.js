var express = require('express');
var router = express.Router();
const user = require('../Controller/user');

/* GET home page. */
router.get('/', user.principal);

router.get('/registrar', user.registrar);

router.get('/login', user.login);

router.post('/', user.registrar);

module.exports = router;
