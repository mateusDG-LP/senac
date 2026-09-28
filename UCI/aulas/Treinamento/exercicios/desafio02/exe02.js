/*Exercício 02:
Calcular a média das notas
Crie um programa que armazene as notas de 5 alunos em um vetor.
Depois:
Calcule a média das notas;
Mostre todas as notas;
Informe quais notas estão acima da média: */

const readlineSync = require("readline-sync");
const notas = [];

// 1. Loop para armazenar as notas de 5 alunos no vetor
for (let i = 0; i < 5; i++) {
    let nota = Number(readlineSync.question(`Digite a nota do ${i + 1} o aluno: `));
    notas.push(nota);
}

// 2. Calcula a média geral de todas as notas do vetor
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
let mediaGeral = soma / notas.length;

// 3. Mostra todas as notas e a média calculada
console.log(`\nTodas as notas: [ ${notas.join(", ")} ]`);
console.log(`Média geral das notas: ${mediaGeral.toFixed(2)}`);

// 4. Descobre e informa quais notas estão acima da média geral
console.log("\nNotas acima da média geral:");
for (let i = 0; i < notas.length; i++) {
    if (notas[i] > mediaGeral) { // Verifica cada nota individualmente
        console.log(`-> Aluno ${i + 1}: Nota ${notas[i]}`);
    }
}
