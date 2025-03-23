// 21. Escriba un programa que reciba el mensaje codificado del ejercicio anterior y obtenga el mensaje original.

let frase = document.getElementById("frase");
let buttonResultado = document.getElementById("buttonResultado");
let resultado = document.getElementById("resultado");

function obtenerMensajeCodificado() {
    const expresionRegular = /[a-zA-Z]/;
    let textoCodificado = frase.value.toLowerCase().trim(); 
    if (!textoCodificado || !expresionRegular.test(textoCodificado)) {
        resultado.innerHTML = `<strong style="color:red;">Ingresa una codificacion válida.</strong>`;
        return;
    }
    let array = []
    for (let i = 0; i < textoCodificado.length; i++) {
        array.push(textoCodificado[i].charCodeAt(0));
        console.log("Array ASCII" +array)
    } 
    let nuevoCodigo = array.map((num) => num - 2)
    console.log("Nuevo codigo" + nuevoCodigo)

    let codificar = nuevoCodigo.map((nuevoCodigo) => String.fromCharCode(nuevoCodigo))
    console.log("Mensaje decodificado" + codificar)

    resultado.innerHTML = `<strong style="color:blue;">mensaje codificado 
    "${codificar.join("")}".</strong>`;;
}
  

buttonResultado.addEventListener("click", (e) => {
    e.preventDefault();
    obtenerMensajeCodificado();
})