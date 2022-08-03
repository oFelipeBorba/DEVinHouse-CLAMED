// 3 - Crie uma função que recebe um array de números e retorna a quantidade de números pares e a quantidade
// de números ímpares. Em seguida imprima na tela uma string informando a quantidade de valores informados,
// os ímpares e os pares (ex: A quantidade informada foi _, a de valores pares foi _, e a de valores ímpares foi )

const meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var contadorPar = 0,
  contadorImpar = 0,
  valorProtegido = 0;
function receberArrayRetornaParImpar() {
  for (let i = 0; i < meuArray.length; i++) {
    valorProtegido = meuArray[i];
    if (valorProtegido % 2 == 0) {
      contadorPar++;
    } else if (valorProtegido % 2 != 0) {
      contadorImpar++;
    }
  }
  return [contadorPar, contadorImpar];
}
const result = receberArrayRetornaParImpar(meuArray);
alert(
  "O número total de itens do array é: " +
    meuArray.length +
    " o número de pares são: " +
    result[0] +
    " o número de impares são: " +
    result[1] +
    " sendo os elementos do meu array: " +
    meuArray
);
