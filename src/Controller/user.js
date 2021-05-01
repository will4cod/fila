const user = {
    registrar: function(req, res, next) {
        res.render('register');
    },
    principal: function(req, res, next) {
        res.send('teste');
    },
    login: function(req, res, next) {
        res.render('login');
    }
}

module.exports = user;