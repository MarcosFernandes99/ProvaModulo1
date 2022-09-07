// Parte 1
let valor = prompt("Insira um valor inteiro e positivo")
console.log(VerificarNumero(valor))
function VerificarNumero(valorParametro){
    if(valorParametro % 2 == 0){
        return true
    }
    else{
        return false
    }
}