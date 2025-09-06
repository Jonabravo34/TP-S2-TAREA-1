// N personas con clasificación de edades //

function ejecutar_19() {
    const cantidad_edades = parseInt(prompt("Ingresa cantidad de edades a clasificar:"))

    for (let i = 1; i <= cantidad_edades; i++) {
        const edad = parseInt(prompt(`Ingresa una edad:`))

        console.log(`* Edad #${i}:`)

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
}