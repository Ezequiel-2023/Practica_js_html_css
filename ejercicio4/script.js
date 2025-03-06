// 4. Escribir una función que devuelva una frase con las palabras ordenadas al revés.
//  Acepta la frase como argumento.

let frase = document.getElementById("frase");
let buttonArray = document.getElementById("buttonArray");
let buttonReverse = document.getElementById("buttonReverse");
let buttonFrase = document.getElementById("buttonFrase");
let resultado = document.getElementById("resultado");


function obtenerTexto() {
    let texto = frase.value.trim();
    if (!texto) {
        resultado.textContent = "Ingrese una frase";
        return null;
    }
    return texto;
}

buttonArray.addEventListener("click", (e) => {
    e.preventDefault();  
    let texto = obtenerTexto();
    if (!texto) return;
    
    resultado.textContent = texto.split("");
});

buttonReverse.addEventListener("click", (e) => {
    e.preventDefault();
    let texto = obtenerTexto();
    if (!texto) return;
    
    resultado.textContent = texto.split("").reverse();
});

buttonFrase.addEventListener("click", (e) => {
    e.preventDefault();
    let texto = obtenerTexto();
    if (!texto) return;
    
    resultado.textContent = texto.split("").reverse().join("");
});
