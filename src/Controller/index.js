const telaPrincipal = {
    principal: function(req, res, next) {
        res.render('welcome');
    },
    dashboard: function(req, res, next) {
        res.render('dashboard', {name: 'Luiz Guilherme'});
    }
}

module.exports = telaPrincipal;