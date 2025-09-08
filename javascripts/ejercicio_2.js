function ejecutar_2() {
    let cantidad;
    let costo;        //DEFINIMOS VARIABLES QUE VAYAMOS A OCUPAR
    let total;
    cantidad = parseFloat(prompt("Ingrese la cantidad de lapices que desea comprar")) //PEDIMOS AL USUARIO QUE INGRESE LA CANTIDAD
    if (cantidad >= 1000) {
      costo = 0.85
      total = cantidad * costo
      console.log(`Total a pagar  ${total}$`)        //ABRIMOS UNA CONDICIONAL PARA COMPROBAR LOS VALORES
    } else if (cantidad < 1000) {
      costo = 0.90
      total = cantidad * costo
      console.log(`Total a pagar ${total} `)     //POR ULTIMO HACEMOS LA FORMULA PARA SABER EL VALOR EXACTO
    }
}