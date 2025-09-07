// Clasificación de edades en arreglo //

function ejecutar_29() {
    const edades = [5, 17, 25, 70, 50]
    let edad, clasificacion

    for (let i = 0; i < edades.length; i++) {
        edad = edades[i]
        
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

        console.log(`${edad} -> ${clasificacion}`)
    }
}