// N compra de trajes //

function ejecutar_13() {
    // --- Entrada ---
    // Pide al usuario la cantidad de trajes a procesar.
    const cantidad_trajes = parseInt(prompt("Ingresa cantidad de trajes:"))

    // Se declaran las variables que se usarán dentro del bucle.
    let precio_traje, descuento, precio_descuento

    // --- Proceso ---
    // El bucle `for` se ejecuta desde 1 hasta la cantidad de trajes ingresada.
    for (let i = 1; i <= cantidad_trajes; i++) {
        // Pide el precio del traje actual dentro del bucle.
        precio_traje = parseFloat(prompt(`Ingresa el precio del traje #${i}:`))
        
        // Decide qué descuento aplicar.
        if (precio_traje > 2500) {
            descuento = 15 // Descuento del 15%
        } else {
            descuento = 8 // Descuento del 8%
        }

        // Calcula el precio final con el descuento aplicado.
        precio_descuento = precio_traje * (1 - descuento / 100)

        // --- Salida ---
        // Muestra el resultado para cada traje, uno a la vez.
        console.log(`* TRAJE #${i}`)
        console.log(`- Precio final: $${precio_descuento.toFixed(2)}`)
    }
}