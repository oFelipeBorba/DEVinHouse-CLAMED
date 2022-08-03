// Utilizando o spread com a função de espalhar dados de um array, adicione todo o array2 dentro 
// do array1 porém o sua saída deverá ser [12, 43, 6, 2, 8, 5, 3, "1", "2", "3", "4"].

let array1 = [12,43,6,2,8,5,3];
let array2 = ["1", "2", "3", "4"];

array1.push(...array2);

document.querySelector("#souUmaDiv").innerHTML +=`Meu array1 é: 12,43,6,2,8,5,3 <br>`
document.querySelector("#souUmaDiv").innerHTML +=`Meu array2 é: ${array2}<br>`
document.querySelector("#souUmaDiv").innerHTML += `Meu array1 após acrescentar o array2 é: ${array1}`;