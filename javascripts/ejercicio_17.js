function ejecutar_17(){
debugger
//ENTRADA
let clientes= parseInt(prompt("Ingrese la cantidad de clientes : ") ) //clientes(leer)=0 "se ingresa la cantidad de clientes"
let c=1 //se genera un contador
while (c<=clientes){ //se genera un ciclo con while
//Se preguntan por los datos de cada cliente
let tipoTarjeta = parseInt(prompt(`Ingrese el tipo de tarjeta del cliente # ${c}:`) ) 
let credito = parseInt(prompt("Ingrese el credito : "))
//Proceso : se realiza el mismo proceso que el ejercicio 7
if (tipoTarjeta=1){
    limite = 25
} else if (tipoTarjeta=2){
    limite = 35
} else if (tipoTarjeta=3){
    limite = 40
} else {
    limite = 50
}
//Formula para definir el total y el nuevo credito
let total = (limite/100)*credito 
let nuevo_credito = total + credito
console.log(`Cliente ${c} :`) //se muestra el cliente y los datos correspondientes
console.log(`El tipo de tarjeta es : ${tipoTarjeta}`)
console.log(`Credito Actual : ${credito}`)
console.log(`El limite de la tarjeta es : ${limite}%`)
console.log(`El nuevo credito es : ${nuevo_credito}`)
c++ //Se incrementa el contador y vuelve a la condicion
}
}
