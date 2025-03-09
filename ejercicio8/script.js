// 8. Escribir una función que reciba una frase como argumento y retorne el conteo 
// de vocales.

let frase = document.getElementById("frase");
let button = document.getElementById("button");
let resultado = document.getElementById("resultado");


function obtenerTexto(){
    let texto = frase.value.trim();
    let expreRegular = /[aeiou]/gi;
    if(!texto){
        resultado.textContent = "valores Invalidos";
        return;
    }
    let result = texto.match(expreRegular)
    resultado.textContent = result ? `Vocales encontradas ${result.length}` : `No Hay Vocales ${0}`;
    
}

button.addEventListener("click", (e)=>{
    e.preventDefault();
    obtenerTexto();
});