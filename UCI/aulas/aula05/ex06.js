/*Crie um programa que solicite um número de 1 a 7 e informe o dia da semana.
Utilize:
1 - Domingo
2 - Segunda-feira
3 - Terça-feira
4 - Quarta-feira
5 - Quinta-feira
6 - Sexta-feira
7 – Sábado
Se o usuário digitar outro número, informe "Dia inválido". */

let opt = Number(prompt("Digite 1 a 7, correpodente aos dias da semana: "))

switch (opt) {
    case 1:
        alert(`1 - Domingo!`)
        break;
    case 2:
        alert(`2 - Segunda-Feira!`)
        break;
    case 3:
        alert(`3 - Terça-Feira!`)
        break;
    case 4:
        alert(`4 - Quarta-Feira!`)
        break;
    case 5:
        alert(`5 - Quinta-Feira!`)
        break;
    case 6:
        alert(`6 - Sexta-Feira!`)
        break;
    case 1:
        alert(`7 - Sábado!`)
        break;

    default:
    
    alert(`Dia Inválido!`)

        break;
}