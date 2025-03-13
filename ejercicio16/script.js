// 16. Hacer un programa que permita ingresar 2 textos, luego concatenar 
// el más corto al más largo al inicio y al final, pero con el texto corto al revés al final.

let palabra_1 = document.getElementById("palabra1");
let palabra_2 = document.getElementById("palabra2");
let button = document.getElementById("button");
let resultado = document.getElementById("resultado");

function obtenerPalabras() {
    let texto_1 = palabra_1.value.toLowerCase().trim();
    let texto_2 = palabra_2.value.toLowerCase().trim();
    let result;

    if (texto_1 === "" || texto_2 === ""){
        resultado.innerHTML = `<strong style="color:red;">Ingresa una palabra en ambos input.</strong>`;
        return;
    }
    if(texto_1.length < texto_2.length){
        result = (texto_1) + (texto_2) + (texto_1.split('').reverse().join(""))
    }else{
        result = (texto_2) + (texto_1) + (texto_2.split('').reverse().join(""))
    }
    resultado.innerHTML = `<strong style="color:blue;">${result}</strong>` 
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    obtenerPalabras();
});