const cita=[1,5,9];
costo=0;
let i=0;
while(i<cita.length){
    const citaTotal=cita[i];
    if(citaTotal>=1 && citaTotal<=3){
        costo=200;
        acumulado=(citaTotal*200)
        console.log(`Su cita N° ${citaTotal} tiene un costo de${costo} y un acumulado de ${acumulado}`)
    } else if ( citaTotal>=4 && citaTotal<=7){
        costo=150;
        acumulado=(3*200)+((citaTotal-3)*150)
        console.log(`Su cita N°${citaTotal} con un costo de ${costo} y un acumulado de ${acumulado}`)
    } else if(citaTotal>=8){
        costo=50;
        acumulado=(3*200)+(4*150)+((citaTotal-7)*50);
        console.log(`Su cita N° ${citaTotal} con un costo de ${costo} y un acumulado de ${acumulado}`)
    } else{
        console.log("No tiene citas")
    }
    i++;

    }

    
    
    
