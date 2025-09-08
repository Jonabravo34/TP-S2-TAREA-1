function ejercicio_10(){
debugger
//ENTRADA
console.log("DIAS DE LA SEMANA") 
const num=parseInt(prompt("Ingrese un Numero")) //Num(leer)=0 "se pregunta al usuario por un numero"
//PROCESO
//se muestra un resultado dependiendo de cual condicion se cumple
if (num==1){
    console.log("Es Lunes")
} else if (num==2){
    console.log("Es Martes")
} else if (num==3){
    console.log("Es Miercoles")
} else if (num==4){
    console.log("Es Jueves")  
} else if (num==5){
    console.log("Es Viernes")  
} else if (num==6){                         
    console.log("Es Sabado")   
} else if (num==7){
    console.log("Es Domingo")                      
} else {
    console.log ("Dia Invalido")
}
//SALIDA : Mostrar el dia de la semana
}