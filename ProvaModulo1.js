// Parte 3 (CONCLUÍDA)
let numeroA = prompt("Insira um numero")
let numeroB = prompt("Insira um numero")
console.log(VerficarNumero(numeroA, numeroB))

function VerficarNumero(numeroAparametro, numeroBparametro){
    if(numeroAparametro % 2 == 0 && numeroBparametro > 5){
        return true
    }
    else{
        return false
    }
}

// Parte 2 (FALTA TERMINAR)
// let numero = prompt("Insira um número")
// FazerSoma(numero)
// let total = 0
// console.log(total)

// function FazerSoma(valorParametro){
//     for(let index = 0; index <= valorParametro; index++){
//         return total = index + 1
//     }
// }


// // Parte 1 (CONCLUÍDA)
// let valor = prompt("Insira um valor inteiro e positivo")
// console.log(VerificarNumero(valor))
// function VerificarNumero(valorParametro){
//     if(valorParametro % 2 == 0){
//         return true
//     }
//     else{
//         return false
//     }
// }