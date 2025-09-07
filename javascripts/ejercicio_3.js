// Descuento en trajes //

function ejecutar_3() {
    // --- Entrada ---
    // Pide al usuario el precio del traje y lo guarda como un número.
    const traje = parseInt(prompt("Ingresa precio del traje:"))
    let descuento, precio_final

    // --- Proceso ---
    // Decide qué descuento aplicar.
    if (traje > 2500) {
        descuento = 15 // Descuento del 15%
    } else {
        descuento = 8 // Descuento del 8%
    }

    // Calcula el precio final restando el descuento.
    precio_final = traje * (1 - descuento/100)

    // --- Salida ---
    // Muestra el precio final con dos decimales.
    console.log(`Precio final: $${precio_final.toFixed(2)}`)
}