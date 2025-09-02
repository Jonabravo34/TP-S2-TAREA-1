const num=parseInt(prompt("Ingrese la cantidad de numeros que desea evaluar"))
debugger;
let contador=0;
while(contador<num){
    let numero=parseInt(prompt("Ingrese un numero"))
if (numero>0){
    alert("El numero es positivo")}
    else if  (numero<0){
        alert("El numero es negativo")
    }else {
        alert("El numero es cero")
    }
    contador=contador+1;
}
console.log(`Se han evaluado ${num} `)