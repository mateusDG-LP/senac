class Funcionario{
    constructor(nome, salario, mesesTrabalhados){
        this.nome = nome
        this.salario = salario
        this.mesesTrabalhados = mesesTrabalhados

    }
    calcularTotal(){
        return this.salario * this.mesesTrabalhados
    }
    mostrarFuncionario(){
        console.log("Nome: " + this.nome)
        console.log("Salário: R$ " + this.salario)
        console.log("Quantidade de Meses de Trabalho : " + this.mesesTrabalhados)
        console.log("Nome: " + this.calcularTotal())
    }
}

let f = new Funcionario("Mateuso", 3000, 6)
f.mostrarFuncionario()