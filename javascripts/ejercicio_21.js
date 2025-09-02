// Clasificación de números en un arreglo //

const cant_num = parseInt(prompt("Cuantos valores desea clasificar?"))
let nums = []
let clasificacion

for (let i = 1; i <= cant_num; i++) {
    let num = parseFloat(prompt(`#${i} - Ingresa numero:`))
    nums.push(num)
}

for (let j = 0; j < nums.length; j++) {
    if (nums[j] > 0) {
        clasificacion = "positivo"
    } else if (nums[j] < 0) {
        clasificacion = "negativo"
    } else {
        clasificacion = "neutro"
    }

    console.log(`El numero ${nums[j]} es ${clasificacion}`)
}