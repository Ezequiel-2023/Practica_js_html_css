// 24. Escribir un programa que simule el lanzamiento de dos dados y permita al usuario adivinar si la suma será par o impar.

let buttonResult = document.getElementById("buttonResultado");
let result = document.getElementById("resultado");
let select = document.getElementById("select");



function rollDice() {
    let dice1 = Math.floor(Math.random() * 6) + 1; 
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let sum = dice1 + dice2;
    return sum;
}

function isEven(num) {
    return num % 2 === 0;
}

buttonResult.addEventListener("click", () => {
    let sum = rollDice(); 
    let userChoice = select.value;
    let isSumEven = isEven(sum); 

    let userWon =
        (userChoice === "value1" && isSumEven) || 
        (userChoice === "value2" && !isSumEven);  

    // Mostrar resultado en pantalla
    result.innerHTML = userWon
        ? `<strong style="color:blue;">¡Correcto! La suma fue ${sum}, que es ${isSumEven ? "PAR" : "IMPAR"}.</strong>`
        : `<strong style="color:red;">Incorrecto. La suma fue ${sum}, que es ${isSumEven ? "PAR" : "IMPAR"}.</strong>`;
});
