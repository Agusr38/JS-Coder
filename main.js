let nombreInquilino = prompt("nombre completo");
console.log("Hola " ,nombreInquilino)

let cantDiasAlquier = parseInt(prompt("cuantos dias queres alquilar?"));
console.log("Dias solicitados: " ,cantDiasAlquier)
let cantPersonas = parseInt(prompt("cuantas personas serian?"));
console.log("cantidad de personas : " ,cantPersonas)



if(cantPersonas<=4) {
    console.log("Tengo disponible la casa Los Molles")
    precioPorDia = 10000
    
}else if (cantPersonas==5){
    console.log("Tengo disponibilidad en la casa Los Espinillos(1) o en la casa Los Robles(2)")
    let casaElegida = prompt( "Que casa deseas? 1 o 2?")
   
    
    
    console.log(casaElegida)
        if (casaElegida == 1){
            precioPorDia = 12000
        } 
        else{
            precioPorDia = 15000
        }

}else if (cantPersonas==6){
    console.log("Tengo disponibilidad en la casa Los Espinillos(1) o en la casa Los Robles(2)")
    let casaElegida = prompt( "Que casa deseas? 1 o 2?")
    
  
    
    console.log(casaElegida)
        if (casaElegida == 1){
            precioPorDia = 13000
        } 
        else{
            precioPorDia = 18000
        }
}
else{
    alert("No tengo disponibilidad  para esa cantidad de personas")
}



let precioTotal = cantDiasAlquier*precioPorDia
console.log("El costo total de tu estadia  es de ",precioTotal)

let FormaDePago = prompt( "Como deseas abonar?:Tarjeta Credito (1) o Transferencia(2)")


if (FormaDePago == 1){
console.log (" El precio de tu estadia pagando con tarjeta es de :",precioRecargo())
}
else{
    console.log (" El precio de tu estadia pagando con transferencia  es de :",precioTotal)

}
function precioRecargo(){
    let precioRecargoT = ((precioPorDia*cantDiasAlquier)*1.10) ;
    return precioRecargoT;
}







