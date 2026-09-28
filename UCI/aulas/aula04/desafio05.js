let nome = prompt("Digite o nome do cliente: ")
let salario = Number(prompt("Digite o Salário:"))
let valor_parcela = Number(prompt("Digite o valor da parcela:"))
let num_parcelas = Number(prompt("Número de parcelas"))

let salario_final 
let limite_parcelas = salario * 0.30

// if(valor_parcela >= 0.30 && )
if(valor_parcela <= limite_parcelas && num_parcelas <= 60 )
{
    alert(`parcelamento em concedido!!
        \n Cliente: ${nome} 
        \n Valor da Parcela: ${valor_parcela.toFixed(2)}
        \n Quantidades de Parcelas: ${num_parcelas.toFixed(2)} `)
}
else{
    alert(`parcelamento em NEGADO !!
        \n Cliente: ${nome}`)
}

if(valor_parcela > limite_parcelas){
    
    alert(`A parcela ULTRAPASSA 30% do sálario.`)
}

if(num_parcelas > 60){
    
    alert(`A quantidade de parcela ULTRAPASSA 60x.`)
}