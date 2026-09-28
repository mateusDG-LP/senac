/*
Exercício 8 — Mês do ano
Crie um programa que solicite o número correspondente a um mês e apresente:
Nome do mês 
Quantidade de dias 
Considere:
1 - Janeiro
2 - Fevereiro
3 - Março
...
12 – Dezembro
Para fevereiro, considere 28 dias. 

*/

let mes = Number(prompt("Escolha de 1 a 12, o Mês será correspondido exibido conforme selecionar"))

switch (mes) {
    case 1:
        alert(`1 - Janeiro, com 31 dias`)
        break;
    case 2:
        alert(`2 - Fevereiro, com 28 dias`)
        break;
    case 3:
        alert(`3 - Março, com 31 dias`)
        break;
    case 4:
        alert(`4 - Abril, com 30 dias`)
        break;
    case 5:
        alert(`5 - Maio, com 31 dias`)
        break;
    case 6:
        alert(`6 - Junho, com 30 dias`)
        break;
    case 7:
        alert(`7 - Julho, com 31 dias`)
        break;
    case 8:
        alert(`8 - Agosto, com 31 dias`)
        break;
    case 9:
        alert(`9 - Setembro, com 30 dias`)
        break;
    case 10:
        alert(`10 - Outubro, com 31 dias`)
        break;
    case 11:
        alert(`11 - Novembro, com 30 dias`)
        break;
    case 12:
        alert(`12 - Dezembro, com 31 dias`)
        break;

    default:
                alert(`- Mês inválido, com -- dias`)

        break;
}