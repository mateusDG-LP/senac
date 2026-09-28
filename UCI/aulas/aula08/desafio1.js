function calcularDesconto() {
    let valor = Number(document.getElementById("valor").value)
    let percentual
    let desconto
    let valorFinal

    if (valor >= 500) {
        percentual = 9
    }else if (valor >= 200) {
        percentual = 8
        
    }else {
        percentual = 7
    }

    desconto = (valor * percentual) / 100

    valorFinal = valor - desconto

    document.getElementById("resultado").innerHTML = 
    "Valor original: R$ " +
    valor.toFixed(2) +
    "<br>" +
    "Desconto: " +
    percentual + 
    "%<br>" + 
    "Valor do desconto: R$ " +
    desconto.toFixed(2)
    "<br>" + 
    "Valor final: R$ " + 
    valorFinal.toFixed(2)
}