// Crie uma classe chamada Pessoa com os atributos nome, idade, cpf e anoAniversario. 
// Agora construa um método chamado podeDirigir dentro dessa classe para verificar se a idade é maior 
// ou menor que 18, se for maior ou igual a 18 o retorno desse método será true se não false. 
// Agora, fora dessa classe crie uma instância (usando o new ) 
// inicialize ela (usando o acesso a um atributo " . ") para uma variável const 
// e verifique o retorno com os seus dados em seus atributos.
class Pessoa {
  nome;
  idade;
  cpf;
  anoAniversario;

  podeDirigir(){
    if (this.idade >= 18){
      alert("Parabéns, você já pode dirigir")
      return true
    } else {
      alert("Infelizmente você ainda não pode dirigir")
      return false 
    }
  }
}
const naisa = new Pessoa()
naisa.nome = "Naísa";
naisa.idade = 25;
naisa.cpf = "123.456.789"
naisa.anoAniversario = 1997;

const result = naisa.podeDirigir();
console.log(result);
console.log(`A idade informada foi: ${naisa.idade} anos`);