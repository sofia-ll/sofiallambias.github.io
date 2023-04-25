
const tbody = document.querySelector("tbody")

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

// imagen:"../img/litografia/paradigmas1.jpg", numeroLamina: 0, nombre: "Litografía 1", precio: 10000, tamano: "35 cm x 50 cm", id: "cero"},

function cargarLaminas(array){
array.forEach(element => {
    tbody.innerHTML += retornoLaminaCarrito(element)
})
onClickBotones();
}

cargarLaminas(laminas)

function onClickBotones(){
    const buttons = document.querySelectorAll("button")
    for (boton of buttons){
        boton.addEventListener("click",(e)=> {
        agregarAlCarrito(e.target.numeroLamina)
        })
    }
}

function agregarAlCarrito(numeroLamina) {
	let resultado = laminas.find((lamina) => lamina.numeroLamina === parseInt(numeroLamina));
	if (resultado !== undefined) {
		carrito.push(resultado);
		console.log("Se agregó la lámina", resultado.nombre, "al carrito.");
		guardarCarrito(carrito);
	}
}

function guardarCarrito(carrito){
    if (carrito.length > 0){
        localStorage.setItem("carritoLaminas", JSON.stringitfy(carrito))
    }
}

function recuperarCarrito(){
    const recuperoCarrito = JSON.parse(localStorage.getItem("carritoLaminas")) 
    console.table()

}