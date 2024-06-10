/*4- Desenvolva uma página para ler o nome e a idade de uma pessoa, e exibir quantos dias
de vida ela possui. Considere sempre anos completos, e que um ano possui 365 dias.
Ex.: uma pessoa com 19 anos possui 6935 dias de vida; veja um exemplo de saída:
MARIA, VOCÊ JÁ VIVEU 6935 DIAS*/
let nome = document.querySelector("#nome");
let idade = document.querySelector("#idade")
let btcalcular = document.querySelector("#btcalcular");
let resultado = document.querySelector("#resultado");

function calcularDias(){
    let dias = idade.value * 365;
    resultado.textContent = `Olá ${nome.value}! Você já viveu ${dias} dias`;
}

btcalcular.onclick = function(){
    calcularDias();
}

/*Nesse exercício, a função foi simplificada.
declarei a variavel dias, já calculando a idade vezes 365, através de idade.value * 365;
com isso, na linha seguinte, já posso chamar a id que vai exibir a resposta final 
utilizando o símbolo de acento da craze (acento+shift e o cifrão com chaves para puxar a variável declarada na função.
a variável de nome precisa do .value 
já a dos dias não, pois ela já é calculada na função, só precisa puxar*/