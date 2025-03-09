// 11. Escribir un programa que permita al usuario ingresar un número,
//  genere un arreglo de números aleatorios y luego muestre el máximo, mínimo y promedio.

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
    for (i = 0; i < num; i++){
       let numerosAleatrios = Math.floor(Math.random() * 100)
       array.push(numerosAleatrios)
    }
    let suma = array.reduce((acc, num) => acc + num, 0);
    let promedio = (suma / num).toFixed(2);
    let maximo = Math.max(...array);
    let minimo = Math.min(...array);
     // Crear tabla
    let tablaHTML = `
    <table>
        <tr>
            <th>Números Generados</th>
            <td>${array.join(" | ")}</td>
        </tr>
         <tr>
            <th>Número Máximo</th>
            <td>${maximo}</td>
        </tr>
        <tr>
            <th>Número Mínimo</th>
            <td>${minimo}</td>
        </tr>
         <tr>
            <th>Promedio</th>
            <td>${promedio}</td>
        </tr>
     </table>
     `;

    resultado.innerHTML = tablaHTML;
}

button.addEventListener("click", (e) => {
    e.preventDefault()
    ontenerArreglo()
})