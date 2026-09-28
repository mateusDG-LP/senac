const readlineSync = require("readline-sync")
class Funcionario {
    constructor(nome, salario, mesesTrabalhados) {
        this.nome = nome
        this.salario = salario
        this.mesesTrabalhados = mesesTrabalhados

    }
    calcularTotal() {
        return this.salario * this.mesesTrabalhados
    }
    mostrarFuncionario() {
        console.log("Nome: " + this.nome)
        console.log("Salário: R$ " + this.salario)
        console.log("Quantidade de Meses de Trabalho : " + this.mesesTrabalhados)
        console.log("Total de Mese trabalhados: " + this.calcularTotal())
    }
}
for (let i = 1; i <= 3; i++) {
    console.log("Produto: " + i + "\n")
    let nome = readlineSync.question("Nome do Funcionario: ")
    let salario = Number(readlineSync.question("salario: ").replace(",", "."))
    let mesesTrabalhados = Number(readlineSync.question("Mese Trabalhados: "))

    let f = new Funcionario(nome, salario, mesesTrabalhados)
    f.mostrarFuncionario()
}


