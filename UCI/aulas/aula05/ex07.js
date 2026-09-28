/*

Crie um programa que solicite o nome do motorista e o código do tipo de veículo.
Utilize:
1 - Motocicleta
2 - Carro
3 - Caminhonete
4 - Caminhão
5 – Ônibus
Apresente o nome do motorista e o tipo de veículo escolhido

*/
let motorista = prompt("Digite o nome do motorista: ")
let opt = Number(prompt("Digite de 1 a 5, o tipo de veículo: "))

switch (opt) {
    case 1:
        alert(`\nNome do motorista: ${motorista} \n 1 - Tipo do veículo: Motocicleta`)
        break;
    case 2:
        alert(`\nNome do motorista: ${motorista} \n 2 - Tipo do veículo: Carro`)
        break;
    case 3:
        alert(`\n Nome do motorista: ${motorista}\n 3 - Tipo do veículo: Caminhonete`)
        break;
    case 4:
        alert(`\n Nome do motorista: ${motorista}\n 4 - Tipo do veículo: Caminhão`)
        break;
    case 5:
        alert(`\n Nome do motorista: ${motorista}\n 5 - Tipo do veículo: Ônibus`)
        break;

    default:
        alert(`\n Nome do motorista: INVÁLIDA\n- Tipo do veículo: INVÁLIDA`)

        break;
}