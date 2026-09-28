const readlineSync = require("readline-sync");
const vetor = [];
const vetorPares = [];   // <--- Vetor para guardar os números pares
const vetorImpares = []; // <--- Vetor para guardar os números ímpares

// 1. Loop de preenchimento do vetor principal
for (let i = 0; i < 10; i++) {
    let numero = Number(readlineSync.question(`Digite o ${i + 1} o numero: `));
    vetor.push(numero);
}

// 2. Loop para separar os números
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 === 0) {
        vetorPares.push(vetor[i]);   // Guarda o número no vetor de pares
    } else {
        vetorImpares.push(vetor[i]); // Guarda o número no vetor de ímpares
    }
}

// 3. Exibe a contagem E a lista de números
console.log(`\nQuantidades de Números: ${vetor.length} total: [ ${vetor.join(", ")} ]`);
console.log(`\nQuantos números são pares: ${vetorPares.length} total: [ ${vetorPares.join(", ")} ]`);
console.log(`Quantos números são ímpares: ${vetorImpares.length} total: [ ${vetorImpares.join(", ")} ]`);
