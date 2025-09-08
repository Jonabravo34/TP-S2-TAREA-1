function ejercicio_1(){
debugger //Generamos un debugger
//ENTRADA
//num(leer)=0
let num=parseInt(prompt("Ingrese un Numero")) //Se le pregunta al usuario por un numero
//PROCESO
if (num>0){ //Se genera una condicion
console.log(`El numero ${num} es positivo`) //Muestra que el numero es positivo
} else {
    console.log (`El numero ${num} es negativo`)//Muestra que el numero es negativo
}//SALIDA : Mostrar si el numero es positivo o negativo
}