/*1- A imobiliária Imóbilis vende apenas terrenos retangulares. Faça uma página para ler as
dimensões de um terreno e depois exibir a área do terreno.*/
let medida1 = document.querySelector("#medida1");
let medida2 = document.querySelector("#medida2");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function metroQuadrado(){
    let comprimento = Number(medida1.value);
    let largura = Number(medida2.value);
    let metroqdd = comprimento*largura;
    h3Resultado.innerHTML = "O terreno tem "+metroqdd+" metros quadrados."
}

btCalcular.onclick = function(){
    metroQuadrado();
}