let nome = prompt("Digite nome do funcionario: ")
let salario = Number(prompt("Digite o Salário: "))
let tempo_empresa = Number(prompt("Digite o tempo que está na empresa: "))

let percentual


if(tempo_empresa < 2 ){
    percentual =  0.05
    // bonus = salario * percentual
    // alert(`Ò tempo de empresa: ${tempo_empresa}, \n Salario final com Bônus: ${salario_final}`)

}else if (tempo_empresa >= 2 && tempo_empresa <= 5 ){
    percentual = 0.10
    //bonus = salario * percentual
    // alert(`Ò tempo de empresa: ${tempo_empresa}, \n Salario final com Bônus: ${salario_final}`)
}else{
    percentual =  0.15
     // bonus = salario * percentual
// alert(`Ò tempo de empresa: ${tempo_empresa}, \n Salario final com Bônus: ${salario_final}`)
}

let bonus = salario * percentual
let salario_final = bonus + salario


document.write(`Nome do funcionario : ${nome}, \n Salário R$: ${salario.toFixed(2)}, \n Bônus R$ ${bonus.toFixed(2)}`)
document.write(`Ò tempo de empresa: ${tempo_empresa}, \n Salario final com Bônus: R$ ${salario_final.toFixed(2)}`)