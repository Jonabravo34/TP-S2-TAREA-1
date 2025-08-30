// N compra de trajes //

const cantidad_trajes = parseInt(prompt("Ingresa cantidad de trajes:"))

for (let i = 1; i <= cantidad_trajes; i++) {
    const precio_traje = parseFloat(prompt(`Ingresa el precio del traje #${i}:`))
    let descuento

    if (precio_traje >= 1000) {
        descuento = 20
    } else if (precio_traje >= 500) {
        descuento = 10
    } else {
        descuento = 0
    }

    const precio_descuento = precio_traje * (1 - descuento / 100)

    console.log(`* TRAJE #${i}`)
    console.log(`- Precio base: $${precio_traje}`)
    
    if (descuento > 0) {
        console.log(`- Descuento aplicado: ${descuento}%`)
    } else {
        console.log(`- Descuento aplicado: no aplica`)
    }
    console.log(`- Precio final: $${precio_descuento.toFixed(2)}`)
}