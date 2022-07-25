let valor //não inicializada
console.log(valor)

valor = null
console.log(valor) //não aponta pra nenhum local de memoria
// ERRO - console.log(valor.toString())

const produto = {}
console.log(produto.preco) // não foi definido preco