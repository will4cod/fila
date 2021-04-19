const bodyParser = require('body-parser');
const app = require('../app');

// app.use(bodyParser.urlencoded({extended:false}));

// app.use(bodyParser.json());

const telaResultadoPedido = {
    principal: function(req, res, next) {
    res.render('resultado-pedido', { title: 'Express'});
    },
    pedidoAtual: function(req,res) {
        console.log(req.body.codigo);
        //res.send('Buscando o pedido: ' + req.body.codigo);
        res.render('resultado-pedido',
        {numeroPedido: req.body.codigo, posicaoFila: 1 , tempoMedio: '10 min'}
        );
    }
}

module.exports = telaResultadoPedido;