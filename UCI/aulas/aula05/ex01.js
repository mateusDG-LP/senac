/*Exercício 1 — Classificação de Idade
Crie um programa que solicite o nome e a idade de uma pessoa. Classifique a pessoa de acordo com as regras:
Menor de 12 anos : Criança
De 12 até 17 anos : Adolescente
De 18 até 59 anos : Adulto
60 anos ou mais : Idoso
Apresente o nome, a idade e a classificação. */

let nome = prompt("Digite o seu Nome:") 
let idade = Number(prompt("Digite o sua idade:"))
let classificacao 

if (idade < 12){
    classificacao = "CRIANÇA!!"
    
}else if(idade >= 12 && idade <=17 ){
    classificacao = " ADOLECENTE!! "

}else if (idade >= 18 && idade <= 59){
    classificacao = " ADULTO!! "

}else{
    classificacao = "IDOSO!!"
}
console.log(`Nome : ${nome}\n
             Idade : ${idade}\n
             Classificação : ${classificacao}`)