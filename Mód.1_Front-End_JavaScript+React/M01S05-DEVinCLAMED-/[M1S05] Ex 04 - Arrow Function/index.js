// Crie uma arrow function que recebe um array de números e retorne um array contendo apenas números positivos

const arrayTeste = [1, -5, 7, -8, 9, -25];
let arrayDePositivos = [],divPrincipal;
divPrincipal=document.getElementById("divPrincipal");
divPrincipal.innerHTML = `A array de teste é composta pelos números: ${arrayTeste}</br>`

const filtraNumerosPositivos = (array = []) => {
  array.forEach((item) =>{
    if(item >= 0){
      arrayDePositivos.push(item);
    }
  });
  return arrayDePositivos;
};
console.log(filtraNumerosPositivos(arrayTeste));

divPrincipal.innerHTML += `Os números positivos dessa array são: ${arrayDePositivos}</br>`
