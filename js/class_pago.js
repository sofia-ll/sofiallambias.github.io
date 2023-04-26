class Pago{
    constructor(carrito){
        this.carrito = carrito
    }
    subtotal(){
        if(carrito.length > 0 ){
            return this.carrito.reduce((acc, lamina) => acc + lamina.precio * lamina.unidades, 0).toFixed(2)
            } else{
            return "⛔️ Hubo un error"
        }
        }
    confirmarCompra(){
        if(this.subtotal() !== "⛔️ Hubo un error"){
            return alert("¡Muchas gracias por su compra! ¡Que la disfrutes! 😀")
        }
        else{
            return alert("No pudimos efectuar el pago. Lamentamos la molestia")
        }
    }
}

<p id="carrito-vacio" class="carrito-vacio">No hay láminas en tu carrito <i class="bi bi-emoji-frown">.</i></p>

let mensajeCosto = "";
let continuar = true;

const mensajeInicial = "¿Querés comprar láminas de la artista SOFIA LLAMBIAS?"
const mensajeUno = "¡Te damos la bienvenida a nuestra TIENDA online!"
const mensajeDos = "¿Querés comprar obras originales de la artista SOFIA LLAMBIAS?"
const mensajeTres = "Contactame al 1532122100 o a sofiallambias@gmail.com"
const mensajeCuatro = "Te invito a que recorras mi sitio web. Vas a ver que hago litografías, esculturas, dibujos, pinturas, fotografía y video, también calados. Cada técnica tiene su encanto. ¡Ojalá disfrutes de mis obras tanto como yo al hacerlas!";

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

function buscarLamina(numeroLamina) {
    let busquedaLamina = laminas.find(lamina => lamina.numeroLamina === parseInt(numeroLamina))
        return busquedaLamina;
}
