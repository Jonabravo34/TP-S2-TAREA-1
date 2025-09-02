let n=parseInt(prompt("Ingrese la cantidad de viajes que va a desear"))
let contador=1;
let total=0;
while(contador<=n){
    let costo=parseFloat(prompt(`Ingrese el costo del viaje ${contador}`))
    total+=costo
    contador++;
}
console.log(`Usted tiene ${n} viajes  con un costo total de los  viajes es ${total}`)