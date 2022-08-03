// Crie um site com um botão que espera receber um evento de click e uma função callback 
// que informe ao usuário que o botão foi clicado.

divPrincipal = document.getElementById("divPrincipal");
divPrincipal.innerHTML = `Por favor clique no botão abaixo.`
botao = document.getElementById("botao1");

botao.addEventListener('click',fazAlertaNaTela);

function fazAlertaNaTela(){
    window.alert("Parabéns, você clicou no botão!")
}