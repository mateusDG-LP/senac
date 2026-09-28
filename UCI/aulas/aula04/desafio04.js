let nome = prompt("Digite seu nome")
let idade = Number(prompt("Digite sua idade"))
let ticket  = prompt("Você tem o ingresso? (Sim/Não)")
let estudante = prompt("Você é estudante ? (Sim/Não)")


if(idade >= 18 && ticket.toLowerCase == "sim" )
{
    if(estudante.toLowerCase() == "sim"){
  alert(`Autorização CONCEDIDA!!: Nome : ${nome}, sua idade ${idade}  - Fila prioridade (Você é estudante)`)

    }else{
    alert(`Dirija-se na FILA COMUM !!`)
    }

}
else{
    alert(`Autorização NEGADA!!`)
}

if(idade < 18) {
        alert(`Você e menor de idade !!`)

}if (ticket.toLowerCase != "sim"){
    alert(`É necessario ingresso`)
}




/*    ------------------------ estudar codigo abaixo mais a frente  ----------------------------------------- 

if(idade >= 18 && ticket.toLowerCase == "sim" || estudante.toLowerCase() == "sim")
{
    alert(`Autorização CONCEDIDA!!: Nome : ${nome}, sua idade ${idade}  - Fila prioridade (Você é estudante)`)
}

else if(idade >= 18 && ticket.toLowerCase == "sim" || estudante.toLowerCase() == "não"){
        alert(`Autorização CONCEDIDA!!: Nome : ${nome}, sua idade ${idade} - Fila Comum`)

}


*/