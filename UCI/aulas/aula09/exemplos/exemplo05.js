// Armazenar 10 números em vetor
// mostrar os números
// mostrar o maior entre eles

const readlineSync = require("readline-sync")
let numeros = []

for (let i = 0; i< 10; i++) {
    const numero = Number(readlineSync.question("Digite um numero: "))
    numeros.push(numero)
    
}
let maior = numeros[0]
for (let i = 1; i < numeros.length; i++)
{
    if(numeros[i] > maior)
    {
        maior = numeros[i]
    }
}
console.log("Vetor: ")
console.log(numeros)
console.log("Maior número entre eles: " + maior)
console.log("Posição do Maior Número: : " + numeros.indexOf(maior))