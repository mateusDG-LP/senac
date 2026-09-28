let cliente = prompt("Digite o nome do cliente:")
let KWH = Number(prompt("Consumo de kWh: "))
let tarifa

// TARIFAÇO!!
if(KWH <= 100){
    tarifa = KWH * 0.50
}else if(KWH >= 101 && KWH <= 200){
    tarifa = KWH * 0.65
}else if(KWH >= 201 && KWH <= 300){
    tarifa = KWH * 0.80
}else{
    tarifa = KWH * 1.00
}

console.log("----- Total ------")
console.log("Nome do Cliente: " + cliente )
console.log("Valor de kWh: " + KWH + " kWh ")
console.log("Valor Total : R$ " + tarifa + " por kWh ")