// 12. Escribir una función que genere un arreglo de dimensión n con valores aleatorios,
//  imprima el arreglo y devuelva un string que concatene los valores en orden inverso.

let number = document.getElementById("number");
let button = document.getElementById("button");
let resultado = document.getElementById("resultado");



function ontenerArreglo() {
    let num = parseInt(number.value)
    if (isNaN(num) || num < 1){
        resultado.innerHTML = "<p style='color:red;'>Ingrese un valor válido</p>";
        return;
    }
    let array = []
    for (let i = 0; i < num; i++){
       let numerosAleatrios = Math.floor(Math.random() * 100)
       array.push(numerosAleatrios)
    }
    resultado.innerHTML = `El arreglo es [${array.join("-")}]<br>
                           El arreglo en reverse es [${array.reverse().join("-")}]`;

}

button.addEventListener("click", (e) => {
    e.preventDefault()
    ontenerArreglo()
})