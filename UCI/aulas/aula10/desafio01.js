const readlineSync = require("readline-sync")

class ContaBancaria {
    constructor(titular, numero, saldo ){
        this.titular = titular
        this.numero = numero
        this.saldo = saldo

    }

    depositar(){
        return this.saldo 
    }
    sacar(){
        return this.saldo
    }
    mostrarContar(){
        console.log("Titular: " + this.titular)
        console.log("Número: " + this.numero)
        console.log("Saldo: " + this.saldo)
        console.log("Depositado :" + this.depositar())
        console.log("Sacado :" + this.sacar())
    }
}
for (let i = 0; i < 1; i++) {
    let titular = readlineSync.question("O Nome do Títular: ")
    let numero = Number(readlineSync.question("O Numero da conta: "))
    let saldo = Number(readlineSync.question("O Saldo atual: "))
    let depositar  = Number(readlineSync.question("O Depositar: "))
    let sacar  = Number(readlineSync.question("A Sacar: "))
   
    
    let contaUsuario = new ContaBancaria(titular, numero, saldo, depositar, sacar)
    contaUsuario.mostrarContar()
}