// Clientes del banco en arreglo //

const clientes = [[1, 500], [2, 1000], [3, 1500]]

for (let i = 0; i < clientes.length; i++) {
    const cliente = clientes[i]
    const tipoTarjeta = cliente[0]
    const creditoActual = cliente[1]

    let porcentajeAumento

    if (tipoTarjeta === 1) {
        porcentajeAumento = 0.25
    } else if (tipoTarjeta === 2) {
        porcentajeAumento = 0.35
    } else if (tipoTarjeta === 3) {
        porcentajeAumento = 0.40
    } else {
        porcentajeAumento = 0
        console.log(`Error: Tipo de tarjeta ${tipoTarjeta} no válido para el cliente ${i + 1}.`)
        continue
    }

    const aumento = creditoActual * porcentajeAumento
    const nuevoCredito = creditoActual + aumento

    console.log(`Cliente ${i + 1}:`)
    console.log(`- Tipo de tarjeta: ${tipoTarjeta}`)
    console.log(`- Crédito actual: $${creditoActual}`)
    console.log(`- Nuevo límite de crédito: $${nuevoCredito}`)
}