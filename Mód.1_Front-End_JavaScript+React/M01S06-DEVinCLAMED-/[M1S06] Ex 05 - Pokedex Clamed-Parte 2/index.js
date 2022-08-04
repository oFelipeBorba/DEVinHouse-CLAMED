// Agora pensando em avançar um pouco mais iremos adicionar em tela um input e um botão que irá
// pegar o nome do pokemon e ao apertar no botão pesquisar irá fazer a mesma requisição construída
// anteriormente.
// Com isso imprima as mesmas informações pedidas todas em tela, adicione uma lista com todas as
// habilidades do pokémon (observe a propriedade abilities).

// Criando uma nova instancia do XMLHttpRequest
let pokemonEscolhido, urlDoPokemon;
const minhaReqPokeApi = new XMLHttpRequest();

// Função para o usuário definir qual pokemon ele quer as informações
let btn = document.querySelector("#btnPesquisaPokemon");
btn.addEventListener("click", escolhePokemon);

function escolhePokemon() {
  pokemonEscolhido = document.querySelector("#recebeInfoPokemon").value;
  urlDoPokemon = "https://pokeapi.co/api/v2/pokemon/" + pokemonEscolhido;

  // Se a solicitação for um sucesso ele chama a função
  minhaReqPokeApi.onload = () => {
    const pokemon = JSON.parse(minhaReqPokeApi.response);
    let insereInfoPokemon = document.querySelector("#infoPokemon");
    insereInfoPokemon.innerHTML = `Nome do pokemon é: ${pokemon.name} <br>`;
    insereInfoPokemon.innerHTML += `Altura do pokemon é: ${pokemon.height} <br>`;
    insereInfoPokemon.innerHTML += `Peso do pokemon é: ${pokemon.weight} <br>`;
    let minhaImagem = document.querySelector("#imgPrincipal");
    minhaImagem.setAttribute("src", pokemon.sprites.front_default);
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
