/*Exercício 2 — Cálculo de comissão de vendedor
Uma empresa deseja calcular a comissão de seus vendedores. Solicite:
Nome do vendedor 
Valor total das vendas 
A comissão será calculada da seguinte maneira:
Até R$ 2.000 : 5%
Acima de R$ 2.000 até R$ 5.000 : 8%
Acima de R$ 5.000 até R$ 10.000 : 10%
Acima de R$ 10.000 : 12%
Apresente o nome, valor das vendas, percentual e valor da comissão. */

let nome = prompt(" Digite o nome do vendedor")
let total_vendas = Number(prompt("Digite o total de vendas: "))
let comissao 
let percentual

// FORMATADO DE PORCETAGEM
/* 
const formatador = new Intl.NumberFormat('pt-BR', {
  style: 'percent',
  maximumFractionDigits: 0 // Sem casas decimais, arredonda se necessário
});
------------ EXEMPLO ---------------------
console.log(formatador.format(0.75));  // Saída: "75%"
console.log(formatador.format(0.128)); // Saída: "13%"
*/

/*
const formatador = percentual.toLocaleString('pt-BR', {
  style: 'percent',
  minimumFractionDigits: 1, // Mínimo de casas decimais
  maximumFractionDigits: 2  // Máximo de casas decimais
});

console.log(percentual); // Saída: "45,3%"
*/

// COMISSÂO
if(total_vendas > 2000)
{
    percentual = 0.05
    comissao = total_vendas * percentual

}else if (total_vendas >= 2000 && total_vendas <= 5000){
    
    percentual = 0.08
    comissao = total_vendas * percentual

}else if( total_vendas >= 5000 && total_vendas <=10000){
    percentual = 0.10
    comissao = total_vendas * percentual
}else{
    percentual = 0.12
    comissao = total_vendas * 0.12
}

console.log(`\n Nome do Vendedor: ${nome}\n
                Valor das vendas: ${total_vendas.toFixed(2)}\n
                Percentual: ${percentual.toFixed()}
                Valor da Comissão: ${comissao.toFixed(2)}`)