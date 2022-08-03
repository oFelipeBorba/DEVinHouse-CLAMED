function imprimeDadosDeUsuario(nome,imagem,descr)
{
    let minhaImagem = imagem
document.getElementById("recebeNome").innerHTML = nome;
document.getElementById("imagemFinal").setAttribute("src",minhaImagem);
document.getElementById("recebeDescricao").innerHTML = descr;
};


export default imprimeDadosDeUsuario;

