// 6. Escribir un programa que solicite al usuario una cantidad indefinida 
// de números, los guarde en un array, y al ingresar 'suma' o 'multiplicación', 
// se muestre el resultado.
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let buttonSuma = document.getElementById("buttonSuma");
let buttonMultiplicar = document.getElementById("buttonMultiplicar");
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

// Evento para la suma
buttonSuma.addEventListener("click", (e) => {
    e.preventDefault();
    let array = obtenerNumeros();
    let suma = array.reduce((acc, num) => acc + num, 0);
    resultado.textContent = "Suma: " + suma;
});

// Evento para la multiplicación
buttonMultiplicar.addEventListener("click", (e) => {
    e.preventDefault();
    let array = obtenerNumeros();
    let multiplicacion = array.reduce((acc, num) => acc * num, 1);
    resultado.textContent = "Multiplicación: " + multiplicacion;
});


