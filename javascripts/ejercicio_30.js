// Días de la semana en arreglo //

const dias_semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
let text_dia, num_dia, dias = []

const nums_dia = parseInt(prompt("Cuantos numero desea ingresar?:"))

for (let i = 0; i < nums_dia; i++) {
    num_dia = parseInt(prompt("Ingresa un numero del 1 al 7:"))
    dias.push(num_dia)
}

for (let j = 0; j < dias.length; j++) {
    num_dia = dias[j]

    if (num_dia >= 1 && num_dia <= 7) {
        text_dia = dias_semana[num_dia - 1]
    } else {
        text_dia = "ERROR"
    }

    console.log(`${num_dia} -> ${text_dia}`)
}