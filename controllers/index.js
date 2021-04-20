const index_welcome = (req, res) => res.render('welcome')

const index_dashboard = (req, res) => 
res.render('dashboard', {
    name: req.user.name
})

module.exports = { index_welcome, index_dashboard }