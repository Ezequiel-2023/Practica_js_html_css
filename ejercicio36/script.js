
let result = document.getElementById("resultado");
let button = document.getElementById("buttonResult");
let cardPokemon = document.getElementById("carPokemon");
let urlBase = "https://pokeapi.co/api/v2/pokemon/";

let offset = 0;
let limit = 20;

let getPokemon = async () => {
    try {
        let response = await axios.get(`${urlBase}?limit=${limit}&offset=${offset}`);
        let listPokemon = response.data.results.map((pokemon) => pokemon.name);
        result.innerHTML = `<h1>Elije Un Pokémon</h1>
                            <ul>
                                ${listPokemon.map((name) =>
                                `<li>
                                    <button class="buttonDetalles" type="button">${name}</button>
                                </li>`).join("")}
                            </ul>`;
        offset += limit;
    } catch (e) {
        console.error("Ocurrió un error al obtener la lista de Pokémon: " + e.message);
    }
};
let getPokemonDetails = async (pokemonName) => {
    try {
        let response = await axios.get(`${urlBase}${pokemonName}`);
        const pokemon = response.data;
        let sprite = pokemon.sprites.other["official-artwork"].front_default;
        let abilities = pokemon.abilities.map((a) => a.ability.name).join(", ");
        let types = pokemon.types.map((t) => t.type.name).join(", ");
        // Obtener la URL de la especie para buscar evoluciones
        let speciesResponse = await axios.get(pokemon.species.url);
        let evolutionChainUrl = speciesResponse.data.evolution_chain.url;
        // Obtener evoluciones
        let evoluciones = await getEvolutions(evolutionChainUrl);
        // Mostrar detalles en HTML
        cardPokemon.innerHTML = `
            <h1>${pokemon.name}</h1>
            <img src="${sprite}" alt="${pokemon.name}">
            <p><strong>Tipos:</strong> ${types}</p>
            <p><strong>Habilidades:</strong> ${abilities}</p>
            <p><strong>Evoluciones:</strong> ${evoluciones.join(", ")}</p>
        `;
    } catch (e) {
        console.error("Error al obtener los detalles del Pokémon: " + e.message);
    }
};

let getEvolutions = async (url) => {
    try {
        let response = await axios.get(url);
        let chain = response.data.chain;
        let evolucionesName = [];
        while (chain) {
            evolucionesName.push(chain.species.name);
            chain = chain.evolves_to[0]; // Avanza en la cadena evolutiva
        }
        return evolucionesName;
    } catch (e) {
        console.error("Error al obtener las evoluciones: " + e.message);
        return [];
    }
};

button.addEventListener("click", () => {
    getPokemon();
});


result.addEventListener("click", (event) => {
    if (event.target.classList.contains("buttonDetalles")) {
        let pokemonName = event.target.textContent.trim(); // Obtiene el nombre del Pokémon
        getPokemonDetails(pokemonName);
    }
});
