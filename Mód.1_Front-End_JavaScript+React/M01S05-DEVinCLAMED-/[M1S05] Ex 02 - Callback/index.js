// Crie 2 funções, ambas recebem um número e retorna true ou false:
// - a primeira verifica se é par;
// - a segunda verifica se é ímpar.
// Em seguida crie uma função que recebe como parâmetros: um array de números e uma função callback.
// Essa função principal deverá ser capaz de filtrar os números e retornar um array de números filtrados (independente de qual seja a função callback).
// Dica: o filtro poderá ser de números ímpares ou pares.
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
function verificarPar(num) {
    if (num % 2 === 0) {
      return true;
    }
    return false;
  }
  function verificarImpar(num) {
    if (num % 2 === 1) {
      return true;
    }
    return false;
  }

  divPrincipal = document.getElementById("divPrincipal")
  divPrincipal.innerHTML = ("A Array de números completa é composta por: " + array1)
 
  let funcaoEscolhida;
  let filtroSelecionado = window.prompt("Por favor, escolha se deseja filtrar os números impares (digite 1) ou números pares (digite 2)")

  if (filtroSelecionado == 1){
    funcaoEscolhida = verificarImpar;
  } else if (filtroSelecionado == 2){
    funcaoEscolhida = verificarPar;
  } else {
    window.alert("Por favor, escolha apenas os números 1 ou 2, sua página será recarregada")
    location.reload();
}
//Criei uma terceira função que filtra uma array de números utilizando as funções Par/Impar
//Ela recebe o array como parametro e a função callback (isso significa que ao chamar a função o primeiro
//parametro deverá ser o array e o segundo uma das funções par/impar)  
  function filtrarNumeros(array, callback) {
    //Array que criei para receber os numeros filtrados
    let numerosFiltrados=[];
    //Fiz um for para passar por toda a array
    for(let i=0; i<array.length;i++){
      //Aqui eu fiz um IF citando o callback que foi chamado, com o elemento da array na posição i
      //Esse array[i] entra como parametro na função callback, se ela retornar true entra com .push na variavel numerosFiltrados
      if (callback(array[i]) == true){
        numerosFiltrados.push(array[i]);
      }
    }
    return numerosFiltrados;
  }
  //Para chamar, deve ser informado o parametro array e em seguida a função callback
  divPrincipal.innerHTML += ("</br>A Array de números filtrada é: "+ (filtrarNumeros(array1, funcaoEscolhida)))
  console.log(filtrarNumeros(array1, funcaoEscolhida));
