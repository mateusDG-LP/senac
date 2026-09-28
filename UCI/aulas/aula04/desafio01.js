let nome = prompt(" Digite o nome do aluno :")
let nota1 = Number(prompt("Nota 1: "))
let nota2 = Number(prompt("Nota 2: "))
let nota3 = Number(prompt("Nota 3: "))

let media = (nota1 + nota2 + nota3)/ 2

if(media >= 7){
    alert(`Você está Aprovado: \n Nota 1: ${nota1},\n Nota 2: ${nota2}, \n Nota 3: ${nota3}, \n Média: ${media} `)
}else if(media >= 5 && media <= 6.9) {
    alert(`Você está Recuperação: \n Nota 1: ${nota1},\n Nota 2: ${nota2}, \n Nota 3: ${nota3}, \n Média: ${media}`)
}else{
    alert(`Você está Reprovado: \n Nota 1: ${nota1},\n Nota 2: ${nota2}, \n Nota 3: ${nota3}, \n Média: ${media} `)
}