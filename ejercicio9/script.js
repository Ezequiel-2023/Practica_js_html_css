// 9. Escribir un programa que pida al usuario ingresar al menos 3 a 5 números y determine si forman una secuencia consecutiva o no.

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let button = document.getElementById("button");
let resultado = document.getElementById("resultado"); 

// Función para obtener los números como un array
function obtenerNumeros() {
    return [
        parseInt(num1.value) || 0,
        parseInt(num2.value) || 0,
        parseInt(num3.value) || 0,
        parseInt(num4.value) || 0,
        parseInt(num5.value) || 0
    ];
}

function numeroConsecutivo() {
    let ordenar = obtenerNumeros().sort((a,b)=> a - b);
    let esConsecutivo = ordenar.every((num, i, arr) => i === 0 || num === arr[i - 1] + 1);
    resultado.textContent = esConsecutivo 
    ? `Los números ${ordenar.join(", ")} son consecutivos` 
    : `Los números ${ordenar.join(", ")} NO son consecutivos`;

}

button.addEventListener("click", (e)=>{
    e.preventDefault();
    numeroConsecutivo();
})