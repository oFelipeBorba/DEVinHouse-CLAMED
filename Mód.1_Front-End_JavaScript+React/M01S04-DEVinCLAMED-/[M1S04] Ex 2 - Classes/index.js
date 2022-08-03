// Crie uma classe chamada Filme com os atributos nome, anoDeLancamento e diretor. 
// Fora do escopo dessa classe, instancie ela e preencha os campos acessando seus atributos por meio do ponto (.).

class Filme {
  nome;
  anoDeLancamento;
  diretor;
}

let asTrancasDaVovoCareca = new Filme();
asTrancasDaVovoCareca.nome = "As tranças da vovó careca";
asTrancasDaVovoCareca.anoDeLancamento = 1823;
asTrancasDaVovoCareca.diretor = "Luan Santana";

console.log(asTrancasDaVovoCareca);
console.log(asTrancasDaVovoCareca.diretor);
console.log(asTrancasDaVovoCareca.nome);
console.log(asTrancasDaVovoCareca.anoDeLancamento);