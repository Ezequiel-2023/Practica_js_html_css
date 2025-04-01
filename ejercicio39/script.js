// Selección de elementos
let result = document.getElementById("resultado");
let buttonCar = document.getElementById("buttonCar");
let resultCarBuy = document.getElementById("carBuy");

let urlBase = "https://fakestoreapi.com/products";

let arrayCar = []; // Array para almacenar los productos del carrito

// Función para obtener los productos
let getProducto = async () => {
    try {
        let response = await axios.get(urlBase);
        let productosData = response.data;
        
        result.innerHTML = productosData.map((p, index) => `
            <div class="card">
                <img  src="${p.image}" class="card-img-top" alt="${p.title}">
                <div class="card-body">
                    <h5 class="card-title">${p.title}</h5>
                    <p class="card-text">
                        <br>${p.category}</br>
                        <br>Q.${p.price}</br>
                    </p>
                    <button class="buttonAgregar" id="buttonAgregar-${index}" type="button">Agregar</button>
                </div>
            </div>
        `).join("");

        // Agregar eventos a los botones "Agregar"
        productosData.forEach((producto, index) => {
            document.getElementById(`buttonAgregar-${index}`).addEventListener("click", () => {
                agregarAlCarrito(producto);
            });
        });
    } catch (e) {
        console.error("Error en la solicitud: " + e.message);
    }
};

// Función para agregar productos al carrito
function agregarAlCarrito(producto) {
    arrayCar.push(producto);
    actualizarContadorCarrito();
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(index) {
    arrayCar.splice(index, 1);
    actualizarContadorCarrito();
    renderizarCarrito();
}

// Función para renderizar el carrito en el DOM
function renderizarCarrito() {
    let total = arrayCar.reduce((sum, item) => sum + item.price, 0);

    resultCarBuy.innerHTML = `
        <div class="carBuy" style="background:#dcdcdc; box-shadow: 0px 8px 16px rgb(0, 0, 0);">       
            <h5 class="card-title">Finalizar Mi pedido</h5>
            <table>
                <tr>
                    <th>Articulo</th>
                    <th>Cantidad</th>
                    <th>Precio U.</th>
                    <th>Total</th>
                    <th>Eliminar</th>
                </tr>
                ${arrayCar.map((item, index) => `
                    <tr>
                        <td>${item.title}</td>
                        <td>1</td>
                        <td>Q.${item.price}</td>
                        <td>Q.${item.price}</td>
                        <td>
                            <button class="buttonEliminar" onclick="eliminarDelCarrito(${index})">Eliminar</button>
                        </td>
                    </tr>
                `).join("")}
                <tr>
                    <td colspan="3"><strong>Total a pagar:</strong></td>
                    <td colspan="2">Q.${total.toFixed(2)}</td>
                </tr>
            </table>
            <button class="buttonFinalizar" id="buttonFinalizar" type="button">Pagar</button>
            <strong>Gracias por su compra.</strong>  
        </div>
    `;

    let buttonFinalizar = document.getElementById("buttonFinalizar");
    if (buttonFinalizar) {
        buttonFinalizar.addEventListener("click", () => {
            resultCarBuy.innerHTML = "";
            mensajeAlert();
            arrayCar = [];
            actualizarContadorCarrito();
        });
    }
}

// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
    let contador = document.getElementById("buttonCar");
    contador.setAttribute("data-count", arrayCar.length);
    contador.classList.add("shake");
    setTimeout(() => contador.classList.remove("shake"), 500);
}

// Inicializar la obtención de productos
getProducto();

// Evento para mostrar el carrito al presionar el botón "Carrito"
buttonCar.addEventListener("click", renderizarCarrito);

function mensajeAlert() {
    let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = `
        <div class="alert" id="alerta">
            <span class="closebtn" onclick="document.getElementById('alerta').style.display='none';">&times;</span>
            ¡Gracias por tu compra!
        </div>
    `;
    // Ocultar la alerta automáticamente después de 3 segundos
    setTimeout(() => {
        let alerta = document.getElementById("alerta");
        if (alerta) {
            alerta.style.display = "none";
        }
    }, 3000);
}
