// // Observe o array de objetos abaixo:
// // let arrayMusicas = [...]
// // primeiro altere todos os valores do atributo isGood que atualmente esta false para true
// // ate porque na lista somente possui músicas boas rsrsrsrs.
// // _Dica: utilize o .map para isso.
// // Após isso usando os conhecimentos do DOM imprima em uma lista não ordenada apenas os nomes das músicas
// // Extra(Não é obrigatório, mas reza a lenda de que quem fizer ganhará um pix de 500 reais):
// // Sua missão será ao clicar em algum desses nomes imprimir ou em tela toda a informação referente ao item
// // selecionado.

let arrayMusicas = [
    {
      nome: "Believer",
      banda: "Imagine Dragons",
      anoDeLancamento: 2017,
      isGood: false,
    },
    {
      nome: "Losing my Religion",
      banda: "R.E.M",
      anoDeLancamento: 1991,
      isGood: false,
    },
    {
      nome: "Duality",
      banda: "Slipknot",
      anoDeLancamento: 2004,
      isGood: false,
    },
    {
      nome: "Imagination",
      banda: "Foster the People",
      anoDeLancamento: 2019,
      isGood: false,
    },
    {
      nome: "Without me",
      banda: "Halsey",
      anoDeLancamento: 2018,
      isGood: false,
    },
    {
      nome: "DiE4u",
      banda: "Bring me the horizon",
      anoDeLancamento: 2021,
      isGood: false,
    },
    {
      nome: "Hail to the king",
      banda: "Avenged Sevenfold",
      anoDeLancamento: 2013,
      isGood: false,
    },
    {
      nome: "Rock you like a hurricane",
      banda: "Scorpions",
      anoDeLancamento: 1984,
      isGood: false,
    },
    {
      nome: "Misery business",
      banda: "Paramore",
      anoDeLancamento: 2007,
      isGood: false,
    },
    {
      nome: "Brianstorm",
      banda: "Arctic Monkeys",
      anoDeLancamento: 2007,
      isGood: false,
    },
  ],
  minhaDiv;

minhaDiv = document.getElementById("souUmaDiv");

minhaDiv.innerHTML = `<h2>Veja a lista completa de músicas 'boas':</h2>`;
//1.Solicito a ao documento a criação da UL (chamada criaUL)
var criaUL = document.createElement("UL");
//2.Configuro os atributos dessa UL 
criaUL.setAttribute("id", "minhaUL");
//3.Insiro na árvore usando o appendChild (pega o filho mais direto)
minhaDiv.appendChild(criaUL);

arrayMusicas.forEach(function (item, i) {
  arrayMusicas[i].isGood = true;
  //1.Solicito a ao documento a criação da LI (chamada criaLI)
  var criaLI = document.createElement("LI");
  //3.Insiro na árvore usando o appendChild (pega o filho mais direto)
  document.getElementById("minhaUL").appendChild(criaLI);
  //4.Pego a variavel que cria a LI e atribuo a ela o innerHTML para inserir o array[i].nome
  criaLI.innerHTML = item.nome;
});
