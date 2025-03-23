// 26. Escriba una función llamada "calcular_promedio" que pida 10 números vía prompt y devuelva el promedio de esos números.


function generaArreglo() {
    const entradaDelUsuario = Math.floor(Math.random() * 10) + 1; //entradas del usuario
    const array = [] 
    for (let i = 0; i < entradaDelUsuario; i++) {
        array.push(Math.floor(Math.random() * 100)); 
    }
    return array;
}

console.log(generaArreglo());