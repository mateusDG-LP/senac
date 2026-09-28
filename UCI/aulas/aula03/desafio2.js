let nome = prompt(" Digite seu nome:  ")
let preco // = Number(prompt("Digite o Preço: "))
let qtd_vendida = parseInt(prompt(" Digite a Quantidade : "))
let valor_compra = parseFloat(prompt("Digite o Valor da Compra: "))
let frete


// Desconto
let desconto
if (valor_compra >= 1000) {
     desconto = valor_compra * 0.15

} else if (valor_compra >= 500) {
    desconto = valor_compra * 0.10
} else if (preco < 500) {
    valor_compra = preco * 0.05
} else {

}


if (valor_compra >= 800) {
    alert("frete Grátis")
} else if (valor_compra < 800) {
    alert("frete R$ 50")
} else if (valor_compra >= 1000) {
    
}
else{

}
