//Escreva duas arrow functions que juntas possam imprimir tabuada de 0 a 10

//DICAS
//- A primeira deve imprimir a tabuada de um número
//- A segunda deve receber um numero e uma função, e realizar repetições 
//de 1 até o número informado
//- Use a primeira função como callback da segunda


let valorInformado = window.prompt(`Por favor, escolha até que número deseja receber sua tabuada: `);

const imprimeTabuada = (valor) => {
    let minhaDiv = document.querySelector('#divPrincipal');
    for (let i=0; i<=10 ;i++){
        minhaDiv.innerHTML +=  `${valor} * ${i} =  ${(valor * i )}</br>` ;
    }
}

const recebeValorParaCalculo = (num,callback) => {
    for (var i = 0; i <= num; i++) {
        callback(i);
      }
}

recebeValorParaCalculo(valorInformado,imprimeTabuada)

