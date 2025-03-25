
let select = document.getElementById("personajes");
let result = document.getElementById("resultado");
let cargando = document.getElementById("cargando");

const urlBase = "https://api.potterdb.com/v1/characters";  

//  Función para cargar los personajes en el <select>
const cargarPersonajes = async () => {
    try {
        const response = await axios.get(urlBase);
        const personajesSelect = response.data?.data;
        if (!personajesSelect || personajesSelect.length === 0) {
            console.error("No hay datos disponibles de personajes.");
            return;
        }
        personajesSelect.forEach((personaje) => {
            const option = document.createElement("option");
            option.value = personaje.id; // ID del personaje
            option.textContent = personaje.attributes.name || "Nombre no disponible"; // Manejar valores vacíos
            console.log("Se creó la opción: ", option); // Confirmar opción creada
            select.appendChild(option); // Agregar al <select>
            console.log("Opciones dentro del <select>: ", select.innerHTML);

        });
        
    } catch (error) {
        console.error("Error al obtener los personajes:", error);    
    }
};
//  Función para obtener los detalles de un personaje
const obtenerPersonaje = async (id) => {
    try {
        cargando.innerHTML = "Cargando personaje..."; // Mostrar mensaje de carga
        result.innerHTML = ""; // Limpiar resultado anterior

        const response = await axios.get(`${urlBase}/${id}`);
        const personaje = response.data.data.attributes;

        // Mostrar la información del personaje
        result.innerHTML = `
            <h2>${personaje.name}</h2>
            <p><strong>Alias:</strong> ${personaje.alias_names?.join(", ") || "No tiene"}</p>
            <p><strong>Familia:</strong> ${personaje.family_members?.join(", ") || "No tiene"}</p>
            <p><strong>Nacionalidad:</strong> ${personaje.nationality || "No disponible"}</p>
            <p><strong>Romances:</strong> ${personaje.romances?.join(", ") || "No tiene"}</p>
            <p><strong>Trabajos:</strong> ${personaje.jobs?.join(", ") || "No tiene"}</p>
            ${personaje.image ? `<img src="${personaje.image}" alt="${personaje.name}" width="200">` : "<p>Imagen no disponible</p>"}
        `;

        cargando.innerHTML = ""; // Ocultar mensaje de carga

    } catch (error) {
        console.error("Error al obtener detalles del personaje:", error);
        cargando.innerHTML = "Error al cargar el personaje.";
    }
};

//  Cargar personajes al iniciar la página
document.addEventListener("DOMContentLoaded", () => {
    cargarPersonajes();
});


// Evento para detectar selección de personaje y obtener sus detalles
select.addEventListener("change", () => {
    const personajeId = select.value;
    if (personajeId) {
        obtenerPersonaje(personajeId);
    } else {
        result.innerHTML = "";
    }
});


particlesJS("particles-js", {
    particles: {
        number: { value: 100 },
        size: { value: 3 },
        move: { speed: 1 },
        opacity: { value: 0.6 },
        line_linked: { enable: false },
        color: { value: "#ffffff" }
    }
});
