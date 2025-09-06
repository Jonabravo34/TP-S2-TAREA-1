// Precios de trajes en arreglo //

function ejecutar_23() {
    let precio_trajes = [], traje, descuento, precio_descuento
    const cantidad_trajes = parseInt(prompt("Ingresa cantidad de trajes:"))

    for (let i = 1; i <= cantidad_trajes; i++) {
        precio_traje = parseFloat(prompt(`Ingresa el precio del traje #${i}:`))
        precio_trajes.push(precio_traje)
    }

    console.log(`arreglo de trajes: ${precio_trajes}`)

    for (let i = 0; i < precio_trajes.length; i++) {
        traje = precio_trajes[i]

        if (precio_traje > 2500) {
            descuento = 15
        } else {
            descuento = 8
        }
        
        precio_descuento = traje * (1 - descuento / 100)
        
        console.log(`* TRAJE #${i+1}: $${precio_descuento.toFixed(2)}`)
    }
}

    