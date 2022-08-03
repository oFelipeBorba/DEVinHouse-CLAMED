// Crie uma função não nomeada que recebe um número e devolva uma string dizendo se é par ou ímpar.

var receberNumeroDevolveString = function (num){
if (num % 2 == 0){
    return console.log('O valor informado é par')
} else if (num % 2 == 1) {
    return console.log('O valor informado é impar')
}else {
    return alert("Por favor informe apenas números")
}
}
receberNumeroDevolveString(window.prompt("Informe um número para descobrir se ele é par ou impar"));

