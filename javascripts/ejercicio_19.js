// N personas con clasificación de edades //

function ejecutar_19() {
    // --- Entrada ---
    // Pide al usuario la cantidad de edades que quiere clasificar.
    const cantidad_edades = parseInt(prompt("Ingresa cantidad de edades a clasificar:"))

    // Declara las variables que se usarán en cada iteración del bucle.
    let edad, clasificacion

    // --- Proceso ---
    // El bucle `for` se ejecuta para cada edad, desde 1 hasta la cantidad ingresada.
    for (let i = 1; i <= cantidad_edades; i++) {
        // Pide la edad actual.
        edad = parseInt(prompt(`#${i} - Ingresa una edad:`))

        // Usa una cadena de `if-else if` para determinar la clasificación.
        // El orden es crucial para que los rangos funcionen correctamente.
        if (edad >= 65) {
            clasificacion = "Adulto mayor"
        } else if (edad >= 36) {
            clasificacion = "Adulto"
        } else if (edad >= 18) {
            clasificacion = "Joven"
        } else if (edad >= 14) {
            clasificacion = "Adolescente"
        } else if (edad >= 4) {
            clasificacion = "Niño"
        } else if (edad >= 1) {
            clasificacion = "Infante"
        }

        // --- Salida ---
        // Muestra la edad y su clasificación en la consola.
        console.log(`${edad} -> ${clasificacion}`)
    }
}