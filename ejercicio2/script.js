// 2. Escribir un programa que permita jugar “Piedra, Papel y Tijera” a dos 
// jugadores por turnos. Al inicio debe solicitar el nombre de cada jugador y la 
// opción elegida.

let nombre = document.getElementById("nombre");
let piedra = document.getElementById("piedra");
let tijera  = document.getElementById("tijera");
let papel = document.getElementById("papel");
let button = document.getElementById("button");
let resultado = document.getElementById("interHTML");

let opciones = ["piedra", "tijera", "papel"]

function jugar(opcionJugador) {
    let computadora = opciones[Math.floor(Math.random() * opciones.length)];
    let nombreJugador = nombre.value;
    let resultadoTexto = "";

    if (opcionJugador === computadora) {
        resultadoTexto = `Empate ambos eligieron ${opcionJugador}`;
    } else if (
        (opcionJugador === "piedra" && computadora ==="tijera") ||
        (opcionJugador === "tijera" && computadora === "papel") ||
        (opcionJugador === "papel" && computadora === "piedra")
    ){
        resultadoTexto = `El ganador es ${nombreJugador} con ${opcionJugador}`;
    }else{
        resultadoTexto = `La computadora gana con ${computadora}`;
    }
    resultado.innerHTML = resultadoTexto;
}

button.addEventListener("click", ()=>{
    let opcionJugador; 
    if (piedra.checked){
        opcionJugador = "piedra"
    } else if(papel.checked){
        opcionJugador = "papel"    
    } else if (tijera.checked){
        opcionJugador= "tijera"
    }
    jugar(opcionJugador)
});