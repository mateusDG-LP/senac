/*Exercício 02:
Matriz de notas e cálculo da média
Neste programa, o usuário informa as notas de 3 alunos,
com 2 notas para cada aluno. O programa calcula a
média de cada aluno. */

const readlineSync = require("readline-sync");

// ==========================================
// PARTE 1: CADASTRAR AS NOTAS (Preencher a Matriz)
// ==========================================
const alunos = [];

console.log("--- CADASTRO DE NOTAS ---");
// Loop 1: Passa por cada um dos 3 alunos
for (let i = 0; i < 3; i++) {
    console.log(`\nAluno ${i + 1}:`);

    const notasDoAluno = []; // Cria um array vazio para as notas DESTE aluno

    // Loop 2: Pede as 2 notas para o aluno atual
    for (let j = 0; j < 2; j++) {
        const nota = Number(readlineSync.question(`  Digite a ${j + 1}a nota: `));
        notasDoAluno.push(nota); // Guarda a nota no array do aluno
    }

    // Terminou de pegar as 2 notas, guarda o array do aluno na matriz principal
    alunos.push(notasDoAluno);
}

// ==========================================
// PARTE 2: CALCULAR E MOSTRAR AS MÉDIAS
// ==========================================
console.log("\n--- RESULTADO FINAL ---");

// Loop 3: Passa por cada aluno novamente (agora para ler os dados)
for (let i = 0; i < alunos.length; i++) {
    let soma = 0; // Zera a soma para começar a somar as notas DESTE aluno

    // Loop 4: Passa por cada nota do aluno atual
    for (let j = 0; j < alunos[i].length; j++) {
        // Soma a nota na variável 'soma'
        soma += alunos[i][j];
    }

    // Calcula a média
    const media = soma / alunos[i].length;

    // Mostra o resultado na tela
    console.log(`Aluno ${i + 1}: Notas = [${alunos[i]}] -> Média = ${media.toFixed(1)}`);
}