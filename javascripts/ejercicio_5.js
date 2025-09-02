let cita;
let costo;
let acumulado;
cita=parseInt(prompt("Ingrese el numero de cita"))
if(cita>=1 && cita<=3){
    costo=200
  acumulado=(cita*200)
} else if(cita>=4 && cita<=5){
  costo=150
  acumulado=(3*200)+((cita-3)*150)
} else if (cita>=6 && cita<=8){
    costo=100
    acumulado=(3*200)+(2*150)+((cita-5)*100)
} else if (cita>9) {
    costo=50
    acumulado=(3*200)+(2*150)+(3*100)+((cita-8)*50)
    }
    alert(`Su cita N°${cita} tiene el costo de ${costo} dolares y su acumulado es de ${acumulado} dolares`)



