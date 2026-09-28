/*Exercício 10 — Sistema bancário
Crie um programa que solicite:
•Nome do cliente 
•Saldo da conta 
Depois apresente um menu:
1. Consultar saldo
2. Depositar
3. Sacar
4. Sair
Para depósito, solicite o valor a ser depositado.
Para saque, solicite o valor e verifique se existe saldo suficiente.
O programa deve apresentar o resultado da operação.*/

let nome = prompt("Digite o nome do cliente: ")
let saldo = Number(prompt(" Digite o saldo da conta:"))
let opt = Number(prompt("Sistema bancário - Menu: \n 1 - Consultar saldo \n 2 - Depositar  \n 3 - Sacar \n 4 -Sair!!!! "))
switch (opt) {
    case 1:
        console.log(`Cliente: ${nome}`)
        console.log(`Saldo Atual: R$ ${saldo.toFixed(2)}`)
        
        
        break;
    case 2:
        let deposito = Number(prompt("Digite o valor do depósito"))
        if(deposito > 0){
            saldo += deposito
            console.log(`Depósito Realizado :\n
                 R$ ${saldo.toFixed(2)}`)
        }else{
            console.log(`Valor do Depósito: Inválido. `)
        }
       
        break;
    case 3:
        let saque = Number(prompt("Digite o valor do Saque: "))
        
        if(saque <= 0){
            console.log(`Saque Issuficiente: R$ ${saque.toFixed(2)}`)
        }else if(saque > saldo)
        {
            console.log(`Saldo Issuficiente: R$ ${saldo.toFixed(2)}`)
        }else{
            saldo -= saque
            console.log(`Saque realizado!!\n R$ ${saque.toFixed(2)}
                        Novo Saldo: R$ ${saldo.toFixed(2)}`)
        }
        break;
    case 4:
        console.log(`Obrigado por ultilizar nosso Banco !!:`)
        break;
    
    default:
        console.log(`Opção inválida`)
        break;
}