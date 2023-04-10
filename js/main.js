let mensajeCosto = "";
let continuar = true;

const mensajeInicial = "¿Querés comprar láminas de la artista SOFIA LLAMBIAS?"
const mensajeUno = "¡Te damos la bienvenida a nuestra TIENDA online!"
const mensajeDos = "¿Querés comprar obras originales de la artista SOFIA LLAMBIAS?"
const mensajeTres = "Contactame al 1532122100 o a sofiallambias@gmail.com"
const mensajeCuatro = "Te invito a que recorras mi sitio web. Vas a ver que hago litografías, esculturas, dibujos, pinturas, fotografía y video, también calados. Cada técnica tiene su encanto. ¡Ojalá disfrutes de mis obras tanto como yo al hacerlas!";


const carrito = []

const laminas = [{imagen:"../img/litografia/paradigmas1.jpg", numeroLamina: 0, nombre: "Litografía 1", precio: 10000, tamano: "35 cm x 50 cm"},
                {imagen:"../img/escultura/escultura1.jpg", numeroLamina: 1, nombre: "Escultura 1", precio: 10000, tamano: "35 cm x 50 cm"},
                {imagen:"../img/pintura1.jpg", numeroLamina: 2, nombre: "Pintura 1", precio: 12000, tamano: "50 cm x 50 cm"},
                {imagen:"../img/calados1.jpg", numeroLamina: 3, nombre: "Calado 1", precio: 10000, tamano: "35 cm x 50 cm"},
                {imagen:"../img/dibujo1.jpg", numeroLamina: 4, nombre: "Dibujo 1", precio: 12000, tamano: "50 cm x 50 cm"},
                {imagen:"../img/fotografia1.jpg", numeroLamina: 5, nombre: "Fotografía 1", precio: 10000, tamano: "35 cm x 50 cm"}];

function comprarLaminas(){
    
        alert(mensajeUno)
        if(confirm(mensajeInicial)){
            iniciarCompra()
        }


        else{
            if(confirm(mensajeDos)){
                alert(mensajeTres)
                alert(mensajeCuatro)
                }
            else{
                alert(mensajeCuatro)
            }
        }
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

function buscarLamina(numeroLamina) {
    let busquedaLamina = laminas.find(lamina => lamina.numeroLamina === parseInt(numeroLamina))
        return busquedaLamina;
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


// function cardsDinamicasMobile(){
    const cardsDinamicasMob = (lamina)=>{
        return `<div class="col fotoperfilcv mainmobile">
            <div class="card" style="width: 100%;">
                    <div class="card-img-top">
                        ${lamina.imagen}   
                    </div>
                    <div class="card-body text-center">
                        <p class="card-text fs-6 justify producto"><span class="bold">0 - </span> ${lamina.nombre} </p>
                    </div>
                    <div class="card-body text-center">
                        <p class="card-text fs-6 justify tamaño"><span class="bold">${lamina.tamano}</span> </p>
                    </div>
                    <div class="card-body text-center">
                        <p class="card-text fs-6 justify precio"><span class="bold">${lamina.precio}</span> </p>
                    </div>
                    <div class="card-body text-center">
                        <p class="card-text fs-6 justify precio"><span class="bold">${lamina.unidades}</span> </p>
                    </div>
                    <div class="card-body text-center boton-cards">
                        <button class="card-text fs-6 justify button ${lamina.numeroLamina} ">AGREGAR</button>
                    </div>
            </div>
        </div>`
    }
// }

function onClickBotones() {
	const buttons = document.querySelectorAll("button");
	for (boton of buttons) {
		boton.addEventListener("click", (e) => {
			agregarAlCarrito(e.target.id);
		});
	}
}

onClickBotones()

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