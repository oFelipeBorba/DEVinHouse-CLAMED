// Em um prompt capture o seu nome, idade e o sobrenome, após isso usando o template string junte para 
// a string abaixo.
// "Eu, nome sobrenome, possuo idade anos, e nasci em calculo do ano em que estamos - sua idade . "

let nome, sobrenome, idade;
nome = window.prompt("Por favor insira seu nome:");
sobrenome = window.prompt("Por favor insira seu sobrenome:");
idade = window.prompt("Por favor insira sua idade:");

document.querySelector("#souUmaDiv").innerHTML = `Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos de idade. Nasci no ano ${2022 - idade}`
