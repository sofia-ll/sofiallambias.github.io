const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function cargarLaminas(array) {
	array.forEach((element) => {
		tbody.innerHTML += retornoLaminaCarrito(element);
	});
	onClickBotones();
}

function onClickBotones() {
	const buttons = document.querySelectorAll("button");
	console.log(buttons);
	for (boton of buttons) {
		boton.addEventListener("click", (e) => {
			agregarAlCarrito(e.target.id);
		});
	}
}

function guardarCarrito(carrito) {
	if (carrito.length > 0) {
		localStorage.setItem("carritoLaminas", JSON.stringitfy(carrito));
	}
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
    const total = carrito.reduce((acc, lamina) => acc + lamina.precio, 0).toFixed(2)
    // confirm(`El total es de $ ${total}`) PONERLO EN SWEET ALERT
}

function agregarAlCarrito(numeroLamina) {
	let resultado = laminas.find((lamina) => lamina.numeroLamina === parseInt(numeroLamina));
	if (resultado !== undefined) {
		carrito.push(resultado);
		// console.log("Se agregó la lámina", resultado.nombre, "al carrito.") PONERLO EN SWEET ALERT;
		guardarCarrito(carrito);
	}
}

function guardarCarrito(carrito) {
	if (carrito.length > 0) {
		localStorage.setItem("carritoLaminas", JSON.stringify(carrito));
	}
}

