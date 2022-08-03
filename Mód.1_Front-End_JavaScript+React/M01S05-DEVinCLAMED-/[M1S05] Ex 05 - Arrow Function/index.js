// Utilize o if ternário para construir uma função que recebe o número do dias e retorna se
// pertence a primeira ou a segunda quinzena

// condição ? true : false

const primeiraOuSegundaQuinzena = (dia) =>
  dia >= 16 ? "Pertence a segunda quinzena do mês" : "Pertence a primeira quinzena do mês";

console.log(primeiraOuSegundaQuinzena(4))
