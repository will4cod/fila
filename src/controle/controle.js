const dados = require('../model/consulta');

const regraConsulta = {
    pedidosAndamento: function() {
        return (
            dados.listaPedidosAndamento()
        )
    }
}

module.exports = regraConsulta;