/*Exercício 03:
Soma de todos os elementos da matriz
O programa solicita 9 números ao usuário, armazena os
valores em uma matriz 3x3 e calcula a soma de todos os
elementos. */

const readlineSync = require("readline-sync");

// 1. Criamos a matriz principal (vazia por enquanto)
const matriz = [];

console.log("--- PREENCHENDO A MATRIZ 3x3 ---");

// 2. Loop para as LINHAS (vamos ter 3 linhas)
for (let i = 0; i < 3; i++) {
    // Criamos um array vazio para representar a linha atual
    const linha = []; 
    
    // 3. Loop para as COLUNAS (3 números em cada linha)
    for (let j = 0; j < 3; j++) {
        // Pede o número. Repare no i+1 e j+1 para mostrar a posição bonitinha pro usuário
        const numero = Number(readlineSync.question(`Digite o valor para a posicao [${i + 1}][${j + 1}]: `));
        
        // Adiciona o número na linha atual
        linha.push(numero); 
    }
    
    // 4. Terminou de montar a linha, coloca ela dentro da matriz principal
    matriz.push(linha); 
}

// ==========================================
// PARTE 2: CALCULAR A SOMA DE TUDO
// ==========================================

// 5. Criamos a variável que vai guardar a soma total
let somaTotal = 0;

// 6. Loop para percorrer as LINHAS
for (let i = 0; i < matriz.length; i++) {
    
    // 7. Loop para percorrer as COLUNAS da linha atual
    for (let j = 0; j < matriz[i].length; j++) {
        // Soma o valor que está na posição atual na nossa soma total
        somaTotal += matriz[i][j];
    }
}

// 8. Mostra o resultado final
console.log("\n--- RESULTADO ---");
console.log("Matriz cadastrada:", matriz);
console.log("A soma de todos os elementos e:", somaTotal);