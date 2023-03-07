// Conversão implicita

const numero = 456
const numeroString = Number("456")


//Se usa o objeto Number() para converter uma string em um número
//Se usa o objeto String() para converter um número em uma String
//Ambos podem ser usados na declaração da variável ou dentro do console.log como no exemplo abaixo


// Conversão explícita
console.log(numero + Number(numeroString))

// Outras formas de conversão usando String()

console.log(String(numero))

console.log(numero.toString)

// Outras formas de conversão usando Number()
// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação


