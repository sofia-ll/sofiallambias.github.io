const carrito = JSON.parse(localStorage.getItem("carrito")) || []; // Este es el array guardado en JSON
const URL = "../js/laminas.json";
const laminas = [];

// const carritoLaminas = recuperarCarrito() || []
const contenedorObras = document.querySelector("#contenedor-obras")

function traerLaminas(){
    fetch(URL)
    .then(response => response.json())
    .then(data => laminas.push(...data))
    .then(data => cargarLaminas(laminas))
}

traerLaminas();


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
                            <button class="card-text fs-6 justify button boton_tienda" id="${lamina.id}">
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

        const btn = document.getElementById(`${lamina.id}`)
        btn.addEventListener("click", () => agregarAlCarrito(lamina.id))
    }); 
    }

cargarLaminas();

function recuperarCarrito(){
    const recuperoCarrito = JSON.parse(localStorage.getItem("carritoLaminas")) 
    return recuperoCarrito;
}

function agregarAlCarrito(id) {
	let resultado = laminas.find((lamina) => lamina.id === parseInt(id));
	if (resultado !== undefined) {
		carritoLaminas.push(resultado);
		console.log("Se agregó la lámina", resultado.nombre, "al carrito.");
		guardarCarrito(carritoLaminas);
	}
    console.log(carritoLaminas);
    actualizarContador();
}

function guardarCarrito(carrito) {
	if (carrito.length > 0) {
		localStorage.setItem("carritoLaminas", JSON.stringify(carritoLaminas));
	}
}

function onClickBotones() {
	const buttons = document.querySelectorAll("button");
	console.log(buttons);
	for (boton of buttons) {
		boton.addEventListener("click", (e) => {
			agregarAlCarrito(e.target.id) ;
		});
	}
}




