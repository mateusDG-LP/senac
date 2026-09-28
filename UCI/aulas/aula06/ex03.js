for (let index = 0; index < 5; index++) {
let nomes = prompt("Seu nome?")
let nota1 = Number(prompt("prova 1?"))
let nota2 = Number(prompt("prova 2?"))
let nota3 = Number(prompt("prova 3?"))
let media = (nota1 + nota2 +nota3)/3

    if (media >= 7) {
        console.log(`Nome: ${nomes}  - media: ${media} Aprovado , Congratulations!!`)
        
    }else if( media >= 5){
        console.log(`Nome: ${nomes} - media: ${media} Recuperação , ihhhhh!!`)
    }else{
        console.log(`Nome: ${nomes} - media: ${media} Reprovado , Reprovado !!`)
    }
    
}