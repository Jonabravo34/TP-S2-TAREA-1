let n=parseInt(prompt("Ingrese el numero de clientes "))
let contador=1;
while(contador<=n){
    let tarjetas=(prompt("Ingrese el tipo de tarjeta que tiene usted (Bronce, Blatinium, Gold)"))
    let credito=parseInt(prompt("Ingrese el credito que tiene usted"))
    if (tarjetas=="Gold" && credito>=10000){
        console.log(`Su nuevo limite de la tarjeta de credito ${tarjetas} es de 15000`)
    }else if (tarjetas=="Platinium" && credito>=7000){
        console.log(`Su nuevo limite de la tarjeta de credito ${tarjetas} es de 10000`)
     } else if (tarjetas=="Bronce" && credito>=2000) {
            console.log(`Su nuevo limite de la tarjeta de credito ${tarjetas} es de 5000`)
     } else {
        console.log("Usted no tiene aumento de credito")
     }
     contador++;
    }
    

     
    

    
    
