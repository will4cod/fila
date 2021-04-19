const telaLogin = {
    principal: function(req, res, next) {
    res.render('login', { title: 'Express'});
    }
}

module.exports = telaLogin;