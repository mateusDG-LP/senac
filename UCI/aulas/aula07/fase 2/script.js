function calcularSalario() {
    let nomeFuncionario = document.getElementById("nome").value
    let salarioBruto = Number(document.getElementById("salario").value)

    let inss
    let percentualINSS
    let valeTransporte
    
    

    // inss
    if (salarioBruto >= 3000) {
        percentualINSS =  0.11
    }else if(salarioBruto >= 3000){
        percentualINSS = 0.09
    } else {
        percentualINSS = 0
    }


    inss = salarioBruto * percentualINSS
    valeTransporte = salarioBruto * 0.05
    salarioLiquido = salarioBruto - inss - valeTransporte
    

    document.getElementById("resultado").innerHTML = 
    "<h3>Resultado</h3>" + 
    "Nome: " + nomeFuncionario + "<br>" +
    "Salário Bruto: " + salarioBruto.toFixed(2) + "<br>" +
    "INSS: R$ " + inss.toFixed(2) + "<br>" +
    "Percetual INSS: R$ " + (percentualINSS * 100) + " % " + "<br>" +
    "Vale: R$ " + valeTransporte.toFixed(2) + "<br>" +
    "Salário Líquido: R$ " + salarioLiquido.toFixed(2) 
    
}