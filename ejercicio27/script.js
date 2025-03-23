// 27. Escribe una función llamada "calcular_descuento" que reciba el precio de un producto y un porcentaje de descuento como parámetros, y devuelva el precio con el descuento aplicado.
function calcular_descuento(number, porcentaje) {
    return number * (porcentaje / 100)
}


console.log(calcular_descuento(10,50))