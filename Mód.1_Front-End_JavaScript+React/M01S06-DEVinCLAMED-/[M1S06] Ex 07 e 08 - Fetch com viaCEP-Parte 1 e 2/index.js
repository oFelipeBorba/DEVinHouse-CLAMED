// Crie uma página html para buscar o endereço através do cep contendo:
// 1 input para receber o CEP
// 1 button para buscar o endereço
// Crie uma função assíncrona que deve realizar o fetch do endereço do cep
// Utilize este endpoint: https://viacep.com.br/ws/01001000/json/
// Substitua o 01001000 pelo cep digitado no input
// Faça a chamada utilizando Fetch e aguarde o resultado
// Adicione no button o evento de click para chamar a função criada.
// Caso a api retorne sucesso deve ser adicionado um elemento <p> com o endereço formatado ex: logradouro, complemento - bairro - localidade/uf
// Quando o usuário clicar no botão de buscar sem ter informado um valor no input exibir modal de alerta (alert) informando que o campo precisa ser preenchido
// Quando o usuário preencher o campo com menos ou mais de 8 caracteres deve ser exibido modal de alerta (alert) informando que o campo foi preenchido com um cep inválido
// Em ambos os casos à cima não deve ser realizada a consulta na api de cep

let realizaPesquisa, meuCEP = "", btn;

btn = document.querySelector("#btnEnviaCep");
btn.addEventListener("click", recebeInfoDeCep);

function recebeInfoDeCep() {
  meuCEP = document.querySelector("#enviaCep").value;
  realizaPesquisa = `https://viacep.com.br/ws/${meuCEP}/json/`;

  const options = {
    method: "GET",
  };
  fetch(realizaPesquisa, options)
    .then((response) => {
      return response.json();
    })
    .then((infoDoCEP) => {
      console.log(infoDoCEP);
      let divInfo = document.querySelector("#mostraInfoCep");
      divInfo.innerHTML = `Seu bairro é: ${infoDoCEP.bairro} <br>`;
      divInfo.innerHTML += `Sua rua é: ${infoDoCEP.logradouro} <br>`;
      divInfo.innerHTML += `Sua cidade é: ${infoDoCEP.localidade} <br>`;
    })
    .catch((err) => {
      if (meuCEP == "" || meuCEP.length < 8 || meuCEP.length > 8){
        alert("Por favor preencha o campo abaixo apenas com os 8 dígitos do seu CEP.")
      }
      console.error(err);
    });
};
