// 17. Escribir un programa que encuentre cuántas veces está contenido un texto dentro de otro.

let frase = document.getElementById("frase");
let palabra = document.getElementById("palabra");
let button = document.getElementById("buscarPalabra");
let resultado = document.getElementById("resultado");

function obtenerFraseYPalabra() {
    let textoFrase = frase.value.toLowerCase();
    let textoPalabra = palabra.value.toLowerCase().trim();
        if (textoFrase === "" || textoPalabra === ""){
            resultado.innerHTML = `<strong style="color:red;">Ingresa un texto y una palabra a buscar.</strong>`;
            return;
    }
    let regex = new RegExp(textoPalabra, "g"); // exprecion regular como objeto 
    let concidencias = textoFrase.match(regex);  // match revisa las concidencias 
    let cantidad = concidencias 
    ? concidencias.length // "?" esto es igual que if separado por ":" significa que
    : 0;                  // si hay considencia mostrara esto "concidencias.length" 
                          // de lo contrario mostrara "0"
    resultado.innerHTML = `<strong>La palabra "${textoPalabra}" aparece ${cantidad} veces en el texto.</strong>`;

}

button.addEventListener("click", (e) => {
    e.preventDefault();
    obtenerFraseYPalabra();
});