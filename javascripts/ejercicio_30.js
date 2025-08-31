// Días de la semana en arreglo //

const dias_semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
let num_dia = parseInt(prompt("Ingresa un numero del 1 al 7:"))
let text_dia

switch (dia) {
    case 1: 
        text_dia = dias_semana[0]
        break
    case 2: 
        text_dia = dias_semana[1]
        break
    case 3: 
        text_dia = dias_semana[2]
        break
    case 4: 
        text_dia = dias_semana[3]
        break
    case 5: 
        text_dia = dias_semana[4]
        break
    case 6: 
        text_dia = dias_semana[5]
        break
    case 7: 
        text_dia = dias_semana[6]
        break
    default:
        text_dia = "Numero invalido!"
}

console.log(`${num_dia} -> ${text_dia}`)