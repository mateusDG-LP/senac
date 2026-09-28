let num1 = Number(prompt("Digite nota 1:"))
let num2 = Number(prompt("Digite nota 2:"))
let opt = Number(prompt("Digite 1 opção: \n 1 - Soma , \n 2 - Subtrair, \n 3 - Multiplicar \n 4 - Divisão \n 5 - Resto da divisão"))
let calcular

switch (opt) {  
    case 1:
        console.log(`O Resultado da Adição `)
        calcular = num1 + num2
        console.log(`Resultado: ${calcular}`)
        break;
    case 2:
        console.log(`O Resultado da Subtração `)
        calcular = num1 - num2
        console.log(`Resultado: ${calcular}`)
        break;
    case 3:
        console.log(`O Resultado da Multiplicação `)
        calcular = num1 * num2
        console.log(`Resultado: ${calcular}`)
        break;
    case 4:
        console.log(`O Resultado da Divisão `)
        if (num2 != 0) {
            calcular = num1 / num2
            console.log(`Resultado: ${calcular}`)
        }

        else {
            console.log(`não é possivel dividir por ZERO!!`)
        }

        break;
    case 5:
        if (num2 != 0) {
            calcular = num1 % num2
            console.log(`O Resto da divisão \n - Resultado: ${calcular}`)
        }
        else {
            console.log(`não é possivel dividir por ZERO!!`)
        }
        break;
    default:
        console.log(`Operação Inválida !!`)
        break;
}