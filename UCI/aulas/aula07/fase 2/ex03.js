function tabuada() {
    let numero = Number(document.getElementById("numero").value)
    let resultado = 0
    let i = 0

    while (i <=10) {
        resultado += numero + " X " + i + " = " + (numero * i) + "</br>"
        i++        
    }
    document.getElementById("resultado").innerHTML = resultado
}