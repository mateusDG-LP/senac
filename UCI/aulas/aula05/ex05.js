let nome = prompt(" Nome: ")
let salario = Number(prompt(" Salário : "))
let idade = Number(prompt(" Idade : "))
let solicitado = Number(prompt(" Valor solicitado: "))
let qtd_parcelas = Number(prompt(" Digite o número de parcelas "))


if(idade >= 21 && idade <= 60){
    console.log("Empréstimos Autorizado!!")
    
}else{
    console.log("Empréstimos NEGADO!!")
}



let  parcela = salario *  0.30
let  limite_parcelas = solicitado / qtd_parcelas

if(solicitado <= 50000 ){

}

if(parcela > qtd_parcelas){
}




    console.log("Nome: " + nome)
    console.log("Parcelas: R$ " + parcela )
    console.log("Quantidade de parcelas: " + qtd_parcelas + "x")
  

