
const fs = require('fs');
const path = require('path');

// Lista de enunciados de los ejercicios (convertidos en comentarios para cada archivo JS)
const ejercicios = [
  `// 1. Escribir una función llamada “transmografo”. Esta función debe aceptar tres argumentos, los cuales serán números. Esta función debe retornar un valor numérico el cual es el resultado de multiplicar los primeros dos números y luego elevarlo a la potencia del tercer número.`,
  `// 2. Escribir un programa que permita jugar “Piedra, Papel y Tijera” a dos jugadores por turnos. Al inicio debe solicitar el nombre de cada jugador y la opción elegida.`,
  `// 3. Escribir una función que acepte un argumento, el cual es un número. Esta función debe validar si es un número binario y retornar 1 si lo es, o 0 si no lo es.`,
  `// 4. Escribir una función que devuelva una frase con las palabras ordenadas al revés. Acepta la frase como argumento.`,
  `// 5. Escribir una función que muestre en pantalla un rectángulo ascii. Esta función debe aceptar el alto y el largo del rectángulo como argumentos.`,
  `// 6. Escribir un programa que solicite al usuario una cantidad indefinida de números, los guarde en un array, y al ingresar 'suma' o 'multiplicación', se muestre el resultado.`,
  `// 7. Hacer una función que acepte dos números como argumentos y retorne 1 si la suma de los números es un número primo, de lo contrario, retorna 0.`,
  `// 8. Escribir una función que reciba una frase como argumento y retorne el conteo de vocales.`,
  `// 9. Escribir un programa que pida al usuario ingresar al menos 3 a 5 números y determine si forman una secuencia consecutiva o no.`,
  `// 10. Escribir un programa que encuentre todos los divisores de un número ingresado por el usuario.`,
  `// 11. Escribir un programa que permita al usuario ingresar un número, genere un arreglo de números aleatorios y luego muestre el máximo, mínimo y promedio.`,
  `// 12. Escribir una función que genere un arreglo de dimensión n con valores aleatorios, imprima el arreglo y devuelva un string que concatene los valores en orden inverso.`,
  `// 13. Escribir un programa que genere 2 arreglos, uno con números positivos y otro con negativos, luego los intercale en un nuevo arreglo.`,
  `// 14. Hacer un programa que solicite al usuario palabras hasta que ingrese 'finalizar', y muestre la palabra más larga ingresada.`,
  `// 15. Hacer una función que valide una contraseña basada en dos textos ingresados, asegurando que incluya dos números, una letra mayúscula y mínimo 6 caracteres.`,
  `// 16. Hacer un programa que permita ingresar 2 textos, luego concatenar el más corto al más largo al inicio y al final, pero con el texto corto al revés al final.`,
  `// 17. Escribir un programa que encuentre cuántas veces está contenido un texto dentro de otro.`,
  `// 18. Hacer un programa que muestre las letras diferentes de una frase ingresada por el usuario y el total de letras distintas.`,
  `// 19. Escribir un programa donde el usuario ingrese una frase, y una función cuente y muestre cuántas palabras contiene.`,
  `// 20. Escribir un programa que reciba un mensaje y lo codifique sumando 2 al código ASCII de cada letra.`,
  `// 21. Escriba un programa que reciba el mensaje codificado del ejercicio anterior y obtenga el mensaje original.`,
  `// 22. Escriba un programa que genere un número aleatorio entre 1 y 10 y permita al usuario adivinarlo en 1 a 3 intentos.`,
  `// 23. Escriba un programa que solicite al usuario cinco números y verifique si la distancia entre todos los números es igual.`,
  `// 24. Escribir un programa que simule el lanzamiento de dos dados y permita al usuario adivinar si la suma será par o impar.`,
  `// 25. Escribir un programa que genere un arreglo de longitud aleatoria y en cada posición guarde otro arreglo también de longitud aleatoria.`,
  `// 26. Escriba una función llamada "calcular_promedio" que pida 10 números vía prompt y devuelva el promedio de esos números.`,
  `// 27. Escribe una función llamada "calcular_descuento" que reciba el precio de un producto y un porcentaje de descuento como parámetros, y devuelva el precio con el descuento aplicado.`,
  `// 28. Hacer un programa que calcule el índice de masa corporal (IMC). Se debe utilizar una función para calcularlo, esta debe recibir dos parámetros: el peso en libras y la altura en pulgadas de una persona.`,
  `// 29. Escriba una función llamada "imprimir_tabla_multiplicar" que reciba un número entero como parámetro y imprima la tabla de multiplicar de ese número del 1 al 10.`,
  `// 30. Hacer un programa de una calculadora básica que muestre un menú con las opciones sumar, restar, multiplicar y dividir.`,
  `// 31. Escriba una función llamada "calcular_potencia" que reciba dos números enteros positivos como parámetros: la base y el exponente. Utiliza recursividad para calcular la potencia.`,
  `// 32. Escriba una función recursiva que calcule el factorial de un número entero.`,
  `// 33. Llevar a cabo un programa el cual tenga guardados los días de la semana en un arreglo y que permita realizar consultas al arreglo.`,
  `// 34. Hacer un programa que que consuma la API  https://dog.ceo/dog-api/` 
  `// 35. Hacer un programa que que consuma la API https://docs.potterdb.com/es/apis/rest#recursos`
  `// 36. Hacer un programa que que consuma la API https://pokeapi.co/  `
  `// 37. Hacer un programa que que consuma la API https://rickandmortyapi.com/documentation  ` 
   `// 38. Hacer un programa que que consuma la API  https://web.dragonball-api.com/ ` 
   `// 39. Hacer un programa que que consuma la API https://fakeapi.platzi.com/en  Reto Incluir Carrito de Compra y CRUD ` 
   `// 40. Hacer un programa de presupuesto puedes buscar sugerencias en Google o solicitar una sugerencia en la  IA ` 

]; 

// Función para crear los archivos de cada ejercicio
ejercicios.forEach((ejercicio, index) => {
  const folderName = `ejercicio${index + 1}`;
  const folderPath = path.join(__dirname, folderName);
  
  // Crear la carpeta del ejercicio
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
  
  // Crear el archivo index.html con Bootstrap incluido
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Ejercicio ${index + 1}</title>
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <div class="container text-center">
          <h1>Ejercicio ${index + 1}</h1>
          <p>Abre la consola para ver la lógica del ejercicio.</p>
      </div>
      <script src="script.js"></script>
  </body>
  </html>
  `;
  fs.writeFileSync(path.join(folderPath, 'index.html'), htmlContent);

  // Crear el archivo style.css
  const cssContent = `
  body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 50px;
  }

  h1 {
      color: #333;
  }
  `;
  fs.writeFileSync(path.join(folderPath, 'style.css'), cssContent);

  // Crear el archivo script.js con el enunciado del ejercicio
  fs.writeFileSync(path.join(folderPath, 'script.js'), ejercicio);

  console.log(`Archivos para el ejercicio ${index + 1} creados exitosamente en ${folderName}/`);
});

console.log("Todos los archivos han sido creados exitosamente.");

