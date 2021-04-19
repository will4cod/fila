const telaPainel = {
    principal: function(req, res, next) {
    res.render('painel', { title: 'Express'});
    }
}

module.exports = telaPainel;