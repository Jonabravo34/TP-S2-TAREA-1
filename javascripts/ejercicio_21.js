function ejecutar_21(){
    debugger
    //ENTRADA
    const nums = [4,5,0,-1,-2] //Se genera un Arreglo con los datos
    //PROCESO
    for (let i = 0 ; i < nums.length ; i++) { //se genera un ciclo con for
        if (nums[i] > 0) { //condicional para resolver el ejercicio
            console.log(`El numero ${nums[i]} es positivo`) 
        } else if (nums[i] < 0) {
            console.log(`El numero ${nums[i]} es negativo`)
        } else {
            console.log(`El numero ${nums[i]} es neutro`)
        }
    }
    //SALIDA : Mostrar si el numero es positivo , negativo o neutro
}

