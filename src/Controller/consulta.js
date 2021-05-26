const regra = require('../controle/controle');

const inicial = {
    entrada: function(req, res, next) {
        res.send('ola');
    },
    pedidosAndamento: function(req, res , next) {
        res.json(regra.pedidosAndamento());
    }
}

module.exports = inicial;