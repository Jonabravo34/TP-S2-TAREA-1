function ejecutar_4(){
    debugger
    //ENTRADA
    //Se asignan datos a las variables : 
    let minimo = 0 //minimo(Asignar)=0
    let tipo=prompt("Ingrese el tipo de autobus : A , B , C")//tipo(leer)=0 "Se pregunta al usuario que tipo de autobus "
    let distancia=parseInt(prompt("Ingrese la distancia recorrida"))//distancia(leer)=0 "se pregunta por la distancia recorrida"
    let personas=prompt("Ingrese la cantidad de personas")//personas(leer)=0 "se pregunta por la cantidad de personas"
    let tarifa = 0 //Tarifa(Asignar)=0
    let total = 0 //total (calcular)=0
    let total_personas = 0 //total_personas(calcular)=0
    //PROCESO
    switch (tipo) {  //Aqui se genera la tarifa dependiendo del tipo de autobus
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
    if (personas>20){ //Se calcula si las personas superan el minimo de 20
        minimo = 20 
    } else {
        minimo = personas 
    }
    total = tarifa * distancia * minimo //Formula para el costo total
    total_personas = total / personas //Formula para generar el costo por persona
    //SALIDA : se muestra el resultado
    console.log(`El total a pagar es : ${total} y el total por persona es : ${total_personas}`)
}

