// Crie uma função nomeada que recebe um array de elementos, imprima cada um dos elementos
// e em seguida retorne a quantidade de elementos no array (seu tamanho).


const meuArray = [0,1,2,3,4,5,6,7,8,9]
function receberArrayImprimirTamanho(array = []){
for(let i=0 ; i < meuArray.length ; i++){
    console.log("Este é o elemento da posição: "+ meuArray[i]);
}
return console.log("O número total de elementos do array é: "+meuArray.length)
}
receberArrayImprimirTamanho(meuArray);
