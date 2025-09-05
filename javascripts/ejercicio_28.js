debugger;
const paquetes=[[4 ,"Europa"] ,[6 , " asia" ]]
let paquete1=paquetes[0][0];
let paquete2=paquetes[1][0];
const kilo=30
if(paquete1>=1 && paquete1<6){
    console.log(`Su paquete va dirijido a ${paquetes[0][1]} con un peso de ${paquetes[0][0]}kg y un costo de ${paquetes[0][0]*kilo}$ `)
    }else {
        console.log("El peso del paquete es incorrecto")
    }
     if (paquete2>=1 && paquete2<6){
    console.log(`Su paquete va dirijido a ${paquetes[1][1]}con un peso de ${paquetes[1][0]}kg y un costo de ${paquetes[1][0]*kilo}$ `)
 } else{ console.log("El peso del paquete es incorrecto")

 } 
 






