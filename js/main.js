
function guardarCarrito(carrito) {
	if (carrito.length > 0) {
		localStorage.setItem("carritoLaminas", JSON.stringitfy(carrito));
	}
}

function subtotal(){
    const total = carrito.reduce((acc, lamina) => acc + lamina.precio, 0).toFixed(2)
    // confirm(`El total es de $ ${total}`) PONERLO EN SWEET ALERT
}

function actualizarTotalLaminas(carrito){
laminasCarrito.innerText = console.log(`${carrito.length}`);
}

actualizarTotalLaminas();

