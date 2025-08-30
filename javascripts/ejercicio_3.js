// Descuento en trajes //

const precio_traje = parseInt(prompt("Ingresa el precio del traje:"))
let descuento
let precio_descuento

if (precio_traje <= 2500) {
    descuento = 8
} else {
    descuento = 15
}

precio_descuento = precio_traje - (precio_traje * (descuento/100))

console.log(`Precio base del traje: $${precio_traje}`)
console.log(`Precio del traje con ${descuento}% de descuento: $${precio_descuento}`)