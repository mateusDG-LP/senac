function calcularParOuImpar(numero) {
    if (numero % 2 == 0) {
        return " Par " + numero
    }else {
        return " Ímpar " + numero
    }
}

console.log("Numero é: " + calcularParOuImpar(5))




/*
function Par(numero) {
    return numero % 2 == 0
}

function Impar(numero){
    return numero % 2 != 0
}

function calcularParEImpar(numero) {
    if (Par(numero) == 0) {
        return Par(numero)
    }else{
        return Impar(numero)
    }
}

let result = calcularParEImpar(35)
console.log(result)

*/