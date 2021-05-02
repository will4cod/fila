const telaPrincipal = {
    dashboard: function(req, res, next) {
        res.render('dashboard', {name: 'Luiz Guilherme'});
    }
}

module.exports = telaPrincipal;