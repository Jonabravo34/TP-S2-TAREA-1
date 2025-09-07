function ejecutar_12(){
let n = parseInt(prompt("Ingrese la cantidad de vaces que va a comprar "));
let i=1
while (i<=n) {
    let costo;
    let cantidad= parseInt(prompt("Ingrese la cantidad de lapices que va a comprar"))

    if (cantidad >= 1000) {
        costo = 0.85;
    } else {
        costo = 0.90;
    }

    let total = cantidad * costo;
    console.log(`Cantidad = ${cantidad}, Total a pagar = ${total} $`);

    
}
}