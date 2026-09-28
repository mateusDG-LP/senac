function classificarTemperatura(){
    let temperatura = Number(document.getElementById("temperatura").value)
    let classificacao

    if (temperatura < 15 ) {
        classificacao = "Frio"
    }else if(temperatura < 25 ){
        classificacao = "Agradável"
    }
    else if(temperatura < 35 ){
        classificacao = "Quente"
    } else {
        classificacao = "Inferno!!"
        
    }

    document.getElementById("resultado").innerHTML = 
    "Temperatura: " + 
    temperatura + 
    "°C<br>" + 
    "Classificação: " + 
    classificacao
}