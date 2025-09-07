// Clasificación de edades en arreglo //

function ejecutar_29() {
    // --- Entrada (predefinida) ---
    // Se crea un arreglo con las edades a clasificar.
    const edades = [5, 17, 25, 70, 50]

    // Se declaran las variables que se usarán en el bucle.
    let edad, clasificacion

    // --- Proceso y Salida ---
    // El bucle `for` recorre cada elemento del arreglo `edades`.
    for (let i = 0; i < edades.length; i++) {
        // Se toma la edad en la posición actual del arreglo.
        edad = edades[i]
        
        // Se usa una cadena de `if-else if` para asignar una clasificación
        // a la variable `clasificacion` según el rango de edad.
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

        // Muestra la edad y su clasificación.
        console.log(`${edad} -> ${clasificacion}`)
    }
}