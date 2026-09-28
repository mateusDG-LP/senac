function maiorNumero(num1, num2) {
    if (num1 > num2) {
        return num1 + " Número 1 é Maior do que: " + num2
    } else if (num2 > num1) {
        return num2 + " Número 2 é Maior do que: " + num1

    } else {
        return "Eles são iguais!!"
    }
}
let resultado = maiorNumero(25, 50)

console.log("O RESULTADO É: " + resultado)