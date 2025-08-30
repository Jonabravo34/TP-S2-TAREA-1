// Fábrica El Cometa – precio de venta //

let clave, mano_obra, gastos_fabricacion, costo_produccion, precio_venta
const materia_prima = [600, 800, 1000, 1200, 1400, 1600]
const porc_mano_obra = 0.75
const porc_costo_produccion = 0.35
const porc_ganancia = 0.45

clave = parseInt(prompt("Ingresa una clave del 1 al 6"))

if (clave >= 1 && clave <= 6) {
    mano_obra = porc_mano_obra * materia_prima[clave - 1]
    gastos_fabricacion = porc_costo_produccion * materia_prima[clave - 1]
    costo_produccion = materia_prima[clave - 1] + mano_obra + gastos_fabricacion
    precio_venta = costo_produccion + (costo_produccion * porc_ganancia)

    console.log(`CALCULOS PRECIO DE VENTA PARA EL COMETA DE CLAVE ${clave}`)
    console.log(`- Materia prima: $${materia_prima[clave - 1]}`)
    console.log(`- Mano de obra: $${mano_obra}`)
    console.log(`- Gastos de fabricacion: $${gastos_fabricacion}`)
    console.log(`- Costo de produccion: $${costo_produccion}`)
    console.log(`* PRECIO DE VENTA: $${precio_venta}`)
} else {
    alert(`Clave ingresada invalida!`)
}