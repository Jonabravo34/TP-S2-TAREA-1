function ejecutar_14(){
//ENTRADA
let = viajes=parseInt(prompt("Ingrese la cantidad de viajes")) //viajes(leer)=0 "se pregunta por la cantidad de viajes"
let c = 1 //contador para el ciclo
while (c<=viajes){ //condicion para el ciclo
let minimo = 0
//Se pregunta por los datos del viaje
let tipo=prompt("Ingrese el tipo de autobus : A , B , C")
let distancia=parseInt(prompt("Ingrese la distancia recorrida")) 
let personas=prompt("Ingrese la cantidad de personas")
let tarifa = 0
let total = 0
let total_personas = 0
//Proceso : El mismo proceso que el ejercicio 4
switch (tipo) { 
case "A":
tarifa = 2
break;  
case "B":
tarifa = 2.5
break;  
case "C":
tarifa = 3
break;
}
if (personas>20){
minimo = 20
} else {
minimo = personas
} //Formula para definir el total y el total por persona
total = tarifa * distancia * minimo
total_personas = total / personas
//SALIDA : se muestra el viaje , el total a pagar y el total por cada personas
console.log(`Viaje ${c} :`)
console.log(`El total a pagar es : ${total} y el total por persona es : ${total_personas}`)
c++ //se incrementa el contador y vuelve a la condicion
}
console.log(`Viajes Realizados : ${viajes}`)//Se muestran la cantidad de viajes realizados
}
