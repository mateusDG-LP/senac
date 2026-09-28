function calcularProduto() {
    let valor = Number(document.getElementById("valor").value)
    if (valor >= 500) {
        let percentual = valor * 0.09
    } else if (valor >= 200) {
        percentual = valor * 0.08
    } else {
        percentual = valor * 0.07
    }


    let desconto = valor - percentual

    document.getElementById("resultado").innerHTML =
        "<h3>Resultado</h3>" +
        "Valor: " + valor.toFixed(2) + "<br>" +
        "Valor de Desconto:" + desconto.toFixed(2) + "<br>" +
        "INSS: R$" + percentual.toFixed(2) + "<br>" +
        "Vale: R$" + vale.toFixed(2) + "<br>" +
        "Salário Líquido: R$" + salarioLiquido.toFixed(2)
}