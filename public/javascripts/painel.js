//const datafns = require('date-fns');
console.log('ola');

let ultimosPedidos = [];

function ajustarDataHora(){
    let date = new Date();
    let horaAtual = `Hora: ${date.getHours()}:${date.getMinutes()}`;
    document.querySelector('.info p:first-child').innerText = horaAtual;
    let dataAtual = `Hoje: ${date.getUTCDate()}/${date.getUTCMonth()+1}/${date.getUTCFullYear()}`;
    document.querySelector('.info p:last-child').innerText = dataAtual;
    console.log(dataAtual);
}

ajustarDataHora();

function nomePainel(nome) {
    if(nome){
        document.querySelector('.senha-atual p').innerText = `Fila ${nome}`
    }
}

function chamarSenha( senha, guiche){
    document.querySelector('.senha-atual h1').innerText = senha;
    document.querySelector('.guiche-atual h2').innerText = guiche;
}

function init(){
    nomePainel();
}

init()