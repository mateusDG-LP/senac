function classificarSalario() {
    let salario = Number(document.getElementById("salario").value)
    let classificacao

    if (salario < 2000) {
        classificacao = "Pobre"
    }
    else if (salario < 5000) {
        classificacao = "Salario Médio"
    }
    else if (salario < 10000) {
        classificacao = "Salario Alto"
    }
    else {
        classificacao = "Podre de Rico!!"

    }
    document.getElementById("resultado").innerHTML = 
    "Salário: R$ " + 
    salario.toFixed(2) +
    "<br>" + 
    "Classificação: " + 
    classificacao

}