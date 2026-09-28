let rotinas = Number(prompt(
    "Escolha as Devidas Rotinas: " +
    "\n 1 - Verificar se esse número é par ou ímpar: " +
    "\n 2 - Escolher 2 valores: " +
    "\n 3 - Cáculando o dobro:  "))

switch (rotinas) {
    case 1:
        let num1 = Number(prompt("Digite um número: "))
        let total = num1 % 2
        if (total == 0) {
            //console.log("Par")
            document.write("<p> <strong>E o valor PAR é:</strong>" + num1 + "</p>")

        } else {
            document.write("<p> <strong>E o valor ÍMPAR é:</strong>" + total + "</p>")
        }
        break;
    case 2:
        let numero1 = Number(prompt(" Digite 1 numero:  "))
        let numero2 = Number(prompt(" Digite 2 numero:  "))

        if (numero1 > numero2) {
            document.write("<p><strong> O resultado MAIOR número : </strong>" + num1 + "</p>")


        } else {
            document.write("<p><strong> O resultado MAIOR número : </strong>" + num2 + "</p>")

        }
        break;

    case 3:
        let num_1 = Number(prompt(" Digite 1 numero e ele será Dobrado: "))

        let dobro = num_1 * 2
        
        document.write("<p><strong> O  do Dobro é : </strong>" + dobro +"</p>")

        break;

    default:
        break;
}