// Crie um site com os seguintes requisitos:
// um campo de texto (input) onde o usuário irá digitar uma mensagem três botões:
// um botão “adicionar”, que no momento do clique insira a mensagem na tela
// um botão “salvar mensagem”, que no momento do clique salve as informações no localStorage
// opcional: se o texto estiver vazio (length), deve mostrar uma mensagem ao usuário solicitando
// a inserção de algum texto.
// um botão “mostrar mensagem”, que após o recarregamento da página, no momento do clique busque
// a mensagem no localStorage e exiba na tela
// opcional: se não houver mensagem cadastrada no localStorage, deve mostrará na tela: “não há ítens salvos”

let btn1 = "",
  btn2 = "",
  btn3 = "",
  input = "";

btn1 = document.getElementById("botao1");
btn1.addEventListener("click", function () {
  input = document.getElementById("meu-input");
  alert("A mensagem digitada foi: " + input.value);
});

btn2 = document.getElementById("botao2");
btn2.addEventListener("click", function () {
  localStorage.setItem("texto", input.value);
});

btn3 = document.getElementById("botao3");
btn3.addEventListener("click", function () {
  const texto = localStorage.getItem("texto");
  if (texto == undefined) {
    alert("O localstorage está vazio, digite algo e salve a mensagem");
  } else {
    alert("A mensagem gravada no localstorage é: "+ texto);
  }
});
