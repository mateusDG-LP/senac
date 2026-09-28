function calcular() {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let operacao = document.getElementById("operacao").value

    let resultado

    switch (operacao) {
        case "1":
        resultado = num1 + num2
            
            break;
    
        case "2":
        resultado = num1 - num2
            
            break;
    
        case "3":
        resultado = num1 * num2
            
            break;
    
        case "4":
            if (num2 == 0 ) {
                resultado = "Não é possível dividir por zero."
            } else {
                resultado = num1 / num2
            }
        
            break;
    
        default:
            resultado = "Operação Inválida!!"
            break;
    }

    document.getElementById("resultado").innerHTML = "Número 1: " + 
    num1 +  "<br>Número 2: " +  num2 + 
    "<br>Resultado: " + resultado.toFixed(2)

}