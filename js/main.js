
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 151
const limit = 10
let offset = 0

function convertPokemonToHtml(pokemon){

    return `
    <li class="pokemon ${pokemon.type}">
        <span class="number">${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
            </ol>

            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>

    </li>
    `
}

function loadPokemonItens(offset, limit){
    PokeAPI.getPokemons(offset, limit).then((pokemons = []) => {  // pokemonList seria um array aqui? pesquise!!
        // map simplificado
        const newHtml = pokemons.map(convertPokemonToHtml).join('')
        pokemonList.innerHTML += newHtml
 })
}


loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () =>{
    offset += limit
    debugger
    const qtdRecardNextPage = offset + limit

    if (qtdRecardNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemonItens(offset,limit)
    }

})

        // usando map 
        
       // const newList = pokemons.map((pokemon) => {
        //    return convertPokemonToHtml(pokemon)
       // })
        //const newHTML = newList.join("")
       // pokemonList.innerHTML += newHTML

    //}

        // usando for
    //    for (let i = 0; i < pokemons.length ; i++){
          //  const pokemon = pokemons[i]
         //   pokemonList.innerHTML += convertPokemonToHtml(pokemon)
         //   listItens.push(convertPokemonToHtml(pokemon)) // transformando lista em uma lista com html
     //   }




// importante 
// - manipular elementos
// - manipular objetos
// - manipular arrays
// - manipular promises
// - logica de programação

