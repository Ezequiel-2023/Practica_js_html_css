let button = document.getElementById("buttonResult");
let carRick = document.getElementById("carRick");
let urlBase = "https://rickandmortyapi.com/api/character";
let currentPage = 1; // empezamos en la página 1

let personajes = async () => {
    try {
        let response = await axios.get(`${urlBase}/?page=${currentPage}`); //  número de página
        let personajesData = response.data.results;

        carRick.innerHTML += personajesData.map((personaje) => `
            <div class="card">
                <h2>${personaje.name}</h2>
                <p><strong>Status:</strong> ${personaje.status}</p>
                <p><strong>Species:</strong> ${personaje.species}</p>
                <img src="${personaje.image}" alt="${personaje.name}">
            </div>
        `).join(""); //  nuevas tarjetas al contenedor sin reemplazar las existentes
        // Actualizar la página actual
        if (response.data.info.next) {
            currentPage++; // Pasar a la siguiente página si existe
        } else {
            console.log("No hay más personajes para mostrar.");
            button.disabled = true; // Deshabilitar el botón si no hay más personajes
        }
    } catch (e) {
        console.error("Error al obtener los datos: " + e.message);
    }
};

button.addEventListener("click", () => {
    personajes();
});


