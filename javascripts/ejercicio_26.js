// Artículos de la fábrica en arreglo //

function ejecutar_26() {
    // Se declaran las variables que se usarán en el bucle.
    let clave, porc_mano_obra, porc_costo_produccion, porc_ganancia, materia_prima, mano_obra, gastos_fabricacion, costo_produccion, precio_venta
    
    // --- Entrada (predefinida) ---
    // La información de los artículos está guardada en un arreglo llamado `articulos`.
    // Cada elemento del arreglo es otro arreglo con dos valores: [clave, costo de materia prima].
    const articulos = [[20, 1200], [4, 3500], [1, 700], [6, 5050]]
    
    // --- Proceso y Salida ---
    // El bucle `for` recorre cada "fila" (cada artículo) del arreglo principal.
    for (let i = 0; i < articulos.length; i++) {
        // Se extrae la clave del artículo actual (el primer valor de la fila).
        clave = articulos[i][0]

        // Se asignan los porcentajes según la clave.
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
            // En este caso, este `else` no se ejecutará porque los datos son válidos.
            console.log(`Articulo #${i+1} Clave ingresada inválida!`)
        }

        // Si la clave es válida, se realizan los cálculos.
        if (clave >= 1 && clave <= 6) {
            // Se extrae el costo de la materia prima (el segundo valor de la fila).
            materia_prima = articulos[i][1]

            // Se realizan los cálculos para cada componente de costo.
            mano_obra = porc_mano_obra * materia_prima
            gastos_fabricacion = porc_costo_produccion * materia_prima
            costo_produccion = materia_prima + mano_obra + gastos_fabricacion
            precio_venta = costo_produccion + (costo_produccion * porc_ganancia)

            // Muestra todos los resultados en la consola.
            console.log(`CALCULOS PRECIO DE VENTA PARA EL COMETA #${i+1} DE CLAVE ${clave}`)
            console.log(`- Materia prima: $${materia_prima}`)
            console.log(`- Mano de obra: $${mano_obra}`)
            console.log(`- Gastos de fabricacion: $${gastos_fabricacion}`)
            console.log(`- Costo de produccion: $${costo_produccion}`)
            console.log(`* PRECIO DE VENTA: $${precio_venta}`)
        }
    }
}