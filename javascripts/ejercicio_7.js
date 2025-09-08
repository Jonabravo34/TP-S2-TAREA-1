function ejecutar_7(){
debugger
//ENTRADA
let tipoTarjeta = parseInt( prompt("Ingrese el tipo de tarjeta : ") )//tipoTarjeta(Leer)=0 "Se pregunta por el tipo de tarjeta"
let credito = parseInt(prompt("Ingrese el credito : "))//credito(leer)=0 "se pregunta por el credito actual"
//PROCESO
if (tipoTarjeta=1){ //se pregunta por los tres tipos de tarjeta y se asigna un valor a la variable "limite(asignar)=0"
    limite = 25
} else if (tipoTarjeta=2){
    limite = 35
} else if (tipoTarjeta=3){
    limite = 40
} else {
    limite = 50
}
let total = (limite/100)*credito //Formula para generar el incremento
let nuevo_credito = total + credito //formula para generar el nuevo credito
//SALIDA
console.log(`El tipo de tarjeta es : ${tipoTarjeta}`)
console.log(`El limite de la tarjeta es : ${limite}%`)
console.log(`El nuevo credito es : ${nuevo_credito}`)
}
