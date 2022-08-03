
 import imprimeDadosDeUsuario from "./usuario.js";


let botao;
botao = document.getElementById("botao1");

botao.addEventListener("click", recebeClickDoBotao);

function recebeClickDoBotao(){
    let campoNome, campoImg, campoDescricao;
    campoNome = document.getElementById("nome").value;
    campoImg = document.getElementById("imagem").value;
    campoDescricao = document.getElementById("descricao").value;
    imprimeDadosDeUsuario(campoNome, campoImg, campoDescricao)
}

// module.exports = coletaDadosDoUsuario;

