// Parte 4
let A = prompt("Insira um numero")
let B = prompt("Insira um numero")
let C = prompt(`Insira um numero`)
let array = []
OrdenarArray(A, B, C)
function OrdenarArray(Aparametro, Bparamentro, Cparametro){
    array[0] = Aparametro
    array[1] = Bparamentro
    array[2] = Cparametro
    contador = 3

    for(let atual = 0; atual < contador - 1; atual++){
        for(let seguinte = atual +1; seguinte < contador; seguinte++){
            arrayAux = array[seguinte]
            if(array[atual] > array[seguinte]){
                array[seguinte] = array[atual]
                array[atual] = arrayAux
            }
        }
    }
        console.log(array)
}


// Parte 3 (CONCLUÍDA)
// let numeroA = prompt("Insira um numero")
// let numeroB = prompt("Insira um numero")
// console.log(VerficarNumero(numeroA, numeroB))

// function VerficarNumero(numeroAparametro, numeroBparametro){
//     if(numeroAparametro % 2 == 0 && numeroBparametro > 5){
//         return true
//     }
//     else{
//         return false
//     }
// }

// Parte 2 (CONCLUÍDA)
// let numero = prompt("Insira um número")
// let total = 0
// FazerSoma(numero)
// console.log(total)

// function FazerSoma(valorParametro){
//     for(let index = 0; index <= valorParametro; index++){
//          total = total + index    
//     }        
//     return total
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