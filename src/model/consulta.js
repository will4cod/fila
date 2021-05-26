const pedidos = require('./dados');
const { format } = require('date-fns');
const { json } = require('body-parser');

const consultaDados = {
    //Retorna toda a lista de pedidos 
    listaTodosPedidos: function(){
        const listaPedidos = pedidos;
        return(
            pedidos
        )
    },//Retorna a lista de pedidos com a data atual
    listaPedidosDeHoje: function(){
        const diaAtual = format(new Date(), 'dd/MM/yyyy');
        const pedidos = this.listaTodosPedidos();
        const listaPedidos = pedidos.filter((pedido)=> {
            if(pedido.data == diaAtual){
                return(pedido);
            }
        })

        return(listaPedidos);
    },//busca por numero de pedido na base geral
    buscaNumeroPedido: function(numPedido){
        const pedidoEncontrado = this.listaTodosPedidos().find(pedido => pedido.numeroPedido == numPedido)
        return pedidoEncontrado;
    },//Retorna um array com os numeros dos pedidos de hoje em andamento
    pedidosAndamento: function(){
        const pedidosHoje = this.listaPedidosDeHoje();
        const pedidos = pedidosHoje.map((pedido) => {
            if(pedido.status == 'andamento'){
                return pedido.numeroPedido;
            }
        })

        return pedidos;

    },//Retorna a posição da fila 
    posicaoFila: function(arrayPedidos, pedido){
        const posicao = arrayPedidos.indexOf(pedido);
        if(posicao === -1){
            return -1;
        }else{
            return posicao + 1;
        }
    },
    listaPedidosAndamento: function(){
        const pedidos = this.listaTodosPedidos();

        const listaFiltrada = pedidos.filter((array) => array.status === 'andamento');

        return listaFiltrada;
    }
}

//console.log(consultaDados.posicaoFila(consultaDados.pedidosAndamento(),8));
module.exports = consultaDados;