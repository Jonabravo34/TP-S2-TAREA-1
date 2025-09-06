// N compra de trajes //

function ejecutar_13() {
    const cantidad_trajes = parseInt(prompt("Ingresa cantidad de trajes:"))

    for (let i = 1; i <= cantidad_trajes; i++) {
        const precio_traje = parseFloat(prompt(`Ingresa el precio del traje #${i}:`))
        let descuento

        if (precio_traje > 2500) {
            descuento = 15
        } else {
            descuento = 8
        }

        const precio_descuento = precio_traje * (1 - descuento / 100)

        console.log(`* TRAJE #${i}`)
        console.log(`- Precio final: $${precio_descuento.toFixed(2)}`)
    }
}