const carrito = []

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

function cargarLaminas(array){
array.forEach(element => {
    tbody.innerHTML += retornoLaminaCarrito(element)
})
onClickBotones();
}

cargarLaminas(carrito)

function onClickBotones(){
    const buttons = document.querySelectorAll("button")
    for (boton of buttons){
        boton.addEventListener("click",(e)=> {
        agregarAlCarrito(e.target.numeroLamina)
        })
    }
}

function onClickBotones() {
	const buttons = document.querySelectorAll("button");
    if (botones !== null){
        for (const button of buttons) {
		button.addEventListener("click", (e) => {
			agregarAlCarrito(e.target.id);
		});
	}
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


let unidades = parseInt(prompt("¿Cuántas unidades querés llevar?"))

function iniciarCompra() {

    let numeroLamina = prompt("¿Cuál es el número de la lámina que querés comprar?")
    let laminaComprada = buscarLamina(numeroLamina)
        
    if (laminaComprada === undefined) {
        alert("⛔️ Elegí una lámina, por favor.")
        return
    }
    else {
        carrito.push(laminaComprada)
        alert(`La lámina ${laminaComprada.nombre} se agregó tu carrito. 😀`)
        let unidades = parseInt(prompt("¿Cuántas unidades querés llevar?"))
        let seguir = confirm("¿Querés elegir otra lámina?")
        if(seguir) {
            iniciarCompra()
        }
        else{
            terminarCompra()
        }
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

function guardarCarrito(carrito) {
	if (carrito.length > 0) {
		localStorage.setItem("carritoLaminas", JSON.stringify(carrito));
	}
}

