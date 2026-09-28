const readlineSync = require("readline-sync")

let idade = Number(readlineSync.question(" Digite a idade:  "))

if (idade < 18)
{
    console.log(" Menor idade " + idade)
}else if (idade >= 18)
{
    console.log("idade Adulta")
}else if (idade <= 59)
{
    console.log("idade Adulta")
}else if(idade >= 60 )
{
    console.log(" Uma Lenda!!")
}
else{
    console.log("Valor Não compativel!!")
}
//////////////////////////////////

let nota = Number(readlineSync.question(" Digite a Nota do Aluno "))

if ( nota >= 7)
{
    console.log(" Aprovado !! ")
}else if(nota > 5 )
{
    console.log("Recuperação")
}else if (nota < 69)
{
    console.log(" Recuperação!! ")
}else if (nota < 5 )
{
    console.log(" Reprovado!!")
}else{
    console.log(" Valor não atribuido corretamente!!")
}

///////////////////////////////////////////////

let grau = Number(readlineSync.question(" Digite o graus Celsius"))

if(grau <= 15)
{
    console.log(" Frio!! ")
}else if(grau >= 15)
{
    console.log(" Agrádavel!! ")
}else if (grau <= 29)
{
    console.log(" Agrádavel!! ")
}
else if (grau <= 30)
{
    console.log(" Quente!!")
}else{
    console.log("Valor não atribuido !!")
}