// Construa uma função que irá verificar se um valor passado pelo parâmetro é par. Construa as
// validações dentro de uma promise para que caso seja uma par retorne para o then a mensagem
// "Número validado é par”.
// Caso o valor seja impar, retorne para o catch a mensagem “Error: número informado é impar”.

confereNumPar = (num) => {
  const validaPar = new Promise((resolve, reject) => {
    if (num % 2 == 0) {
      resolve(`Número informado é par.`);
    } else {
      reject(`Número informado é impar.`);
    }
  });
  validaPar
    .then((validado) => {
      document.querySelector("#souUmaDiv").innerHTML = validado;
    })
    .catch((err) => {
      document.querySelector("#souUmaDiv").innerHTML = err;
    });
};

confereNumPar(window.prompt(`Informe um número para saber se é par ou impar.`));
