// 14. Hacer un programa que solicite al usuario palabras hasta que ingrese 
// 'finalizar', y muestre la palabra más larga ingresada.

let palabra = document.getElementById("texto");
let buttonAgregar = document.getElementById("buttonAgregar");
let buttonFinalizar = document.getElementById("buttonFinalizar");
let resultado = document.getElementById("resultado");

let array = [];

function agregarPalabras() {
    let texto = palabra.value.trim();
    const regex = /^[a-zA-Z]+$/;

    if (!texto || !regex.test(texto)) {
        resultado.innerHTML = "<strong style='color:red;'>Ingrese Una Palabra Válida</strong>";
        return;
    }
    array.push(texto); 
    palabra.value = ""; // Limpiar el input
    resultado.innerHTML = "<strong style='color:green;'>Palabra Agregada</strong>"; // Mensaje de éxito
    console.log(array); 
}

buttonAgregar.addEventListener("click", (e) => {
    e.preventDefault();
    agregarPalabras();
});

// Detectar la tecla "Enter"
palabra.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        agregarPalabras();
    }
});

//  mostrar la palabra más larga
buttonFinalizar.addEventListener("click", (e) => {
    e.preventDefault();
    if (array.length === 0) {
        resultado.innerHTML = "<strong style='color:red;'>No se ingresaron palabras</strong>";
        return;
    }

    let palabraMasLarga = array.reduce((a, b) => a.length >= b.length ? a : b, "");
    resultado.innerHTML =` <strong style='color:blue;'>La palabra más larga es:" ${palabraMasLarga}"</strong>`;
});


//*let palabraMasLarga = ""; // Inicializamos la variable para la palabra más larga

//for (let i = 0; i < array.length; i++) {
//  if (array[i].length > palabraMasLarga.length) {
//      palabraMasLarga = array[i]; // Si encontramos una palabra más larga, la actualizamos
//  }
//}

//console.log("La palabra más larga es:", palabraMasLarga);
