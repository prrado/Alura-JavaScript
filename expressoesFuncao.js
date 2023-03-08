// Outra forma de se criar funções
// Ao guardar uma função em uma variável é impossivel usa-la antes de declara-la, ja as funções normais não tem esse problema
//  e isso se da porque em JavaScript a variável é primeiro criada e depois é atribuido o seu valor 

const soma = function (num1,num2){
    return num1 + num2
}
console.log(soma(2,2))



console.log(apresentar())   
// Diferença principal 
function apresentar(){
    return "Olá"
}


