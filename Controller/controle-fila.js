const telaControle = {
    principal: function(req, res, next) {
    res.render('controle-fila', { title: 'Express'});
    }
}

module.exports = telaControle;