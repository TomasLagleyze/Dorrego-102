class optica{
    constructor (id, marca, modelo, lado, precio, imagen){
    this.id = id 
    this.marca = marca
    this.modelo = modelo
    this.lado = lado
    this.precio = precio
    this.imagen = imagen}

    mostrarInfoOpticas (){
        console.log (`La marca es ${marca}, el modelo es ${modelo}, del lado ${lado} y su precio es ${precio}`)
    }
}

const opticas1 = new optica (1,"Chevrolet", "Corsa-Classic", "izq", 35000, "OPTICAS-CHEVROLET-CORSA-CLASSIC.jpg")
const opticas2 = new optica (2,"Chevrolet", "Cruze", "der", 55000, "OPTICAS-CHEVROLET-CRUZE-LD.jpg")
const opticas3 = new optica (3,"Chevrolet", "Onix", "izq", 45000, "OPTICAS-CHEVROLET-ONIX-LS-2013-2016.jpg")
const opticas4 = new optica (4,"Fiat", "Palio", "izq", 15000, "OPTICAS-FIAT-PALIO-12-20.jpg")
const opticas5 = new optica (5,"Ford", "Ecosport", "der", 50000, "OPTICAS-FORD-ECOSPORT-KINETIC-2013-2016.jpg")
const opticas6 = new optica (6,"Ford", "Focus", "izq", 45000, "OPTICAS-FORD-FOCUS-08-13.jpg")
const opticas7 = new optica (7,"Volkswagen", "Gol", "izq", 30000, "OPTICAS-VW-GOL-1999-2005.jpg")
const opticas8 = new optica (8,"Volkswagen", "Polo", "der", 12000, "OPTICAS-VW-POLO.jpg")

const deposito = [ opticas1, opticas2, opticas3, opticas4, opticas5, opticas6, opticas7, opticas8]

let catalogo = document.getElementById("catalogo")

function mostrarCatalogo (array){
    for (let optica of array) {
        let nuevaOptica = document.createElement ("div")
        nuevaOptica.classList.add ("col-12", "col-md-6", "col-lg-4", "my-3")
        nuevaOptica.innerHTML =
       `  <div id="${optica.id}" div class="card" style="width: 18rem;">
     <img src="imagenes/${optica.imagen}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${optica.marca}</h5>
       <h5 class="card-title2">${optica.modelo}</h5>
       <h5 class="card-title3">${optica.lado}</h5>
       <h5 class="card-title4">${optica.precio}</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" button id = "btn${optica.id}" class="btn btn-primary">Agregar al carrito</a>
     </div>
   </div>  `
   
   catalogo.appendChild (nuevaOptica)

   let btnAgregar = document.getElementById(`btn${optica.id}`)
   console.log(btnAgregar)
   btnAgregar.addEventListener("click", ()=>{
    console.log(optica)
    console.log(`La optica marca ${optica.marca} modelo ${optica.modelo} ha sido agregada al carrito. Su valor es de ${optica.precio}`)
})
}
}
mostrarCatalogo (deposito)



