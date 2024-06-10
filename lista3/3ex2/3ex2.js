/*2-Faça uma página para calcular quantas ferraduras são necessárias para equipar todos
os cavalos comprados para um haras.*/

let cavalos = document.querySelector("#cavalos");
let btCalcular = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function Ferraduras (){
    let completo = 4;
    let ipcavalos = parseInt(cavalos.value);
    let resultado = completo * ipcavalos;
    h3Resultado.innerHTML = "Para equipar todos os cavalos, serão necessárias "+resultado+" ferraduras";
}
btCalcular.onclick = function(){
    Ferraduras();
}