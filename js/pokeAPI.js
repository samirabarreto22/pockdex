//promise, processamento assincrono
// o primeiro .then recebe a resposta da promise
// o segundo .then recebe a resposta do 2 .then
// podemos reduzir a complexidade do callback com arrow function


const PokeAPI = {}

function convertPokeApiDetailPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    // Equivalencia com array
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type1] = types

    pokemon.types = types
    pokemon.type = type1

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

PokeAPI.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
    .then(convertPokeApiDetailPokemon)
}

PokeAPI.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonbody) => jsonbody.results)
        .then((pokemons) => pokemons.map(PokeAPI.getPokemonDetail))
        .then((detailRequest) => Promise.all(detailRequest)) //esperar a lista ser resolvida
        .then((pokemonsDetail) => pokemonsDetail)   // ao ser resolvida teremos:
} // a url é a que esta da API "url" (LEMBRETE!!)