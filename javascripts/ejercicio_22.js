const pedidos=[1200,800]
const costoUnitario=1;
let i=0;
while(i<pedidos.length){
    const cantidad =pedidos[i];
    let descuento=0;
    if (cantidad>=1000){
        descuento=0.15;}
        else if (cantidad>=500){
            descuento=0.10;
        }
        const base=cantidad*costoUnitario;
        const total=(base*(1-descuento));
         console.log(` El pedido de ${cantidad} unidades tiene un precio de ${base} y con el descuento es de  ${total} con un descuento de ${descuento*100}%`)
        i++; 
    }
   