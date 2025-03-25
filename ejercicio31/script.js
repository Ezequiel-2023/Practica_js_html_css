// 31. Escriba una función llamada "calcular_potencia" que reciba dos números enteros positivos como parámetros: la base y el exponente. Utiliza recursividad para calcular la potencia.

function calcular_potencia(base, exponente) {
    if (exponente === 0) {
        return 1; // Caso base: cualquier número elevado a 0 es 1
    }
    return base * calcular_potencia(base, exponente - 1); // Llamada recursiva
}

console.log(calcular_potencia(2, 3)); // 8
console.log(calcular_potencia(5, 4)); // 625
