// 32. Escriba una función recursiva que calcule el factorial de un número entero.

function factorial(n) {
    if (n === 0 || n === 1) return 1; // Caso base
    return n * factorial(n - 1); // Llamada recursiva
}

console.log(factorial(5)); // 120
