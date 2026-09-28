// Positivo ou Negativo
const readlineSync = require("readline-sync")
let num1 = Number(readlineSync.question("Digite um número: "))

if(num1 >= 0)
{
    console.log(" Número positivo:  " + num1)
}else{
    console.log(" Número negativo " + num1)
}

let nota = Number(readlineSync.question("Digite sua nota Aluno: "))

if(nota >= 6)
{
    console.log(" Aprovado ")
}else{
    console.log(" Reprovado ")
}

let senha = Number(readlineSync.question("Digite a Senha: "))

if(senha == 1234)
{
    console.log("Acesso Permitido")
}else{
    console.log("Acesso Negado")
}

let desconto = Number(readlineSync.question(" Digite o preço do produto: "))

if(desconto >= 100)
{
    console.log(" Você ganhou desconto " + desconto)
}else{
    console.log(" Essa compra não possui desconto ")
}