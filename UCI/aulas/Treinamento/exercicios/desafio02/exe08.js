/*
Exercício 04:
Encontrar o maior valor da matriz
O programa solicita 9 números, armazena-os em uma
matriz 3x3 e informa qual é o maior valor digitado.

*/

const readlineSync = require("readline-sync");

// ==========================================
// PARTE 1: PREENCHER A MATRIZ 3x3
// ==========================================
const matriz = [];

console.log("--- PREENCHENDO A MATRIZ 3x3 ---");

for (let i = 0; i < 3; i++) {
    const linha = [];
    
    for (let j = 0; j < 3; j++) {
        const numero = Number(readlineSync.question(`Digite o valor para a posicao [${i + 1}][${j + 1}]: `));
        linha.push(numero);
    }
    
    matriz.push(linha);
}

// ==========================================
// PARTE 2: ENCONTRAR O MAIOR VALOR
// ==========================================

// 1. Começamos assumindo que o maior valor é o primeiro elemento da matriz
let maiorValor = matriz[0][0];

// 2. Percorremos a matriz inteira para comparar
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        
        // 3. Se o valor atual for MAIOR que o nosso 'maiorValor', atualizamos
        if (matriz[i][j] > maiorValor) {
            maiorValor = matriz[i][j];
        }
    }
}

// 4. Mostra o resultado
console.log("\n--- RESULTADO ---");
console.log("Matriz cadastrada:", matriz);
console.log("O maior valor digitado foi:", maiorValor);