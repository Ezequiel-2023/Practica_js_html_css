// 3. Escribir una función que acepte un argumento, el cual es un número.
//  Esta función debe validar si es un número binario 
// y retornar 1 si lo es, o 0 si no lo es.

let numero = document.getElementById("numero");
let result = document.getElementById("resultado");
let button = document.getElementById("button");

function esBinario(num) {
    let numStr = num.toString();
    let esBin = /^[01]+$/.test(numStr);
    return esBin ? 1 : 0;
}

button.addEventListener("click", () => {
    let valor = numero.value.trim();
    if (!valor) {
        result.textContent = "Ingrese un número.";
        return;
    }
    let numeroIngresado = parseInt(valor, 10); 
    let binario = esBinario(numeroIngresado);
    result.textContent = binario ? "Es binario (1)" : "No es binario (0)"; 
})