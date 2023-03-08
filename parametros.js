// Parametros de função 
// Os parâmetros são os dados que serão utilizados para o funcionamento do programa
function soma(num1,num2){
    return num1 + num2
}

// console.log(soma(2,2))

// Parâmetros x argumentos
//  Ordem dos parâmetros

// function nomeIdade(nome,idade){
//     return `meu nome é ${nome} e minha idade é ${idade} anos`
// }
// console.log(nomeIdade("Caio Ryan",19))

function multiplica(num1 =2, num2=2){
    return num1 * num2
}
// Essa função somou os dois números passados por parâmetro primeiro e depois os multiplicou pelo número definido por parâmetro também 
console.log(multiplica(soma(4,5), soma(2,2)))