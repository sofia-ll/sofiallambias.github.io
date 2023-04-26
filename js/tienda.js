
const contenedorObras = document.querySelector("#contenedor-obras")

const carritoLaminas = recuperarCarrito() || []

const laminas = [{imagen:"../img/litografia/paradigmas1.jpg", alt:"obras tecnica litografia", numeroLamina: 0, nombre: "Litografía 1", precio: 10000, tamano: "35 cm x 50 cm"},
                {imagen:"../img/escultura/escultura1.jpg", alt:"obras tecnica escultura", numeroLamina: 1, nombre: "Escultura 1", precio: 10000, tamano: "35 cm x 50 cm"},
                {imagen:"../img/pintura1.jpg", alt:"obras tecnica pintura", numeroLamina: 2, nombre: "Pintura 1", precio: 12000, tamano: "50 cm x 50 cm"},
                {imagen:"../img/calados1.jpg", alt:"obras tecnica calado", numeroLamina: 3, nombre: "Calado 1", precio: 10000, tamano: "35 cm x 50 cm"},
                {imagen:"../img/dibujo1.jpg", alt:"obras tecnica dibujo", numeroLamina: 4, nombre: "Dibujo 1", precio: 12000, tamano: "50 cm x 50 cm"},
                {imagen:"../img/fotografia1.jpg", alt:"obras tecnica fotografia", numeroLamina: 5, nombre: "Fotografía 1", precio: 10000, tamano: "35 cm x 50 cm"}];


function cardsDinamicasHTML(lamina){
        return `<img class="img_obras" src="${lamina.imagen}" alt="${lamina.alt}">
                    <div class="cont">
                        <div class="card-body text-center">
                            <p class="card-text fs-6 justify producto titulo"><span class="bold"></span> ${lamina.nombre}</p>
                        </div>
                        <div class="card-body text-center">
                            <p class="card-text fs-6 justify tamano"><span class="bold">${lamina.tamano}</span> </p>
                        </div>
                        <div class="card-body text-center">
                            <p class="card-text fs-6 justify precio"><span class="bold">$ ${lamina.precio}</span> </p>
                        </div>
                        <div class="card-body text-center">
                            <button class="card-text fs-6 justify button boton_tienda" id="${lamina.numeroLamina}">
                                Agregar
                            </button>
                        </div>
                    </div>`
    }

function cargarLaminas() {
    laminas.forEach((lamina) =>{
        const card = document.createElement("article");
        card.classList.add("artimgobras");
        card.innerHTML = cardsDinamicasHTML(lamina);
        contenedorObras.appendChild(card);

        const btn = document.getElementById(`${lamina.numeroLamina}`)
        btn.addEventListener("click", agregarAlCarrito)
    }); 
    }

cargarLaminas();



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


