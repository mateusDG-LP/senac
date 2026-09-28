/*Exercício 04:
Contar números positivos e negativos
Crie um programa que leia 5 números, armazene-os em um vetor e
informe:
Quantos números são positivos;
Quantos números são negativos;
Quantos números são iguais a zero */

const readlineSync = require("readline-sync")

const numerosTotais = []
const positivos = []
const negativos = []
const iguaisZero = []

for (let i = 0; i < 5; i++) {
    let num = Number(readlineSync.question(`Digite ${i + 1} numero:`))
    numerosTotais.push(num)
}

for (let i = 0; i < numerosTotais.length; i++) {
    if (numerosTotais[i] > 0) {
        positivos.push(numerosTotais[i])
    } else if (numerosTotais[i] < 0) {
        negativos.push(numerosTotais[i])
    } else {
        iguaisZero.push(numerosTotais[i])
    }

}

// 3. Exibe a contagem E a lista de números
console.log(`\nQuantidades de Números: ${numerosTotais.length} total: [ ${numerosTotais.join(", ")} ]`);
console.log(`\nQuantos números são Positivos: ${positivos.length} total: [ ${positivos.join(", ")} ]`);
console.log(`Quantos números são Negativos: ${negativos.length} total: [ ${negativos.join(", ")} ]`);
console.log(`Quantos números são Iguais a Zero: ${iguaisZero.length} total: [ ${iguaisZero.join(", ")} ]`);