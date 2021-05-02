const consulta = require('../model/consulta');

const telaBusca = {
    busca: function(req, res, next) {
    res.render('busca_pedido', { title: 'Express'});
    },// Renderiza a tela de adicionar pedidos
    adicionar: function(req, res, next) {
        res.render('add_pedido');
    },// Renderiza a tela de controle fila
    controle: function(req, res, next) {
        res.render('controle_fila');
    },// Renderiza o painel de pedidos 
    painel: function(req, res, next) {
        res.render('painel_pedido');
    },// Retorna todos os pedidos 
    consultaTodos: function(req, res, next) {
        res.json(consulta.listaTodosPedidos());
    },// Retorna o pedido consultado
    consultaPedido: function(req, res, next) {
        const numPedido = req.params.id;
        res.json(consulta.buscaNumeroPedido(numPedido));
    },// Renderiza a tela de com o retorno do pedido 
    pedidoAtual: function(req,res) {
        const numPedido = Number(req.query.codigo);
        const pedido = consulta.buscaNumeroPedido(numPedido);
        console.log(consulta.pedidosAndamento(), numPedido);
        const posicao = consulta.posicaoFila(consulta.pedidosAndamento(), numPedido);
        const tempoMedioPorPedido = 10;
        const tempoMedio = (posicao * tempoMedioPorPedido);

        res.render('resultado_pedido',
        {
            numeroPedido: numPedido, 
            posicaoFila: posicao , 
            tempoMedioFila: tempoMedio, 
            itens: pedido.itens,
        }
        );
    }
}

module.exports = telaBusca;