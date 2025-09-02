// Datos de viajes en arreglo //

let costo_viaje, tipo, costo_total, costo_persona
const viajes = [["A", 100, 15], ["B", 50, 30], ["C", 70, 20]]


for (let i = 0; i < viajes.length; i++) {
    let tipo_viaje = viajes[i][0]

    if (tipo_viaje === "A") {
        costo_viaje = 30
    } else if (tipo_viaje === "B") {
        costo_viaje = 60
    } else if (tipo_viaje === "C") {
        costo_viaje = 90
    }

    costo_total = viajes[i][1] * costo_viaje
    costo_persona = costo_total / viajes[i][2]

    console.log(`Viaje tipo ${viajes[i][0]}: Costo total $${costo_total} - Costo por persona $${costo_persona.toFixed(2)}`)
}