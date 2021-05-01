const config = {
    configuracao: function(req, res, next) {
        res.render('config_conta');
    },
    password: function(req, res, next) {
        res.render('change_password');
    },
    guiche: function(req, res, next) {
        res.render('guiches');
    }
}

module.exports = config;