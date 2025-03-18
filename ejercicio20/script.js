// 20. Escribir un programa que reciba un mensaje y 
// lo codifique sumando 2 al código ASCII de cada letra.

let frase = document.getElementById("frase");
let buttonResultado = document.getElementById("buttonResultado");
let resultado = document.getElementById("resultado");

function obtenerMensaje() {
    const expreRegular = /[a-zA-Z]/;
    let texto = frase.value.toLowerCase().trim(); 
    if (!texto || !expreRegular.test(texto)) {
        resultado.innerHTML = `<strong style="color:red;">Ingresa una frase válida.</strong>`;
        return;
    }
    let array = []
    for (let i = 0; i < texto.length; i++) {
        array.push(texto[i].charCodeAt(0));
        console.log("Array ASCII" +array)
    } 
    let nuevoCodigo = array.map((num) => num + 2)
    console.log("Nuevo codigo" + nuevoCodigo)

    let codificar = nuevoCodigo.map((nuevoCodigo) => String.fromCharCode(nuevoCodigo))
    console.log("Mensaje Codificado" + codificar)

    resultado.innerHTML = `<strong style="color:blue;">mensaje codificado 
    "${codificar.join("")}".</strong>`;;
}
  

buttonResultado.addEventListener("click", (e) => {
    e.preventDefault();
    obtenerMensaje();
})