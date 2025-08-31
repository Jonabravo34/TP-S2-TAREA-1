// Datos de viajes en arreglo //

let costo_viaje, tipo, costo_total, costo_persona
const viajes = [["A", 100, 15], ["B", 50, 30], ["C", 70, 20]]
const tipo_viaje = prompt("Ingresa el tipo de viaje que desee (A, B, C):")

if (tipo_viaje === "A") {
    costo_viaje = 30
    tipo = 0
} else if (tipo_viaje === "B") {
    costo_viaje = 60
    tipo = 1
} else if (tipo_viaje === "C") {
    costo_viaje = 90
    tipo = 2
} else {
    console.log("Tipo de viaje incorrecto!")
}

if (costo_viaje !== undefined) {
    costo_total = viajes[tipo][1] * costo_viaje
    costo_persona = costo_total / viajes[tipo][2]

    console.log(`Viaje tipo ${viajes[tipo][0]}: Costo total $${costo_total} - Costo por persona $${costo_persona.toFixed(2)}`)
}