function calcularIMC() {
    let altura = Number(document.getElementById("altura").value.replace(",", "."))
    let peso = Number(document.getElementById("peso").value)
    let imc = peso / (altura * altura)
    let classificacao = ""

    if (imc < 18.5) {
        classificacao = "Abaixo do peso"
    } else if (imc < 25) {
        classificacao = "Peso normal"
    }
    else if (imc < 30) {
        classificacao = "Sobrepeso"
    }
    else if (imc < 35) {
        classificacao = "Obesidade grau I"

    } else if (imc < 40) {
        classificacao = "Obesidade grau II"
    } else {
        classificacao = "Obesidade grau III"
    }


    document.getElementById("resultado").innerHTML = 
    "Peso: " + peso.toString().replace("." , ",") + " Kg: " 
    + "<br>Altura: "+ altura.toString().replace("." , ",") + " m"
    + "<br>IMC: " + imc.toFixed(2).replace("." , ",")
    + "<br>Classificação: " + classificacao
}