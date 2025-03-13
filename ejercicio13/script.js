// 13. Escribir un programa que genere 2 arreglos, uno con números positivos 
// y otro con negativos, luego los intercale en un nuevo arreglo.


let number = document.getElementById("number");
let button = document.getElementById("button");
let resultado = document.getElementById("resultado");


function ontenerArreglo() {
    let num = parseInt(number.value);
    if (isNaN(num) || num < 1) {
        resultado.innerHTML = "<p style='color:red;'>Ingrese un valor válido</p>";
        return;
    }
    let arrayNumPositivos = [];
    let arrayNumNegativos = [];
    for (let i = 0; i < num; i++) {
        arrayNumPositivos.push(Math.floor(Math.random() * 100) + 1); // Asegura que sean positivos
        arrayNumNegativos.push(-Math.floor(Math.random() * 100) - 1); // Asegura que sean negativos
    }

    let intercalado = arrayNumPositivos.flatMap((num, index) => [num, arrayNumNegativos[index]]);

    resultado.innerHTML = `
        <p> <b>Arreglo de números positivos:</b> [${arrayNumPositivos.join(", ")}]</p>
        <p> <b>Arreglo de números negativos:</b> [${arrayNumNegativos.join(", ")}]</p>
        <p> <b>Arreglo intercalado:</b> [${intercalado.join(", ")}]</p>
    `;
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    ontenerArreglo();
});
