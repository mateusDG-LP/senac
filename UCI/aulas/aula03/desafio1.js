let nome = prompt("Digite seu nome: ")
let salario_bruto = parseFloat(prompt("Digite seu salário: "))

// INSS
let inss

if (salario_bruto >= 3000) {
    inss = salario_bruto * 0.11
} else if (salario_bruto >= 2000) {
    inss = salario_bruto * 0.09
} else {
    inss = salario * 0.08
}


// Vale transporte

let vale_transporte


if (salario_bruto >= 2000) {
    vale_transporte = salario_bruto * 0.06
} else {
    vale_transporte = salario * 0.05
}

// Bonus
let bonus
if (salario_bruto >= 3000) {
    bonus = 300
} else {
    bonus = 200
}

// Cargo
let cargo
if (salario_bruto >= 3000) {
    cargo = "Acionista"
} else if (salario_bruto >= 2000) {
    cargo = "Gerente"
} else {
    cargo = "Vendedor"
}

// Salário líquido
let salario_liquido = salario_bruto - (inss + vale_transporte) + bonus

// Exibição no Html
