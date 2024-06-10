let pao = document.querySelector("#pao");
let broa = document.querySelector("#broa");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularVlr(){
    let totalPao = parseFloat(pao.value * 0.12);
    let totalBroa = parseFloat(broa.value * 1.5);
    let poupanca = (totalPao + totalBroa) *0.1;
    resultado.textContent = `Foram arrecadados R$ ${totalPao.toFixed(2)} em pães. E R$ ${totalBroa.toFixed(2)} em broas. O valor a ir para a poupança é R$ ${poupanca.toFixed(2)}.`;
}

btCalcular.onclick = function(){
    calcularVlr();
}