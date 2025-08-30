// Fábrica El Cometa – precio de venta //

const clave = parseInt(prompt("Ingresa una clave del 1 al 6:"))
let porc_mano_obra, porc_costo_produccion, porc_ganancia

if (clave === 1) {
    porc_mano_obra = 0.65
    porc_costo_produccion = 0.25
    porc_ganancia = 0.37
} else if (clave === 2) {
    porc_mano_obra = 0.70
    porc_costo_produccion = 0.30
    porc_ganancia = 0.42
} else if (clave === 3) {
    porc_mano_obra = 0.75
    porc_costo_produccion = 0.35
    porc_ganancia = 0.45
} else if (clave === 4) {
    porc_mano_obra = 0.80
    porc_costo_produccion = 0.40
    porc_ganancia = 0.49
} else if (clave === 5) {
    porc_mano_obra = 0.85
    porc_costo_produccion = 0.45
    porc_ganancia = 0.52
} else if (clave === 6) {
    porc_mano_obra = 0.90
    porc_costo_produccion = 0.50
    porc_ganancia = 0.56
} else {
    alert("Clave ingresada inválida!")
}

if (clave >= 1 && clave <= 6) {
    const materia_prima = parseFloat(prompt("Ingresa el costo de la materia prima:"))


    const mano_obra = porc_mano_obra * materia_prima
    const gastos_fabricacion = porc_costo_produccion * materia_prima
    const costo_produccion = materia_prima + mano_obra + gastos_fabricacion
    const precio_venta = costo_produccion + (costo_produccion * porc_ganancia)

    console.log(`CALCULOS PRECIO DE VENTA PARA EL COMETA DE CLAVE ${clave}`)
    console.log(`- Materia prima: $${materia_prima}`)
    console.log(`- Mano de obra: $${mano_obra}`)
    console.log(`- Gastos de fabricacion: $${gastos_fabricacion}`)
    console.log(`- Costo de produccion: $${costo_produccion}`)
    console.log(`* PRECIO DE VENTA: $${precio_venta}`)
}