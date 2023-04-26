const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const laminas_carrito = document.querySelector("#laminas_carrito")

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

function cargarLaminas(laminas) {
    laminas.forEach(lamina => laminas_carrito.innerHTML += retornoLaminaCarrito(lamina));
}

cargarLaminas(carrito)

function onClickBotones() {
	const buttons = document.querySelectorAll("button");
    if (buttons !== null){
        for (const button of buttons) {
		button.addEventListener("click", (e) => {
			agregarAlCarrito(e.target.id);
		});
	}
    }
	
}
