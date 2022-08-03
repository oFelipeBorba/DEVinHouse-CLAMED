// Crie um site (arquivo HTML) que, ao ser renderizado, adicione (arquivo JS)
// 5 textos quaisquer, um ao lado outro, com a cor azul (arquivo css).

var minhaDiv
const txt1 = "Sou o texto 1;",
  txt2 = " Sou o texto 2;",
  txt3 = " Sou o texto 3;",
  txt4 = " Sou o texto 4;",
  txt5 = " Sou o último texto ;";


 minhaDiv = document.getElementById("souUmaDiv")
 minhaDiv.innerHTML += txt1
 minhaDiv.innerHTML += txt2
 minhaDiv.innerHTML += txt3
 minhaDiv.innerHTML += txt4
 minhaDiv.innerHTML += txt5