/*Exercício 9 — Plano de celular
Uma operadora possui quatro planos:
1. Básico R$ 39,90
2. Intermediário R$ 59,90
3. Avançado R$ 79,90
4. Premium R$ 99,90
Solicite:
• Nome do cliente 
• Opção do plano 
O programa deverá apresentar o nome do cliente, o plano escolhido 
e o valor mensal */
let nome = prompt("Digite o nome do cliente:")
let opt = Number(prompt("Os Planos da operadoras \n 1 - Básico R$ 39,90! \n 2 - Intermediário R$ 59,90  \n 3 - Avançado R$ 79,90 \n 4 -Premium R$ 99,90 !!!! "))
let nomePlano
let valor
switch (opt) {
    case 1:
        nomePlano = "Básico"
        valor = 39.90
        break;
    case 2:
        nomePlano = "Intermediário"
        valor = 59.90
        break;
    case 3:
        nomePlano = "Avançado"
        valor = 79.90
        break;
    case 4:
        nomePlano = "Premium"
        valor = 99.90
        break;
    
    default:
        nomePlano = "Plano Inválido!!"
        valor = 0
        break;
}

    if(valor > 0){
        console.log(`Cliente: ${nome}`)
        console.log(`Plano escolhido: ${nomePlano}`)
        console.log(`Valor do Plano: ${valor.toFixed(2)}`)
        
    }else{
        console.log(`Plano Inválido!!`)
    }