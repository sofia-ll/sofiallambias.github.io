
const contenedorObras = document.querySelector("#contenedor-obras")

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

