function calcular() {
    let nome = document.getElementById("nome").value 
    let prova1 = Number(document.getElementById("prova1").value)
    let prova2 = Number(document.getElementById("prova2").value)

    // Calcula a média
    let media = (prova1 + prova2) / 2
    let situacao = ""

    if (media >= 7) {
        situacao = "Aprovação"
    }
    else if(media >= 5){
        situacao = "Recuperação"
        
    } else {
        situacao = "Reprovado"
    
    }

    document.getElementById("resultado").innerHTML = 
    "Nome: " +
    nome +
    "<br>Prova 1: " +
    prova1.toFixed(2) +
    
    "<br>Prova 2: " +
    prova2.toFixed(2) +
    
    "<br>Média: " +
    media.toFixed(2) + 
    
    "<br>Situação: " +
    situacao 
    
}