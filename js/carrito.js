const carrito = JSON.parse(localStorage.getItem("carrito")) || []; // Este es el array guardado en JSON
const laminas_carrito = document.querySelector("#laminas_carrito"); // Este es el carrito con laminas seleccionadas por el usuario
const URL = "../js/laminas.json";
const botonCompra = document.querySelector("#boton_compra");

function actualizarTotalLaminas(carrito){
    laminasCarrito.innerText = `${carrito.length}`;
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
                                <button id="${lamina.numeroLamina}" class="carrito-laminas-agregar"> 
                                <i class="bi bi-bag-plus-fill"></i>
                                </button>
                            </td>

                            <td>
                                <button id="${lamina.numeroLamina}" class="carrito-laminas-eliminar"> 
                                <i class="bi bi-trash-fill"></i>
                                </button>
                            </td>

                        </tr>`
}

function cargarLaminas(lamina) {
    laminas.forEach(lamina => laminasCarrito.innerHTML += retornoLaminaCarrito(lamina));
}

cargarLaminas(carrito)

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
    const total = carrito.reduce((acc, lamina) => acc + lamina.precio * unidades, 0).toFixed(2)
    confirm(`El total es de $ ${total}`)
    console.log(total)
}

function agregarAlCarrito(numeroLamina) {
	let resultado = laminas.find((lamina) => lamina.numeroLamina === parseInt(numeroLamina));
	if (resultado !== undefined) {
		carrito.push(resultado);
		console.log("Se agregó la lámina", resultado.nombre, "al carrito.");
		guardarCarrito(carrito);
	}
    console.log(carrito);
}

function guardarCarrito(carrito) {
	if (carrito.length > 0) {
		localStorage.setItem("carritoLaminas", JSON.stringify(carrito));
	}
}

function recuperarCarrito(){
    const recuperoCarrito = JSON.parse(localStorage.getItem("carritoLaminas")) 
    console.table()

}

function clickBotonEliminar(){
    const boton_eliminar = document.querySelector("button.carrito-laminas-eliminar")
    if (boton_eliminar !== null){
        botonCompra.addEventListener("click", (e)=> {
            let indexLamina = carrito
        }
        )
    }
}


