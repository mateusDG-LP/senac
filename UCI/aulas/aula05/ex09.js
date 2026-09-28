/*

Exercício 9 — Nível de acesso ao sistema
Uma empresa possui diferentes níveis de acesso ao sistema. Solicite:
• Nome do usuário 
• Código do nível de acesso 
Utilize:
1 - Administrador
2 - Gerente
3 - Supervisor
4 - Funcionário
5 – Visitante
Mostre o nome do usuário, o nível de acesso e uma mensagem informando o que ele pode fazer.

*/

let usuario = prompt("Nome do usuário: ")
let acesso = Number(prompt
(`
1 - Administrador
2 - Gerente
3 - Supervisor
4 - Funcionário
5 – Visitante 
`))


switch (acesso) {
    case 1:
        console.log(` 1 - ADM : Acesso total ao sistema!! `)
        break;

    case 2:
        console.log(` 2 - GERENTE : Acesso aos sistemas, supervisor e funcionario !! `)
        break;

    case 3:
        console.log(` 3 - Supervisor : Acesso total ao sistema do Funcionario!! `)
        break;

    case 4:
        console.log(` 4 - Funcionario : Acesso ao sistema e suas proprias funcionalidade!! `)
        break;

    case 5:
        console.log(` 5 - VISITANTE : Acesso NEGADO!! ao sistema!! `)
        break;

    default:
        console.log(` - OPERAÇÃO INVÁLIDA - `)
        break;
}