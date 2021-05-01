const telaBusca = {
    principal: function(req, res, next) {
    res.render('busca-pedido', { title: 'Express'});
    },
    busca: function(req,res){
        console.log(req.query);
    },
    adicionar: function(req, res, next) {
        res.render('add_pedido');
    },
    controle: function(req, res, next) {
        res.render('controle_fila');
    },
    painel: function(req, res, next) {
        res.render('painel_pedido');
    }
}

module.exports = telaBusca;