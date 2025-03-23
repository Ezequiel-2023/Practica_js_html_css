// 23. Escriba un programa que solicite al usuario cinco números y verifique si la distancia entre todos los números es igual.

let num_1 = document.getElementById("num1");
let num_2 = document.getElementById("num2");
let num_3 = document.getElementById("num3");
let num_4 = document.getElementById("num4");
let num_5 = document.getElementById("num5");
let buttonResult = document.getElementById("buttonResultado");
let result = document.getElementById("resultado");


function getNumbers() {
    return [num_1, num_2, num_3, num_4, num_5]
        .map(input => parseInt(input.value))
        .filter(num => !isNaN(num));  // Filtra valores inválidos
}

function checkEqualDistances() {
    let sortedNumbers = getNumbers().sort((a, b) => a - b);
    if (sortedNumbers.length < 5) {
        result.innerHTML = `<strong style="color:red;">Por favor, ingrese los 5 números.</strong>`;
        return;
    }

    let differencesArray = [];
    for (let i = 0; i < sortedNumbers.length - 1; i++) {
        let difference = Math.abs(sortedNumbers[i + 1] - sortedNumbers[i]);
        differencesArray.push(difference);
    }

    let isEqualDistance = differencesArray.every(diff => diff === differencesArray[0]);

    result.innerHTML = isEqualDistance
        ? `<strong style="color:blue;">
            <br>Números ingresados: [${sortedNumbers.join(", ")}]</br>
            <br>Diferencias: [${differencesArray.join(", ")}]</br>
            <br>✅ Sí, la distancia entre todos los números es igual.</br>
        </strong>`
        : `<strong style="color:red;">
            <br>Números ingresados: [${sortedNumbers.join(", ")}]</br>
            <br>Diferencias: [${differencesArray.join(", ")}]</br>
            <br>❌ No, las distancias no son iguales.</br>
        </strong>`;
}

buttonResult.addEventListener("click", (e) => {
    e.preventDefault();
    checkEqualDistances();
});
