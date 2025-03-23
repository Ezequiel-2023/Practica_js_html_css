// 25. Escribir un programa que genere un arreglo de longitud aleatoria y en cada posición guarde otro arreglo también de longitud aleatoria.

function generaArreglo() {
    const longitudPrincipal = Math.floor(Math.random() * 10) + 1; //entradas del usuario
    
    const arregloPrincipal = [];
    for (let i = 0; i < longitudPrincipal; i++) {
        const longitudInterna = Math.floor(Math.random() * 10) + 1; 

        const arregloInterno = [];
        for (let j = 0; j < longitudInterna; j++) {
            arregloInterno.push(Math.floor(Math.random() * 100)); 
        }

        arregloPrincipal.push(arregloInterno); // Agregar el arreglo interno al principal
    }

    return arregloPrincipal;
}

console.log(generaArreglo());
