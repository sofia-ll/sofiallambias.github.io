const botonCompra = document.querySelector("#boton_compra");
const divTotal = document.querySelector("#total-carrito");
const laminas = [];
const tablaLaminasCarrito = document.querySelector("#laminas_carrito");
const botonVaciarCarrito = document.querySelector("#boton_vaciar_carrito");

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
    tablaLaminasCarrito.innerHTML = ""
    if (carritoLaminas.length > 0){
        carritoLaminas.forEach((lamina) => { tablaLaminasCarrito.innerHTML += retornoLaminaCarrito(lamina)})
        clickBotonEliminar()
        divTotal.innerHTML = "$" + subtotal()
    }
    else{
        tablaLaminasCarrito.innerHTML = "¡Tu carrito está vacío! 😞"
        divTotal.innerHTML = "$" + "0"
    }
}

cargarLaminas();

function cargarLaminasCarrito() {
    laminas.forEach(lamina => laminasCarrito.innerHTML += retornoLaminaCarrito(lamina));
}            

function subtotal(){
    return carritoLaminas.reduce((acc, lamina) => acc + lamina.precio, 0).toFixed(2)
}

subtotal();

function guardarCarrito(carrito) {
	if (carrito.length > 0) {
		localStorage.setItem("carritoLaminas", JSON.stringify(carrito));
	}
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
        title: `El total es de $ ${subtotal()}`,
        text: "¿Desea confirmar la compra?",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI'
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            '¡Muchas gracias!',
            '¡Que disfrutes tus láminas!',
            'success'
            )
            }
        })
        })

const vaciarCarrito = () =>{
    carritoLaminas.splice (0, carritoLaminas.length)
    localStorage.setItem("carritoLaminas", JSON.stringify(carritoLaminas))
}

botonVaciarCarrito.addEventListener("click", ()=>{
        vaciarCarrito()
        cargarLaminas()

        })








