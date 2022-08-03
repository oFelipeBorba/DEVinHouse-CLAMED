// Faça um site com uma lista de itens (por exemplo, de brinquedos), que tenha:
// um campo de input do item um botão para criar um item na lista

//Declarei três variaveis, uma recebe o id do botao, outra o id do campo input e outra a lista
let btn1 = '' , input = '', lista = [];
//variavel btn1 faz link com o elemento botao e é adicionado o evento click que chama a função
btn1 = document.getElementById("botao");
btn1.addEventListener("click", adicionarItemNaLista);

function adicionarItemNaLista(){
    //var input linka com o elemento e o input.value será o valor que esta dentro do box quando a função é chamada
    input = document.getElementById("meu-input");
    // item chama o metodo crateElement e coloca a tag li como parametro
    const item = document.createElement("li");
    //chamando o item eu crio uma li, usando o parametro innerHTML eu insiro algo dentro da li, no caso o input.value
    item.innerHTML += input.value;
    //até a linha 16 eu criei a li e coloquei o valor nela, porém preciso inserir essa li em algum lugar
    //para isso eu linkei a var lista a minha ul
    lista = document.getElementById("listaDeBrinquedos");
    //usando o appendChild eu adiciono essa li em algum lugar, no caso na minha var lista que ta linkada na ul
    lista.appendChild(item);
}
// document.createElement(element)	Create an HTML element
// document.appendChild(element)	Add an HTML element