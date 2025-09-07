function ejecutar_8(valor){
let peso;                           //INGRESAMOS LAS VARIABLES Y ABRIMOS UN PROMPT DE DONDE SE ENVIARAN LOS PAQUETES
let destino;
destino=prompt("Ingrese el destino del paquete (Nacional o internacional)")     //EL VALOR YA ESTA PUESTO Y SOLAMENTE ABRIA QUE INGRESAR EL PESO 
peso=parseInt(prompt("Ingrese el peso del paquete en kg"))
total=valor*peso                                                                              //CALCULAMOS Y PRESENTAMOS
console.log(`Su paquete se dirige a ${destino} con un peso de ${peso}kg ,  el precio po kg es de ${valor}$ y el costo es de ${total} dolares `)
}
ejecutar_8(30)
