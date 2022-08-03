// Substitua as repetições do exercício anterior por uma função.

var minhaDiv
const txt1 = "Sou o texto 1 e os outros textos irão aparecer, aguarde. ;",
  txt2 = " Sou o texto 2 e apareci depois de 3s ;",
  txt3 = " Sou o texto 3 e apareci depois de 5s ;",
  txt4 = " Sou o texto 4 e apareci depois de 2s ;",
  txt5 = " Sou o último texto e apareci depois de 1s ;";
function mostrarTextosNaTela() {
 minhaDiv = document.getElementById("souUmaDiv")
 minhaDiv.innerHTML = txt1;

setTimeout(function(){
  minhaDiv.innerHTML += txt2;
  setTimeout(function(){
    minhaDiv.innerHTML += txt3;
    setTimeout(function(){
      minhaDiv.innerHTML += txt4;
      setTimeout(function(){
        minhaDiv.innerHTML += txt5;
      }, 1000);
    }, 2000);
  }, 5000);
}, 3000);
}