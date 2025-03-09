// 7. Hacer una función que acepte dos números como argumentos 
// y retorne 1 si la numero de los números es un número primo, de lo contrario,
//  retorna 0.

let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let button = document.getElementById("button");
let mensaje = document.getElementById("aler"); 

// Función para verificar si un número es primo
function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Función para manejar la verificación
function verificarPrimo() {
    let num_1 = parseInt(valor1.value) || 0; // Obtener valores actualizados
    let num_2 = parseInt(valor2.value) || 0;
    let suma = num_1 + num_2;

    if (isNaN(suma) || suma <= 0) {
        mensaje.textContent = "Ingrese valores válidos";
    } else if (esPrimo(suma)) {
        mensaje.textContent = `${suma} es un número primo`;
    } else {
        mensaje.textContent = `${suma} no es un número primo`;
    }

    // Limpiar el mensaje después de 3 segundos
    setTimeout(() => {
        mensaje.textContent = "";
    }, 3000);
}

// Evento para el botón
button.addEventListener("click", (e) => {
    e.preventDefault();
    verificarPrimo();
});


