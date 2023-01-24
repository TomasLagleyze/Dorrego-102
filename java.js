// alert ("Seleccione los productos que desea llevar, para salir ingrese 0")
// let seleccionarRepuestos = Number (prompt ("1-Optica Nissan $20000 2-Paragolpe Nissan $50000 3-Parrilla Nissan $8500 4-Taza de rueda Nissan $3500"))
// let seleccionarCantidad;
// let total=0;



// function cantidad (cantidad, precio) 
//           { return cantidad * precio}


//  while (seleccionarRepuestos != 0) {
//     switch (seleccionarRepuestos)
//      {    case 1:
//             seleccionarCantidad= Number(prompt("Usted selecciono Optica de nissan, indique la cantidad"))
//             total += cantidad (seleccionarCantidad, 20000)
//            break;
//            case 2:
//            seleccionarCantidad= Number(prompt("Usted selecciono Paragolpe de nissan, indique la cantidad"))
//            total += cantidad (seleccionarCantidad, 50000)
//            break
//            case 3:
//            seleccionarCantidad= Number(prompt("Usted selecciono Parrilla de nissan, indique la cantidad"))
//            total += cantidad (seleccionarCantidad, 8500)
//            break;
//            case 4:
//            seleccionarCantidad= Number(prompt("Usted selecciono Taza de nissan, indique la cantidad"))
//            total += cantidad (seleccionarCantidad, 3500)
//            break;
//            default:
//             break;
//     }
    
//     seleccionarRepuestos = Number (prompt ("1-Optica Nissan $20000 2-Paragolpe Nissan $50000 3-Parrilla Nissan $8500 4-Taza de rueda Nissan $3500"))
// }

// alert("el total de la compra es de: " + total)


alert ("Seleccione los productos que desea llevar, para salir ingrese 0")

let productos = [
    {
      "articulo": "Optica",
      "marca": "Nissan",
      "precio": 20000
    },
    {
      "articulo": "Paragolpe",
      "marca": "Nissan",
      "precio": 50000
    },
    {
      "articulo": "Parrilla",
      "marca": "Nissan",
      "precio": 8500
    },
    {
      "articulo": "Taza de rueda",
      "marca": "Nissan",
      "precio": 3500
    },
  ] 




let seleccionarRepuestos = Number (prompt ("1-" +  productos[0].articulo +  productos[0].marca +  productos[0].precio + "2-" +  productos[1].articulo +  productos[1].marca +  productos[1].precio
+ "3-" +  productos[2].articulo +  productos[2].marca +  productos[2].precio + "4-" +  productos[3].articulo +  productos[3].marca +  productos[3].precio))
let seleccionarCantidad;
let total=0;



function cantidad (cantidad, precio) 
          { return cantidad * precio}


 while (seleccionarRepuestos != 0) {
    switch (seleccionarRepuestos)
     {    case 1:
            seleccionarCantidad= Number(prompt("Usted selecciono" + productos[0].articulo + productos[0].marca, "indique la cantidad"))
            total += cantidad (seleccionarCantidad, productos[0].precio)
           break;
           case 2:
           seleccionarCantidad= Number(prompt("Usted selecciono" + productos[1].articulo + productos[1].marca, "indique la cantidad"))
           total += cantidad (seleccionarCantidad, productos[1].precio)
           break
           case 3:
           seleccionarCantidad= Number(prompt("Usted selecciono" + productos[2].articulo + productos[2].marca, "indique la cantidad"))
           total += cantidad (seleccionarCantidad, productos[2].precio)
           break;
           case 4:
           seleccionarCantidad= Number(prompt("Usted selecciono" + productos[3].articulo + productos[3].marca, "indique la cantidad"))
           total += cantidad (seleccionarCantidad, productos[3].precio)
           break;
           default:
            break;
    }
    
    seleccionarRepuestos = Number (prompt ("1-Optica Nissan $20000 2-Paragolpe Nissan $50000 3-Parrilla Nissan $8500 4-Taza de rueda Nissan $3500"))
}

alert("el total de la compra es de: " + total)