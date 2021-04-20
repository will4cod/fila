const configuracao = (req, res) => res.render('configuracoes/config_conta')

const password = (req, res) => res.render('configuracoes/change_password')

const guiches = (req, res) => res.render('configuracoes/guiches')

module.exports = { configuracao, password, guiches }