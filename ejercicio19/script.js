// 19. Escribir un programa donde el usuario ingrese una frase, y una función cuente y muestre cuántas palabras contiene.

let frase = document.getElementById("frase");
let buttonResultado = document.getElementById("buttonResultado");
let resultado = document.getElementById("resultado");

function obtenerFrase() {
    // Expresión regular para validar que haya al menos una letra
    const expresionRegular = /[a-zA-Z]/;
    let texto = frase.value.toLowerCase(); 

    // Validar que la entrada no esté vacía y contenga letras
    if (!texto || !expresionRegular.test(texto)) {
        resultado.innerHTML = `<strong style="color:red;">Ingresa una frase válida.</strong>`;
        return;
    }
    let array = texto.split(/\s+/);
    resultado.innerHTML = `<strong style="color:blue;">La frase contiene ${array.length} palabras .</strong>`;
    console.log(array.length)
}

buttonResultado.addEventListener("click", (e) => {
    e.preventDefault();
    obtenerFrase();
})