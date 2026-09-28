let nome = prompt("Digite o nome do cliente : ")
let opt = Number(prompt(" Cliente: "+ nome + "Digite, essas opções \n 1 - Suporte técnico! \n 2 - Financeiro!! \n 3 - Comercial!!! \n 4 - Recursos Humanos !!!! \n 5 - Sair !!!!!"))

switch (opt) {
    case 1:
        alert(`${nome} - Encaminhado para o Suporte técnico!`)
        break;
    case 2:
        alert(`${nome} - Encaminhado para o Financeiro!!`)
        break;
    case 3:
        alert(`${nome} - Encaminhado para o Comercial!!!`)
        break;
    case 4:
        alert(`${nome} - Encaminhado para o Recursos Humanos !!!!`)
        break;
    case 5:
        alert(`Atendimento encerrado !!!!!`)
        break;
    default:
        alert(`Opção invalida !!!!!`)
        break;
}