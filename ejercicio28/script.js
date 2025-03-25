// 28. Hacer un programa que calcule el índice de masa corporal (IMC). Se debe utilizar una función para calcularlo,
//  esta debe recibir dos parámetros: el peso en libras y la altura en pulgadas de una persona.

function imc(libras, alturaPulgadas) {
    let pesoKg = libras * 0.453592; // Convertir libras a kg
    let alturaMetros = alturaPulgadas * 0.0254; // Convertir pulgadas a metros
    return pesoKg / (alturaMetros ** 2);
}

console.log("IMC: " + imc(90, 60)); // Ejemplo con 90 libras y 60 pulgadas
