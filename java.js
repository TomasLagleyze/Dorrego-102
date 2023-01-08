alert ("Seleccione los productos que desea llevar, para salir ingrese 0")
let seleccionarRepuestos = Number (prompt ("1-Optica Nizan $20000 2-Paragolpe Nizan $50000 3-Parrilla Nizan $8500 4-Taza de rueda Nizan $3500"))
let seleccionarCantidad;
let total=0;



function cantidad (cantidad, precio) 
          { return cantidad * precio}

while (seleccionarRepuestos != 0) {
    switch (seleccionarRepuestos)
    {    case 1:
           seleccionarCantidad= Number(prompt("Usted selecciono Optica de nizan, indique la cantidad"))
           total += cantidad (seleccionarCantidad, 20000)
           break;
           case 2:
           seleccionarCantidad= Number(prompt("Usted selecciono Paragolpe de nizan, indique la cantidad"))
           total += cantidad (seleccionarCantidad, 50000)
           break
           case 3:
           seleccionarCantidad= Number(prompt("Usted selecciono Parrilla de nizan, indique la cantidad"))
           total += cantidad (seleccionarCantidad, 8500)
           break;
           case 4:
           seleccionarCantidad= Number(prompt("Usted selecciono Taza de nizan, indique la cantidad"))
           total += cantidad (seleccionarCantidad, 3500)
           break;

           default:
            break;
    }
    
    seleccionarRepuestos = Number (prompt ("1-Optica Nizan $20000 2-Paragolpe Nizan $50000 3-Parrilla Nizan $8500 4-Taza de rueda Nizan $3500"))
}

alert("el total de la compra es de: " + total)