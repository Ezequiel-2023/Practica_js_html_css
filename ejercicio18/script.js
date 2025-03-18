// 18. Hacer un programa que muestre las letras diferentes de una frase ingresada 
// por el usuario y el total de letras distintas.

let frase = document.getElementById("frase");
let buttonResultado = document.getElementById("buttonResultado");
let resultado = document.getElementById("resultado");

function obtenerFrase() {
    // Expresión regular para validar que haya al menos una letra
    const expresionRegular = /[a-zA-Z]/;
    let texto = frase.value.toLowerCase().trim(); 

    // Validar que la entrada no esté vacía y contenga letras
    if (!texto || !expresionRegular.test(texto)) {
        resultado.innerHTML = `<strong style="color:red;">Ingresa una frase válida.</strong>`;
        return;
    }

    // Limpiamos la frase, eliminando todo lo que no sea letras
    let soloLetras = texto.replace(/[^a-z]/g, "");

    // Crear un conjunto (Set) para obtener solo las letras únicas
    let letrasUnicas = new Set(soloLetras);

    // Convertir el Set en un array ordenado
    let letrasOrdenadas = Array.from(letrasUnicas).sort().join(", ");

    // Mostrar el resultado
    resultado.innerHTML = `<strong style="color:blue;">Letras diferentes: ${letrasOrdenadas} <br> Total de letras distintas: ${letrasUnicas.size}</strong>`;
}

buttonResultado.addEventListener("click", (e) => {
    e.preventDefault();
    obtenerFrase();
});
