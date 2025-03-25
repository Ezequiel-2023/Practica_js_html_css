// 29. Escriba una función llamada "imprimir_tabla_multiplicar" que reciba un número entero como parámetro y imprima la tabla de multiplicar de ese
//  número del 1 al 10.

function imprimir_tabla_multiplicar(number){    
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} X ${number} = ${i * number}`);
    }
}

console.log(imprimir_tabla_multiplicar(5))
