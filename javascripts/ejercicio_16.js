// N artículos de la Fábrica El Cometa //

function ejecutar_16() {
    // Se declaran todas las variables al principio.
    let clave, porc_mano_obra, porc_costo_produccion, porc_ganancia, materia_prima, mano_obra, gastos_fabricacion, costo_produccion, precio_venta

    // --- Entrada ---
    // Pide la cantidad de artículos que se van a procesar.
    const cantidad_articulos = parseInt(prompt("Ingresa cantidad de articulos:"))

    // Inicializa el contador del bucle `while`.
    let i = 1

    // --- Proceso: Bucle `while` ---
    // El bucle se ejecuta mientras `i` sea menor o igual a la cantidad de artículos.
    while (i <= cantidad_articulos) {
        // Pide una clave. Si el usuario cancela.
        clave = parseInt(prompt(`#${i} - Ingresa una clave del 1 al 6:`))

        // Asigna los porcentajes según la clave ingresada.
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
            // Si la clave es inválida, muestra una alerta y no incrementa `i`.
            alert("Clave ingresada inválida!")
        }

        // Si la clave es válida, se realizan los cálculos.
        if (clave >= 1 && clave <= 6) {
            // Pide el costo de la materia prima.
            materia_prima = parseFloat(prompt("Ingresa el costo de la materia prima:"))

            // Cálculos de costos y precio de venta.
            mano_obra = porc_mano_obra * materia_prima
            gastos_fabricacion = porc_costo_produccion * materia_prima
            costo_produccion = materia_prima + mano_obra + gastos_fabricacion
            precio_venta = costo_produccion + (costo_produccion * porc_ganancia)

            // --- Salida ---
            // Muestra todos los resultados en la consola.
            console.log(`CALCULOS PRECIO DE VENTA PARA EL COMETA #${i} DE CLAVE ${clave}`)
            console.log(`- Materia prima: $${materia_prima}`)
            console.log(`- Mano de obra: $${mano_obra}`)
            console.log(`- Gastos de fabricacion: $${gastos_fabricacion}`)
            console.log(`- Costo de produccion: $${costo_produccion}`)
            console.log(`* PRECIO DE VENTA: $${precio_venta}`)
            
            // El contador del bucle se incrementa solo si la clave fue válida.
            i++
        }
    }
}