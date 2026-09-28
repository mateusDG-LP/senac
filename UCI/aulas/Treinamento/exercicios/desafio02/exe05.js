/*Exercício 01:
Matriz com notas de alunos
Neste exemplo, o programa solicita as notas de 3 alunos,
sendo 2 notas para cada aluno. */
const readlineSync = require("readline-sync");

// 1. Criamos a matriz principal (o array que vai conter os alunos)
const alunos = [];

// 2. Loop para os 3 alunos
for (let i = 0; i < 3; i++) {
    console.log(`\n--- Aluno ${i + 1} ---`);
    
    // Criamos um array vazio para armazenar as 2 notas DESTE aluno
    const notasDoAluno = []; 

    // 3. Loop para as 2 notas de cada aluno
    for (let j = 0; j < 2; j++) {
        // Solicitamos a nota
        const nota = Number(readlineSync.question(`Digite a ${j + 1}ª nota: `));
        
        // Adicionamos a nota no array do aluno
        notasDoAluno.push(nota);
    }

    // 4. Após ler as 2 notas, adicionamos o array de notas na matriz principal
    alunos.push(notasDoAluno);
}

// 5. Exibindo os resultados para conferir
console.log("\n--- Notas Cadastradas ---");
console.log(alunos);