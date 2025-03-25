
let button = document.getElementById("button");
let result = document.getElementById("resultado");
let cargando = document.getElementById("cargando");

const urlBase = "https://dog.ceo/api/breeds/image/random";

const axiosApiDog = async () => {
    try {
        cargando.innerHTML = `<div class="spinner"></div>`;//carga antes de hacer la petición
        cargando.style.display = "block";
        result.innerHTML = ""; // Limpiar la imagen anterior
        const response = await axios.get(urlBase);
        console.log("resultado:", response.data);
        cargando.style.display = "none";  //ocultar carga y mostrar la imagen
        result.innerHTML = `<img src="${response.data.message}" alt="Imagen de un perro">`;
    } catch (error) {
        console.error("Ocurrió un error:", error.message);
        cargando.style.display = "none"; // Ocultar el efecto de carga y mostrar el mensaje de error
        result.innerHTML = `<strong style="color:red;">Ocurrió un error. Inténtalo de nuevo.</strong>`;
    }
};


button.addEventListener("click", axiosApiDog);
