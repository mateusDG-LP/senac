Palavra        Pode altera valor?      Pode redeclarar?       Escopo
---------------------------------------------------------------------
 var                  Sim                    Sim            Função
 
 
 
 ## var
 É a forma antiga de declarar variáveis. Possui escopo de função, não de bloco.
 
 var nome = "Luis" // declaração da variável nome
 nome = "Paulo" // // altera valor
 
 var nome = "Henrique" // permitido redeclarar
 
 
 Um comportamento importante:
 if(true) {
    var idade = 30;
 }
 
 console.log(idade); // 30
 
 Mesmo declarada dentro do if, a variável continua acessível fora