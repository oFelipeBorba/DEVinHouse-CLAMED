var item = ['','Hortifruti', 'Laticíneos','Carnes','Peixes','Aves'];
var final = false;
var selecao = '';
var qtd = ['0','0','0','0','0'];
do {
selecao = window.prompt("Qual produto você deseja comprar: (1) Hortifruti; (2) Laticínios; (3) Carnes; (4) Peixes; (5) Aves; (6) Fechar pedido");
if (selecao != '1' &&selecao != '2' &&selecao != '3' &&selecao != '4' &&selecao != '5' &&selecao != '6'){
    window.alert("Por favor escolha apenas números entre 1 e 6.")
    selecao = '';
}else{
    switch (selecao) {
        case '1':
            qtd[0] = window.prompt("Quantos itens você gostaria de comprar de " +item[selecao]);
            break;
        case '2':
            qtd[1] = window.prompt("Quantos itens você gostaria de comprar de " +item[selecao]);
            break;
        case '3':
            qtd[2] = window.prompt("Quantos itens você gostaria de comprar de " +item[selecao]);
            break;
        case '4':
            qtd[3] = window.prompt("Quantos itens você gostaria de comprar de " +item[selecao]);
            break;
        case '5':
            qtd[4] = window.prompt("Quantos itens você gostaria de comprar de " +item[selecao]);
            break;  
        case '6':
            window.alert("Obrigado.");
            final = true;
            break;     
    }                       
}          
} while (final == false);
document.write(
"<h2>🍲Lista de compras😋</h2>Você selecionou as seguintes quantidades abaixo:</br>"+qtd[0]+' itens de Hortifruti</br>'+qtd[1]+' itens de Laticínios</br>'+qtd[2]+' itens de Carnes</br>'+qtd[3]+' itens de Peixes</br>'+qtd[4]+' itens de Aves</br>'
);
var maior = Math.max.apply(null, qtd );

for (i=0 ; i < qtd.length ; i++){
  if (maior == qtd[i]) {
    document.write("<h2>🍲Item mais solicitado:😋</h2></br>"+ item[i+1]);
  }
}