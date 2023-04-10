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

