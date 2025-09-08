//
function ejercicio_11(){
debugger
//ENTRADA
let c=1 //Se genera un contador
let veces=parseInt(prompt("Ingrese la cantidad de numeros")) //veces(leer)=0 "se pregunta por la cantidad de numeros"
//PROCESO
while (c<=veces){ //Se genera un ciclo con While
let num=parseInt(prompt("Ingrese un Numero"))
if (num>0){  //condicion
console.log(`El numero ${num} es positivo`)
} else {
    console.log (`El numero ${num} es negativo`)
}
c++ //se incrementa el contador y vuelve a la condicion
}
 //SALIDA : Mostrar si num es positivo o negativo
}