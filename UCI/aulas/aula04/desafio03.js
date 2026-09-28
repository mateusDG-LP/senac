let cliente = prompt("Digite o nome do cliente: ")
let valor_compra = Number(prompt("Digite o Valor da Compra: "))
let form_pagament = prompt(" Digite a forma de pagamento:  ")

 let desconto 

if(valor_compra >= 500)
{
    desconto =   0.15
}else if( valor_compra <= 500 && valor_compra >= 200 )
{
    desconto =  0.10
}else{
    desconto =  0.05
}

if(form_pagament.toLowerCase() === "pix" )
{
     desconto  += 0.05
}

let valor_desconto =  valor_compra * desconto
let valor_final =  valor_compra - valor_desconto

    console.log(`Nome do Cliente:  ${cliente}
                Valor da Comprar:  ${valor_compra}
                Valor do desconto: ${valor_desconto}
                Valor  Final:      ${valor_final}`)
