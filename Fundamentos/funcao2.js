//Armazenando função em uma variável
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(3,4)

//Armazenando uma função arrow (seta é igual a "function")
const soma = (a, b) => {
    return a + b
}

console.log(5,6)

//mesma coisa que o de cima, só que mais reduzido
const subtracao = (a, b ) => a - b
console.log(subtracao(6,7))