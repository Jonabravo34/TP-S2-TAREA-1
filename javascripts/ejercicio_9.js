// Clasificación de edades //

function ejecutar_9() {
    // --- Entrada ---
    // Pide al usuario que ingrese su edad y la guarda como un número.
    const edad = parseInt(prompt("Ingresa edad:"))

    // --- Proceso y Salida ---
    // Usa una estructura `if-else if` para revisar la edad.
    // El orden es importante para que la lógica funcione correctamente.
    // Por ejemplo, si una persona tiene 65 años, la primera condición
    // se cumple y el código no revisa las demás.
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
}