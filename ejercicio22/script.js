// 22. Escriba un programa que genere un número aleatorio entre 1 y 10 y permita al usuario adivinarlo en 1 a 3 intentos.

let num_1 = document.getElementById("num1");
let num_2 = document.getElementById("num2");
let num_3 = document.getElementById("num3");
let buttonResultado = document.getElementById("buttonResultado");
let resultado = document.getElementById("resultado");

// Genera un número aleatorio entre 1 y 10
function nummberRandom() {
    return Math.floor(Math.random() * 10) + 1;
}

// Obtiene los números ingresados por el usuario y los convierte en enteros
function obtenerNumeros() {
    return [
        parseInt(num_1.value) || 0,
        parseInt(num_2.value) || 0,
        parseInt(num_3.value) || 0
    ];
}

// Función principal para verificar si el usuario adivinó el número
function numeroAdivinar() {
    let numerosUsuario = obtenerNumeros(); // Guarda los números ingresados
    let numeroPC = nummberRandom(); // Genera un número aleatorio (solo una vez)

    // Validación de que los números estén en el rango correcto
    for (let num of numerosUsuario) {
        if (num < 1 || num > 10) {
            resultado.innerHTML = `<strong style="color:red;">Ingrese valores válidos entre 1 y 10.</strong>`;
            return; // Detener ejecución si hay un número inválido
        }
    }

    // Verifica si algún número coincide con el de la PC
    if (numerosUsuario.includes(numeroPC)) {
        resultado.innerHTML = `<strong style="color:green;">¡Felicidades! Uno de tus números (${numerosUsuario}) coincide con el número de la PC (${numeroPC}).</strong>`;
    } else {
        resultado.innerHTML = `<strong style="color:blue;">Ninguno de tus números (${numerosUsuario}) coincide con el número de la PC (${numeroPC}).</strong>`;
    }
}

// Evento para ejecutar la función cuando se presiona el botón
buttonResultado.addEventListener("click", (e) => {
    e.preventDefault();
    numeroAdivinar();
});
