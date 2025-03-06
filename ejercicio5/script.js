// 5. Escribir una función que muestre en pantalla un rectángulo ascii. 
// Esta función debe aceptar el altura y el anchura del rectángulo como argumentos.

let alto = document.getElementById("alto")
let largo = document.getElementById("largo")
let dibujar = document.getElementById("dibujar")
let respuesta = document.getElementById("respuesta")



function rectanguloAscii() {
    let altura = parseInt(alto.value)
    let anchura = parseInt(largo.value)
    if(isNaN(altura) || isNaN(anchura) || altura <= 0 || anchura <=0){
        respuesta.textContent = "Ingrese valores validos"
        return;
    }

    let rectangulo = "";
    for (let i = 0; i < altura ; i++) {
        rectangulo   += "*".repeat(anchura) + "\n";       
    }
    respuesta.textContent = rectangulo
}

dibujar.addEventListener("click", (e) => {
    e.preventDefault();
    rectanguloAscii();
})