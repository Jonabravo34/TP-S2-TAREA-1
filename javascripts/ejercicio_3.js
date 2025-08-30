// Descuento en trajes //

const precio_traje = parseInt(prompt("Ingresa el precio del traje:"))
let descuento
let precio_descuento

if (precio_traje >= 2500) {
    descuento = 15
} else {
    descuento = 8
}

precio_descuento = precio_traje - (precio_traje * (descuento/100))

console.log(`CALCULO:`)
console.log(`- Precio base: $${precio_traje}`)
console.log(`- Precio final (-${descuento}%): $${precio_descuento}`)