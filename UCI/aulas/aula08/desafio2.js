function classificarIdade(){
    let idade = Number(document.getElementById("idade").value)
    let classificacao

    if (idade < 13) {
        classificacao = "Criança"
    }else if(idade < 18){
        classificacao = "Adolescente"
    }else if (idade < 60){
        classificacao = "Adulto"
    }else{
        classificacao = "Melhor Idade"
    }

    document.getElementById("resultado").innerHTML =
    "Idade: " + idade + " anos<br> " + "Classsificação: " + classificacao
}