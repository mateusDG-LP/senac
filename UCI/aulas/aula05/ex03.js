let funcionario = prompt("Digitar o nome do Funcionario:")
let desempenho = Number(prompt("Nota de desempenho: 0 a 10"))
let faltas = Number(prompt("Numero de Faltas "))

if(desempenho >= 9 && faltas <= 2){
    
    console.log("Funcionario - " + funcionario)
    console.log("EXECELENTES!!!")

}else if(desempenho >= 7 && faltas <=5 ){
    
    console.log("Funcionario - " + funcionario)
    console.log("BOM!!!")

}else if(desempenho >= 5){
    

    console.log("Funcionario - " + funcionario)
    console.log("Regular!!!")

}else{
    
    console.log("Funcionario - " + funcionario)
    console.log("Insatisfatório!!")
}