let nome_produt = prompt(" Digite o Seu nome: ")
let code_categoria = Number(prompt(" Digite Código de da categoria "))
let opt = Number(prompt("Digite, essas opções \n 1 - Suporte técnico! \n 2 - Financeiro!! \n 3 - Comercial!!! \n 4 - Recursos Humanos !!!! \n 5 - Sair !!!!!"))

switch (opt) {
    case 1:
        alert(`Eletronicos! Nome do produto: ${nome_produt} e Código da categoria: ${code_categoria} `)
        break;
    case 2:
        alert(`Informática! Nome do produto: ${nome_produt} e Código da categoria: ${code_categoria} `)
        break;
    case 3:
        alert(`Vestuário! Nome do produto: ${nome_produt} e Código da categoria: ${code_categoria} `)
        break;
    case 4:
        alert(`Alimentos! Nome do produto: ${nome_produt} e Código da categoria: ${code_categoria} `)
        break;
    case 5:
        alert(`Limpeza! Nome do produto: ${nome_produt} e Código da categoria: ${code_categoria} `)
        break;
    default:
        break;
}