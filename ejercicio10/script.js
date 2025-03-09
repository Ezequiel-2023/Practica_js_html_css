// 10. Escribir un programa que encuentre todos los divisores de un número ingresado por el usuario.
let number = document.getElementById("number");
let button = document.getElementById("button");
let resultado = document.getElementById("resultado");

function numeroDivisor() {
    let num = parseInt(number.value);
    if (isNaN(num) || num <= 0) {// Validar entrada del usuario
        resultado.textContent = "Ingrese un número válido mayor a 0.";
        return;
    }
    let divisores = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisores.push(i);
        }
    }
    resultado.textContent = `El número ${num} es divisible por: ${divisores.join(", ")}`;
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    numeroDivisor();
});
