const readlineSync = require("readline-sync")
const numeros = []

for (let i = 0; i < 5; i++) {
    numeros.push(Number(readlineSync.question(`Digite o ${i + 1}º numero: `)))
}
// Solução simplificada!!
// const media = numeros.reduce((acc, n) => acc + n, 0) / numeros.length;
//console.log("Média:", media.toFixed(2));

// UM for para somar (ou use reduce)

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log("Média:", (soma / numeros.length).toFixed(2));
console.log("Vetor:", numeros);
