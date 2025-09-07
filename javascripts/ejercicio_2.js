let cantidad;
let lapices;
let total;
cantidad=parseFloat(prompt("Ingrese la cantidad de lapices que desea comprar"))
if(cantidad>=1000){
   costo=0.85
    console.log(`Total a pagar  ${cantidad*costo}$`)
} else if (cantidad < 1000){
    costo=0.90
    console.log(`Total a pagar ${cantidad*costo} `)
}