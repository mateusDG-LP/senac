/*

Exercício 10 — Sistema de estacionamento
Crie um programa para um estacionamento.
Solicite:
Nome do cliente 
Tipo de veículo 
Quantidade de horas estacionadas 
O usuário deverá escolher:
1 - Moto
2 - Carro
3 - Caminhonete
4 – Caminhão
Valores por hora:
Moto : R$ 5,00 
Carro : R$ 8,00 
Caminhonete : R$ 10,00 
Caminhão : R$ 15,00 
Calcule o valor total.
Caso o veículo permaneça por mais de 8 horas, conceda 10% de desconto.

*/

// Entrada de dados
const nome = prompt("Digite o nome do cliente:");
const tipoVeiculo = Number(prompt("Escolha o tipo de veículo:\n1 - Moto\n2 - Carro\n3 - Caminhonete\n4 - Caminhão"));
const horas = Number(prompt("Digite a quantidade de horas estacionadas:"));

// Definição do valor da hora conforme a opção
let valorHora = 0;

switch (tipoVeiculo) {
  case 1:
    valorHora = 5;
    break;
  case 2:
    valorHora = 8;
    break;
  case 3:
    valorHora = 10;
    break;
  case 4:
    valorHora = 15;
    break;
  default:
    alert("Opção inválida!");
}

// Cálculo do valor total
let valorTotal = horas * valorHora;

// Aplicação do desconto de 10% para mais de 8 horas
if (horas > 8) {
  valorTotal = valorTotal * 0.9;
}

// Exibição do resultado
alert("Cliente: " + nome + "\nValor total a pagar: R$ " + valorTotal.toFixed(2));