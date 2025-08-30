// Clasificación de edades //

const edad = parseInt(prompt("Ingresa edad:"))

if (edad >= 65) {
    console.log("Adulto mayor")
} else if (edad >= 36) {
    console.log("Adulto")
} else if (edad >= 18) {
    console.log("Joven")
} else if (edad >= 14) {
    console.log("Adolescente")
} else if (edad >= 4) {
    console.log("Niño")
} else if (edad >= 1) {
    console.log("Infante")
}