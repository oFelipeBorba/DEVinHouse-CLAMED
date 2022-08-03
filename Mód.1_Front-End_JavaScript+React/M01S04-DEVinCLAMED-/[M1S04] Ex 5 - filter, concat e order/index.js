// Crie um código javascript que irá juntar os dois arrays abaixo e coloque esse array concatenado em outra variável:
// let array1 = [1,3,4,5,3,7];
// let array2 = [1,2,6,4,8,5];
// Após fazer a junção remova os itens que se repetem usando o .includes ou o .filter
// Após isso ordene por ordem crescente.

let array1 = [1, 3, 4, 5, 3, 7],
  array2 = [1, 2, 6, 4, 8, 5],
  meuArrayConcat,
  meuArrayReduzido,
  minhaDiv,
  itensAReduzir = [];

minhaDiv = document.getElementById("souUmaDiv");

//inserindo na minha variavel os dois valores das arrays, concatenando.
meuArrayConcat = array1.concat(array2);

//farei uma verificação, para saber se existe elemento duplicado dentro da array1 e array2, isso vai me gerar
//uma nova array1Reduzida
let array1Reduzida = [...new Set(array1)];

//fiz o mesmo para saber se tem duplicado na array2
let array2Reduzida = [...new Set(array2)];

//criei uma array concatenando os arrays já reduzidos, individuais.
meuArrayReduzido = array1Reduzida.concat(array2Reduzida);

//criei um for para passar por cada item da array, buscando os itens em comum da array1
//insiro em uma nova array esses itens que são iguais
array2.forEach(function (item) {
  //se na minha array1 conter o item "i" da array2 o includes vai retornar true, entao vou entrar no meu if
  if (array1.includes(item) == true) {
    //aqui eu estou introduzindo na minha array que vou usar para reduzir a concatenada apenas os
    //valores que são duplicados,fazendo push
    itensAReduzir.push(item);
  }
});

//excluo do meuArrayReduzido os valores que salvei no "itensAReduzir" usando .splice
itensAReduzir.forEach(function (item) {
  meuArrayReduzido.splice(meuArrayReduzido.indexOf(item), 1);
});

//coloco o arrayReduzido em ordem crescente
meuArrayReduzido.sort(function (a, b) {
  return a - b;
});

//apresento no html todas minhas arrays
minhaDiv.innerHTML += `Meu array1 é: ${array1}</br> Meu array2 é: ${array2}</br> Meu array concatenado é: ${meuArrayConcat}</br> Meu array reduzindo os itens duplicados, em ordem crescente, é: ${meuArrayReduzido}`;
