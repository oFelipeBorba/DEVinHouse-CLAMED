// Utilizando a api PokéAPI e fazendo uma requisição get com XMLHttpRequest, imprima em um console.log() 
// o nome, a altura, o peso e adicione na tela uma imagem (a sua escolha) desse pokémon. 
// Todas as informações precisam vir da api inclusive a imagem.

// Dicas: as informações pedidas estão dentro do json que é retornado da api, observe as propriedades: 
// height, weight, sprites e name.
// Para o teste no final da url é necessário usar um nome de um pokémon. Ex: pikachu, ditto, charmander…

// Criando uma nova instancia do CMLHttpRequest
let pokemonEscolhido, urlDoPokemon;
const minhaReqPokeApi = new XMLHttpRequest();

// Se a solicitação for um sucesso ele chama a função
minhaReqPokeApi.onload = () => {
    const pokemon = JSON.parse(minhaReqPokeApi.response)
    console.log(`Nome do pokemon é: ${pokemon.name}`)
    console.log(`Altura do pokemon é: ${pokemon.height}`)
    console.log(`Peso do pokemon é: ${pokemon.weight}`)
    let minhaImagem = document.querySelector("#imgPrincipal");
    minhaImagem.setAttribute('src',pokemon.sprites.front_default);
};

// Se a solicitação falhar chama a função do erro
minhaReqPokeApi.onerror = (err) => {
    console.log(err);
};

// Função para o usuário definir qual pokemon ele quer as informações 
escolhePokemon = () => {
    pokemonEscolhido = window.prompt(`Escolha o pokemon: `);
    urlDoPokemon = 'https://pokeapi.co/api/v2/pokemon/'+pokemonEscolhido;
    return urlDoPokemon;
}
escolhePokemon();

// Abre uma solicitação do tipo GET para o pokeApi
minhaReqPokeApi.open('GET',urlDoPokemon);

// Envia a solicitação para o servidor da API 
minhaReqPokeApi.send();