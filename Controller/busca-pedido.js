const telaBusca = {
    principal: function(req, res, next) {
    res.render('busca-pedido', { title: 'Express'});
    },
    busca: function(req,res){
        console.log(req.query);
    }
}

module.exports = telaBusca;