function iniciaModal(modalId) {
  const modal = document.getElementById(modalId);
  if(modal) {
  modal.classList.add("mostrar");
  modal.addEventListener('click', (e) => {
    if(e.target.id == modalId || e.target.className == 'fechar') {
      modal.classList.remove('mostrar');
    }
  });
}
}

const addPedidoLogo = document.querySelector('.addPedidoLogo');
const addPedidoLink = document.querySelector('.addPedidoLink')
addPedidoLogo.addEventListener('click', () => iniciaModal("modalAddPedidoContainer"));
addPedidoLink.addEventListener('click', () => iniciaModal("modalAddPedidoContainer"));


const controleFilaLogo = document.querySelector('.controleFilaLogo');
const controleFilaLink = document.querySelector('.controleFilaLink')
controleFilaLogo.addEventListener('click', () => iniciaModal("modalControleFilaContainer"));
controleFilaLink.addEventListener('click', () => iniciaModal("modalControleFilaContainer"));


const alterarGuicheLogo = document.querySelector('.alterarGuicheLogo');
const alterarGuicheLink = document.querySelector('.alterarGuicheLink')
alterarGuicheLogo.addEventListener('click', () => iniciaModal("modalAlterarGuicheContainer"));
alterarGuicheLink.addEventListener('click', () => iniciaModal("modalAlterarGuicheContainer"));