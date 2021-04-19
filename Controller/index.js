const telaPrincipal = {
    principal: function(req, res, next) {
    res.render('index', { title: 'Express'});
    }
}

module.exports = telaPrincipal;