// Descuento en trajes //

function ejecutar_3() {
    const traje = parseInt(prompt("Ingresa precio del traje:"))
    let descuento, precio_final

    if (traje > 2500) {
        descuento = 15
    } else {
        descuento = 8
    }

    precio_final = traje * (1 - descuento/100)

    console.log(`Precio final: $${precio_final.toFixed(2)}`)
}