const carrito = JSON.parse(localStorage.getItem("carrito")) || []; // Este es el array guardado en JSON
const laminasCarrito = document.querySelector("#laminas_carrito"); // Este es el tbody carrito con laminas seleccionadas por el usuario
const URL = "../js/laminas.json";
const botonCompra = document.querySelector("#boton_compra");
const divTotal = document.querySelector("#total-carrito");
const laminas = [];
const carritoLaminas = recuperarCarrito() || []

function actualizarTotalLaminas(carrito){
laminasCarrito.innerText = carrito.length;
}

actualizarTotalLaminas();

function retornoLaminaCarrito(lamina) {
                        return `<tr>
                            <th scope="row">
                            <img class="img_obras_carrito" src="${lamina.imagen}" alt="${lamina.alt}">
                            </th>
                            
                            <td class="carrito-laminas-titulo">
                                <small class="negrita">Título</small>
                                <p>${lamina.nombre}</p>
                            </td>
                            <td class="carrito-lamina-tamano">
                                <small>Tamaño</small>
                                <p>${lamina.tamano}</p>
                            </td>
                            <td class="carrito-lamina-precio">
                                <small>Precio</small>
                                <p>$${lamina.precio}</p>
                            </td>
                            <td class="carrito-lamina-unidades">
                                <small>Unidades</small>
                                <p>${lamina.unidades} </p>
                            </td>

                            <td>
                                <button id="${lamina.id}" class="carrito-laminas-agregar"> 
                                <i class="bi bi-bag-plus-fill"></i>
                                </button>
                            </td>

                            <td>
                                <button id="${lamina.id}" class="carrito-laminas-eliminar"> 
                                <i class="bi bi-trash-fill"></i>
                                </button>
                            </td>

                        </tr>`
}

function cargarLaminas() {
    laminasCarrito.innerHTML = ""
    if (carrito.length > 0){
        carrito.forEach((lamina) => { laminasCarrito.innerHTML += retornoLaminaCarrito(lamina)})
        clickBotonEliminar()
        divTotal.innerHTML = "$" + subtotal()
    }
    else{
        laminasCarrito.innerHTML = "¡Tu carrito está vacío! 😞"
    }
}

cargarLaminas(carrito);

// function cargarLaminasCarrito() {
//     laminas.forEach(lamina => laminasCarrito.innerHTML += retornoLaminaCarrito(lamina));
// }

// cargarLaminasCarrito(carrito)

function terminarCompra(){
        if(carrito.length === 0){
            console.warn("¡Tu carrito está vacío! 😞")
            return
        }
        else {
            subtotal()
        }
            }
            
function subtotal(){
    const total = carrito.reduce((acc, lamina) => acc + lamina.precio, 0).toFixed(2)
    // confirm(`El total es de $ ${total}`) PONERLO EN SWEET ALERT
}

function guardarCarrito(carrito) {
	if (carrito.length > 0) {
		localStorage.setItem("carritoLaminas", JSON.stringify(carrito));
	}
}

function recuperarCarrito(){
    const recuperoCarrito = JSON.parse(localStorage.getItem("carritoLaminas")) 
    return console.table(recuperoCarrito);
}

function clickBotonEliminar(){
    const boton_eliminar = document.querySelector("button.carrito-laminas-eliminar")
    if (boton_eliminar !== null){
        botonCompra.addEventListener("click", (e)=> {
            let indexLamina = carrito.findIndex(lamina => lamina.id === parseInt(e.target.id))
                carrito.splice(indexLamina, 1)
                guardarCarrito()
                cargarLaminasCarrito()
        }
        )
    }
}

botonCompra.addEventListener("click", ()=>{
    Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: '¡Que disfrutes tu compra!',
    showConfirmButton: false,
    timer: 1500
})
} )

// function terminarCompra(){
//         if(carrito.length === 0){
//             console.warn("¡Tu carrito está vacío! 😞")
//             return
//         }
//         else {
//             subtotal( )
//         }
//             }






