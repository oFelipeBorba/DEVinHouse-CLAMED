// Observe os seguintes pedidos:
// Na tag img com a classe pokemonimage adicione a imagem do pokémon que você irá pesquisar.
// No span com a classe pokemonnumber será adicionado o id do pokemon.
// No span com a classe pokemonname será adicionado o nome do pokemon.
// No input com a classe input__search será onde o usuário poderá pesquisar pelo nome ou pelo id.
// No span com o id pokemontype será adicionado o tipo do pokémon pesquisado.
// No span com o id weight irá ser apresentado o peso do pokemon.
// Ao clicar no botão com a classe button será iniciado toda a funcionalidade da aplicação: pesquisa da api, 
// adição das informações nos campos…
let pokemonEscolhido, urlDoPokemon;
const minhaReqPokeApi = new XMLHttpRequest();

// Função para o usuário definir qual pokemon ele quer as informações
let btn = document.querySelector(".button");
btn.addEventListener("click", escolhePokemon);

function escolhePokemon() {
  pokemonEscolhido = document.querySelector(".input__search").value;
  urlDoPokemon = "https://pokeapi.co/api/v2/pokemon/" + pokemonEscolhido;

  // Se a solicitação for um sucesso ele chama a função
  minhaReqPokeApi.onload = () => {
    const pokemon = JSON.parse(minhaReqPokeApi.response);
    console.log(pokemon)

    let insereImgPokemon = document.querySelector(".pokemonimage");
    insereImgPokemon.setAttribute("src",pokemon.sprites.front_default);
    document.querySelector(".pokemonname").innerHTML = pokemon.name;
    document.querySelector("#pokemontype").innerHTML = pokemon.types[0].type.name;
    document.querySelector("#weight").innerHTML = pokemon.weight;
    document.querySelector(".pokemonnumber").innerHTML = pokemon.id;
    document.querySelector("#ability").innerHTML = `${pokemon.abilities[0].ability.name} , `;
    document.querySelector("#ability").innerHTML += pokemon.abilities[1].ability.name;
  };

  // Se a solicitação falhar chama a função do erro
  minhaReqPokeApi.onerror = (err) => {
    console.log(err);
  };
  // Abre uma solicitação do tipo GET para o pokeApi
  minhaReqPokeApi.open("GET", urlDoPokemon);

  // Envia a solicitação para o servidor da API
  minhaReqPokeApi.send();
}
