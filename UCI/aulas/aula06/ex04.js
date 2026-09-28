var rs = require('readline-sync');


let continuar = rs.question("Digitar:\n sim / não ")

while (continuar.toLocaleLowerCase() == "sim") {
    let opt = rs.questionInt(`Selecione a Opção:\n
    1 – escolha um número diga se é par ou ímpar\n
    2 – escolha dois valores e diga quem é o maior entre eles ou se são iguais.\n
    3 – escolha um valor e calcule o dobro mostrando para o resultado para o usuário.
    `)


    switch (opt) {
        case 1:
            let num = rs.questionInt(" Digite um número: ")
            console.log(`<h3>Opção 1 - Par ou Impar</h3>`)
            console.log(`Número escolhido: ${num}`)
            if (num % 2 == 0) {
                console.log(`Resultado:\n o número: ${num} é PAR`)

            } else {
                console.log(`Resultado:\n o número: ${num} é ÍMPAR`)

            }
            break;

        case 2:
            let valor1 = rs.questionInt(`Digite o primeiro valor: `)
            let valor2 = rs.questionInt(`Digite o primeiro valor: `)
            console.log(`<h3>Opção 2 - Maior valor </h3>`)
            console.log(`Primeiro valor escolhido: ${valor1}<br>`)
            console.log(`Segundo valor escolhido: ${valor2}<br>`)



            if (valor1 > valor2) {
                console.log(`Resultado: \n o maior valor é: ${valor1}`)

            } else if (valor2 > valor1) {
                console.log(`Resultado: \n o maior valor é: ${valor2}`)
            } else {
                console.log(`Resultado: \n os dois valores são iguais`)
            }
            break;

        case 3:
            let valor = rs.question("Digite um valor: ")
            let dobro = valor * 2
            console.log(`<h3>Opção 3 - O Dobro </h3>`)
            console.log(`Valor escolhido: ${valor}<br>`)
            console.log(`Dobro do valor: ${dobro}<br>`)
            break;

        default:
            console.log(`<h2>Opção  Inválida! </h2>`)
            console.log(`Escolha a opções entre 1 a 3 .<br>`)
            break;
    }

    console.log(`<hr>`)
    continuar = rs.question("Deseja continuar testando aplicação?\n (sim/não)")
}
console.log(`</h1> Programa encerrado !!<h1>`)
