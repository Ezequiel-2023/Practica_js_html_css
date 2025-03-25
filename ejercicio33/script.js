// 33. Llevar a cabo un programa el cual tenga guardados los días de la semana en un arreglo y que permita realizar consultas al arreglo.


function dias_semana(posicion) {
    let semana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

    if (posicion < 1 || posicion > 7) {
        return "Posición inválida. Ingresa un número del 1 al 7.";
    }

    return semana[posicion - 1]; // Restamos 1 para que 1 corresponda a "domingo"
}

console.log("Día: " + dias_semana(1)); // Domingo
console.log("Día: " + dias_semana(7)); // Sábado
console.log("Día: " + dias_semana(8)); // Error: Posición inválida
