// 15. Hacer una función que valide una contraseña ,
//  asegurando que incluya dos números, una letra mayúscula y mínimo 6 caracteres.

let password = document.getElementById("password");
let button = document.getElementById("validar");
let resultado = document.getElementById("resultado");


function validarPassword() {
    let texto = password.value.trim();

    if (texto.length < 6) {
        resultado.innerHTML = `<strong style='color:red;'>La contraseña debe tener al menos 6 caracteres.</strong>`;
        return;
    }

    let numeros = texto.match(/\d/g);  // Buscar números
    let mayusculas = texto.match(/[A-Z]/g); // Buscar mayúsculas

    if (!numeros || numeros.length < 2) {
        resultado.innerHTML = `<strong style='color:red;'>La contraseña debe contener al menos 2 números.</strong>`;
        return;
    }

    if (!mayusculas) {
        resultado.innerHTML = `<strong style='color:red;'>La contraseña debe contener al menos 1 letra mayúscula.</strong>`;
        return;
    }

    resultado.innerHTML = `<strong style='color:green;'>Contraseña válida.</strong>`;
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    validarPassword();
});                