module.exports = {
    ensureAuthenticated: function(req, res, next) {
        if(req.isAuthenticated()) {
            return next()
        }
        req.flash('error_msg', 'Faça login para ter acesso a essa página')
        res.redirect('/users/login')
    }
}