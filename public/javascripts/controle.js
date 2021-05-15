console.log('oi');

async function loadPedidos(){
    const url = '/consulta/pedidos/andamento';
   
    const pedidos = await fetch(url).then((retorno) => retorno.json());

    renderPedidos(pedidos);
}

function renderPedidos (pedidos) {
    for (const pedido of pedidos) {
        renderTable(pedido);
        console.log(pedido);
    }
}

function renderTable (pedido){
    const tableElement = document.querySelector('.table tbody');
    tableElement.innerHTML += 
    `
    <tr class="table-light">
        <td>${pedido.numeroPedido}</td>
        <td>${pedido.nome}</td>
        <td>${pedido.guiche}</td>
        <td>
            <button type="button" class="btn btn-outline-success">Chamar</button>
            <button type="button" class="btn btn-outline-primary">Finalizar</button>
        </td>
    </tr>
    
    `;
}

loadPedidos();