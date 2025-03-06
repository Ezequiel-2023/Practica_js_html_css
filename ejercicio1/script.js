// 1. Escribir una función llamada “transmografo”. Esta función debe aceptar tres argumentos, los cuales serán números. Esta función debe retornar un valor numérico el cual es el resultado de multiplicar los primeros dos números y luego elevarlo a la potencia del tercer número.

let number1 = document.getElementById("num1");
let number2 = document.getElementById("num2");
let number3 = document.getElementById("num3");
let button = document.getElementById("button");
let resultado = document.getElementById("iterHTML");

function transmografo(num1, num2, num3) {
    return (num1 * num2) ** num3;
}

button.addEventListener("click", () => {
    let val1 = parseInt(number1.value);
    let val2 = parseInt(number2.value);
    let val3 = parseInt(number3.value);

    if (isNaN(val1) || isNaN(val2) || isNaN(val3)) {
        resultado.textContent = "Por favor, ingrese números válidos.";
        return;
    }

    resultado.textContent = `El resultado es: ${transmografo(val1, val2, val3)}`;
});
