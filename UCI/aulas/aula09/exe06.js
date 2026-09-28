const readlineSync = require("readline-sync")

let numeros = []
let menor = numeros[0]

for (let i = 0; i < 5; i++) {
    const numero = Number(readlineSync.question("Digite um numero: "))
    numeros.push[i]
  
}
for (let i = 1; i < numeros.length; i++)
{
    if(numeros[i] < menor)
    {
        menor = numeros[i]
    }
}
console.log("Vetor: ")
console.log(numeros)
console.log("Maior número entre eles: " + menor)
console.log("Posição do Maior Número: : " + numeros.indexOf(menor))