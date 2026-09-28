/* Exercício 03:
Calcular a média de 5 números
Crie um programa que leia 5 números, armazene-os em um vetor e calcule
a média. */

const readlineSync = require("readline-sync");

const numeros = [];
let soma = 0;

// 1. Lê os 5 números e armazena no vetor
for (let i = 0; i < 5; i++) {
    let num = Number(readlineSync.question(`Digite o ${i + 1} o numero: `));
    numeros.push(num);
}

// 2. Percorre o vetor para somar todos os valores
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

// 3. Calcula e mostra a média
const media = soma / numeros.length;

console.log(`\nNúmeros digitados: [ ${numeros.join(", ")} ]`);
console.log(`A média dos números é: ${media.toFixed(2)}`);
