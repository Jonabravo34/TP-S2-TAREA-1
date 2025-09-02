// Clasificación de números en un arreglo //

const cant_num = parseInt(prompt("Cuantos valores desea clasificar?"))
let nums = []

for (let i = 1; i <= cant_num; i++) {
    let num = parseFloat(prompt(`#${i} - Ingresa numero:`))
    nums.push(num)
}

for (let j = 0; j < nums.length; j++) {
    if (nums[j] > 0) {
        console.log(`El numero ${nums[j]} es positivo`)
    } else if (nums[j] < 0) {
        console.log(`El numero ${nums[j]} es negativo`)
    } else {
        console.log(`El numero ${nums[j]} es neutro`)
    }
}